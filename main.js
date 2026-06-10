/**
 * RoyalGoaRide — Cinematic Futuristic Redesign
 * main.js — All interactivity, animations, data rendering
 */

// ══════════════════════════════════════════════
// VEHICLE DATA
// ══════════════════════════════════════════════

const vehicles = [
  // ── CARS: Manual & Automatic ──
  {
    id: 'baleno', name: 'Maruti Baleno', type: 'car', category: 'Luxury Hatchback', pricePerDay: 1300, deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771081605318-cf7ecfe1-543f-4a35-8672-53cdda6ce892.jpeg',
    transmission: 'Manual', fuel: 'Petrol', seats: 5, features: ['Manual Available', 'Spacious Cabin', '360 Camera', 'Cruise Control']
  },
  {
    id: 'baleno', name: 'Maruti Baleno', type: 'car', category: 'Luxury Hatchback', pricePerDay: 1500, deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771081605318-cf7ecfe1-543f-4a35-8672-53cdda6ce892.jpeg',
    transmission: 'Automatic', fuel: 'Petrol', seats: 5, features: ['Auto Available', 'Spacious Cabin', '360 Camera', 'Cruise Control']
  },
  {
    id: 'swift', name: 'Maruti Swift', type: 'car', category: 'Premium Hatchback', pricePerDay: 1500, deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771086979849-965ca50c-72cc-4015-a047-c020fa50af0d.jpeg',
    transmission: 'Automatic', fuel: 'Petrol', seats: 5, features: ['Auto Available', 'Sporty Drive', 'Keyless Entry', 'Bluetooth']
  },
  {
    id: 'swift', name: 'Maruti Swift', type: 'car', category: 'Premium Hatchback', pricePerDay: 1200, deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771086979849-965ca50c-72cc-4015-a047-c020fa50af0d.jpeg',
    transmission: 'Manual', fuel: 'Petrol', seats: 5, features: ['Manual Available', 'Sporty Drive', 'Keyless Entry', 'Bluetooth']
  },
  {
    id: 'i20', name: 'Hyundai i20', type: 'car', category: 'Luxury Hatchback', pricePerDay: 1600, deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771084107396-de073f29-76b3-4b8d-9009-be3059a77fba.jpeg',
    transmission: 'Automatic', fuel: 'Petrol', seats: 5, features: ['Auto Available', 'Sunroof', 'Premium Audio', 'Air Purifier']
  },
  {
    id: 'i20', name: 'Hyundai i20', type: 'car', category: 'Luxury Hatchback', pricePerDay: 1200, deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771085775326-5bfe945e-d68a-4474-8584-e0faa4d08a1a.jpeg',
    transmission: 'Manual', fuel: 'Petrol', seats: 5, features: ['Manual Available', 'Sunroof', 'Premium Audio', 'Air Purifier']
  },
  {
    id: 'ignis', name: 'Maruti Ignis', type: 'car', category: 'Compact Hatchback', pricePerDay: 1400, deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771085514586-f48442cc-255d-424b-8a86-bd933470a02e.jpeg',
    transmission: 'Automatic', fuel: 'Petrol', seats: 5, features: ['Auto Available', 'Compact Design', 'Touchscreen', 'Reverse Sensors']
  },
  {
    id: 'ignis', name: 'Maruti Ignis', type: 'car', category: 'Compact Hatchback', pricePerDay: 1200, deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771085703961-71ea43b9-14f6-452a-a93d-1d8b86afdd50.jpeg',
    transmission: 'Manual', fuel: 'Petrol', seats: 5, features: ['Manual Available', 'Compact Design', 'Touchscreen', 'Reverse Sensors']
  },
  {
    id: 'mercedes_c300', name: 'Mercedes-Benz C300', type: 'car', category: 'Luxury Sedan', pricePerDay: 20000, deposit: 10000,
    image: 'https://image2url.com/r2/default/images/1771086392720-50bf550e-b4e3-4657-841c-8440eb5f8994.jpeg',
    transmission: 'Automatic', fuel: 'Petrol', seats: 5, features: ['Luxury Convertible', 'Sunroof', 'Dual-Zone AC', 'Premium Sound']
  },
  {
    id: 'brezza', name: 'Maruti Brezza', type: 'car', category: 'Compact SUV', pricePerDay: 2000, deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771080613820-4e08e3eb-6cf3-456d-af67-d620cf20afa2.jpeg',
    transmission: 'Manual', fuel: 'Petrol', seats: 5, features: ['Manual Available', 'Sunroof', 'High Ground Clearance', 'Smart Hybrid']
  },
  {
    id: 'brezza', name: 'Maruti Brezza', type: 'car', category: 'Compact SUV', pricePerDay: 2500, deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771080613820-4e08e3eb-6cf3-456d-af67-d620cf20afa2.jpeg',
    transmission: 'Automatic', fuel: 'Petrol', seats: 5, features: ['Auto Available', 'Sunroof', 'High Ground Clearance', 'Smart Hybrid']
  },
  {
    id: 'creta', name: 'Hyundai Creta', type: 'car', category: 'Premium SUV', pricePerDay: 3500, deposit: 5000,
    image: 'https://image2url.com/r2/default/images/1771082168034-3cea15fd-961e-441b-827a-e772f7a0db43.png',
    transmission: 'Automatic', fuel: 'Diesel', seats: 5, features: ['Auto Available', 'Panoramic Sunroof', 'Ventilated Seats', 'Bose Speakers']
  },
  {
    id: 'creta', name: 'Hyundai Creta', type: 'car', category: 'Premium SUV', pricePerDay: 3000, deposit: 5000,
    image: 'https://image2url.com/r2/default/images/1771081314416-a3bc164b-c3e0-4074-aff3-0f79b2454253.jpeg',
    transmission: 'Manual', fuel: 'Diesel', seats: 5, features: ['Manual Available', 'Panoramic Sunroof', 'Ventilated Seats', 'Bose Speakers']
  },
  {
    id: 'ertiga', name: 'Maruti Ertiga', type: 'car', category: 'SUV / 7 Seater', pricePerDay: 2300, deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771083423558-6d9933ca-f849-46ea-8f35-24715d02f016.jpeg',
    transmission: 'Manual', fuel: 'Petrol', seats: 7, features: ['Manual Available', 'Perfect for Families', 'Rear AC Vents', 'Flexible Seating']
  },
  {
    id: 'ertiga', name: 'Maruti Ertiga', type: 'car', category: 'SUV / 7 Seater', pricePerDay: 2800, deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771083423558-6d9933ca-f849-46ea-8f35-24715d02f016.jpeg',
    transmission: 'Automatic', fuel: 'Petrol', seats: 7, features: ['Auto Available', 'Perfect for Families', 'Rear AC Vents', 'Flexible Seating']
  },
  {
    id: 'carens', name: 'Kia Carens', type: 'car', category: 'Premium SUV', pricePerDay: 3200, deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771086756653-26b04aeb-abcb-4bab-bf85-f14a576e0015.jpeg',
    transmission: 'Automatic', fuel: 'Diesel', seats: 7, features: ['Auto Available', '6 Airbags', 'Ambient Lighting', 'Smart Storage']
  },
  {
    id: 'carens', name: 'Kia Carens', type: 'car', category: 'Premium SUV', pricePerDay: 3000, deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771086756653-26b04aeb-abcb-4bab-bf85-f14a576e0015.jpeg',
    transmission: 'Manual', fuel: 'Diesel', seats: 7, features: ['Manual Available', '6 Airbags', 'Ambient Lighting', 'Smart Storage']
  },
  {
    id: 'crysta', name: 'Toyota Innova Crysta', type: 'car', category: 'Luxury SUV', pricePerDay: 3000, deposit: 5000,
    image: 'https://image2url.com/r2/default/images/1771082409934-b12afb7d-7dfd-42d5-a583-c6b96ae3b097.jpeg',
    transmission: 'Manual', fuel: 'Diesel', seats: 7, features: ['Manual Available', 'Maximum Comfort', 'Legendary Reliability', 'Premium Leather']
  },
  {
    id: 'crysta', name: 'Toyota Innova Crysta', type: 'car', category: 'Luxury SUV', pricePerDay: 3500, deposit: 5000,
    image: 'https://image2url.com/r2/default/images/1771082409934-b12afb7d-7dfd-42d5-a583-c6b96ae3b097.jpeg',
    transmission: 'Automatic', fuel: 'Diesel', seats: 7, features: ['Auto Available', 'Maximum Comfort', 'Legendary Reliability', 'Premium Leather']
  },
  {
    id: 'thar-ht', name: 'Mahindra Thar Hardtop', type: 'car', category: 'Adventure SUV', pricePerDay: 3500, deposit: 5000,
    image: 'https://image2url.com/r2/default/images/1771085007230-e3056cd4-758f-43a1-857c-024057a6fdd5.jpeg',
    transmission: 'Automatic', fuel: 'Diesel', seats: 4, features: ['Auto Available', '4x4 Drivetrain', 'Rugged Build', 'Touchscreen']
  },
  {
    id: 'thar-conv', name: 'Mahindra Thar Soft Top', type: 'car', category: 'Adventure SUV', pricePerDay: 3000, deposit: 5000,
    image: 'https://image2url.com/r2/default/images/1771081798127-60ce84f8-d742-4139-a67d-a559e1a46960.png',
    transmission: 'Manual', fuel: 'Petrol', seats: 4, features: ['Manual Available', 'Convertible Top', 'Iconic Style', 'All Terrain Tires']
  },
  {
    id: 'thar-conv', name: 'Mahindra Thar Soft Top', type: 'car', category: 'Adventure SUV', pricePerDay: 3500, deposit: 5000,
    image: 'https://image2url.com/r2/default/images/1771081798127-60ce84f8-d742-4139-a67d-a559e1a46960.png',
    transmission: 'Automatic', fuel: 'Petrol', seats: 4, features: ['Auto Available', 'Convertible Top', 'Iconic Style', 'All Terrain Tires']
  },
  // ── CARS: Automatic Only ──
  {
    id: 'thar-roxx', name: 'Mahindra Thar Roxx', type: 'car', category: 'Premium 4x4 SUV', pricePerDay: 7000, deposit: 5000,
    image: 'https://image2url.com/r2/default/images/1771084019004-13492275-dca8-4f5a-b2e5-e1527576fe03.jpg',
    transmission: 'Automatic Only', fuel: 'Diesel', seats: 5, features: ['Automatic Only', 'Premium Interiors', 'Powerful Engine', 'Advanced Safety']
  },
  {
    id: 'fortuner', name: 'Toyota Fortuner', type: 'car', category: 'Luxury SUV', pricePerDay: 9000, deposit: 5000,
    image: 'https://image2url.com/r2/default/images/1771085163103-0cfc8bf6-b170-4f60-9be3-068e68b08592.jpeg',
    transmission: 'Automatic Only', fuel: 'Diesel', seats: 7, features: ['Automatic Only', 'Road Dominance', '4x4 Capability', 'VIP Presence']
  },
  {
    id: 'hycross', name: 'Toyota Innova Hycross', type: 'car', category: 'Luxury Hybrid SUV', pricePerDay: 3500, deposit: 5000,
    image: 'https://image2url.com/r2/default/images/1771086867555-f1b998ba-9d26-4c0e-b1c8-d55ddb7e33b8.jpeg',
    transmission: 'Automatic Only', fuel: 'Petrol Hybrid', seats: 7, features: ['Automatic Only', 'Hybrid Efficiency', 'Ottoman Seats', 'ADAS Tech']
  },
  {
    id: 'audi-a3', name: 'Audi A3', type: 'car', category: 'Luxury Sedan', pricePerDay: 25000, deposit: 10000,
    image: 'https://image2url.com/r2/default/images/1771083007149-3d15f250-cca7-40dd-ba7e-8b3b78a2dbd2.jpeg',
    transmission: 'Automatic Only', fuel: 'Petrol', seats: 5, features: ['Automatic Only', 'German Engineering', 'Matrix LED', 'Virtual Cockpit']
  },
  {
    id: 'mini-cooper', name: 'Mini Cooper', type: 'car', category: 'Luxury Icon', pricePerDay: 25000, deposit: 10000,
    image: 'https://image2url.com/r2/default/images/1771083165899-7695a97a-57e7-4cf7-98c7-9f88cc0a2dbe.jpeg',
    transmission: 'Automatic Only', fuel: 'Petrol', seats: 4, features: ['Automatic Only', 'Go-Kart Handling', 'British Icon', 'Premium Style']
  },
  // ── BIKES ──
  {
    id: 'activa', name: 'Activa 125', type: 'bike', category: 'Scooter', pricePerDay: 500, deposit: 1000,
    image: 'https://image2url.com/r2/default/images/1771142393014-49d9578b-16b2-4e2e-b958-77fcbba93a25.jpeg',
    transmission: 'Automatic', fuel: 'Petrol', seats: 2, features: ['Comfortable Ride', 'Easy Handling', 'Great Mileage', 'Under-seat Storage']
  },
  {
    id: 'fasino', name: 'Yamaha Fasino', type: 'bike', category: 'Scooter', pricePerDay: 600, deposit: 1000,
    image: 'https://image2url.com/r2/default/images/1771141146471-5eb9de67-def0-4725-890d-4e4dbeae6b9e.jpeg',
    transmission: 'Automatic', fuel: 'Petrol', seats: 2, features: ['Comfortable Ride', 'Easy Handling', 'Great Mileage', 'Under-seat Storage']
  },
  {
    id: 'hunter', name: 'Royal Enfield Hunter 350', type: 'bike', category: 'Cruiser', pricePerDay: 2000, deposit: 2000,
    image: 'https://images.unsplash.com/photo-1689599943500-0f73b9e5b78b?q=80&w=800&auto=format&fit=crop',
    transmission: 'Manual', fuel: 'Petrol', seats: 2, features: ['Agile Handling', 'Modern Retro', 'Punchy Engine', 'Comfort Seating']
  },
  {
    id: 'bullet', name: 'Royal Enfield Bullet 350', type: 'bike', category: 'Classic Cruiser', pricePerDay: 2000, deposit: 2000,
    image: 'https://images.unsplash.com/photo-1655179552613-4532b003cd50?q=80&w=800&auto=format&fit=crop',
    transmission: 'Manual', fuel: 'Petrol', seats: 2, features: ['Iconic Thump', 'Vintage Design', 'Heavy Presence', 'Built for Roads']
  }
];

