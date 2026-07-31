// 檢傷分類（triage）四級分級：沿用緊急救護「傷票」（triage tag）的既有標準色碼與代號。
//
//   0    全面癱瘓      瀕死  黑   依組織法已無法運作
//   I    瀕臨全面癱瘓  重傷  紅   在任人數已不足或即將不足，僅能部分運作
//   II   有癱瘓危險    中傷  黃   席次出缺或首長懸缺，運作已受影響
//   III  正常運行      輕傷  綠   運作中，含曾癱瘓已恢復者
//
// 傷票的判讀機制是「撕除比判定級別更輕的色條，最下面露出的顏色就是判定結果」。
// 每個機關＝一張傷票（TriageTag）：只保留判定級別（含）以上的色條，撕口切鋸齒；
// 被撕掉的部分不補位，所以傷票長度本身就是嚴重度，全面癱瘓者只剩最上面一條黑。
//
// 四色是資訊本身（救護檢傷既有標準），不是新增的品牌 accent：紅沿用全站印泥紅
// --accent、黃沿用琥珀家族、綠沿用計分板既有綠灰，僅黑為新增。
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

// 一張傷票＝一個機關。色條只留判定級別（含）以上，最下面那條＝判定結果，
// 印上級別名；撕口切鋸齒且不補位，傷票長度即嚴重度。
export function TriageTag({ institution }) {
  const inst = institution;
  const lv = toneOf(inst.status);
  const kept = lv.index + 1;
  const torn = kept < TRIAGE_LEVELS.length;

  return (
    <a
      className={`triage-tag triage-tag--${lv.key}`}
      href={`#${inst.id}`}
      aria-label={`${inst.name}，檢傷 ${lv.code} ${lv.name}，空缺 ${inst.vacantSeats} / ${inst.totalSeats} 席`}
    >
      <span className="triage-tag__head" aria-hidden="true">
        <span className="triage-tag__hole" />
      </span>

      <span className="triage-tag__body">
        <span className="triage-tag__name">{inst.name}</span>
        <span className="triage-tag__en">{inst.subtitle}</span>
        <span className="triage-tag__status">{inst.statusLabel}</span>
        <span className="triage-tag__seats">
          <span className="triage-tag__seats-label">空缺席次</span>
          <span className="data triage-tag__seats-num">
            {inst.vacantSeats} / {inst.totalSeats}
          </span>
        </span>
      </span>

      <span className="triage-tag__bands">
        {TRIAGE_LEVELS.slice(0, kept).map((band, i) => {
          const verdict = i === kept - 1;
          return (
            <span
              key={band.key}
              className={[
                "triage-tag__band",
                verdict ? "triage-tag__band--verdict" : "",
                verdict && torn ? "triage-tag__band--tear" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              style={{ background: band.color, color: `var(--on-triage-${i})` }}
            >
              <span className="triage-tag__code">{band.code}</span>
              {verdict && (
                <span className="triage-tag__verdict">{band.name}</span>
              )}
              <span className="triage-tag__code">{band.code}</span>
            </span>
          );
        })}
      </span>
    </a>
  );
}
