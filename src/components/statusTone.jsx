// 狀態 → 三色階 + 造型（同色相，以實心/外框分級；保住新聞學 5 級分級而不對 partial 誇大）
//   已癱瘓 paralyzed = 印泥紅實心 ／ 逾期違憲 overdue = 印泥紅外框
//   部分停擺 partial = 琥珀實心 ／ 瀕危 atRisk = 琥珀外框 ／ 曾癱瘓已恢復 former = 灰實心
// 卡片（InstitutionCard）與案件索引（CaseIndex）共用，避免色彩邏輯各寫一份。
export const STATUS_TONE = {
  paralyzed: { color: 'var(--accent)', fill: true },
  overdue: { color: 'var(--accent)', fill: false },
  partial: { color: 'var(--caution)', fill: true },
  atRisk: { color: 'var(--caution)', fill: false },
  former: { color: 'var(--neutral)', fill: true },
}

export function toneOf(status) {
  return STATUS_TONE[status] || STATUS_TONE.paralyzed
}

export function statusColorOf(status) {
  return toneOf(status).color
}

export function StatusMarker({ status }) {
  const tone = toneOf(status)
  return (
    <span
      className="status-marker"
      style={{
        borderColor: tone.color,
        background: tone.fill ? tone.color : 'transparent',
      }}
      aria-hidden="true"
    />
  )
}
