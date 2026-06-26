// ==========================================================================
// 1. Itinerary Data (Day 1 - Day 7)
// ==========================================================================
const itineraryData = [
  {
    "dayNumber": 1,
    "dayTitle": "洛杉磯 ➔ （中繼休息） ➔ 拉斯維加斯",
    "drivingRoute": "Los Angeles (23944 Francisco Way) ➔ Las Vegas (JW Marriott)",
    "drivingStats": "總車程約 4 - 4.5 小時",
    "googleMapsLink": "https://www.google.com/maps/dir/23944+Francisco+Way,+Valencia,+CA+91354/JW+Marriott+Las+Vegas+Resort+%26+Spa",
    "googleMapsEmbedUrl": "https://maps.google.com/maps?saddr=23944+Francisco+Way,+Valencia,+CA+91354&daddr=JW+Marriott+Las+Vegas+Resort+%26+Spa&output=embed",
    "itinerary": {
      "morning": "08:00 - 10:00 在洛杉磯吃完豐盛早餐後準備出發。10:00 - 12:00 啟程前往拉斯維加斯。",
      "afternoon": "12:00 - 12:45 行駛約2小時後，於途中稍作休息與採買。12:45 - 14:45 繼續上路並完成剩餘的車程。14:45 - 15:45 抵達拉斯維加斯享用午餐。16:00 - 18:00 入住賭城大道附近的 JW Marriott 渡假村並稍作休息。",
      "evening": "18:30 - 20:30 前往距大道約 10 分鐘車程的春山路 (Spring Mountain Road) 亞洲區享用豐盛晚餐。"
    },
    "dining": "午餐：推薦 In-N-Out 漢堡，必點隱藏菜單 Double-Double Animal Style 搭配奶昔 [1, 2]。<br>晚餐：春山路亞洲區的頂級泰國菜 Lotus of Siam、成都Taste，或大獲好評的越南牛肉粉與蒜香花螺 [1, 2]。",
    "tips": "中繼點強烈推薦前往 Costco 購買保溫箱與冰塊，為接下來的公路旅行備妥臨時冰箱 [1, 2]。"
  },
  {
    "dayNumber": 2,
    "dayTitle": "拉斯維加斯 ➔ 11:00 退房 ➔ 太陽馬戲團 Mystère ➔ 錫安國家公園（直達免中繼）",
    "drivingRoute": "JW Marriott Las Vegas ➔ Treasure Island (Mystère 秀) ➔ Zion SpringHill Suites",
    "drivingStats": "車程估計約 2.5 小時",
    "googleMapsLink": "https://www.google.com/maps/dir/JW+Marriott+Las+Vegas+Resort+%26+Spa/Treasure+Island/SpringHill+Suites+by+Marriott+Springdale+Zion+National+Park",
    "googleMapsEmbedUrl": "https://maps.google.com/maps?saddr=JW+Marriott+Las+Vegas+Resort+%26+Spa&daddr=Treasure+Island+to:SpringHill+Suites+by+Marriott+Springdale+Zion+National+Park&output=embed",
    "itinerary": {
      "morning": "08:00 - 10:00 悠閒起床並享用飯店早餐。10:00 - 11:00 整理行李並於 11:00 準時從 JW Marriott 退房。",
      "afternoon": "11:30 - 13:30 享用頂級午餐。14:00 - 16:00 前往金銀島酒店 (Treasure Island) 觀賞太陽馬戲團經典秀 Mystère（※若無下午場，建議調整為 Day 1 晚上觀賞，今日下午改為自由活動，以利提早前往錫安）。16:30 - 18:45 直奔錫安國家公園。",
      "evening": "19:45 - 21:00 (當地時間) 抵達猶他州，入住鄰近公園的 Springdale SpringHill Suites 飯店並享用晚餐。"
    },
    "dining": "早餐：飯店早餐。<br>午餐：提前預約 Caesars Palace 內的 Bacchanal Buffet，或前往 Gordon Ramsay 的地獄廚房品嚐威靈頓牛排 [3, 4].<br>晚餐：Springdale 鎮上的 Oscar's Cafe，推薦份量極大的美味漢堡與三明治 [3, 4]。",
    "tips": "注意時差：猶他州比內華達州快一小時，抵達時約為當地時間晚上 7:45 [3]。<br>住宿推薦鄰近公園的 Springdale SpringHill Suites [3, 4]。<br>演出提示：Mystère 通常為傍晚 19:00 或晚上 21:30 場次。若是預訂晚場，今日開車前往錫安的時間會順延至深夜，請務必注意夜間行車安全（或考慮改為 Day 1 晚間看秀）。"
  },
  {
    "dayNumber": 3,
    "dayTitle": "錫安國家公園全日深度遊（今日連住免退房）",
    "drivingRoute": "SpringHill Suites ➔ The Narrows ➔ SpringHill Suites",
    "drivingStats": "無須長途行車",
    "googleMapsLink": "https://www.google.com/maps/dir/SpringHill+Suites+by+Marriott+Springdale+Zion+National+Park/The+Narrows",
    "googleMapsEmbedUrl": "https://maps.google.com/maps?saddr=SpringHill+Suites+by+Marriott+Springdale+Zion+National+Park&daddr=The+Narrows&output=embed",
    "itinerary": {
      "morning": "08:00 - 10:00 睡飽後在飯店悠閒享用早餐。10:00 - 11:00 悠閒在房間換裝並準備入園裝備 (無須退房)。",
      "afternoon": "11:00 - 15:00 租借電動自行車入園，迎風騎往水上徒步路線 The Narrows 起點體驗徒步。15:00 - 16:00 返回 Springdale 鎮上享用簡單遲午餐。16:30 - 18:30 在飯店放鬆雙腿，並欣賞壯麗的「日照金山」絕美景色。",
      "evening": "19:00 - 20:30 挑選鎮上特色餐廳悠閒用餐，享受國家公園旁寧靜的夜晚。"
    },
    "dining": "早餐：飯店早餐 [3, 4]。<br>午餐：Springdale 鎮上簡單午餐 [3]。<br>晚餐：Springdale 鎮上特色餐廳 [3]。",
    "tips": "今日連住免退房，行程較為彈性放鬆 [3]。強烈推薦租借電動自行車探索錫安國家公園，能有更好的遊園體驗 [3, 4]。"
  },
  {
    "dayNumber": 4,
    "dayTitle": "錫安 ➔ 11:00 退房 ➔ 猶他州肯鎮 (Kanab)",
    "drivingRoute": "SpringHill Suites ➔ Belly of the Dragon ➔ Kanab",
    "drivingStats": "車程約 1 小時",
    "googleMapsLink": "https://www.google.com/maps/dir/SpringHill+Suites+by+Marriott+Springdale+Zion+National+Park/Belly+of+the+Dragon/Kanab",
    "googleMapsEmbedUrl": "https://maps.google.com/maps?saddr=SpringHill+Suites+by+Marriott+Springdale+Zion+National+Park&daddr=Belly+of+the+Dragon+to:Kanab&output=embed",
    "itinerary": {
      "morning": "08:00 - 10:00 享用飯店早餐。10:00 - 11:00 回房休息並整理行李，於 11:00 辦理退房並準備啟程。",
      "afternoon": "11:00 - 12:30 驅車前往肯鎮，途中停留 89 號公路旁的奇特景點「龍之腹 (Belly of the Dragon)」。12:30 - 13:30 抵達肯鎮後享用午餐。13:30 - 17:30 參加 UTV 全地形越野車行程，探訪 Great Chamber 與 Peek-a-boo 峽谷。",
      "evening": "18:00 - 19:30 享用當地鄉村料理晚餐。20:00 入住肯鎮飯店。"
    },
    "dining": "早餐：飯店早餐 [5]。<br>晚餐：推薦 Wild Thyme Cafe、Iron Horse 或 Houston's Trail's End 享用鄉村料理 [5]。<br>甜點：Brown Box Bake Shop 的手工冰淇淋與現烤鐵鍋餅乾 [5]。",
    "tips": "途中務必停留 89 號公路旁的奇特景點「龍之腹」拍照打卡 [5]。<br>住宿推薦：Canyons Boutique Hotel 或當地的套房酒店 [5]。"
  },
  {
    "dayNumber": 5,
    "dayTitle": "肯鎮 ➔ 11:00 退房 ➔ 亞利桑那州佩奇鎮 (Page)",
    "drivingRoute": "Kanab ➔ Page",
    "drivingStats": "車程約 1.5 小時",
    "googleMapsLink": "https://www.google.com/maps/dir/Kanab/Page",
    "googleMapsEmbedUrl": "https://maps.google.com/maps?saddr=Kanab&daddr=Page&output=embed",
    "itinerary": {
      "morning": "08:00 - 10:00 悠閒享用精緻早餐。10:00 - 11:00 整理行李，於 11:00 辦理退房並啟程。",
      "afternoon": "11:00 - 12:30 驅車前往佩奇鎮。12:30 - 13:30 抵達後享用午餐。13:30 - 18:00 遊覽馬蹄灣、包船遊覽包威爾湖，以及 New Wave 沙岩地貌。",
      "evening": "18:30 - 20:00 享用美式 BBQ 晚餐，隨後辦理入住具備湖泊景觀的飯店。"
    },
    "dining": "早餐：飯店早餐 [5]。<br>午餐：推薦 BirdHouse 享用酥脆炸雞 [5]。<br>晚餐：前往 Big John's Texas BBQ 享用牛胸肉與手撕豬肉 [5]。",
    "tips": "本日行程包含免抽籤的 New Wave 沙岩地貌，是非常值得探索的秘境 [5]。<br>住宿建議選擇具備湖泊景觀的 Hyatt Place 或 Days Inn 。"
  },
  {
    "dayNumber": 6,
    "dayTitle": "佩奇鎮 ➔ 11:00 退房 ➔ 大峽谷 ➔ 金曼 (Kingman)",
    "drivingRoute": "Page ➔ Grand Canyon ➔ Kingman",
    "drivingStats": "車程約 2.5 小時 (前往大峽谷) + 2.5 小時 (前往金曼)",
    "googleMapsLink": "https://www.google.com/maps/dir/Page/Grand+Canyon+National+Park/Kingman",
    "googleMapsEmbedUrl": "https://maps.google.com/maps?saddr=Page&daddr=Grand+Canyon+National+Park+to:Kingman&output=embed",
    "itinerary": {
      "morning": "08:00 - 10:00 享用早餐與優質咖啡。10:00 - 11:00 整理行李，於 11:00 辦理退房並準備啟程。",
      "afternoon": "11:00 - 13:30 沿公路直達大峽谷國家公園。13:30 - 15:30 參觀大峽谷瞭望塔與馬瑟角，並於園區內享用午餐。15:30 - 18:00 驅車前往 66 號公路上的歷史重鎮金曼 (Kingman)。",
      "evening": "18:30 - 20:00 在金曼歷史小鎮享用美式晚餐並辦理入住。"
    },
    "dining": "早餐：推薦 Rustic Thistle 或買 Lake Powell Espresso 優質咖啡搭配 。<br>午餐：大峽谷園區內的 El Tovar Dining Room 或 Harvey House Café 。<br>晚餐：金曼當地的美式餐廳或歷史牛排館。",
    "tips": "離開大峽谷後，沿 66 號公路前往金曼 Kingman 住宿，符合直達不設中繼點標準，且能體驗復古公路風情。"
  },
  {
    "dayNumber": 7,
    "dayTitle": "金曼 (Kingman) ➔ 11:00 退房 ➔ （中繼休息） ➔ 洛杉磯住家",
    "drivingRoute": "Kingman ➔ Los Angeles (23944 Francisco Way)",
    "drivingStats": "總車程約 4.5 - 5 小時",
    "googleMapsLink": "https://www.google.com/maps/dir/Kingman/23944+Francisco+Way,+Valencia,+CA+91354",
    "googleMapsEmbedUrl": "https://maps.google.com/maps?saddr=Kingman&daddr=23944+Francisco+Way,+Valencia,+CA+91354&output=embed",
    "itinerary": {
      "morning": "08:00 - 10:00 在金曼睡到自然醒，享用悠閒的美式早午餐。10:00 - 11:00 感受 66 號公路復古氛圍並整理行李，於 11:00完成最後一次退房。",
      "afternoon": "11:00 - 13:30 踏上返程。13:30 - 14:30 由於單日車程較長，安排於交流道附近稍作休息與用餐。14:30 - 17:00 完成最後路段返回洛杉磯 Valencia 住家，為這趟完美精華之旅畫下句點。",
      "evening": "抵達洛杉磯 Valencia 住家，結束豐富的七日大環線公路旅行。"
    },
    "dining": "早午餐：金曼小鎮當地悠閒美式早午餐 。<br>午餐：返程途中交流道附近餐廳簡單用餐。",
    "tips": "單日車程較長，返回 Santa Clarita/Valencia 的車程約 5 小時，務必安排中繼休息以保持行車安全與舒適度 。"
  }
];

