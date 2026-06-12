import { useState, useEffect, useRef } from 'react'
import { institutions, PARALYSIS_START } from './data/institutions'
import InstitutionCard from './components/InstitutionCard'
import AlertBanner from './components/AlertBanner'

function useElapsedDays(startDate) {
  const [days, setDays] = useState(0)
  useEffect(() => {
    const calc = () => {
      const diff = Date.now() - new Date(startDate).getTime()
      setDays(Math.floor(diff / 86400000))
    }
    calc()
    const id = setInterval(calc, 60000)
    return () => clearInterval(id)
  }, [startDate])
  return days
}

function useCountdown(targetDate) {
  const [remaining, setRemaining] = useState({ d: 0, h: 0, m: 0 })
  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate).getTime() - Date.now()
      if (diff <= 0) { setRemaining({ d: 0, h: 0, m: 0 }); return }
      setRemaining({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
      })
    }
    calc()
    const id = setInterval(calc, 60000)
    return () => clearInterval(id)
  }, [targetDate])
  return remaining
}

function TotalClock({ days }) {
  const hours = days * 24
  const mins = hours * 60
  return (
    <div className="total-clock">
      <div className="total-clock__label">政府癱瘓已持續</div>
      <div className="total-clock__days">
        <span className="total-clock__number">{days.toLocaleString()}</span>
        <span className="total-clock__unit">天</span>
      </div>
      <div className="total-clock__sub">
        ≒ {hours.toLocaleString()} 小時 ≒ {mins.toLocaleString()} 分鐘
      </div>
    </div>
  )
}

function ParalysisSummary({ institutions }) {
  const totalParalyzed = institutions.filter(
    (i) => i.status === 'paralyzed' || i.status === 'overdue'
  ).length
  const totalAtRisk = institutions.filter((i) => i.status === 'at-risk').length
  const totalVacant = institutions.reduce((s, i) => s + i.vacantSeats, 0)
  const totalSeats = institutions.reduce((s, i) => s + i.totalSeats, 0)
  const percentage = Math.round((totalVacant / totalSeats) * 100)

  return (
    <div className="summary">
      <div className="summary__grid">
        <div className="summary__item summary__item--red">
          <div className="summary__value">{totalParalyzed}</div>
          <div className="summary__label">已癱瘓機關</div>
        </div>
        <div className="summary__item summary__item--yellow">
          <div className="summary__value">{totalAtRisk}</div>
          <div className="summary__label">即將癱瘓</div>
        </div>
        <div className="summary__item summary__item--red">
          <div className="summary__value">{totalVacant}</div>
          <div className="summary__label">空缺席次</div>
        </div>
        <div className="summary__item summary__item--red">
          <div className="summary__value">{percentage}%</div>
          <div className="summary__label">癱瘓比例</div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const days = useElapsedDays(PARALYSIS_START)
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
          <span className="header__title-sub">政府機構癱瘓警示鐘</span>
        </h1>
        <TotalClock days={days} />
        <p className="header__desc">
          傅崐萁集團透過杯葛同意權、惡修法令、拖延議程等手段，癱瘓國家重要憲政機關。
          <br />
          以下紀錄自 2024 年以來遭受癱瘓或即將癱瘓的政府機構。
        </p>
      </header>

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
