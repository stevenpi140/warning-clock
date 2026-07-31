# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 專案定位

這是一份**編輯性、政治性的單頁文件網站**（「台灣黎巴嫩化警示鐘」），呈現 2024 年以來已經、曾經或即將被鄭麗文傅崐萁集團（藍白）癱瘓的台灣國家機關（構）（憲法法庭、監察院、檢察總長、中選會、通傳會、公平會、公共電視、個資會、考試院），並以「惡意癱瘓指數排名表」逐位記錄立委在人事同意權案的行使結果。它不是通用工具，而是一份**依公開資訊彙整、附來源、持續更新**的政治論述卷宗。

視覺語言為**深底「國債鐘 × 卷宗」**：用車站翻牌（split-flap）計時鐘把「停擺持續累積」的時間壓力視覺化，其餘以冷靜權威的卷宗排版承載事實與來源。設計哲學＝**可信度優先、戲劇是鉤子**。

## 目錄與工作位置（重要）

- 主工作目錄是專案根 `06.12 警世鐘/`，但**實際的 app 與 git repo 在子目錄 `warning-clock/`**；**本檔位於 repo 內（`warning-clock/CLAUDE.md`），已納入版控**。
- 所有 `npm` 指令、原始碼編輯都在 `warning-clock/` 內進行。
- 根目錄另有素材檔（docx、pdf、經民連 logo）。`warning-clock-desktop.png` / `warning-clock-mobile.png` 兩張截圖是**舊版淺色稿，已過時**，勿當現況參考。

## 常用指令（在 `warning-clock/` 內執行）

```bash
npm install        # 安裝相依套件
npm run dev        # Vite dev server，port 3000，host 開放（區網可連）
npm run build      # 產出靜態檔到 dist/
npm run preview    # 預覽 build 結果
```

無測試、無 lint 設定（不要假設有 test/lint 指令）。部署目標為 **Vercel**（`.vercel/project.json` 已連結 project `warning-clock`，`.vercel/` 已被 gitignore；以 `npx vercel --prod` 部署）。

## 架構

技術棧：React 19 + Vite 8 + lucide-react，純前端、無路由、無後端、無狀態管理函式庫。字型 Noto Serif TC 由 `index.html` 從 Google Fonts 載入。

**核心設計：內容與呈現分離。** 所有文件內容集中在 `src/data/`，`src/App.jsx` 與 `src/components/` 是依資料渲染的呈現層。**要改文件內容（新增機關、更新席次、補事件、改措辭），動 `src/data/` 的檔案，不要把內容硬寫進元件。**

### 資料層 `src/data/`

- **`institutions.js`**（機關卷宗，唯一資料來源）：匯出 `{ institutions, PARALYSIS_START, PARALYSIS_START_NOTE, DATA_UPDATED }`。
  - `PARALYSIS_START`＝2024-09-01 00:00（第 13 屆考試院正副院長及考試委員 2024/8/31 任期屆滿後，考試委員出缺之時點），驅動首屏「國家機關（構）停擺鐘」即時天數。考試院是第一個因人事同意權遭杯葛而停擺的憲政機關，故取為計時原點（前一版起算點為 2024-05-28 16:41 國會擴權法案三讀時點，2026/07 已改）。
  - `PARALYSIS_START_NOTE`＝停擺鐘下方的起算說明文字，由 `App.jsx` 的 `FlapClock` 以 `note` prop 接收、渲染成 `.debt-clock__note`。**改說明文字動這裡，不要改元件。**
  - 每個機關物件欄位：`id`（也是錨點 `#id`，CaseIndex 與卷宗共用）、`name`、`subtitle`（英文）、**`status`（檢傷分級：`collapsed`／`critical`／`atRisk`／`stable`，定義見下節）**、`statusLabel`（一句話現況，自由文字）、`totalSeats`、`vacantSeats`、選用 `seatNoun`（如「應設機關」）、`criticalDate`（ISO 或 null）、`criticalDateLabel`、選用 `elapsedSince`／`elapsedSinceLabel`（已癱瘓累積計時）、`org`（組織與任期）、`keyFact`、選用 `keyFactEn`、`actions`（藍白惡行）、`impact`（機關癱瘓後果）、`timeline`（`[{date,text}]`）、`sources`（`[{label,url}]`）。