// ══════════════════════════════════════════════
// TRIP PLANNER DATA
// ══════════════════════════════════════════════

const trips = [
  {
    title: 'North Goa Beach Blitz',
    duration: '1 Day',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800',
    route: 'Margao → Calangute → Baga → Anjuna → Vagator',
    desc: 'Hit the legendary north coast beaches in one epic day. From bustling Baga to chilled Vagator, this route covers all the famous spots.',
    tags: ['Beaches', 'Nightlife', 'Shacks', 'Water Sports'],
    carRec: 'Best in: Ignis / Swift (Compact & Easy Parking)'
  },
  {
    title: 'Old Goa Heritage Loop',
    duration: '1 Day',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
    route: 'Margao → Panaji → Old Goa → Dona Paula',
    desc: "Explore Goa's Portuguese soul — majestic basilicas, colonial mansions, the capital's Latin Quarter, and sea-facing viewpoints.",
    tags: ['Heritage', 'Culture', 'Architecture', 'Views'],
    carRec: 'Best in: Baleno / i20 (Comfortable for Sightseeing)'
  },
  {
    title: 'South Goa Serenity Drive',
    duration: '1 Day',
    image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&q=80&w=800',
    route: 'Margao → Colva → Benaulim → Palolem → Agonda',
    desc: 'Quieter, more serene south beaches with pristine sands and laid-back vibes. Palolem beach is one of India\'s most beautiful.',
    tags: ['Serene', 'Nature', 'Beaches', 'Relaxation'],
    carRec: 'Best in: Maruti Brezza / Creta (Comfort + Ground Clearance)'
  },
  {
    title: 'Jungle & Waterfall Adventure',
    duration: '2 Days',
    image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&q=80&w=800',
    route: 'Margao → Dudhsagar Falls → Bhagwan Mahaveer Sanctuary',
    desc: "Chase Goa's spectacular Dudhsagar waterfall through wildlife reserve roads. Rugged terrain, incredible views, unforgettable experience.",
    tags: ['Adventure', 'Wildlife', 'Waterfall', 'Offroad'],
    carRec: 'Best in: Thar Hardtop / Fortuner (4x4 for Tough Roads)'
  },
  {
    title: 'Spice Farm & Village Life',
    duration: '1 Day',
    image: 'https://images.unsplash.com/photo-1564417975723-8e60ddb4e0c7?auto=format&fit=crop&q=80&w=800',
    route: 'Margao → Ponda Spice Farms → Shri Mangeshi Temple',
    desc: 'Immerse in authentic Goa — fragrant spice plantations, traditional Goan cooking, and ancient temples away from the tourist rush.',
    tags: ['Culture', 'Food', 'Authentic', 'Temples'],
    carRec: 'Best in: Ertiga / Innova Crysta (Great for Families)'
  },
  {
    title: 'Goa Sunset Coastal Tour',
    duration: '4 Hours',
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&q=80&w=800',
    route: 'Margao → Fort Aguada → Sinquerim → Candolim',
    desc: 'The golden hour drive along Goa\'s coastline, ending at the iconic Fort Aguada for a breathtaking sunset over the Arabian Sea.',
    tags: ['Sunset', 'Fort', 'Coastal', 'Photography'],
    carRec: 'Best in: Mini Cooper / Audi (Feel the Breeze in Style)'
  }
];

