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
    weather_label: "天氣：",
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
    weather_label: "Weather: ",
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
    "tabTitle": {
      "zh": "7月5日 (週日) | 拉斯維加斯",
      "en": "July 5 (Sun) | Las Vegas"
    },
    "drivingRoute": {
      "zh": "洛杉磯 (23944 Francisco Way) ➔ 巴斯托 Barstow (In-N-Out) ➔ 拉斯維加斯 (ARIA) ➔ Costco 採買",
      "en": "Los Angeles (23944 Francisco Way) ➔ Barstow (In-N-Out) ➔ Las Vegas (ARIA) ➔ Costco Shopping"
    },
    "drivingStats": {
      "zh": "總車程約 4 - 4.5 小時 (約 270 英哩)",
      "en": "Total drive time ~4 - 4.5 hours (~270 miles)"
    },
    "weather": {
      "icon": "fa-sun",
      "location": { "zh": "拉斯維加斯", "en": "Las Vegas" },
      "summary": { "zh": "晴朗酷熱 ☀️ (極度乾燥)", "en": "Sunny & Hot ☀️ (Extremely Dry)" },
      "temp": { "zh": "高 105°F (41°C) / 低 81°F (27°C)", "en": "High 105°F (41°C) / Low 81°F (27°C)" }
    },
    "googleMapsLink": "https://www.google.com/maps/dir/23944+Francisco+Way,+Valencia,+CA+91354/In-N-Out+Burger,+2821+E+Main+St,+Barstow,+CA+92311/ARIA+Resort+%26+Casino/Costco+Wholesale,+Marks+St,+Henderson,+NV?dirflg=d",
    "googleMapsEmbedUrl": "https://maps.google.com/maps?saddr=23944+Francisco+Way,+Valencia,+CA+91354&daddr=ARIA+Resort+%26+Casino,+Las+Vegas,+NV&dirflg=d&output=embed",
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
          "time": "15:00 - 17:00", 
          "text": { "zh": "入住賭城大道正中心的 ARIA 渡假村並稍作休息", "en": "Check in at ARIA Resort & Casino on the Strip and rest" }, 
          "type": "hotel", 
          "detail": { "zh": "抵達飯店辦理入住。放妥行李並稍微休息，避開大道的擁擠噪音，享受高科技奢華客房。", "en": "Check in at the hotel, drop luggage and unwind in the high-tech luxury room away from strip traffic." },
          "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=ARIA+Resort+%26+Casino+Las+Vegas"
        },
        { 
          "time": "17:00 - 18:00", 
          "text": { "zh": "前往當地 Costco 採買物資", "en": "Shop for supplies at local Costco" }, 
          "type": "rest", 
          "detail": { "zh": "休息後前往當地 Costco 購買保冰桶與冰塊，為接下來的公路旅行備妥隨車冰箱，並採購瓶裝水與零食乾糧 [1, 2]。", "en": "Head to local Costco to buy a cooler box and ice bags to serve as a mobile fridge for the trip, plus bottled water and snacks [1, 2]." },
          "googleMapsLink": "https://maps.app.goo.gl/HYor7VU8KiwJJWLu7"
        }
      ],
      "evening": [
        { 
          "time": "18:00 - 20:00", 
          "text": { "zh": "在百樂宮 (Bellagio) 內的 Jasmine 餐廳享用晚餐", "en": "Dinner at Jasmine (Bellagio Hotel & Casino)" }, 
          "type": "dining", 
          "detail": { "zh": "位於百樂宮 (Bellagio) 內。一邊享用精緻粵菜與港式海鮮，一邊近距離透過落地窗欣賞湖畔音樂噴泉水舞秀，氣氛極佳。", "en": "Located inside Bellagio. Enjoy refined Cantonese cuisine and seafood while taking in premier fountain views through floor-to-ceiling windows." },
          "googleMapsLink": "https://maps.app.goo.gl/hyRVDnLd8f2t4XwE8"
        },
        { 
          "time": "20:00 - 22:00", 
          "text": { "zh": "漫步 Strip 大道，觀賞 Bellagio 音樂噴泉", "en": "Stroll along the Strip, watch Bellagio Fountains & Conservatory" }, 
          "type": "sight", 
          "detail": { "zh": "從 Aria 步行至 Bellagio 極近。可散步觀賞世界知名的水舞噴泉與室內溫室花園，享受賭城繁華夜景 [5]。", "en": "An easy walk from Aria to Bellagio. View the famous fountain show and the seasonal conservatory flower display [5]." },
          "googleMapsLink": "https://maps.app.goo.gl/XEjHWqvkWyxjeDyu6"
        }
      ]
    },
    "tips": {
      "zh": "週日是南加往拉斯維加斯方向路況最好的時間。⛽ <strong>加油建議 (Honda Odyssey)</strong>：抵達 Vegas 安排至 Costco 採買時，優先至 <strong>Costco Decatur 站</strong>（離 Aria 約 10 分鐘）加滿油，享全城最便宜油價並為後續行程備足燃料。",
      "en": "Sunday morning is the best window for driving from SoCal to Vegas. ⛽ <strong>Gas Tip (Honda Odyssey)</strong>: When visiting Costco today, fill up at <strong>Costco Decatur</strong> (10 mins from Aria) for the cheapest gas before heading to Utah."
    }
  },
  {
    "dayNumber": 2,
    "dayTitle": {
      "zh": "7月6日 (週一) | 拉斯維加斯全日自由行（續住 Aria 不退房）",
      "en": "July 6 (Mon) | Las Vegas Full Day (Stay at ARIA)"
    },
    "tabTitle": {
      "zh": "7月6日 (週一) | 拉斯維加斯",
      "en": "July 6 (Mon) | Las Vegas"
    },
    "drivingRoute": {
      "zh": "ARIA 渡假村 ➔ 百樂宮自助餐 (Bellagio) ➔ Play Playground 互動遊戲館 ➔ 永利渡假村 (Awakening) ➔ ARIA 渡假村",
      "en": "ARIA Resort ➔ The Buffet at Bellagio ➔ Play Playground ➔ Wynn Las Vegas (Awakening) ➔ ARIA Resort"
    },
    "drivingStats": {
      "zh": "無需長途自駕，大道活動為主 (約 15 英哩)",
      "en": "No long drive, activities mainly around the Strip (~15 miles)"
    },
    "weather": {
      "icon": "fa-temperature-high",
      "location": { "zh": "拉斯維加斯", "en": "Las Vegas" },
      "summary": { "zh": "烈日晴朗 ☀️ (午後宜安排室內活動)", "en": "Sunny & Very Hot ☀️ (Indoor Recommended)" },
      "temp": { "zh": "高 106°F (41°C) / 低 82°F (28°C)", "en": "High 106°F (41°C) / Low 82°F (28°C)" }
    },
    "googleMapsLink": "https://www.google.com/maps/dir/ARIA+Resort+%26+Casino/The+Buffet+at+Bellagio/Play+Playground+Las+Vegas/Wynn+Las+Vegas/ARIA+Resort+%26+Casino?dirflg=d",
    "googleMapsEmbedUrl": "https://maps.google.com/maps?saddr=ARIA+Resort+%26+Casino,+Las+Vegas,+NV&daddr=The+Buffet+at+Bellagio,+Las+Vegas,+NV&dirflg=d&output=embed",
    "itinerary": {
      "morning": [
        { 
          "time": "08:00 - 10:00", 
          "text": { "zh": "悠閒起床洗漱、更衣與整理行裝", "en": "Wake up, freshen up, change clothes & get ready" }, 
          "type": "rest", 
          "detail": { "zh": "在 ARIA 飯店房間內悠閒起床、洗漱更衣與放鬆，準備 10:00 前往百樂宮享用豪華自助早午餐！", "en": "Leisurely morning at ARIA Resort. Wake up, freshen up, and get ready for brunch at Bellagio at 10:00 AM." }
        },
        { 
          "time": "10:00 - 12:00", 
          "text": { "zh": "享用百樂宮大飯店 The Buffet at Bellagio 豪華自助早午餐", "en": "Brunch at The Buffet at Bellagio" }, 
          "type": "dining", 
          "detail": { "zh": "拉斯維加斯最經典且知名的頂級自助餐之一，提供極其豐富的跨國界精緻料理、現切烤肉、新鮮海鮮與精美甜點區。10點早午餐時段非常適合全家悠閒享受！", "en": "One of Las Vegas' most iconic buffets, offering an incredible spread of international dishes, live carving stations, seafood, and decadent desserts. The 10:00 AM brunch slot is perfect for a relaxed family feast." },
          "googleMapsLink": "https://maps.app.goo.gl/dJpoforoYbWdan8y6"
        }
      ],
      "afternoon": [
        { 
          "time": "12:30 - 14:30", 
          "text": { "zh": "體驗 Play Playground 沉浸式互動遊戲館", "en": "Experience Play Playground interactive gaming venue" }, 
          "type": "sight", 
          "detail": { "zh": "前往 Luxor (金字塔飯店) 內，佔地 15,000 平方英呎的真人大型互動遊戲館。沒有傳統 VR 或電玩，而是提供 20 多款大型實體闖關、記憶與團隊挑戰遊戲，帶來充滿活力與樂趣的沉浸式體驗！", "en": "Located inside Luxor Hotel & Casino, a 15,000 sq ft immersive social gaming venue. Features over 20 hands-on physical, puzzle, and memory games designed for real-world fun and friendly competition without VR or screens!" },
          "googleMapsLink": "https://maps.app.goo.gl/v5wi5WL2zpqtEkyE9"
        },
        { 
          "time": "15:00 - 17:15", 
          "text": { "zh": "返回 ARIA 飯店享用泳池等公共設施與休息梳洗", "en": "Return to ARIA Resort to enjoy pool, rest and freshen up" }, 
          "type": "rest", 
          "detail": { "zh": "利用午後避開烈日的時段，回飯店享用奢華泳池、熱水按摩池放鬆，並換上舒適服裝準備迎接晚上的奇幻大秀。", "en": "Escape the afternoon desert heat at ARIA's luxury pool complex. Relax and freshen up before heading to the evening show." }
        }
      ],
      "evening": [
        { 
          "time": "17:45 - 20:00", 
          "text": { "zh": "前往永利飯店 (Wynn Las Vegas) 觀賞 Awakening 奇幻巨秀", "en": "Watch Awakening at Wynn Las Vegas" }, 
          "type": "show", 
          "detail": { "zh": "永利飯店耗資鉅額打造的頂級沉浸式奇幻秀，由金獎影帝安東尼霍普金斯旁白引導。在 360 度客製化玻璃舞台上，結合極致光影、巨型偶戲、高空特技與震撼音效！", "en": "An extraordinary immersive production hosted in a custom-built 360-degree theater with a glass stage at Wynn Las Vegas. Narrated by Anthony Hopkins, featuring mind-bending illusions, acrobatics, and puppetry!" },
          "googleMapsLink": "https://maps.app.goo.gl/gPHpywJAU1NJKuCTA"
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
      "zh": "7月7日 (週二) | 拉斯維加斯 ➔ 11:00 退房 ➔ 錫安國家公園 E-Bike 騎行",
      "en": "July 7 (Tue) | Las Vegas ➔ Checkout at 11:00 ➔ Zion E-Bike Ride"
    },
    "tabTitle": {
      "zh": "7月7日 (週二) | 錫安國家公園",
      "en": "July 7 (Tue) | Zion National Park"
    },
    "drivingRoute": {
      "zh": "ARIA 渡假村 ➔ Costco St. George 加油站 ➔ 史普林代爾 SpringHill Suites ➔ 錫安峽谷景觀大道 ➔ SpringHill Suites",
      "en": "ARIA Resort ➔ Costco Gas St. George ➔ SpringHill Suites Springdale ➔ Zion Canyon Scenic Drive ➔ SpringHill Suites"
    },
    "drivingStats": {
      "zh": "車程估計約 2.5 小時 (約 165 英哩 / 時差損失 1 小時)",
      "en": "Drive time ~2.5 hours (~165 miles / lose 1 hour timezone difference)"
    },
    "weather": {
      "icon": "fa-cloud-sun",
      "location": { "zh": "錫安國家公園", "en": "Zion National Park" },
      "summary": { "zh": "晴朗微風 🌤️ (峽谷高溫乾燥)", "en": "Sunny & Warm 🌤️ (Dry Canyon Air)" },
      "temp": { "zh": "高 96°F (36°C) / 低 68°F (20°C)", "en": "High 96°F (36°C) / Low 68°F (20°C)" }
    },
    "googleMapsLink": "https://www.google.com/maps/dir/ARIA+Resort+%26+Casino/Costco+Gas+Station,+835+E+300+S,+St.+George,+UT+84770/SpringHill+Suites+by+Marriott+Springdale+Zion+National+Park/Zion+National+Park+Visitor+Center/SpringHill+Suites+by+Marriott+Springdale+Zion+National+Park?dirflg=d",
    "googleMapsEmbedUrl": "https://maps.google.com/maps?saddr=ARIA+Resort+%26+Casino,+Las+Vegas,+NV&daddr=SpringHill+Suites+by+Marriott+Springdale+Zion+National+Park&dirflg=d&output=embed",
    "itinerary": {
      "morning": [
        { 
          "time": "09:00 - 11:00", 
          "text": { "zh": "享用悠閒早餐與打包行李，於 11:00 辦理退房", "en": "Leisurely breakfast & packing luggage, check out at 11:00" }, 
          "type": "hotel", 
          "detail": { "zh": "整理裝備與大行李，辦理 Aria 退房，準備出發。", "en": "Pack all belongings, check out of ARIA, and prepare to depart." }
        },
        { 
          "time": "11:00 - 14:00", 
          "text": { "zh": "驅車前往猶他州聖喬治 (St. George)", "en": "Drive to St. George, Utah" }, 
          "type": "drive", 
          "detail": { "zh": "行駛約 2 小時。注意時差：跨越州界進入猶他州時手錶快一小時，抵達 St. George 時為當地時間下午 14:00 [3]。", "en": "Drive ~2 hrs. Note time zone change: Utah is 1 hr ahead, arriving at 14:00 local time." }
        }
      ],
      "afternoon": [
        {
          "time": "14:00 - 14:30",
          "text": { "zh": "於 Costco St. George 加油站加油並採買熟食簡餐", "en": "Gas stop and buy Costco takeout meal at St. George" },
          "type": "dining",
          "detail": { "zh": "於 Costco 加油站補滿油箱，並至熟食區購買牛肉捲、熱狗或披薩便當於車上/路上享用 [3] (替代定點餐廳)。", "en": "Fill up at Costco Gas Station and grab quick food (hot dogs, pizza, bake) to eat on the road." },
          "googleMapsLink": "https://maps.app.goo.gl/6E4VJ2wPDYkPgChy9"
        },
        {
          "time": "14:30 - 15:00",
          "text": { "zh": "驅車前往錫安國家公園入口 (Springdale)", "en": "Drive to Springdale (Zion National Park entry)" },
          "type": "drive",
          "detail": { "zh": "由 St. George 繼續前行約 30-40 分鐘，抵達錫安國家公園門戶小鎮 Springdale。", "en": "Drive 30-40 minutes from St. George to Springdale at Zion's entrance." }
        },
        {
          "time": "15:00 - 15:30",
          "text": { "zh": "抵達 Springdale 並至 SpringHill Suites 辦理入住", "en": "Arrive in Springdale and check in at SpringHill Suites" },
          "type": "hotel",
          "detail": { "zh": "辦理飯店入住，在房間稍作休息與整備後出發。", "en": "Check in at the hotel, unwind briefly and prepare to head out." },
          "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=SpringHill+Suites+by+Marriott+Springdale+Zion+National+Park"
        },
        { 
          "time": "15:30 - 17:30", 
          "text": { "zh": "租借電動自行車，沿景觀大道騎行至 Temple of Sinawava 折返", "en": "Rent E-Bikes and ride along Scenic Drive to Temple of Sinawava and back" }, 
          "type": "sight", 
          "detail": { "zh": "租借 E-Bike 沿景觀大道騎行，沿途欣賞錫安峽谷的紅岩風光。抵達 Temple of Sinawava 後直接折返（不進行 Narrows 涉水健行），省時又輕鬆。", "en": "Rent E-Bikes to cruise the Scenic Drive. Turn back at Temple of Sinawava without hiking in the river, saving time and energy." },
          "googleMapsLink": "https://maps.app.goo.gl/g7o6X9H6LQjXsvQ17"
        }
      ],
      "evening": [
        { 
          "time": "17:30 - 19:00", 
          "text": { "zh": "返回 SpringHill Suites 飯店休息與放鬆", "en": "Return to SpringHill Suites hotel to rest and unwind" }, 
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
      "zh": "時差提醒：進入猶他州時手錶會變快 1 小時！下午騎乘 E-Bike 沿景觀大道欣賞紅岩景致。⛽ <strong>加油備忘</strong>：若油量低於半桶，行經 I-15 進入猶他州前可順道於 <strong>Costco St. George 站</strong>（835 E 300 S, St. George, UT）補滿油，Springdale 鎮上油價較貴。",
      "en": "Time Zone Warning: Entering Utah shifts time forward by 1 hour! Enjoy a relaxing E-Bike ride. ⛽ <strong>Gas Tip</strong>: If tank is low, stop at <strong>Costco St. George</strong> off I-15 before Springdale for cheaper gas."
    }
  },
  {
    "dayNumber": 4,
    "dayTitle": {
      "zh": "7月8日 (週三) | Springdale ➔ 11:00 退房 ➔ 肯鎮午餐 ➔ 佩吉 (Page)",
      "en": "July 8 (Wed) | Springdale ➔ Checkout at 11:00 ➔ Kanab Lunch ➔ Page"
    },
    "tabTitle": {
      "zh": "7月8日 (週三) | 龍之腹 / 鮑威爾湖",
      "en": "July 8 (Wed) | Belly of the Dragon / Lake Powell"
    },
    "drivingRoute": {
      "zh": "SpringHill Suites ➔ 龍之腹 (Belly of the Dragon) ➔ 肯鎮 (Kanab) ➔ 佩吉 Hyatt Place ➔ 羚羊角碼頭 (Antelope Point Marina) ➔ Maverik 加油站",
      "en": "SpringHill Suites ➔ Belly of the Dragon ➔ Kanab ➔ Hyatt Place Page ➔ Antelope Point Marina ➔ Maverik Gas Station"
    },
    "drivingStats": {
      "zh": "車程約 2.5 小時 (約 137 英哩 / 跨州獲得 1 小時時差紅利)",
      "en": "Drive time ~2.5 hours (~137 miles / gain 1 hour timezone difference)"
    },
    "weather": {
      "icon": "fa-sun",
      "location": { "zh": "佩吉 / 鮑威爾湖", "en": "Page / Lake Powell" },
      "summary": { "zh": "晴朗無雲 ☀️ (湖畔晚風涼爽)", "en": "Sunny & Clear ☀️ (Pleasant Lake Breeze)" },
      "temp": { "zh": "高 98°F (37°C) / 低 73°F (23°C)", "en": "High 98°F (37°C) / Low 73°F (23°C)" }
    },
    "googleMapsLink": "https://www.google.com/maps/dir/SpringHill+Suites+by+Marriott+Springdale+Zion+National+Park/Belly+of+the+Dragon,+Kanab,+UT/Kanab,+UT/Hyatt+Place+Page+Lake+Powell/Antelope+Point+Marina+%26+RV+Park/Maverik+Adventure's+First+Stop,+Lake+Powell+Blvd,+Page,+AZ?dirflg=d",
    "googleMapsEmbedUrl": "https://maps.google.com/maps?saddr=SpringHill+Suites+by+Marriott+Springdale+Zion+National+Park&daddr=Hyatt+Place+Page+Lake+Powell&dirflg=d&output=embed",
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
          "time": "15:00 - 16:30", 
          "text": { "zh": "抵達佩吉並入住 Hyatt Place 飯店放鬆休息", "en": "Arrive in Page and check in at Hyatt Place to rest" }, 
          "type": "hotel", 
          "detail": { "zh": "放妥行李，享受飯店設施（如戶外泳池、觀景露台）並稍作休息，準備前往羚羊角碼頭 (Antelope Point Marina) [5]。", "en": "Drop luggage, enjoy hotel amenities like the outdoor pool or scenic terrace, and prepare to head to Antelope Point Marina [5]." },
          "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Hyatt+Place+Page+Lake+Powell"
        }
      ],
      "evening": [
        { 
          "time": "17:00 - 18:00", 
          "text": { "zh": "前往羚羊角碼頭 (Antelope Point Marina) 體驗 Lake Powell 遊船", "en": "Lake Powell Cruise at Antelope Point Marina" }, 
          "type": "sight", 
          "detail": { "zh": "前往位於 Lake Powell 的羚羊角碼頭搭乘遊船，傍晚涼爽氣溫宜人，在震撼的水上峽谷中欣賞湖光山色與夕陽絕景 [5]！", "en": "Experience a scenic boat tour departing from Antelope Point Marina. Enjoy pleasant evening temperatures and majestic views of water-filled canyons and sunset reflections [5]." },
          "googleMapsLink": "https://maps.app.goo.gl/p1EtiYPLbKFY5oRC8"
        },
        {
          "time": "18:15 - 18:45",
          "text": { "zh": "於 Page Maverik 加油站加油補給", "en": "Gas stop and refuel at Maverik Page" },
          "type": "rest",
          "detail": { "zh": "遊船結束回程時，順道至 Maverik 加油站 (Lake Powell Blvd) 補滿油箱 [5]，預先為明日穿越大峽谷長途自駕備足燃料。", "en": "Stop at Maverik Gas Station on Lake Powell Blvd after the boat tour to fill up for tomorrow's canyon drive." },
          "googleMapsLink": "https://maps.app.goo.gl/eA5LqyNvSTDQGRGH7"
        },
        { 
          "time": "18:45 - 20:30", 
          "text": { "zh": "在 Dara Sushi & Roll 享用日式晚餐", "en": "Dinner at Dara Sushi & Roll" }, 
          "type": "dining", 
          "detail": { "zh": "位於 Page 鎮上的溫馨日式餐廳。提供新鮮的生魚片、特製創意壽司捲（如 Arizona Roll、Crunchy Roll）與 Poke 碗，深受當地人喜愛 [5]。", "en": "A cozy local Japanese spot in Page. Enjoy fresh sashimi, specialty sushi rolls (like Arizona Roll and Crunchy Roll), and poke bowls [5]." },
          "googleMapsLink": "https://maps.app.goo.gl/HDRK3EJQkgZ9GHwu6"
        }
      ]
    },
    "tips": {
      "zh": "時差提醒：進入亞利桑那州時手錶會慢 1 小時。Page 也是只住一晚。⛽ <strong>加油建議</strong>：Page 鎮上無 Costco，建議抵達 Page 後在鎮上 <strong>Maverik 或 Chevron</strong>（如 Lake Powell Blvd 站）加滿油，以備明日長途穿越大峽谷至 Kingman。",
      "en": "Time Zone Warning: Entering Arizona shifts time back by 1 hour. ⛽ <strong>Gas Tip</strong>: Page has no Costco. Fill up at <strong>Maverik or Chevron</strong> in Page town today to prepare for tomorrow's long drive through Grand Canyon."
    }
  },
  {
    "dayNumber": 5,
    "dayTitle": {
      "zh": "7月9日 (週四) | 佩吉 ➔ 羚羊谷 & 馬蹄灣 ➔ 大峽谷 ➔ 金曼 (Kingman)",
      "en": "July 9 (Thu) | Page ➔ Antelope Canyon & Horseshoe Bend ➔ Grand Canyon ➔ Kingman"
    },
    "tabTitle": {
      "zh": "7月9日 (週四) | 大峽谷國家公園",
      "en": "July 9 (Thu) | Grand Canyon National Park"
    },
    "drivingRoute": {
      "zh": "佩吉 Hyatt Place ➔ 羚羊峽谷 ➔ 馬蹄灣 ➔ 大峽谷馬瑟角 (Mather Point) ➔ 金曼 SpringHill Suites",
      "en": "Hyatt Place Page ➔ Antelope Canyon ➔ Horseshoe Bend ➔ Grand Canyon Mather Point ➔ SpringHill Suites Kingman"
    },
    "drivingStats": {
      "zh": "自駕行程約 5 小時 (約 302 英哩 / 今日最長路程，請輪流駕駛)",
      "en": "Drive time ~5 hours (~302 miles / longest driving day, please rotate drivers)"
    },
    "weather": {
      "icon": "fa-cloud-sun-rain",
      "location": { "zh": "大峽谷南緣", "en": "Grand Canyon South Rim" },
      "summary": { "zh": "晴時多雲 ⛅ (大峽谷涼爽，留意午後雷陣雨)", "en": "Sunny with Clouds ⛅ (Cool Rim, Watch PM Showers)" },
      "temp": { "zh": "峽谷高 85°F (29°C) / 低 55°F (13°C) | 金曼高 98°F (37°C)", "en": "Rim High 85°F (29°C) / Low 55°F (13°C) | Kingman High 98°F (37°C)" }
    },
    "googleMapsLink": "https://www.google.com/maps/dir/Hyatt+Place+Page+Lake+Powell/Antelope+Canyon/Horseshoe+Bend/Mather+Point,+Grand+Canyon+Village,+AZ/SpringHill+Suites+by+Marriott+Kingman+Route+66?dirflg=d",
    "googleMapsEmbedUrl": "https://maps.google.com/maps?saddr=Hyatt+Place+Page+Lake+Powell&daddr=SpringHill+Suites+by+Marriott+Kingman+Route+66&dirflg=d&output=embed",
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
      "zh": "今日行程較長（約 5 小時車程）。⛽ <strong>加油建議</strong>：出發前確保在 Page 已加滿油。晚上抵達 Kingman 鎮上無 Costco，可於 I-40 交流道旁大型連鎖加油站（如 <strong>Love's Travel Stop</strong> 或 <strong>Pilot</strong>）補充燃料。",
      "en": "This is the longest driving day (~5 hours). ⛽ <strong>Gas Tip</strong>: Ensure full tank when leaving Page. In Kingman tonight, fuel up at major interstate stations like <strong>Love's</strong> or <strong>Pilot</strong>."
    }
  },
  {
    "dayNumber": 6,
    "dayTitle": {
      "zh": "7月10日 (週五) | 金曼 ➔ 11:00 退房 ➔ 安大略奧特萊斯購物 ➔ 洛杉磯住家",
      "en": "July 10 (Fri) | Kingman ➔ Checkout by 11:00 ➔ Ontario Mills Outlet Shopping ➔ Home"
    },
    "tabTitle": {
      "zh": "7月10日 (週五) | Ontario Mill 購物",
      "en": "July 10 (Fri) | Ontario Mill Shopping"
    },
    "drivingRoute": {
      "zh": "金曼 SpringHill Suites ➔ 安大略奧特萊斯 (Ontario Mills) ➔ 洛杉磯住家 (23944 Francisco Way)",
      "en": "SpringHill Suites Kingman ➔ Ontario Mills Outlet ➔ Los Angeles (23944 Francisco Way)"
    },
    "drivingStats": {
      "zh": "總車程約 5.5 小時 (約 333 英哩 / 中途停靠安大略購物中心)",
      "en": "Total drive time ~5.5 hours (~333 miles / with stop at Ontario Mills)"
    },
    "weather": {
      "icon": "fa-sun",
      "location": { "zh": "安大略 / 洛杉磯", "en": "Ontario / Los Angeles" },
      "summary": { "zh": "晴朗溫和 ☀️ (南加州舒適氣候)", "en": "Sunny & Mild ☀️ (Pleasant SoCal Weather)" },
      "temp": { "zh": "高 88°F (31°C) / 低 64°F (18°C)", "en": "High 88°F (31°C) / Low 64°F (18°C)" }
    },
    "googleMapsLink": "https://www.google.com/maps/dir/SpringHill+Suites+by+Marriott+Kingman+Route+66/Ontario+Mills,+1+Mills+Cir,+Ontario,+CA+91764/23944+Francisco+Way,+Valencia,+CA+91354?dirflg=d",
    "googleMapsEmbedUrl": "https://maps.google.com/maps?saddr=SpringHill+Suites+by+Marriott+Kingman+Route+66&daddr=23944+Francisco+Way,+Valencia,+CA+91354&dirflg=d&output=embed",
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
      "zh": "週五下午南加進入市區路段極易塞車。⛽ <strong>加油建議</strong>：橫跨沙漠抵達安大略後，優先前往離 Ontario Mills 僅 3 英哩的 <strong>Costco Gas Rancho Cucamonga / Ontario 站</strong>（1201 N Rochester Ave, Ontario, CA）加滿便宜加州油，再順暢返家。",
      "en": "Friday afternoon SoCal traffic is heavy. ⛽ <strong>Gas Tip</strong>: Upon reaching Ontario, fill up at <strong>Costco Gas Rancho Cucamonga / Ontario</strong> (~3 mi from Ontario Mills) for cheap CA fuel before heading home."
    }
  }
];


