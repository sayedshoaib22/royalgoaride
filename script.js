/* =============================================================
   ROYAL GOA RIDE — Premium Redesign JS
   ============================================================= */

/* ── VEHICLE DATA ── */
const vehicleDescriptions = {
  'swift-m': 'Compact hatchback ideal for Goa airport transfers, city cruising, and fuel-efficient travel.',
  'swift-a': 'Automatic Swift with easy handling and fast parking for quick Goa sightseeing and easy airport pickup.',
  'baleno-m': 'Premium hatchback with extra cabin space, perfect for small families and beach day trips in Goa.',
  'baleno-a': 'Automatic Baleno for comfortable coastal driving and stress-free navigation of Goa\u2019s busy roads.',
  'i20-m': 'Luxury hatchback with refined comfort and smooth handling for longer drives across North and South Goa.',
  'i20-a': 'Automatic Hyundai i20 with agile performance, ideal for couples and travellers who prefer easy driving.',
  'ignis-a': 'Compact automatic hatchback great for tight lanes, beachside parking, and easy Goa town travel.',
  'brezza-m': 'Compact SUV built for beach roads and family excursions, with strong presence and dependable city performance.',
  'brezza-a': 'Automatic Brezza offering comfortable SUV space for luggage, beaches, and weekend Goa adventures.',
  'creta-a': 'Premium SUV with automatic transmission, excellent for highway comfort and resort transfers in Goa.',
  'ertiga-a': '7-seater family MPV designed for group travel, airport pickup, and longer journeys with luggage space.',
  'crysta-m': 'Luxury 7-seater for family groups, with smooth ride quality and enough room for luggage and beach gear.',
  'carens-a': 'Premium 7-seater automatic with flexible seating, ideal for South Goa tours and family-friendly itineraries.',
  'thar-soft': 'Adventure SUV ready for rugged Goa roads, offbeat trails, waterfall trips, and spice farm exploration.',
  'thar-hard': 'Hardtop Thar with automatic comfort for adventurous drives, scenic routes, and beachside photo stops.',
  'fortuner': 'Luxury 4x4 SUV with premium comfort and commanding road presence for VIP transfers and outstation plans.',
  'audi-a3': 'Luxury sedan built for stylish Goa travel, business arrivals, and premium airport-to-resort journeys.',
  'mercedes': 'Luxury Mercedes-Benz C300 with elegant comfort, ideal for special occasions and premium Goa airport drop-offs.'
};

const vehiclesRaw = [
  { id: 'swift-m', name: 'Maruti Swift', cat: 'Hatchback', type: 'hatchback', trans: 'Manual', fuel: 'Petrol', seats: 5, price: 1200, deposit: 3000, img: '/assets/Maruti Swift.webp', auto: false },
  { id: 'swift-a', name: 'Maruti Swift', cat: 'Hatchback', type: 'hatchback', trans: 'Automatic', fuel: 'Petrol', seats: 5, price: 1500, deposit: 3000, img: '/assets/Maruti Swift.webp', auto: true },
  { id: 'baleno-m', name: 'Maruti Baleno', cat: 'Premium Hatchback', type: 'hatchback', trans: 'Manual', fuel: 'Petrol', seats: 5, price: 1300, deposit: 3000, img: '/assets/Maruti Baleno.webp', auto: false },
  { id: 'baleno-a', name: 'Maruti Baleno', cat: 'Premium Hatchback', type: 'hatchback', trans: 'Automatic', fuel: 'Petrol', seats: 5, price: 1500, deposit: 3000, img: '/assets/Maruti Baleno.webp', auto: true },
  { id: 'i20-m', name: 'Hyundai i20', cat: 'Luxury Hatchback', type: 'hatchback', trans: 'Manual', fuel: 'Petrol', seats: 5, price: 1200, deposit: 3000, img: '/assets/Hyundai i20 (Manual).webp', auto: false },
  { id: 'i20-a', name: 'Hyundai i20', cat: 'Luxury Hatchback', type: 'hatchback', trans: 'Automatic', fuel: 'Petrol', seats: 5, price: 1600, deposit: 3000, img: '/assets/Hyundai i20 (Automatic).webp', auto: true },
  { id: 'ignis-a', name: 'Maruti Ignis', cat: 'Compact Hatchback', type: 'hatchback', trans: 'Automatic', fuel: 'Petrol', seats: 5, price: 1400, deposit: 3000, img: '/assets/Maruti Ignis.webp', auto: true },
  { id: 'brezza-m', name: 'Maruti Brezza', cat: 'Compact SUV', type: 'suv', trans: 'Manual', fuel: 'Petrol', seats: 5, price: 2000, deposit: 3000, img: '/assets/Maruti Brezza.webp', auto: false },
  { id: 'brezza-a', name: 'Maruti Brezza', cat: 'Compact SUV', type: 'suv', trans: 'Automatic', fuel: 'Petrol', seats: 5, price: 2500, deposit: 3000, img: '/assets/Maruti Brezza.webp', auto: true },
  { id: 'creta-a', name: 'Hyundai Creta', cat: 'Premium SUV', type: 'suv', trans: 'Automatic', fuel: 'Diesel', seats: 5, price: 3500, deposit: 5000, img: '/assets/Hyundai-Creta.webp', auto: true },
  { id: 'ertiga-a', name: 'Maruti Ertiga', cat: '7-Seater MPV', type: 'family', trans: 'Automatic', fuel: 'Petrol', seats: 7, price: 2800, deposit: 3000, img: '/assets/Maruti Ertiga.webp', auto: true },
  { id: 'crysta-m', name: 'Toyota Innova Crysta', cat: 'Luxury SUV', type: 'family', trans: 'Manual', fuel: 'Diesel', seats: 7, price: 3000, deposit: 5000, img: '/assets/Toyota Innova Crysta.webp', auto: false },
  { id: 'carens-a', name: 'Kia Carens', cat: 'Premium 7-Seater', type: 'family', trans: 'Automatic', fuel: 'Diesel', seats: 7, price: 3200, deposit: 3000, img: '/assets/Kia Carens.webp', auto: true },
  { id: 'thar-soft', name: 'Mahindra Thar Soft Top', cat: 'Adventure SUV', type: 'suv', trans: 'Manual', fuel: 'Petrol', seats: 4, price: 3000, deposit: 5000, img: '/assets/Mahindra Thar Soft Top.webp', auto: false },
  { id: 'thar-hard', name: 'Mahindra Thar Hardtop', cat: 'Adventure SUV', type: 'suv', trans: 'Automatic', fuel: 'Diesel', seats: 4, price: 3500, deposit: 5000, img: '/assets/Mahindra-Thar-Hardtop.webp', auto: true },
  { id: 'fortuner', name: 'Toyota Fortuner', cat: 'Luxury 4x4', type: 'luxury', trans: 'Automatic', fuel: 'Diesel', seats: 7, price: 9000, deposit: 5000, img: '/assets/Toyota Fortuner.webp', auto: true },
  { id: 'audi-a3', name: 'Audi A3', cat: 'Luxury Sedan', type: 'luxury', trans: 'Automatic', fuel: 'Petrol', seats: 5, price: 25000, deposit: 10000, img: '/assets/Audi-A3.webp', auto: true },
  { id: 'mercedes', name: 'Mercedes-Benz C300', cat: 'Luxury Convertible', type: 'luxury', trans: 'Automatic', fuel: 'Petrol', seats: 5, price: 20000, deposit: 10000, img: '/assets/Mercedes-Benz C300.webp', auto: true }
];

const luggageMap = { hatchback: '3 Bags', suv: '4 Bags', family: '5 Bags', luxury: '4 Bags', default: '3 Bags' };

const vehicles = Object.values(vehiclesRaw.reduce((collection, v) => {
  const key = `${v.name}`;
  const existing = collection[key] || {
    id: v.id, name: v.name, cat: v.cat, type: v.type, fuel: v.fuel, seats: v.seats,
    luggage: v.luggage || luggageMap[v.type] || luggageMap.default,
    img: encodeURI(v.img), desc: vehicleDescriptions[v.id] || '',
    manualPrice: null, autoPrice: null, deposit: v.deposit,
  };
  if (v.auto) existing.autoPrice = v.price; else existing.manualPrice = v.price;
  existing.deposit = Math.max(existing.deposit || 0, v.deposit || 0);
  collection[key] = existing;
  return collection;
}, {}));

