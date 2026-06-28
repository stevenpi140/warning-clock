import { useState, useEffect } from 'react'
import { StatusMarker, statusColorOf } from './statusTone'

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

function CountdownToDeadline({ date, label }) {
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
    const elapsed = Math.floor((Date.now() - new Date(date).getTime()) / 86400000)
    return (
      <div className="countdown countdown--overdue">
        <span className="countdown__label">{label || '已超過期限'}</span>
        <span className="countdown__urgent">逾期 {elapsed} 天</span>
      </div>
    )
  }

  return (
    <div className="countdown">
      <span className="countdown__label">{label || '距離期限'}</span>
      <span className="countdown__value">
        {remaining.d} 天 {remaining.h} 小時
      </span>
    </div>
  )
}

export default function InstitutionCard({ institution, index, expanded, onToggle }) {
  const inst = institution
  const vacantPct = inst.totalSeats > 0
    ? Math.round((inst.vacantSeats / inst.totalSeats) * 100)
    : 0
  const filledSeats = Math.max(0, inst.totalSeats - inst.vacantSeats)
  const statusColor = statusColorOf(inst.status)

  return (
    <div
      id={inst.id}
      className={`inst-card inst-card--${inst.status} ${expanded ? 'inst-card--expanded' : ''}`}
    >
      <button className="inst-card__header" onClick={onToggle} aria-expanded={expanded}>
        <div className="inst-card__title-row">
          <StatusMarker status={inst.status} />
          <div className="inst-card__titles">
            <h2 className="inst-card__name">{inst.name}</h2>
            <span className="inst-card__subtitle">{inst.subtitle}</span>
          </div>
          <span
            className="inst-card__status"
            style={{ borderColor: statusColor }}
          >
            {inst.statusLabel}
          </span>
        </div>

        <div className="inst-card__vacancy">
          <span className="inst-card__vacancy-label">空缺</span>
          <span className="data inst-card__vacancy-num" style={{ color: statusColor }}>
            {inst.vacantSeats} / {inst.totalSeats}
          </span>
          <span className="inst-card__vacancy-label">空缺率</span>
          <span className="data" style={{ color: statusColor }}>{vacantPct}%</span>
        </div>

        <div className={`inst-card__key-fact${expanded ? '' : ' inst-card__key-fact--clamp'}`}>
          {inst.keyFact}
        </div>
        <span className="inst-card__toggle-hint">{expanded ? '收合卷宗 ▲' : '展開卷宗 ▼'}</span>
      </button>

      {expanded && (
        <div className="inst-card__detail">
          <div className="inst-card__metrics">
            <div className="inst-card__metric">
              <span className="inst-card__metric-value">{inst.totalSeats}</span>
              <span className="inst-card__metric-label">{inst.seatNoun || '應有席次'}</span>
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
              <span className="inst-card__metric-label">空缺率</span>
            </div>
          </div>

          <ProgressBar
            filled={inst.vacantSeats}
            total={inst.totalSeats}
            color={statusColor}
          />

          {inst.org && (
            <section className="dossier-block">
              <h3 className="dossier-block__head dossier-block__head--neutral">組織與任期</h3>
              <p className="dossier-block__text">{inst.org}</p>
            </section>
          )}

          {inst.actions?.length > 0 && (
            <section className="dossier-block">
              <h3 className="dossier-block__head dossier-block__head--red">藍白惡行</h3>
              <ul className="dossier-list dossier-list--red">
                {inst.actions.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </section>
          )}

          {inst.impact?.length > 0 && (
            <section className="dossier-block">
              <h3 className="dossier-block__head dossier-block__head--gold">機關癱瘓後果</h3>
              <ul className="dossier-list">
                {inst.impact.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </section>
          )}

          {inst.timeline?.length > 0 && (
            <section className="dossier-block">
              <h3 className="dossier-block__head dossier-block__head--neutral">事件時序</h3>
              <ul className="timeline">
                {inst.timeline.map((t, i) => (
                  <li className="timeline__item" key={i}>
                    <span className="timeline__date">{t.date}</span>
                    <span className="timeline__text">{t.text}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {inst.criticalDate && (
            <CountdownToDeadline date={inst.criticalDate} label={inst.criticalDateLabel} />
          )}

          {inst.sources?.length > 0 && (
            <section className="dossier-block">
              <h3 className="dossier-block__head dossier-block__head--neutral">資料來源</h3>
              <ul className="source-list">
                {inst.sources.map((s, i) => (
                  <li key={i}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {inst.keyFactEn && <p className="inst-card__detail-en">{inst.keyFactEn}</p>}
        </div>
      )}
    </div>
  )
}