// ==========================================================================
// 1.1 Google Maps List Saved Locations (2026_07_Summer Trip)
// ==========================================================================
const savedLocationsData = [
  {
    name: "23944 Francisco Way",
    type: "起點 / 終點 (住家)",
    typeKey: "home",
    icon: "fa-house",
    lat: 34.4651149,
    lng: -118.5602478,
    days: "DAY 1 出發點 / DAY 7 終點",
    embedUrl: "https://maps.google.com/maps?q=34.4651149,-118.5602478&z=15&output=embed"
  },
  {
    name: "JW Marriott Las Vegas Resort & Spa",
    type: "奢華渡假村 (住宿)",
    typeKey: "hotel",
    icon: "fa-hotel",
    lat: 36.1758508,
    lng: -115.2911168,
    days: "DAY 1 - 2 拉斯維加斯住宿",
    embedUrl: "https://maps.google.com/maps?q=36.1758508,-115.2911168&z=15&output=embed"
  },
  {
    name: "Treasure Island (Mystère 劇場)",
    type: "經典馬戲團秀 (景點)",
    typeKey: "sight",
    icon: "fa-eye",
    lat: 36.1246743,
    lng: -115.1721528,
    days: "DAY 2 下午行程",
    embedUrl: "https://maps.google.com/maps?q=36.1246743,-115.1721528&z=15&output=embed"
  },
  {
    name: "SpringHill Suites by Marriott Springdale Zion National Park",
    type: "國家公園精品酒店 (住宿)",
    typeKey: "hotel",
    icon: "fa-hotel",
    lat: 37.1844714,
    lng: -113.0006139,
    days: "DAY 2 - 3 錫安國家公園住宿",
    embedUrl: "https://maps.google.com/maps?q=37.1844714,-113.0006139&z=15&output=embed"
  },
  {
    name: "The Narrows",
    type: "錫安一線天涉水步道 (景點)",
    typeKey: "sight",
    icon: "fa-mountain",
    lat: 37.3050051,
    lng: -112.9491162,
    days: "DAY 3 深度健行行程",
    embedUrl: "https://maps.google.com/maps?q=37.3050051,-112.9491162&z=15&output=embed"
  },
  {
    name: "Kanab",
    type: "猶他州肯鎮 (中繼 / 住宿)",
    typeKey: "city",
    icon: "fa-map-pin",
    lat: 37.0474855,
    lng: -112.5263145,
    days: "DAY 4 越野行程與住宿",
    embedUrl: "https://maps.google.com/maps?q=37.0474855,-112.5263145&z=15&output=embed"
  },
  {
    name: "Page",
    type: "亞利桑那州佩奇鎮 (中繼 / 住宿)",
    typeKey: "city",
    icon: "fa-map-pin",
    lat: 36.9147222,
    lng: -111.4558333,
    days: "DAY 5 羚羊谷/包威爾湖住宿",
    embedUrl: "https://maps.google.com/maps?q=36.9147222,-111.4558333&z=15&output=embed"
  },
  {
    name: "Grand Canyon National Park",
    type: "大峽谷國家公園 (景點)",
    typeKey: "sight",
    icon: "fa-tree",
    lat: 36.2678855,
    lng: -112.3535253,
    days: "DAY 6 壯麗峽谷遊覽",
    embedUrl: "https://maps.google.com/maps?q=36.2678855,-112.3535253&z=15&output=embed"
  },
  {
    name: "Kingman",
    type: "66號公路歷史小鎮 (住宿)",
    typeKey: "city",
    icon: "fa-map-pin",
    lat: 35.1912977,
    lng: -114.0522845,
    days: "DAY 6 住宿 / DAY 7 出發點",
    embedUrl: "https://maps.google.com/maps?q=35.1912977,-114.0522845&z=15&output=embed"
  }
];

