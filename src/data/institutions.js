// 「國家機關（構）停擺」起算日：2024/09/01 00:00。
// 第 13 屆考試院院長、副院長及考試委員任期於 2024/08/31 屆滿，藍白多數延宕人事同意權審查逾三個月，
// 考試院自 9 月 1 日零時起出缺，是第一個因人事同意權遭杯葛而全面癱瘓的憲政機關，故以此為全站計時原點。
// （前一版起算點為 2024/05/28 16:41《立法院職權行使法》三讀時點，已於 2026/07 改為本起算點。）
const PARALYSIS_START = "2024-09-01T00:00:00+08:00";

// 首屏停擺鐘下方的起算說明（呈現層只負責排版，文字一律留在資料層）。
const PARALYSIS_START_NOTE =
  "計時自 2024 年 9 月 1 日零時起算。第 13 屆考試院院長、副院長及考試委員任期於 2024 年 8 月 31 日屆滿，藍白多數延宕人事同意權審查逾三個月，考試院自 9 月 1 日零時起出缺，是第 11 屆立法院所造成第一個因人事同意權遭杯葛而全面癱瘓的憲政機關，癱瘓警示鐘聲就此響起。";

// 資料實際校準日（footer「最後更新」顯示用）：每次更新 src/data/ 內容時手動改這裡。
const DATA_UPDATED = "2026年10月31日";

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
      "2024/10/31 七位大法官卸任、總統兩度提名均遭立法院否決，大法官僅餘 8 人長期不足額；藍白惡修《憲法訴訟法》一度使憲法法庭全面癱瘓四百餘天，雖經 114 年憲判字第 1 號宣告該修法違憲失效而回復運作，現仍因長期不足額而有癱瘓危險：2026/10/31 七席出缺屆滿兩年，總統兩輪提名均遭否決後席次仍未補足。2027/10/1 另有 4 名大法官任期屆滿，屆時若提名續遭杯葛，將僅餘蔡彩貞、朱富美、陳忠五、尤伯祥 4 人，憲法法庭即瀕臨全面癱瘓。",
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
      "憲法法庭回復運作後仍持續替人民把關：2026/8/14 115 年憲判字第 6 號宣告兒少性侵案追訴權時效舊規定違憲，13 件確定終局裁定廢棄發回。憲法法庭若再遭癱瘓，這類救濟即告中斷。",
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
        date: "2026/10/31",
        text: "七席大法官出缺屆滿兩年，15 席仍僅 8 人在任",
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
      {
        label: "中央社：修正前刑法過度限制遭性侵兒少追訴權 憲法法庭判決違憲（115 年憲判字第 6 號，2026/08/14）",
        url: "https://www.cna.com.tw/news/asoc/202608140212.aspx",
      },
    ],
  },
  {
    id: "control-yuan",
    name: "監察院",
    subtitle: "Control Yuan",
    status: "collapsed",
    statusLabel: "29 席全數出缺・9/29 提名人全遭否決",
    totalSeats: 29,
    vacantSeats: 29,
    criticalDate: null,
    elapsedSince: "2026-08-01",
    elapsedSinceLabel: "自 2026/8/1",
    org: "設監察委員 29 人（含院長、副院長）、任期 6 年，為國家最高監察機關，行使彈劾、糾舉、糾正及審計權，並設國家人權委員會；第 6 屆任期 2026/7/31 屆滿。",
    keyFact:
      "第 6 屆 29 名監察委員任期 2026/7/31 屆滿，自 2026/8/1 起監察院 29 席全數出缺，國家人權委員會同時無法開會。立法院把同意權投票拖到 2026/9/29，當天藍白聯手將院長被提名人陳永興、副院長被提名人王榮璋及 25 名監委被提名人全數否決（多數為 50 同意:60 不同意，未達 57 票門檻），監察院全面癱瘓沒有期限。人民陳情仍照收，但調查、彈劾、糾舉、糾正一概無法進行；115 年度總預算又刪監察院 1.1 億元、凍結 29 名監委人事費。",
    keyFactEn:
      "All 29 Control Yuan seats have been vacant since 1 August 2026, halting the National Human Rights Commission with them. On 29 September the KMT and TPP majority rejected all 27 nominees, including president-designate Chen Yung-hsing and vice president-designate Wang Jung-chang (typically 50 for, 60 against, short of the 57 needed), leaving the Control Yuan with no members and no end date. Petitions are still logged, but no investigation, impeachment or corrective action can proceed. The 2026 budget passed on 14 August also cut NT$110 million and froze the salaries for the 29 seats.",
    actions: [
      "全數否決提名：2026/9/29 立法院記名投票，院長被提名人陳永興、副院長被提名人王榮璋及 25 名監委被提名人（另 2 人先前婉辭）全數未達 57 票門檻：民進黨團投同意、國民黨團與民眾黨團投不同意，多數被提名人為 50 同意:60 不同意，個別被提名人另有 1 張無效票。",
      "拖延同意權投票：總統府 2026/6/11 公布第 7 屆被提名人，立法院朝野協商卻將記名投票延至下會期 2026/9/29，任期屆滿與投票之間先空轉兩個月。",
      "惡意刪凍預算：2025 年度刪減監察院業務費達 96%；2026/8/14 三讀之 115 年度總預算再依民眾黨團提案刪減監察院 1.1 億元、凍結 29 名監委人事費。",
      "揚言全面否決：蔣萬安籲立法院藍白黨團全數否決監委人選並廢除監察院；羅智強表態將對所有監委投反對票、進行人事凍結。",
    ],
    impact: [
      "2026/8/1 起監察院無任何監察委員，人民陳情書狀仍照收登錄，但調查、彈劾、糾舉、糾正一概停擺；國家人權委員會可收件卻無法召開委員會議，廉政委員會亦無法組成，相關審議與裁罰暫停。",
      "9/29 全數否決後，總統府未宣布重新提名時程；即使再提名，也須重新經過立法院審查與投票，監察院全面癱瘓沒有可預期的終點。",
      "預算遭刪 96% 後監察院已僅能勉力維持運作，人事再全面出缺、監委人事費又遭凍結，等同同時抽掉預算與人力。",
      "監察院每月收受人民陳情書狀逾千件，依我國現行權力分立制度，監察院仍有不可取代之功能，若真要討論廢除監察院，應啟動修憲程序，並規劃監察院職權分配之具體方案及期程，而不是封殺人事及預算，癱瘓監察院卻不討論組織重整，致監察院無法發揮關鍵職權。立法院 2026/8/6 監委人事同意權公聽會上即有學者指出，以全數否決人選凍結監察院運作屬違憲手段，要廢監察院須經修憲；監察院可廢，監察權不可一日癱瘓。",
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
        date: "2026/08/14",
        text: "115 年度總預算三讀，再刪監察院 1.1 億元、凍結 29 名監委人事費",
      },
      {
        date: "2026/09/29",
        text: "立法院記名投票，陳永興、王榮璋及 25 名監委被提名人全數遭否決",
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
      {
        label: "中央社：立院監委人事同意權案公聽會 學者關注監院存廢（2026/08/06）",
        url: "https://www.cna.com.tw/news/aipl/202608060091.aspx",
      },
      {
        label: "ETtoday：沒監委怎麼辦？ 監察院：民眾仍可提陳情檢舉「但暫無法辦理」（2026/08/03）",
        url: "https://www.ettoday.net/news/20260803/3212649.htm",
      },
      {
        label: "聯合報：總預算民眾黨團保留 39 案表決 刪監院 1.1 億元 凍結監委人事費",
        url: "https://udn.com/news/story/6656/9691255",
      },
      {
        label:
          "中央社：立院審查監察院人事同意權 正副院長、25 委員全遭藍白封殺（2026/09/29）",
        url: "https://www.cna.com.tw/news/aipl/202609290145.aspx",
      },
      {
        label: "聯合報：監院續空…27 監委人選 藍白聯手全封殺（2026/09/29）",
        url: "https://udn.com/news/story/6656/9784546",
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
      "依《刑事訴訟法》第 441 條，判決確定後發現案件之審判違背法令者，非常上訴專屬檢察總長得向最高法院提起；檢察總長懸缺，即無人可提起非常上訴，冤案救濟因而失去唯一的法定發動者。代理總長徐錫祥 2026/6/8 已就反社會型人格違常可否減刑之縱火案提起代理任內首件非常上訴，在野卻質疑其代理身分能否行使非常上訴，統一法律見解的管道因人事封殺而蒙上陰影。",
      "總長懸缺及代理權限遭限縮，將對檢察體系之偵查、公訴等職權產生重大影響，檢察總長一職有癱瘓危險；若代理期限屆滿而新任人選續遭否決，即形同全面癱瘓。",
    ],
    timeline: [
      { date: "2026/03/13", text: "總統提名徐錫祥為檢察總長" },
      { date: "2026/05/05", text: "立法院否決提名" },
      {
        date: "2026/05/07",
        text: "邢泰釗屆滿，總統指定徐錫祥代理；檢察總長自 5/8 起懸缺，有癱瘓危險",
      },
      {
        date: "2026/06/08",
        text: "代理總長徐錫祥提起代理任內首件非常上訴，在野質疑代理身分之適法性",
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
        label: "聯合報：反社會型人格違常可否減刑？ 檢察總長為「縱火案」非常上訴（2026/06/08）",
        url: "https://udn.com/news/story/7321/9553636",
      },
      {
        label: "聯合報：民眾黨團提修法 促檢察總長人選遭否決不得代理",
        url: "https://udn.com/news/story/6656/9533052",
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
      "原 6 名委員（含主委李進勇）2025/11/3 任期屆滿卸任後僅餘 4 人，中選會全面癱瘓約半年；2026/3/13 立法院通過游盈隆等 4 人、否決胡博硯等 3 人，游盈隆 4/27 就任、5/15 主持首次委員會議，中選會回復運作。惟現有 8 名委員仍低於法定下限 9 人、副主委從缺；行政院 4/21 補提名 3 人，2026/7/3 又遭立法院全數否決，缺額補足遙遙無期。2026/11/28 九合一地方選舉（逾 1.1 萬個公職、近 2 萬名候選人）與全國性公投第 22 案同日投票，便由這個低於法定下限的委員會辦理；中選會 8/28 依《公投法》駁回鞭刑入法、交通罰鍰專款專用兩案公投後，國民黨團隨即發聲明譴責、民眾黨主席黃國昌抨擊中選會「太上皇」，選務機關的獨立性同時承受人事封殺與政治施壓。真正考驗在 2027/11/3 另 4 名委員任期屆滿。",
    keyFactEn:
      "Six commissioners’ terms expired on 3 Nov 2025, leaving only four and stalling the Commission for about six months. On 13 Mar 2026 the Legislature confirmed four nominees but rejected three; after delayed appointments, chair Yu Ying-lung took office on 27 Apr and convened the first commission meeting on 15 May, restoring operations. The current eight members remain below the statutory minimum of nine, with the deputy chair post still vacant. A follow-up slate of three nominees was rejected wholesale on 3 Jul 2026, leaving the vacancies unfilled. This under-strength commission is running the 28 Nov 2026 local elections and a national referendum held the same day; after it rejected two legislature-initiated referendum questions on 28 Aug, the KMT caucus condemned it and TPP chair Huang Kuo-chang called it an overlord. The real test comes when four more terms expire on 3 Nov 2027.",
    actions: [
      "部分否決提名：行政院提名 7 人，立法院於 2026/3/13 僅通過游盈隆、李禮仲、蘇嘉宏、蘇子喬 4 人，否決副主委被提名人胡博硯及委員黃文玲、陳宗義 3 人；行政院批藍白未守協商誠信，致中選會委員缺額、副主委至今從缺。",
      "再度全數否決補提名：行政院 2026/4/21 補提名沈淑妃、蔡維哲、黃謀信 3 人，立法院 7/3 記名投票全數封殺（沈淑妃 50 同意:60 不同意:1 無效、蔡維哲 50:61、黃謀信 50:61）；民進黨籍委員除林宜瑾未領票外全數投同意，國民黨籍除盧縣一於沈淑妃案投無效票、院長韓國瑜未領票外全數投不同意，民眾黨與無黨籍全數投不同意，委員缺額與副主委從缺持續無解。",
      "施壓選務機關：中選會 2026/8/28 委員會議依《公投法》第 15 條，認定鞭刑入法（7 位出席委員一致）、交通罰鍰專款專用（4:3）兩案非屬重大政策而不予成案，僅廢除非核家園案成案；國民黨團發新聞稿強烈抗議並譴責，民眾黨主席黃國昌指中選會自居「太上皇」機關。",
    ],
    impact: [
      "2025/11/3 起至 2026/5/15 復會前約半年無法召開委員會議與作成決議，中選會全面癱瘓，曾影響選務、公投及罷免等法定事項之推進。",
      "雖已回復運作，現有 8 名委員仍低於法定下限 9 人、副主委從缺，補提名 3 人又於 2026/7/3 遭全數否決，中選會仍有癱瘓危險。",
      "2026/11/28 九合一地方選舉暨全國性公投第 22 案（廢除非核家園）由委員不足法定下限、副主委從缺的中選會辦理：選務最吃重的時刻，選務機關卻在委員人數低於法定下限的狀態下運作。",
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
      {
        date: "2026/08/28",
        text: "中選會議決廢除非核家園公投成案、鞭刑與交通罰鍰兩案不予成案，藍白抨擊中選會",
      },
      {
        date: "2026/11/28",
        text: "九合一地方選舉暨全國性公投第 22 案投票，由不足法定下限的中選會辦理",
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
      {
        label: "中央社：中選會公告九合一大選 11/28 選出 1 萬 1051 名公職（2026/08/20）",
        url: "https://www.cna.com.tw/news/aipl/202608200078.aspx",
      },
      {
        label: "中央社：中選會：九合一選舉 1 萬 9695 人完成登記 26 名陸配參選（2026/09/07）",
        url: "https://www.cna.com.tw/news/aipl/202609070085.aspx",
      },
      {
        label: "中央社：九合一大選併廢除非核家園公投 鞭刑、交通罰鍰 2 案遭否決（2026/08/28）",
        url: "https://www.cna.com.tw/news/aipl/202608285005.aspx",
      },
      {
        label: "中央社：鞭刑、交通罰鍰公投遭否決 國民黨團譴責中選會（2026/08/28）",
        url: "https://www.cna.com.tw/news/aipl/202608280288.aspx",
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
      "2024/11/30 代理主委翁柏宗因延任條款遭刪除卸任後，NCC 7 名委員僅餘 3 人、未達委員總額過半數（4 人）之決議門檻，自此無法召開法定委員會議、逾百項重大業務無法決議，NCC 全面癱瘓。僅存的代理主委陳崇樹及委員王正嘉、王怡惠又於 2026/7/31 任期屆滿，自 2026/8/1 起 NCC 無任何委員在任，為 2006/2/22 成立以來首見，尚有 748 件案件待委員會議審議；行政院只能指派主任秘書溫俊瑜為機關代表人維持日常行政，執照與重大監理決定一律無法作成。行政院 2026/7/24 第三度提名袁秀慧（主委）、蕭蘋（副主委）等 7 人，立法院交通、教育及文化委員會 10/19、10/21 聯席審查完畢，院會投票日期迄未排定。",
    keyFactEn:
      "Since acting chair Weng Po-tsung left on 30 Nov 2024 the NCC had only 3 of 7 members, short of the four-vote majority any resolution requires, and could not hold a lawful commission meeting. The last three members’ terms ended on 31 July 2026, so from 1 August the commission has no members at all for the first time since its founding in February 2006, with 748 cases awaiting a commission meeting. The Executive Yuan could only designate the secretary-general as the agency's legal representative to keep day-to-day administration going; no licence or major regulatory decision can be made. A third slate of seven nominees, announced on 24 July 2026, cleared joint committee hearings on 19 and 21 October, but no floor vote has been scheduled.",
    actions: [
      "刪除延任條款：藍白於 2024/7/16 強行三讀刪除延任條款、11/15 三讀通過於次月施行，致代理主委翁柏宗 11/30 卸任，NCC 無法召開委員會議。",
      "封殺全體提名：行政院 2025/7/31 提名蔣榮先、程明修、黃葳威、羅慧雯，2025/11/7 遭藍白全體否決，缺額因而未能補上。",
      "刪除基本運作預算：2026/8/14 三讀之 115 年度總預算，將 NCC 8 至 12 月「基本行政工作維持」5,782.3 萬元全數刪除，列入行政院所稱「非理性刪凍」。",
    ],
    impact: [
      "NCC 自 2024/11/30 委員不足決議門檻起即全面癱瘓，逾百項重大業務無法決議，僅約 58 項基本業務得授權主委召集諮議會議處理。",
      "2026/8/1 起 7 席全數出缺，無委員即無法召開任何委員會議或諮議會議，通訊傳播監理業務全面停止、748 件待審案件無人可決，NCC 全面癱瘓。",
      "行政院 8 月指派主任秘書溫俊瑜為機關代表人，僅能優先處理射頻器材輸入審驗、船舶與航空器電臺執照等民生急件；頻道換照、董監事變更、併購審查等須委員會議決議之案件全數停擺。",
      "面對中國認知作戰與境外資金介入媒體的風險，NCC 沒有任何委員可審查媒體換照與股權變動，通傳監理的國安防線無人把關。",
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
        text: "行政院第三度提名袁秀慧、蕭蘋等 7 名委員",
      },
      {
        date: "2026/07/31",
        text: "陳崇樹、王正嘉、王怡惠任期屆滿，NCC 自 8/1 起無任何委員在任，全面癱瘓",
      },
      {
        date: "2026/08/14",
        text: "115 年度總預算三讀，NCC 8-12 月基本行政工作維持費 5,782.3 萬元全數刪除",
      },
      {
        date: "2026/08/17",
        text: "行政院指派主任秘書溫俊瑜為機關代表人，僅能維持日常行政",
      },
      {
        date: "2026/10/21",
        text: "立法院交通、教育及文化委員會完成 7 名被提名人聯席審查，院會投票日期未定",
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
      {
        label: "中央社：政院再提 NCC 委員名單 7 人專長橫跨電信傳播法律領域（2026/07/24）",
        url: "https://www.cna.com.tw/news/aipl/202607240315.aspx",
      },
      {
        label: "中央社：在野質疑 NCC 主秘協商預算 政院：委員全出缺所致（2026/08/06）",
        url: "https://www.cna.com.tw/news/aipl/202608060365.aspx",
      },
      {
        label: "中央社：NCC 無委員空窗期 政院指派機關代表人優先處理射頻器材核准（2026/08/17）",
        url: "https://www.cna.com.tw/news/afe/202608170189.aspx",
      },
      {
        label: "中央社：政院：立院 7 項非理性刪凍總預算 衝擊政府正常運作（2026/08/14）",
        url: "https://www.cna.com.tw/news/aipl/202608140363.aspx",
      },
      {
        label: "聯合報：NCC 副主委被提名人蕭蘋：假新聞為故意危害 應善盡查證（2026/10/19）",
        url: "https://udn.com/news/story/6656/9824326",
      },
      {
        label: "中央社：NCC 委員被提名人張春炎：節目政治宣傳情況嚴重應改善（2026/10/21）",
        url: "https://www.cna.com.tw/news/aipl/202610210131.aspx",
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
    criticalDate: "2027-01-30",
    criticalDateLabel: "距 3 名委員任期屆滿",
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
    status: "critical",
    statusLabel: "審查委員辭任・第 8 屆董事會無法產生",
    totalSeats: 15,
    vacantSeats: 15,
    criticalDate: null,
    org: "依《公視法》公視基金會設董事 11-15 人、監察人 3-5 人、董事任期 3 年；由立法院推舉審查委員、行政院提名、經審查委員 2/3 同意後聘任。公視董事會為公廣集團最高治理機關。",
    keyFact:
      "第 7 屆董監事 2025/5/19 任期屆滿，原依《公視法》看守延任條款（新的不來、舊的不走）續行職務；藍白 2026/1/16 三讀刪除該條款、2/4 公布、2/6 生效。第 8 屆審查會 2025/12/31 僅 4 人通過、不足法定下限，2026/4/16 又因在野推舉之審查委員集體請辭而流會，新一屆董事會迄今無法產生、無人就任。第 7 屆董事得否續行職務則有法律爭議：文化部認依《公視法》第 2 條，其餘適用《財團法人法》，現任董事得續行職務至新任就任；在野立委則認延任條款既已刪除，即等同卸任。董事會組成懸而未決，核定預算決算、遴聘總經理與決定節目方針因此陷於不確定，公視董事會瀕臨全面癱瘓。藍白再於 2026/8/14 三讀之 115 年度總預算刪減公視 2,185 萬元、凍結 3 億元，其中 2 億元以「第 8 屆新任董事長就任」為解凍條件：先讓董事會產生不了，再以董事會未產生為由卡住預算。",
    keyFactEn:
      "The 7th board’s term ended on 19 May 2025 but stayed on under the Public Television Act’s holdover clause, which the blue-white camp repealed on 16 Jan 2026 (promulgated 4 Feb, effective 6 Feb). The 8th board still cannot be seated: only 4 nominees cleared the review panel on 31 Dec 2025, short of the statutory minimum, and the opposition-appointed reviewers resigned en masse, aborting the second session on 16 Apr 2026. Whether the 7th board may lawfully continue to serve is contested: the Ministry of Culture reads Article 2 of the Act as making the Foundation Act applicable, so sitting directors serve until successors take office, while opposition legislators argue the repeal amounts to their removal. With the board’s composition unresolved, budget approval, the appointment of a president and programming decisions are all in limbo. The 2026 budget passed on 14 August then cut NT$21.85 million and froze NT$300 million, NT$200 million of it to be released only once a new 8th-term chair takes office: the board is first prevented from forming, and its absence is then used to hold back the money.",
    actions: [
      "刪除看守條款：2026/1/16 三讀刪除《公視法》第 16 條「董事屆滿未及改聘者延任」（59:49）、2/4 公布、2/6 生效，使屆滿董事無法看守；5/7 羅智強並援引此修法將董事長胡元輝逐出議場。",
      "杯葛審查：第 8 屆審查會 2025/12/31 僅 4 人過關、不足法定下限 11 人；在野推舉之 8 名審查委員 2026/4/9 聯名請辭，4/16 第二次審查會因未達法定人數流會，審查程序無從進行。",
      "刪凍預算：2025 年度公視預算遭刪 2,300 萬、凍結 5.7 億（約 25%）；2026/8/14 三讀之 115 年度總預算再依國民黨立委翁曉玲提案刪減公視 2,185 萬元、凍結 3 億元（文化部統計，其中 2 億元須待第 8 屆新任董事長就任並向教育及文化委員會報告後方得解凍），TaiwanPlus 另遭刪凍 2.2 億元。",
    ],
    impact: [
      "董事會組成合法性懸而未決，核定預算決算、遴聘總經理、決定節目方針等權責難以正常行使，公視董事會瀕臨全面癱瘓，並連動整個公廣集團（公視、台語台、客台、兒少台、TaiwanPlus、華視）。",
      "波及 TaiwanPlus 國際傳播與台語、客語公共服務；監委曾申請自動調查公視治理危機，惟監察院自 2026/8/1 起已無委員，調查無從續行。",
      "2 億元凍結預算以新任董事長就任為解凍條件，而董事會正因審查委員集體請辭無法產生，文化部長李遠指出董事會無法產生是因國民黨推舉的審查委員辭職，並非文化部所能決定，刪凍損失的是台灣在國際上的話語權。",
    ],
    timeline: [
      { date: "2025/05/19", text: "第 7 屆董監事任期屆滿" },
      { date: "2025/12/31", text: "第 8 屆審查會僅 4 人過關，不足下限 11 人" },
      { date: "2026/01/16", text: "立法院三讀刪除董事看守延任條款" },
      {
        date: "2026/02/06",
        text: "刪除延任條款生效（2/4 公布），第 7 屆董事得否續行職務自此生法律爭議",
      },
      {
        date: "2026/04/16",
        text: "在野推舉之 8 名審查委員 4/9 聯名請辭，第二次審查會未達法定人數流會",
      },
      {
        date: "2026/08/14",
        text: "115 年度總預算三讀，公視刪 2,185 萬元、凍結 3 億元，其中 2 億元須待新任董事長就任方得解凍",
      },
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
        label: "中央社：8 審委請辭 第 8 屆公視董監事第二次審查會議流會",
        url: "https://www.cna.com.tw/news/acul/202604160214.aspx",
      },
      {
        label:
          "CTWANT：延任條款遭刪 文化部搬《財團法人法》解套（第 7 屆董事續任爭議）",
        url: "https://www.ctwant.com/article/479293/",
      },
      {
        label: "CTWANT：公視預算刪 2,300 萬、凍結約 25%（5.7 億）",
        url: "https://www.ctwant.com/article/391329/",
      },
      {
        label: "中央社：公共媒體預算遭刪凍 李遠：損失台灣在世界的話語權（2026/08/14）",
        url: "https://www.cna.com.tw/news/acul/202608140349.aspx",
      },
      {
        label: "自由時報：文化部媒宣費遭藍白全刪！公視預算遭刪 2185 萬、凍結 2 億 Taiwan Plus 減列 2 億元（2026/08/14）",
        url: "https://news.ltn.com.tw/news/politics/breakingnews/5540151",
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
      "法定應於 2025/8/12 前成立個資會，迄今逾期；《個資會組織法》2025/5/28 初審通過後送黨團協商，立法院長韓國瑜逾一年四個月未召集協商、組織法尚未三讀，違憲狀態持續未消除。2026/10/28 中選會候選人財產申報系統爆出 1,573 名候選人身分證字號外洩，行政院直言 2025 年修正、課予機關外洩通報義務的新《個資法》，正因個資會組織法卡在立法院而無法施行。",
    keyFactEn:
      "A 2022 constitutional ruling required an independent data-protection authority by 12 Aug 2025; the organic act stalled in caucus negotiation that the Legislative Speaker has not convened for more than 16 months, leaving the unconstitutional gap unresolved. When the ID numbers of 1,573 election candidates leaked from a government system in October 2026, the Executive Yuan noted that the amended data-protection law requiring breach notification cannot take effect while the organic act remains stuck.",
    actions: [
      "擱置協商：《個資會組織法》2025/5/28 初審通過、6/24 決議送院長召集黨團協商後，院長韓國瑜逾一年四個月未召集，組織法迄今未三讀。",
      "藍白兩黨一度提案將個資會籌備處預算砍至 1,000 元。",
    ],
    impact: [
      "法定期限已逾 14 個月，個資會迄今尚未成立、無從行使任何職權，形同全面癱瘓，違憲狀態持續；有關個資保障業務仍由各部會分散主管，欠缺獨立專責監理機關。",
      "已三讀之《個資法》修正（事故通報、稽核、限制國際傳輸等）因施行繫於委員會成立而尚未上路，衝擊歐盟 GDPR 適足性與台歐資料跨境流通。",
      "AI 時代個資外洩與境外（含中國）資料蒐集無獨立專責機關監理。",
      "2026/10/28 中選會財產申報系統因委外廠商疏失，外洩蔣萬安、沈伯洋等 1,573 名直轄市長、縣市長及議員候選人身分證字號；新《個資法》的外洩通報與應變義務因施行日期繫於個資會成立而尚未生效，政府機關自身外洩也沒有獨立監理機關可究責。",
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
      {
        date: "2026/10/28",
        text: "中選會系統外洩 1,573 名候選人身分證字號，新《個資法》仍因個資會未成立而無法施行",
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
      {
        label: "聯合報：中選會候選人財產申報系統出包 蔣萬安、沈伯洋等 1573 人資料被看光（2026/10/28）",
        url: "https://udn.com/news/story/6656/9841841",
      },
      {
        label: "自由時報：候選人個資爆外洩 行政院：個資會組織法還卡在立法院（2026/10/28）",
        url: "https://news.ltn.com.tw/news/politics/breakingnews/5621975",
      },
      {
        label: "自由時報：中選會外洩候選人個資 民進黨團：儘速協商完成「個資會組織法」（2026/10/28）",
        url: "https://news.ltn.com.tw/news/politics/breakingnews/5621883",
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
