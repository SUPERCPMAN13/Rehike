(function(){(function(a){window.rehike?a():(window._rehikeCoreDelayLoadModules=window._rehikeCoreDelayLoadModules||[],window._rehikeCoreDelayLoadModules.push(function(){window.rehike&&a()}))})(function(){rehike.ponies=window.rehike&&window.rehike.ponies||{};var a=rehike.ponies;rehike.ponies.registeredEvents_=rehike.ponies.registeredEvents_||[];rehike.ponies.isInitialized_=rehike.ponies.isInitialized_||!1;rehike.ponies.CSS_TARGET_ID="rh-ponies-style";rehike.ponies.initialize=function(){a.registeredEvents_.push(rehike.util.events.add(document,
"spfprocess",a.onSpfNavigation_));a.isInitialized_=!0};rehike.ponies.setPonyRules=function(b){var c=document.getElementById(a.CSS_TARGET_ID);c||(c=document.createElement("style"),c.id=a.CSS_TARGET_ID,document.body.appendChild(c));c.textContent=b};rehike.ponies.removePonies_=function(){var b;(b=document.getElementById(a.CSS_TARGET_ID))&&b.parentNode.removeChild(b)};rehike.ponies.onSpfNavigation_=function(b){-1<(new URL(b.detail.url)).pathname.indexOf("/results")&&a.removePonies_()};rehike.ponies.shutdown=
function(){a.removePonies_();for(var b=0,c=a.registeredEvents_.length;b<c;b++)a.registeredEvents_[b].remove();a.isInitialized_=!1;delete rehike.ponies};a.isInitialized_||a.initialize()});})();
