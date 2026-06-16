
// ══════════════════════
// VEHICLE DATA
// ══════════════════════
const vehiclesRaw = [
  { id: 'swift-m', name: 'Maruti Swift', cat: 'Hatchback', type: 'hatchback', trans: 'Manual', fuel: 'Petrol', seats: 5, price: 1200, deposit: 3000, img: 'https://image2url.com/r2/default/images/1771086979849-965ca50c-72cc-4015-a047-c020fa50af0d.jpeg', auto: false },
  { id: 'swift-a', name: 'Maruti Swift', cat: 'Hatchback', type: 'hatchback', trans: 'Automatic', fuel: 'Petrol', seats: 5, price: 1500, deposit: 3000, img: 'https://image2url.com/r2/default/images/1771086979849-965ca50c-72cc-4015-a047-c020fa50af0d.jpeg', auto: true },
  { id: 'baleno-m', name: 'Maruti Baleno', cat: 'Premium Hatchback', type: 'hatchback', trans: 'Manual', fuel: 'Petrol', seats: 5, price: 1300, deposit: 3000, img: 'https://image2url.com/r2/default/images/1771081605318-cf7ecfe1-543f-4a35-8672-53cdda6ce892.jpeg', auto: false },
  { id: 'baleno-a', name: 'Maruti Baleno', cat: 'Premium Hatchback', type: 'hatchback', trans: 'Automatic', fuel: 'Petrol', seats: 5, price: 1500, deposit: 3000, img: 'https://image2url.com/r2/default/images/1771081605318-cf7ecfe1-543f-4a35-8672-53cdda6ce892.jpeg', auto: true },
  { id: 'i20-m', name: 'Hyundai i20', cat: 'Luxury Hatchback', type: 'hatchback', trans: 'Manual', fuel: 'Petrol', seats: 5, price: 1200, deposit: 3000, img: 'https://image2url.com/r2/default/images/1771085775326-5bfe945e-d68a-4474-8584-e0faa4d08a1a.jpeg', auto: false },
  { id: 'i20-a', name: 'Hyundai i20', cat: 'Luxury Hatchback', type: 'hatchback', trans: 'Automatic', fuel: 'Petrol', seats: 5, price: 1600, deposit: 3000, img: 'https://image2url.com/r2/default/images/1771084107396-de073f29-76b3-4b8d-9009-be3059a77fba.jpeg', auto: true },
  { id: 'ignis-a', name: 'Maruti Ignis', cat: 'Compact Hatchback', type: 'hatchback', trans: 'Automatic', fuel: 'Petrol', seats: 5, price: 1400, deposit: 3000, img: 'https://image2url.com/r2/default/images/1771085514586-f48442cc-255d-424b-8a86-bd933470a02e.jpeg', auto: true },
  { id: 'brezza-m', name: 'Maruti Brezza', cat: 'Compact SUV', type: 'suv', trans: 'Manual', fuel: 'Petrol', seats: 5, price: 2000, deposit: 3000, img: 'https://image2url.com/r2/default/images/1771080613820-4e08e3eb-6cf3-456d-af67-d620cf20afa2.jpeg', auto: false },
  { id: 'brezza-a', name: 'Maruti Brezza', cat: 'Compact SUV', type: 'suv', trans: 'Automatic', fuel: 'Petrol', seats: 5, price: 2500, deposit: 3000, img: 'https://image2url.com/r2/default/images/1771080613820-4e08e3eb-6cf3-456d-af67-d620cf20afa2.jpeg', auto: true },
  { id: 'creta-a', name: 'Hyundai Creta', cat: 'Premium SUV', type: 'suv', trans: 'Automatic', fuel: 'Diesel', seats: 5, price: 3500, deposit: 5000, img: 'https://image2url.com/r2/default/images/1771082168034-3cea15fd-961e-441b-827a-e772f7a0db43.png', auto: true },
  { id: 'ertiga-a', name: 'Maruti Ertiga', cat: '7-Seater MPV', type: 'family', trans: 'Automatic', fuel: 'Petrol', seats: 7, price: 2800, deposit: 3000, img: 'https://image2url.com/r2/default/images/1771083423558-6d9933ca-f849-46ea-8f35-24715d02f016.jpeg', auto: true },
  { id: 'crysta-m', name: 'Toyota Innova Crysta', cat: 'Luxury SUV', type: 'family', trans: 'Manual', fuel: 'Diesel', seats: 7, price: 3000, deposit: 5000, img: 'https://image2url.com/r2/default/images/1771082409934-b12afb7d-7dfd-42d5-a583-c6b96ae3b097.jpeg', auto: false },
  { id: 'carens-a', name: 'Kia Carens', cat: 'Premium 7-Seater', type: 'family', trans: 'Automatic', fuel: 'Diesel', seats: 7, price: 3200, deposit: 3000, img: 'https://image2url.com/r2/default/images/1771086756653-26b04aeb-abcb-4bab-bf85-f14a576e0015.jpeg', auto: true },
  { id: 'thar-soft', name: 'Mahindra Thar Soft Top', cat: 'Adventure SUV', type: 'suv', trans: 'Manual', fuel: 'Petrol', seats: 4, price: 3000, deposit: 5000, img: 'https://image2url.com/r2/default/images/1771081798127-60ce84f8-d742-4139-a67d-a559e1a46960.png', auto: false },
  { id: 'thar-hard', name: 'Mahindra Thar Hardtop', cat: 'Adventure SUV', type: 'suv', trans: 'Automatic', fuel: 'Diesel', seats: 4, price: 3500, deposit: 5000, img: 'https://image2url.com/r2/default/images/1771085007230-e3056cd4-758f-43a1-857c-024057a6fdd5.jpeg', auto: true },
  { id: 'fortuner', name: 'Toyota Fortuner', cat: 'Luxury 4x4', type: 'luxury', trans: 'Automatic', fuel: 'Diesel', seats: 7, price: 9000, deposit: 5000, img: 'https://image2url.com/r2/default/images/1771085163103-0cfc8bf6-b170-4f60-9be3-068e68b08592.jpeg', auto: true },
  { id: 'audi-a3', name: 'Audi A3', cat: 'Luxury Sedan', type: 'luxury', trans: 'Automatic', fuel: 'Petrol', seats: 5, price: 25000, deposit: 10000, img: 'https://image2url.com/r2/default/images/1771083007149-3d15f250-cca7-40dd-ba7e-8b3b78a2dbd2.jpeg', auto: true },
  { id: 'mercedes', name: 'Mercedes-Benz C300', cat: 'Luxury Convertible', type: 'luxury', trans: 'Automatic', fuel: 'Petrol', seats: 5, price: 20000, deposit: 10000, img: 'https://image2url.com/r2/default/images/1771086392720-50bf550e-b4e3-4657-841c-8440eb5f8994.jpeg', auto: true },
];