- **`legislatorScores.js`**（立委計分板，唯一資料來源；**由公報唱票解析產生，勿手改個別票格**）：匯出 `{ SCORE_META, PARALYSIS_THRESHOLD, CASES, LEGISLATORS }`。
  - `CASES`＝9 件人事同意權案（考試院、大法官一／二輪、公平會、審計長、NCC、中選會一／二輪、檢察總長），每案 `id`、`date`、`org`、`nomineeCount`、`nominees`（被提名人名單，順序即票格順序）、`passed`、`dataStatus`、`gazette{議程編號,url,pages}`（立法院公報出處）。
  - `LEGISLATORS`＝113 位立委，欄位 `rank`、`name`、`party`、`agree`、`nonAgree`、`inOffice`、`index`（癱瘓政府指數）、`billRoles`／`billBonus`／`weightedIndex`（法案角色加權）、`paralyzing`（是否達 `PARALYSIS_THRESHOLD`＝40）、`breakdown`、`perCase`（每案四項計數）、**`votes`**（每案一個陣列，與該案 `nominees` 同序，值為 `同意`／`不同意`／`無效`／`未領票`；不在任的案不出現該 key）、選用 `voteNotes`（極少數有實質可考據事由的票格，目前不在畫面顯示）。
  - 全部 4859 個票格逐格解析自立法院公報院會紀錄的唱票逐字稿（`ppg.ly.gov.tw`），已與 `perCase` 彙總交叉驗證零不符。要新增案件時：抓該次院會公報 → 解析 `{委員}委員同意權票：` 區塊（單一被提名人的案是同一行格式）→ 補 `CASES` 與各立委 `votes`，並驗算 `votes` 與 `perCase` 一致。公報議程可用 `https://ly.govapi.tw/v2/gazette_agendas?會議日期=YYYY-MM-DD` 查得。
  - 注意：公報對原住民籍立委的姓名寫法不一致（時而「鄭天財Sra Kacaw」、時而「鄭天財」），比對姓名時要剝除拉丁族名，否則會誤判為未領票。
- **`billSummaries.js`**：法案一句話摘要與議案編號解析（`BILL_SUMMARIES`、`billNoFromSource`、`billDisplay`），供計分板呈現法案角色。
- **`orgInfo.js`**：匯出 `economicDemocracyUnion`（經民連，footer 發起／合作團體資訊）。
- **`budget.js`**（預算警示線）：匯出 `{ budget, BUDGET_SUBMIT_DATE, BUDGET_PASSED_DATE }`。**目前未上架**：App.jsx 已不再 render 預算鐘與預算卷宗（`BudgetClock.jsx` 同此狀態），資料保留待改寫後再用。

### 檢傷分類系統 `src/components/statusTone.jsx`（唯一登錄處）

2026/7 改版：狀態改採**緊急救護檢傷分類（triage tag，傷票）**四級，`TRIAGE_LEVELS` 是唯一登錄處，新增或改級別只動這裡。

| status | 代號 | 級別 | 檢傷 | 色 |
|---|---|---|---|---|
| `collapsed` | 0 | 全面癱瘓 | 瀕死 | 黑 `--triage-0`（深底挖空＋骨白髮絲線） |
| `critical` | I | 瀕臨全面癱瘓 | 重傷 | 紅 `--triage-1`（＝全站印泥紅 `--accent`） |
| `atRisk` | II | 有癱瘓危險 | 中傷 | 黃 `--triage-2`（琥珀家族） |
| `stable` | III | 正常運行（含曾癱瘓已恢復） | 輕傷 | 綠 `--triage-3`（計分板綠灰家族） |

