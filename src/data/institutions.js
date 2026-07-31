// 「國家機關（構）停擺」起算日：2024/09/01 00:00。
// 第 13 屆考試院院長、副院長及考試委員任期於 2024/08/31 屆滿，藍白多數延宕人事同意權審查逾三個月，
// 考試院自 9 月 1 日零時起出缺，是第一個因人事同意權遭杯葛而全面癱瘓的憲政機關，故以此為全站計時原點。
// （前一版起算點為 2024/05/28 16:41《立法院職權行使法》三讀時點，已於 2026/07 改為本起算點。）
const PARALYSIS_START = "2024-09-01T00:00:00+08:00";

// 首屏停擺鐘下方的起算說明（呈現層只負責排版，文字一律留在資料層）。
const PARALYSIS_START_NOTE =
  "計時自 2024 年 9 月 1 日零時起算。第 13 屆考試院院長、副院長及考試委員任期於 2024 年 8 月 31 日屆滿，藍白多數延宕人事同意權審查逾三個月，考試院自 9 月 1 日零時起出缺，是第 11 屆立法院所造成第一個因人事同意權遭杯葛而全面癱瘓的憲政機關，癱瘓警示鐘聲就此響起。";

// 資料實際校準日（footer「最後更新」顯示用）：每次更新 src/data/ 內容時手動改這裡。
const DATA_UPDATED = "2026年7月31日";

// status ＝ 檢傷分類級別（唯一登錄處在 components/statusTone.jsx 的 TRIAGE_LEVELS）
//  collapsed 全面癱瘓（黑・瀕死）/ critical 瀕臨全面癱瘓（紅・重傷）
//  atRisk 有癱瘓危險（黃・中傷）/ stable 正常運行，含曾癱瘓已恢復（綠・輕傷）

