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
          "detail": { "zh": "公路自駕經典中繼站。在 Barstow 享用必點的隱藏菜單 Double-Double Animal Style 搭配奶昔，並順便加油與休息。", "en": "A classic road trip stop. Enjoy the hidden menu Double-Double Animal Style with a milkshake, and gas up/stretch." },
          "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=In-N-Out+Burger+Barstow+CA"
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
          "detail": { "zh": "抵達後前往當地 Costco 購買保冰桶與冰塊，為接下來的公路旅行備妥隨車冰箱，並採購瓶裝水與零食乾糧 [1, 2]。", "en": "Buy a cooler box and ice bags at Costco to serve as a mobile fridge for the trip, plus bottled water and snacks [1, 2]." },
          "googleMapsLink": "https://maps.app.goo.gl/HYor7VU8KiwJJWLu7"
        },
        { 
          "time": "16:00 - 18:00", 
          "text": { "zh": "入住賭城大道正中心的 ARIA 渡假村並稍作休息", "en": "Check in at ARIA Resort & Casino on the Strip and rest" }, 
          "type": "hotel", 
          "detail": { "zh": "配合下午 4:00 左右辦理入住。放妥行李並稍微休息，避開大道的擁擠噪音，享受高科技奢華客房。", "en": "Check in around 4:00 PM. Drop luggage and unwind in the high-tech luxury room away from strip traffic." },
          "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=ARIA+Resort+%26+Casino+Las+Vegas"
        }
      ],
      "evening": [
        { 
          "time": "18:00 - 20:00", 
          "text": { "zh": "在 ARIA 渡假村內的鼎泰豐享用晚餐", "en": "Dinner at Din Tai Fung (ARIA Resort & Casino)" }, 
          "type": "dining", 
          "detail": { "zh": "位於 ARIA 渡假村內。享用著名的黃金十八摺小籠包、紅油抄手與排骨蛋炒飯。建議提早透過官網預約 [1, 2]。", "en": "Located inside ARIA Resort. Enjoy their world-famous Xiao Long Bao, spicy wontons, and pork chop fried rice. Booking in advance is recommended [1, 2]." },
          "googleMapsLink": "https://maps.app.goo.gl/sngKADDJD3MbF7ts8"
        },
        { 
          "time": "20:00 - 21:30", 
          "text": { "zh": "漫步 Strip 大道，觀賞 Bellagio 音樂噴泉", "en": "Stroll along the Strip, watch Bellagio Fountains & Conservatory" }, 
          "type": "sight", 
          "detail": { "zh": "從 Aria 步行至 Bellagio 極近。可散步觀賞世界知名的水舞噴泉與室內溫室花園，享受賭城繁華夜景 [5]。", "en": "An easy walk from Aria to Bellagio. View the famous fountain show and the seasonal conservatory flower display [5]." },
          "googleMapsLink": "https://maps.app.goo.gl/XEjHWqvkWyxjeDyu6"
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
          "time": "08:00 - 10:00", 
          "text": { "zh": "在 ARIA 渡假村內的 Proper Eats Food Hall 享用悠閒早餐", "en": "Leisurely breakfast at Proper Eats Food Hall (ARIA)" }, 
          "type": "dining", 
          "detail": { "zh": "位於 ARIA 渡假村內二樓。有多樣化的精緻美食選擇（如 Easy Donuts、Egghead 蛋沙拉三明治等），可隨意挑選喜愛的早餐項目。", "en": "Located on the second level of ARIA Resort. Features diverse upscale food concepts (like Easy Donuts, Egghead breakfast sandwiches, etc.) to suit everyone's tastes." },
          "googleMapsLink": "https://maps.app.goo.gl/n4QNeh2snxqFD2aH7"
        },
        { 
          "time": "10:00 - 12:00", 
          "text": { "zh": "體驗 FlyOver Las Vegas 飛行影院", "en": "Experience FlyOver Las Vegas flying theater" }, 
          "type": "sight", 
          "detail": { "zh": "前往 Aria 對面的 Showcase Mall 體驗 FlyOver 4D 飛行影院，選擇《美西奇觀》影片，以懸空視角飛越接下來將去到的錫安與大峽谷，作為最佳公路旅行行前預告 [4]！", "en": "Walk across the street to Showcase Mall. FlyOver uses suspended motion seats and 4D effects. Choose 'Wonders of the American West' as a preview of Zion and Grand Canyon [4]!" },
          "googleMapsLink": "https://maps.app.goo.gl/j6fsQ1hGjVoDfkaQ9"
        }
      ],
      "afternoon": [
        { 
          "time": "12:00 - 14:00", 
          "text": { "zh": "返回 ARIA 飯店享用泳池等公共設施與休息", "en": "Return to ARIA Resort to enjoy pool and hotel amenities" }, 
          "type": "rest", 
          "detail": { "zh": "利用中午避開烈日的時段，回飯店享用奢華泳池、熱水按摩池或水療中心，放鬆身心。", "en": "Escape the midday sun by returning to ARIA. Spend a relaxing afternoon enjoying the outdoor pools, hot tubs, or spa amenities." }
        },
        { 
          "time": "14:30 - 16:30", 
          "text": { "zh": "享用凱薩皇宮 Bacchanal Buffet 豪華自助午餐", "en": "Lunch at Bacchanal Buffet in Caesars Palace" }, 
          "type": "dining", 
          "detail": { "zh": "拉斯維加斯排行第一的自助餐，多達 500 種跨國界精緻料理與海鮮。建議提早預訂早午餐時段 [1, 2]。", "en": "Ranked #1 buffet in Vegas, featuring 500+ items and fresh seafood. Booking in advance is highly recommended [1, 2]." },
          "googleMapsLink": "https://maps.app.goo.gl/92ZAQkt7BjFYjR2b7"
        },
        { 
          "time": "16:30 - 17:30", 
          "text": { "zh": "返回 Aria 飯店稍作休息與梳洗", "en": "Return to ARIA to rest and freshen up" }, 
          "type": "rest",
          "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=ARIA+Resort+%26+Casino+Las+Vegas"
        }
      ],
      "evening": [
        { 
          "time": "18:00 - 19:30", 
          "text": { "zh": "前往美高梅大酒店 (MGM Grand) 觀賞太陽馬戲團 KÀ 秀", "en": "Watch Cirque du Soleil's KÀ at MGM Grand" }, 
          "type": "show", 
          "detail": { "zh": "太陽馬戲團最震撼的科技大秀，擁有 360 度旋轉懸空巨大舞台，融合武術與高空特技 [3, 4]。六點場時間非常合適，看完秀後可以悠閒散步或享用輕食。", "en": "Cirque du Soleil's most technologically advanced show, featuring a massive 360-degree rotating stage, martial arts, and acrobatics [3, 4]. The 6:00 PM show leaves the rest of the evening free." },
          "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=KA+Theatre+MGM+Grand+Las+Vegas"
        }
      ]
    },
    "tips": {
      "zh": "今日全全程於賭城大道活動，建議穿著舒適步行鞋。Aria 門口即有輕軌電車或計程車，至各大景點非常方便。",
      "en": "Today is completely walking and Strip-based. Wear comfortable walking shoes. Aria has great connectivity via free trams, taxis, or rideshares."
    }
  },
  {
    "dayNumber": 3,
    "dayTitle": {
      "zh": "7月7日 (週二) | 拉斯維加斯 ➔ 10:00 退房 ➔ 錫安國家公園 E-Bike 騎行 ➔ Springdale",
      "en": "July 7 (Tue) | Las Vegas ➔ Checkout at 10:00 ➔ Zion E-Bike Ride ➔ Springdale"
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
          "time": "08:00 - 10:00", 
          "text": { "zh": "不吃早餐，專心打包行李，於 10:00 辦理退房", "en": "Focus on packing luggage, check out at 10:00 (no breakfast)" }, 
          "type": "hotel", 
          "detail": { "zh": "整理裝備與大行李，辦理 Aria 退房，準備出發。", "en": "Pack all belongings, check out of ARIA, and prepare to depart." }
        },
        { 
          "time": "10:00 - 12:30", 
          "text": { "zh": "驅車直奔錫安國家公園 (Springdale)", "en": "Drive straight to Springdale (Zion National Park)" }, 
          "type": "drive", 
          "detail": { "zh": "行駛約 2.5 小時。注意時差：猶他州比內華達州快一小時，抵達時為當地時間下午 13:30 [3]。", "en": "Drive through NV/AZ into Utah (~2.5 hrs). Note the time zone change: Utah is 1 hour ahead, so you will arrive at 13:30 local time [3]." }
        }
      ],
      "afternoon": [
        {
          "time": "13:30 - 14:00",
          "text": { "zh": "抵達 Springdale 並至 SpringHill Suites 辦理入住與寄放行李", "en": "Arrive in Springdale, check in and drop luggage at SpringHill Suites" },
          "type": "hotel",
          "detail": { "zh": "先至飯店卸下大行李，稍作整備再出發。", "en": "Drop off heavy luggage at the hotel and prepare for the afternoon." },
          "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=SpringHill+Suites+by+Marriott+Springdale+Zion+National+Park"
        },
        { 
          "time": "14:00 - 15:00", 
          "text": { "zh": "享用午餐", "en": "Enjoy lunch" }, 
          "type": "dining", 
          "detail": { "zh": "推薦：Oscar's Cafe，享用大份量美式或墨西哥融合料理 [3, 4]。", "en": "Recommended: Oscar's Cafe, famous for large portions of Tex-Mex, burgers, and salads [3, 4]." },
          "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Oscar's+Cafe+Springdale+UT"
        },
        { 
          "time": "15:00 - 17:00", 
          "text": { "zh": "租借電動自行車，沿景觀大道騎行至 Temple of Sinawava 折返", "en": "Rent E-Bikes and ride along Scenic Drive to Temple of Sinawava and back" }, 
          "type": "sight", 
          "detail": { "zh": "租借 E-Bike 沿景觀大道騎行，沿途欣賞錫安峽谷的紅岩風光。抵達 Temple of Sinawava 後直接折返（不進行 Narrows 涉水健行），省時又輕鬆。", "en": "Rent E-Bikes to cruise the Scenic Drive. Turn back at Temple of Sinawava without hiking in the river, saving time and energy." },
          "googleMapsLink": "https://maps.app.goo.gl/g7o6X9H6LQjXsvQ17"
        }
      ],
      "evening": [
        { 
          "time": "17:00 - 19:00", 
          "text": { "zh": "返回 SpringHill Suites 飯店休息並放鬆", "en": "Return to SpringHill Suites hotel to rest and unwind" }, 
          "type": "rest", 
          "detail": { "zh": "在飯店休息放鬆，享用泳池或欣賞大自然的紅岩群山環抱景緻 [3, 4]。", "en": "Relax at the hotel, enjoy the pool, and soak in the stunning red cliff backdrop [3, 4]." },
          "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=SpringHill+Suites+by+Marriott+Springdale+Zion+National+Park"
        },
        { 
          "time": "19:00 - 20:30", 
          "text": { "zh": "享用美味晚餐", "en": "Enjoy a delicious dinner" }, 
          "type": "dining", 
          "detail": { "zh": "推薦：Bit & Spur Restaurant 享用美西南料理或當地精緻餐酒 [3, 4]。", "en": "Recommended: Bit & Spur Restaurant for Southwestern dining and creative dishes [3, 4]." },
          "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Bit+%26+Spur+Restaurant+Springdale+UT"
        }
      ]
    },
    "tips": {
      "zh": "時差提醒：進入猶他州時手錶會變快 1 小時！下午騎乘 E-Bike 沿景觀大道欣賞紅岩景致，不進行涉水健行，輕鬆且安全。今天只住一晚，請在退房前整理好大行李。",
      "en": "Time Zone Warning: Entering Utah shifts time forward by 1 hour! Enjoy a relaxing E-Bike ride down Scenic Drive this afternoon without wading in the river. This is a 1-night stay, so keep your luggage packed."
    }
  },
  {
    "dayNumber": 4,
    "dayTitle": {
      "zh": "7月8日 (週三) | Springdale ➔ 11:00 退房 ➔ 肯鎮午餐 ➔ 佩吉 (Page)",
      "en": "July 8 (Wed) | Springdale ➔ Checkout at 11:00 ➔ Kanab Lunch ➔ Page"
    },
    "drivingRoute": {
      "zh": "SpringHill Suites ➔ Belly of the Dragon ➔ Kanab ➔ Page Hyatt Place",
      "en": "SpringHill Suites ➔ Belly of the Dragon ➔ Kanab ➔ Page Hyatt Place"
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
          "time": "08:00 - 10:00", 
          "text": { "zh": "享用飯店早餐，補充足夠體力", "en": "Breakfast at the hotel to recharge" }, 
          "type": "dining"
        },
        { 
          "time": "10:00 - 11:00", 
          "text": { "zh": "整理行李，辦理退房並將行李裝車", "en": "Pack luggage, check out and pack the car" }, 
          "type": "hotel"
        },
        { 
          "time": "11:00 - 12:30", 
          "text": { "zh": "前往肯鎮 (Kanab)，中途停留「龍之腹」拍照打卡", "en": "Drive to Kanab, stopping at Belly of the Dragon" }, 
          "type": "drive", 
          "detail": { "zh": "經 9 號景觀公路前行。中途在 89 號公路旁的天然岩石隧道「龍之腹」停留 30 分鐘拍照與歇腳。", "en": "Drive via Scenic Route 9. Stop at the unique rock tunnel Belly of the Dragon off Hwy 89 for 30 minutes of photos and walking." },
          "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Belly+of+the+Dragon+Utah"
        }
      ],
      "afternoon": [
        { 
          "time": "12:30 - 13:30", 
          "text": { "zh": "抵達肯鎮享用特色午餐", "en": "Arrive in Kanab and have lunch" }, 
          "type": "dining", 
          "detail": { "zh": "推薦：Wild Thyme Bistro 有機料理或 Sego 創意輕食 [5]。", "en": "Recommended: Wild Thyme Bistro for organic eats or Sego for New American tapas [5]." },
          "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Wild+Thyme+Bistro+Kanab+UT"
        },
        { 
          "time": "13:30 - 15:00", 
          "text": { "zh": "開車前往佩吉市 (Page)", "en": "Drive to Page" }, 
          "type": "drive", 
          "detail": { "zh": "車程約 1.5 小時。進入亞利桑那州慢一小時，抵達 Page 時為當地時間下午 14:00 [5]。", "en": "About 1.5 hours of drive. Crossing into Arizona shifts time back by 1 hour, making arrival 14:00 Page time [5]." }
        },
        { 
          "time": "14:00 - 16:00", 
          "text": { "zh": "抵達佩吉並入住 Hyatt Place 飯店放鬆休息", "en": "Arrive in Page and check in at Hyatt Place to rest" }, 
          "type": "hotel", 
          "detail": { "zh": "放妥行李，享受飯店設施（如戶外泳池、觀景露台）並稍作休息，準備前往 Lake Powell 碼頭 [5]。", "en": "Drop luggage, enjoy hotel amenities like the outdoor pool or scenic terrace, and prepare to head to the Lake Powell marina [5]." },
          "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Hyatt+Place+Page+Lake+Powell"
        }
      ],
      "evening": [
        { 
          "time": "16:00 - 18:00", 
          "text": { "zh": "預約 Lake Powell 包船/遊船，欣賞絕美湖畔景緻", "en": "Private boat charter on Lake Powell to enjoy beautiful lake views" }, 
          "type": "sight", 
          "detail": { "zh": "在鮑威爾湖包船，避開高溫氣溫舒適，欣賞湖光山色與水上峽谷絕景 [5]。", "en": "Chartering a private boat is a highlight. Enjoy the cool evening breeze and stunning canyon reflections [5]." },
          "googleMapsLink": "https://maps.app.goo.gl/sAyoddxZdSp2frVDA"
        },
        { 
          "time": "18:00 - 20:00", 
          "text": { "zh": "在 Dara Sushi & Roll 享用日式晚餐", "en": "Dinner at Dara Sushi & Roll" }, 
          "type": "dining", 
          "detail": { "zh": "位於 Page 鎮上的溫馨日式餐廳。提供新鮮的生魚片、特製創意壽司捲（如 Arizona Roll、Crunchy Roll）與 Poke 碗，深受當地人喜愛 [5]。", "en": "A cozy local Japanese spot in Page. Enjoy fresh sashimi, specialty sushi rolls (like Arizona Roll and Crunchy Roll), and poke bowls [5]." },
          "googleMapsLink": "https://maps.app.goo.gl/HDRK3EJQkgZ9GHwu6"
        }
      ]
    },
    "tips": {
      "zh": "時差提醒：進入亞利桑那州時手錶會慢 1 小時。下午抵達 Page 後有充裕的時間休息與享受飯店設施。Page 也是只住一晚，行李不用全部拿下來。",
      "en": "Time Zone Warning: Entering Arizona shifts time back by 1 hour. Enjoy a relaxing afternoon at the hotel after arrival in Page. Only 1 night in Page, keep unpacking to a minimum."
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
          "time": "08:00 - 10:00", 
          "text": { "zh": "在飯店享用早餐，整理行李打包並辦理退房", "en": "Have breakfast, pack luggage and check out" }, 
          "type": "hotel"
        },
        { 
          "time": "10:00 - 12:00", 
          "text": { "zh": "預約參觀 Antelope Canyon 羚羊峽谷導覽", "en": "Booked tour of Antelope Canyon" }, 
          "type": "sight", 
          "detail": { "zh": "探訪世界著名的狹縫型峽谷，欣賞陽光直射入谷中的奇幻光影束 [5]。", "en": "Explore the world-famous slot canyon and view the magical sunbeams entering the canyon [5]." },
          "googleMapsLink": "https://maps.app.goo.gl/T8zjENmdE9aCxJ6V6"
        },
        { 
          "time": "12:00 - 13:00", 
          "text": { "zh": "佩吉快速外帶午餐並於車上享用", "en": "Quick takeout lunch in Page, eaten in the car" }, 
          "type": "dining",
          "detail": { "zh": "外帶 Page 鎮上的便當或速食，在車上享用以節省時間。", "en": "Grab a quick takeout in Page and eat in the car to save time." }
        },
        { 
          "time": "13:00 - 14:00", 
          "text": { "zh": "前往 Horseshoe Bend 馬蹄灣，賞壯麗景緻", "en": "Visit Horseshoe Bend" }, 
          "type": "sight", 
          "detail": { "zh": "觀賞科羅拉多河 270 度大迴轉的震撼奇景 [5]。", "en": "View the Colorado River's spectacular 270-degree bend from the rim [5]." },
          "googleMapsLink": "https://maps.app.goo.gl/fn3YFhV1jsQsXe7JA"
        }
      ],
      "afternoon": [
        { 
          "time": "14:00 - 16:00", 
          "text": { "zh": "驅車前往大峽谷國家公園", "en": "Drive to Grand Canyon National Park" }, 
          "type": "drive",
          "detail": { "zh": "車程約 2 小時。沿途風光秀麗，朝大峽谷南緣前進。", "en": "About 2 hours drive. Head towards the South Rim of the Grand Canyon." }
        },
        { 
          "time": "16:00 - 17:00", 
          "text": { "zh": "參觀大峽谷馬瑟角與主要觀景點", "en": "Visit Grand Canyon Mather Point & viewpoints" }, 
          "type": "sight", 
          "detail": { "zh": "在大峽谷國家公園內散步，觀賞氣勢磅礴的峽谷斷崖與大自然鬼斧神工 [106, 107]。", "en": "Stroll along the rim trail, take photos at Mather Point and enjoy the breathtaking geological wonder [106, 107]." },
          "googleMapsLink": "https://maps.app.goo.gl/UpDY9tJ4gVBnKmUs5"
        },
        { 
          "time": "17:00 - 19:30", 
          "text": { "zh": "沿著歷史 66 號公路驅車前往金曼 (Kingman)", "en": "Drive via Historic Route 66 to Kingman" }, 
          "type": "drive", 
          "detail": { "zh": "車程約 2.5 小時。路途平直，沿途盡享美西荒野與復古小鎮風情 [103]。", "en": "About 2.5 hours of driving. Cruise through historic towns and wide open flats [103]." }
        }
      ],
      "evening": [
        { 
          "time": "19:30 - 20:00", 
          "text": { "zh": "抵達金曼並入住 SpringHill Suites 飯店", "en": "Check in at SpringHill Suites by Marriott Kingman Route 66" }, 
          "type": "hotel", 
          "detail": { "zh": "辦理入住，在舒適的客房放鬆身心，享受現代化飯店設施與舒適的大床。", "en": "Check in and relax in comfortable rooms, enjoying modern amenities and Marriott quality service." },
          "googleMapsLink": "https://maps.app.goo.gl/pwPF5LcoT3PJn87Z6"
        },
        { 
          "time": "20:00 - 21:00", 
          "text": { "zh": "在 Denny's 享用美式簡易晚餐", "en": "Dinner at Denny's" }, 
          "type": "dining", 
          "detail": { "zh": "在經典的 24 小時美式家庭餐廳 Denny's 享用簡易晚餐（如漢堡、三明治、美式煎餅或開胃拼盤）。", "en": "Enjoy a classic diner dinner at Denny's (burgers, sandwiches, pancakes, or shakes)." },
          "googleMapsLink": "https://maps.app.goo.gl/GDCdRERfbd5UQyoTA"
        }
      ]
    },
    "tips": {
      "zh": "今日行程較長，大約有 5 小時的行車路程。請在大峽谷或 Page 隨時補滿油箱。抵達 Kingman 後入住舒適的 SpringHill Suites 飯店休息。",
      "en": "This is the longest driving day with ~5 hours total. Fill up the gas tank in Page or Grand Canyon. Check in and have a good rest at SpringHill Suites in Kingman tonight."
    }
  },
  {
    "dayNumber": 6,
    "dayTitle": {
      "zh": "7月10日 (週五) | 金曼 ➔ 11:00 退房 ➔ 安大略奧特萊斯購物 ➔ 洛杉磯住家",
      "en": "July 10 (Fri) | Kingman ➔ Checkout by 11:00 ➔ Ontario Mills Outlet Shopping ➔ Home"
    },
    "drivingRoute": {
      "zh": "Kingman ➔ Ontario Mills ➔ Los Angeles (23944 Francisco Way)",
      "en": "Kingman ➔ Ontario Mills ➔ Los Angeles (23944 Francisco Way)"
    },
    "drivingStats": {
      "zh": "總車程約 5.5 小時 (中途停靠安大略購物中心)",
      "en": "Total drive time ~5.5 hours (with stop at Ontario Mills)"
    },
    "googleMapsLink": "https://www.google.com/maps/dir/Kingman,+AZ/Ontario+Mills,+1+Mills+Cir,+Ontario,+CA+91764/23944+Francisco+Way,+Valencia,+CA+91354",
    "googleMapsEmbedUrl": "https://maps.google.com/maps?saddr=Kingman,+AZ&daddr=Ontario+Mills,+1+Mills+Cir,+Ontario,+CA+91764+to:23944+Francisco+Way,+Valencia,+CA+91354&output=embed",
    "itinerary": {
      "morning": [
        { 
          "time": "08:00 - 11:00", 
          "text": { "zh": "在飯店享用早餐，整理行李打包並辦理退房", "en": "Have breakfast, pack luggage and check out" }, 
          "type": "hotel"
        }
      ],
      "afternoon": [
        { 
          "time": "11:00 - 15:00", 
          "text": { "zh": "驅車直奔安大略奧特萊斯 (Ontario Mills)", "en": "Drive straight to Ontario Mills Outlet" }, 
          "type": "drive", 
          "detail": { "zh": "行經莫哈維沙漠，橫跨加州邊界，直奔安大略。車程約 4 小時。", "en": "Drive through Mojave Desert and cross the California border straight to Ontario. Drive time is about 4 hours." },
          "googleMapsLink": "https://maps.app.goo.gl/tGGix2iUkb2eWGwQ6"
        },
        { 
          "time": "15:00 - 18:00", 
          "text": { "zh": "在 Ontario Mills 購物並享用晚餐", "en": "Shopping and dinner at Ontario Mills Outlet" }, 
          "type": "dining", 
          "detail": { "zh": "加州最大的室內奧特萊斯購物中心。您可以自由購物，並在美食廣場或餐廳享用早晚餐，避開傍晚洛杉磯的尖峰塞車潮。", "en": "California's largest indoor outlet mall. Enjoy shopping and grab an early dinner at the food court or restaurants to avoid peak LA rush hour traffic." },
          "googleMapsLink": "https://maps.app.goo.gl/tGGix2iUkb2eWGwQ6"
        },
        { 
          "time": "18:00 - 19:00", 
          "text": { "zh": "啟程返回洛杉磯住家", "en": "Drive back home to Los Angeles (Valencia)" }, 
          "type": "drive", 
          "detail": { "zh": "完成最後一段車程，避開尖峰交通，順利返家。車程約 1 小時。", "en": "Complete the final leg of the drive home, avoiding heavy traffic. Drive time is about 1 hour." }
        }
      ],
      "evening": [
        { 
          "time": "19:00", 
          "text": { "zh": "返抵洛杉磯 Valencia 住家，結束豐富充實的六日旅行", "en": "Arrive home in Valencia, ending the 6-day trip" }, 
          "type": "home"
        }
      ]
    },
    "tips": {
      "zh": "週五下午南加進入市區路段極易塞車，在 Ontario Mills 停留購物與享用晚餐可以有效避開 15:00-18:00 的尖峰塞車潮。",
      "en": "Southern California traffic on Friday afternoon is notoriously heavy. Stopping at Ontario Mills for shopping and dinner helps you avoid the worst of the 15:00-18:00 rush hour traffic."
    }
  }
];