// ══════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════

let currentFleetFilter = 'all';
let fleetOffset = 0;
let filteredVehicles = [];

// ══════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initNavbar();
  initParticles();
  initCounters();
  initFleet('car');
  initTrips();
  initTimeline();
  initFAQ();
  initScrollAnimations();
});

// ── LOADING SCREEN ──
function initLoadingScreen() {
  const screen = document.getElementById('loading-screen');
  if (!screen) return;
  setTimeout(() => {
    screen.classList.add('hidden');
  }, 1600);
}

// ── NAVBAR ──
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

window.closeMobileMenu = function () {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger) hamburger.classList.remove('open');
  if (mobileMenu) mobileMenu.classList.remove('open');
};

// ── PARTICLES ──
function initParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;
  const count = window.innerWidth < 768 ? 20 : 40;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'hero-particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.width = (Math.random() * 2 + 1) + 'px';
    p.style.height = p.style.width;
    const dur = (Math.random() * 8 + 6) + 's';
    const delay = (Math.random() * 8) + 's';
    p.style.animationDuration = dur;
    p.style.animationDelay = delay;
    p.style.opacity = Math.random() * 0.6 + 0.2;
    container.appendChild(p);
  }
}

// ── COUNTER ANIMATION ──
function initCounters() {
  const counters = document.querySelectorAll('.stat-num');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target) || 0;
  const duration = 1800;
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

