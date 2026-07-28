import { useMemo, useState } from "react";
import {
  SCORE_META,
  PARALYSIS_THRESHOLD,
  CASES,
  LEGISLATORS,
} from "../data/legislatorScores";
import { billDisplay } from "../data/billSummaries";

// 政黨顯示順序（全部 + 4 黨籍，依實際資料值）；縮寫章與 tab 色點使用各政黨代表色
const PARTY_ORDER = ["中國國民黨", "民主進步黨", "台灣民眾黨", "無黨籍"];
const PARTY_LABEL = {
  中國國民黨: "中國國民黨",
  民主進步黨: "民進黨",
  台灣民眾黨: "台灣民眾黨",
  無黨籍: "無黨籍",
};
const PARTY_ABBR = {
  中國國民黨: "國",
  民主進步黨: "民",
  台灣民眾黨: "眾",
  無黨籍: "無",
};
// 政黨代表色（中國國民黨藍、民進黨綠、台灣民眾黨青；無黨籍以中性灰呈現）
const PARTY_COLOR = {
  中國國民黨: "#000095",
  民主進步黨: "#1B9431",
  台灣民眾黨: "#28C8C8",
  無黨籍: "#8E8E8E",
};

// 投票分項色語意：同意=中性綠灰／不同意=印泥紅／無效=琥珀／未領票=深灰（不在任另處理）
const VOTE_KEYS = ["同意", "不同意", "無效", "未領票"];
const VOTE_TONE = {
  同意: "var(--agree)",
  不同意: "var(--accent)",
  無效: "var(--caution)",
  未領票: "var(--text-muted)",
};

const PAGE_SIZE = 20;

function IndexBar({ legislator }) {
  const { index, weightedIndex, billBonus, paralyzing } = legislator;
  const opacity = 0.28 + (index / 100) * 0.65;
  return (
    <div
      className="lb-rate"
      aria-label={`癱瘓政府指數 ${index.toFixed(1)}${
        billBonus > 0 ? `，加權後 ${weightedIndex.toFixed(1)}` : ""
      }`}
    >
      <div className="lb-rate__track">
        <div
          className={`lb-rate__fill ${paralyzing ? "" : "lb-rate__fill--below"}`}
          style={{ width: `${Math.min(index, 100)}%`, opacity }}
        />
      </div>
      <span className="lb-rate__value data">
        {index.toFixed(1)}
        {billBonus > 0 && (
          <span className="lb-rate__weighted">
            加權後 {weightedIndex.toFixed(1)}
          </span>
        )}
      </span>
    </div>
  );
}

function PartyBadge({ party }) {
  return (
    <span
      className="lb-party"
      title={party}
      style={{ background: PARTY_COLOR[party] || "var(--bg-secondary)" }}
    >
      {PARTY_ABBR[party] || party.slice(0, 1)}
    </span>
  );
}

