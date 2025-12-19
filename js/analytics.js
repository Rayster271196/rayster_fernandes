/**
 * Google Analytics configuration
 */

// Global site tag (gtag.js) - Google Analytics
(function() {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-QY5XMVPDX4';
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-QY5XMVPDX4');
})();

