// lazy load images

function lazyLoadImage(element) {
  var animatedUrl = element.dataset.animated;

  var animatedImage = new Image();
  animatedImage.onload = function() {
    element.src = animatedImage.src;
  }
  animatedImage.src = animatedUrl;
}

(function(){
  var lazyLoaded = document.getElementsByClassName('lazy-load');

  for(var i = 0; i < lazyLoaded.length; i++) {
    lazyLoadImage(lazyLoaded[i]);
  }
})();

