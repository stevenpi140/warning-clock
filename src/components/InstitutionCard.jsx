function StatusBadge({ status }) {
  const colors = {
    paralyzed: { bg: '#8b0000', text: '#fff' },
    'at-risk': { bg: '#b8860b', text: '#fff' },
    overdue: { bg: '#4a0000', text: '#ff4444' },
  }
  const c = colors[status] || colors.paralyzed
  return (
    <span
      className="status-badge"
      style={{ background: c.bg, color: c.text }}
    >
      ●
    </span>
  )
}

function ProgressBar({ filled, total, color }) {
  const pct = total > 0 ? (filled / total) * 100 : 0
  return (
    <div className="progress-bar">
      <div
        className="progress-bar__fill"
        style={{ width: `${pct}%`, background: color }}
      />
    </div>
  )
}

function CountdownToDeadline({ date }) {
  const [remaining, setRemaining] = useState({ d: 0, h: 0 })
  const [overdue, setOverdue] = useState(false)

  useEffect(() => {
    const calc = () => {
      const diff = new Date(date).getTime() - Date.now()
      if (diff <= 0) {
        setOverdue(true)
        setRemaining({ d: 0, h: 0 })
        return
      }
      setOverdue(false)
      setRemaining({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
      })
    }
    calc()
    const id = setInterval(calc, 60000)
    return () => clearInterval(id)
  }, [date])

  if (overdue) {
    return (
      <div className="countdown countdown--overdue">
        <span className="countdown__label">已超過期限</span>
        <span className="countdown__urgent">逾期</span>
      </div>
    )
  }

  return (
    <div className="countdown">
      <span className="countdown__label">距離期限</span>
      <span className="countdown__value">
        {remaining.d} 天 {remaining.h} 小時
      </span>
    </div>
  )
}

import { useState, useEffect } from 'react'

export default function InstitutionCard({ institution, index, expanded, onToggle }) {
  const inst = institution
  const vacantPct = inst.totalSeats > 0
    ? Math.round((inst.vacantSeats / inst.totalSeats) * 100)
    : 0

  const filledSeats = inst.totalSeats - inst.vacantSeats

  const statusColor =
    inst.status === 'paralyzed' || inst.status === 'overdue'
      ? '#8b0000'
      : '#b8860b'

  return (
    <div
      className={`inst-card ${expanded ? 'inst-card--expanded' : ''}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <button className="inst-card__header" onClick={onToggle}>
        <div className="inst-card__title-row">
          <StatusBadge status={inst.status} />
          <div className="inst-card__titles">
            <h2 className="inst-card__name">{inst.name}</h2>
            <span className="inst-card__subtitle">{inst.subtitle}</span>
          </div>
          <span
            className="inst-card__status"
            style={{ background: statusColor }}
          >
            {inst.statusLabel}
          </span>
        </div>

        <div className="inst-card__metrics">
          <div className="inst-card__metric">
            <span className="inst-card__metric-value">{inst.totalSeats}</span>
            <span className="inst-card__metric-label">應有席次</span>
          </div>
          <div className="inst-card__divider" />
          <div className="inst-card__metric">
            <span className="inst-card__metric-value inst-card__metric-value--red">
              {inst.vacantSeats}
            </span>
            <span className="inst-card__metric-label">空缺</span>
          </div>
          <div className="inst-card__divider" />
          <div className="inst-card__metric">
            <span className="inst-card__metric-value">{filledSeats}</span>
            <span className="inst-card__metric-label">現任</span>
          </div>
          <div className="inst-card__divider" />
          <div className="inst-card__metric">
            <span className="inst-card__metric-value" style={{ color: statusColor }}>
              {vacantPct}%
            </span>
            <span className="inst-card__metric-label">癱瘓率</span>
          </div>
        </div>

        <ProgressBar
          filled={inst.vacantSeats}
          total={inst.totalSeats}
          color={statusColor}
        />

        <div className="inst-card__key-fact">{inst.keyFact}</div>
      </button>

      {expanded && (
        <div className="inst-card__detail">
          <div className="inst-card__detail-grid">
            <div className="inst-card__detail-item">
              <span className="inst-card__detail-label">編制</span>
              <span className="inst-card__detail-value">{inst.detail.fullTerm}</span>
            </div>
            <div className="inst-card__detail-item">
              <span className="inst-card__detail-label">現況</span>
              <span className="inst-card__detail-value">{inst.detail.currentSitting}</span>
            </div>
            <div className="inst-card__detail-item">
              <span className="inst-card__detail-label">提名狀態</span>
              <span className="inst-card__detail-value">{inst.detail.pendingNominations}</span>
            </div>
            <div className="inst-card__detail-item">
              <span className="inst-card__detail-label">任期</span>
              <span className="inst-card__detail-value">{inst.detail.termExpiry}</span>
            </div>
            <div className="inst-card__detail-item">
              <span className="inst-card__detail-label">癱瘓手段</span>
              <span className="inst-card__detail-value inst-card__detail-value--red">
                {inst.detail.blockerAction}
              </span>
            </div>
          </div>
          {inst.criticalDate && (
            <CountdownToDeadline date={inst.criticalDate} />
          )}
          <p className="inst-card__detail-en">{inst.keyFactEn}</p>
        </div>
      )}
    </div>
  )
}
