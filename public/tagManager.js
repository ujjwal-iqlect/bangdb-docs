// <!-- BangDB Tag Manager -->
var _paq = (window._paq = window._paq || []);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
_paq.push(['enableHeartBeatTimer']);
_paq.push(['trackAllContentImpressions']);
(function () {
  var u = 'https://testbe.bangdb.com:18080/stream/Clickstream1/Data';
  _paq.push(['setTrackerUrl', u]);
  _paq.push(['setSiteId', 'BangDB Docs']);
  var d = document,
    s = d.getElementsByTagName('script')[0];
  fetch(
    'https://raw.githubusercontent.com/sachin-sinha/cdn/master/6000165802547722822/matomo.js'
  )
    .then((response) => response.text())
    .then((scriptText) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.text = scriptText;
      s.parentNode.insertBefore(script, s);
    });
})();

async function getLocationData() {
  try {
    const response = await fetch(
      'https://pro.ip-api.com/json/?fields=66846719&key=jNFaThIJUJUwHcp'
    );
    const jsonData = await response.json();
    window._mtm.push({ ip: JSON.stringify(jsonData) });
    window._mtm.push({ event: 'ip' });
  } catch (err) {
    console.log(err);
  }
}

getLocationData();

var _mtm = (window._mtm = window._mtm || []);
_mtm.push({ 'mtm.startTime': new Date().getTime(), event: 'mtm.Start' });
var d = document,
  s = d.getElementsByTagName('script')[0];
fetch(
  'https://raw.githubusercontent.com/sachin-sinha/cdn/master/6000165802547722822/83dd4c159c324eff91e754b47df90a37/mastercontainer.js'
)
  .then((response) => response.text())
  .then((scriptText) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.text = scriptText;
    s.parentNode.insertBefore(script, s);
  });

// <!-- End BangDB Tag Manager -->