const vehicleDescriptions = {
  'swift-m': 'Compact hatchback ideal for Goa airport transfers, city cruising, and fuel-efficient travel.',
  'swift-a': 'Automatic Swift with easy handling and fast parking for quick Goa sightseeing and easy airport pickup.',
  'baleno-m': 'Premium hatchback with extra cabin space, perfect for small families and beach day trips in Goa.',
  'baleno-a': 'Automatic Baleno for comfortable coastal driving and stress-free navigation of Goa’s busy roads.',
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

const vehicles = vehiclesRaw.map(v => ({ ...v, desc: vehicleDescriptions[v.id] || '' }));

// ══════════════════════
// ROUTES DATA
// ══════════════════════
const routes = [
  { title: 'North Goa Beach Blitz', dur: '1 Day', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800', route: 'Margao → Calangute → Baga → Anjuna → Vagator', desc: 'Hit the legendary north coast beaches in one epic day. From bustling Baga to chilled Vagator, this covers all the famous spots.', tags: ['Beaches', 'Nightlife', 'Shacks'], car: 'Best in: Swift / Ignis' },
  { title: 'Old Goa Heritage Loop', dur: '1 Day', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800', route: 'Margao → Panaji → Old Goa → Dona Paula', desc: "Explore Goa's Portuguese soul — majestic basilicas, colonial mansions, the Latin Quarter, and sea-facing viewpoints.", tags: ['Heritage', 'Culture', 'Architecture'], car: 'Best in: Baleno / i20' },
  { title: 'South Goa Serenity Drive', dur: '1 Day', img: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&q=80&w=800', route: 'Margao → Colva → Benaulim → Palolem → Agonda', desc: "Quieter, more serene south beaches with pristine sands. Palolem is one of India's most beautiful crescent bays.", tags: ['Serene', 'Nature', 'Relaxation'], car: 'Best in: Brezza / Creta' },
  { title: 'Dudhsagar Adventure', dur: 'Full Day', img: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&q=80&w=800', route: 'Margao → Dudhsagar → Wildlife Sanctuary', desc: "Chase Goa's spectacular Dudhsagar waterfall through wildlife reserve roads. Rugged terrain, incredible views, unforgettable.", tags: ['Adventure', 'Wildlife', 'Waterfall'], car: 'Best in: Thar Hardtop / Fortuner' },
  { title: 'Goa Coastal Sunset Tour', dur: '4 Hours', img: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&q=80&w=800', route: 'Margao → Fort Aguada → Sinquerim → Candolim', desc: "The golden hour drive along Goa's coast, ending at the iconic Fort Aguada for a breathtaking sunset over the Arabian Sea.", tags: ['Sunset', 'Fort', 'Photography'], car: 'Best in: Mini Cooper / Audi' },
  { title: 'Spice Farm &amp; Temples', dur: '1 Day', img: 'https://images.unsplash.com/photo-1564417975723-8e60ddb4e0c7?auto=format&fit=crop&q=80&w=800', route: 'Margao → Ponda Spice Farms → Shri Mangeshi Temple', desc: 'Authentic Goa — fragrant spice plantations, traditional cooking, and ancient temples away from the tourist rush.', tags: ['Culture', 'Food', 'Temples'], car: 'Best in: Ertiga / Innova Crysta' },
];

// ══════════════════════
// NAVBAR
// ══════════════════════
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  hamburger && hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
    mobileMenu.setAttribute('aria-hidden', !open);
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  initParticles();
  renderFleet(vehicles);
  renderRoutes();
  initScrollAnim();
});

window.closeMobileMenu = function () {
  const h = document.getElementById('hamburger');
  const m = document.getElementById('mobile-menu');
  h && h.classList.remove('open');
  m && m.classList.remove('open');
  h && h.setAttribute('aria-expanded', 'false');
  m && m.setAttribute('aria-hidden', 'true');
};

// ══════════════════════
// PARTICLES
// ══════════════════════
function initParticles() {
  const c = document.getElementById('hero-particles');
  if (!c) return;
  const n = window.innerWidth < 768 ? 18 : 36;
  for (let i = 0; i < n; i++) {
    const p = document.createElement('div');
    p.className = 'hero-particle';
    p.style.cssText = `left:${Math.random() * 100}%;width:${Math.random() * 2 + 1}px;height:${p.style.width};animation-duration:${Math.random() * 8 + 6}s;animation-delay:${Math.random() * 8}s;opacity:${Math.random() * .5 + .2}`;
    c.appendChild(p);
  }
}

// ══════════════════════
// FLEET RENDER
// ══════════════════════
function renderFleet(list) {
  const g = document.getElementById('fleet-grid');
  if (!g) return;
  if (!list.length) { g.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:3rem">No vehicles match this filter. <a href="#contact" style="color:var(--neon)">Contact us</a> for custom options.</p>'; return; }
  g.innerHTML = list.map(v => `
    <div class="vc fade-in">
      <div class="vc-img-wrap">
        <img src="${v.img}" alt="${v.name} — Car Rental in Goa" loading="lazy" decoding="async" width="800" height="500" onerror="this.src='https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800'">
        <div class="vc-img-grad"></div>
        <span class="vc-cat">${v.cat}</span>
        <div class="vc-price-badge">
          <span class="dep-lbl">Deposit</span>
          <span class="dep-amt">₹${v.deposit.toLocaleString('en-IN')}</span>
        </div>
      </div>
      <div class="vc-body">
        <div class="vc-name">${v.name} <span style="font-size:.72rem;font-weight:500;color:var(--text-muted)">(${v.trans})</span></div>
        <div class="vc-specs">
          <span><i class="bi bi-fuel-pump-fill"></i> ${v.fuel}</span>
          <span><i class="bi bi-people-fill"></i> ${v.seats} Seats</span>
          <span><i class="bi bi-gear-fill"></i> ${v.trans}</span>
        </div>
        <p class="vc-desc">${v.desc}</p>
        <div class="price-row">
          <button class="price-btn" onclick="bookWA('${v.name}','${v.trans}',${v.price},${v.deposit})">
            ₹${v.price.toLocaleString('en-IN')}/day — Book Now
          </button>
        </div>
        <div class="vc-fuel-note">* Price per day. Fuel not included.</div>
      </div>
      <div class="vc-btns">
        <a href="tel:+919975356697" class="vc-btn-call" onclick="gtag('event','conversion',{'send_to':'AW-7510098927/CALL_EVENT'})"><i class="bi bi-telephone-fill"></i> CALL</a>
        <a href="#" class="vc-btn-wa-sm" onclick="bookWA('${v.name}','${v.trans}',${v.price},${v.deposit});return false"><i class="bi bi-whatsapp"></i> WhatsApp</a>
      </div>
    </div>`).join('');
  initScrollAnim();
}

window.filterFleet = function (filter, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false') });
  btn.classList.add('active');
  btn.setAttribute('aria-pressed', 'true');
  let list;
  switch (filter) {
    case 'hatchback': list = vehicles.filter(v => v.type === 'hatchback'); break;
    case 'suv': list = vehicles.filter(v => v.type === 'suv'); break;
    case 'family': list = vehicles.filter(v => v.type === 'family'); break;
    case 'luxury': list = vehicles.filter(v => v.type === 'luxury'); break;
    case 'auto': list = vehicles.filter(v => v.auto); break;
    default: list = vehicles;
  }
  renderFleet(list);
};

function bookWA(name, trans, price, deposit) {
  const msg = `🚗 *Car Booking Inquiry — Royal Goa Ride*\n\nCar: ${name}\nTransmission: ${trans}\nPrice: ₹${price}/day\nDeposit: ₹${deposit} (refundable)\n\nPlease confirm availability and next steps. Thank you!`;
  window.open('https://wa.me/919975356697?text=' + encodeURIComponent(msg), '_blank');
}

// ══════════════════════
// ROUTES
// ══════════════════════
function renderRoutes() {
  const g = document.getElementById('routes-grid');
  if (!g) return;
  g.innerHTML = routes.map(r => `
    <div class="route-card fade-in">
      <div class="route-img">
        <img src="${r.img}" alt="${r.title} — Goa Self Drive Route" loading="lazy" decoding="async" width="800" height="400">
        <div class="route-img-overlay"></div>
        <span class="route-dur">${r.dur}</span>
        <span class="route-label">${r.title}</span>
      </div>
      <div class="route-body">
        <div class="route-path"><i class="bi bi-geo-alt"></i> ${r.route}</div>
        <p class="route-desc">${r.desc}</p>
        <div class="route-tags">${r.tags.map(t => `<span class="route-tag">${t}</span>`).join('')}</div>
        <div style="font-size:.73rem;color:var(--text-muted);margin-top:.6rem;display:flex;align-items:center;gap:6px"><i class="bi bi-car-front" style="color:var(--neon)"></i> ${r.car}</div>
      </div>
    </div>`).join('');
}

// ══════════════════════
// FAQ
// ══════════════════════
window.toggleFaq = function (btn) {
  const a = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-q.open').forEach(q => { q.classList.remove('open'); q.setAttribute('aria-expanded', 'false'); q.nextElementSibling.classList.remove('open') });
  if (!isOpen) { btn.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); a.classList.add('open'); }
};

// ══════════════════════
// QUOTE FORM
// ══════════════════════
window.submitQuote = function () {
  const f = document.getElementById('quote-form');
  if (!f) return;
  const name = f.querySelector('[name=name]').value || 'Guest';
  const phone = f.querySelector('[name=phone]').value || '';
  const pickup = f.querySelector('[name=pickup_date]').value || '';
  const ret = f.querySelector('[name=return_date]').value || '';
  const veh = f.querySelector('[name=vehicle_type]').value || 'Any';
  const loc = f.querySelector('[name=location]').value || '';
  const msg = `Hi! I want an instant quote for car rental in Goa:\n\nName: ${name}\nPhone: ${phone}\nPickup Date: ${pickup}\nReturn Date: ${ret}\nVehicle: ${veh}\nPickup Location: ${loc}\n\nPlease share availability and pricing. Thank you!`;
  if (window.dataLayer) dataLayer.push({ event: 'instant_quote', method: 'form' });
  window.open('https://wa.me/919975356697?text=' + encodeURIComponent(msg), '_blank');
};

// ══════════════════════
// SCROLL ANIMATIONS
// ══════════════════════
function initScrollAnim() {
  const els = document.querySelectorAll('.fade-in:not(.visible)');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: .1 });
  els.forEach((el, i) => { el.style.transitionDelay = `${(i % 6) * 0.07}s`; obs.observe(el); });
}

// ══════════════════════
// TRACKING
// ══════════════════════
document.addEventListener('DOMContentLoaded', () => {
  function track(ep) { fetch(ep, { method: 'POST', body: JSON.stringify({ page: location.pathname, time: new Date().toISOString() }), headers: { 'Content-Type': 'application/json' } }).catch(() => { }); }
  track('/api/visit');
  document.querySelectorAll('a[href^="tel:"]').forEach(a => a.addEventListener('click', () => track('/api/call')));
  document.querySelectorAll('a[href*="wa.me"]').forEach(a => a.addEventListener('click', () => track('/api/whatsapp')));
});

console.log('Royal Goa Ride — Premium Redesign v4.0 Loaded');
