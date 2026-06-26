// ==========================================================================
// 0. Language State & Static Translations
// ==========================================================================
let currentLang = localStorage.getItem('so_lang') || 'zh';

const staticTranslations = {
  zh: {
    header_title: "Summer Odyssey",
    header_subtitle: "美西大環線 6日自駕與美食探索規劃",
    stat_miles: "約 1,201 英哩",
    stat_hours: "累計行車 ~21 小時",
    sidebar_profile_title: "家庭成員與背景",
    sidebar_profile_size_label: "成員規模",
    sidebar_profile_size_val: "5 人家庭旅遊",
    sidebar_profile_parents_label: "父母背景",
    sidebar_profile_parents_val: "夫妻 50 歲 (台裔新移民，定居美國 ~20 年)",
    sidebar_profile_children_label: "孩子成員",
    sidebar_profile_children_val: "15 歲三胞胎 (二女一男)",
    sidebar_itinerary_title: "每日行程規劃",
    sidebar_booking_title: "訂單預訂進度",
    sidebar_budget_title: "預算花費估算",
    sidebar_budget_est: "預估總計:",
    sidebar_budget_act: "實付總計:",
    main_map_title: "當日行車路線地圖",
    main_map_nav_btn: "導航：Google Maps 完整路線",
    main_packing_title: "行前與裝備準備清單",
    tip_panel_title: "行程貼士 & 住宿建議",
    period_morning: "上午行程 (Morning)",
    period_afternoon: "下午行程 (Afternoon)",
    period_evening: "晚間行程 (Evening)",
    period_empty: "無行程安排",
    route_label: "路線：",
    stats_label: "統計：",
    nav_btn_text: "開啟 Google Maps 導航",
    packing_count_text: "已完成"
  },
  en: {
    header_title: "Summer Odyssey",
    header_subtitle: "Southwest Grand Circle 6-Day Self-Drive & Dining Guide",
    stat_miles: "~1,201 Miles",
    stat_hours: "~21 Hours Driving",
    sidebar_profile_title: "Family Profile",
    sidebar_profile_size_label: "Party Size",
    sidebar_profile_size_val: "5-Person Family Trip",
    sidebar_profile_parents_label: "Parents Profile",
    sidebar_profile_parents_val: "Couple ~50 yo (Taiwanese Immigrants, in US ~20 yrs)",
    sidebar_profile_children_label: "Children Profile",
    sidebar_profile_children_val: "15 yo Triplets (2 Girls, 1 Boy)",
    sidebar_itinerary_title: "Daily Itinerary",
    sidebar_booking_title: "Booking Progress",
    sidebar_budget_title: "Budget Tracker",
    sidebar_budget_est: "Total Estimate:",
    sidebar_budget_act: "Total Actual:",
    main_map_title: "Daily Driving Route Map",
    main_map_nav_btn: "Navigation: Google Maps Full Route",
    main_packing_title: "Pre-trip Packing Checklist",
    tip_panel_title: "Travel Tips & Lodging Suggestions",
    period_morning: "Morning Itinerary",
    period_afternoon: "Afternoon Itinerary",
    period_evening: "Evening Itinerary",
    period_empty: "No activities planned",
    route_label: "Route: ",
    stats_label: "Stats: ",
    nav_btn_text: "Open Google Maps",
    packing_count_text: "Completed"
  }
};