// 一案一列：左為案由與日期，右為該委員對每位被提名人的行使結果。
// 同案同行為的被提名人併為一列（避免七位被提名人重複七次同一個行為標籤），
// 行使分歧的案子因此自然多出幾列，一眼可辨。
function CaseRow({ caseInfo, votes }) {
  if (!votes) {
    return (
      <div className="lb-consent__case lb-consent__case--absent">
        <div className="lb-consent__id">
          <span className="lb-consent__org">{caseInfo.org}</span>
          <span className="lb-consent__date data">{caseInfo.date}</span>
        </div>
        <div className="lb-consent__rows">
          <span className="lb-consent__absent">不在任</span>
        </div>
      </div>
    );
  }

  const groups = VOTE_KEYS.map((behavior) => ({
    behavior,
    names: caseInfo.nominees.filter((_, i) => votes[i] === behavior),
  })).filter((g) => g.names.length > 0);

  const { gazette } = caseInfo;

  return (
    <div className="lb-consent__case">
      <div className="lb-consent__id">
        <span className="lb-consent__org">{caseInfo.org}</span>
        <span className="lb-consent__date data">{caseInfo.date}</span>
        {gazette && (
          <a
            className="lb-consent__source"
            href={gazette.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${caseInfo.org}人事同意權案立法院公報唱票紀錄`}
          >
            公報 <span className="data">p.{gazette.pages}</span>
          </a>
        )}
      </div>
      <div className="lb-consent__rows">
        {groups.map((g) => (
          <div className="lb-consent__row" key={g.behavior}>
            <span
              className="lb-consent__behavior"
              style={{ "--tone": VOTE_TONE[g.behavior] }}
            >
              {g.behavior}
              <span className="lb-consent__count data">{g.names.length}</span>
            </span>
            <span className="lb-consent__names">{g.names.join("、")}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LegislatorDetail({ legislator }) {
  return (
    <div className="lb-detail">
      <div className="lb-consent">
        <h4 className="lb-detail__head">同意權行使具體細節</h4>
        {CASES.map((c) => (
          <CaseRow key={c.id} caseInfo={c} votes={legislator.votes[c.id]} />
        ))}
      </div>

      {legislator.billRoles.length > 0 && (
        <div className="lb-bills">
          <h4 className="lb-detail__head">
            加速政府癱瘓法案角色（加權後 +{legislator.billBonus}）
          </h4>
          <ul className="lb-bills__list">
            {legislator.billRoles.map((br, i) => {
              // 顯示一句話摘要；法案全名與提案編號藏在 title 提示與議案連結
              const { billNo, summary, fullTitle } = billDisplay(br);
              return (
                <li className="lb-bills__item" key={i} title={fullTitle}>
                  <span className="lb-bills__bill">{summary}</span>
                  <span className="lb-bills__role">{br.role}</span>
                  <span className="lb-bills__points data">+{br.points}</span>
                  {br.source &&
                    (br.source.startsWith("http") ? (
                      <a
                        className="lb-bills__source"
                        href={br.source}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`查看議案：${fullTitle}`}
                      >
                        {billNo ? (
                          <>
                            議案 <span className="data">{billNo}</span>
                          </>
                        ) : (
                          "議案連結"
                        )}
                      </a>
                    ) : (
                      <span className="lb-bills__source">{br.source}</span>
                    ))}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

function LegislatorRow({ legislator, expanded, onToggle }) {
  const l = legislator;
  return (
    <div
      className={`lb-row ${expanded ? "lb-row--expanded" : ""} ${
        l.paralyzing ? "" : "lb-row--below"
      }`}
    >
      <button
        className="lb-row__main"
        onClick={onToggle}
        aria-expanded={expanded}
      >
        <span className="lb-row__rank data">{l.paralyzing ? l.rank : "-"}</span>
        <span className="lb-row__name">
          {l.name}
          <PartyBadge party={l.party} />
        </span>
        <span className="lb-row__votes">
          <span className="lb-row__votes-agree">
            同意 <span className="data">{l.agree}</span>
          </span>
          <span className="lb-row__votes-nonagree">
            非同意 <span className="data">{l.nonAgree}</span>
          </span>
        </span>
        <IndexBar legislator={l} />
        <span className="lb-row__breakdown">
          總次數 {l.inOffice}・不同意 {l.breakdown.disagree}・無效{" "}
          {l.breakdown.invalid}・未領票 {l.breakdown.notPickup}
        </span>
        <span className="lb-row__chevron" aria-hidden="true">
          {expanded ? "▲" : "▼"}
        </span>
      </button>
      {expanded && <LegislatorDetail legislator={l} />}
    </div>
  );
}

export default function LegislatorScoreboard() {
  const [partyFilter, setPartyFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [expandedName, setExpandedName] = useState(null);

  const partyCounts = useMemo(() => {
    const counts = { all: LEGISLATORS.length };
    for (const p of PARTY_ORDER) counts[p] = 0;
    for (const l of LEGISLATORS) counts[l.party] = (counts[l.party] || 0) + 1;
    return counts;
  }, []);

  const filtered = useMemo(
    () =>
      partyFilter === "all"
        ? LEGISLATORS
        : LEGISLATORS.filter((l) => l.party === partyFilter),
    [partyFilter],
  );

  const visible = showAll ? filtered : filtered.slice(0, PAGE_SIZE);
  // LEGISLATORS 產出時已排序：列為癱瘓（rank 1..N）在前、未達門檻者殿後
  const visibleParalyzing = visible.filter((l) => l.paralyzing);
  const visibleBelow = visible.filter((l) => !l.paralyzing);

  const handleFilter = (p) => {
    setPartyFilter(p);
    setShowAll(false);
    setExpandedName(null);
  };

  return (
    <section
      className="lb-scoreboard"
      id="legislator-scoreboard"
      aria-label="惡意癱瘓指數排名表"
    >
      <div className="lb-scoreboard__head">
        <h2 className="lb-scoreboard__title">惡意癱瘓指數排名表</h2>
        <p className="lb-scoreboard__subtitle">
          依《立法院職權行使法》第 29
          條，人事同意權案以「超過全體立法委員二分之一之同意」為通過；
          統計並列同意票次數與非同意票次數（不同意、無效、未領票效果相同），展開後依立法院公報唱票紀錄逐格列出每位被提名人的行使結果。
          癱瘓政府指數＝非同意票次數 ÷ 該委員在任期間人事同意權總表決次數 ×
          100；未達 {PARALYSIS_THRESHOLD}{" "}
          分者（比照美國異黨政府時期對大法官同意權行使狀況，考慮國會對行政部門提名人選之合理監督）不列入癱瘓指數。
        </p>
      </div>

      <div className="lb-tabs" role="tablist" aria-label="政黨過濾">
        <button
          className={`lb-tabs__item ${partyFilter === "all" ? "lb-tabs__item--active" : ""}`}
          onClick={() => handleFilter("all")}
          role="tab"
          aria-selected={partyFilter === "all"}
        >
          全部 <span className="data">{partyCounts.all}</span>
        </button>
        {PARTY_ORDER.map((p) => (
          <button
            key={p}
            className={`lb-tabs__item ${partyFilter === p ? "lb-tabs__item--active" : ""}`}
            onClick={() => handleFilter(p)}
            role="tab"
            aria-selected={partyFilter === p}
          >
            <span
              className="lb-tabs__dot"
              style={{ background: PARTY_COLOR[p] }}
              aria-hidden="true"
            />
            {PARTY_LABEL[p]} <span className="data">{partyCounts[p] || 0}</span>
          </button>
        ))}
      </div>

      <div className="lb-table" role="table" aria-label="立委惡意癱瘓指數排行">
        <div className="lb-table__header" role="row">
          <span>排名</span>
          <span>立委</span>
          <span>同意／非同意</span>
          <span>癱瘓政府指數</span>
          <span>分項</span>
          <span />
        </div>
        <div className="lb-table__body">
          {visibleParalyzing.map((l) => (
            <LegislatorRow
              key={l.name}
              legislator={l}
              expanded={expandedName === l.name}
              onToggle={() =>
                setExpandedName(expandedName === l.name ? null : l.name)
              }
            />
          ))}
          {visibleBelow.length > 0 && (
            <div className="lb-threshold" role="presentation">
              以下癱瘓政府指數未達 {PARALYSIS_THRESHOLD} 分，不列入癱瘓指數
            </div>
          )}
          {visibleBelow.map((l) => (
            <LegislatorRow
              key={l.name}
              legislator={l}
              expanded={expandedName === l.name}
              onToggle={() =>
                setExpandedName(expandedName === l.name ? null : l.name)
              }
            />
          ))}
        </div>
      </div>

      {!showAll && filtered.length > PAGE_SIZE && (
        <button className="lb-showmore" onClick={() => setShowAll(true)}>
          展開全部 {filtered.length} 位 ▼
        </button>
      )}
      {showAll && filtered.length > PAGE_SIZE && (
        <button className="lb-showmore" onClick={() => setShowAll(false)}>
          收合列表 ▲
        </button>
      )}

      <details className="lb-methodology">
        <summary className="lb-methodology__summary">
          計分方法論與資料來源
        </summary>
        <div className="lb-methodology__body">
          <p className="lb-methodology__text">
            <strong>法律依據：</strong>
            {SCORE_META.legalBasis}
          </p>
          <p className="lb-methodology__text">
            <strong>計分方法：</strong>
            {SCORE_META.methodology}
          </p>
          <p className="lb-methodology__text">
            <strong>指數口徑：</strong>
            {SCORE_META.indexNote}
          </p>
          <p className="lb-methodology__text">
            <strong>加權後指數規則：</strong>
            {SCORE_META.weightNote}
          </p>
          {SCORE_META.dataCaveat && (
            <p className="lb-methodology__text lb-methodology__caveat">
              <strong>資料說明：</strong>
              {SCORE_META.dataCaveat}
            </p>
          )}
          <ul className="lb-methodology__sources">
            {SCORE_META.sources.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
          <p className="lb-methodology__updated">
            資料校準：{SCORE_META.updatedAt}
          </p>
        </div>
      </details>
    </section>
  );
}