// ── FLEET ──
function initFleet(type = "car") {
  if (type === "bike") {
    filteredVehicles = vehicles.filter(v => v.type === "bike");
  } else {
    filteredVehicles = vehicles.filter(v => v.type === "car");
  }
  renderFleetCards();
}

window.filterFleet = function (filter, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentFleetFilter = filter;
  fleetOffset = 0;

  if (filter === 'all') {
    filteredVehicles = [...vehicles];
  } else if (filter === 'luxury') {
    filteredVehicles = vehicles.filter(v => v.pricePerDay >= 5000);
  } else if (filter === 'automatic') {
    filteredVehicles = vehicles.filter(v => v.transmission.toLowerCase().includes('auto'));
  } else {
    filteredVehicles = vehicles.filter(v => v.type === filter);
  }
  renderFleetCards();
};

function renderFleetCards() {
  const container = document.getElementById('fleet-carousel');
  if (!container) return;

  // Group vehicles by name so Auto+Manual appear on ONE card
  const grouped = {};
  filteredVehicles.forEach(v => {
    const key = v.id + '_' + v.name.trim();
    if (!grouped[key]) {
      grouped[key] = { ...v, variants: [] };
    }
    grouped[key].variants.push({ transmission: v.transmission, price: v.pricePerDay });
  });

  const cards = Object.values(grouped);

  container.innerHTML = cards.map((v, i) => {
    // Sort: Automatic first
    const variants = v.variants.sort((a, b) => {
      const aAuto = a.transmission.toLowerCase().includes('auto');
      const bAuto = b.transmission.toLowerCase().includes('auto');
      return bAuto - aAuto;
    });

    const hasAuto = variants.find(vv => vv.transmission.toLowerCase().includes('auto'));
    const hasManual = variants.find(vv => !vv.transmission.toLowerCase().includes('auto') || vv.transmission.toLowerCase() === 'manual');

    // calculate minimum price for badge
    const minPrice = variants.reduce((min, v) => v.price < min ? v.price : min, variants[0].price);

    // ── Price boxes ──
    let priceBoxesHTML = '';
    let onlyNoteHTML = '';

    if (hasAuto && hasManual) {
      priceBoxesHTML = `
        <div class="price-row">
          <button class="price-btn auto" onclick="sendBookingWA('${v.type}','${v.name}','Automatic',${hasAuto.price},${v.deposit})">
            ⚙ Automatic ₹${hasAuto.price.toLocaleString('en-IN')}
          </button>
          <button class="price-btn manual" onclick="sendBookingWA('${v.type}','${v.name}','Manual',${hasManual.price},${v.deposit})">
            ⚙ Manual ₹${hasManual.price.toLocaleString('en-IN')}
          </button>
        </div>`;
    } else if (hasAuto) {
      priceBoxesHTML = `
        <div class="price-row">
          <button class="price-btn auto" onclick="sendBookingWA('${v.type}','${v.name}','Automatic',${hasAuto.price},${v.deposit})">
            ⚙ Automatic ₹${hasAuto.price.toLocaleString('en-IN')}
          </button>
        </div>`;
      onlyNoteHTML = `<div class="vc-only-note">Automatic only</div>`;
    } else {
      priceBoxesHTML = `
        <div class="price-row">
          <button class="price-btn manual" onclick="sendBookingWA('${v.type}','${v.name}','Manual',${hasManual.price},${v.deposit})">
            ⚙ Manual ₹${hasManual.price.toLocaleString('en-IN')}
          </button>
        </div>`;
      onlyNoteHTML = `<div class="vc-only-note">Manual only</div>`;
    }

    // ── WhatsApp message builder per variant ──
    function buildWAMsg(vehicleType, name, transmission, price, deposit) {
      if (vehicleType === "car") {
        return encodeURIComponent(
          `🚗 *Vehicle Booking Inquiry - RoyalGoaRide*

Hello Team 👋,
Car: ${name}
Transmission: ${transmission}
Price: ₹${price.toLocaleString('en-IN')} per day
Pickup Date:
Return Date:

🔥 Only 5 Cars Left Today
⭐ Real customer reviews available
🚗 Airport pickup available

Please share availability and next steps. Thank you!`
        );
      }

      if (vehicleType === "bike") {
        return encodeURIComponent(
          `🏍️ *Bike Booking Inquiry - RoyalGoaRide*

Hello Team 👋, I'm interested in booking:

🏍️ *Bike:* ${name}
⚙️ *Transmission:* ${transmission}
💰 *Price:* ₹${price.toLocaleString('en-IN')}/day
🔒 *Refundable Deposit:* ₹${deposit.toLocaleString('en-IN')}

Please confirm:
✅ Availability
📍 Pickup location
📄 Required documents
💳 Helmet & deposit info

🌴 Excited for Goa ride! 🏖️`
        );
      }
    }



    return `
    <div class="vc" data-index="${i}">
      <div class="vc-img-wrap">
        <div class="vc-price-badge">₹${minPrice.toLocaleString('en-IN')}</div>
        <img src="${v.image}" alt="${v.name}" loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800'">
        <div class="vc-img-grad"></div>
        <span class="vc-cat">${v.category}</span>
        <div class="vc-deposit-badge">
          <span class="vc-deposit-badge-label">Deposit</span>
          <span class="vc-deposit-badge-amount">₹${v.deposit.toLocaleString('en-IN')}</span>
        </div>
      </div>
      <div class="vc-body">
        <div class="vc-name">${v.name}</div>
        <div class="vc-specs">
          <span><i class="bi bi-fuel-pump-fill"></i> ${v.fuel}</span>
          <span><i class="bi bi-people-fill"></i> ${v.seats} Seats</span>
        </div>
        ${priceBoxesHTML}
        ${onlyNoteHTML}
        <div class="vc-fuel-note">* Per day price excludes fuel</div>
      </div>
      <div class="vc-btns">
        <a href="tel:+919975356697" class="vc-btn-call-full">
          <i class="bi bi-telephone-fill"></i> CALL
        </a>
      </div>
    </div>`;
  }).join('');

  // done
}