// ==========================================================================
// 1. Itinerary Data (Day 1 - Day 7)
// ==========================================================================
const itineraryData = [
  {
    "dayNumber": 1,
    "dayTitle": {
      "zh": "7月5日 (週日) | 洛杉磯 ➔ （中繼休息） ➔ 拉斯維加斯",
      "en": "July 5 (Sun) | Los Angeles ➔ (Midway Rest) ➔ Las Vegas"
    },
    "drivingRoute": {
      "zh": "Los Angeles (23944 Francisco Way) ➔ Las Vegas (ARIA Resort & Casino)",
      "en": "Los Angeles (23944 Francisco Way) ➔ Las Vegas (ARIA Resort & Casino)"
    },
    "drivingStats": {
      "zh": "總車程約 4 - 4.5 小時",
      "en": "Total drive time ~4 - 4.5 hours"
    },
    "googleMapsLink": "https://www.google.com/maps/dir/23944+Francisco+Way,+Valencia,+CA+91354/ARIA+Resort+%26+Casino",
    "googleMapsEmbedUrl": "https://maps.google.com/maps?saddr=23944+Francisco+Way,+Valencia,+CA+91354&daddr=ARIA+Resort+%26+Casino&output=embed",
    "itinerary": {
      "morning": [
        { 
          "time": "08:00 - 10:00", 
          "text": { "zh": "在洛杉磯吃完豐盛早餐後準備出發", "en": "Have a hearty breakfast in LA and prepare to depart" }, 
          "type": "dining", 
          "detail": { "zh": "吃飽儲備體力以利長途自駕。", "en": "Eat well to charge up for the long drive." } 
        },
        { 
          "time": "10:00 - 12:00", 
          "text": { "zh": "啟程前往拉斯維加斯", "en": "Set off for Las Vegas via Interstate 15" }, 
          "type": "drive", 
          "detail": { "zh": "行駛 15 號州際公路。因避開國慶日當天車潮，今日出發行車路況將會非常順暢。", "en": "Drive along I-15. Starting today avoids holiday traffic, promising smooth road conditions." } 
        }
      ],
      "afternoon": [
        { 
          "time": "12:00 - 13:00", 
          "text": { "zh": "於 Barstow 停留並享用 In-N-Out 漢堡", "en": "Stop at Barstow and enjoy In-N-Out burgers" }, 
          "type": "dining", 
          "detail": { "zh": "公路自駕經典中繼站。在 Barstow 享用必點的隱藏菜單 Double-Double Animal Style 搭配奶昔，並順便加油與休息。", "en": "A classic road trip stop. Enjoy the hidden menu Double-Double Animal Style with a milkshake, and gas up/stretch." } 
        },
        { 
          "time": "13:00 - 15:00", 
          "text": { "zh": "繼續上路前往拉斯維加斯", "en": "Continue driving to Las Vegas" }, 
          "type": "drive", 
          "detail": { "zh": "行駛剩餘車程，約 2 小時阻礙極小抵達拉斯維加斯。", "en": "Complete the remaining drive, about 2 hours with minimal traffic to Vegas." } 
        },
        { 
          "time": "15:00 - 16:00", 
          "text": { "zh": "抵達拉斯維加斯，前往 Costco 採買物資", "en": "Arrive in Las Vegas and shop for supplies at Costco" }, 
          "type": "rest", 
          "detail": { "zh": "抵達後前往當地 Costco 購買保冰桶與冰塊，為接下來的公路旅行備妥隨車冰箱，並採購瓶裝水與零食乾糧 [1, 2]。", "en": "Buy a cooler box and ice bags at Costco to serve as a mobile fridge for the trip, plus bottled water and snacks [1, 2]." } 
        },
        { 
          "time": "16:00 - 18:00", 
          "text": { "zh": "入住賭城大道正中心的 ARIA 渡假村並稍作休息", "en": "Check in at ARIA Resort & Casino on the Strip and rest" }, 
          "type": "hotel", 
          "detail": { "zh": "配合下午 4:00 左右辦理入住。放妥行李並稍微休息，避開大道的擁擠噪音，享受高科技奢華客房。", "en": "Check in around 4:00 PM. Drop luggage and unwind in the high-tech luxury room away from strip traffic." } 
        }
      ],
      "evening": [
        { 
          "time": "18:00 - 20:00", 
          "text": { "zh": "前往春山路 (Spring Mountain Road) 亞洲區享用晚餐", "en": "Dinner at Spring Mountain Road (Chinatown) for Asian cuisine" }, 
          "type": "dining", 
          "detail": { "zh": "推薦：春山路亞洲區的頂級泰國菜 Lotus of Siam、成都Taste，或越南牛肉粉與大排檔美食 [1, 2]。", "en": "Recommended: Lotus of Siam (legendary Northern Thai), Taste (Sichuan), or popular local Vietnamese places [1, 2]." } 
        },
        { 
          "time": "20:00 - 21:30", 
          "text": { "zh": "漫步 Strip 大道，觀賞 Bellagio 音樂噴泉", "en": "Stroll along the Strip, watch Bellagio Fountains & Conservatory" }, 
          "type": "sight", 
          "detail": { "zh": "從 Aria 步行至 Bellagio 極近。可散步觀賞世界知名的水舞噴泉與室內溫室花園，享受賭城繁華夜景 [5]。", "en": "An easy walk from Aria to Bellagio. View the famous fountain show and the seasonal conservatory flower display [5]." } 
        }
      ]
    },
    "tips": {
      "zh": "週日是南加往拉斯維加斯方向路況最好的時間，今日自駕路況預期極佳。入住 Aria 後步行即可抵達大道精華區。",
      "en": "Sunday morning is the best window for driving from SoCal to Vegas (as weekend visitors head back west). Aria is perfectly central; you can walk to many strip landmarks directly."
    }
  },
  {
    "dayNumber": 2,
    "dayTitle": {
      "zh": "7月6日 (週一) | 拉斯維加斯全日自由行（續住 Aria 不退房）",
      "en": "July 6 (Mon) | Las Vegas Full Day (Stay at ARIA)"
    },
    "drivingRoute": {
      "zh": "ARIA Resort & Casino ➔ 大道周邊景點 ➔ ARIA Resort & Casino",
      "en": "ARIA Resort & Casino ➔ Strip Attractions ➔ ARIA Resort & Casino"
    },
    "drivingStats": {
      "zh": "無需長途自駕，大道活動為主",
      "en": "No long drive, activities mainly around the Strip"
    },
    "googleMapsLink": "https://www.google.com/maps/dir/ARIA+Resort+%26+Casino/AREA15/ARIA+Resort+%26+Casino",
    "googleMapsEmbedUrl": "https://maps.google.com/maps?saddr=ARIA+Resort+%26+Casino&daddr=AREA15+to:ARIA+Resort+%26+Casino&output=embed",
    "itinerary": {
      "morning": [
        { 
          "time": "09:00 - 10:30", 
          "text": { "zh": "悠閒享用早餐或精緻早茶", "en": "Have a leisurely breakfast or brunch" }, 
          "type": "dining", 
          "detail": { "zh": "在 Aria 內或大道旁挑選喜愛的特色早餐，放慢步調享受度假氛圍。", "en": "Pick a cozy cafe in Aria or along the Strip to enjoy a relaxed vacation morning." } 
        },
        { 
          "time": "10:30 - 12:00", 
          "text": { "zh": "體驗 FlyOver Las Vegas 飛行影院", "en": "Experience FlyOver Las Vegas flying theater" }, 
          "type": "sight", 
          "detail": { "zh": "前往 Aria 對面的 Showcase Mall 體驗 FlyOver 4D 飛行影院，選擇《美西奇觀》影片，以懸空視角飛越接下來將去到的錫安與大峽谷，作為最佳公路旅行行前預告 [4]！", "en": "Walk across the street to Showcase Mall. FlyOver uses suspended motion seats and 4D effects. Choose 'Wonders of the American West' as a preview of Zion and Grand Canyon [4]!" } 
        }
      ],
      "afternoon": [
        { 
          "time": "12:00 - 13:30", 
          "text": { "zh": "享用凱薩皇宮 Bacchanal Buffet 豪華自助午餐", "en": "Lunch at Bacchanal Buffet in Caesars Palace" }, 
          "type": "dining", 
          "detail": { "zh": "拉斯維加斯排行第一的自助餐，多達 500 種跨國界精緻料理與海鮮。建議提早預訂早午餐時段 [1, 2]。", "en": "Ranked #1 buffet in Vegas, featuring 500+ items and fresh seafood. Booking in advance is highly recommended [1, 2]." } 
        },
        { 
          "time": "13:30 - 16:30", 
          "text": { "zh": "前往 AREA15 探索 Omega Mart 奇幻超市", "en": "Head to AREA15 to explore Omega Mart" }, 
          "type": "sight", 
          "detail": { "zh": "開車約 10 分鐘前往 AREA15。探索由藝術團體 Meow Wolf 打造的超現實奇幻超市，拉開冰箱門走入秘密通道與奇幻空間，極受 15 歲青少年喜愛 [5]！", "en": "Drive 10 mins to AREA15. Meow Wolf's Omega Mart is a massive interactive art puzzle disguised as a grocery store. Teens will love searching for hidden passages [5]!" } 
        },
        { 
          "time": "16:30 - 17:30", 
          "text": { "zh": "返回 Aria 飯店稍作休息與梳洗", "en": "Return to ARIA to rest and freshen up" }, 
          "type": "rest" 
        }
      ],
      "evening": [
        { 
          "time": "18:00 - 19:30", 
          "text": { "zh": "在 Gordon Ramsay Hell's Kitchen 享用晚餐", "en": "Dinner at Gordon Ramsay's Hell's Kitchen" }, 
          "type": "dining", 
          "detail": { "zh": "「地獄廚房」實體餐廳。必點招牌威靈頓牛排、煎干貝與太妃糖布丁。**極度熱門，必須提早 1-2 個月訂位。**", "en": "Enjoy the signature Beef Wellington, seared scallops, and sticky toffee pudding. **Extremely popular; must book 1-2 months in advance.**" } 
        },
        { 
          "time": "20:00 - 22:00", 
          "text": { "zh": "前往金銀島酒店 (Treasure Island) 觀賞太陽馬戲團 Mystère 秀", "en": "Watch Cirque du Soleil's Mystère at Treasure Island" }, 
          "type": "show", 
          "detail": { "zh": "週一場次票價更親民。今日無長途行車疲累，能以最充沛的體力觀賞這場充滿高空特技、色彩繽紛與美式幽默的經典大秀 [3, 4]。", "en": "Monday tickets are cheaper. Without the fatigue of long drives, enjoy this vibrant, acrobatic classic show with high-energy humor [3, 4]." } 
        }
      ]
    },
    "tips": {
      "zh": "今日全程於賭城大道活動，建議穿著舒適步行鞋。Aria 門口即有輕軌電車或計程車，至各大景點非常方便。",
      "en": "Today is completely walking and Strip-based. Wear comfortable walking shoes. Aria has great connectivity via free trams, taxis, or rideshares."
    }
  },
  {
    "dayNumber": 3,
    "dayTitle": {
      "zh": "7月7日 (週二) | 拉斯維加斯 ➔ 09:00 退房 ➔ 錫安國家公園健行 ➔ Springdale",
      "en": "July 7 (Tue) | Las Vegas ➔ Checkout at 09:00 ➔ Zion Hiking ➔ Springdale"
    },
    "drivingRoute": {
      "zh": "ARIA Resort & Casino ➔ Zion SpringHill Suites",
      "en": "ARIA Resort & Casino ➔ Zion SpringHill Suites"
    },
    "drivingStats": {
      "zh": "車程估計約 2.5 小時 (時差損失 1 小時)",
      "en": "Drive time ~2.5 hours (lose 1 hour timezone difference)"
    },
    "googleMapsLink": "https://www.google.com/maps/dir/ARIA+Resort+%26+Casino/SpringHill+Suites+by+Marriott+Springdale+Zion+National+Park",
    "googleMapsEmbedUrl": "https://maps.google.com/maps?saddr=ARIA+Resort+%26+Casino&daddr=SpringHill+Suites+by+Marriott+Springdale+Zion+National+Park&output=embed",
    "itinerary": {
      "morning": [
        { 
          "time": "08:30 - 10:00", 
          "text": { "zh": "悠閒起床並享用飯店早餐", "en": "Wake up leisurely and have breakfast" }, 
          "type": "dining" 
        },
        { 
          "time": "10:00 - 11:00", 
          "text": { "zh": "整理行李，辦理退房準備出發", "en": "Pack luggage, check out and prepare to depart" }, 
          "type": "hotel", 
          "detail": { "zh": "辦理 Aria 退房，驅車前往猶他州錫安國家公園 [3]。", "en": "Check out from ARIA, pack your car and set out to Zion National Park, Utah [3]." } 
        },
        { 
          "time": "11:00 - 13:30", 
          "text": { "zh": "驅車直奔錫安國家公園 (Springdale)", "en": "Drive straight to Springdale (Zion National Park)" }, 
          "type": "drive", 
          "detail": { "zh": "行駛約 2.5 小時。注意時差：猶他州比內華達州快一小時，抵達時為當地時間下午 14:30 [3]。", "en": "Drive through NV/AZ into Utah (~2.5 hrs). Note the time zone change: Utah is 1 hour ahead, so you will arrive at 14:30 local time [3]." } 
        }
      ],
      "afternoon": [
        { 
          "time": "14:30 - 15:30", 
          "text": { "zh": "抵達 Springdale 享用遲午餐", "en": "Arrive in Springdale and enjoy a late lunch" }, 
          "type": "dining", 
          "detail": { "zh": "推薦：Oscar's Cafe，享用大份量美式或墨西哥融合料理 [3, 4]。", "en": "Recommended: Oscar's Cafe, famous for large portions of Tex-Mex, burgers, and salads [3, 4]." } 
        },
        { 
          "time": "15:30 - 18:30", 
          "text": { "zh": "租借電動自行車入園，挑戰水上徒步路線 The Narrows", "en": "Rent E-Bikes and hike the iconic water trail The Narrows" }, 
          "type": "sight", 
          "detail": { "zh": "租借 E-Bike 探索錫安國家公園。E-Bike 能跳過接駁巴士的排隊人龍，直奔 The Narrows 挑戰涉水徒步 [3, 4]。", "en": "Renting E-Bikes allows you to bypass shuttle lines entirely and head straight to The Narrows for wading hiking [3, 4]." } 
        }
      ],
      "evening": [
        { 
          "time": "18:30 - 19:30", 
          "text": { "zh": "入住鄰近公園的 SpringHill Suites 飯店並放鬆休息", "en": "Check in at SpringHill Suites near the park entrance and rest" }, 
          "type": "hotel", 
          "detail": { "zh": "辦理入住，放妥行李並稍微休息，享受大自然的紅岩群山環抱景緻 [3, 4]。", "en": "Check in and relax. Enjoy the pool and the stunning backdrop of red cliffs [3, 4]." } 
        },
        { 
          "time": "19:30 - 21:00", 
          "text": { "zh": "享用美味晚餐", "en": "Enjoy a delicious dinner" }, 
          "type": "dining", 
          "detail": { "zh": "推薦：Bit & Spur Restaurant 享用美西南料理或當地精緻餐酒 [3, 4]。", "en": "Recommended: Bit & Spur Restaurant for Southwestern dining and creative dishes [3, 4]." } 
        }
      ]
    },
    "tips": {
      "zh": "時差提醒：進入猶他州時手錶會變快 1 小時！下午挑戰 The Narrows 涉水，水溫可能較涼，建議租借涉水防滑鞋。今天只住一晚，請在退房前整理好大行李。",
      "en": "Time Zone Warning: Entering Utah shifts time forward by 1 hour! Hikers in The Narrows should rent wading boots/socks for safety. This is a 1-night stay, so keep your luggage packed."
    }
  },
  {
    "dayNumber": 4,
    "dayTitle": {
      "zh": "7月8日 (週三) | Springdale ➔ 08:30 退房 ➔ 卡納布 UTV 越野 ➔ 佩吉 (Page)",
      "en": "July 8 (Wed) | Springdale ➔ Checkout at 08:30 ➔ Kanab UTV ➔ Page"
    },
    "drivingRoute": {
      "zh": "SpringHill Suites ➔ Belly of the Dragon ➔ Kanab (UTV) ➔ Page Hyatt Place",
      "en": "SpringHill Suites ➔ Belly of the Dragon ➔ Kanab (UTV) ➔ Page Hyatt Place"
    },
    "drivingStats": {
      "zh": "車程約 2.5 小時 (跨州獲得 1 小時時差紅利)",
      "en": "Drive time ~2.5 hours (gain 1 hour timezone difference)"
    },
    "googleMapsLink": "https://www.google.com/maps/dir/SpringHill+Suites+by+Marriott+Springdale+Zion+National+Park/Belly+of+the+Dragon/Kanab/Hyatt+Place+Page+Lake+Powell",
    "googleMapsEmbedUrl": "https://maps.google.com/maps?saddr=SpringHill+Suites+by+Marriott+Springdale+Zion+National+Park&daddr=Belly+of+the+Dragon+to:Kanab+to:Hyatt+Place+Page+Lake+Powell&output=embed",
    "itinerary": {
      "morning": [
        { 
          "time": "07:30 - 08:30", 
          "text": { "zh": "享用飯店早餐，補充足夠體力", "en": "Breakfast at the hotel to recharge" }, 
          "type": "dining" 
        },
        { 
          "time": "08:30 - 09:00", 
          "text": { "zh": "整理行李，辦理退房並將行李裝車", "en": "Pack luggage, check out and pack the car" }, 
          "type": "hotel" 
        },
        { 
          "time": "09:00 - 10:00", 
          "text": { "zh": "經 9 號景觀公路前往肯鎮 (Kanab)", "en": "Drive via Scenic Route 9 to Kanab" }, 
          "type": "drive", 
          "detail": { "zh": "途經紅石巨岩隧道與棋盤台地，景色如畫。", "en": "Pass through the Mt. Carmel tunnel and Checkerboard Mesa, stunning scenery." } 
        },
        { 
          "time": "10:00 - 11:30", 
          "text": { "zh": "途中停留奇特景點「龍之腹」並拍照打卡", "en": "Explore Belly of the Dragon cave tunnel" }, 
          "type": "sight", 
          "detail": { "zh": "Belly of the Dragon 是位於 89 號公路旁的天然岩石隧道，步行只需 10 分鐘，非常適合拍照 [5]。", "en": "A unique rock tunnel right off Hwy 89. A short 10-minute walk, great for quick photos [5]." } 
        }
      ],
      "afternoon": [
        { 
          "time": "11:30 - 13:00", 
          "text": { "zh": "抵達肯鎮享用特色午餐", "en": "Arrive in Kanab and have lunch" }, 
          "type": "dining", 
          "detail": { "zh": "推薦：Wild Thyme Bistro 有機料理或 Sego 創意輕食 [5]。", "en": "Recommended: Wild Thyme Bistro for organic eats or Sego for New American tapas [5]." } 
        },
        { 
          "time": "13:00 - 15:00", 
          "text": { "zh": "參加 UTV 荒漠越野行程，探索 Peek-a-boo 峽谷", "en": "Join UTV off-road tour to Peek-a-boo canyon" }, 
          "type": "sight", 
          "detail": { "zh": "預訂 5/6 人座 UTV，穿越沙丘探訪 Peek-a-boo 秘境與 Great Chamber 紅岩沙穴，刺激度滿分，青少年最愛 [5]！", "en": "Charter a UTV off-road tour to Peek-a-boo slot canyon and the Great Chamber. A thrilling desert ride teens will love [5]!" } 
        },
        { 
          "time": "15:00 - 16:30", 
          "text": { "zh": "結束越野行程，開車前往佩吉市 (Page)", "en": "Finish UTV and drive to Page" }, 
          "type": "drive", 
          "detail": { "zh": "車程約 1.5 小時。進入亞利桑那州慢一小時，抵達 Page 時為當地時間下午 15:30 [5]。", "en": "About 1.5 hours of drive. Crossing into Arizona shifts time back by 1 hour, making arrival 15:30 Page time [5]." } 
        }
      ],
      "evening": [
        { 
          "time": "15:30 - 16:30", 
          "text": { "zh": "抵達佩奇並入住 Hyatt Place 飯店稍微休息", "en": "Arrive in Page and check in at Hyatt Place to rest" }, 
          "type": "hotel", 
          "detail": { "zh": "放妥行李洗把臉，整理裝備準備前往 Lake Powell 碼頭 [5]。", "en": "Drop luggage, freshen up, and prepare to head to the Lake Powell marina [5]." } 
        },
        { 
          "time": "17:00 - 19:30", 
          "text": { "zh": "預約 Lake Powell 包船/遊船，欣賞絕美湖畔日落", "en": "Private boat charter on Lake Powell for sunset view" }, 
          "type": "sight", 
          "detail": { "zh": "傍晚在鮑威爾湖包船，避開高溫氣溫舒適，欣賞金黃日落與水上峽谷絕景 [5]。", "en": "Chartering a private boat at sunset is a highlight. Enjoy the cool evening breeze and golden canyon reflections [5]." } 
        },
        { 
          "time": "19:30 - 21:00", 
          "text": { "zh": "在 Big John's Texas BBQ 享用煙燻燒烤晚餐", "en": "Dinner at Big John's Texas BBQ" }, 
          "type": "dining", 
          "detail": { "zh": "戶外德州煙燻燒烤，牛胸肉軟嫩，有現場鄉村樂隊，氛圍極佳 [5]。", "en": "Enjoy outdoor Texas smoked brisket with a live country band and great atmosphere [5]." } 
        }
      ]
    },
    "tips": {
      "zh": "時差提醒：進入亞利桑那州時手錶會慢 1 小時。UTV 越野行程風沙大，請攜帶墨鏡與防風面罩。Page 也是只住一晚，行李不用全部拿下來。",
      "en": "Time Zone Warning: Entering Arizona shifts time back by 1 hour. UTV tours can be dusty, sunglasses and bandanas are recommended. Only 1 night in Page, keep unpacking to a minimum."
    }
  },
  {
    "dayNumber": 5,
    "dayTitle": {
      "zh": "7月9日 (週四) | 佩吉 ➔ 羚羊谷 & 馬蹄灣 ➔ 大峽谷 ➔ 金曼 (Kingman)",
      "en": "July 9 (Thu) | Page ➔ Antelope Canyon & Horseshoe Bend ➔ Grand Canyon ➔ Kingman"
    },
    "drivingRoute": {
      "zh": "Page Hyatt Place ➔ Antelope Canyon ➔ Horseshoe Bend ➔ Grand Canyon ➔ Kingman",
      "en": "Page Hyatt Place ➔ Antelope Canyon ➔ Horseshoe Bend ➔ Grand Canyon ➔ Kingman"
    },
    "drivingStats": {
      "zh": "自駕行程約 5 小時 (今日最長路程，請輪流駕駛)",
      "en": "Drive time ~5 hours (longest driving day, please rotate drivers)"
    },
    "googleMapsLink": "https://www.google.com/maps/dir/Hyatt+Place+Page+Lake+Powell/Antelope+Canyon/Horseshoe+Bend/Grand+Canyon+National+Park/Kingman",
    "googleMapsEmbedUrl": "https://maps.google.com/maps?saddr=Hyatt+Place+Page+Lake+Powell&daddr=Antelope+Canyon+to:Horseshoe+Bend+to:Grand+Canyon+National+Park+to:Kingman&output=embed",
    "itinerary": {
      "morning": [
        { 
          "time": "07:30 - 08:30", 
          "text": { "zh": "在飯店享用早餐", "en": "Have breakfast at the hotel" }, 
          "type": "dining" 
        },
        { 
          "time": "08:30 - 09:00", 
          "text": { "zh": "整理行李，辦理退房並將行李裝車", "en": "Pack luggage, check out and set off" }, 
          "type": "hotel" 
        },
        { 
          "time": "09:00 - 11:00", 
          "text": { "zh": "預約參觀 Antelope Canyon 羚羊峽谷導覽", "en": "Booked tour of Antelope Canyon" }, 
          "type": "sight", 
          "detail": { "zh": "探訪世界著名的狹縫型峽谷，欣賞陽光直射入谷中的奇幻光影束 [5]。", "en": "Explore the world-famous slot canyon and view the magical sunbeams entering the canyon [5]." } 
        },
        { 
          "time": "11:00 - 12:30", 
          "text": { "zh": "前往 Horseshoe Bend 馬蹄灣，賞壯麗景緻", "en": "Visit Horseshoe Bend" }, 
          "type": "sight", 
          "detail": { "zh": "觀賞科羅拉多河 270 度大迴轉的震撼奇景 [5]。", "en": "View the Colorado River's spectacular 270-degree bend from the rim [5]." } 
        }
      ],
      "afternoon": [
        { 
          "time": "12:30 - 14:30", 
          "text": { "zh": "在 Page 快速午餐，驅車前往大峽谷國家公園", "en": "Quick lunch in Page and drive to Grand Canyon National Park" }, 
          "type": "drive",
          "detail": { "zh": "車程約 2 小時。沿途風光秀麗，朝大峽谷南緣前進。", "en": "About 2 hours drive. Head towards the South Rim of the Grand Canyon." }
        },
        { 
          "time": "14:30 - 16:30", 
          "text": { "zh": "參觀大峽谷馬瑟角與主要觀景點", "en": "Visit Grand Canyon Mather Point & viewpoints" }, 
          "type": "sight", 
          "detail": { "zh": "在大峽谷國家公園內自由散步，觀賞氣勢磅礴的峽谷斷崖與大自然鬼斧神工 [106, 107]。", "en": "Stroll along the rim trail, take photos at Mather Point and enjoy the breathtaking geological wonder [106, 107]." } 
        },
        { 
          "time": "16:30 - 19:00", 
          "text": { "zh": "沿著歷史 66 號公路驅車前往金曼 (Kingman)", "en": "Drive via Historic Route 66 to Kingman" }, 
          "type": "drive", 
          "detail": { "zh": "車程約 2.5 小時。路途平直，沿途盡享美西荒野與復古小鎮風情 [103]。", "en": "About 2.5 hours of driving. Cruise through historic towns and wide open flats [103]." } 
        }
      ],
      "evening": [
        { 
          "time": "19:00 - 19:30", 
          "text": { "zh": "抵達金曼並入住 66 號公路主題旅館", "en": "Check in at Route 66 Motel in Kingman" }, 
          "type": "hotel", 
          "detail": { "zh": "辦理入住，體驗經典美式 Motel 霓虹燈與復古文化 [102, 103]。", "en": "Check in and experience the retro neon diner vibe of Route 66 [102, 103]." } 
        },
        { 
          "time": "19:30 - 21:00", 
          "text": { "zh": "享用經典美式公路晚餐", "en": "Dinner at Retro 1950s Diner" }, 
          "type": "dining", 
          "detail": { "zh": "推薦：前往 Retro 1950s Diner，享用大漢堡、薯條與招牌濃郁奶昔 [109, 110]。", "en": "Recommended: local diners for burgers, fries, and thick shakes next to a vintage jukebox [109, 110]." } 
        }
      ]
    },
    "tips": {
      "zh": "今日行程較長，大約有 5 小時的行車路程。請在大峽谷或 Page 隨時補滿油箱。抵達 Kingman 後可以體驗經典的 66 號公路霓虹燈旅館。",
      "en": "This is the longest driving day with ~5 hours total. Fill up the gas tank in Page or Grand Canyon. Enjoy the vintage neon retro vibes in Kingman tonight."
    }
  },
  {
    "dayNumber": 6,
    "dayTitle": {
      "zh": "7月10日 (週五) | 金曼 ➔ 11:00 退房 ➔ 莫哈維沙漠中繼 ➔ 洛杉磯住家",
      "en": "July 10 (Fri) | Kingman ➔ Checkout by 11:00 ➔ Mojave Rest ➔ Home"
    },
    "drivingRoute": {
      "zh": "Kingman ➔ Los Angeles (23944 Francisco Way)",
      "en": "Kingman ➔ Los Angeles (23944 Francisco Way)"
    },
    "drivingStats": {
      "zh": "總車程約 4.5 - 5 小時",
      "en": "Total drive time ~4.5 - 5 hours"
    },
    "googleMapsLink": "https://www.google.com/maps/dir/Kingman/23944+Francisco+Way,+Valencia,+CA+91354",
    "googleMapsEmbedUrl": "https://maps.google.com/maps?saddr=Kingman&daddr=23944+Francisco+Way,+Valencia,+CA+91354&output=embed",
    "itinerary": {
      "morning": [
        { 
          "time": "08:00 - 10:00", 
          "text": { "zh": "悠閒起床，享用美式早午餐與參觀火車博物館", "en": "Wake up late, enjoy brunch and visit the locomotive museum" }, 
          "type": "dining",
          "detail": { "zh": "可以在金曼歷史街區漫步，與經典 Route 66 霓虹標誌合影 [110]。", "en": "Stroll in downtown Kingman and snap photos with the vintage road signs [110]." }
        },
        { 
          "time": "10:00 - 11:00", 
          "text": { "zh": "整理行李，辦理退房準備出發", "en": "Pack luggage, check out and prepare to depart" }, 
          "type": "hotel" 
        }
      ],
      "afternoon": [
        { 
          "time": "11:00 - 13:30", 
          "text": { "zh": "踏上返回洛杉磯的自駕返程", "en": "Start the drive back to Los Angeles" }, 
          "type": "drive", 
          "detail": { "zh": "行經莫哈維沙漠 (Mojave Desert)，穿過加州邊界。", "en": "Drive through Mojave Desert and cross the California border." } 
        },
        { 
          "time": "13:30 - 14:30", 
          "text": { "zh": "於 Barstow 停留休息並享用 In-N-Out 漢堡", "en": "Rest and lunch at Barstow In-N-Out" }, 
          "type": "dining", 
          "detail": { "zh": "公路自駕經典中繼站，吃漢堡加油並稍作休息，確保行車安全。", "en": "Classic road trip pitstop. Fuel up the car, grab burgers, and stretch legs for safety." } 
        },
        { 
          "time": "14:30 - 17:00", 
          "text": { "zh": "完成最後路段，順利返回洛杉磯住家", "en": "Complete the drive back to Los Angeles" }, 
          "type": "drive" 
        }
      ],
      "evening": [
        { 
          "time": "17:00", 
          "text": { "zh": "返抵洛杉磯 Valencia 住家，結束豐富充實的六日旅行", "en": "Arrive home in Valencia, ending the 6-day trip" }, 
          "type": "home" 
        }
      ]
    },
    "tips": {
      "zh": "週五下午南加進入市區路段可能會塞車，請預留充裕時間。莫哈維沙漠路段可能高溫，注意輪胎胎壓與水箱水溫。",
      "en": "Traffic heading into SoCal on Friday afternoon can build up, plan accordingly. Ensure tire pressure and engine coolant are in check for the hot desert stretches."
    }
  }
];