// ==========================================================================
// 2. Booking Tracker Configuration
// ==========================================================================
const bookingItems = [
  { id: 'costco_supplies', label: 'Costco 行前採購 (保冰桶、飲料、冰塊)', estimate: 120 },
  { id: 'las_vegas_hotel', label: 'Las Vegas 酒店預訂 (2晚 / 雙人房x2)', estimate: 700 },
  { id: 'hells_kitchen', label: "地獄廚房 Hell's Kitchen 晚餐預約 (5人)", estimate: 450 },
  { id: 'bacchanal_buffet', label: 'Caesars Bacchanal Buffet 預約 (5人)', estimate: 500 },
  { id: 'mystere_tickets', label: '太陽馬戲團 Mystère 門票預訂 (5人)', estimate: 400 },
  { id: 'zion_ebike', label: 'Zion 錫安國家公園 E-Bike 租借預約 (5台)', estimate: 400 },
  { id: 'springdale_hotel', label: 'Springdale 溫泉酒店預訂 (1晚 / 雙人房x2)', estimate: 450 },
  { id: 'kanab_utv', label: 'Kanab UTV 荒漠越野行程預訂 (5人/6人座車)', estimate: 550 },
  { id: 'kanab_hotel', label: 'Kanab 按摩池酒店預訂 (1晚 / 雙人房x2)', estimate: 300 },
  { id: 'lake_powell_boat', label: 'Page 鮑威爾湖包船/遊船預訂 (5人)', estimate: 450 },
  { id: 'page_hotel', label: 'Page 酒店預訂 (1晚 / 雙人房x2)', estimate: 360 },
  { id: 'national_park_pass', label: '美西國家公園年票實體卡 (按車收費，1張即可)', estimate: 80 },
  { id: 'route66_hotel', label: 'Route 66 歷史小鎮酒店預訂 (1晚 / 雙人房x2)', estimate: 240 }
];

