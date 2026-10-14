const pendingGoatCounterHits = [];

function flushGoatCounterHits() {
  if (typeof window.goatcounter?.count !== 'function') return;

  while (pendingGoatCounterHits.length > 0) {
    const hit = pendingGoatCounterHits.shift();
    try {
      window.goatcounter.count(hit);
    } catch (error) {
      console.error('GoatCounter Error:', error);
    }
  }
}

export function initAnalytics() {
  document.querySelector('script[data-goatcounter]')?.addEventListener('load', flushGoatCounterHits, { once: true });
  flushGoatCounterHits();
}

export function goatCounterEvent(path, event = false) {
  try {
    pendingGoatCounterHits.push({ path, event });
    flushGoatCounterHits();
  } catch (error) {
    console.error('GoatCounter Error:', error);
  }
}

export function simpleAnalyticsEvent(eventName, metadata) {
  try {
    if (typeof window.sa_event === 'function') {
      if (metadata === undefined) window.sa_event(eventName);
      else window.sa_event(eventName, metadata);
    }
  } catch (error) {
    console.error('SimpleAnalytics Error:', error);
  }
}
