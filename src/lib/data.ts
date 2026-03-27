export const brand = {
  name: "Lees Cafe",
  nameKo: "리스카페",
  tagline: "캐주얼 아메리칸 다이너",
  instagram: "@leesfamouscafe",
  instagramUrl: "https://www.instagram.com/leesfamouscafe/",
  foundedYear: 2020,
  story:
    "2020년 판교 백현동 작은 골목에서 시작한 캐주얼 아메리칸 다이너. 샌프란시스코의 활기와 뉴잉글랜드의 정성을 담아, 넉넉하고 따뜻한 미 서부식 한 끼를 대접합니다.",
  reviewQuote:
    '"미국 감성 제대로 나는 분위기. 보이는 것보다 양이 엄청나게 많아요 — 또 갈 의향이 있어요."',
};

export const menus = [
  {
    id: 1,
    name: "홈메이드 클램 차우더",
    nameEn: "Homemade Clam Chowder",
    desc: "뉴잉글랜드 스타일로 매일 직접 끓이는 클래식 차우더. 마늘빵과 함께 나옵니다.",
    category: "브런치",
    tag: "Best",
    image: "/menu/menu-01-chowder.jpg",
  },
  {
    id: 2,
    name: "카페 라자냐",
    nameEn: "Cafe Lasagna",
    desc: "리스카페 시그니처 메뉴. 층층이 쌓아 올린 미트 라자냐, 넉넉한 한 접시.",
    category: "메인",
    tag: "Signature",
    image: "/menu/menu-02-lasagna.jpg",
  },
  {
    id: 3,
    name: "쉬림프 보드카 마카로니",
    nameEn: "Shrimp Vodka Macaroni",
    desc: "탱글한 새우와 상큼한 보드카 로제 소스. 리뷰어들이 가장 자주 재주문하는 메뉴.",
    category: "메인",
    tag: "Popular",
    image: "/menu/menu-03-shrimp-pasta.jpg",
  },
  {
    id: 4,
    name: "미트볼 & 갈릭 라이스",
    nameEn: "Meatball & Garlic Rice",
    desc: "안에서 치즈가 흘러나오는 수제 미트볼. 갈릭 라이스와 함께.",
    category: "메인",
    tag: "",
    image: "/menu/menu-04-meatball.jpg",
  },
  {
    id: 5,
    name: "샌프란 스타일 갈릭 누들",
    nameEn: "San Francisco Garlic Noodles",
    desc: "해장을 부르는 얼큰한 육수에 쫄깃한 오징어가 올라간 갈릭 누들.",
    category: "메인",
    tag: "",
    image: "/menu/menu-05-garlic-noodle.jpg",
  },
  {
    id: 6,
    name: "찹 샐러드",
    nameEn: "Chop Salad",
    desc: "재료가 넘칠 정도로 가득 담긴 찹 샐러드. 상큼하고 안느끼한 한 그릇.",
    category: "브런치",
    tag: "Must",
    image: "/menu/menu-06-chop-salad.jpg",
  },
];

export const locations = [
  {
    id: "pangyo",
    name: "판교점",
    badge: "본점",
    color: "burgundy" as const,
    desc: "백현동 카페거리, 리스카페가 시작된 곳",
    address: "경기 성남시 분당구 판교역로2번길 29 1층",
    addressShort: "판교역로2번길 29",
    hours: "수~일 11:00 – 16:00",
    hoursNote: "월·화 정기 휴무",
    parking: "백현동 공영주차장 이용",
    phone: "",
    naverUrl: "https://map.naver.com/p/search/리스카페 판교",
    features: ["테라스 좌석", "현장 웨이팅"],
  },
  {
    id: "jeongja",
    name: "정자점",
    badge: "",
    color: "forest" as const,
    desc: "정자역 도보 2분, 파라곤 건물",
    address: "경기 성남시 분당구 정자일로 210 120호",
    addressShort: "정자일로 210 120호",
    hours: "매일 10:00 – 20:00",
    hoursNote: "라스트오더 19:00",
    parking: "동양 정자 파라곤 아파트 지하주차장",
    phone: "",
    naverUrl: "https://map.naver.com/p/search/리스카페 정자",
    features: ["연중무휴", "2시간 주차 지원"],
  },
  {
    id: "yeouido",
    name: "여의도점",
    badge: "New",
    color: "burgundy" as const,
    desc: "브라이튼 여의도 1층, 더현대서울 맞은편",
    address: "서울 영등포구 국제금융로 39 판매시설동 1층 124~5호",
    addressShort: "국제금융로 39 판매시설동 1층",
    hours: "매일 10:00 – 21:15",
    hoursNote: "라스트오더 20:30 / 브레이크타임 없음",
    parking: "브라이튼 여의도 지하주차장 (4만원 이상 1시간, 7만원 이상 2시간)",
    phone: "0507-1455-6337",
    naverUrl: "https://map.naver.com/p/search/리스카페 여의도",
    features: ["연중무휴", "테이블링 현장대기"],
  },
];

export const visitGuide = [
  {
    icon: "clock",
    title: "권장 방문 시간",
    desc: "오전 11시 이전 또는 오후 12시 30분(점심 1회전 종료) 이후 방문 시 대기 시간을 최소화할 수 있습니다.",
  },
  {
    icon: "users",
    title: "바 좌석 우선 배정",
    desc: "2인 이하 방문 시 바(Bar) 좌석 이용에 동의하시면 일반 대기열과 무관하게 빠른 입장이 가능합니다.",
  },
  {
    icon: "building",
    title: "지점별 대기 시스템",
    desc: "판교점·정자점은 매장 현장 대기 등록, 여의도점은 테이블링(Tabling) 시스템을 통한 현장 대기 접수입니다.",
  },
  {
    icon: "utensils",
    title: "주문 기준 및 제공량",
    desc: "매장 내 취식 시 1인 1메뉴 주문이 기본이며, 모든 메인 디쉬는 일반적인 1인분 기준을 초과하는 넉넉한 양으로 제공됩니다.",
  },
];

export const spaceFeatures = [
  { icon: "music", title: "빈티지 팝 & 재즈", desc: "경쾌한 빈티지 팝이 채우는 활기찬 다이너 공간" },
  { icon: "sun", title: "브런치 타임", desc: "햇살 좋은 낮, 넉넉한 미 서부식 브런치 한 끼" },
  { icon: "gem", title: "다이너 디테일", desc: "미국 다이너 감성의 세심한 소품과 인테리어" },
  { icon: "sparkles", title: "디너 타임", desc: "따뜻한 조명과 친절한 에너지가 채우는 저녁" },
];