// ==========================================================================
// 2. Booking Tracker Configuration
// ==========================================================================
const bookingGroups = {
  vegas: {
    title: { "zh": "7/5 - 7/7 拉斯維加斯", "en": "July 5-7 | Las Vegas" },
    icon: "fa-dice"
  },
  zion: {
    title: { "zh": "7/7 錫安國家公園", "en": "July 7 | Zion National Park" },
    icon: "fa-mountain"
  },
  page: {
    title: { "zh": "7/8 佩吉與鮑威爾湖", "en": "July 8 | Page & Lake Powell" },
    icon: "fa-water"
  },
  kingman: {
    title: { "zh": "7/9 66號公路與金曼", "en": "July 9 | Route 66 & Kingman" },
    icon: "fa-road"
  },
  general: {
    title: { "zh": "行前與景點通行證", "en": "General & Passes" },
    icon: "fa-ticket"
  }
};

const bookingItems = [
  { id: 'las_vegas_hotel', group: 'vegas', label: { "zh": "Las Vegas 酒店預訂 (Aria 2晚 / 雙人房x2)", "en": "Las Vegas Hotel Booking (Aria 2 nights / 2 rooms)" }, estimate: 900 },
  { id: 'jasmine_restaurant', group: 'vegas', label: { "zh": "Bellagio Jasmine 餐廳預約 (5人)", "en": "Bellagio Jasmine Restaurant Reservation (5 people)" }, estimate: 400 },
  { id: 'bellagio_buffet', group: 'vegas', label: { "zh": "Bellagio 豪華自助餐預約 (5人)", "en": "The Buffet at Bellagio Reservation (5 people)" }, estimate: 450 },
  { id: 'play_playground_tickets', group: 'vegas', label: { "zh": "Play Playground 遊戲館門票 (5人)", "en": "Play Playground Admission Tickets (5 tickets)" }, estimate: 200 },
  { id: 'awakening_tickets', group: 'vegas', label: { "zh": "永利飯店 Awakening 秀門票預訂 (5人)", "en": "Wynn Awakening Show Tickets (5 tickets)" }, estimate: 600 },
  { id: 'zion_ebike', group: 'zion', label: { "zh": "Zion 鋪路自行車租借預約 (5台 E-Bike)", "en": "Zion National Park E-Bike Rentals (5 bikes)" }, estimate: 400 },
  { id: 'springdale_hotel', group: 'zion', label: { "zh": "Springdale 溫泉酒店預訂 (1晚 / 雙人房x2)", "en": "Springdale Hotel Booking (1 night / 2 rooms)" }, estimate: 450 },
  { id: 'antelope_canyon_tour', group: 'page', label: { "zh": "Page 羚羊峽谷導覽門票預訂 (5人)", "en": "Page Antelope Canyon Tour Booking (5 people)" }, estimate: 450 },
  { id: 'lake_powell_boat', group: 'page', label: { "zh": "羚羊角碼頭 Lake Powell 遊船預訂 (5人)", "en": "Antelope Point Marina Lake Powell Cruise Booking (5 people)" }, estimate: 450 },
  { id: 'page_hotel', group: 'page', label: { "zh": "Page 酒店預訂 (1晚 / 雙人房x2)", "en": "Page Hotel Booking (1 night / 2 rooms)" }, estimate: 360 },
  { id: 'route66_hotel', group: 'kingman', label: { "zh": "Kingman 飯店預訂 (SpringHill Suites 1晚 / 雙人房x2)", "en": "Kingman Hotel Booking (SpringHill Suites 1 night / 2 rooms)" }, estimate: 300 },
  { id: 'national_park_pass', group: 'general', label: { "zh": "美西國家公園年票實體卡 (1張即可)", "en": "National Parks Annual Pass (1 physical card)" }, estimate: 80 }
];

