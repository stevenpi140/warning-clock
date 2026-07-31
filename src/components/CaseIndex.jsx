import { TriageTag, TRIAGE_LEVELS, toneOf } from "./statusTone";

// 案件索引＝檢傷分類板：9 個機關各掛一張傷票，依嚴重度排序。
// 分級直接用資料層的 status，不在呈現層另做推導。
// 不再按級別切分節：傷票的長度與底色本身就是分級，切節等於把同一件事講兩次。

export default function CaseIndex({ institutions }) {
  const totalSeats = institutions.reduce((s, i) => s + i.totalSeats, 0);
  const totalVacant = institutions.reduce((s, i) => s + i.vacantSeats, 0);
  const vacantPct =
    totalSeats > 0 ? Math.round((totalVacant / totalSeats) * 100) : 0;

  const sorted = [...institutions].sort(
    (a, b) => toneOf(a.status).index - toneOf(b.status).index,
  );

  return (
    <section className="case-index" aria-label="案件索引">
      <div className="case-index__head">
        <h2 className="case-index__title">案件索引</h2>
        <p className="case-index__summary">
          <span className="data">{institutions.length}</span> 個國家機關（構）　空缺{" "}
          <span className="data">
            {totalVacant} / {totalSeats}
          </span>{" "}
          席（<span className="data">{vacantPct}%</span>）
        </p>
      </div>

      <ol className="triage-key" aria-label="檢傷分級圖例">
        {TRIAGE_LEVELS.map((lv) => {
          const count = institutions.filter((i) => i.status === lv.key).length;
          return (
            <li className={`triage-key__item triage-key__item--${lv.key}`} key={lv.key}>
              <span className="triage-key__chip">{lv.code}</span>
              <span className="triage-key__name">{lv.name}</span>
              <span className="triage-key__triage">{lv.triage}</span>
              <span className="triage-key__count">
                <span className="data">{count}</span> 件
              </span>
            </li>
          );
        })}
      </ol>

      <div className="triage-board">
        {sorted.map((inst) => (
          <TriageTag key={inst.id} institution={inst} />
        ))}
      </div>
    </section>
  );
}
