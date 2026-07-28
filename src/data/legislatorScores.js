// 本檔內容以立法院公報院會紀錄的逐格唱票為準，勿手動編輯個別票格。
// 2026-07-28 全面覆核：9 案共 4859 個票格逐格解析公報唱票，
// 與原有 perCase 彙總、無效票／未領票紀錄比對後零不符；每位立委改存 votes 逐格結果。
// 資料來源：立法院議事暨公報資訊網（ppg.ly.gov.tw），各案公報出處見 CASES[].gazette。

export const SCORE_META = {
  "updatedAt": "2026年7月28日",
  "legalBasis": "《立法院職權行使法》第 29 條：人事同意權案交付審查後提出院會以記名投票表決，經超過全體立法委員二分之一之同意為通過。因此不同意票、無效票、未領票（不投票、不出席）對同意權行使的癱瘓效果相同。",
  "methodology": "統計僅區分同意票與非同意票；每一案逐格列出被提名人與該委員的行使結果（同意、不同意、無效、未領票），來源為立法院公報院會紀錄的逐格唱票，不推斷立委主觀動機。",
  "indexNote": "癱瘓政府指數＝非同意票次數 ÷ 該委員在任期間人事同意權總投票次數 × 100（0-100 分）。指數未達 40 分者（比照美國異黨政府時期對大法官同意權行使狀況，考慮國會對行政部門提名人選之合理監督），不列入癱瘓指數。",
  "weightNote": "癱瘓政府指數加權＝癱瘓政府指數＋法案角色加分：加速政府癱瘓法案之提案人 +2、連署人 +1、三讀表決同意 +1，逐案累加（黨團提案以該黨團全體黨籍委員列提案人計點；三讀為舉手表決而議事錄無記名者，不計表決點數）。各立委計點法案與角色見展開明細。",
  "dataCaveat": "",
  "sources": [
    "立法院公報院會紀錄（9 案人事同意權逐格唱票，各案公報連結見卷宗內每案出處）",
    "考試院、司法院、公平交易委員會、審計部、國家通訊傳播委員會、中央選舉委員會、最高檢察署等機關人事同意權案公告"
  ]
};

export const PARALYSIS_THRESHOLD = 40;

export const CASES = [
  {
    "id": "examination",
    "date": "2024-12-17",
    "org": "考試院",
    "nomineeCount": 9,
    "passed": false,
    "dataStatus": "official",
    "nominees": [
      "周弘憲",
      "許舒翔",
      "邱文彥",
      "鄧家基",
      "王秀紅",
      "呂秋慧",
      "柯麗鈴",
      "黃東益",
      "伊萬·納威 Iwan Nawi"
    ],
    "gazette": {
      "議程編號": "1140104_00001",
      "url": "https://ppg.ly.gov.tw/ppg/PublicationBulletinDetail/download/communique1/final/pdf/114/01/LCIDC01_1140104.pdf",
      "pages": "1-395"
    }
  },
  {
    "id": "justices1",
    "date": "2024-12-24",
    "org": "大法官（一輪）",
    "nomineeCount": 7,
    "passed": false,
    "dataStatus": "official",
    "nominees": [
      "張文貞",
      "姚立明",
      "何賴傑",
      "陳運財",
      "王碧芳",
      "廖福特",
      "劉靜怡"
    ],
    "gazette": {
      "議程編號": "1140501_00007",
      "url": "https://ppg.ly.gov.tw/ppg/PublicationBulletinDetail/download/communique1/final/pdf/114/05/LCIDC01_1140501.pdf",
      "pages": "167-197"
    }
  },
  {
    "id": "ftc",
    "date": "2025-01-17",
    "org": "公平會",
    "nomineeCount": 4,
    "passed": false,
    "dataStatus": "official",
    "nominees": [
      "李鎂",
      "陳志民",
      "洪財隆",
      "林慶堂"
    ],
    "gazette": {
      "議程編號": "1141901_00002",
      "url": "https://ppg.ly.gov.tw/ppg/PublicationBulletinDetail/download/communique1/final/pdf/114/19/LCIDC01_1141901.pdf",
      "pages": "1-22"
    }
  },
  {
    "id": "justices2",
    "date": "2025-07-25",
    "org": "大法官（二輪）",
    "nomineeCount": 7,
    "passed": false,
    "dataStatus": "official",
    "nominees": [
      "蔡秋明",
      "蘇素娥",
      "蕭文生",
      "鄭純惠",
      "林麗瑩",
      "陳慈陽",
      "詹鎮榮"
    ],
    "gazette": {
      "議程編號": "1146801_00002",
      "url": "https://ppg.ly.gov.tw/ppg/PublicationBulletinDetail/download/communique1/final/pdf/114/68/LCIDC01_1146801.pdf",
      "pages": "1-30"
    }
  },
  {
    "id": "auditor",
    "date": "2025-09-30",
    "org": "審計長",
    "nomineeCount": 1,
    "passed": true,
    "dataStatus": "official",
    "nominees": [
      "陳瑞敏"
    ],
    "gazette": {
      "議程編號": "1147801_00006",
      "url": "https://ppg.ly.gov.tw/ppg/PublicationBulletinDetail/download/communique1/final/pdf/114/78/LCIDC01_1147801.pdf",
      "pages": "11-16"
    }
  },
  {
    "id": "ncc",
    "date": "2025-11-07",
    "org": "NCC",
    "nomineeCount": 4,
    "passed": false,
    "dataStatus": "official",
    "nominees": [
      "蔣榮先",
      "程明修",
      "黃葳威",
      "羅慧雯"
    ],
    "gazette": {
      "議程編號": "1149101_00003",
      "url": "https://ppg.ly.gov.tw/ppg/PublicationBulletinDetail/download/communique1/final/pdf/114/91/LCIDC01_1149101.pdf",
      "pages": "18-38"
    }
  },
  {
    "id": "cec1",
    "date": "2026-03-13",
    "org": "中選會（一輪）",
    "nomineeCount": 7,
    "passed": false,
    "dataStatus": "official",
    "nominees": [
      "游盈隆",
      "胡博硯",
      "黃文玲",
      "李禮仲",
      "蘇嘉宏",
      "蘇子喬",
      "陳宗義"
    ],
    "gazette": {
      "議程編號": "1151801_00005",
      "url": "https://ppg.ly.gov.tw/ppg/PublicationBulletinDetail/download/communique1/final/pdf/115/18/LCIDC01_1151801.pdf",
      "pages": "65-96"
    }
  },
  {
    "id": "prosecutor",
    "date": "2026-05-05",
    "org": "檢察總長",
    "nomineeCount": 1,
    "passed": false,
    "dataStatus": "official",
    "nominees": [
      "徐錫祥"
    ],
    "gazette": {
      "議程編號": "1153301_00007",
      "url": "https://ppg.ly.gov.tw/ppg/PublicationBulletinDetail/download/communique1/final/pdf/115/33/LCIDC01_1153301.pdf",
      "pages": "285-295"
    }
  },
  {
    "id": "cec2",
    "date": "2026-07-03",
    "org": "中選會（二輪）",
    "nomineeCount": 3,
    "passed": false,
    "dataStatus": "official",
    "nominees": [
      "沈淑妃",
      "蔡維哲",
      "黃謀信"
    ],
    "gazette": {
      "議程編號": "1155401_00004",
      "url": "https://ppg.ly.gov.tw/ppg/download/communique1/final/pdf/115/54/LCIDC01_1155401_00004.pdf",
      "pages": "41-58"
    }
  }
];