// ==========================================================================
// 3. Packing Checklist Configuration
// ==========================================================================
const packingData = {
  hiking: {
    title: '溯溪與徒步健行',
    icon: 'fa-person-hiking',
    items: ['涉水水鞋 / 溯溪鞋', '氯丁橡膠防沙襪 (Neo Socks)', '登山杖 / 溯溪支撐木棍', '大容量雙肩水袋包 (Hydration Pack)', '手機雙重防水袋']
  },
  sunProtection: {
    title: '防曬與氣候防護',
    icon: 'fa-sun',
    items: ['SPF 50+ 防曬乳 & 防曬護唇膏', '運動型偏光太陽眼鏡', '遮陽帽 (寬邊帽或棒球帽)', '排汗速乾短袖/短褲', '輕薄長袖防曬外套', '保暖衛衣/防風衣 (沙漠早晚溫差大)']
  },
  electronics: {
    title: '車載與電子裝備',
    icon: 'fa-car-side',
    items: ['強磁性車載手機架 (導航必備)', '車載點煙器轉換器 & 充電線', '大容量防水行動電源', '離線地圖下載 (Google Maps / AllTrails)', '相機 / GoPro 運動相機']
  },
  daily: {
    title: '日常證件與備品',
    icon: 'fa-id-card',
    items: ['國家公園年票實體卡', '美國駕照 (自駕證件)', '雙重備用信用卡', 'Costco 會員卡', '車載大包濕紙巾 & 乾洗手']
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
  renderDayTabs();
  renderDayDetails(activeDay);
  renderBookingChecklist();
  renderPackingList();
  renderSavedLocations();
  updateExplorerMap();
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
        packingStatus[item] = false;
      });
    });
  }
}

