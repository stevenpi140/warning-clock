// 檢傷分類（triage）四級分級：沿用緊急救護「傷票」（triage tag）的既有標準色碼與代號。
//
//   0    全面癱瘓      瀕死  黑   依組織法已無法運作
//   I    瀕臨全面癱瘓  重傷  紅   在任人數已不足或即將不足，僅能部分運作
//   II   有癱瘓危險    中傷  黃   席次出缺或首長懸缺，運作已受影響
//   III  正常運行      輕傷  綠   運作中，含曾癱瘓已恢復者
//
// 傷票的判讀機制是「撕除比判定級別更輕的色條，最下面露出的顏色就是判定結果」。
// TriageStrip 照搬同一機制：只保留該機關級別（含）以上的色條，其下畫撕除線。
// 四色是資訊本身（救護檢傷既有標準），不是新增的品牌 accent：紅沿用全站印泥紅
// --accent、黃沿用琥珀家族、綠沿用計分板既有綠灰、黑為深底挖空加骨白髮絲線。
// 卡片（InstitutionCard）與案件索引（CaseIndex）共用，避免色彩邏輯各寫一份。

export const TRIAGE_LEVELS = [
  {
    key: "collapsed",
    code: "0",
    name: "全面癱瘓",
    triage: "瀕死",
    gloss: "依組織法已無法運作",
    color: "var(--triage-0)",
    // 黑在深底上畫不出進度條與數字，圖表／數據場合改用骨白（同屬「已無色可撕」的視覺語意）
    chartColor: "var(--bone)",
  },
  {
    key: "critical",
    code: "I",
    name: "瀕臨全面癱瘓",
    triage: "重傷",
    gloss: "在任人數已不足或即將不足，僅能部分運作",
    color: "var(--triage-1)",
  },
  {
    key: "atRisk",
    code: "II",
    name: "有癱瘓危險",
    triage: "中傷",
    gloss: "席次出缺或首長懸缺，運作已受影響",
    color: "var(--triage-2)",
  },
  {
    key: "stable",
    code: "III",
    name: "正常運行",
    triage: "輕傷",
    gloss: "運作中，含曾癱瘓已恢復者",
    color: "var(--triage-3)",
  },
];

const BY_KEY = Object.fromEntries(
  TRIAGE_LEVELS.map((lv, index) => [lv.key, { ...lv, index }]),
);

export function toneOf(status) {
  return BY_KEY[status] || BY_KEY.atRisk;
}

export function statusColorOf(status) {
  return toneOf(status).color;
}

// 進度條、數據字等「畫在深底上」的場合用這個，避免黑級變成看不見
export function chartColorOf(status) {
  const lv = toneOf(status);
  return lv.chartColor || lv.color;
}

export function levelIndexOf(status) {
  return toneOf(status).index;
}

// 傷票色條：保留判定級別（含）以上的色條，其下為撕除區；撕線以虛線髮絲表示。
export function TriageStrip({ status, size }) {
  const lv = toneOf(status);
  return (
    <span
      className={`triage-strip${size ? ` triage-strip--${size}` : ""}`}
      role="img"
      aria-label={`檢傷 ${lv.code}｜${lv.name}`}
    >
      {TRIAGE_LEVELS.map((band, i) =>
        i <= lv.index ? (
          <span
            key={band.key}
            className="triage-strip__band"
            style={{ background: band.color }}
          />
        ) : (
          <span
            key={band.key}
            className={`triage-strip__torn${
              i === lv.index + 1 ? " triage-strip__torn--edge" : ""
            }`}
          />
        ),
      )}
    </span>
  );
}

// 既有呼叫點沿用同一個名字，標記本身改為傷票色條。
export function StatusMarker({ status }) {
  return <TriageStrip status={status} />;
}
