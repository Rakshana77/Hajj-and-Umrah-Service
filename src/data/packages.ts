export interface Package {
  id: string;
  name: string;
  type: 'Umrah' | 'Hajj';
  category: 'Budget' | 'Standard' | 'Premium' | 'Deluxe' | 'VIP';
  season: 'Regular' | 'Ramadan' | 'Hajj Season';
  shortDescription: string;
  fullDescription: string;
  price: number;
  distance: number; // in meters
  duration: string;
  departureCity: string;
  image: string;
  bannerImage: string;
  gallery: string[];
  features: string[]; // for listing cards
  inclusions: {
    visa: string;
    hotelMakkah: string;
    hotelMadinah: string;
    distanceHaram: string;
    food: string;
    transport: string;
    ziyarat: string;
  };
  popular?: boolean;
  limitedSeats?: boolean;
  seatsLeft?: number;
}

export const packages: Package[] = [
  {
    id: 'ramadan-special-premium',
    name: 'Ramadan Special',
    type: 'Umrah',
    category: 'Premium',
    season: 'Ramadan',
    shortDescription: 'Perform Umrah in the most blessed month of the year with premium proximity.',
    fullDescription: 'Experience the spiritual pinnacle of the year with our Ramadan Special. This package is curated for pilgrims who prioritize accessibility to the Haram for night prayers and a comfortable environment for fasting.',
    price: 110000,
    distance: 200,
    duration: '10 Days',
    departureCity: 'Mumbai / Delhi',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEw4gl2Oc7NH1wSl-cpeWOpt7BFun8a44Nyh26hB7QsjlSTUEJFG5EzIeHzi42InBu0zMJ_rlAC5jk2PZkeXM0uKiOr5-TbSBP1tYDZmQqIpzq0TxZWiID6UTliYXVaTGORQzMoFmDZrXoj2pm3k3x01D0O55Cg7tdqWIdTaooTzT5PgB3z8h3CRsexc0o7xw2-RmvCfmLzwvHeOSc4rUpud_Wr-UKaERbyGOrc7dxzUE-lSnIg6Zx7iVScYMpW5MP6KAEmsewSKc',
    bannerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEw4gl2Oc7NH1wSl-cpeWOpt7BFun8a44Nyh26hB7QsjlSTUEJFG5EzIeHzi42InBu0zMJ_rlAC5jk2PZkeXM0uKiOr5-TbSBP1tYDZmQqIpzq0TxZWiID6UTliYXVaTGORQzMoFmDZrXoj2pm3k3x01D0O55Cg7tdqWIdTaooTzT5PgB3z8h3CRsexc0o7xw2-RmvCfmLzwvHeOSc4rUpud_Wr-UKaERbyGOrc7dxzUE-lSnIg6Zx7iVScYMpW5MP6KAEmsewSKc',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAMakWnZcUsB2wqjn7Z8TuOLcYLA9wuWre215J1hwiXDgrBFYhESC_2sdnMLb0tF9KXaJUMhHWCQ0RoLcIbji3elBGlyTH_5K9GIl042hHmx4XetuEjzUfVb1eaAkRinG5sSuFSU-RC_q67RHalPyHRauW3Jlg1Wc1Hjpz9vLCEnGK1gPAWHuFEefxPS39p4v42gkMJG5H-d_UScJpwF0lNS2IIWHx4ifdJCDuknaTw_ikSlM5LMNdTbN3UHM3r7fQ9wHLTOl_WTvs'
    ],
    features: ['Visa Included', 'Premium Hotel', '200m from Haram', 'Suhoor & Iftar'],
    inclusions: {
      visa: 'Priority Ramadan Umrah Visa',
      hotelMakkah: 'Premium Hotel (Near Haram)',
      hotelMadinah: 'Standard Hotel (Near Masjid Nabawi)',
      distanceHaram: '200 Meters from Masjid Al Haram',
      food: 'Special Suhoor & Iftar Buffets',
      transport: 'Shared AC Transport',
      ziyarat: 'Historical Site Tours'
    },
    popular: true,
    limitedSeats: true,
    seatsLeft: 5
  },
  {
    id: 'regular-umrah-budget',
    name: 'Regular Umrah Economy',
    type: 'Umrah',
    category: 'Budget',
    season: 'Regular',
    shortDescription: 'Affordable and spiritual journey for budget-conscious pilgrims.',
    fullDescription: 'Our Regular Umrah package provides all the essentials for a successful pilgrimage without the luxury price tag. We ensure reliable transport, clean accommodation, and spiritual guidance.',
    price: 85000,
    distance: 800,
    duration: '15 Days',
    departureCity: 'Mumbai',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAofHlpqv5M6ysy-oUa04tSSxJxvleTrmCf07NHab_GmOgjh800R44f9ApEI-lbo6gnzfzi2EClaKUURZpbIrdvhK2V74MYtC5TioBvonrq-nIivwVwqh59jUYBWKVdk299A18g4yXE-_VUmC68pnaxRwJ4hgqd_Dw4mN-roN7L6J6Ks9A1MH7ZMJxS3m_8kZAvU24KzS4dfWJ6alGPV50eeZX83TwXgELZg3qFetj6edDK9zJuU-1I0hyQNG6A0gzZR5A814R8oOI',
    bannerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAofHlpqv5M6ysy-oUa04tSSxJxvleTrmCf07NHab_GmOgjh800R44f9ApEI-lbo6gnzfzi2EClaKUURZpbIrdvhK2V74MYtC5TioBvonrq-nIivwVwqh59jUYBWKVdk299A18g4yXE-_VUmC68pnaxRwJ4hgqd_Dw4mN-roN7L6J6Ks9A1MH7ZMJxS3m_8kZAvU24KzS4dfWJ6alGPV50eeZX83TwXgELZg3qFetj6edDK9zJuU-1I0hyQNG6A0gzZR5A814R8oOI',
    gallery: [],
    features: ['Visa Support', 'Economy Hotel', 'Indian Buffet', 'Guided Ziyarat'],
    inclusions: {
      visa: 'Umrah Visa Processing',
      hotelMakkah: 'Economy Hotel (800m distance)',
      hotelMadinah: 'Standard Hotel',
      distanceHaram: '800 Meters',
      food: '3 Meals Indian Cuisine',
      transport: 'AC Bus',
      ziyarat: 'Complete Historical Tour'
    }
  },
  {
    id: 'deluxe-umrah-luxury',
    name: 'Deluxe Royal Umrah',
    type: 'Umrah',
    category: 'Deluxe',
    season: 'Regular',
    shortDescription: 'Ultimate luxury with stay at 5-star hotels directly facing the Haram.',
    fullDescription: 'The Deluxe Royal Umrah is for those seeking a prestigious and effortless experience. Stay at world-class hotels like Hilton or Fairmont, with personalized concierge services.',
    price: 155000,
    distance: 50,
    duration: '12 Days',
    departureCity: 'All Major Cities',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkOddjpzhvK6iwJhQvWYsNxbm2zQFcZzrsXVCXtHkrl45fb59dHT2g2dLjAAayKv0_-w6XOunES0CayqV-rqVlmo24TjSykRQl7bnmdvE9CLWKpiOKsCpIN1YFSZjkK3vjsWyb5QVCjP14ZYhz8JiybptJ5oOfNDcoJHX_Qu2VlYC-pVnaoTsA6FGXU_WaBCs-bUfR_235jFs9v2aphfZDgzNW85kZhjlrMubTrtizG4jqiA8X6i_SeQNOF3T8ngZVNU34P4VGB4',
    bannerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhkOddjpzhvK6iwJhQvWYsNxbm2zQFcZzrsXVCXtHkrl45fb59dHT2g2dLjAAayKv0_-w6XOunES0CayqV-rqVlmo24TjSykRQl7bnmdvE9CLWKpiOKsCpIN1YFSZjkK3vjsWyb5QVCjP14ZYhz8JiybptJ5oOfNDcoJHX_Qu2VlYC-pVnaoTsA6FGXU_WaBCs-bUfR_235jFs9v2aphfZDgzNW85kZhjlrMubTrtizG4jqiA8X6i_SeQNOF3T8ngZVNU34P4VGB4',
    gallery: [],
    features: ['5-Star Hotel', 'Private Transport', 'VIP Concierge', 'Prime Location'],
    inclusions: {
      visa: 'Premium Umrah Visa',
      hotelMakkah: 'Hilton Suites / Fairmont Makkah',
      hotelMadinah: 'Movenpick Anwar Al Madinah',
      distanceHaram: '0-50 Meters (Walking Distance)',
      food: 'International & Indian Buffet',
      transport: 'Private GMC / Luxury Van',
      ziyarat: 'VIP Guided Historical Sites'
    }
  },
  {
    id: 'hajj-2026-economy',
    name: 'Hajj 2026 Economy Plus',
    type: 'Hajj',
    category: 'Budget',
    season: 'Hajj Season',
    shortDescription: 'Fulfill your sacred duty with our most affordable Hajj package.',
    fullDescription: 'Our Economy Hajj package focuses on the essentials of the pilgrimage, providing reliable logistics and spiritual guidance to ensure your Hajj is performed correctly and comfortably.',
    price: 450000,
    distance: 1200,
    duration: '40 Days',
    departureCity: 'All Major Cities',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVwKI_ZBdsm7hQMNZYidAMibMAREIAijffO5tdyep9EDFzl1vmawgDrQMHqGHX5JIRaCKMkSVf_xMsXIo-FMJ5fJYu4CAJ4QRYJnBg2dwWxmQsV4ktCmZUbHVagFoxxfKFZuQ5td563fTSQ_HpT9OXS-6DbzoUIqaj0t5d6wO3RdAn9gcO5Wnj-Z2aqLEMHQ8rp0k9HQlkctY6HU5GqW7fB6gLdwjw5eSKtGNpqDhhB_m3Opr2vVMEvKudTqmNc7hhC_V8XbW36yU',
    bannerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVwKI_ZBdsm7hQMNZYidAMibMAREIAijffO5tdyep9EDFzl1vmawgDrQMHqGHX5JIRaCKMkSVf_xMsXIo-FMJ5fJYu4CAJ4QRYJnBg2dwWxmQsV4ktCmZUbHVagFoxxfKFZuQ5td563fTSQ_HpT9OXS-6DbzoUIqaj0t5d6wO3RdAn9gcO5Wnj-Z2aqLEMHQ8rp0k9HQlkctY6HU5GqW7fB6gLdwjw5eSKtGNpqDhhB_m3Opr2vVMEvKudTqmNc7hhC_V8XbW36yU',
    gallery: [],
    features: ['Hajj Visa', 'Mina Tents Included', 'Spiritual Scholars', 'Group Transport'],
    inclusions: {
      visa: 'Hajj Visa & Insurance',
      hotelMakkah: 'Economy Standard (Shifting)',
      hotelMadinah: 'Standard Hotel',
      distanceHaram: '1.2km (Shuttle Provided)',
      food: 'Indian Style Full Board',
      transport: 'Govt. Approved Hajj Coaches',
      ziyarat: 'Major Holy Sites Tours'
    }
  },
  {
    id: 'hajj-2026-premium',
    name: 'Hajj 2026 Premium Series',
    type: 'Hajj',
    category: 'Premium',
    season: 'Hajj Season',
    shortDescription: 'High-quality Hajj experience with closer proximity in holy sites.',
    fullDescription: 'The Premium Hajj Series offers a balance of comfort and devotion. With better Maktab categories in Mina and closer hotels in the Harams, it’s designed for a smoother journey.',
    price: 650000,
    distance: 500,
    duration: '35 Days',
    departureCity: 'All Major Cities',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf6Qc_zCiI6TJ375gCkSZh4sGYrPPiDe6VYf94i5Edqpr9NC7oJdX1-xaa196kWznKrUp-9sYGF5w7Uhdzw_jLE_GERpzaIIp1j6n3lhEC0MCd98_9HyqZDvzFjSrZy_9meFLbiRID7JJurkYW-crAZeN52Vmljy61r1M558CBpkiXOqVATrcIQ90BvswNS8BTTARS54tOjnwMSRF7wNDmDLMtsln7IvsGGv3AZhjbUeU71xUzVXDjCG-yWwwfl023TvIQdww5OIY',
    bannerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf6Qc_zCiI6TJ375gCkSZh4sGYrPPiDe6VYf94i5Edqpr9NC7oJdX1-xaa196kWznKrUp-9sYGF5w7Uhdzw_jLE_GERpzaIIp1j6n3lhEC0MCd98_9HyqZDvzFjSrZy_9meFLbiRID7JJurkYW-crAZeN52Vmljy61r1M558CBpkiXOqVATrcIQ90BvswNS8BTTARS54tOjnwMSRF7wNDmDLMtsln7IvsGGv3AZhjbUeU71xUzVXDjCG-yWwwfl023TvIQdww5OIY',
    gallery: [],
    features: ['Category B Maktab', '4-Star Hotels', 'Full Buffet', 'Scholars On-call'],
    inclusions: {
      visa: 'Hajj Visa Processing',
      hotelMakkah: '4-Star (Non-Shifting)',
      hotelMadinah: '4-Star (Front of Markazia)',
      distanceHaram: '500 Meters',
      food: 'Buffet Meals Indian & Continental',
      transport: 'Luxury Buses',
      ziyarat: 'Extended Historical Tours'
    },
    popular: true
  },
  {
    id: 'hajj-2026-vip',
    name: 'Hajj 2026 VIP Majesty',
    type: 'Hajj',
    category: 'VIP',
    season: 'Hajj Season',
    shortDescription: 'The pinnacle of Hajj service. 5-star hotels, VIP tents, and GMC travel.',
    fullDescription: 'Our VIP Majesty package is for those who require the absolute best. Stay in the Clock Tower, enjoy Category A VIP tents in Mina, and travel in private luxury vehicles throughout.',
    price: 950000,
    distance: 50,
    duration: '25 Days',
    departureCity: 'All Major Cities',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhER8qelORPB2_Qmc9Mkif1atrniJxfSv7jyFgIZBT1h4ayie9u-CfmOGI7z7hXyiKj3EzlmcmjnrhZiQxOVZ1C8qjXytqPUYxG5SB219NIf8WKDiMAuNrFo5XmzNwo9YMXt_TQGq36PIO9cYgjLkHr6YOV0wlEJ6dBah-KdNTsSLiz-HVxgufzMmHb-Y4qgYkXFjhXAONitux_4j2-apT-zdcEG0Pg8G7OaduVVt_2qSLw0UOQrkukK2pXbNVj-Qn0z_btrA-fVo',
    bannerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhER8qelORPB2_Qmc9Mkif1atrniJxfSv7jyFgIZBT1h4ayie9u-CfmOGI7z7hXyiKj3EzlmcmjnrhZiQxOVZ1C8qjXytqPUYxG5SB219NIf8WKDiMAuNrFo5XmzNwo9YMXt_TQGq36PIO9cYgjLkHr6YOV0wlEJ6dBah-KdNTsSLiz-HVxgufzMmHb-Y4qgYkXFjhXAONitux_4j2-apT-zdcEG0Pg8G7OaduVVt_2qSLw0UOQrkukK2pXbNVj-Qn0z_btrA-fVo',
    gallery: [],
    features: ['Clock Tower Stay', 'Category A VIP Mina', 'Private GMC', 'Butler Service'],
    inclusions: {
      visa: 'Priority VIP Hajj Visa',
      hotelMakkah: 'Fairmont / Raffles Makkah',
      hotelMadinah: 'Oberoi Madinah',
      distanceHaram: '0 Meters (Inside Haram Complex)',
      food: 'Gourmet 24/7 Catering',
      transport: 'Private GMC Fleet',
      ziyarat: 'VIP Guided Scholar-led Tours'
    },
    limitedSeats: true,
    seatsLeft: 3
  }
];
