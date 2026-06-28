import { useState } from 'react'
import { institutions, PARALYSIS_START } from './data/institutions'
import { economicDemocracyUnion as edu } from './data/orgInfo'
import InstitutionCard from './components/InstitutionCard'
import AlertBanner from './components/AlertBanner'
import BudgetClock from './components/BudgetClock'
import { useElapsedParts, FlapGroup } from './components/flap'
import eduLogo from './assets/edu-logo.png'

// 狀態分桶：已癱瘓 / 部分停擺 / 逾期違憲 視為「停擺」；尚未但可能癱瘓視為「瀕危」
const isHalted = (i) =>
  i.status === 'paralyzed' || i.status === 'partial' || i.status === 'overdue'
const isAtRisk = (i) => i.status === 'atRisk'

function FlapClock({ institutions, startDate }) {
  const { days, h, m, s, totalHours, totalMinutes } = useElapsedParts(startDate)
  const halted = institutions.filter(isHalted).length
  const atRisk = institutions.filter(isAtRisk).length
  const vacant = institutions.reduce((sum, i) => sum + i.vacantSeats, 0)

  return (
    <div className="debt-clock">
      <div className="debt-clock__caption">
        <span className="debt-clock__rule" aria-hidden="true" />
        憲政機關停擺已持續
        <span className="debt-clock__rule" aria-hidden="true" />
      </div>

      <div className="debt-clock__board">
        <FlapGroup value={days} pad={4} label="天" />
        <FlapGroup value={h} pad={2} label="時" />
        <FlapGroup value={m} pad={2} label="分" />
        <FlapGroup value={s} pad={2} label="秒" />
      </div>

      <p className="sr-only" aria-live="polite">
        憲政機關已停擺 {days} 天
      </p>

      <div className="debt-clock__accrual" aria-hidden="true">
        ══════ 持續累積中 ══════
      </div>

      <div className="debt-clock__convert">
        ≒ {totalHours.toLocaleString()} 時　≒ {totalMinutes.toLocaleString()} 分
      </div>

      <div className="debt-clock__plate">
        已／部分停擺 {halted}　瀕危 {atRisk}　空缺席次 {vacant}
      </div>
    </div>
  )
}

function ParalysisSummary({ institutions }) {
  const totalHalted = institutions.filter(isHalted).length
  const totalAtRisk = institutions.filter(isAtRisk).length
  const totalVacant = institutions.reduce((s, i) => s + i.vacantSeats, 0)
  const totalSeats = institutions.reduce((s, i) => s + i.totalSeats, 0)
  const percentage = totalSeats > 0 ? Math.round((totalVacant / totalSeats) * 100) : 0

  return (
    <div className="summary">
      <div className="summary__grid">
        <div className="summary__item summary__item--red">
          <div className="summary__value">{totalHalted}</div>
          <div className="summary__label">已／部分停擺</div>
        </div>
        <div className="summary__item summary__item--yellow">
          <div className="summary__value">{totalAtRisk}</div>
          <div className="summary__label">瀕危機關</div>
        </div>
        <div className="summary__item summary__item--red">
          <div className="summary__value">{totalVacant}</div>
          <div className="summary__label">空缺席次</div>
        </div>
        <div className="summary__item summary__item--red">
          <div className="summary__value">{percentage}%</div>
          <div className="summary__label">席次空缺率</div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [expandedCard, setExpandedCard] = useState(null)

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <div className="app">
      <AlertBanner />

      <header className="header">
        <div className="header__seal">
          <div className="seal-circle">
            <span className="seal-text">警示</span>
          </div>
        </div>
        <h1 className="header__title">
          <span className="header__title-main">台灣黎巴嫩化</span>
          <span className="header__title-sub">傅崐萁集團癱瘓政府機構警示鐘</span>
        </h1>
        <FlapClock institutions={institutions} startDate={PARALYSIS_START} />
        <p className="header__desc">
          傅崐萁集團透過杯葛人事同意權、惡修法令、刪減預算、拖延議程等手段，逐一癱瘓國家重要憲政機關。
          <br />
          以下卷宗紀錄自 2024 年以來已經、曾經或即將被癱瘓的政府機關與機構。
        </p>
      </header>

      <BudgetClock />

      <ParalysisSummary institutions={institutions} />

      <section className="institutions">
        {institutions.map((inst, i) => (
          <InstitutionCard
            key={inst.id}
            institution={inst}
            index={i}
            expanded={expandedCard === inst.id}
            onToggle={() => toggleCard(inst.id)}
          />
        ))}
      </section>

      <footer className="footer">
        <div className="footer__partner">
          <a
            href={edu.website || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__partner-logo"
            aria-label={edu.nameZh}
          >
            <img src={eduLogo} alt={`${edu.nameZh} logo`} />
          </a>
          <div className="footer__partner-info">
            <h3 className="footer__partner-name">
              {edu.nameZh}
              {edu.nameEn && <span className="footer__partner-en">{edu.nameEn}</span>}
            </h3>
            {edu.tagline && <p className="footer__partner-tagline">{edu.tagline}</p>}
            <p className="footer__partner-mission">{edu.mission}</p>
            {edu.focusAreas?.length > 0 && (
              <ul className="footer__partner-tags">
                {edu.focusAreas.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            )}
            <div className="footer__partner-links">
              {edu.website && (
                <a href={edu.website} target="_blank" rel="noopener noreferrer">
                  官方網站
                </a>
              )}
              {edu.facebook && (
                <a href={edu.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              )}
              {edu.otherLinks?.map((l, i) => (
                <a key={i} href={l.url} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__content">
          <p>本頁資料整理自公開資訊，提醒社會大眾關注政府機構運作狀況。</p>
          <p className="footer__date">
            最後更新：{new Date().toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </footer>
    </div>
  )
}