// ==========================================================================
// 2. Booking Tracker Configuration
// ==========================================================================
const bookingItems = [
  { id: 'costco_supplies', label: { "zh": "Costco 行前採購 (保冰桶、飲料、冰塊)", "en": "Costco Supplies (cooler, drinks, ice)" }, estimate: 120 },
  { id: 'las_vegas_hotel', label: { "zh": "Las Vegas 酒店預訂 (Aria 2晚 / 雙人房x2)", "en": "Las Vegas Hotel Booking (Aria 2 nights / 2 rooms)" }, estimate: 900 },
  { id: 'hells_kitchen', label: { "zh": "地獄廚房 Hell's Kitchen 晚餐預約 (5人)", "en": "Hell's Kitchen Dinner Reservation (5 people)" }, estimate: 450 },
  { id: 'bacchanal_buffet', label: { "zh": "Caesars Bacchanal Buffet 預約 (5人)", "en": "Caesars Bacchanal Buffet Reservation (5 people)" }, estimate: 500 },
  { id: 'mystere_tickets', label: { "zh": "太陽馬戲團 Mystère 門票預訂 (5人)", "en": "Cirque du Soleil Mystère Tickets (5 tickets)" }, estimate: 400 },
  { id: 'zion_ebike', label: { "zh": "Zion 鋪路自行車租借預約 (5台 E-Bike)", "en": "Zion National Park E-Bike Rentals (5 bikes)" }, estimate: 400 },
  { id: 'springdale_hotel', label: { "zh": "Springdale 溫泉酒店預訂 (1晚 / 雙人房x2)", "en": "Springdale Hotel Booking (1 night / 2 rooms)" }, estimate: 450 },
  { id: 'kanab_utv', label: { "zh": "Kanab UTV 荒漠越野行程預訂 (5人/6人座車)", "en": "Kanab UTV Off-road Tour Booking (5/6-seater)" }, estimate: 550 },
  { id: 'lake_powell_boat', label: { "zh": "Page 鮑威爾湖包船/遊船預訂 (5人)", "en": "Page Lake Powell Boat Charter Booking (5 people)" }, estimate: 450 },
  { id: 'page_hotel', label: { "zh": "Page 酒店預訂 (1晚 / 雙人房x2)", "en": "Page Hotel Booking (1 night / 2 rooms)" }, estimate: 360 },
  { id: 'national_park_pass', label: { "zh": "美西國家公園年票實體卡 (1張即可)", "en": "National Parks Annual Pass (1 physical card)" }, estimate: 80 },
  { id: 'route66_hotel', label: { "zh": "Route 66 歷史小鎮酒店預訂 (1晚 / 雙人房x2)", "en": "Route 66 Motel Booking (1 night / 2 rooms)" }, estimate: 240 }
];