function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
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
    
    let shortTitle = day.dayTitle;
    if (day.dayTitle.includes(' ➔ ')) {
      const parts = day.dayTitle.split(' ➔ ');
      const start = parts[0].replace(/（.*）|\(.*\)/g, '').trim();
      let end = parts[parts.length - 1].replace(/（.*）|\(.*\)/g, '').trim();
      shortTitle = `${start} ➔ ${end}`;
    } else {
      shortTitle = day.dayTitle.replace(/（.*）|\(.*\)/g, '').trim();
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

  container.innerHTML = `
    <div class="detail-header">
      <span class="detail-day-num">DAY 0${day.dayNumber}</span>
      <h2 class="detail-day-title">${day.dayTitle}</h2>
    </div>

    <div class="drive-info-bar">
      <div class="drive-stat">
        <i class="fa-solid fa-route"></i>
        <span>路線：<span class="drive-stat-val">${day.drivingRoute}</span></span>
      </div>
      <div class="drive-stat">
        <i class="fa-solid fa-gauge-high"></i>
        <span>統計：<span class="drive-stat-val">${day.drivingStats}</span></span>
      </div>
      <div class="drive-stat">
        <a href="${day.googleMapsLink}" target="_blank" class="drive-map-link">
          <i class="fa-solid fa-location-arrow"></i> 開啟 Google Maps 導航
        </a>
      </div>
    </div>

    <div class="timeline">
      <div class="timeline-period">
        <div class="period-header morning">
          <i class="fa-solid fa-sun-rising"></i> 上午行程 (Morning)
        </div>
        <p class="period-text">${day.itinerary.morning}</p>
      </div>
      <div class="timeline-period">
        <div class="period-header afternoon">
          <i class="fa-solid fa-sun"></i> 下午行程 (Afternoon)
        </div>
        <p class="period-text">${day.itinerary.afternoon}</p>
      </div>
      <div class="timeline-period">
        <div class="period-header evening">
          <i class="fa-solid fa-moon"></i> 晚間行程 (Evening)
        </div>
        <p class="period-text">${day.itinerary.evening}</p>
      </div>
    </div>

    <div class="food-panel">
      <h4><i class="fa-solid fa-utensils"></i> 美食與餐飲推薦</h4>
      <p class="food-text">${day.dining}</p>
    </div>

    <div class="tip-panel">
      <h4><i class="fa-solid fa-lightbulb"></i> 行程貼士 & 住宿建議</h4>
      <p class="tip-text">${day.tips}</p>
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
        <label for="chk-${item.id}" class="tracker-label">${item.label}</label>
      </div>
      <input type="number" 
             class="tracker-cost-input" 
             id="cost-${item.id}" 
             placeholder="$${item.estimate}" 
             value="${actualCost}" 
             min="0"
             aria-label="${item.label}實際金額">
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

  Object.keys(packingData).forEach(catKey => {
    const category = packingData[catKey];
    const catDiv = document.createElement('div');
    catDiv.className = 'packing-category';

    catDiv.innerHTML = `
      <h4><i class="fa-solid ${category.icon}"></i> ${category.title}</h4>
      <ul class="packing-item-list"></ul>
    `;

    const listUl = catDiv.querySelector('.packing-item-list');

    category.items.forEach((item, idx) => {
      const isChecked = packingStatus[item] || false;
      const li = document.createElement('li');
      li.className = 'packing-item';
      const inputId = `pack-${catKey}-${idx}`;

      li.innerHTML = `
        <input type="checkbox" id="${inputId}" ${isChecked ? 'checked' : ''}>
        <label for="${inputId}">${item}</label>
      `;

      const checkbox = li.querySelector('input[type="checkbox"]');
      checkbox.addEventListener('change', () => {
        packingStatus[item] = checkbox.checked;
        saveToLocalStorage('so_packing_status', packingStatus);
        updatePackingStats();
      });

      listUl.appendChild(li);
    });

    grid.appendChild(catDiv);
  });

  updatePackingStats();
}

function updatePackingStats() {
  const totalItems = Object.keys(packingStatus).length;
  const checkedItems = Object.values(packingStatus).filter(Boolean).length;
  const countTextEl = document.getElementById('packingCountText');
  if (countTextEl) countTextEl.innerText = `${checkedItems} / ${totalItems} 已完成`;
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

// ==========================================================================
// 11. Google Maps Saved Locations Rendering & Interaction
// ==========================================================================
function renderSavedLocations() {
  const container = document.getElementById('locationsGrid');
  if (!container) return;
  container.innerHTML = '';

  savedLocationsData.forEach(loc => {
    const card = document.createElement('div');
    card.className = 'location-card';

    card.innerHTML = `
      <div class="location-info">
        <div class="location-icon-wrapper">
          <i class="fa-solid ${loc.icon}"></i>
        </div>
        <div class="location-details">
          <span class="location-type">${loc.type}</span>
          <span class="location-name">${loc.name}</span>
        </div>
      </div>
      <div class="location-meta">
        <span class="location-day-badge">${loc.days}</span>
        <button class="location-view-btn">
          <i class="fa-solid fa-map-location-dot"></i> 在地圖中查看
        </button>
      </div>
    `;

    const viewBtn = card.querySelector('.location-view-btn');
    viewBtn.addEventListener('click', () => {
      const liveFrame = document.getElementById('liveMapIframe');
      if (liveFrame) {
        liveFrame.src = loc.embedUrl;
      }
      
      const mapSection = document.querySelector('.maps-explorer');
      if (mapSection) {
        mapSection.scrollIntoView({ behavior: 'smooth' });
      }
    });

    container.appendChild(card);
  });
}