export const LEGISLATORS = [
  {
    "rank": 1,
    "name": "許忠信",
    "party": "台灣民眾黨",
    "agree": 0,
    "nonAgree": 4,
    "inOffice": 4,
    "index": 100,
    "billRoles": [
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216960000/details"
      }
    ],
    "billBonus": 2,
    "weightedIndex": 102,
    "paralyzing": true,
    "breakdown": {
      "disagree": 4,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": null,
      "justices1": null,
      "ftc": null,
      "justices2": null,
      "auditor": null,
      "ncc": null,
      "cec1": null,
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 2,
    "name": "黃健豪",
    "party": "中國國民黨",
    "agree": 7,
    "nonAgree": 36,
    "inOffice": 43,
    "index": 83.7,
    "billRoles": [
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110055360000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 9,
    "weightedIndex": 92.7,
    "paralyzing": true,
    "breakdown": {
      "disagree": 24,
      "invalid": 3,
      "notPickup": 9
    },
    "perCase": {
      "examination": {
        "同意": 0,
        "不同意": 0,
        "無效": 0,
        "未領票": 9
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "未領票",
        "未領票",
        "未領票",
        "未領票",
        "未領票",
        "未領票",
        "未領票",
        "未領票",
        "未領票"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 3,
    "name": "翁曉玲",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第三十條及第四十三條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110067550000/details"
      },
      {
        "bill": "憲法訴訟法第四條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110060440000/details"
      },
      {
        "bill": "監察院組織法第六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216010000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216000000/details"
      },
      {
        "bill": "中央選舉委員會組織法第四條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216300000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110027190000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第五條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110047160000/details"
      },
      {
        "bill": "公平交易委員會組織法第五條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216310000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110055360000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173710000/details"
      }
    ],
    "billBonus": 24,
    "weightedIndex": 91.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 4,
    "name": "劉書彬",
    "party": "台灣民眾黨",
    "agree": 5,
    "nonAgree": 18,
    "inOffice": 23,
    "index": 78.3,
    "billRoles": [
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216960000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 8,
    "weightedIndex": 86.3,
    "paralyzing": true,
    "breakdown": {
      "disagree": 18,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": null,
      "justices1": null,
      "ftc": null,
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "不同意",
        "不同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 5,
    "name": "林倩綺",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第三十條及第四十三條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110067550000/details"
      },
      {
        "bill": "憲法訴訟法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110060440000/details"
      },
      {
        "bill": "監察院組織法第六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216010000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216000000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110218420000/details"
      },
      {
        "bill": "中央選舉委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216300000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110027190000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110047160000/details"
      },
      {
        "bill": "公平交易委員會組織法第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216310000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110055360000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173710000/details"
      }
    ],
    "billBonus": 18,
    "weightedIndex": 85.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 6,
    "name": "謝衣鳯",
    "party": "中國國民黨",
    "agree": 10,
    "nonAgree": 33,
    "inOffice": 43,
    "index": 76.7,
    "billRoles": [
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 6,
    "weightedIndex": 82.7,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 0,
      "notPickup": 7
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 0,
        "不同意": 0,
        "無效": 0,
        "未領票": 7
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "未領票",
        "未領票",
        "未領票",
        "未領票",
        "未領票",
        "未領票",
        "未領票"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 7,
    "name": "牛煦庭",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第三十條及第四十三條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110067550000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110218420000/details"
      },
      {
        "bill": "中央選舉委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216300000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110027190000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110047160000/details"
      },
      {
        "bill": "公平交易委員會組織法第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216310000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110055360000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 15,
    "weightedIndex": 82.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 8,
    "name": "王鴻薇",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第三十條及第四十三條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110067550000/details"
      },
      {
        "bill": "監察院組織法第六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216010000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216000000/details"
      },
      {
        "bill": "中央選舉委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216300000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110047160000/details"
      },
      {
        "bill": "公平交易委員會組織法第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216310000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173710000/details"
      }
    ],
    "billBonus": 14,
    "weightedIndex": 81.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 25,
      "invalid": 4,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 0,
        "無效": 1,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "無效"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    },
    "voteNotes": [
      {
        "caseId": "prosecutor",
        "nominee": "徐錫祥",
        "note": "公開自認誤投（2026-05-05 媒體受訪）"
      }
    ]
  },
  {
    "rank": 9,
    "name": "黃仁",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第三十條及第四十三條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110067550000/details"
      },
      {
        "bill": "監察院組織法第六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216010000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216000000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110218420000/details"
      },
      {
        "bill": "中央選舉委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216300000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110047160000/details"
      },
      {
        "bill": "公平交易委員會組織法第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216310000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110055360000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 14,
    "weightedIndex": 81.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 25,
      "invalid": 4,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 1,
        "無效": 1,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "無效",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 10,
    "name": "邱若華",
    "party": "中國國民黨",
    "agree": 13,
    "nonAgree": 30,
    "inOffice": 43,
    "index": 69.8,
    "billRoles": [
      {
        "bill": "憲法訴訟法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110060440000/details"
      },
      {
        "bill": "監察院組織法第六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216010000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216000000/details"
      },
      {
        "bill": "中央選舉委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216300000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "公平交易委員會組織法第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216310000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110055360000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 11,
    "weightedIndex": 80.8,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 4,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 6,
        "不同意": 2,
        "無效": 1,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "無效",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 11,
    "name": "蘇清泉",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第三十條及第四十三條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110067550000/details"
      },
      {
        "bill": "憲法訴訟法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110060440000/details"
      },
      {
        "bill": "監察院組織法第六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216010000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216000000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110218420000/details"
      },
      {
        "bill": "中央選舉委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216300000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110027190000/details"
      },
      {
        "bill": "公平交易委員會組織法第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216310000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 13,
    "weightedIndex": 80.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 12,
    "name": "鄭天財 Sra Kacaw",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第三十條及第四十三條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110067550000/details"
      },
      {
        "bill": "憲法訴訟法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110060440000/details"
      },
      {
        "bill": "監察院組織法第六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216010000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216000000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110218420000/details"
      },
      {
        "bill": "中央選舉委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216300000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "公平交易委員會組織法第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216310000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 13,
    "weightedIndex": 80.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 13,
    "name": "鄭正鈐",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第三十條及第四十三條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110067550000/details"
      },
      {
        "bill": "憲法訴訟法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110060440000/details"
      },
      {
        "bill": "監察院組織法第六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216010000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216000000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110218420000/details"
      },
      {
        "bill": "中央選舉委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216300000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "公平交易委員會組織法第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216310000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 13,
    "weightedIndex": 80.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 14,
    "name": "廖偉翔",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "監察院組織法第六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216010000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216000000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110218420000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110027190000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 12,
    "weightedIndex": 79.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 15,
    "name": "張智倫",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110060440000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110218420000/details"
      },
      {
        "bill": "中央選舉委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216300000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110027190000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110047160000/details"
      },
      {
        "bill": "公平交易委員會組織法第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216310000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110055360000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173710000/details"
      }
    ],
    "billBonus": 12,
    "weightedIndex": 79.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 16,
    "name": "林沛祥",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第五條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110047160000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110055360000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173710000/details"
      }
    ],
    "billBonus": 12,
    "weightedIndex": 79.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 17,
    "name": "羅智強",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第三十條及第四十三條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110067550000/details"
      },
      {
        "bill": "憲法訴訟法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110060440000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110027190000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110055360000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173710000/details"
      }
    ],
    "billBonus": 12,
    "weightedIndex": 79.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 18,
    "name": "許宇甄",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "監察院組織法第六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216010000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216000000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110218420000/details"
      },
      {
        "bill": "中央選舉委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216300000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110047160000/details"
      },
      {
        "bill": "公平交易委員會組織法第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216310000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110055360000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 12,
    "weightedIndex": 79.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 19,
    "name": "邱鎮軍",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110060440000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110218420000/details"
      },
      {
        "bill": "中央選舉委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216300000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110027190000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110047160000/details"
      },
      {
        "bill": "公平交易委員會組織法第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216310000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110055360000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 12,
    "weightedIndex": 79.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 20,
    "name": "馬文君",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第三十條及第四十三條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110067550000/details"
      },
      {
        "bill": "監察院組織法第六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216010000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216000000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110055360000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 12,
    "weightedIndex": 79.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 21,
    "name": "林思銘",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第四條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110060440000/details"
      },
      {
        "bill": "監察院組織法第六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216010000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216000000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110027190000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 11,
    "weightedIndex": 78.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 22,
    "name": "涂權吉",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第三十條及第四十三條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110067550000/details"
      },
      {
        "bill": "監察院組織法第六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216010000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216000000/details"
      },
      {
        "bill": "中央選舉委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216300000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110027190000/details"
      },
      {
        "bill": "公平交易委員會組織法第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216310000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173710000/details"
      }
    ],
    "billBonus": 11,
    "weightedIndex": 78.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 23,
    "name": "羅明才",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第三十條及第四十三條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110067550000/details"
      },
      {
        "bill": "憲法訴訟法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110060440000/details"
      },
      {
        "bill": "監察院組織法第六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216010000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216000000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110047160000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110055360000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 11,
    "weightedIndex": 78.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 24,
    "name": "謝龍介",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110060440000/details"
      },
      {
        "bill": "監察院組織法第六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216010000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216000000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110218420000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110027190000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110047160000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 11,
    "weightedIndex": 78.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 25,
    "name": "賴士葆",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第三十條及第四十三條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110067550000/details"
      },
      {
        "bill": "監察院組織法第六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216010000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216000000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110218420000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110027190000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 11,
    "weightedIndex": 78.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 26,
    "name": "陳雪生",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110060440000/details"
      },
      {
        "bill": "監察院組織法第六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216010000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216000000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110027190000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110047160000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110055360000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 11,
    "weightedIndex": 78.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 27,
    "name": "楊瓊瓔",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第三十條及第四十三條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110067550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110027190000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110047160000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 10,
    "weightedIndex": 77.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 28,
    "name": "洪孟楷",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110218420000/details"
      },
      {
        "bill": "中央選舉委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216300000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "公平交易委員會組織法第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216310000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173710000/details"
      }
    ],
    "billBonus": 10,
    "weightedIndex": 77.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 29,
    "name": "王育敏",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第三十條及第四十三條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110067550000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110218420000/details"
      },
      {
        "bill": "中央選舉委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216300000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110047160000/details"
      },
      {
        "bill": "公平交易委員會組織法第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216310000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 10,
    "weightedIndex": 77.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 30,
    "name": "盧縣一",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第三十條及第四十三條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110067550000/details"
      },
      {
        "bill": "中央選舉委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216300000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "公平交易委員會組織法第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216310000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173710000/details"
      }
    ],
    "billBonus": 10,
    "weightedIndex": 77.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 25,
      "invalid": 4,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 2,
        "無效": 1,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "無效",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 31,
    "name": "陳永康",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110060440000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110027190000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110055360000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173710000/details"
      }
    ],
    "billBonus": 10,
    "weightedIndex": 77.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 32,
    "name": "黃建賓",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第三十條及第四十三條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110067550000/details"
      },
      {
        "bill": "監察院組織法第六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216010000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216000000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110055360000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 10,
    "weightedIndex": 77.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 19,
      "invalid": 3,
      "notPickup": 7
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 0,
        "無效": 0,
        "未領票": 7
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "未領票",
        "未領票",
        "未領票",
        "未領票",
        "未領票",
        "未領票",
        "未領票"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 33,
    "name": "傅崐萁",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110027190000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173710000/details"
      }
    ],
    "billBonus": 9,
    "weightedIndex": 76.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 34,
    "name": "呂玉玲",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110218420000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173710000/details"
      }
    ],
    "billBonus": 9,
    "weightedIndex": 76.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 35,
    "name": "徐巧芯",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110060440000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110055360000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 9,
    "weightedIndex": 76.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 36,
    "name": "游顥",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110047160000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 9,
    "weightedIndex": 76.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 22,
      "invalid": 3,
      "notPickup": 4
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 0,
        "無效": 0,
        "未領票": 4
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "未領票",
        "未領票",
        "未領票",
        "未領票"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 37,
    "name": "羅廷瑋",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110027190000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110047160000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173710000/details"
      }
    ],
    "billBonus": 9,
    "weightedIndex": 76.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 38,
    "name": "陳玉珍",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110047160000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110055360000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 9,
    "weightedIndex": 76.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 39,
    "name": "廖先翔",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110218420000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110055360000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 8,
    "weightedIndex": 75.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 40,
    "name": "李彥秀",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第五條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110047160000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173710000/details"
      }
    ],
    "billBonus": 8,
    "weightedIndex": 75.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 41,
    "name": "林德福",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第三十條及第四十三條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110067550000/details"
      },
      {
        "bill": "憲法訴訟法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110060440000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110047160000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110055360000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 8,
    "weightedIndex": 75.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 42,
    "name": "陳菁徽",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第三十條及第四十三條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110067550000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110218420000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173710000/details"
      }
    ],
    "billBonus": 8,
    "weightedIndex": 75.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 43,
    "name": "顏寬恒",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第三十條及第四十三條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110067550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110047160000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 8,
    "weightedIndex": 75.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 44,
    "name": "丁學忠",
    "party": "中國國民黨",
    "agree": 13,
    "nonAgree": 30,
    "inOffice": 43,
    "index": 69.8,
    "billRoles": [
      {
        "bill": "監察院組織法第六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216010000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216000000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      }
    ],
    "billBonus": 5,
    "weightedIndex": 74.8,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 1
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 0,
        "不同意": 0,
        "無效": 0,
        "未領票": 1
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "未領票"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    },
    "voteNotes": [
      {
        "caseId": "auditor",
        "nominee": "陳瑞敏",
        "note": "議事錄明文載『請假』"
      }
    ]
  },
  {
    "rank": 45,
    "name": "萬美玲",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第七條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110041400000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 7,
    "weightedIndex": 74.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 46,
    "name": "吳宗憲",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第三十條及第四十三條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110067550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110047160000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 6,
    "weightedIndex": 73.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 47,
    "name": "張嘉郡",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014450000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 6,
    "weightedIndex": 73.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 29,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "不同意",
        "不同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 48,
    "name": "柯志恩",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110047160000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 6,
    "weightedIndex": 73.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 49,
    "name": "葛如鈞",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110218420000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173710000/details"
      }
    ],
    "billBonus": 6,
    "weightedIndex": 73.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 50,
    "name": "魯明哲",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "中央選舉委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216300000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條及第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110047160000/details"
      },
      {
        "bill": "公平交易委員會組織法第五條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216310000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 6,
    "weightedIndex": 73.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 51,
    "name": "陳昭姿",
    "party": "台灣民眾黨",
    "agree": 15,
    "nonAgree": 28,
    "inOffice": 43,
    "index": 65.1,
    "billRoles": [
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216960000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 8,
    "weightedIndex": 73.1,
    "paralyzing": true,
    "breakdown": {
      "disagree": 28,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 1,
        "不同意": 6,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "不同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "不同意",
        "不同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 52,
    "name": "張啓楷",
    "party": "台灣民眾黨",
    "agree": 11,
    "nonAgree": 21,
    "inOffice": 32,
    "index": 65.6,
    "billRoles": [
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110055360000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 7,
    "weightedIndex": 72.6,
    "paralyzing": true,
    "breakdown": {
      "disagree": 21,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 1,
        "不同意": 6,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": null,
      "prosecutor": null,
      "cec2": null
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "不同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 53,
    "name": "林國成",
    "party": "台灣民眾黨",
    "agree": 11,
    "nonAgree": 21,
    "inOffice": 32,
    "index": 65.6,
    "billRoles": [
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110055360000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 7,
    "weightedIndex": 72.6,
    "paralyzing": true,
    "breakdown": {
      "disagree": 21,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 1,
        "不同意": 6,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": null,
      "prosecutor": null,
      "cec2": null
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "不同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 54,
    "name": "徐欣瑩",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "憲法訴訟法第三十條及第四十三條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110067550000/details"
      },
      {
        "bill": "憲法訴訟法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110060440000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 5,
    "weightedIndex": 72.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 55,
    "name": "陳超明",
    "party": "無黨籍",
    "agree": 15,
    "nonAgree": 28,
    "inOffice": 43,
    "index": 65.1,
    "billRoles": [
      {
        "bill": "憲法訴訟法第三十條及第四十三條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110067550000/details"
      },
      {
        "bill": "監察院組織法第六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216010000/details"
      },
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216000000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110027190000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 7,
    "weightedIndex": 72.1,
    "paralyzing": true,
    "breakdown": {
      "disagree": 24,
      "invalid": 4,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 1,
        "無效": 1,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 3,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "無效",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 56,
    "name": "林憶君",
    "party": "台灣民眾黨",
    "agree": 11,
    "nonAgree": 21,
    "inOffice": 32,
    "index": 65.6,
    "billRoles": [
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 6,
    "weightedIndex": 71.6,
    "paralyzing": true,
    "breakdown": {
      "disagree": 17,
      "invalid": 0,
      "notPickup": 4
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 1,
        "不同意": 6,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 0,
        "無效": 0,
        "未領票": 4
      },
      "cec1": null,
      "prosecutor": null,
      "cec2": null
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "不同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "未領票",
        "未領票",
        "未領票",
        "未領票"
      ]
    }
  },
  {
    "rank": 57,
    "name": "麥玉珍",
    "party": "台灣民眾黨",
    "agree": 11,
    "nonAgree": 21,
    "inOffice": 32,
    "index": 65.6,
    "billRoles": [
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 6,
    "weightedIndex": 71.6,
    "paralyzing": true,
    "breakdown": {
      "disagree": 21,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 1,
        "不同意": 6,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": null,
      "prosecutor": null,
      "cec2": null
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "不同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 58,
    "name": "黃國昌",
    "party": "台灣民眾黨",
    "agree": 11,
    "nonAgree": 21,
    "inOffice": 32,
    "index": 65.6,
    "billRoles": [
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 6,
    "weightedIndex": 71.6,
    "paralyzing": true,
    "breakdown": {
      "disagree": 21,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 1,
        "不同意": 6,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": null,
      "prosecutor": null,
      "cec2": null
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "不同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 59,
    "name": "黃珊珊",
    "party": "台灣民眾黨",
    "agree": 11,
    "nonAgree": 21,
    "inOffice": 32,
    "index": 65.6,
    "billRoles": [
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 6,
    "weightedIndex": 71.6,
    "paralyzing": true,
    "breakdown": {
      "disagree": 20,
      "invalid": 1,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 1,
        "無效": 1,
        "未領票": 0
      },
      "justices1": {
        "同意": 1,
        "不同意": 6,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": null,
      "prosecutor": null,
      "cec2": null
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "無效",
        "同意",
        "不同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 60,
    "name": "葉元之",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "國家通訊傳播委員會組織法第四條、第八條及第十條條文修正草案",
        "role": "連署人",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110014430000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 4,
    "weightedIndex": 71.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 61,
    "name": "高金素梅",
    "party": "無黨籍",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      },
      {
        "bill": "公平交易委員會組織法第四條及第十六條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110080550000/details"
      },
      {
        "bill": "公共電視法第十六條及第四十九條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110173170000/details"
      }
    ],
    "billBonus": 3,
    "weightedIndex": 70.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 26,
      "invalid": 3,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 62,
    "name": "江啟臣",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [
      {
        "bill": "國家通訊傳播委員會組織法第四條條文修正草案",
        "role": "三讀表決同意",
        "points": 1,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110009550000/details"
      }
    ],
    "billBonus": 1,
    "weightedIndex": 68.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 19,
      "invalid": 3,
      "notPickup": 7
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 0,
        "無效": 0,
        "未領票": 7
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "未領票",
        "未領票",
        "未領票",
        "未領票",
        "未領票",
        "未領票",
        "未領票"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 63,
    "name": "韓國瑜",
    "party": "中國國民黨",
    "agree": 14,
    "nonAgree": 29,
    "inOffice": 43,
    "index": 67.4,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 67.4,
    "paralyzing": true,
    "breakdown": {
      "disagree": 16,
      "invalid": 3,
      "notPickup": 10
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 0,
        "不同意": 7,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 0,
        "不同意": 0,
        "無效": 0,
        "未領票": 7
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 4,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 4,
        "不同意": 0,
        "無效": 3,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 0,
        "無效": 0,
        "未領票": 3
      }
    },
    "votes": {
      "examination": [
        "不同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ],
      "justices2": [
        "未領票",
        "未領票",
        "未領票",
        "未領票",
        "未領票",
        "未領票",
        "未領票"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "不同意",
        "不同意",
        "不同意",
        "不同意"
      ],
      "cec1": [
        "同意",
        "無效",
        "無效",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "未領票",
        "未領票",
        "未領票"
      ]
    }
  },
  {
    "rank": 64,
    "name": "洪毓祥",
    "party": "台灣民眾黨",
    "agree": 4,
    "nonAgree": 7,
    "inOffice": 11,
    "index": 63.6,
    "billRoles": [
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216960000/details"
      }
    ],
    "billBonus": 2,
    "weightedIndex": 65.6,
    "paralyzing": true,
    "breakdown": {
      "disagree": 7,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": null,
      "justices1": null,
      "ftc": null,
      "justices2": null,
      "auditor": null,
      "ncc": null,
      "cec1": {
        "同意": 4,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "cec1": [
        "同意",
        "不同意",
        "不同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 65,
    "name": "王安祥",
    "party": "台灣民眾黨",
    "agree": 4,
    "nonAgree": 7,
    "inOffice": 11,
    "index": 63.6,
    "billRoles": [
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216960000/details"
      }
    ],
    "billBonus": 2,
    "weightedIndex": 65.6,
    "paralyzing": true,
    "breakdown": {
      "disagree": 7,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": null,
      "justices1": null,
      "ftc": null,
      "justices2": null,
      "auditor": null,
      "ncc": null,
      "cec1": {
        "同意": 4,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "cec1": [
        "同意",
        "不同意",
        "不同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 66,
    "name": "蔡春綢",
    "party": "台灣民眾黨",
    "agree": 4,
    "nonAgree": 7,
    "inOffice": 11,
    "index": 63.6,
    "billRoles": [
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216960000/details"
      }
    ],
    "billBonus": 2,
    "weightedIndex": 65.6,
    "paralyzing": true,
    "breakdown": {
      "disagree": 6,
      "invalid": 1,
      "notPickup": 0
    },
    "perCase": {
      "examination": null,
      "justices1": null,
      "ftc": null,
      "justices2": null,
      "auditor": null,
      "ncc": null,
      "cec1": {
        "同意": 4,
        "不同意": 2,
        "無效": 1,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "cec1": [
        "同意",
        "不同意",
        "無效",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 67,
    "name": "邱慧洳",
    "party": "台灣民眾黨",
    "agree": 4,
    "nonAgree": 7,
    "inOffice": 11,
    "index": 63.6,
    "billRoles": [
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216960000/details"
      }
    ],
    "billBonus": 2,
    "weightedIndex": 65.6,
    "paralyzing": true,
    "breakdown": {
      "disagree": 7,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": null,
      "justices1": null,
      "ftc": null,
      "justices2": null,
      "auditor": null,
      "ncc": null,
      "cec1": {
        "同意": 4,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "cec1": [
        "同意",
        "不同意",
        "不同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 68,
    "name": "陳清龍",
    "party": "台灣民眾黨",
    "agree": 4,
    "nonAgree": 7,
    "inOffice": 11,
    "index": 63.6,
    "billRoles": [
      {
        "bill": "法院組織法第六十六條條文修正草案",
        "role": "提案人",
        "points": 2,
        "source": "https://ppg.ly.gov.tw/ppg/bills/202110216960000/details"
      }
    ],
    "billBonus": 2,
    "weightedIndex": 65.6,
    "paralyzing": true,
    "breakdown": {
      "disagree": 7,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": null,
      "justices1": null,
      "ftc": null,
      "justices2": null,
      "auditor": null,
      "ncc": null,
      "cec1": {
        "同意": 4,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "cec1": [
        "同意",
        "不同意",
        "不同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "prosecutor": [
        "不同意"
      ],
      "cec2": [
        "不同意",
        "不同意",
        "不同意"
      ]
    }
  },
  {
    "rank": 69,
    "name": "吳春城",
    "party": "台灣民眾黨",
    "agree": 10,
    "nonAgree": 10,
    "inOffice": 20,
    "index": 50,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 50,
    "paralyzing": true,
    "breakdown": {
      "disagree": 10,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 7,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 1,
        "不同意": 6,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 2,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "justices2": null,
      "auditor": null,
      "ncc": null,
      "cec1": null,
      "prosecutor": null,
      "cec2": null
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意",
        "不同意"
      ],
      "justices1": [
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "不同意",
        "同意"
      ],
      "ftc": [
        "不同意",
        "同意",
        "不同意",
        "同意"
      ]
    }
  },
  {
    "rank": 70,
    "name": "李貞秀",
    "party": "台灣民眾黨",
    "agree": 4,
    "nonAgree": 3,
    "inOffice": 7,
    "index": 42.9,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 42.9,
    "paralyzing": true,
    "breakdown": {
      "disagree": 3,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": null,
      "justices1": null,
      "ftc": null,
      "justices2": null,
      "auditor": null,
      "ncc": null,
      "cec1": {
        "同意": 4,
        "不同意": 3,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": null,
      "cec2": null
    },
    "votes": {
      "cec1": [
        "同意",
        "不同意",
        "不同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "范雲",
    "party": "民主進步黨",
    "agree": 38,
    "nonAgree": 5,
    "inOffice": 43,
    "index": 11.6,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 11.6,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 4
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 0,
        "不同意": 0,
        "無效": 0,
        "未領票": 4
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "未領票",
        "未領票",
        "未領票",
        "未領票"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "林宜瑾",
    "party": "民主進步黨",
    "agree": 39,
    "nonAgree": 4,
    "inOffice": 43,
    "index": 9.3,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 9.3,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 3
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 0,
        "不同意": 0,
        "無效": 0,
        "未領票": 3
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "未領票",
        "未領票",
        "未領票"
      ]
    }
  },
  {
    "rank": null,
    "name": "劉建國",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 3,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "吳秉叡",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 3,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "張宏陸",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 3,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "張雅琳",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 3,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "徐富癸",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 3,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "李昆澤",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 3,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "李柏毅",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 3,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "林岱樺",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 3,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "林月琴",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 3,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "林淑芬",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 2,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 0,
        "無效": 2,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "無效",
        "無效"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "柯建銘",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 3,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "楊曜",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 3,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "沈發惠",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 3,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "王世堅",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 3,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "王定宇",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 2,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 0,
        "無效": 2,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "無效",
        "無效"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "王正旭",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 3,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "王美惠",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 3,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "王義川",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 3,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "莊瑞雄",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 3,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "許智傑",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 3,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "賴惠員",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 3,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "郭昱晴",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 3,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "陳冠廷",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 3,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "陳瑩",
    "party": "民主進步黨",
    "agree": 40,
    "nonAgree": 3,
    "inOffice": 43,
    "index": 7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 3,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 5,
        "不同意": 2,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "不同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "吳琪銘",
    "party": "民主進步黨",
    "agree": 41,
    "nonAgree": 2,
    "inOffice": 43,
    "index": 4.7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 4.7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 1
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 0,
        "不同意": 0,
        "無效": 0,
        "未領票": 1
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "未領票"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "沈伯洋",
    "party": "民主進步黨",
    "agree": 41,
    "nonAgree": 2,
    "inOffice": 43,
    "index": 4.7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 4.7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 2,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "陳俊宇",
    "party": "民主進步黨",
    "agree": 41,
    "nonAgree": 2,
    "inOffice": 43,
    "index": 4.7,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 4.7,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 1,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 6,
        "不同意": 0,
        "無效": 1,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "無效"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "伍麗華 Saidhai Tahovecahe",
    "party": "民主進步黨",
    "agree": 42,
    "nonAgree": 1,
    "inOffice": 43,
    "index": 2.3,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 2.3,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "何欣純",
    "party": "民主進步黨",
    "agree": 42,
    "nonAgree": 1,
    "inOffice": 43,
    "index": 2.3,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 2.3,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "吳思瑤",
    "party": "民主進步黨",
    "agree": 42,
    "nonAgree": 1,
    "inOffice": 43,
    "index": 2.3,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 2.3,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "吳沛憶",
    "party": "民主進步黨",
    "agree": 42,
    "nonAgree": 1,
    "inOffice": 43,
    "index": 2.3,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 2.3,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "李坤城",
    "party": "民主進步黨",
    "agree": 42,
    "nonAgree": 1,
    "inOffice": 43,
    "index": 2.3,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 2.3,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "林俊憲",
    "party": "民主進步黨",
    "agree": 42,
    "nonAgree": 1,
    "inOffice": 43,
    "index": 2.3,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 2.3,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "林楚茵",
    "party": "民主進步黨",
    "agree": 42,
    "nonAgree": 1,
    "inOffice": 43,
    "index": 2.3,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 2.3,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "羅美玲",
    "party": "民主進步黨",
    "agree": 42,
    "nonAgree": 1,
    "inOffice": 43,
    "index": 2.3,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 2.3,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "蔡其昌",
    "party": "民主進步黨",
    "agree": 42,
    "nonAgree": 1,
    "inOffice": 43,
    "index": 2.3,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 2.3,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "蔡易餘",
    "party": "民主進步黨",
    "agree": 42,
    "nonAgree": 1,
    "inOffice": 43,
    "index": 2.3,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 2.3,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "蘇巧慧",
    "party": "民主進步黨",
    "agree": 42,
    "nonAgree": 1,
    "inOffice": 43,
    "index": 2.3,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 2.3,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "賴瑞隆",
    "party": "民主進步黨",
    "agree": 42,
    "nonAgree": 1,
    "inOffice": 43,
    "index": 2.3,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 2.3,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "邱志偉",
    "party": "民主進步黨",
    "agree": 42,
    "nonAgree": 1,
    "inOffice": 43,
    "index": 2.3,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 2.3,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "邱議瑩",
    "party": "民主進步黨",
    "agree": 42,
    "nonAgree": 1,
    "inOffice": 43,
    "index": 2.3,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 2.3,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "郭國文",
    "party": "民主進步黨",
    "agree": 42,
    "nonAgree": 1,
    "inOffice": 43,
    "index": 2.3,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 2.3,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "鍾佳濱",
    "party": "民主進步黨",
    "agree": 42,
    "nonAgree": 1,
    "inOffice": 43,
    "index": 2.3,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 2.3,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "陳亭妃",
    "party": "民主進步黨",
    "agree": 42,
    "nonAgree": 1,
    "inOffice": 43,
    "index": 2.3,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 2.3,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "陳培瑜",
    "party": "民主進步黨",
    "agree": 42,
    "nonAgree": 1,
    "inOffice": 43,
    "index": 2.3,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 2.3,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "陳秀寳",
    "party": "民主進步黨",
    "agree": 42,
    "nonAgree": 1,
    "inOffice": 43,
    "index": 2.3,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 2.3,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "陳素月",
    "party": "民主進步黨",
    "agree": 42,
    "nonAgree": 1,
    "inOffice": 43,
    "index": 2.3,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 2.3,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "黃捷",
    "party": "民主進步黨",
    "agree": 42,
    "nonAgree": 1,
    "inOffice": 43,
    "index": 2.3,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 2.3,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  },
  {
    "rank": null,
    "name": "黃秀芳",
    "party": "民主進步黨",
    "agree": 42,
    "nonAgree": 1,
    "inOffice": 43,
    "index": 2.3,
    "billRoles": [],
    "billBonus": 0,
    "weightedIndex": 2.3,
    "paralyzing": false,
    "breakdown": {
      "disagree": 1,
      "invalid": 0,
      "notPickup": 0
    },
    "perCase": {
      "examination": {
        "同意": 9,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices1": {
        "同意": 6,
        "不同意": 1,
        "無效": 0,
        "未領票": 0
      },
      "ftc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "justices2": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "auditor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "ncc": {
        "同意": 4,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec1": {
        "同意": 7,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "prosecutor": {
        "同意": 1,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      },
      "cec2": {
        "同意": 3,
        "不同意": 0,
        "無效": 0,
        "未領票": 0
      }
    },
    "votes": {
      "examination": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "不同意"
      ],
      "ftc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "justices2": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "auditor": [
        "同意"
      ],
      "ncc": [
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "cec1": [
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意",
        "同意"
      ],
      "prosecutor": [
        "同意"
      ],
      "cec2": [
        "同意",
        "同意",
        "同意"
      ]
    }
  }
];