// ==========================================================================
// 2. Booking Tracker Configuration
// ==========================================================================
const bookingItems = [
  { id: 'costco_supplies', label: { "zh": "Costco 行前採購 (保冰桶、飲料、冰塊)", "en": "Costco Supplies (cooler, drinks, ice)" }, estimate: 120 },
  { id: 'las_vegas_hotel', label: { "zh": "Las Vegas 酒店預訂 (Aria 2晚 / 雙人房x2)", "en": "Las Vegas Hotel Booking (Aria 2 nights / 2 rooms)" }, estimate: 900 },
  { id: 'bacchanal_buffet', label: { "zh": "Caesars Bacchanal Buffet 預約 (5人)", "en": "Caesars Bacchanal Buffet Reservation (5 people)" }, estimate: 500 },
  { id: 'ka_tickets', label: { "zh": "太陽馬戲團 KÀ 門票預訂 (5人)", "en": "Cirque du Soleil KÀ Tickets (5 tickets)" }, estimate: 500 },
  { id: 'zion_ebike', label: { "zh": "Zion 鋪路自行車租借預約 (5台 E-Bike)", "en": "Zion National Park E-Bike Rentals (5 bikes)" }, estimate: 400 },
  { id: 'springdale_hotel', label: { "zh": "Springdale 溫泉酒店預訂 (1晚 / 雙人房x2)", "en": "Springdale Hotel Booking (1 night / 2 rooms)" }, estimate: 450 },
  { id: 'lake_powell_boat', label: { "zh": "Page 鮑威爾湖包船/遊船預訂 (5人)", "en": "Page Lake Powell Boat Charter Booking (5 people)" }, estimate: 450 },
  { id: 'page_hotel', label: { "zh": "Page 酒店預訂 (1晚 / 雙人房x2)", "en": "Page Hotel Booking (1 night / 2 rooms)" }, estimate: 360 },
  { id: 'national_park_pass', label: { "zh": "美西國家公園年票實體卡 (1張即可)", "en": "National Parks Annual Pass (1 physical card)" }, estimate: 80 },
  { id: 'route66_hotel', label: { "zh": "Kingman 飯店預訂 (SpringHill Suites 1晚 / 雙人房x2)", "en": "Kingman Hotel Booking (SpringHill Suites 1 night / 2 rooms)" }, estimate: 300 }
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
                <div class="timeline-meta-row">
                  <span class="timeline-time">${item.time}</span>
                </div>
                <div class="timeline-title-row">
                  <span class="timeline-desc">${item.text[currentLang]}</span>
                  ${item.googleMapsLink ? `
                    <a href="${item.googleMapsLink}" target="_blank" class="timeline-nav-btn" title="${staticTranslations[currentLang].nav_btn_text}">
                      <i class="fa-solid fa-location-arrow"></i>
                      <span>${staticTranslations[currentLang].nav_btn_text}</span>
                    </a>
                  ` : ''}
                </div>
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