/* ── LOCATIONS DATA ── */
const locations = [
  { name: 'Mopa Airport (GOX)', region: 'airports', delivery: '30–40 min delivery', vehicles: '15+ vehicles available', popular: 'Pernem, Mandrem, Arambol nearby' },
  { name: 'Dabolim Airport (GOI)', region: 'airports', delivery: '30–45 min delivery', vehicles: '15+ vehicles available', popular: 'Vasco, Bogmalo nearby' },
  { name: 'Calangute', region: 'north', delivery: '20–30 min delivery', vehicles: '12+ vehicles available', popular: 'Calangute Beach, Baga nearby' },
  { name: 'Candolim', region: 'north', delivery: '20–30 min delivery', vehicles: '12+ vehicles available', popular: 'Fort Aguada, Sinquerim Beach' },
  { name: 'Baga', region: 'north', delivery: '20–30 min delivery', vehicles: '12+ vehicles available', popular: 'Baga Beach, Tito\u2019s Lane' },
  { name: 'Anjuna', region: 'north', delivery: '25–35 min delivery', vehicles: '10+ vehicles available', popular: 'Anjuna Flea Market, Beach' },
  { name: 'Vagator', region: 'north', delivery: '30–40 min delivery', vehicles: '10+ vehicles available', popular: 'Chapora Fort, Vagator Beach' },
  { name: 'Morjim', region: 'north', delivery: '35–45 min delivery', vehicles: '8+ vehicles available', popular: 'Morjim Beach, Turtle Nesting' },
  { name: 'Panjim', region: 'north', delivery: '25–35 min delivery', vehicles: '12+ vehicles available', popular: 'Fontainhas, Dona Paula' },
  { name: 'Mapusa', region: 'north', delivery: '30–40 min delivery', vehicles: '8+ vehicles available', popular: 'Mapusa Market, Friday Bazaar' },
  { name: 'Margao', region: 'south', delivery: '10–15 min delivery', vehicles: '15+ vehicles available', popular: 'Margao Market, Railway Station' },
  { name: 'Colva', region: 'south', delivery: '20–30 min delivery', vehicles: '10+ vehicles available', popular: 'Colva Beach, Benaulim' },
  { name: 'Palolem', region: 'south', delivery: '35–45 min delivery', vehicles: '8+ vehicles available', popular: 'Palolem Beach, Cola Beach' },
  { name: 'Agonda', region: 'south', delivery: '40–50 min delivery', vehicles: '6+ vehicles available', popular: 'Agonda Beach, Turtle Beach' },
  { name: 'Benaulim', region: 'south', delivery: '20–30 min delivery', vehicles: '8+ vehicles available', popular: 'Benaulim Beach, Maria Hall' },
  { name: 'Varca', region: 'south', delivery: '25–35 min delivery', vehicles: '6+ vehicles available', popular: 'Varca Beach, Fatrade' },
  { name: 'Cavelossim', region: 'south', delivery: '30–40 min delivery', vehicles: '6+ vehicles available', popular: 'Cavelossim Beach, Mobor' }
];

/* ── ROUTES DATA ── */
const routesData = [
  { type: 'Airport Transfer', title: 'Mopa Airport \u2192 Calangute \u2192 Baga', distance: '38 km', time: '55 min', road: 'Excellent', vehicle: 'Any Hatchback or SUV', season: 'Year-round' },
  { type: 'Heritage', title: 'Candolim \u2192 Aguada Fort', distance: '5 km', time: '12 min', road: 'Excellent', vehicle: 'Hatchback', season: 'Year-round' },
  { type: 'City Drive', title: 'Panjim \u2192 Dona Paula', distance: '8 km', time: '18 min', road: 'Excellent', vehicle: 'Hatchback or Sedan', season: 'Year-round' },
  { type: 'Beach Route', title: 'Margao \u2192 Palolem', distance: '35 km', time: '50 min', road: 'Good', vehicle: 'SUV recommended', season: 'Oct–May' },
  { type: 'Beach Route', title: 'Margao \u2192 Agonda', distance: '38 km', time: '55 min', road: 'Good', vehicle: 'SUV recommended', season: 'Oct–May' },
  { type: 'Heritage', title: 'Old Goa Heritage Route', distance: '12 km', time: '25 min', road: 'Excellent', vehicle: 'Any vehicle', season: 'Year-round' },
  { type: 'Adventure', title: 'Dudhsagar Route', distance: '60 km', time: '1h 30min', road: 'Rugged (last stretch)', vehicle: 'Thar or Fortuner', season: 'Jun–Jan' },
  { type: 'Heritage', title: 'Chapora Fort Route', distance: '22 km', time: '35 min', road: 'Good', vehicle: 'Hatchback or SUV', season: 'Year-round' }
];

/* ── ATTRACTIONS DATA ── */
const attractionsData = [
  { cat: 'Beach', name: 'Baga Beach', distance: '2 km from Calangute', parking: 'Paid parking available', time: 'Sunset (5–7 PM)', visitor: 'Nightlife & water sports' },
  { cat: 'Beach', name: 'Calangute Beach', distance: 'North Goa hub', parking: 'Paid parking available', time: 'Morning or evening', visitor: 'Families & groups' },
  { cat: 'Beach', name: 'Candolim Beach', distance: 'Near Fort Aguada', parking: 'Street parking', time: 'Sunset', visitor: 'Couples & relaxation' },
  { cat: 'Beach', name: 'Anjuna Beach', distance: 'North Goa', parking: 'Limited, arrive early', time: 'Wednesday flea market', visitor: 'Backpackers & shoppers' },
  { cat: 'Beach', name: 'Vagator Beach', distance: 'Near Chapora Fort', parking: 'Hillside parking', time: 'Sunset views', visitor: 'Photography lovers' },
  { cat: 'Beach', name: 'Palolem Beach', distance: 'South Goa', parking: 'Paid parking', time: 'Early morning', visitor: 'Quiet getaways' },
  { cat: 'Beach', name: 'Agonda Beach', distance: 'South Goa', parking: 'Free roadside parking', time: 'Sunrise & sunset', visitor: 'Peaceful escapes' },
  { cat: 'Beach', name: 'Colva Beach', distance: 'South Goa hub', parking: 'Paid parking available', time: 'Anytime', visitor: 'Families' },
  { cat: 'Waterfall', name: 'Dudhsagar Waterfalls', distance: '60 km from Margao', parking: 'Forest checkpoint parking', time: 'Monsoon (Jun–Sep) for full flow', visitor: 'Adventure seekers' },
  { cat: 'Fort', name: 'Chapora Fort', distance: 'Near Vagator', parking: 'Free hillside parking', time: 'Sunset', visitor: 'Movie fans & photographers' },
  { cat: 'Fort', name: 'Fort Aguada', distance: 'Near Candolim', parking: 'Paid parking available', time: 'Morning', visitor: 'History enthusiasts' },
  { cat: 'Fort', name: 'Reis Magos Fort', distance: 'Near Panjim', parking: 'Free parking', time: 'Morning to evening', visitor: 'Heritage walks' },
  { cat: 'Heritage', name: 'Basilica of Bom Jesus', distance: 'Old Goa', parking: 'Free parking nearby', time: 'Morning visits', visitor: 'Pilgrims & history buffs' },
  { cat: 'Heritage', name: 'Se Cathedral', distance: 'Old Goa', parking: 'Free parking nearby', time: 'Morning visits', visitor: 'Architecture lovers' },
  { cat: 'Heritage', name: 'Fontainhas', distance: 'Panjim', parking: 'Street parking', time: 'Morning walk', visitor: 'Culture & photography' },
  { cat: 'Nature', name: 'Dona Paula', distance: 'Near Panjim', parking: 'Free parking', time: 'Sunset', visitor: 'Couples & viewpoints' },
  { cat: 'Nature', name: 'Divar Island', distance: 'Via ferry from Old Goa', parking: 'Ferry point parking', time: 'Day trip', visitor: 'Cycling & village walks' }
];