// ==========================================================================
// 3. Packing Checklist Configuration
// ==========================================================================
const packingData = {
  hiking: {
    title: { "zh": "涉水與徒步健行", "en": "Wading & Hiking" },
    icon: "fa-person-hiking",
    items: [
      { "zh": "涉水水鞋 / 溯溪鞋", "en": "Wading boots / Water shoes" },
      { "zh": "氯丁橡膠防沙襪 (Neo Socks)", "en": "Neoprene sand-proof socks" },
      { "zh": "登山杖 / 溪流防滑木棍", "en": "Hiking poles / Wading stick" },
      { "zh": "大容量雙肩水袋包 (Hydration Pack)", "en": "Large hydration pack / Backpack" },
      { "zh": "手機雙重防水袋", "en": "Waterproof phone pouch" }
    ]
  },
  sunProtection: {
    title: { "zh": "防曬與氣候防護", "en": "Sun & Weather Protection" },
    icon: "fa-sun",
    items: [
      { "zh": "SPF 50+ 防曬乳 & 防曬護唇膏", "en": "SPF 50+ Sunscreen & Lip balm" },
      { "zh": "運動型偏光太陽眼鏡", "en": "Polarized sports sunglasses" },
      { "zh": "遮陽帽 (寬邊帽或棒球帽)", "en": "Sun hat / baseball cap" },
      { "zh": "排汗速乾短袖/短褲", "en": "Moisture-wicking activewear" },
      { "zh": "輕薄長袖防曬外套", "en": "Lightweight sun-protection jacket" },
      { "zh": "保暖衛衣/防風衣 (沙漠早晚溫差大)", "en": "Warm hoodie / windbreaker (cold desert nights)" }
    ]
  },
  electronics: {
    title: { "zh": "車載與電子裝備", "en": "Car & Electronic Gear" },
    icon: "fa-car-side",
    items: [
      { "zh": "強磁性車載手機架 (導航必備)", "en": "Magnetic car phone mount (for navigation)" },
      { "zh": "車載點煙器轉換器 & 充電線", "en": "Car charger adapter & USB cables" },
      { "zh": "大容量防水行動電源", "en": "High-capacity power bank" },
      { "zh": "離線地圖下載 (Google Maps / AllTrails)", "en": "Offline maps download (Google Maps / AllTrails)" },
      { "zh": "相機 / GoPro 運動相機", "en": "Camera / GoPro sports camera" }
    ]
  },
  daily: {
    title: { "zh": "日常證件與備品", "en": "Daily Essentials & IDs" },
    icon: "fa-id-card",
    items: [
      { "zh": "國家公園年票實體卡", "en": "National Parks Annual Pass" },
      { "zh": "美國駕照 (自駕證件)", "en": "US Driver's License" },
      { "zh": "雙重備用信用卡", "en": "Backup credit cards" },
      { "zh": "Costco 會員卡", "en": "Costco membership card" },
      { "zh": "車載大包濕紙巾 & 乾洗手", "en": "Car wet wipes & hand sanitizer" }
    ]
  }
};

