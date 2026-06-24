import { useState, useEffect, useRef } from 'react'
import { institutions, PARALYSIS_START } from './data/institutions'
import InstitutionCard from './components/InstitutionCard'
import AlertBanner from './components/AlertBanner'

// 每秒重算「自癱瘓起算日至今」的天/時/分/秒；每次由 Date.now() 取絕對值，避免分頁休眠造成漂移
function useElapsedParts(startDate) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])
  const totalSec = Math.max(0, Math.floor((now - new Date(startDate).getTime()) / 1000))
  return {
    days: Math.floor(totalSec / 86400),
    h: Math.floor((totalSec % 86400) / 3600),
    m: Math.floor((totalSec % 3600) / 60),
    s: totalSec % 60,
    totalHours: Math.floor(totalSec / 3600),
    totalMinutes: Math.floor(totalSec / 60),
  }
}

function usePrevious(value) {
  const ref = useRef(value)
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

// 單張翻牌數字：上葉（舊值）往下翻離、下葉（新值）補上，模擬車站 split-flap 機構。
// 值改變時，兩片葉以新的 key 重新掛載而重播動畫；未變動的位不產生葉、維持靜態。
function FlapDigit({ value }) {
  const prev = usePrevious(value)
  const changed = prev !== value

  return (
    <span className="flap" aria-hidden="true">
      <span className="flap__panel flap__panel--top">
        <b>{value}</b>
      </span>
      <span className="flap__panel flap__panel--bottom">
        <b>{changed ? prev : value}</b>
      </span>
      {changed && (
        <>
          <span className="flap__leaf flap__leaf--top" key={`t-${value}`}>
            <b>{prev}</b>
          </span>
          <span className="flap__leaf flap__leaf--bottom" key={`b-${value}`}>
            <b>{value}</b>
          </span>
        </>
      )}
    </span>
  )
}

function FlapGroup({ value, pad, label }) {
  const digits = String(value).padStart(pad, '0').split('')
  return (
    <div className="flap-group">
      <div className="flap-group__digits">
        {digits.map((digit, i) => (
          <FlapDigit key={i} value={digit} />
        ))}
      </div>
      <div className="flap-group__label">{label}</div>
    </div>
  )
}

function FlapClock({ institutions, startDate }) {
  const { days, h, m, s, totalHours, totalMinutes } = useElapsedParts(startDate)
  const paralyzed = institutions.filter(
    (i) => i.status === 'paralyzed' || i.status === 'overdue'
  ).length
  const atRisk = institutions.filter((i) => i.status === 'at-risk').length
  const vacant = institutions.reduce((sum, i) => sum + i.vacantSeats, 0)

  return (
    <div className="debt-clock">
      <div className="debt-clock__caption">
        <span className="debt-clock__rule" aria-hidden="true" />
        政府癱瘓已持續
        <span className="debt-clock__rule" aria-hidden="true" />
      </div>

      <div className="debt-clock__board">
        <FlapGroup value={days} pad={4} label="天" />
        <FlapGroup value={h} pad={2} label="時" />
        <FlapGroup value={m} pad={2} label="分" />
        <FlapGroup value={s} pad={2} label="秒" />
      </div>

      <p className="sr-only" aria-live="polite">
        政府機構已癱瘓 {days} 天
      </p>

      <div className="debt-clock__accrual" aria-hidden="true">
        ══════ 持續累積中 ══════
      </div>

      <div className="debt-clock__convert">
        ≒ {totalHours.toLocaleString()} 時　≒ {totalMinutes.toLocaleString()} 分
      </div>

      <div className="debt-clock__plate">
        已癱瘓 {paralyzed}　即將癱瘓 {atRisk}　空缺席次 {vacant}
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
        <FlapClock institutions={institutions} startDate={PARALYSIS_START} />
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
