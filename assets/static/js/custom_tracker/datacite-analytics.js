function include1(file) {

  var script = document.createElement('script');
  script.src = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);
}

var url = new URL (document.currentScript.src);
var origin = url.origin + (url.port ? ':' + url.port : '');

include1(origin + '/js/plausible.js');
window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
include1(origin + '/js/custom_tracker/analytics-scripts.js');
