import { useState, useEffect, useRef } from 'react'

// 車站翻牌（split-flap）計時鐘的共用原件，供 hero 憲政鐘與預算鐘共用。

export function usePrevious(value) {
  const ref = useRef(value)
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

// 計算 startDate 至今（或至 endDate 定格）的天/時/分/秒。
// 傳入 endDate（如三讀完成日）時，數字定格、不再每秒重算。
export function useElapsedParts(startDate, endDate = null) {
  const frozen = endDate != null
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    if (frozen) return
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [frozen])

  const end = frozen ? new Date(endDate).getTime() : now
  const totalSec = Math.max(0, Math.floor((end - new Date(startDate).getTime()) / 1000))
  return {
    days: Math.floor(totalSec / 86400),
    h: Math.floor((totalSec % 86400) / 3600),
    m: Math.floor((totalSec % 3600) / 60),
    s: totalSec % 60,
    totalHours: Math.floor(totalSec / 3600),
    totalMinutes: Math.floor(totalSec / 60),
    frozen,
  }
}

// 單張翻牌數字：值改變時上下兩葉以新 key 重掛載而重播翻轉；未變動的位維持靜態。
export function FlapDigit({ value }) {
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

export function FlapGroup({ value, pad, label, tone }) {
  const digits = String(value).padStart(pad, '0').split('')
  return (
    <div className={`flap-group${tone ? ` flap-group--${tone}` : ''}`}>
      <div className="flap-group__digits">
        {digits.map((digit, i) => (
          <FlapDigit key={i} value={digit} />
        ))}
      </div>
      <div className="flap-group__label">{label}</div>
    </div>
  )
}
