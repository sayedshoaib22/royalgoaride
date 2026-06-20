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
  { name: 'Amit Kumar', location: 'Mumbai', rating: 5, text: 'Outstanding car rental experience! The booking was quick, the car was spotless, and the team delivered it right to my hotel.' },
  { name: 'Priya Sharma', location: 'Delhi', rating: 5, text: 'Smooth process from start to finish. The rental was in perfect condition. Delivery at 11pm was seamless.' },
  { name: 'Sneha Mehra', location: 'Pune', rating: 5, text: 'Best self-drive rental in Goa, no question. Honest pricing, clean car, team was super helpful with local tips.' },
  { name: 'Rajesh Patel', location: 'Ahmedabad', rating: 5, text: 'Travelled with family of 5 — the car was perfect. Delivered to our hotel on time, clean and fully fuelled.' },
  { name: 'Kiran Nair', location: 'Bangalore', rating: 5, text: 'Excellent service! Rented an SUV for 5 days — perfect for exploring Goa. Always available on WhatsApp.' },
  { name: 'Michael Torres', location: 'London', rating: 5, text: 'Monthly rental for 6 weeks — got an incredible deal and a reliable car throughout my stay. Perfect for long stays.' }
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
          <div class="vehicle-price">\u20b9${price.toLocaleString('en-IN')}<span>/day</span></div>
          <div class="vehicle-price-auto">Deposit \u20b9${v.deposit.toLocaleString('en-IN')}</div>
        </div>
        <div class="vehicle-card-actions">
          <a href="${waLink('Hi, I want details about ' + v.name)}" class="btn-view-details" target="_blank" rel="noopener noreferrer">View Details</a>
          <a href="${waLink('Hi, I want to book the ' + v.name + ' in Goa')}" class="btn-book-car" target="_blank" rel="noopener noreferrer">Book Now</a>
        </div>
      </div>
    </div>`;
  }).join('');
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
        <div class="reviewer-avatar">${r.name.charAt(0)}</div>
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
function renderFAQ() {
  const grid = document.getElementById('faq-accordion');
  if (!grid) return;
  grid.innerHTML = faqData.map((f, i) => `
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
  const perPage = window.innerWidth < 640 ? 1 : (window.innerWidth < 1024 ? 2 : 3);
  const totalPages = Math.ceil(reviewsData.length / perPage);
  if (prev) prev.addEventListener('click', () => {
    reviewPage = (reviewPage - 1 + totalPages) % totalPages;
    renderReviews();
  });
  if (next) next.addEventListener('click', () => {
    reviewPage = (reviewPage + 1) % totalPages;
    renderReviews();
  });
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
  const targets = document.querySelectorAll('.fleet-section, .why-section, .locations-section, .routes-section, .attractions-section, .reviews-section, .process-section, .founder-section, .faq-section');
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.counter-num');
        if (counters.length) animateCounters();
      }
    });
  }, { threshold: 0.2 });

  const countersSection = document.querySelector('.counters-section');
  if (countersSection) observer.observe(countersSection);
}

/* ── SET MIN DATES ── */
function initDateFields() {
  const pickup = document.getElementById('pickup-date');
  const ret = document.getElementById('return-date');
  if (!pickup) return;
  const today = new Date().toISOString().split('T')[0];
  pickup.min = today;
  if (ret) ret.min = today;
  pickup.addEventListener('change', () => {
    if (ret) ret.min = pickup.value;
  });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  renderFleet('all');
  renderLocations('airports');
  renderRoutes();
  renderAttractions();
  renderReviews();
  renderFAQ();
  initNavbarScroll();
  initMobileMenu();
  initFleetFilters();
  initLocationTabs();
  initReviewsNav();
  initScrollReveal();
  initDateFields();
});