// ==========================================================================
// 5. State Variables
// ==========================================================================
let activeDay = 1;
let bookingStatus = {};
let bookingCosts = {};
let packingStatus = {};

// ==========================================================================
// 6. Initialization & Storage Load
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadFromLocalStorage();
  
  // Set up Bilingual Toggle Button
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'zh' ? 'en' : 'zh';
      localStorage.setItem('so_lang', currentLang);
      
      const toggleText = document.getElementById('langToggleText');
      if (toggleText) {
        toggleText.innerText = currentLang === 'zh' ? 'English' : '中文';
      }
      
      updateLanguageUI();
    });
    
    // Set initial toggle button text
    const toggleText = document.getElementById('langToggleText');
    if (toggleText) {
      toggleText.innerText = currentLang === 'zh' ? 'English' : '中文';
    }
  }

  updateLanguageUI();
});

function loadFromLocalStorage() {
  const savedBooking = localStorage.getItem('so_booking_status');
  if (savedBooking) {
    bookingStatus = JSON.parse(savedBooking);
  } else {
    bookingItems.forEach(item => { bookingStatus[item.id] = false; });
  }

  const savedCosts = localStorage.getItem('so_booking_costs');
  if (savedCosts) {
    bookingCosts = JSON.parse(savedCosts);
  } else {
    bookingItems.forEach(item => { bookingCosts[item.id] = ''; });
  }

  const savedPacking = localStorage.getItem('so_packing_status');
  if (savedPacking) {
    packingStatus = JSON.parse(savedPacking);
  } else {
    Object.keys(packingData).forEach(cat => {
      packingData[cat].items.forEach(item => {
        packingStatus[item.zh] = false; // key by zh initially
      });
    });
  }
}