**四色是資訊本身（救護檢傷既有標準），不是新增的品牌 accent**；除黑與綠外皆沿用既有色相，單一 accent 紀律未被推翻。

匯出 `TRIAGE_LEVELS`、`toneOf()`、`statusColorOf()`、`chartColorOf()`、`levelIndexOf()`、`<TriageTag>`。

- **`<TriageTag>`**：**一個機關一張傷票**，照搬傷票判讀機制，只保留判定級別（含）以上的色條，撕口切鋸齒且不補位，因此**傷票愈短＝傷得愈重**；最下面那條＝判定結果，印上級別名。
- **`chartColorOf()`**：進度條、數據字等畫在深底上的場合用它，黑級會換成骨白（否則整條看不見）。畫色塊/章用 `statusColorOf()`。
- `statusLabel` 只是該機關此刻的一句話現況（如「29 席全數出缺・投票延至 9/29」），**不決定顏色也不決定分級**。

**2026/7/31 第二版改版紀錄（勿回退）**：第一版把傷票做成每列左側 18px 的迷你色條＋每級一條全幅色帶，是錯的——傷票是掛在「一個傷病患」身上的實體物件，18px 根本看不出四條色條與撕口，而每列重複一次級別（列已按級別分組）純屬贅飾；三條染底色帶在深底上也只是糊掉的橫紋。改成一張一張的傷票牆後這些問題一次消失。

### 呈現層 `src/App.jsx` + `src/components/`

頁面順序：**AlertBanner → hero（印章＋大標＋國家機關（構）停擺鐘＋說明）→ 案件索引 CaseIndex → 9 張機關卷宗 → 惡意癱瘓指數排名表 LegislatorScoreboard → footer（經民連＋免責）**。機關卡的手風琴展開狀態存在單一 `expandedCard`，計分板另有自己的 `expandedName`。

- **`flap.jsx`**：翻牌鐘原件。`useElapsedParts(startDate, endDate?)` 即時算天/時/分/秒（給 `endDate` 即定格）；`FlapDigit`、`FlapGroup`（`tone="accent"` 讓「天」吃 accent 色）。
- **國家機關（構）停擺鐘**（App.jsx 內 `FlapClock`，包在 `.clock-board.clock-board--single`）：目前只有這一座鐘。鐘面下方以髮絲線隔出 `.debt-clock__note` 起算說明（文字來自 `PARALYSIS_START_NOTE`）。`.clock-board` 的雙欄樣式仍在 CSS（預算鐘若回歸可直接用），`--single` 修飾子讓單鐘置中不被拉伸。
- **`CaseIndex.jsx`**：案件索引＝**傷票牆**。`.triage-key`（四格圖例：代號章｜級別｜檢傷｜件數，件數由資料層即時算）＋ `.triage-board`（3 欄 grid，9 張 `<TriageTag>` 依 `toneOf().index` 排序，`align-items: start` 讓上緣切齊像掛在同一根桿子上）。不分節、不放倒數天數：分級由傷票長度與底色表達，切節與倒數都是把同一件事再講一次。不改資料。
  - 傷票長度＝嚴重度，所以 `.triage-tag__body` 給 `min-height` 固定文字區，長短才不會被文案長度污染。
  - 撕口用 `conic-gradient` 遮罩做鋸齒（`--tooth-w` / `--tooth-h`），並對非 `stable` 的傷票 `border-bottom: none`，否則鋸齒下方還壓一條直線。
  - 行動版 768/480 都維持**兩欄**：單欄會讓九張傷票拉出近 5,000px 捲動。