// ==========================================================================
// 3. Packing Checklist Configuration
// ==========================================================================
const packingData = {
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
  }
  bookingItems.forEach(item => {
    if (bookingStatus[item.id] === undefined) bookingStatus[item.id] = false;
  });

  const savedCosts = localStorage.getItem('so_booking_costs');
  if (savedCosts) {
    bookingCosts = JSON.parse(savedCosts);
  }
  bookingItems.forEach(item => {
    if (bookingCosts[item.id] === undefined) bookingCosts[item.id] = '';
  });

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
    
    let shortTitle = day.tabTitle ? day.tabTitle[currentLang] : day.dayTitle[currentLang];
    if (!day.tabTitle) {
      if (shortTitle.includes(' | ')) {
        const parts = shortTitle.split(' | ');
        shortTitle = parts[0] + ' | ' + parts[parts.length - 1].split(' ➔ ').slice(-1)[0].replace(/（.*）|\(.*\)/g, '').trim();
      } else if (shortTitle.includes(' ➔ ')) {
        const parts = shortTitle.split(' ➔ ');
        const start = parts[0].replace(/（.*）|\(.*\)/g, '').trim();
        let end = parts[parts.length - 1].replace(/（.*）|\(.*\)/g, '').trim();
        shortTitle = `${start} ➔ ${end}`;
      } else {
        shortTitle = shortTitle.replace(/（.*）|\(.*\)/g, '').trim();
      }
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
      ${day.weather ? `
      <div class="drive-stat weather-stat">
        <i class="fa-solid ${day.weather.icon} weather-icon"></i>
        <span>${staticTranslations[currentLang].weather_label}<span class="weather-loc">[${day.weather.location[currentLang]}]</span> <span class="drive-stat-val">${day.weather.summary[currentLang]}</span> <span class="weather-temp-badge">${day.weather.temp[currentLang]}</span></span>
      </div>
      ` : ''}
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

  let currentGroup = null;

  bookingItems.forEach(item => {
    if (item.group !== currentGroup) {
      currentGroup = item.group;
      const groupData = bookingGroups[currentGroup];
      if (groupData) {
        const headerLi = document.createElement('li');
        headerLi.className = 'tracker-group-header';
        headerLi.innerHTML = `<i class="fa-solid ${groupData.icon}"></i> <span>${groupData.title[currentLang]}</span>`;
        container.appendChild(headerLi);
      }
    }

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
  const fullMapBtn = document.getElementById('openFullMapBtn');
  const day = itineraryData.find(d => d.dayNumber === activeDay);
  if (day) {
    if (liveFrame && day.googleMapsEmbedUrl) {
      liveFrame.src = day.googleMapsEmbedUrl;
    }
    if (fullMapBtn && day.googleMapsLink) {
      fullMapBtn.href = day.googleMapsLink;
    }
  }
}