function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// ==========================================================================
// 6.5 Language UI Translation Updater
// ==========================================================================
function updateLanguageUI() {
  // Update static text elements in HTML
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (staticTranslations[currentLang] && staticTranslations[currentLang][key]) {
      el.innerHTML = staticTranslations[currentLang][key];
    }
  });

  // Re-render all list elements using the current language
  renderDayTabs();
  renderDayDetails(activeDay);
  renderBookingChecklist();
  renderPackingList();
  updateExplorerMap();
}

// ==========================================================================
// 7. Day Tabs Rendering & Switching
// ==========================================================================
function renderDayTabs() {
  const container = document.getElementById('dayTabsContainer');
  if (!container) return;
  container.innerHTML = '';

  itineraryData.forEach(day => {
    const btn = document.createElement('button');
    btn.className = `day-tab-btn ${day.dayNumber === activeDay ? 'active' : ''}`;
    btn.id = `tab-day-${day.dayNumber}`;
    
    const titleText = day.dayTitle[currentLang];
    let shortTitle = titleText;
    if (titleText.includes(' | ')) {
      const parts = titleText.split(' | ');
      shortTitle = parts[0] + ' | ' + parts[parts.length - 1].split(' ➔ ').slice(-1)[0].replace(/（.*）|\(.*\)/g, '').trim();
    } else if (titleText.includes(' ➔ ')) {
      const parts = titleText.split(' ➔ ');
      const start = parts[0].replace(/（.*）|\(.*\)/g, '').trim();
      let end = parts[parts.length - 1].replace(/（.*）|\(.*\)/g, '').trim();
      shortTitle = `${start} ➔ ${end}`;
    } else {
      shortTitle = titleText.replace(/（.*）|\(.*\)/g, '').trim();
    }

    btn.innerHTML = `
      <div class="day-tab-info">
        <span class="day-tab-num">DAY 0${day.dayNumber}</span>
        <span class="day-tab-title">${shortTitle}</span>
      </div>
      <span class="day-tab-meta"><i class="fa-solid fa-chevron-right"></i></span>
    `;

    btn.addEventListener('click', () => {
      document.querySelector('.day-tab-btn.active')?.classList.remove('active');
      btn.classList.add('active');
      
      activeDay = day.dayNumber;
      renderDayDetails(activeDay);
      updateExplorerMap();
    });

    container.appendChild(btn);
  });
}