- **`InstitutionCard.jsx`**：收合態＝機關名＋級別章（`.triage-chip`：代號＋級別名）＋一句話現況＋一行空缺＋截斷 keyFact＋展開鈕，卡片左緣色規吃 `--tier-rule` 標示級別；展開態＝4-metric 格＋進度條＋卷宗五段（組織與任期／藍白惡行／機關癱瘓後果／事件時序／資料來源）＋關鍵日倒數。
- **`AlertBanner.jsx`**：頂部 sticky 公告列，**件數由資料層即時算出**（不要手寫數字，會與卷宗脫節）。
- **`LegislatorScoreboard.jsx`**：惡意癱瘓指數排名表（`id="legislator-scoreboard"`）。政黨分頁過濾＋預設顯示 20 位（`PAGE_SIZE`）；每列＝排名｜姓名＋黨籍章｜同意／非同意｜指數條｜分項；展開態＝**同意權行使具體細節**（`CaseRow`：一案一列，左為案由／日期／公報連結，右依行為分群列出被提名人姓名，同案同行為併成一行）＋法案角色清單。未達 `PARALYSIS_THRESHOLD` 者以分隔線置於表末。投票行為四色定義在檔內 `VOTE_TONE`（同意＝`--agree` 綠灰、不同意＝`--accent`、無效＝`--caution`、未領票＝`--text-muted`）。
- **`BudgetClock.jsx`**：`BudgetFlap`（翻牌鐘）＋ `BudgetDossier`（預算卷宗）。**目前未被 App.jsx 引用**，與 `budget.js` 一起保留待改寫。

### `src/App.css`（單一樣式檔，~1.3k 行）

BEM 命名。設計 token 集中在 `:root`：`--accent`(#c2362f 單一印泥紅)、`--caution`(琥珀)、`--neutral`、`--bg-*`、`--text-*`、`--bone`、`--radius`(2px，SHAPE LOCK 全站一致圓角)、`--font-mono`（數據等寬聲音，只套純數字/拉丁元素，避免吃到 CJK）。響應式斷點 `768px` 與 `480px`，另有 `@media print` 與 `prefers-reduced-motion`。

**視覺紀律（taste-skill 改版後，勿回退）**：單一 accent、**禁 neon/outer glow**、陰影染底色非純黑；動態只留翻牌 tick 與展開（無脈動點/閃爍/進場位移）；全站可見文字**零 em-dash/en-dash**（範圍/分隔一律用一般 hyphen）。

## 編輯內容時的注意事項

- 文件含**刻意保留的政治定性措辭**（如「傅崐萁集團」「藍白惡行」「機關癱瘓後果」）。這些是有意的編輯內容，不是要修掉的 bug；改動措辭前先理解其政治脈絡。
- 每筆事實主張都附 `sources`（公開資料連結）。新增或修改主張時，**同步維護對應來源連結**，與「依公開資訊彙整」定位一致。
- **不導入偽官方裝飾**（虛構檔號、印章、騎縫）——會傷可信度。公文質感只靠方角、髮絲線、mono 數據聲音達成。
- 改內容動 `src/data/`；改分級／新增 status 動 `statusTone.jsx` 的 `TRIAGE_LEVELS`（唯一登錄處）；改版面動 `App.css`（守單一 accent、無 glow、`--radius`、768/480 斷點、em-dash 禁令）。
- **機關狀況一律用四個分級詞**：全面癱瘓／瀕臨全面癱瘓／有癱瘓危險／正常運行。事實描述（屆滿、出缺、卸任、不足額、遭否決）維持事實寫法，不換成分級詞。例外：《公視法》「看守延任條款」等法條用語、sources 引用的新聞原標題、停擺鐘名稱與計分板「癱瘓政府指數」，都不改。
- **立委票格資料（`legislatorScores.js` 的 `votes`／`perCase`）一律以立法院公報唱票為準，不得手動微調單一票格。** 這份表點名到個人，錯一格就是對特定立委的不實指控；要更動就回去解析公報，並重跑 `votes` 與 `perCase` 的一致性驗算。
