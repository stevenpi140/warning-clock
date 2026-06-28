import { useState } from 'react'
import { useElapsedParts, FlapGroup } from './flap'
import { budget, BUDGET_SUBMIT_DATE, BUDGET_PASSED_DATE } from '../data/budget'

export default function BudgetClock() {
  const [expanded, setExpanded] = useState(false)
  const { days, h, m, s, totalHours, frozen } = useElapsedParts(
    BUDGET_SUBMIT_DATE,
    BUDGET_PASSED_DATE
  )

  return (
    <section className={`budget ${expanded ? 'budget--expanded' : ''}`} id="budget">
      <div className="budget__card">
        <div className="budget__head">
          <span className="budget__tag">預算警示</span>
          <h2 className="budget__title">{budget.title}</h2>
        </div>

        <div className="budget__clock">
          <div className="budget__caption">
            <span className="budget__rule" aria-hidden="true" />
            {budget.clockCaption}
            <span className="budget__rule" aria-hidden="true" />
          </div>

          <div className="budget__board">
            <FlapGroup value={days} pad={4} label="天" />
            <FlapGroup value={h} pad={2} label="時" />
            <FlapGroup value={m} pad={2} label="分" />
            <FlapGroup value={s} pad={2} label="秒" />
          </div>

          <p className="sr-only" aria-live="polite">
            總預算未完成三讀已 {days} 天
          </p>

          <div className="budget__accrual" aria-hidden="true">
            {frozen ? '已完成三讀 · 歷時定格' : '緊急經費凍結中'}
          </div>
          <div className="budget__convert">
            ≒ {totalHours.toLocaleString()} 小時
          </div>
        </div>

        <div className="budget__stats">
          {budget.stats.map((st, i) => (
            <div className="budget__stat" key={i}>
              <div className="budget__stat-value">
                {st.value}
                {st.unit && <small>{st.unit}</small>}
              </div>
              <div className="budget__stat-label">{st.label}</div>
            </div>
          ))}
        </div>

        <div className="budget__key-fact">{budget.keyFact}</div>

        <button
          className="budget__toggle"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? '收合卷宗 ▲' : '展開卷宗 ▼'}
        </button>
      </div>

      {expanded && (
        <div className="budget__detail">
          <section className="dossier-block">
            <h3 className="dossier-block__head dossier-block__head--neutral">預算規模與結構</h3>
            <p className="dossier-block__text">{budget.scale}</p>
            {budget.lawNote && <p className="budget__law-note">{budget.lawNote}</p>}
          </section>

          <section className="dossier-block">
            <h3 className="dossier-block__head dossier-block__head--red">藍白刪凍惡行</h3>
            <ul className="dossier-list dossier-list--red">
              {budget.actions.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </section>

          <section className="dossier-block">
            <h3 className="dossier-block__head dossier-block__head--gold">卡關衝擊</h3>
            <ul className="dossier-list">
              {budget.impact.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </section>

          <section className="dossier-block">
            <h3 className="dossier-block__head dossier-block__head--neutral">事件時序</h3>
            <ul className="timeline">
              {budget.timeline.map((t, i) => (
                <li className="timeline__item" key={i}>
                  <span className="timeline__date">{t.date}</span>
                  <span className="timeline__text">{t.text}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </section>
  )
}