window.bookVehicleWA = function (name, price, deposit) {
  const dep = deposit ? ` | Deposit: ₹${deposit.toLocaleString('en-IN')}` : '';
  const msg = encodeURIComponent(`Hi, I want to book: ${name} — ₹${price.toLocaleString('en-IN')}/day${dep}. Please confirm availability and dates.`);
  window.open(`https://wa.me/919975356697?text=${msg}`, '_blank');
};

// ── TRIPS ──
function initTrips() {
  const grid = document.getElementById('trips-grid');
  if (!grid) return;

  grid.innerHTML = trips.map((t, i) => `
    <div class="trip-card" style="animation-delay:${i * 0.1}s">
      <div class="trip-img">
        <img src="${t.image}" alt="${t.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800'">
        <div class="trip-img-overlay"></div>
        <span class="trip-duration">${t.duration}</span>
        <span class="trip-label">${t.title}</span>
      </div>
      <div class="trip-body">
        <div class="trip-route"><i class="bi bi-geo-alt"></i> ${t.route}</div>
        <p class="trip-desc">${t.desc}</p>
        <div class="trip-tags">${t.tags.map(tag => `<span class="trip-tag">${tag}</span>`).join('')}</div>
        <div class="trip-car-rec"><i class="bi bi-car-front"></i> ${t.carRec}</div>
      </div>
    </div>
  `).join('');
}

