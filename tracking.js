/**
 * RoyalGoaRide — tracking.js
 * Optimized: uses requestIdleCallback so tracking never blocks main thread
 * All fetch calls fire-and-forget (fail silently)
 */

(function() {
  'use strict';

  // Lightweight tracking using sendBeacon for reliability
  function track(endpoint, data) {
    const payload = JSON.stringify({
      ...data,
      page: window.location.pathname,
      ref: document.referrer || '',
      time: new Date().toISOString(),
      ua: navigator.userAgent.substring(0, 120)
    });

    // sendBeacon is non-blocking and works even if page is navigating away
    if (navigator.sendBeacon) {
      try {
        navigator.sendBeacon(endpoint, new Blob([payload], { type: 'application/json' }));
      } catch (e) { /* silent */ }
    } else {
      // Fallback: use fetch with keepalive
      try {
        fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: payload,
          keepalive: true
        }).catch(() => {});
      } catch (e) { /* silent */ }
    }
  }

  // Run all tracking setup during idle time so it never blocks LCP/FID
  const setup = function() {

    // 1. Page visit tracking
    track('/api/visit', { type: 'pageview' });

    // 2. Call button clicks
    document.querySelectorAll('a[href^="tel:"]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        track('/api/call', { type: 'call_click' });
        // Also fire Google Ads conversion
        if (typeof gtag === 'function') {
          gtag('event', 'conversion', { send_to: 'AW-7510098927/CALL_EVENT' });
        }
      }, { passive: true });
    });

    // 3. WhatsApp button clicks
    document.querySelectorAll('a[href*="wa.me"]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        track('/api/whatsapp', { type: 'whatsapp_click' });
      }, { passive: true });
    });

    // 4. Fleet card interactions
    document.addEventListener('click', function(e) {
      const priceBtn = e.target.closest('.price-btn');
      if (priceBtn) {
        track('/api/fleet_click', {
          type: 'fleet_price_click',
          label: priceBtn.textContent.trim().substring(0, 50)
        });
      }
    }, { passive: true });

    // 5. Scroll depth tracking (25%, 50%, 75%, 90%)
    const depths = [25, 50, 75, 90];
    const reached = new Set();
    function onScroll() {
      const scrollPct = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      depths.forEach(function(d) {
        if (scrollPct >= d && !reached.has(d)) {
          reached.add(d);
          track('/api/scroll', { type: 'scroll_depth', depth: d });
        }
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });

  };

  // Defer setup to idle time
  if ('requestIdleCallback' in window) {
    requestIdleCallback(setup, { timeout: 3000 });
  } else {
    setTimeout(setup, 1500);
  }

})();