function renderDayDetails(dayNum) {
  const day = itineraryData.find(d => d.dayNumber === dayNum);
  const container = document.getElementById('dayDetailCard');
  if (!day || !container) return;

  // Helper function to render a list of timeline items
  const renderPeriodItems = (items) => {
    if (!items || items.length === 0) {
      return `<p class="period-empty">${staticTranslations[currentLang].period_empty}</p>`;
    }
    return `
      <ul class="timeline-list">
        ${items.map(item => {
          let iconClass = 'fa-calendar-day';
          if (item.type === 'dining') iconClass = 'fa-utensils';
          else if (item.type === 'drive') iconClass = 'fa-car-side';
          else if (item.type === 'sight') iconClass = 'fa-mountain-sun';
          else if (item.type === 'hotel') iconClass = 'fa-key';
          else if (item.type === 'rest') iconClass = 'fa-couch';
          else if (item.type === 'show') iconClass = 'fa-masks-theater';
          else if (item.type === 'home') iconClass = 'fa-house';

          return `
            <li class="timeline-item ${item.type || ''}">
              <div class="timeline-icon-col">
                <div class="timeline-icon"><i class="fa-solid ${iconClass}"></i></div>
              </div>
              <div class="timeline-content-col">
                <span class="timeline-time">${item.time}</span>
                <span class="timeline-desc">${item.text[currentLang]}</span>
                ${item.detail ? `<div class="timeline-detail">${item.detail[currentLang]}</div>` : ''}
              </div>
            </li>
          `;
        }).join('')}
      </ul>
    `;
  };

  container.innerHTML = `
    <div class="detail-header">
      <span class="detail-day-num">DAY 0${day.dayNumber}</span>
      <h2 class="detail-day-title">${day.dayTitle[currentLang]}</h2>
    </div>

    <div class="drive-info-bar">
      <div class="drive-stat">
        <i class="fa-solid fa-route"></i>
        <span>${staticTranslations[currentLang].route_label}<span class="drive-stat-val">${day.drivingRoute[currentLang]}</span></span>
      </div>
      <div class="drive-stat">
        <i class="fa-solid fa-gauge-high"></i>
        <span>${staticTranslations[currentLang].stats_label}<span class="drive-stat-val">${day.drivingStats[currentLang]}</span></span>
      </div>
      <div class="drive-stat">
        <a href="${day.googleMapsLink}" target="_blank" class="drive-map-link">
          <i class="fa-solid fa-location-arrow"></i> ${staticTranslations[currentLang].nav_btn_text}
        </a>
      </div>
    </div>

    <div class="timeline">
      <div class="timeline-period">
        <div class="period-header morning">
          <i class="fa-solid fa-sun-rising"></i> ${staticTranslations[currentLang].period_morning}
        </div>
        ${renderPeriodItems(day.itinerary.morning)}
      </div>
      <div class="timeline-period">
        <div class="period-header afternoon">
          <i class="fa-solid fa-sun"></i> ${staticTranslations[currentLang].period_afternoon}
        </div>
        ${renderPeriodItems(day.itinerary.afternoon)}
      </div>
      <div class="timeline-period">
        <div class="period-header evening">
          <i class="fa-solid fa-moon"></i> ${staticTranslations[currentLang].period_evening}
        </div>
        ${renderPeriodItems(day.itinerary.evening)}
      </div>
    </div>

    <div class="tip-panel">
      <h4><i class="fa-solid fa-lightbulb"></i> ${staticTranslations[currentLang].tip_panel_title}</h4>
      <p class="tip-text">${day.tips[currentLang]}</p>
    </div>
  `;
}