/* ── REVIEWS DATA ── */
const reviewsData = [
  { name: 'Pankaj Kumar', location: 'Google', rating: 5, text: 'Booked a Baleno through Mr. Sahil in Goa for 6 days, it was an amazing experience without any hassle. The car was in excellent condition, pickup and return were smooth, and the overall service was professional. Highly recommended for self-drive car rentals in Goa.' },
  { name: 'Hasina Khan', location: 'Google', rating: 5, text: 'After explaining everything properly, they gave us the car. The process was simple, transparent, and the staff was very helpful.' }
];

/* ── FAQ DATA ── */
const faqData = [
  { q: 'What documents are needed to rent a car in Goa?', a: 'You need a valid Driving Licence and government-issued ID such as Aadhar or Passport. Foreign travellers must also carry an International Driving Permit, and we allow WhatsApp verification for faster booking.' },
  { q: 'How does car delivery work in Goa?', a: 'We deliver rental cars across Goa to hotels, resorts, and holiday addresses. Confirm your travel details and we will have the car ready for pickup or delivery when you arrive.' },
  { q: 'Can I rent an automatic car in Goa?', a: 'Yes, Royal Goa Ride offers automatic cars in Goa including hatchbacks, sedans, SUVs, and premium cars for easy urban driving and comfortable transfers.' },
  { q: 'What is the security deposit for a Goa car rental?', a: 'Security deposits start at \u20b93,000 for hatchbacks and may be \u20b95,000 for SUVs and \u20b910,000 for luxury vehicles. Deposits are refundable after safe return of the car.' },
  { q: 'Is fuel included in the rental price?', a: 'Fuel is not included in the rental rate. Cars are delivered with a set fuel level and should be returned at the same level to avoid additional charges.' },
  { q: 'Do you offer hotel delivery across Goa?', a: 'Yes, we deliver rentals to hotels, resorts, and guesthouses across North Goa and South Goa as part of our hotel delivery service.' },
  { q: 'Who is the owner of Royal Goa Ride?', a: 'Royal Goa Ride is owned by Sahil Shaikh, the founder and owner who started the company to deliver dependable self-drive and rental car services across Goa.' },
  { q: 'Can I book a monthly car rental in Goa?', a: 'Yes, monthly car rental Goa packages are available for extended stays. Longer rentals offer better value and can include pickup, hotel delivery, and flexible return options.' },
  { q: 'Are there mileage limits for self drive rentals?', a: 'Within Goa, most of our rentals include unlimited kilometres. If you plan a longer journey or outstation travel, please confirm mileage terms with our team before booking.' },
  { q: 'How quickly can I get a self drive car in Goa?', a: 'We often deliver cars within 30\u201345 minutes in most Goa regions, and same-day bookings are available depending on vehicle availability.' },
  { q: 'Does Royal Goa Ride support WhatsApp booking?', a: 'Yes, our fastest booking channel is WhatsApp. Send a message with your dates, pick-up location, and car preference, and we will confirm availability quickly.' },
  { q: 'Do you offer 24/7 roadside support in Goa?', a: 'Yes, our customer support is available 24/7 by WhatsApp and phone for any roadside issues, booking questions, or assistance during your rental.' }
];

/* ── HELPERS ── */
function waLink(text) {
  return `https://wa.me/919975356697?text=${encodeURIComponent(text)}`;
}

function getPageContext() {
  const pathname = window.location.pathname.toLowerCase();
  let vehicle = null;
  let location = null;

  // Detect vehicle from URL or page content
  if (pathname.includes('thar')) vehicle = 'Thar';
  else if (pathname.includes('creta')) vehicle = 'Hyundai Creta';
  else if (pathname.includes('baleno')) vehicle = 'Maruti Baleno';
  else if (pathname.includes('innova') || pathname.includes('crysta')) vehicle = 'Toyota Innova Crysta';
  else if (pathname.includes('fortuner')) vehicle = 'Toyota Fortuner';
  else if (pathname.includes('ertiga')) vehicle = 'Maruti Ertiga';
  else if (pathname.includes('i20')) vehicle = 'Hyundai i20';
  else if (pathname.includes('swift')) vehicle = 'Maruti Swift';

  // Detect location from URL
  if (pathname.includes('mopa-airport')) location = 'Mopa Airport';
  else if (pathname.includes('dabolim-airport')) location = 'Dabolim Airport';
  else if (pathname.includes('calangute')) location = 'Calangute';
  else if (pathname.includes('baga')) location = 'Baga';
  else if (pathname.includes('candolim')) location = 'Candolim';
  else if (pathname.includes('anjuna')) location = 'Anjuna';
  else if (pathname.includes('panjim')) location = 'Panjim';
  else if (pathname.includes('margao')) location = 'Margao';

  return { vehicle, location };
}

function buildDynamicWhatsAppMessage() {
  const context = getPageContext();
  let message = 'Hi, I want to book a car in Goa';
  
  if (context.vehicle && context.location) {
    message = `Hi, I want to book the ${context.vehicle} for pickup at ${context.location}`;
  } else if (context.vehicle) {
    message = `Hi, I want to book the ${context.vehicle} in Goa`;
  } else if (context.location) {
    message = `Hi, I want a car for pickup at ${context.location}`;
  }
  
  return message;
}

function updateDynamicWhatsAppLinks() {
  const dynamicMessage = buildDynamicWhatsAppMessage();
  const dynamicLink = waLink(dynamicMessage);
  
  // Update all WhatsApp links with generic/static text to use dynamic message
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    const href = link.getAttribute('href');
    
    // Skip links that already have specific context (like in vehicle cards)
    if (href.includes('details about') || href.includes('for the route') || href.includes('visit')) {
      return;
    }
    
    // Update generic WhatsApp links with dynamic context
    if (href.includes('Hi%2C%20I%20want%20to%20book%20a%20car%20in%20Goa') || 
        href === 'https://wa.me/919975356697') {
      link.setAttribute('href', dynamicLink);
    }
  });
}

