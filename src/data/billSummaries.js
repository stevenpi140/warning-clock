// 加速政府癱瘓法案：提案編號 → 一句話摘要。
// 呈現層（LegislatorScoreboard 展開明細）以摘要取代冗長的法案全名，
// 法案全名與提案編號改藏在該列的 title 提示與議案連結中。
//
// 本檔為手動維護的對照表，與自動產生的 legislatorScores.js 分離：
// legislatorScores.js 由 build_legislator_data.py 產出，勿手動編輯。
// 新增法案時，在此以提案編號為 key 補一筆摘要即可；查無摘要者自動 fallback 顯示法案全名。

export const BILL_SUMMARIES = {
  // 憲法法庭
  11006755: "提高憲法法庭決議人數門檻，憲法法庭難以決議",
  11006044: "提高憲法法庭成會人數門檻，憲法法庭難以成會",
  // 監察院
  11021601: "限縮監察院長出缺代理時間，製造治理空窗",
  // 檢察總長
  11021696: "限縮檢察總長出缺代理時間，製造治理空窗",
  11021600: "限縮檢察總長出缺代理時間，製造治理空窗",
  11021842: "限縮檢察總長出缺代理時間與職權，製造治理空窗",
  // 中選會
  11021630: "限縮中選會主委出缺代理時間，製造治理空窗",
  // NCC
  11000955:
    "限縮 NCC 委員連任、擴權解職 NCC 委員、刪除延任條款，製造治理空窗",
  11001443: "提高 NCC 成會人數門檻、刪除延任條款，製造治理空窗",
  11001445:
    "限縮 NCC 委員連任、提高 NCC 成會人數門檻、刪除延任條款，製造治理空窗",
  11002719: "限縮 NCC 委員連任、奪取人事任命權",
  // 11004140（NCC 組織法第四條及第七條）尚無摘要，暫以法案全名呈現
  11004716: "刪除 NCC 延任條款，製造治理空窗",
  // 公平會
  11021631: "限縮公平會主委出缺代理時間，製造治理空窗",
  11008055: "刪除公平會延任條款，製造治理空窗",
  11005536: "刪除公平會延任條款，製造治理空窗",
  // 公視
  11017317: "刪除公視董事會延任條款，製造治理空窗",
  11017371: "限制公視董事會延任，製造治理空窗",
};

// 立法院議案頁 URL 形如 https://ppg.ly.gov.tw/ppg/bills/202110067550000/details
// 中段為「202 + 提案編號 + 0000」，由此反推提案編號。
export function billNoFromSource(source) {
  if (typeof source !== "string") return null;
  const m = source.match(/\/bills\/202(\d{8})0000\//);
  return m ? m[1] : null;
}

// 回傳呈現法案角色所需的三段文字：摘要（主）、法案全名＋編號（藏在提示）、提案編號
export function billDisplay(billRole) {
  const billNo = billNoFromSource(billRole.source);
  const summary = (billNo && BILL_SUMMARIES[billNo]) || billRole.bill;
  const fullTitle = billNo
    ? `${billRole.bill}（提案編號 ${billNo}）`
    : billRole.bill;
  return { billNo, summary, fullTitle };
}
