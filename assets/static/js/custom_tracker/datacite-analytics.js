/*
 * This is the script that assembles all of the tracking scripts for our application:
 *
 *    - the base plausible.js script.
 *    - the base script that creates the plausible() function to be called for custom events, packaged into a file for easier loading.
 *    - the DataCite scripts that add customized functionality over and above the base Plausible scripts.
 *
 *  The first 2 items are basic Plausible Analytics items.  The third is custom.
 */

function include_script(file, data_domain = '') {

  var script = document.createElement('script');
  script.src = file;
  script.type = 'text/javascript';
  script.defer = true;

  if (data_domain) {
    script.setAttribute('data-domain', data_domain);
  }

  document.getElementsByTagName('head').item(0).appendChild(script);
}

var url = new URL (document.currentScript.src);
var origin = url.origin + (url.port ? ':' + url.port : '');
var data_domain = document.currentScript.getAttribute('data-domain');

include_script(origin + '/js/plausible.js', data_domain);
include_script(origin + '/js/custom_tracker/plausible-scripts.js', '');
include_script(origin + '/js/custom_tracker/analytics-scripts.js', '');
