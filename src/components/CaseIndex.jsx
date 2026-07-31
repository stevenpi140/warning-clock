import { TriageStrip, TRIAGE_LEVELS } from './statusTone'

// 案件索引＝檢傷分類板：9 個機關依 status 落入四級傷票色條，一眼掃完誰死透、誰重傷、誰只是掛彩。
// 每一級一條色帶（＝傷票的色條），色帶下掛該級的機關列，每列跳該機關卷宗錨點。
// 分級直接用資料層的 status，不在呈現層另做推導。

// 無固定關鍵日時的狀態欄文字（依級別給準確字眼，不一律套「持續癱瘓」以免誇大）
const NODATE_LABEL = {
  collapsed: { text: '持續癱瘓', cls: 'case-index__overdue' },
  critical: { text: '瀕臨癱瘓', cls: 'case-index__overdue' },
  atRisk: { text: '有癱瘓危險', cls: 'case-index__nodate' },
  stable: { text: '運作中', cls: 'case-index__nodate' },
}

function keyDateOf(inst) {
  if (!inst.criticalDate) return null
  const days = Math.round(
    (new Date(inst.criticalDate).getTime() - Date.now()) / 86400000
  )
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
          <span className="data">{institutions.length}</span> 個國家機關（構）　空缺{' '}
          <span className="data">
            {totalVacant} / {totalSeats}
          </span>{' '}
          席（<span className="data">{vacantPct}%</span>）
        </p>
      </div>

      <p className="case-index__note">
        分級沿用緊急救護的檢傷分類：黑色瀕死＝全面癱瘓，紅色重傷＝瀕臨全面癱瘓，黃色中傷＝有癱瘓危險，綠色輕傷＝正常運行。每列左側色條依傷票判讀方式呈現，最下面露出的顏色即為該機關的分級。
      </p>

      {TRIAGE_LEVELS.map((lv) => {
        const rows = institutions.filter((i) => i.status === lv.key)
        return (
          <div
            className={`triage-tier triage-tier--${lv.key}${
              rows.length === 0 ? ' triage-tier--empty' : ''
            }`}
            key={lv.key}
          >
            <h3 className="triage-band">
              <span className="triage-band__code" aria-hidden="true">
                {lv.code}
              </span>
              <span className="triage-band__name">{lv.name}</span>
              <span className="triage-band__triage">{lv.triage}</span>
              <span className="triage-band__gloss">{lv.gloss}</span>
              <span className="triage-band__count">
                <span className="data">{rows.length}</span> 件
              </span>
              <span className="triage-band__code" aria-hidden="true">
                {lv.code}
              </span>
            </h3>

            {rows.length > 0 && (
              <ul className="case-index__list">
                {rows.map((inst) => {
                  const kd = keyDateOf(inst)
                  const nd = NODATE_LABEL[inst.status] || NODATE_LABEL.atRisk
                  return (
                    <li className="case-index__row" key={inst.id}>
                      <a className="case-index__link" href={`#${inst.id}`}>
                        <TriageStrip status={inst.status} size="row" />
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
                            <span className={nd.cls}>{nd.text}</span>
                          )}
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        )
      })}
    </section>
  )
}