// ── TIMELINE ──
function initTimeline() {
  const steps = document.querySelectorAll('.timeline-step');
  const progress = document.getElementById('timeline-progress');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.3 });

  steps.forEach((step, i) => {
    step.style.transitionDelay = `${i * 0.15}s`;
    observer.observe(step);
  });

  // Animate progress bar
  if (progress) {
    const sectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => { progress.style.height = '100%'; }, 300);
      }
    }, { threshold: 0.1 });
    const section = document.getElementById('booking');
    if (section) sectionObserver.observe(section);
  }
}

// ── FAQ ──
function initFAQ() {
  // setup done via onclick in HTML
}

window.toggleFaq = function (btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-q.open').forEach(q => {
    q.classList.remove('open');
    q.nextElementSibling.classList.remove('open');
  });

  if (!isOpen) {
    btn.classList.add('open');
    answer.classList.add('open');
  }
};

// ── SCROLL ANIMATIONS ──
function initScrollAnimations() {
  const animateEls = document.querySelectorAll(
    '.review-card, .trip-card, .contact-cta-block, .contact-info'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animateEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`;
    observer.observe(el);
  });

  // Parallax orbs on hero
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const orb1 = document.querySelector('.orb-1');
    const orb2 = document.querySelector('.orb-2');
    if (orb1) orb1.style.transform = `translateY(${scrolled * 0.15}px)`;
    if (orb2) orb2.style.transform = `translateY(${scrolled * -0.1}px)`;
  }, { passive: true });
}

// ── GLOBAL HELPERS ──
window.handleWhatsAppClick = function () {
  window.open('https://wa.me/919975356697?text=Hi%2C%20I%20want%20to%20book%20a%20car', '_blank');
};

window.handleCallClick = function () {
  window.location.href = 'tel:+919975356697';
};

// Legacy compatibility shims for any leftover inline calls
window.navigateTo = function (page) {
  const map = { home: '#hero', cars: '#fleet', bikes: '#fleet', booking: '#booking', contact: '#contact' };
  const target = document.querySelector(map[page] || '#hero');
  if (target) target.scrollIntoView({ behavior: 'smooth' });
};

window.toggleDarkMode = function () { };
window.toggleMobileMenu = function () {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger) hamburger.classList.toggle('open');
  if (mobileMenu) mobileMenu.classList.toggle('open');
};

// ── SEND BOOKING MESSAGE ──
function sendBookingWA(type, name, transmission, price, deposit) {
  let msg = '';

  if (type === 'car') {
    msg = `🚗 *Vehicle Booking Inquiry - RoyalGoaRide*

Car: ${name}
Transmission: ${transmission}
Price: ₹${price}/day
Deposit: ₹${deposit}

Please check availability & booking process.`;
  }

  if (type === 'bike') {
    msg = `🏍️ *Bike Booking Inquiry - RoyalGoaRide*

Bike: ${name}
Price: ₹${price}/day
Deposit: ₹${deposit}

Please confirm availability.`;
  }

  window.open('https://wa.me/919975356697?text=' + encodeURIComponent(msg), '_blank');
}


// ── TRACKING SYSTEM ──

// Tracking utility function
function sendTrackingEvent(endpoint) {
  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      page: window.location.pathname,
      time: new Date().toISOString(),
      userAgent: navigator.userAgent
    })
  }).catch(() => {
    // Fail silently if API is unavailable
  });
}

// Initialize tracking on page load
document.addEventListener("DOMContentLoaded", () => {
  // Send page visit tracking
  sendTrackingEvent("/api/visit");

  // Add tracking to call buttons
  document.querySelectorAll('a[href^="tel:"]').forEach(btn => {
    btn.addEventListener("click", () => {
      sendTrackingEvent("/api/call");
    });
  });

  // Add tracking to WhatsApp buttons
  document.querySelectorAll('a[href*="wa.me"]').forEach(btn => {
    btn.addEventListener("click", () => {
      sendTrackingEvent("/api/whatsapp");
    });
  });
});

console.log('RoyalGoaRide Cinematic v3.0 — Loaded');