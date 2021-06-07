let loading = document.querySelector('.loading');

window.addEventListener('load', function() {
    setTimeout(() => {
        loading.classList.add('hidden');     
    }, 800);
})
const cursor = document.querySelector('#cursor');
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
})

var $carousel = $('.sec3__inner-slider').flickity({
    imagesLoaded: true,
    percentPosition: false,
    wrapAround: true,
    autoPlay: 1500
});
  
  var $imgs = $carousel.find('.item img');
  // get transform property
  var docStyle = document.documentElement.style;
  var transformProp = typeof docStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';
  // get Flickity instance
  var flkty = $carousel.data('flickity');
  
  $carousel.on( 'scroll.flickity', function() {
    flkty.slides.forEach( function( slide, i ) {
      var img = $imgs[i];
      var x = ( slide.target + flkty.x ) * -1/3;
      img.style[ transformProp ] = 'translateX(' + x  + 'px)';
    });
  });

  const r = rolly({
    view: document.querySelector('.app'),
    native: true,
    // other options
  });
  r.init();