function injectSharedLayout() {
  const existingNav = document.querySelector('nav#navbar');
  const existingFooter = document.querySelector('body > footer, footer.footer, footer.site-footer');
  if (existingNav) existingNav.remove();
  if (existingFooter) existingFooter.remove();

  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const activePage = pathname === '/' || pathname === '/index.html' ? 'home'
    : pathname === '/complete-fleet.html' ? 'fleet'
    : pathname === '/routes.html' ? 'routes'
    : pathname === '/tourist-places.html' ? 'places'
    : pathname === '/travel-guides.html' ? 'guides'
    : pathname === '/about-us.html' ? 'about'
    : pathname === '/faq.html' ? 'faq'
    : pathname === '/rental-policies.html' ? 'policies'
    : pathname === '/contact.html' ? 'contact'
    : 'home';

  const headerMarkup = `
  <style>
    .shared-nav {
      position: sticky;
      top: 0;
      z-index: 1000;
      width: 100%;
      background: rgba(8, 8, 8, 0.96);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(16px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.16);
    }
    .shared-nav .nav-inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 14px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
    .shared-nav .nav-logo img {
      width: 52px;
      height: 52px;
      display: block;
      border-radius: 50%;
    }
    .shared-nav .nav-links {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
    .shared-nav .nav-link {
      color: rgba(255,255,255,0.9);
      text-decoration: none;
      padding: 10px 12px;
      border-radius: 999px;
      font-size: 0.95rem;
      font-weight: 600;
      transition: background 0.2s ease, color 0.2s ease;
    }
    .shared-nav .nav-link:hover,
    .shared-nav .nav-link.active {
      background: rgba(201, 168, 76, 0.16);
      color: #f2d892;
    }
    .shared-nav .nav-actions {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }
    .shared-nav .nav-phone,
    .shared-nav .nav-cta-wa {
      color: #fff;
      text-decoration: none;
      padding: 10px 14px;
      border-radius: 999px;
      font-weight: 700;
      white-space: nowrap;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .shared-nav .nav-phone {
      background: rgba(255,255,255,0.08);
    }
    .shared-nav .nav-cta-wa {
      background: linear-gradient(135deg, #c9a84c, #f1d06b);
      color: #0b0b0b;
    }
    .shared-nav .nav-hamburger {
      display: none;
      background: transparent;
      border: 0;
      padding: 6px;
      cursor: pointer;
    }
    .shared-nav .nav-hamburger span {
      display: block;
      width: 22px;
      height: 2px;
      background: #fff;
      margin: 4px 0;
      border-radius: 999px;
    }
    .shared-footer {
      background: #0d0d0d;
      color: rgba(255,255,255,0.84);
      padding: 48px 24px 24px;
      border-top: 1px solid rgba(255,255,255,0.08);
    }
    .shared-footer .footer-grid {
      max-width: 1280px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1.2fr 0.8fr 0.8fr 0.8fr 1fr;
      gap: 24px;
    }
    .shared-footer .footer-brand p,
    .shared-footer .footer-links li,
    .shared-footer .footer-contact a,
    .shared-footer .footer-bottom p {
      font-size: 0.95rem;
      line-height: 1.7;
    }
    .shared-footer .footer-heading {
      color: #f2d892;
      font-size: 1rem;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }
    .shared-footer .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      gap: 8px;
    }
    .shared-footer .footer-links a,
    .shared-footer .footer-contact a {
      color: inherit;
      text-decoration: none;
    }
    .shared-footer .footer-social {
      display: flex;
      gap: 10px;
      margin-top: 12px;
      flex-wrap: wrap;
    }
    .shared-footer .footer-social a {
      color: #111;
      background: #f2d892;
      border-radius: 999px;
      width: 38px;
      height: 38px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }
    .shared-footer .footer-bottom {
      max-width: 1280px;
      margin: 24px auto 0;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.08);
      text-align: center;
      color: rgba(255,255,255,0.72);
    }
    .shared-footer .footer-bottom a {
      color: #f2d892;
      text-decoration: none;
    }
    @media (max-width: 1080px) {
      .shared-footer .footer-grid {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
    @media (max-width: 760px) {
      .shared-nav .nav-links {
        display: none;
      }
      .shared-nav .nav-phone {
        display: none;
      }
      .shared-nav .nav-hamburger {
        display: inline-block;
      }
      .shared-nav .nav-links.open {
        display: flex;
        position: absolute;
        top: 100%;
        left: 20px;
        right: 20px;
        background: rgba(8,8,8,0.98);
        padding: 16px;
        border-radius: 20px;
        flex-direction: column;
        align-items: flex-start;
        box-shadow: 0 18px 40px rgba(0,0,0,0.24);
      }
      .shared-footer .footer-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
  <nav id="navbar" class="shared-nav" role="navigation" aria-label="Main navigation">
    <div class="nav-inner">
      <a href="/" class="nav-logo" aria-label="Royal Goa Ride — Homepage">
        <img src="/assets/logo.webp" alt="Royal Goa Ride" width="52" height="52" loading="eager" />
      </a>
      <div class="nav-links" id="nav-links" role="menubar">
        <a href="/" class="nav-link ${activePage === 'home' ? 'active' : ''}" role="menuitem">Home</a>
        <a href="/complete-fleet.html" class="nav-link ${activePage === 'fleet' ? 'active' : ''}" role="menuitem">Fleet</a>
        <a href="/routes.html" class="nav-link ${activePage === 'routes' ? 'active' : ''}" role="menuitem">Routes</a>
        <a href="/tourist-places.html" class="nav-link ${activePage === 'places' ? 'active' : ''}" role="menuitem">Places</a>
        <a href="/travel-guides.html" class="nav-link ${activePage === 'guides' ? 'active' : ''}" role="menuitem">Guides</a>
        <a href="/about-us.html" class="nav-link ${activePage === 'about' ? 'active' : ''}" role="menuitem">About</a>
        <a href="/faq.html" class="nav-link ${activePage === 'faq' ? 'active' : ''}" role="menuitem">FAQ</a>
        <a href="/rental-policies.html" class="nav-link ${activePage === 'policies' ? 'active' : ''}" role="menuitem">Policies</a>
        <a href="/contact.html" class="nav-link ${activePage === 'contact' ? 'active' : ''}" role="menuitem">Contact</a>
      </div>
      <div class="nav-actions">
        <a href="tel:+919975356697" class="nav-phone"><i class="bi bi-telephone" aria-hidden="true"></i> +91 99753 56697</a>
        <a href="https://wa.me/919975356697?text=Hi%2C%20I%20want%20to%20book%20a%20car%20in%20Goa" class="nav-cta-wa" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp" aria-hidden="true"></i> Book Now</a>
        <button class="nav-hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-links">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>`;

  const footerMarkup = `
  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="/assets/logo.webp" alt="Royal Goa Ride" class="footer-logo" width="48" height="48" loading="lazy" />
          <div class="footer-badges">
            <span><i class="bi bi-shield-check" aria-hidden="true"></i> Verified service</span>
            <span><i class="bi bi-telephone" aria-hidden="true"></i> 24/7 support</span>
          </div>
          <p class="footer-tagline">Goa's trusted self drive car rental since 2010. Premium fleet, honest pricing, island-wide delivery.</p>
          <div class="footer-social">
            <a href="https://www.instagram.com/royalgoaride" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            <a href="https://www.facebook.com/royalgoaride" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
            <a href="https://wa.me/919975356697" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <h3 class="footer-heading">Quick Links</h3>
          <ul class="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/complete-fleet.html">Our Fleet</a></li>
            <li><a href="/routes.html">Road Trip Routes</a></li>
            <li><a href="/founder.html">Founder Story</a></li>
            <li><a href="/faq.html">FAQ</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3 class="footer-heading">Locations</h3>
          <ul class="footer-links">
            <li><a href="/car-rental-calangute.html">Calangute</a></li>
            <li><a href="/car-rental-candolim.html">Candolim</a></li>
            <li><a href="/car-rental-baga.html">Baga</a></li>
            <li><a href="/car-rental-anjuna.html">Anjuna</a></li>
            <li><a href="/car-rental-panjim.html">Panjim</a></li>
            <li><a href="/car-rental-margao.html">Margao</a></li>
            <li><a href="/car-rental-mopa-airport.html">Mopa Airport</a></li>
            <li><a href="/car-rental-dabolim-airport.html">Dabolim Airport</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3 class="footer-heading">Vehicles</h3>
          <ul class="footer-links">
            <li><a href="/thar-rental-goa.html">Mahindra Thar</a></li>
            <li><a href="/innova-rental-goa.html">Toyota Innova</a></li>
            <li><a href="/fortuner-rental-goa.html">Toyota Fortuner</a></li>
            <li><a href="/creta-rental-goa.html">Hyundai Creta</a></li>
            <li><a href="/baleno-rental-goa.html">Maruti Baleno</a></li>
            <li><a href="/i20-rental-goa.html">Hyundai i20</a></li>
            <li><a href="/luxury-car-rental-goa.html">Luxury Cars</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3 class="footer-heading">Guides</h3>
          <ul class="footer-links">
            <li><a href="/self-drive-car-rental-goa.html">Self Drive Guide</a></li>
            <li><a href="/goa-airport-car-rental.html">Airport Car Rental</a></li>
            <li><a href="/monthly-car-rental-goa.html">Monthly Rental</a></li>
            <li><a href="/luxury-car-rental-goa.html">Luxury Car Rental</a></li>
          </ul>
          <div class="footer-contact">
            <a href="tel:+919975356697" class="footer-phone"><i class="bi bi-telephone-fill"></i> +91 99753 56697</a>
            <a href="mailto:info@royalgoaride.com" class="footer-email"><i class="bi bi-envelope-fill"></i> info@royalgoaride.com</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Royal Goa Ride. All rights reserved. | <a href="/privacy-policy.html">Privacy Policy</a> | <a href="/terms-of-service.html">Terms of Service</a> | <a href="/refund-policy.html">Refund Policy</a></p>
      </div>
    </div>
  </footer>`;

  const main = document.querySelector('main');
  if (main) {
    main.insertAdjacentHTML('beforebegin', headerMarkup);
    main.insertAdjacentHTML('afterend', footerMarkup);
  } else {
    document.body.insertAdjacentHTML('afterbegin', headerMarkup);
    document.body.insertAdjacentHTML('beforeend', footerMarkup);
  }
}