// ==========================================================================
// 8. Booking Checklist & Budget Tracker
// ==========================================================================
function renderBookingChecklist() {
  const container = document.getElementById('bookingChecklist');
  if (!container) return;
  container.innerHTML = '';

  bookingItems.forEach(item => {
    const li = document.createElement('li');
    li.className = 'tracker-item';

    const isChecked = bookingStatus[item.id] || false;
    const actualCost = bookingCosts[item.id] || '';

    li.innerHTML = `
      <input type="checkbox" id="chk-${item.id}" ${isChecked ? 'checked' : ''}>
      <div class="tracker-label-container">
        <label for="chk-${item.id}" class="tracker-label">${item.label[currentLang]}</label>
      </div>
      <input type="number" 
             class="tracker-cost-input" 
             id="cost-${item.id}" 
             placeholder="$${item.estimate}" 
             value="${actualCost}" 
             min="0"
             aria-label="${item.label[currentLang]} actual amount">
    `;

    const checkbox = li.querySelector(`#chk-${item.id}`);
    checkbox.addEventListener('change', () => {
      bookingStatus[item.id] = checkbox.checked;
      saveToLocalStorage('so_booking_status', bookingStatus);
      updateBookingStats();
    });

    const costInput = li.querySelector(`#cost-${item.id}`);
    costInput.addEventListener('input', () => {
      bookingCosts[item.id] = costInput.value;
      saveToLocalStorage('so_booking_costs', bookingCosts);
      updateBookingStats();
    });

    container.appendChild(li);
  });

  updateBookingStats();
}

function updateBookingStats() {
  const totalItemsCount = bookingItems.length;
  const checkedItemsCount = Object.values(bookingStatus).filter(Boolean).length;
  const percent = totalItemsCount > 0 ? Math.round((checkedItemsCount / totalItemsCount) * 100) : 0;

  const progressTextEl = document.getElementById('bookingProgressText');
  const progressBarEl = document.getElementById('bookingProgressBar');
  
  if (progressTextEl) progressTextEl.innerText = `${percent}%`;
  if (progressBarEl) progressBarEl.style.width = `${percent}%`;

  let totalEstimate = 0;
  let totalActual = 0;

  bookingItems.forEach(item => {
    totalEstimate += item.estimate;
    
    const costVal = parseFloat(bookingCosts[item.id]);
    if (!isNaN(costVal)) {
      totalActual += costVal;
    } else if (bookingStatus[item.id]) {
      totalActual += item.estimate;
    }
  });

  const estEl = document.getElementById('totalEstimateVal');
  const actEl = document.getElementById('totalActualVal');

  if (estEl) estEl.innerText = `$${totalEstimate}`;
  if (actEl) actEl.innerText = `$${totalActual}`;
}

// ==========================================================================
// 9. Packing List Checklist
// ==========================================================================
function renderPackingList() {
  const grid = document.getElementById('packingListGrid');
  if (!grid) return;
  grid.innerHTML = '';

  let totalCount = 0;
  let checkedCount = 0;

  Object.keys(packingData).forEach(catKey => {
    const category = packingData[catKey];
    const catDiv = document.createElement('div');
    catDiv.className = 'packing-category';

    catDiv.innerHTML = `
      <h4><i class="fa-solid ${category.icon}"></i> ${category.title[currentLang]}</h4>
      <ul class="packing-item-list"></ul>
    `;

    const listUl = catDiv.querySelector('.packing-item-list');

    category.items.forEach((item, idx) => {
      // Store status by zh text key to preserve checkbox states regardless of language
      const isChecked = packingStatus[item.zh] || false;
      totalCount++;
      if (isChecked) checkedCount++;

      const li = document.createElement('li');
      li.className = 'packing-item';
      const inputId = `pack-${catKey}-${idx}`;

      li.innerHTML = `
        <input type="checkbox" id="${inputId}" ${isChecked ? 'checked' : ''}>
        <label for="${inputId}">${item[currentLang]}</label>
      `;

      const checkbox = li.querySelector('input[type="checkbox"]');
      checkbox.addEventListener('change', () => {
        packingStatus[item.zh] = checkbox.checked;
        saveToLocalStorage('so_packing_status', packingStatus);
        renderPackingList(); // re-render to update stats in header
      });

      listUl.appendChild(li);
    });

    grid.appendChild(catDiv);
  });

  const countText = document.getElementById('packingCountText');
  if (countText) {
    countText.innerText = `${checkedCount} / ${totalCount} ${staticTranslations[currentLang].packing_count_text}`;
  }
}

// ==========================================================================
// 10. Map Explorer Loader
// ==========================================================================
function updateExplorerMap() {
  const liveFrame = document.getElementById('liveMapIframe');
  if (!liveFrame) return;
  const day = itineraryData.find(d => d.dayNumber === activeDay);
  if (day && day.googleMapsEmbedUrl) {
    liveFrame.src = day.googleMapsEmbedUrl;
  }
}

