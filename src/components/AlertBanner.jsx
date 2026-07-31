import { institutions } from '../data/institutions'
import { TRIAGE_LEVELS } from './statusTone'

// 公告列直接由資料層的檢傷分級算出件數，避免手寫數字與卷宗現況脫節。
export default function AlertBanner() {
  const tally = TRIAGE_LEVELS.map((lv) => ({
    name: lv.name,
    count: institutions.filter((i) => i.status === lv.key).length,
  })).filter((t) => t.count > 0)

  return (
    <div className="alert-banner">
      <div className="alert-banner__inner">
        <span className="alert-banner__text">
          憲政警示｜{institutions.length} 個國家機關（構）遭杯葛、惡修法令或刪減預算，檢傷分級：
          {tally.map((t) => `${t.count} 個${t.name}`).join('、')}
        </span>
      </div>
    </div>
  )
}