/* ── RENDER FLEET ── */
function renderFleet(filter = 'all') {
  const grid = document.getElementById('fleet-grid');
  if (!grid) return;
  const list = filter === 'all' ? vehicles : vehicles.filter(v => v.type === filter);
  grid.innerHTML = list.map(v => {
    const price = v.manualPrice || v.autoPrice;
    const transLabel = v.manualPrice && v.autoPrice ? 'Manual & Auto' : (v.autoPrice ? 'Automatic' : 'Manual');
    return `
    <div class="vehicle-card">
      <div class="vehicle-card-img">
        <img src="${v.img}" alt="${v.name} self drive rental in Goa" loading="lazy" width="400" height="200" />
        <span class="vehicle-type-badge">${v.cat}</span>
      </div>
      <div class="vehicle-card-body">
        <h3 class="vehicle-name">${v.name}</h3>
        <p class="vehicle-category">${v.desc}</p>
        <div class="vehicle-specs">
          <div class="vehicle-spec">
            <div class="spec-icon"><i class="bi bi-gear"></i></div>
            <span class="spec-val">${transLabel}</span>
            <span class="spec-key">Trans</span>
          </div>
          <div class="vehicle-spec">
            <div class="spec-icon"><i class="bi bi-person"></i></div>
            <span class="spec-val">${v.seats} Seats</span>
            <span class="spec-key">Capacity</span>
          </div>
          <div class="vehicle-spec">
            <div class="spec-icon"><i class="bi bi-fuel-pump"></i></div>
            <span class="spec-val">${v.fuel}</span>
            <span class="spec-key">Fuel</span>
          </div>
        </div>
        <div class="vehicle-price-row">
          <div class="vehicle-price">₹${price.toLocaleString('en-IN')}<span>/day</span></div>
          <div class="vehicle-price-auto">Deposit ₹${v.deposit.toLocaleString('en-IN')} • Free cancellation up to 24h</div>
        </div>
        <div class="vehicle-card-actions">
          <a href="${waLink('Hi, I want details about ' + v.name)}" class="btn-view-details" target="_blank" rel="noopener noreferrer">View Details</a>
          <a href="/book-now.html?car=${encodeURIComponent(v.name)}" class="btn-book-car">Book Now</a>
        </div>
      </div>
    </div>`;
  }).join('');
}

function renderFeaturedFleet() {
  const grid = document.getElementById('fleet-grid');
  if (!grid) return;
  const featuredNames = ['Maruti Swift', 'Maruti Baleno', 'Hyundai Creta', 'Mahindra Thar', 'Toyota Fortuner', 'Maruti Ertiga'];
  const list = vehicles.filter(v => featuredNames.includes(v.name)).slice(0, 6);
  grid.innerHTML = list.map(v => {
    const price = v.manualPrice || v.autoPrice;
    const transLabel = v.manualPrice && v.autoPrice ? 'Manual & Auto' : (v.autoPrice ? 'Automatic' : 'Manual');
    return `
    <div class="vehicle-card">
      <div class="vehicle-card-img">
        <img src="${v.img}" alt="${v.name} self drive rental in Goa" loading="lazy" width="400" height="200" />
        <span class="vehicle-type-badge">${v.cat}</span>
      </div>
      <div class="vehicle-card-body">
        <h3 class="vehicle-name">${v.name}</h3>
        <p class="vehicle-category">${v.desc}</p>
        <div class="vehicle-specs">
          <div class="vehicle-spec">
            <div class="spec-icon"><i class="bi bi-gear"></i></div>
            <span class="spec-val">${transLabel}</span>
            <span class="spec-key">Trans</span>
          </div>
          <div class="vehicle-spec">
            <div class="spec-icon"><i class="bi bi-person"></i></div>
            <span class="spec-val">${v.seats} Seats</span>
            <span class="spec-key">Capacity</span>
          </div>
          <div class="vehicle-spec">
            <div class="spec-icon"><i class="bi bi-fuel-pump"></i></div>
            <span class="spec-val">${v.fuel}</span>
            <span class="spec-key">Fuel</span>
          </div>
        </div>
        <div class="vehicle-price-row">
          <div class="vehicle-price">₹${price.toLocaleString('en-IN')}<span>/day</span></div>
          <div class="vehicle-price-auto">Deposit ₹${v.deposit.toLocaleString('en-IN')} • Free cancellation up to 24h</div>
        </div>
        <div class="vehicle-card-actions">
          <a href="${waLink('Hi, I want details about ' + v.name)}" class="btn-view-details" target="_blank" rel="noopener noreferrer">View Details</a>
          <a href="/book-now.html?car=${encodeURIComponent(v.name)}" class="btn-book-car">Book Now</a>
        </div>
      </div>
    </div>`;
  }).join('');
}

/* ── BOOKING PAGE HELPERS ── */
function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name) || '';
}

function formatCurrency(amount) {
  return amount ? `₹${amount.toLocaleString('en-IN')}` : '₹0';
}

function findBookingVehicle(query) {
  if (!query) return vehicles[0] || null;
  const norm = query.trim().toLowerCase();
  return vehicles.find(v => v.name.toLowerCase() === norm)
      || vehicles.find(v => v.name.toLowerCase().includes(norm))
      || vehicles[0] || null;
}

function refreshBookingSummary(vehicle) {
  if (!vehicle) return;
  const rate = vehicle.autoPrice || vehicle.manualPrice || 0;
  const deposit = vehicle.deposit || 0;
  const days = 3;
  const total = rate * days + deposit;
  document.getElementById('summary-vehicle').textContent = vehicle.name;
  document.getElementById('summary-rate').textContent = formatCurrency(rate);
  document.getElementById('summary-deposit').textContent = formatCurrency(deposit);
  document.getElementById('summary-total').textContent = formatCurrency(total);
}

function updateBookingChatLink(vehicle) {
  const chatLink = document.getElementById('booking-chat');
  if (!chatLink || !vehicle) return;
  chatLink.href = waLink(`Hi, I want to book the ${vehicle.name} in Goa`);
}