const institutions = [
  {
    id: "constitutional-court",
    name: "憲法法庭",
    subtitle: "Constitutional Court",
    status: "atRisk",
    statusLabel: "15 席僅 8 人在任",
    totalSeats: 15,
    vacantSeats: 7,
    criticalDate: null,
    org: "司法院設大法官 15 人、任期 8 年，組成憲法法庭審理法規範及裁判憲法審查、機關爭議、總統副總統彈劾、政黨違憲解散、統一解釋法律命令等憲法訴訟案件。",
    keyFact:
      "2024/10/31 七位大法官卸任、總統兩度提名均遭立法院否決，大法官僅餘 8 人長期不足額；藍白惡修《憲法訴訟法》一度使憲法法庭全面癱瘓四百餘天，雖經 114 年憲判字第 1 號宣告該修法違憲失效而回復運作，現仍因長期不足額而有癱瘓危險。2027/10/1 另有 4 名大法官任期屆滿，屆時若提名續遭杯葛，將僅餘蔡彩貞、朱富美、陳忠五、尤伯祥 4 人，憲法法庭即瀕臨全面癱瘓。",
    keyFactEn:
      "Seven justices left in Oct 2024 and the President’s nominations were twice rejected, leaving only 8 of 15. A high-quorum amendment paralyzed the Court for 400+ days until it was struck down as unconstitutional (Judgment 114-Hsien-Pan-1); a renewed blockade still threatens future vacancy.",
    actions: [
      "惡意杯葛大法官提名：2024/10/31 七位大法官卸任後，總統兩次提名均遭立法院否決，大法官不足額至今。",
      "惡修《憲法訴訟法》：2024/12/20 修正第 4、30、43 條，規定評議大法官不得低於 10 人、作成違憲宣告不得低於 9 人，且不分案件類型一律適用，以高門檻癱瘓釋憲。",
    ],
    impact: [
      "憲法法庭全面癱瘓期間，有問題或不合時宜的法律與裁判無法被宣告違憲而須繼續適用，嚴重損害人民權利（近三年逾 98% 釋憲案由人民提出）。",
      "《憲訴法》惡修已經 114 年憲判字第 1 號宣告違憲失效、憲法法庭回復運作；惟 15 席大法官僅 8 人在任，若提名持續遭杯葛、現額隨任期屆滿逐年流失，憲法法庭將持續處於有癱瘓危險狀態。",
      "2027/10/1 另有 4 名大法官任期屆滿，屆時若提名續遭杯葛，15 席將僅餘 4 人在任，憲法法庭即瀕臨全面癱瘓。",
    ],
    timeline: [
      {
        date: "2024/10/31",
        text: "七位大法官卸任，總統提名兩度遭立法院否決，憲法法庭有癱瘓危險",
      },
      {
        date: "2024/12/20",
        text: "立法院惡修《憲法訴訟法》提高評議與違憲宣告門檻，憲法法庭全面癱瘓",
      },
      {
        date: "2025/12/19",
        text: "114 憲判字第 1 號宣告該修法違憲失效，憲法法庭全面癱瘓逾 400 天後回復運作",
      },
      {
        date: "2027/10/01",
        text: "另 4 位大法官任期屆滿，屆時僅餘蔡彩貞、朱富美、陳忠五、尤伯祥 4 人，瀕臨全面癱瘓",
      },
    ],
    sources: [
      {
        label: "司法院憲法法庭：114 年憲判字第 1 號判決（官方）",
        url: "https://cons.judicial.gov.tw/docdata.aspx?fid=38&id=355485",
      },
      {
        label: "中央社：憲法法庭今年首例判決 憲訴法修法宣告違憲",
        url: "https://www.cna.com.tw/news/aipl/202512190174.aspx",
      },
      {
        label: "報導者：憲法法庭重啟 憲訴法部分修正條文違憲失效",
        url: "https://www.twreporter.org/a/amendment-to-constitutional-court-procedure-act-unconstitutional",
      },
    ],
  },
  {
    id: "control-yuan",
    name: "監察院",
    subtitle: "Control Yuan",
    status: "collapsed",
    statusLabel: "29 席全數出缺・投票延至 9/29",
    totalSeats: 29,
    vacantSeats: 29,
    criticalDate: "2026-09-29",
    criticalDateLabel: "距立法院監委同意權投票",
    org: "設監察委員 29 人（含院長、副院長）、任期 6 年，為國家最高監察機關，行使彈劾、糾舉、糾正及審計權，並設國家人權委員會；第 6 屆任期 2026/7/31 屆滿。",
    keyFact:
      "第 6 屆 29 名監察委員任期 2026/7/31 屆滿，自 2026/8/1 起監察院 29 席全數出缺，無人可行使彈劾、糾舉、糾正等監察權，國家人權委員會亦同時全面癱瘓。總統府 2026/6/11 已公布第 7 屆院長、副院長及 25 名監委被提名人，立法院朝野協商卻將記名投票押到下會期 2026/9/29 上午，監察院至少全面癱瘓兩個月。2025 年度總預算另刪減監察院業務費達 96%。",
    keyFactEn:
      "All 29 Control Yuan members left office when their terms ended on 31 July 2026, leaving every seat vacant from 1 August and halting the National Human Rights Commission with it. Nominees for the 7th term were announced on 11 June 2026, but the Legislature pushed the confirmation vote to 29 September, guaranteeing at least two months with no Control Yuan. The 2025 budget had already cut its operating funds by 96%.",
    actions: [
      "拖延同意權投票：總統府 2026/6/11 公布第 7 屆被提名人，立法院朝野協商卻將記名投票延至下會期 2026/9/29 上午 10 時，任期屆滿與投票之間形成至少兩個月的全面癱瘓。",
      "惡意刪減預算：2025 年度刪減監察院業務費達 96%，一般行政、調查巡察、議事、國際監察及人權業務預算近乎全刪。",
      "揚言全面否決：蔣萬安籲立法院藍白黨團全數否決監委人選並廢除監察院；羅智強表態將對所有監委投反對票、進行人事凍結。",
    ],
    impact: [
      "2026/8/1 起監察院無任何監察委員，彈劾、糾舉、糾正權及國家人權委員會職權全面停止行使，人民陳情案件無人可受理審查。",
      "預算遭刪 96% 後監察院已僅能勉力維持運作，人事再全面出缺，等同同時抽掉預算與人力。",
      "監察院每月收受人民陳情書狀逾千件，依我國現行權力分立制度，監察院仍有不可取代之功能，若真要討論廢除監察院，應啟動修憲程序，並規劃監察院職權分配之具體方案及期程，而不是封殺人事及預算，癱瘓監察院卻不討論組織重整，致監察院無法發揮關鍵職權。",
    ],
    timeline: [
      { date: "2025", text: "立法院刪減監察院 2025 年度業務費達 96%" },
      {
        date: "2026/06/11",
        text: "總統府公布監察院第 7 屆正、副院長及監察委員被提名人",
      },
      { date: "2026/07/31", text: "第 6 屆 29 名監察委員任期屆滿" },
      {
        date: "2026/08/01",
        text: "監察院 29 席全數出缺，監察權全面停止行使，監察院全面癱瘓",
      },
      {
        date: "2026/09/29",
        text: "立法院新會期第 1 次會議，排定上午 10 時就監委人事同意權案記名投票",
      },
    ],
    sources: [
      {
        label: "監察院官網：2025 年度業務費遭刪逾 96%，將聲請釋憲及暫時處分",
        url: "https://www.cy.gov.tw/News_Content.aspx?n=124&s=32763",
      },
      {
        label: "總統府：監察院第 7 屆院長、副院長及監察委員被提名人介紹",
        url: "https://www.president.gov.tw/Page/777",
      },
      {
        label: "TVBS：蔣萬安拋廢監院 羅智強挺監委全否決",
        url: "https://news.tvbs.com.tw/politics/3228862",
      },
      {
        label:
          "中央社：朝野黨團協商結論 立院新會期 9/29 開議、同日上午監委同意權記名投票（2026/07/31）",
        url: "https://www.cna.com.tw/news/aipl/202607310066.aspx",
      },
    ],
  },
  {
    id: "prosecutor-general",
    name: "檢察總長",
    subtitle: "Prosecutor General",
    status: "atRisk",
    statusLabel: "2026/5/8 起懸缺・由代理人代行",
    totalSeats: 1,
    vacantSeats: 1,
    criticalDate: null,
    org: "依《法院組織法》第 66 條，最高檢察署檢察總長由總統提名、經立法院同意任命，任期 4 年不得連任；為全國 1,460 位檢察官之指揮監督者。",
    keyFact:
      "檢察總長邢泰釗 2026/5/7 屆滿，總統提名徐錫祥於 5/5 遭立法院否決，檢察總長自 2026/5/8 起懸缺，僅由總統 5/7 指定之徐錫祥代理；藍白並提《法院組織法》修正限制代理檢察總長之期限與職權，檢察體系有癱瘓危險。",
    keyFactEn:
      "Prosecutor-General Hsing Tai-chao’s term ended on 7 May 2026; the President’s nominee was rejected on 5 May and is now serving only in an acting capacity, while the blue-white camp moves to cap and curtail the acting role.",
    actions: [
      "封殺提名：賴清德 2026/3/13 提名徐錫祥為檢察總長，立法院於 5/5 否決，致檢察總長懸缺。",
      "限縮代理：藍白提《法院組織法》第 66 條修正，增訂「未獲立法院同意者不得代理」、每人限代理一次，代理期限國民黨版不得逾六個月、民眾黨版更限三個月，意在壓縮代理檢察總長之存續與職權空間。",
    ],
    impact: [
      "檢察總長指揮監督全國各級檢察署檢察官、得親自處理或移轉其事務，檢察官對其命令有服從義務。",
      "依《刑事訴訟法》第 441 條，判決確定後發現案件之審判違背法令者，非常上訴專屬檢察總長得向最高法院提起；檢察總長懸缺，即無人可提起非常上訴，冤案救濟因而失去唯一的法定發動者。",
      "總長懸缺及代理權限遭限縮，將對檢察體系之偵查、公訴等職權產生重大影響，檢察總長一職有癱瘓危險；若代理期限屆滿而新任人選續遭否決，即形同全面癱瘓。",
    ],
    timeline: [
      { date: "2026/03/13", text: "總統提名徐錫祥為檢察總長" },
      { date: "2026/05/05", text: "立法院否決提名" },
      {
        date: "2026/05/07",
        text: "邢泰釗屆滿，總統指定徐錫祥代理；檢察總長自 5/8 起懸缺，有癱瘓危險",
      },
    ],
    sources: [
      {
        label: "聯合報：立院投票 藍白聯手反對 徐錫祥未過關",
        url: "https://udn.com/news/story/6656/9482539",
      },
      {
        label: "聯合報：總統府指派徐錫祥代理檢察總長至新總長產生",
        url: "https://udn.com/news/story/6656/9488773",
      },
      {
        label: "民間司法改革基金會：指定遭否決者代理檢察總長有適法性疑慮",
        url: "https://www.jrf.org.tw/articles/3208",
      },
      {
        label: "全國法規資料庫：刑事訴訟法第 441 條（非常上訴由檢察總長提起）",
        url: "https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0010001&flno=441",
      },
      {
        label: "立法院：許宇甄提案《法院組織法》第 66 條條文修正草案",
        url: "https://ppg.ly.gov.tw/ppg/bills/202110218420000/details",
      },
      {
        label: "立法院：翁曉玲、王鴻薇提案《法院組織法》第 66 條條文修正草案",
        url: "https://ppg.ly.gov.tw/ppg/bills/202110216000000/details",
      },
      {
        label: "立法院：台灣民眾黨黨團提案《法院組織法》第 66 條條文修正草案",
        url: "https://ppg.ly.gov.tw/ppg/bills/202110216960000/details",
      },
    ],
  },
  {
    id: "cec",
    name: "中選會",
    subtitle: "Central Election Commission",
    status: "atRisk",
    statusLabel: "11 席僅 8 人在任・低於法定下限 9 人",
    totalSeats: 11,
    vacantSeats: 3,
    criticalDate: null,
    org: "依《中央選舉委員會組織法》置委員 9-11 人（含主委、副主委各 1）；依《中央選舉委員會會議規則》第 5 條。",
    keyFact:
      "原 6 名委員（含主委李進勇）2025/11/3 任期屆滿卸任後僅餘 4 人，中選會全面癱瘓約半年；2026/3/13 立法院通過游盈隆等 4 人、否決胡博硯等 3 人，游盈隆 4/27 就任、5/15 主持首次委員會議，中選會回復運作。惟現有 8 名委員仍低於法定下限 9 人、副主委從缺；行政院 4/21 補提名 3 人，2026/7/3 又遭立法院全數否決，缺額補足遙遙無期，中選會仍有癱瘓危險，真正考驗在 2027/11/3 另 4 名委員任期屆滿。",
    keyFactEn:
      "Six commissioners’ terms expired on 3 Nov 2025, leaving only four and stalling the Commission for about six months. On 13 Mar 2026 the Legislature confirmed four nominees but rejected three; after delayed appointments, chair Yu Ying-lung took office on 27 Apr and convened the first commission meeting on 15 May, restoring operations. The current eight members remain below the statutory minimum of nine, with the deputy chair post still vacant. A follow-up slate of three nominees was rejected wholesale on 3 Jul 2026, leaving the vacancies unfilled; the real test comes when four more terms expire on 3 Nov 2027.",
    actions: [
      "部分否決提名：行政院提名 7 人，立法院於 2026/3/13 僅通過游盈隆、李禮仲、蘇嘉宏、蘇子喬 4 人，否決副主委被提名人胡博硯及委員黃文玲、陳宗義 3 人；行政院批藍白未守協商誠信，致中選會委員缺額、副主委至今從缺。",
      "再度全數否決補提名：行政院 2026/4/21 補提名沈淑妃、蔡維哲、黃謀信 3 人，立法院 7/3 記名投票全數封殺（沈淑妃 50 同意:60 不同意:1 無效、蔡維哲 50:61、黃謀信 50:61）；民進黨籍委員除林宜瑾未領票外全數投同意，國民黨籍除盧縣一於沈淑妃案投無效票、院長韓國瑜未領票外全數投不同意，民眾黨與無黨籍全數投不同意，委員缺額與副主委從缺持續無解。",
    ],
    impact: [
      "2025/11/3 起至 2026/5/15 復會前約半年無法召開委員會議與作成決議，中選會全面癱瘓，曾影響選務、公投及罷免等法定事項之推進。",
      "雖已回復運作，現有 8 名委員仍低於法定下限 9 人、副主委從缺，補提名 3 人又於 2026/7/3 遭全數否決，中選會仍有癱瘓危險。",
      "2027/11/3 另 4 名委員（黃秀端、陳月端、吳容輝、游清鑫）任期屆滿，屆時若缺額仍未補齊，11 席將僅餘 4 人在任，中選會即瀕臨全面癱瘓。",
    ],
    timeline: [
      {
        date: "2025/11/03",
        text: "李進勇等 6 名委員任期屆滿卸任，僅餘 4 人、無法召開委員會議，中選會全面癱瘓",
      },
      {
        date: "2026/03/13",
        text: "立法院通過游盈隆等 4 人、否決胡博硯等 3 人",
      },
      {
        date: "2026/04/27",
        text: "游盈隆就任主委（4/21 派令遲發、張惇涵監交）",
      },
      {
        date: "2026/05/15",
        text: "游盈隆主持首次委員會議，全面癱瘓約半年後回復運作，仍有癱瘓危險",
      },
      {
        date: "2026/07/03",
        text: "立法院全數否決行政院補提名沈淑妃、蔡維哲、黃謀信 3 人（第二度封殺，缺額仍 3 席）",
      },
      { date: "2027/11/03", text: "另 4 名委員任期屆滿，須及早提名補足" },
    ],
    sources: [
      {
        label:
          "中央社：游盈隆任中選會主委 胡博硯等 3 人遭立院否決（2026/3/13）",
        url: "https://www.cna.com.tw/news/aipl/202603130156.aspx",
      },
      {
        label: "聯合報：游盈隆 4/27 接掌中選會 張惇涵監交",
        url: "https://udn.com/news/story/6656/9461742",
      },
      {
        label:
          "聯合報：中選會空轉 6 個月終於開會 財產申報系統 8/27 上線（2026/5/15 復會）",
        url: "https://udn.com/news/story/124652/9505473",
      },
      {
        label: "中選會主管法規系統：中央選舉委員會會議規則第 5 條",
        url: "https://law.cec.gov.tw/LawContent.aspx?id=GL000302",
      },
      {
        label: "自由時報：立院拍板 中選會人事同意權案 7/3 投票",
        url: "https://news.ltn.com.tw/news/politics/breakingnews/5484687",
      },
      {
        label: "聯合報：卓揆補提中選會 3 人名單（沈淑妃、蔡維哲、黃謀信）",
        url: "https://udn.com/news/story/6656/9455574",
      },
      {
        label:
          "中央社：中選會人事同意權案 沈淑妃、蔡維哲、黃謀信遭立院否決（2026/7/3）",
        url: "https://www.cna.com.tw/news/aipl/202607030165.aspx",
      },
      {
        label:
          "立法院公報第 115 卷第 54 期院會紀錄：中選會人事同意權案逐格唱票、發票報告書與表決結果（2026/7/3）",
        url: "https://ppg.ly.gov.tw/ppg/download/communique1/final/pdf/115/54/LCIDC01_1155401_00004.pdf",
      },
    ],
  },
  {
    id: "ncc",
    name: "通傳會（NCC）",
    subtitle: "National Communications Commission",
    status: "collapsed",
    statusLabel: "7 席全數出缺・成立 20 年來首見",
    totalSeats: 7,
    vacantSeats: 7,
    criticalDate: null,
    elapsedSince: "2024-11-30",
    elapsedSinceLabel: "自 2024/11/30",
    org: "依《國家通訊傳播委員會組織法》置委員 7 人，決議應以委員總額過半數（4 人）之同意行之；NCC 為通訊傳播事務之獨立管制機關。",
    keyFact:
      "2024/11/30 代理主委翁柏宗因延任條款遭刪除卸任後，NCC 7 名委員僅餘 3 人、未達委員總額過半數（4 人）之決議門檻，自此無法召開法定委員會議、逾百項重大業務無法決議，NCC 全面癱瘓。僅存的代理主委陳崇樹及委員王正嘉、王怡惠又於 2026/7/31 任期屆滿，自 2026/8/1 起 NCC 無任何委員在任，為 2006/2/22 成立以來首見，尚有 748 件案件待委員會議審議。行政院 2026/7/24 提名袁秀慧（主委）、蕭蘋（副主委）等 7 人，仍待立法院審查。",
    keyFactEn:
      "Since acting chair Weng Po-tsung left on 30 Nov 2024 the NCC had only 3 of 7 members, short of the four-vote majority any resolution requires, and could not hold a lawful commission meeting. The last three members’ terms ended on 31 July 2026, so from 1 August the commission has no members at all for the first time since its founding in February 2006, with 748 cases awaiting a commission meeting. A fresh slate of seven nominees was announced on 24 July 2026 and still awaits legislative review.",
    actions: [
      "刪除延任條款：藍白於 2024/7/16 強行三讀刪除延任條款、11/15 三讀通過於次月施行，致代理主委翁柏宗 11/30 卸任，NCC 無法召開委員會議。",
      "封殺全體提名：行政院 2025/7/31 提名蔣榮先、程明修、黃葳威、羅慧雯，2025/11/7 遭藍白全體否決，缺額因而未能補上。",
    ],
    impact: [
      "NCC 自 2024/11/30 委員不足決議門檻起即全面癱瘓，逾百項重大業務無法決議，僅約 58 項基本業務得授權主委召集諮議會議處理。",
      "2026/8/1 起 7 席全數出缺，無委員即無法召開任何委員會議或諮議會議，通訊傳播監理業務全面停止、748 件待審案件無人可決，NCC 全面癱瘓。",
    ],
    timeline: [
      {
        date: "2024/11/30",
        text: "翁柏宗卸任，NCC 委員僅餘 3 人、不足決議門檻，NCC 全面癱瘓",
      },
      { date: "2025/07/31", text: "行政院提名蔣榮先等 4 名委員" },
      { date: "2025/11/07", text: "立法院藍白全體否決 4 名提名人" },
      {
        date: "2026/07/24",
        text: "行政院提名袁秀慧、蕭蘋等 7 名委員，待立法院審查",
      },
      {
        date: "2026/07/31",
        text: "陳崇樹、王正嘉、王怡惠任期屆滿，NCC 自 8/1 起無任何委員在任，全面癱瘓",
      },
    ],
    sources: [
      {
        label: "中央社：NCC 被提名人全遭否決（2025/11/07）",
        url: "https://www.cna.com.tw/news/aipl/202511070091.aspx",
      },
      {
        label:
          "自由時報：NCC 組織法修正通過 翁柏宗 12/1 起不得延任 104 項業務將停擺",
        url: "https://news.ltn.com.tw/news/politics/breakingnews/4864013",
      },
      {
        label: "中央社：新 NCC 委員提名送立院審議（2025/07/31）",
        url: "https://www.cna.com.tw/news/aipl/202507310187.aspx",
      },
      {
        label:
          "中央社：NCC 3 委員任期 31 日屆滿 面臨成立 20 年來首度無委員（2026/07/31）",
        url: "https://www.cna.com.tw/news/afe/202607310185.aspx",
      },
    ],
  },
  {
    id: "ftc",
    name: "公平會",
    subtitle: "Fair Trade Commission",
    status: "atRisk",
    statusLabel: "7 席僅 5 人在任",
    totalSeats: 7,
    vacantSeats: 2,
    criticalDate: null,
    org: "依《公平交易委員會組織法》置委員 7 人、任期 4 年得連任一次；會議須過半數委員出席方能決議，並有較嚴格之利益迴避要求。",
    keyFact:
      "2025/1/17 藍白封殺李鎂、洪財隆續任，公平會僅餘 5 名委員；7/4 又三讀修法刪除延任、限制連任並增訂補提名期限，一旦委員因人事卡關出缺即無人留任，遇須利益迴避之案件恐無法成會，公平會有癱瘓危險。",
    keyFactEn:
      "The blocking of two reappointments on 17 Jan 2025 cut the Fair Trade Commission to five members; a July 2025 amendment removing the holdover clause means vacant seats can no longer be filled by incumbents, threatening quorum on recusal-heavy cases.",
    actions: [
      "封殺續任：2025/1/17 立法院就公平會人事案封殺李鎂、洪財隆，僅通過陳志民、林慶堂，委員降至 5 名。",
      "惡修組織法：2025/7/4 藍白三讀通過委員「限連任一次、已連任者不得再任」、刪除延任規定並增訂補提名期限。",
    ],
    impact: [
      "修法後委員出缺時無法由舊委員留任至新委員產生，席次直接空缺。",
      "現有 5 名委員中辛志中、顏雅倫、李師榮 2027/1/30 屆滿，屆時若人事案續遭杯葛，公平會將僅剩 2 名委員，依《公平交易委員會組織法》雖仍可部分運作，但已少於半數，遇須迴避案件易因人數不足而無法成會，即瀕臨全面癱瘓。",
      "若委員任期陸續屆滿而提名持續遭杯葛，以致全體委員卸任，公平會依組織法即無法運作，形同全面癱瘓。",
    ],
    timeline: [
      { date: "2025/01/17", text: "立法院封殺李鎂、洪財隆，僅通過 2 人" },
      {
        date: "2025/07/04",
        text: "三讀修《公平交易委員會組織法》限制連任、刪延任",
      },
      {
        date: "2027/01/30",
        text: "辛志中、顏雅倫、李師榮 3 名委員任期屆至，屆時僅餘 2 人，瀕臨全面癱瘓",
      },
    ],
    sources: [
      {
        label: "中央社：公平會人事 藍白封殺李鎂、洪財隆 陳志民、林慶堂過關",
        url: "https://www.cna.com.tw/news/aipl/202501170116.aspx",
      },
      {
        label: "ETtoday：立院三讀修正公平會組織法 委員只能連任一次",
        url: "https://www.ettoday.net/news/20250704/2990228.htm",
      },
      {
        label: "自由時報：公平交易委員會組織法三讀 連任限 1 次、刪除延任規定",
        url: "https://news.ltn.com.tw/news/politics/breakingnews/5096157",
      },
    ],
  },
  {
    id: "pts",
    name: "公共電視",
    subtitle: "Public Television Service",
    status: "collapsed",
    statusLabel: "審查委員辭任，無合法董事會",
    totalSeats: 15,
    vacantSeats: 15,
    criticalDate: null,
    elapsedSince: "2026-02-06",
    elapsedSinceLabel: "自 2026/2/6",
    org: "依《公視法》公視基金會設董事 11-15 人、監察人 3-5 人、董事任期 3 年；由立法院推舉審查委員、行政院提名、經審查委員 2/3 同意後聘任。公視董事會為公廣集團最高治理機關。",
    keyFact:
      "第 7 屆董監事 2025/5/19 任期屆滿，原依《公視法》看守延任條款（新的不來、舊的不走）續行職務；藍白 2026/1/16 三讀刪除該條款、2/4 公布、2/6 生效，看守董事會即告解散。新一屆董事會因審查會屢遭杯葛而無法產生足額董事、迄今無人就任，公視自此無合法董事會可核定預算、遴聘總經理與決定節目方針，董事會全面癱瘓。",
    keyFactEn:
      "The 7th board’s term ended on 19 May 2025 but stayed on under the Public Television Act’s holdover clause. The blue-white camp repealed that clause on 16 Jan 2026 (promulgated 4 Feb, effective 6 Feb), dissolving the caretaker board and leaving PTS without a lawful board for about six months, with the 8th board still unseated amid blocked nominations and frozen budgets.",
    actions: [
      "刪除看守條款：2026/1/16 三讀刪除《公視法》第 16 條「董事屆滿未及改聘者延任」（59:49）、2/4 公布、2/6 生效，使屆滿董事無法看守；5/7 羅智強並援引此修法將董事長胡元輝逐出議場。",
      "杯葛審查：第 8 屆審查會 2025/12/31 僅 4 人過關、不足法定下限 11 人；2026/4/16 在野推舉之審委集體請辭／拒審而流會。",
      "刪凍預算：2025 年度公視預算遭刪 2,300 萬、凍結 5.7 億（約 25%）。",
    ],
    impact: [
      "無合法董事會即無法核定預算決算、遴聘總經理、決定節目方針，公視董事會全面癱瘓，並連動整個公廣集團（公視、台語台、客台、兒少台、TaiwanPlus、華視）。",
      "波及 TaiwanPlus 國際傳播與台語、客語公共服務；監委已申請自動調查公視治理危機。",
    ],
    timeline: [
      { date: "2025/05/19", text: "第 7 屆董監事任期屆滿" },
      { date: "2025/12/31", text: "第 8 屆審查會僅 4 人過關，不足下限 11 人" },
      { date: "2026/01/16", text: "立法院三讀刪除董事看守延任條款" },
      {
        date: "2026/02/06",
        text: "刪除延任條款生效（2/4 公布），第 7 屆看守董事會解散，公視董事會自此全面癱瘓",
      },
      { date: "2026/04/16", text: "再次提名遭在野審委請辭、流會" },
    ],
    sources: [
      {
        label: "中央社：第 8 屆公視董事審查 14 人僅 4 人通過",
        url: "https://www.cna.com.tw/news/acul/202512310301.aspx",
      },
      {
        label: "聯合報：公視法修正 董事屆滿未及改聘不可延任（刪看守條款）",
        url: "https://udn.com/news/story/6656/9269556",
      },
      {
        label: "CTWANT：公視預算刪 2,300 萬、凍結約 25%（5.7 億）",
        url: "https://www.ctwant.com/article/391329/",
      },
    ],
  },
  {
    id: "pdpc",
    name: "個資會",
    subtitle: "Personal Data Protection Commission",
    status: "collapsed",
    statusLabel: "尚未成立・嚴重違憲",
    totalSeats: 1,
    vacantSeats: 1,
    seatNoun: "應設機關",
    criticalDate: "2025-08-12",
    criticalDateLabel: "法定應成立期限",
    org: "源於 111 年憲判字第 13 號（健保資料庫案，2022/8/12）：認定我國欠缺個資保護獨立監督機制違憲，命 3 年內（最遲 2025/8/12）完成立法並成立獨立的個人資料保護委員會（規劃為中央三級獨立機關）。",
    keyFact:
      "法定應於 2025/8/12 前成立個資會，迄今逾期；《個資會組織法》2025/5/28 初審通過後送黨團協商，立法院長韓國瑜逾 300 天未召集協商、組織法尚未三讀，違憲狀態持續未消除。",
    keyFactEn:
      "A 2022 constitutional ruling required an independent data-protection authority by 12 Aug 2025; the organic act stalled in caucus negotiation that the Legislative Speaker has not convened for over 300 days, leaving the unconstitutional gap unresolved.",
    actions: [
      "擱置協商：《個資會組織法》2025/5/28 初審通過、6/24 決議送院長召集黨團協商後，院長韓國瑜逾 300 天未召集，組織法迄今未三讀。",
      "藍白兩黨一度提案將個資會籌備處預算砍至 1,000 元。",
    ],
    impact: [
      "法定期限已逾約 10 個月，個資會迄今尚未成立、無從行使任何職權，形同全面癱瘓，違憲狀態持續；有關個資保障業務仍由各部會分散主管，欠缺獨立專責監理機關。",
      "已三讀之《個資法》修正（事故通報、稽核、限制國際傳輸等）因施行繫於委員會成立而尚未上路，衝擊歐盟 GDPR 適足性與台歐資料跨境流通。",
      "AI 時代個資外洩與境外（含中國）資料蒐集無獨立專責機關監理。",
    ],
    timeline: [
      {
        date: "2022/08/12",
        text: "111 年憲判字第 13 號命 3 年內成立獨立個資監督機關",
      },
      {
        date: "2025/05/28",
        text: "《個資會組織法》立法院初審通過、關鍵條文保留協商",
      },
      {
        date: "2025/08/12",
        text: "法定應成立期限屆至，迄今逾期未成立，個資會形同全面癱瘓",
      },
    ],
    sources: [
      {
        label: "司法院憲法法庭：111 年憲判字第 13 號判決（健保資料庫案）",
        url: "https://cons.judicial.gov.tw/docdata.aspx?fid=38&id=309956",
      },
      {
        label: "中央社：立院初審個資會組織法 關鍵條文保留送協商（2025/05/28）",
        url: "https://www.cna.com.tw/news/aipl/202505280283.aspx",
      },
      {
        label: "公視新聞網 PNN：個資會設立期限將屆 民團憂組織法尚未完備",
        url: "https://news.pts.org.tw/article/734875",
      },
    ],
  },
  {
    id: "examination-yuan",
    name: "考試院",
    subtitle: "Examination Yuan",
    status: "stable",
    statusLabel: "正常運行・尚缺 1 席考試委員",
    totalSeats: 9,
    vacantSeats: 1,
    criticalDate: null,
    org: "院長 1 人、副院長 1 人、考試委員 7-9 人，由總統提名、立法院同意任命；2020 年修法後考試委員由 19 人減為 7-9 人、任期由 6 年改為 4 年。",
    keyFact:
      "第 13 屆正副院長及考試委員 2024/8/31 屆滿後，藍白延宕同意權審查逾 3 個月，史上首度正、副院長同時出缺，考試院自 2024/9/1 起全面癱瘓；立法院已於 2024/12 完成投票，第 14 屆就職後考試院恢復正常運行，僅 1 席考試委員（柯麗鈴）遭否決待補。",
    keyFactEn:
      "Briefly leaderless in late 2024 after the blue-white camp delayed confirmation for over three months; restored in Dec 2024 with the 14th-term heads sworn in, one commissioner seat still vacant.",
    actions: [
      "延宕同意權：第 13 屆人事 2024/8/31 屆滿後，藍白多數延宕人事同意權審查逾 3 個月，致考試院史上首度正、副院長同時出缺。",
      "否決提名：2024/12/17 投票時否決考試委員被提名人柯麗鈴，留下 1 席缺額。",
    ],
    impact: [
      "全面癱瘓期間考試院無正、副院長及考試委員，國家考試與銓敘人事行政運作一度受影響。",
      "第 14 屆已就職，考試院恢復正常運行，惟仍缺 1 席考試委員待補。",
    ],
    timeline: [
      {
        date: "2024/08/31",
        text: "第 13 屆院長、副院長、考試委員任期屆滿",
      },
      {
        date: "2024/09/01",
        text: "正、副院長及考試委員全數出缺，考試院全面癱瘓（全站停擺鐘起算點）",
      },
      { date: "2024/12/17", text: "立法院完成同意權投票，僅柯麗鈴遭否決" },
      {
        date: "2024/12/20",
        text: "第 14 屆周弘憲（院長）、許舒翔（副院長）及 6 名考試委員宣誓就職，考試院恢復正常運行",
      },
    ],
    sources: [
      {
        label:
          "中央社：考試院人事同意權案 周弘憲、許舒翔出任正副院長（2024/12/17）",
        url: "https://www.cna.com.tw/news/aipl/202412170131.aspx",
      },
      {
        label: "公視新聞網：考試院人事案 周弘憲、許舒翔擔任正副院長",
        url: "https://news.pts.org.tw/article/729306",
      },
      {
        label: "立法院全球資訊網：立院同意周弘憲、許舒翔為考試院正副院長",
        url: "https://www.ly.gov.tw/Pages/Detail.aspx?nodeid=54301&pid=247332",
      },
    ],
  },
];

export { institutions, PARALYSIS_START, PARALYSIS_START_NOTE, DATA_UPDATED };
