// 「憲政機關停擺」起算日：2024/05/28 16:41《立法院職權行使法》修正草案三讀通過之時點（國會擴權法案）。
// 依立法院公報第 113 卷第 47 期、第 11 屆第 1 會期第 15 次會議紀錄，全案於當日下午 4 時 41 分三讀通過，傅崐萁等 31 人隨即提復議。
const PARALYSIS_START = '2024-05-28T16:41:00+08:00'

// 狀態 → 色調對應（呈現層 InstitutionCard.STATUS_COLORS 同步登錄；新增狀態須兩處一致）
//  paralyzed 已癱瘓 / partial 部分停擺 / atRisk 尚未但可能癱瘓 / overdue 逾期違憲 / former 曾癱瘓已恢復

const institutions = [
  {
    id: 'constitutional-court',
    name: '憲法法庭',
    subtitle: 'Constitutional Court',
    status: 'atRisk',
    statusLabel: '尚未但可能癱瘓',
    totalSeats: 15,
    vacantSeats: 7,
    criticalDate: '2027-09-30',
    criticalDateLabel: '距下一波大法官任期屆滿',
    org: '司法院設大法官 15 人、任期 8 年，組成憲法法庭審理法規範及裁判憲法審查、機關爭議、總統副總統彈劾、政黨違憲解散、統一解釋法律命令等憲法訴訟案件。',
    keyFact:
      '2024/10/31 七位大法官卸任、總統兩度提名均遭立法院否決，大法官僅餘 8 人長期不足額；藍白惡修《憲法訴訟法》一度使憲法法庭停擺四百餘天，雖經 114 年憲判字第 1 號宣告該修法違憲失效而危機暫解，仍恐因持續杯葛而再陷空懸。',
    keyFactEn:
      'Seven justices left in Oct 2024 and the President’s nominations were twice rejected, leaving only 8 of 15. A high-quorum amendment paralyzed the Court for 400+ days until it was struck down as unconstitutional (Judgment 114-Hsien-Pan-1); a renewed blockade still threatens future vacancy.',
    actions: [
      '惡意杯葛大法官提名：2024/10/31 七位大法官卸任後，總統兩次提名均遭立法院否決，大法官不足額至今。',
      '惡修《憲法訴訟法》：2024/12/20 修正第 4、30、43 條，規定評議大法官不得低於 10 人、作成違憲宣告不得低於 9 人，且不分案件類型一律適用，以高門檻癱瘓釋憲。',
    ],
    impact: [
      '憲法審查停擺期間，有問題或不合時宜的法律與裁判無法被宣告違憲而須繼續適用，嚴重損害人民權利（近三年逾 98% 釋憲案由人民提出）。',
      '《憲訴法》惡修已經 114 年憲判字第 1 號宣告違憲失效、憲法法庭重啟；但若持續杯葛提名，2027/9/30 將僅餘 4 位、2031/9/30 恐空無一人。',
    ],
    timeline: [
      { date: '2024/10/31', text: '七位大法官卸任，總統提名兩度遭立法院否決' },
      { date: '2024/12/20', text: '立法院惡修《憲法訴訟法》提高評議與違憲宣告門檻' },
      { date: '2025/12/19', text: '114 憲判字第 1 號宣告該修法違憲失效，憲法法庭停擺逾 400 天後重啟' },
      { date: '2027/09/30', text: '謝銘洋等 4 位大法官任期屆至，若續杯葛將僅餘 4 位' },
    ],
    sources: [
      { label: '司法院憲法法庭：114 年憲判字第 1 號判決（官方）', url: 'https://cons.judicial.gov.tw/docdata.aspx?fid=38&id=355485' },
      { label: '中央社：憲法法庭今年首例判決 憲訴法修法宣告違憲', url: 'https://www.cna.com.tw/news/aipl/202512190174.aspx' },
      { label: '報導者：憲法法庭重啟 憲訴法部分修正條文違憲失效', url: 'https://www.twreporter.org/a/amendment-to-constitutional-court-procedure-act-unconstitutional' },
    ],
  },
  {
    id: 'control-yuan',
    name: '監察院',
    subtitle: 'Control Yuan',
    status: 'atRisk',
    statusLabel: '預算遭刪 96%・恐遭杯葛',
    totalSeats: 29,
    vacantSeats: 0,
    criticalDate: '2026-07-31',
    criticalDateLabel: '距本屆監委任期屆滿',
    org: '設監察委員 29 人、任期 6 年，為國家最高監察機關，行使彈劾、糾舉、糾正及審計權，並設國家人權委員會；本屆任期 2026/7/31 屆滿。',
    keyFact:
      '114 年度總預算刪減監察院業務費高達 96%，調查、巡察、議事、國際監察及人權業務預算近乎全刪；本屆監委 2026/7/31 屆滿，藍白揚言全數否決提名並廢除監察院，恐使其陷於癱瘓。',
    keyFactEn:
      'The 2025 budget slashed the Control Yuan’s operating funds by 96%; with the current term expiring on 31 July 2026 and the blue-white camp vowing to reject every nominee, the body faces paralysis.',
    actions: [
      '惡意刪減預算：114 年度刪減監察院業務費達 96%，一般行政、調查巡察、議事、國際監察及人權業務預算近乎全刪。',
      '恐全面否決提名：蔣萬安籲立法院藍白黨團全數否決監委人選並廢除監察院；羅智強表態將對所有監委投反對票、進行人事凍結。',
    ],
    impact: [
      '預算遭刪後監察院僅能勉力維持運作，對基本公務運作、職權行使、民眾權益及公共利益構成嚴重妨礙。',
      '監察院每月收受人民陳情書狀逾千件，依我國現行權力分立制度，監察院仍有不可取代之功能，若真要討論廢除監察院，應啟動修憲程序，並規劃監察院職權分配之具體方案及期程，而不是封殺人及預算，癱瘓監察院卻不討論組織重整，致監察院無法發揮關鍵職權。',
    ],
    timeline: [
      { date: '2025', text: '立法院刪減監察院 114 年度業務費達 96%' },
      { date: '2026/06/11', text: '總統府公布監察院第 7 屆正、副院長及監察委員被提名人' },
      { date: '2026/07/31', text: '本屆監察委員任期屆滿，恐遭藍白全數否決' },
    ],
    sources: [
      { label: '監察院官網：114 年度業務費遭刪逾 96%，將聲請釋憲及暫時處分', url: 'https://www.cy.gov.tw/News_Content.aspx?n=124&s=32763' },
      { label: '總統府：監察院第 7 屆院長、副院長及監察委員被提名人介紹', url: 'https://www.president.gov.tw/Page/777' },
      { label: 'TVBS：蔣萬安拋廢監院 羅智強挺監委全否決', url: 'https://news.tvbs.com.tw/politics/3228862' },
    ],
  },
  {
    id: 'prosecutor-general',
    name: '檢察總長',
    subtitle: 'Prosecutor General',
    status: 'atRisk',
    statusLabel: '代理中・恐遭限縮',
    totalSeats: 1,
    vacantSeats: 1,
    criticalDate: null,
    org: '依《法院組織法》第 66 條，最高檢察署檢察總長由總統提名、經立法院同意任命，任期 4 年不得連任；為全國 1,460 位檢察官之指揮監督者。',
    keyFact:
      '檢察總長邢泰釗 2026/5/7 屆滿，總統提名徐錫祥於 5/5 遭立法院否決、人事懸缺，總統 5/7 指定徐錫祥代理；藍白並提《法院組織法》修正限制代理檢察總長之期限與職權。',
    keyFactEn:
      'Prosecutor-General Hsing Tai-chao’s term ended on 7 May 2026; the President’s nominee was rejected on 5 May and is now serving only in an acting capacity, while the blue-white camp moves to cap and curtail the acting role.',
    actions: [
      '封殺提名：賴清德 2026/3/13 提名徐錫祥為檢察總長，立法院於 5/5 否決，致檢察總長懸缺。',
      '限縮代理：藍白提《法院組織法》第 66 條修正，增訂「未獲立法院同意者不得代理」、代理期限不得逾六個月（藍）／三個月（白），並限制代理者不得行使人事、指揮或監督權限。',
    ],
    impact: [
      '檢察總長指揮監督全國各級檢察署檢察官、得親自處理或移轉其事務，檢察官對其命令有服從義務。',
      '總長懸缺及代理權限遭限縮，將對檢察體系之偵查、公訴等職權產生重大影響。',
    ],
    timeline: [
      { date: '2026/03/13', text: '總統提名徐錫祥為檢察總長' },
      { date: '2026/05/05', text: '立法院否決提名' },
      { date: '2026/05/07', text: '邢泰釗屆滿，總統指定徐錫祥代理檢察總長' },
    ],
    sources: [
      { label: '聯合報：立院投票 藍白聯手反對 徐錫祥未過關', url: 'https://udn.com/news/story/6656/9482539' },
      { label: '聯合報：總統府指派徐錫祥代理檢察總長至新總長產生', url: 'https://udn.com/news/story/6656/9488773' },
      { label: '民間司法改革基金會：指定遭否決者代理檢察總長有適法性疑慮', url: 'https://www.jrf.org.tw/articles/3208' },
      { label: '立法院：許宇甄提案《法院組織法》第 66 條條文修正草案', url: 'https://ppg.ly.gov.tw/ppg/bills/202110218420000/details' },
      { label: '立法院：翁曉玲、王鴻薇提案《法院組織法》第 66 條條文修正草案', url: 'https://ppg.ly.gov.tw/ppg/bills/202110216000000/details' },
      { label: '立法院：台灣民眾黨黨團提案《法院組織法》第 66 條條文修正草案', url: 'https://ppg.ly.gov.tw/ppg/bills/202110216960000/details' },
    ],
  },
  {
    id: 'cec',
    name: '中選會',
    subtitle: 'Central Election Commission',
    status: 'paralyzed',
    statusLabel: '無法開會逾 7 個月',
    totalSeats: 11,
    vacantSeats: 3,
    criticalDate: '2026-07-03',
    criticalDateLabel: '距人事案表決',
    org: '依《中央選舉委員會組織法》置委員 9-11 人，須達最低委員人數出席方能舉行委員會議與作成決議。',
    keyFact:
      '2025/11/3 共 6 名委員卸任後，中選會即無法舉行委員會議與作成決議，迄今停擺逾 7 個月；行政院提名屢遭藍白部分否決，現有委員仍不足開會門檻，待 7/3 表決後才可能恢復，距九合一選舉僅約 4 個月。',
    keyFactEn:
      'After six commissioners left on 3 Nov 2025 the Commission has been unable to convene or pass resolutions for over seven months; with a 7 July vote pending and the 2026 local elections roughly four months away.',
    actions: [
      '否決提名：行政院提名 7 人，立法院於 2026/3/13 僅通過藍白推薦之游盈隆、李禮仲、蘇嘉宏、蘇子喬 4 人，否決民進黨推薦之胡博硯、黃文玲、陳宗義。',
      '卡關補提名：4/21 任命 4 人後仍缺 1 人才可成會，行政院補提沈淑妃、蔡維哲、黃謀信，延至 7/3 才表決。',
    ],
    impact: [
      '自 2025/11/3 起無法舉行委員會議與決議，影響選務、公投及罷免等法定事項。',
      '距 2026 九合一選舉僅約 4 個月，若無法即時補足委員恐衝擊選舉籌辦。',
    ],
    timeline: [
      { date: '2025/11/03', text: '6 名委員卸任，中選會無法開會決議' },
      { date: '2026/03/13', text: '立法院通過 4 人、否決 3 人' },
      { date: '2026/04/21', text: '任命 4 人仍缺 1，行政院補提 3 人' },
      { date: '2026/07/03', text: '補提名人事案表決' },
    ],
    sources: [
      { label: '中央社：游盈隆任中選會主委 胡博硯等 3 人遭立院否決（2026/3/13）', url: 'https://www.cna.com.tw/news/aipl/202603130156.aspx' },
      { label: '自由時報：立院拍板 中選會人事同意權案 7/3 投票', url: 'https://news.ltn.com.tw/news/politics/breakingnews/5484687' },
      { label: '聯合報：卓揆補提中選會 3 人名單（沈淑妃、蔡維哲、黃謀信）', url: 'https://udn.com/news/story/6656/9455574' },
    ],
  },
  {
    id: 'ncc',
    name: '通傳會（NCC）',
    subtitle: 'National Communications Commission',
    status: 'partial',
    statusLabel: '逾 2/3 業務停擺',
    totalSeats: 7,
    vacantSeats: 4,
    criticalDate: '2026-07-31',
    criticalDateLabel: '距現有委員任期屆滿（恐全面癱瘓）',
    org: '依《通訊傳播委員會組織法》定額 7 人、須過半數出席方能決議；NCC 為通訊傳播事務之獨立管制機關。',
    keyFact:
      '2024/11/30 代理主委翁柏宗因延任條款遭刪除而卸任後，NCC 委員僅餘 3 人、未達法定開會人數；逾 100 項重大業務無法決議、僅能授權主委處理約 58 項基本業務，2/3 業務形同停擺。現有 3 名委員 2026/7/31 屆滿，若再封殺提名恐全面癱瘓。',
    keyFactEn:
      'Since acting chair Weng Po-tsung left on 30 Nov 2024 the NCC has had only 3 of 7 members, below quorum, leaving 104 major items undecidable; the remaining members’ terms end 31 July 2026, risking total paralysis.',
    actions: [
      '刪除延任條款：藍白於 2024/7/16 強行三讀刪除延任條款、11/15 三讀通過於次月施行，致代理主委翁柏宗 11/30 卸任，NCC 無法召開委員會議。',
      '封殺全體提名：行政院 2025/7/31 提名蔣榮先、程明修、黃葳威、羅慧雯，2025/11/7 遭藍白全體否決。',
    ],
    impact: [
      'NCC 未達法定開會人數後，104 項重大業務事項無法決議、僅有 58 項基本業務得授權主委召集委員諮詢會議處理。',
      '現有委員王正嘉、王怡惠、陳崇樹 2026/7/31 屆滿，若提名續遭封殺，委員將全體卸任、NCC 全面癱瘓。',
    ],
    timeline: [
      { date: '2024/11/30', text: '翁柏宗卸任，NCC 不足法定開會人數' },
      { date: '2025/07/31', text: '行政院提名 4 名委員' },
      { date: '2025/11/07', text: '立法院藍白全體否決提名' },
      { date: '2026/07/31', text: '現有 3 名委員任期屆滿，恐全面癱瘓' },
    ],
    sources: [
      { label: '中央社：NCC 被提名人全遭否決（2025/11/07）', url: 'https://www.cna.com.tw/news/aipl/202511070110.aspx' },
      { label: '自由時報：NCC 組織法修正通過 翁柏宗 12/1 起不得延任 104 項業務將停擺', url: 'https://news.ltn.com.tw/news/politics/breakingnews/4864013' },
      { label: '中央社：新 NCC 委員提名送立院審議（2025/07/31）', url: 'https://www.cna.com.tw/news/aipl/202507310187.aspx' },
    ],
  },
  {
    id: 'ftc',
    name: '公平會',
    subtitle: 'Fair Trade Commission',
    status: 'atRisk',
    statusLabel: '尚未但可能癱瘓',
    totalSeats: 7,
    vacantSeats: 2,
    criticalDate: '2027-01-30',
    criticalDateLabel: '距 3 名委員任期屆滿',
    org: '依《公平交易委員會組織法》置委員 7 人、任期 4 年得連任一次；會議須過半數委員出席方能決議，並有較嚴格之利益迴避要求。',
    keyFact:
      '2025/1/17 藍白封殺李鎂、洪財隆續任，公平會僅餘 5 名委員；7/4 又三讀修法刪除延任、限制連任並增訂補提名期限，一旦委員因人事卡關出缺即無人留任，遇須利益迴避之案件恐無法成會。',
    keyFactEn:
      'The blocking of two reappointments on 17 Jan 2025 cut the Fair Trade Commission to five members; a July 2025 amendment removing the holdover clause means vacant seats can no longer be filled by incumbents, threatening quorum on recusal-heavy cases.',
    actions: [
      '封殺續任：2025/1/17 立法院就公平會人事案封殺李鎂、洪財隆，僅通過陳志民、林慶堂，委員降至 5 名。',
      '惡修組織法：2025/7/4 藍白三讀通過委員「限連任一次、已連任者不得再任」、刪除延任規定並增訂補提名期限。',
    ],
    impact: [
      '修法後委員出缺時無法由舊委員留任至新委員產生，席次直接空缺。',
      '現有 5 名委員中辛志中、顏雅倫、李師榮 2027/1/30 屆滿，遇須迴避案件易因人數不足而無法成會。',
    ],
    timeline: [
      { date: '2025/01/17', text: '立法院封殺李鎂、洪財隆，僅通過 2 人' },
      { date: '2025/07/04', text: '三讀修《公平交易委員會組織法》限制連任、刪延任' },
      { date: '2027/01/30', text: '辛志中、顏雅倫、李師榮 3 名委員任期屆至' },
    ],
    sources: [
      { label: '中央社：公平會人事 藍白封殺李鎂、洪財隆 陳志民、林慶堂過關', url: 'https://www.cna.com.tw/news/aipl/202501170116.aspx' },
      { label: 'ETtoday：立院三讀修正公平會組織法 委員只能連任一次', url: 'https://www.ettoday.net/news/20250704/2990228.htm' },
      { label: '自由時報：公平交易委員會組織法三讀 連任限 1 次、刪除延任規定', url: 'https://news.ltn.com.tw/news/politics/breakingnews/5096157' },
    ],
  },
  {
    id: 'pts',
    name: '公共電視',
    subtitle: 'Public Television Service',
    status: 'paralyzed',
    statusLabel: '董事會空窗逾 13 個月',
    totalSeats: 15,
    vacantSeats: 15,
    criticalDate: null,
    org: '依《公視法》公視基金會設董事 11-15 人、監察人 3-5 人、董事任期 3 年；由立法院推舉審查委員、行政院提名、經審查委員 2/3 同意後聘任。公視董事會為公廣集團最高治理機關。',
    keyFact:
      '第 7 屆董監事 2025/5/19 屆滿、第 8 屆迄今未組成，治理空窗逾 13 個月；藍白刪除《公視法》董事看守延任條款製造治理真空，並杯葛審查、刪凍預算，公視無合法董事會可核定預算、遴聘總經理與決定節目方針。',
    keyFactEn:
      'The 7th board’s term ended 19 May 2025 and the 8th is still not seated, a governance vacuum of over 13 months, after the holdover clause was repealed and nominations and budgets were blocked.',
    actions: [
      '刪除看守條款：2026/1/16 三讀刪除《公視法》第 16 條「董事屆滿未及改聘者延任」（59:49）、2/4 公布，使屆滿董事無法看守；5/7 羅智強並援引此修法將董事長胡元輝逐出議場。',
      '杯葛審查：第 8 屆審查會 2025/12/31 僅 4 人過關、不足法定下限 11 人；2026/4/16 在野推舉之審委集體請辭／拒審而流會。',
      '刪凍預算：2025 年度公視預算遭刪 2,300 萬、凍結 5.7 億（約 25%）。',
    ],
    impact: [
      '無合法董事會即無法核定預算決算、遴聘總經理、決定節目方針，連動整個公廣集團（公視、台語台、客台、兒少台、TaiwanPlus、華視）。',
      '波及 TaiwanPlus 國際傳播與台語、客語公共服務；監委已申請自動調查公視治理危機。',
    ],
    timeline: [
      { date: '2025/05/19', text: '第 7 屆董監事任期屆滿' },
      { date: '2025/12/31', text: '第 8 屆審查會僅 4 人過關，不足下限 11 人' },
      { date: '2026/01/16', text: '立法院三讀刪除董事看守延任條款' },
      { date: '2026/04/16', text: '再次提名遭在野審委請辭、流會' },
    ],
    sources: [
      { label: '中央社：第 8 屆公視董事審查 14 人僅 4 人通過', url: 'https://www.cna.com.tw/news/acul/202512310301.aspx' },
      { label: '聯合報：公視法修正 董事屆滿未及改聘不可延任（刪看守條款）', url: 'https://udn.com/news/story/6656/9269556' },
      { label: 'CTWANT：公視預算刪 2,300 萬、凍結約 25%（5.7 億）', url: 'https://www.ctwant.com/article/391329/' },
    ],
  },
  {
    id: 'pdpc',
    name: '個資會',
    subtitle: 'Personal Data Protection Commission',
    status: 'overdue',
    statusLabel: '逾期未成立・違憲',
    totalSeats: 1,
    vacantSeats: 1,
    seatNoun: '應設機關',
    criticalDate: '2025-08-12',
    criticalDateLabel: '法定應成立期限',
    org: '源於 111 年憲判字第 13 號（健保資料庫案，2022/8/12）：認定我國欠缺個資保護獨立監督機制違憲，命 3 年內（最遲 2025/8/12）完成立法並成立獨立的個人資料保護委員會（規劃為中央三級獨立機關）。',
    keyFact:
      '法定應於 2025/8/12 前成立個資會，迄今逾期；《個資會組織法》2025/5/28 初審通過後送黨團協商，立法院長韓國瑜逾 300 天未召集協商、組織法尚未三讀，違憲狀態持續未消除。',
    keyFactEn:
      'A 2022 constitutional ruling required an independent data-protection authority by 12 Aug 2025; the organic act stalled in caucus negotiation that the Legislative Speaker has not convened for over 300 days, leaving the unconstitutional gap unresolved.',
    actions: [
      '擱置協商：《個資會組織法》2025/5/28 初審通過、6/24 決議送院長召集黨團協商後，院長韓國瑜逾 300 天未召集，組織法迄今未三讀。',
      '藍白兩黨一度提案將個資會籌備處預算砍至 1,000 元。',
    ],
    impact: [
      '法定期限已逾約 10 個月，違憲狀態持續；有關個資保障業務仍由各部會分散主管，欠缺獨立專責監理機關。',
      '已三讀之《個資法》修正（事故通報、稽核、限制國際傳輸等）因施行繫於委員會成立而尚未上路，衝擊歐盟 GDPR 適足性與台歐資料跨境流通。',
      'AI 時代個資外洩與境外（含中國）資料蒐集無獨立專責機關監理。',
    ],
    timeline: [
      { date: '2022/08/12', text: '111 年憲判字第 13 號命 3 年內成立獨立個資監督機關' },
      { date: '2025/05/28', text: '《個資會組織法》立法院初審通過、關鍵條文保留協商' },
      { date: '2025/08/12', text: '法定應成立期限屆至，迄今逾期未成立' },
    ],
    sources: [
      { label: '司法院憲法法庭：111 年憲判字第 13 號判決（健保資料庫案）', url: 'https://cons.judicial.gov.tw/docdata.aspx?fid=38&id=309956' },
      { label: '中央社：立院初審個資會組織法 關鍵條文保留送協商（2025/05/28）', url: 'https://www.cna.com.tw/news/aipl/202505280283.aspx' },
      { label: '公視新聞網 PNN：個資會設立期限將屆 民團憂組織法尚未完備', url: 'https://news.pts.org.tw/article/734875' },
    ],
  },
  {
    id: 'examination-yuan',
    name: '考試院',
    subtitle: 'Examination Yuan',
    status: 'former',
    statusLabel: '曾癱瘓・已恢復',
    totalSeats: 9,
    vacantSeats: 1,
    criticalDate: null,
    org: '院長 1 人、副院長 1 人、考試委員 7-9 人，由總統提名、立法院同意任命；2020 年修法後考試委員由 19 人減為 7-9 人、任期由 6 年改為 4 年。',
    keyFact:
      '第 13 屆正副院長及考試委員 2024/8/31 屆滿後，藍白延宕同意權審查逾 3 個月，史上首度正、副院長同時出缺、進入看守；立法院已於 2024/12 完成投票，第 14 屆就職恢復運作，僅 1 席考試委員（柯麗鈴）遭否決待補。',
    keyFactEn:
      'Briefly leaderless in late 2024 after the blue-white camp delayed confirmation for over three months; restored in Dec 2024 with the 14th-term heads sworn in, one commissioner seat still vacant.',
    actions: [
      '延宕同意權：第 13 屆人事 2024/8/31 屆滿後，藍白多數延宕人事同意權審查逾 3 個月，致考試院史上首度正、副院長同時出缺。',
      '否決提名：2024/12/17 投票時否決考試委員被提名人柯麗鈴，留下 1 席缺額。',
    ],
    impact: [
      '看守期間考試院無正、副院長，國家考試與銓敘人事行政運作一度受影響。',
      '第 14 屆已就職、業務恢復運作，惟仍缺 1 席考試委員待補。',
    ],
    timeline: [
      { date: '2024/08/31', text: '第 13 屆院長、副院長、考試委員任期屆滿，進入看守' },
      { date: '2024/12/17', text: '立法院完成同意權投票，僅柯麗鈴遭否決' },
      { date: '2024/12/20', text: '第 14 屆周弘憲（院長）、許舒翔（副院長）及 6 名考試委員宣誓就職' },
    ],
    sources: [
      { label: '中央社：考試院人事同意權案 周弘憲、許舒翔出任正副院長（2024/12/17）', url: 'https://www.cna.com.tw/news/aipl/202412170131.aspx' },
      { label: '公視新聞網：考試院人事案 周弘憲、許舒翔擔任正副院長', url: 'https://news.pts.org.tw/article/729306' },
      { label: '立法院全球資訊網：立院同意周弘憲、許舒翔為考試院正副院長', url: 'https://www.ly.gov.tw/Pages/Detail.aspx?nodeid=54301&pid=247332' },
    ],
  },
]

export { institutions, PARALYSIS_START }