function initFAQAccordion(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      container.querySelectorAll('.faq-item').forEach(other => {
        other.classList.remove('open');
        other.querySelector('.faq-q')?.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initBookingPage() {
  const vehicleSelect = document.getElementById('vehicle-select');
  if (!vehicleSelect) return;
  vehicleSelect.innerHTML = vehicles.map(v => `
      <option value="${v.name}">${v.name} — ${v.cat}${v.autoPrice && !v.manualPrice ? ' (Auto)' : v.manualPrice && !v.autoPrice ? ' (Manual)' : ''}</option>`).join('');

  const carParam = getQueryParam('car');
  const selectedVehicle = findBookingVehicle(carParam);
  if (selectedVehicle) {
    vehicleSelect.value = selectedVehicle.name;
  }

  refreshBookingSummary(selectedVehicle);
  updateBookingChatLink(selectedVehicle);

  vehicleSelect.addEventListener('change', () => {
    const chosen = findBookingVehicle(vehicleSelect.value);
    refreshBookingSummary(chosen);
    updateBookingChatLink(chosen);
  });

  const submitButton = document.getElementById('booking-submit');
  if (submitButton) {
    submitButton.addEventListener('click', () => {
      const vehicle = findBookingVehicle(vehicleSelect.value);
      const pickupLocation = document.getElementById('pickup-location')?.value.trim();
      const pickupDate = document.getElementById('pickup-date')?.value;
      const returnDate = document.getElementById('return-date')?.value;
      const customerName = document.getElementById('customer-name')?.value.trim();
      const customerPhone = document.getElementById('customer-phone')?.value.trim();
      const notes = document.getElementById('customer-notes')?.value.trim();
      let message = `Hi, I want to book the ${vehicle?.name || 'car'} in Goa`;
      if (customerName) message += ` for ${customerName}`;
      if (customerPhone) message += `, phone ${customerPhone}`;
      if (pickupLocation) message += ` at ${pickupLocation}`;
      if (pickupDate) message += ` pickup ${pickupDate}`;
      if (returnDate) message += ` return ${returnDate}`;
      if (notes) message += ` (${notes})`;
      window.open(waLink(message), '_blank', 'noopener,noreferrer');
    });
  }

  initFAQAccordion('booking-faq');
}

/* ── RENDER LOCATIONS ── */
function renderLocations(region = 'airports') {
  const grid = document.getElementById('locations-grid');
  if (!grid) return;
  const list = locations.filter(l => l.region === region);
  grid.innerHTML = list.map(l => `
    <div class="location-card">
      <h3 class="location-name">${l.name}</h3>
      <div class="location-meta">
        <div class="location-meta-item"><i class="bi bi-clock"></i> ${l.delivery}</div>
        <div class="location-meta-item"><i class="bi bi-car-front"></i> ${l.vehicles}</div>
        <div class="location-meta-item"><i class="bi bi-geo-alt"></i> ${l.popular}</div>
      </div>
      <a href="${waLink('Hi, I want a car delivered to ' + l.name + ', Goa')}" class="location-cta" target="_blank" rel="noopener noreferrer">Book Delivery Here</a>
    </div>
  `).join('');
}

/* ── RENDER ROUTES ── */
function renderRoutes() {
  const grid = document.getElementById('routes-grid');
  if (!grid) return;
  grid.innerHTML = routesData.map(r => `
    <div class="route-card">
      <span class="route-type">${r.type}</span>
      <h3 class="route-title">${r.title}</h3>
      <div class="route-stats">
        <div class="route-stat"><span class="route-stat-val">${r.distance}</span><span class="route-stat-key">Distance</span></div>
        <div class="route-stat"><span class="route-stat-val">${r.time}</span><span class="route-stat-key">Drive Time</span></div>
        <div class="route-stat"><span class="route-stat-val">${r.road}</span><span class="route-stat-key">Road</span></div>
      </div>
      <div class="route-vehicle"><i class="bi bi-car-front"></i> Best: ${r.vehicle} &middot; ${r.season}</div>
      <a href="${waLink('Hi, I want a car for the route: ' + r.title)}" class="route-book" target="_blank" rel="noopener noreferrer">Book For This Route</a>
    </div>
  `).join('');
}

/* ── RENDER ATTRACTIONS ── */
function renderAttractions() {
  const grid = document.getElementById('attractions-grid');
  if (!grid) return;
  grid.innerHTML = attractionsData.map(a => `
    <div class="attraction-card">
      <span class="attraction-category">${a.cat}</span>
      <h3 class="attraction-name">${a.name}</h3>
      <div class="attraction-meta">
        <div class="attraction-meta-item"><i class="bi bi-signpost"></i> ${a.distance}</div>
        <div class="attraction-meta-item"><i class="bi bi-p-circle"></i> ${a.parking}</div>
        <div class="attraction-meta-item"><i class="bi bi-clock"></i> Best: ${a.time}</div>
      </div>
      <a href="${waLink('Hi, I want a car to visit ' + a.name + ' in Goa')}" class="attraction-cta" target="_blank" rel="noopener noreferrer">Book Car For This</a>
    </div>
  `).join('');
}

/* ── RENDER REVIEWS ── */
let reviewPage = 0;
function getAvatarDataUrl(name) {
  const initial = (name || 'R').charAt(0).toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
    <rect width="96" height="96" rx="24" fill="#0a0a0a"/>
    <circle cx="48" cy="38" r="22" fill="#C9A84C"/>
    <path d="M24 84c8-14 16-20 24-20s16 6 24 20" fill="#E8C96D"/>
    <text x="48" y="54" text-anchor="middle" font-size="28" fill="#0a0a0a" font-family="Arial, sans-serif" font-weight="700">${initial}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function renderReviews() {
  const carousel = document.getElementById('reviews-carousel');
  const dots = document.getElementById('rev-dots');
  if (!carousel) return;
  const perPage = window.innerWidth < 640 ? 1 : (window.innerWidth < 1024 ? 2 : 3);
  const totalPages = Math.ceil(reviewsData.length / perPage);
  reviewPage = Math.min(reviewPage, totalPages - 1);
  const start = reviewPage * perPage;
  const slice = reviewsData.slice(start, start + perPage);

  carousel.innerHTML = slice.map(r => `
    <div class="review-card">
      <div class="review-header">
        <img class="reviewer-avatar" src="${getAvatarDataUrl(r.name)}" alt="${r.name}" width="56" height="56" loading="lazy" />
        <div>
          <div class="reviewer-name">${r.name}</div>
          <div class="reviewer-location">${r.location}</div>
        </div>
      </div>
      <div class="review-stars">${'\u2605'.repeat(r.rating)}</div>
      <p class="review-text">${r.text}</p>
      <div class="review-google"><i class="bi bi-google"></i> Verified Google Review</div>
    </div>
  `).join('');

  if (dots) {
    dots.innerHTML = Array.from({ length: totalPages }, (_, i) =>
      `<span class="rev-dot ${i === reviewPage ? 'active' : ''}" data-page="${i}"></span>`
    ).join('');
    dots.querySelectorAll('.rev-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        reviewPage = parseInt(dot.dataset.page, 10);
        renderReviews();
      });
    });
  }
}

/* ── RENDER FAQ ── */
function renderFAQ(limit = 0) {
  const grid = document.getElementById('faq-accordion');
  if (!grid) return;
  const items = limit > 0 ? faqData.slice(0, limit) : faqData;
  grid.innerHTML = items.map((f, i) => `
    <div class="faq-item" data-index="${i}">
      <button class="faq-q" aria-expanded="false">
        <span>${f.q}</span>
        <i class="bi bi-plus-lg faq-icon"></i>
      </button>
      <div class="faq-a">${f.a}</div>
    </div>
  `).join('');

  grid.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    btn.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      grid.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ── COUNTER ANIMATION ── */
function animateCounters() {
  const counters = document.querySelectorAll('.counter-num');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target, 10);
    const duration = 1500;
    const startTime = performance.now();
    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(update);
      else counter.textContent = target;
    }
    requestAnimationFrame(update);
  });
}

/* ── NAVBAR SCROLL ── */
function initNavbarScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  function onScroll() {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── MOBILE MENU ── */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const links = document.getElementById('nav-links');
  if (!hamburger || !links) return;
  hamburger.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  links.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ── FLEET FILTERS ── */
function initFleetFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderFleet(btn.dataset.filter);
    });
  });
}

/* ── LOCATION TABS ── */
function initLocationTabs() {
  const tabs = document.querySelectorAll('.loc-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      renderLocations(tab.dataset.region);
    });
  });
}

/* ── REVIEWS NAV ── */
function initReviewsNav() {
  const prev = document.getElementById('rev-prev');
  const next = document.getElementById('rev-next');
  const updateNav = () => {
    const perPage = window.innerWidth < 640 ? 1 : (window.innerWidth < 1024 ? 2 : 3);
    const totalPages = Math.ceil(reviewsData.length / perPage);
    reviewPage = Math.min(reviewPage, Math.max(totalPages - 1, 0));
    if (prev) prev.disabled = totalPages <= 1;
    if (next) next.disabled = totalPages <= 1;
    renderReviews();
  };
  if (prev) prev.addEventListener('click', () => {
    const perPage = window.innerWidth < 640 ? 1 : (window.innerWidth < 1024 ? 2 : 3);
    const totalPages = Math.ceil(reviewsData.length / perPage);
    reviewPage = (reviewPage - 1 + totalPages) % totalPages;
    renderReviews();
  });
  if (next) next.addEventListener('click', () => {
    const perPage = window.innerWidth < 640 ? 1 : (window.innerWidth < 1024 ? 2 : 3);
    const totalPages = Math.ceil(reviewsData.length / perPage);
    reviewPage = (reviewPage + 1) % totalPages;
    renderReviews();
  });
  window.addEventListener('resize', updateNav, { passive: true });
  updateNav();
}

