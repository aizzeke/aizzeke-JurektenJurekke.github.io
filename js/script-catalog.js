function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.product');
for (let elm of elements) {
  observer.observe(elm);
}






$(document).ready(function() {
  $('.filter-button').click(function() {
    var filterValue = $(this).attr('data-filter');
    var products = $('.product');

    if (filterValue === 'all') {
      products.show();
    } else {
      products.each(function() {
        var category = $(this).attr('data-category');
        if (category === filterValue) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    }
  });
});


let count = 0;

$('.add-to-cart-btn').on('click', function(){
  let cart = $('.cart-icon');

  let imgtodrag = $(this).closest('.product').find('img').eq(0);
  if(imgtodrag.length) {
    var imgclone = imgtodrag.clone().offset({
      top: imgtodrag.offset().top,
      left: imgtodrag.offset().left
    }).css({
      'opacity': '0.8',
      'position': 'absolute',
      'height': '150px',
      'width': '150px',
      'z-index': '100'
    }).appendTo($('body')).animate({
      'top': cart.offset().top + 20,
      'left': cart.offset().left + 30,
      'width': 75,
      'height': 75
    }, 1000, function() {
      setTimeout(function(){
        count++;
        $(".cart-icon .item-count").text(count);
      }, 1500);
  
      imgclone.animate({
        'width': 0,
        'height': 0
      }, function(){
        $(this).detach();
      });

    });

  }
});
