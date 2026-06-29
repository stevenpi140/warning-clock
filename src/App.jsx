import { useState } from 'react'
import { institutions, PARALYSIS_START } from './data/institutions'
import { economicDemocracyUnion as edu } from './data/orgInfo'
import InstitutionCard from './components/InstitutionCard'
import CaseIndex from './components/CaseIndex'
import AlertBanner from './components/AlertBanner'
import { useElapsedParts, FlapGroup } from './components/flap'
import eduLogo from './assets/edu-logo.png'

function FlapClock({ startDate }) {
  const { days, h, m, s, totalHours } = useElapsedParts(startDate)

  return (
    <div className="debt-clock">
      <div className="debt-clock__title">憲政機關停擺</div>
      <div className="debt-clock__caption">
        <span className="debt-clock__rule" aria-hidden="true" />
        已持續
        <span className="debt-clock__rule" aria-hidden="true" />
      </div>

      <div className="debt-clock__board">
        <FlapGroup value={days} pad={4} label="天" tone="accent" />
        <FlapGroup value={h} pad={2} label="時" />
        <FlapGroup value={m} pad={2} label="分" />
        <FlapGroup value={s} pad={2} label="秒" />
      </div>

      <p className="sr-only" aria-live="polite">
        憲政機關已停擺 {days} 天
      </p>

      <div className="debt-clock__accrual" aria-hidden="true">持續累積中</div>

      <div className="debt-clock__convert">
        ≒ {totalHours.toLocaleString()} 小時
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
          <span className="header__title-sub">鄭麗文傅崐萁集團癱瘓政府機構警示鐘</span>
        </h1>
        <div className="clock-board clock-board--single">
          <FlapClock startDate={PARALYSIS_START} />
        </div>
        <p className="header__desc">
          鄭麗文傅崐萁集團透過杯葛人事同意權、惡修法令、刪減預算、拖延議程等手段，逐一癱瘓國家重要憲政機關。
          <br />
          以下記錄自 2024 年以來已經、曾經或即將被癱瘓的政府機關與機構。
        </p>
      </header>

      <CaseIndex institutions={institutions} />

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