/* ── CHECK AVAILABILITY ── */
function checkAvailability() {
  const loc = document.getElementById('pickup-loc')?.value || 'a location in Goa';
  const pickup = document.getElementById('pickup-date')?.value || '';
  const ret = document.getElementById('return-date')?.value || '';
  const type = document.getElementById('vehicle-type')?.value || 'a vehicle';
  let msg = `Hi, I want to check availability for ${type} at ${loc}`;
  if (pickup) msg += `, pickup ${pickup}`;
  if (ret) msg += `, return ${ret}`;
  window.open(waLink(msg), '_blank', 'noopener,noreferrer');
}
window.checkAvailability = checkAvailability;

/* ── SCROLL REVEAL ── */
function initScrollReveal() {
  const targets = document.querySelectorAll('main section, .footer');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(target => target.classList.add('fade-up', 'in-view'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        const counters = entry.target.querySelectorAll('.counter-num');
        if (counters.length) animateCounters();
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(target => {
    target.classList.add('fade-up');
    observer.observe(target);
  });

  const countersSection = document.querySelector('.counters-section');
  if (countersSection) observer.observe(countersSection);
}

/* ── GLOBAL POPUP MANAGEMENT ── */
const POPUP_MANAGEMENT = {
  SESSION_POPUP_FLAG: 'royalgoa_popup_shown_this_session',
  SESSION_START_TIME: 'royalgoa_session_start_time',
  SESSION_RETURNING_VISITOR: 'royalgoa_returning_visitor',
  POPUP_MIN_DELAY_MS: 25000, // 25 seconds for new visitors
  popupShownThisSession: false,

  isNewVisitor() {
    try {
      const returning = sessionStorage.getItem(this.SESSION_RETURNING_VISITOR);
      return !returning;
    } catch (e) {
      return true;
    }
  },

  markAsReturningVisitor() {
    try {
      sessionStorage.setItem(this.SESSION_RETURNING_VISITOR, 'true');
    } catch (e) {}
  },

  getSessionStartTime() {
    try {
      let startTime = sessionStorage.getItem(this.SESSION_START_TIME);
      if (!startTime) {
        startTime = String(Date.now());
        sessionStorage.setItem(this.SESSION_START_TIME, startTime);
      }
      return parseInt(startTime, 10);
    } catch (e) {
      return Date.now();
    }
  },

  hasPopupShownThisSession() {
    return this.popupShownThisSession;
  },

  canShowPopup() {
    // Only one popup per session
    if (this.hasPopupShownThisSession()) return false;
    
    // For new visitors: enforce 25 second delay
    if (this.isNewVisitor()) {
      const elapsed = Date.now() - this.getSessionStartTime();
      return elapsed >= this.POPUP_MIN_DELAY_MS;
    }
    
    return true;
  },

  markPopupShown() {
    this.popupShownThisSession = true;
    this.markAsReturningVisitor();
  }
};

/* ── SET MIN DATES ── */
const REVIEW_CONTACTED_KEY = 'royalgoa_contacted';
const REVIEW_POPUP_SHOWN_KEY = 'royalgoa_review_popup_shown';
const REVIEW_POPUP_INTERVAL = 30 * 24 * 60 * 60 * 1000;
const REVIEW_LINK = 'https://g.page/r/Ccw4TRAGtkCyEBM/review';

function setContacted() {
  try {
    localStorage.setItem(REVIEW_CONTACTED_KEY, 'true');
  } catch (error) {
    // ignore if storage is unavailable
  }
}

function hasContacted() {
  try {
    return localStorage.getItem(REVIEW_CONTACTED_KEY) === 'true';
  } catch (error) {
    return false;
  }
}

function getPopupShownAt() {
  try {
    const value = localStorage.getItem(REVIEW_POPUP_SHOWN_KEY);
    const timestamp = Number(value);
    return Number.isFinite(timestamp) && timestamp > 0 ? timestamp : 0;
  } catch (error) {
    return 0;
  }
}

function setPopupShownAt(timestamp = Date.now()) {
  try {
    localStorage.setItem(REVIEW_POPUP_SHOWN_KEY, String(timestamp));
  } catch (error) {
    // ignore if storage is unavailable
  }
}

function shouldShowReviewPopup() {
  // NEVER show review popup to first-time visitors
  if (POPUP_MANAGEMENT.isNewVisitor()) return false;
  
  // Only show if user has contacted/completed booking
  if (!hasContacted()) return false;
  
  // Check global popup flag - only one popup per session
  if (POPUP_MANAGEMENT.hasPopupShownThisSession()) return false;
  
  // Check if we can show popup (respects 25 second delay)
  if (!POPUP_MANAGEMENT.canShowPopup()) return false;
  
  const shownAt = getPopupShownAt();
  return shownAt === 0 || (Date.now() - shownAt) > REVIEW_POPUP_INTERVAL;
}

function showReviewPopup() {
  // Double-check we can show this popup
  if (!POPUP_MANAGEMENT.canShowPopup()) return;
  
  const backdrop = document.getElementById('review-popup-backdrop');
  if (!backdrop) return;
  backdrop.classList.add('open');
  backdrop.setAttribute('aria-hidden', 'false');
  setPopupShownAt();
  POPUP_MANAGEMENT.markPopupShown();
}

function hideReviewPopup() {
  const backdrop = document.getElementById('review-popup-backdrop');
  if (!backdrop) return;
  backdrop.classList.remove('open');
  backdrop.setAttribute('aria-hidden', 'true');
}

function addContactTracking() {
  const selectors = [
    'a[href*="wa.me/919975356697"]',
    'a[href^="tel:+919975356697"]'
  ];
  document.querySelectorAll(selectors.join(',')).forEach((element) => {
    element.addEventListener('click', () => setContacted(), { passive: true });
  });
}

function addPopupControls() {
  const closeButton = document.getElementById('review-popup-close');
  const laterButton = document.getElementById('review-popup-later');
  const reviewButton = document.getElementById('review-popup-leave-review');
  const backdrop = document.getElementById('review-popup-backdrop');

  if (closeButton) closeButton.addEventListener('click', hideReviewPopup);
  if (laterButton) laterButton.addEventListener('click', hideReviewPopup);
  if (reviewButton) {
    reviewButton.addEventListener('click', () => {
      setPopupShownAt();
      hideReviewPopup();
    });
  }
  if (backdrop) {
    backdrop.addEventListener('click', (event) => {
      if (event.target === backdrop) hideReviewPopup();
    });
  }
}

function scheduleReviewPopup() {
  if (!shouldShowReviewPopup()) return;
  
  // Wait until we can show popup (respects 25 second delay for new visitors)
  const startTime = POPUP_MANAGEMENT.getSessionStartTime();
  const minWaitTime = POPUP_MANAGEMENT.POPUP_MIN_DELAY_MS;
  const elapsed = Date.now() - startTime;
  const delay = Math.max(0, minWaitTime - elapsed + 2000); // Additional 2 sec buffer
  
  setTimeout(showReviewPopup, delay);
}

function initDateFields() {
  const pickup = document.getElementById('pickup-date');
  const ret = document.getElementById('return-date');
  const quickDate = document.getElementById('quick-date');
  if (!pickup) return;
  const today = new Date().toISOString().split('T')[0];
  pickup.min = today;
  if (ret) ret.min = today;
  if (quickDate) quickDate.min = today;
  pickup.addEventListener('change', () => {
    if (ret) ret.min = pickup.value;
  });
}

function trackConversion(eventName, source = 'unknown') {
  if (window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'conversion',
      event_label: source,
      value: 1
    });
  }
}

function handleConversionLink(event) {
  const link = event.currentTarget;
  const eventName = link.dataset.event || 'click';
  const source = link.dataset.source || 'link';
  trackConversion(eventName, source);
}

function attachConversionTracking() {
  document.querySelectorAll('[data-event]').forEach((element) => {
    element.addEventListener('click', handleConversionLink, { passive: true });
  });
}

function handleBookingSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const requiredFields = form.querySelectorAll('[required]');
  let isValid = true;
  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      isValid = false;
      field.classList.add('is-invalid');
    } else {
      field.classList.remove('is-invalid');
    }
  });
  if (!isValid) {
    const firstInvalid = form.querySelector('.is-invalid');
    firstInvalid?.focus();
    return;
  }
  
  const formData = new FormData(form);
  const name = formData.get('name') || '';
  const phone = formData.get('phone') || '';
  const pickupDate = formData.get('pickupDate') || '';
  const pickupLocation = formData.get('pickupLocation') || '';
  const vehicle = formData.get('vehicle') || '';
  
  const message = `Hi, I need a self-drive car in Goa. Name: ${name}. Phone: ${phone}. Pickup Date: ${pickupDate}. Pickup Location: ${pickupLocation}. Vehicle: ${vehicle}.`;
  
  // Show on-screen confirmation
  showFormConfirmation();
  
  // Track conversion
  trackConversion('booking_submit', 'quick_form');
  
  // Mark user as contacted for review popup
  setContacted();
  
  // Open WhatsApp after brief delay so user sees the confirmation
  setTimeout(() => {
    window.open(waLink(message), '_blank', 'noopener,noreferrer');
  }, 800);
}

function showFormConfirmation() {
  // Create confirmation overlay
  let confirmOverlay = document.getElementById('form-confirmation-overlay');
  if (!confirmOverlay) {
    confirmOverlay = document.createElement('div');
    confirmOverlay.id = 'form-confirmation-overlay';
    confirmOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      animation: fadeIn 0.3s ease;
    `;
    
    const confirmBox = document.createElement('div');
    confirmBox.style.cssText = `
      background: white;
      border-radius: 12px;
      padding: 40px 30px;
      text-align: center;
      max-width: 400px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      animation: slideUp 0.4s ease;
    `;
    
    confirmBox.innerHTML = `
      <div style="font-size: 48px; margin-bottom: 16px;">✓</div>
      <h3 style="font-size: 1.4rem; color: #0a0a0a; margin-bottom: 12px; font-weight: 700;">Booking Request Received!</h3>
      <p style="font-size: 0.95rem; color: #555; margin-bottom: 20px; line-height: 1.6;">Redirecting you to WhatsApp to confirm your booking details...</p>
      <p style="font-size: 0.85rem; color: #888;">Your details will be ready to send. Just hit send in WhatsApp!</p>
    `;
    
    confirmOverlay.appendChild(confirmBox);
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(confirmOverlay);
  } else {
    confirmOverlay.style.display = 'flex';
  }
  
  // Auto-close confirmation after 4 seconds
  setTimeout(() => {
    if (confirmOverlay) {
      confirmOverlay.style.display = 'none';
    }
  }, 4000);
}

function initQuickBookingForm() {
  const form = document.getElementById('quick-booking-form');
  if (!form) return;
  form.addEventListener('submit', handleBookingSubmit);
}

function initFloatingCtas() {
  const groups = document.querySelectorAll('.sticky-ctas');
  if (!groups.length) return;

  const toggleVisibility = () => {
    const shouldShow = window.scrollY > 300;
    groups.forEach((group) => {
      group.classList.toggle('is-visible', shouldShow);
    });
  };

  toggleVisibility();
  window.addEventListener('scroll', toggleVisibility, { passive: true });
  window.addEventListener('resize', toggleVisibility, { passive: true });
}

function initStickyMobileBar() {
  const bar = document.createElement('div');
  bar.className = 'mobile-cta-bar';
  bar.innerHTML = `
    <a href="tel:+919975356697" data-event="call_click" data-source="mobile_bar"><i class="bi bi-telephone-fill"></i><span>Call Now</span></a>
    <a href="https://wa.me/919975356697?text=Hi%2C%20I%20want%20to%20book%20a%20car%20in%20Goa" target="_blank" rel="noopener noreferrer" data-event="whatsapp_click" data-source="mobile_bar"><i class="bi bi-whatsapp"></i><span>WhatsApp</span></a>
    <a href="#quick-booking" data-event="book_now_click" data-source="mobile_bar"><i class="bi bi-car-front"></i><span>Book Now</span></a>
  `;
  document.body.appendChild(bar);
  const toggleMobileBar = () => {
    bar.style.display = window.innerWidth <= 767 ? 'grid' : 'none';
  };
  toggleMobileBar();
  window.addEventListener('scroll', () => {
    if (window.innerWidth <= 767) bar.style.display = 'grid';
  }, { passive: true });
  window.addEventListener('resize', toggleMobileBar, { passive: true });
  bar.querySelectorAll('[data-event]').forEach((element) => {
    element.addEventListener('click', handleConversionLink, { passive: true });
  });
}

function showLeadPopup() {
  // Respect global popup flag - only one popup per session
  if (POPUP_MANAGEMENT.hasPopupShownThisSession()) return;
  
  // Respect 25 second delay for new visitors
  if (!POPUP_MANAGEMENT.canShowPopup()) return;
  
  const overlay = document.getElementById('lead-popup-overlay');
  if (!overlay) return;
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  localStorage.setItem('royalgoa_popup_seen', 'true');
  POPUP_MANAGEMENT.markPopupShown();
}

function dismissLeadPopup() {
  const overlay = document.getElementById('lead-popup-overlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
}

function showExitPopup(event) {
  // Respect global popup flag - only one popup per session
  if (POPUP_MANAGEMENT.hasPopupShownThisSession()) return;
  
  // Respect 25 second delay for new visitors
  if (!POPUP_MANAGEMENT.canShowPopup()) return;
  
  const overlay = document.getElementById('exit-popup-overlay');
  if (!overlay || window.innerWidth < 1024) return;
  const isLeaving = event.clientY <= 0 || event.clientX <= 0 || event.clientX >= window.innerWidth || event.clientY >= window.innerHeight;
  if (!isLeaving) return;
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  POPUP_MANAGEMENT.markPopupShown();
}

function initLeadPopups() {
  const overlay = document.getElementById('lead-popup-overlay');
  const exitOverlay = document.getElementById('exit-popup-overlay');
  const dismissButton = document.getElementById('lead-popup-dismiss');
  const exitDismissButton = document.querySelector('.exit-popup-dismiss');
  if (!overlay) return;
  const hasSeen = localStorage.getItem('royalgoa_popup_seen') === 'true';
  if (!hasSeen) {
    // Calculate delay respecting 25-second minimum for new visitors
    const startTime = POPUP_MANAGEMENT.getSessionStartTime();
    const minWaitTime = POPUP_MANAGEMENT.POPUP_MIN_DELAY_MS;
    const elapsed = Date.now() - startTime;
    const timerDelay = Math.max(10000, minWaitTime - elapsed + 1000); // At least 10 sec, but at least 25 sec total
    
    const timer = window.setTimeout(() => {
      if (!document.hidden) showLeadPopup();
    }, timerDelay);
    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight * 0.4) {
        window.clearTimeout(timer);
        showLeadPopup();
      }
    }, { passive: true, once: true });
  }

  if (dismissButton) dismissButton.addEventListener('click', dismissLeadPopup);
  const closeButton = document.getElementById('lead-popup-close');
  if (closeButton) closeButton.addEventListener('click', dismissLeadPopup);
  if (overlay) {
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) dismissLeadPopup();
    });
  }
  if (exitOverlay) {
    exitDismissButton?.addEventListener('click', () => exitOverlay.classList.remove('open'));
    const exitCloseButton = document.getElementById('exit-popup-close');
    if (exitCloseButton) exitCloseButton.addEventListener('click', () => exitOverlay.classList.remove('open'));
    document.addEventListener('mouseout', showExitPopup);
  }
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';
  document.body.classList.toggle('home-page', isHomePage);
  document.body.classList.toggle('inner-page', !isHomePage);
  injectSharedLayout();
  document.querySelectorAll('main section, .shared-footer').forEach((element) => {
    element.classList.add('fade-up');
  });
  if (document.body.classList.contains('home-page')) {
    renderFeaturedFleet();
    renderFAQ(4);
  } else {
    renderFleet('all');
    renderFAQ();
  }
  renderLocations('airports');
  renderRoutes();
  renderAttractions();
  renderReviews();
  initNavbarScroll();
  initMobileMenu();
  initFleetFilters();
  initLocationTabs();
  initReviewsNav();
  initScrollReveal();
  initDateFields();
  addContactTracking();
  addPopupControls();
  scheduleReviewPopup();
  attachConversionTracking();
  initQuickBookingForm();
  initFloatingCtas();
  initStickyMobileBar();
  initLeadPopups();
  updateDynamicWhatsAppLinks();
});