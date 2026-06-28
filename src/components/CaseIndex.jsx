import { StatusMarker } from './statusTone'

// 案件索引：依嚴重度把 9 機關分三層，一眼掃完「現在誰停擺、誰瀕危、誰救回」，每列跳該機關卷宗錨點。
// 分層用 status 推導（呈現層），不改資料 key。
const TIERS = [
  { key: 'halted', label: '停擺・違憲', statuses: ['paralyzed', 'partial', 'overdue'] },
  { key: 'atRisk', label: '瀕危', statuses: ['atRisk'] },
  { key: 'recovered', label: '已恢復', statuses: ['former'] },
]

function keyDateOf(inst) {
  if (!inst.criticalDate) return null
  const days = Math.round((new Date(inst.criticalDate).getTime() - Date.now()) / 86400000)
  return { days, overdue: days < 0 }
}

export default function CaseIndex({ institutions }) {
  const totalSeats = institutions.reduce((s, i) => s + i.totalSeats, 0)
  const totalVacant = institutions.reduce((s, i) => s + i.vacantSeats, 0)
  const vacantPct = totalSeats > 0 ? Math.round((totalVacant / totalSeats) * 100) : 0

  return (
    <section className="case-index" aria-label="案件索引">
      <div className="case-index__head">
        <h2 className="case-index__title">案件索引</h2>
        <p className="case-index__summary">
          <span className="data">{institutions.length}</span> 個憲政機關　空缺{' '}
          <span className="data">{totalVacant} / {totalSeats}</span> 席（
          <span className="data">{vacantPct}%</span>）
        </p>
      </div>

      {TIERS.map((tier) => {
        const rows = institutions.filter((i) => tier.statuses.includes(i.status))
        if (rows.length === 0) return null
        return (
          <div className={`case-index__group case-index__group--${tier.key}`} key={tier.key}>
            <div className="case-index__group-head">
              <span className="case-index__group-label">{tier.label}</span>
              <span className="case-index__group-count data">{rows.length}</span>
            </div>
            <ul className="case-index__list">
              {rows.map((inst) => {
                const kd = keyDateOf(inst)
                return (
                  <li className="case-index__row" key={inst.id}>
                    <a className="case-index__link" href={`#${inst.id}`}>
                      <StatusMarker status={inst.status} />
                      <span className="case-index__name">{inst.name}</span>
                      <span className="case-index__status">{inst.statusLabel}</span>
                      <span className="case-index__vacancy data">
                        {inst.vacantSeats} / {inst.totalSeats}
                      </span>
                      <span className="case-index__date">
                        {kd ? (
                          kd.overdue ? (
                            <span className="case-index__overdue">
                              逾期 <span className="data">{-kd.days}</span> 天
                            </span>
                          ) : (
                            <span className="case-index__remain">
                              剩 <span className="data">{kd.days}</span> 天
                            </span>
                          )
                        ) : (
                          <span className="case-index__nodate">持續</span>
                        )}
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </section>
  )
}
