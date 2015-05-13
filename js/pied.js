//Surround homeimage with border on hover
$('.home-image').hover(function() {
  $(this).addClass("home-image-active");
},
function() {
  $(this).removeClass("home-image-active");
});

//Show dutch description on click
$("#showDutch").click(function() {
  if($(".dutchdescription").is(":hidden")) {
    $(".dutchdescription").fadeIn();
  } else {
    $(".dutchdescription").hide();
  }
});

//change carousel when color is clicked
$(".colors").find("a").click(function() {
  showCarousel($(this).attr('class'));
});

//shows the carousel with given color. Hides others
function showCarousel(color) {

  //hide other carousels
  $(".type").hide();

  //show correct one
  $("." + color).fadeIn();

  //replace color in product-title
  $(".product-title h2 span:first").text(color.charAt(0).toUpperCase() + color.slice(1).toLowerCase());
}


//init image carousels
$(document).ready(function() {

  //init carousels
  $(".type").each(function() {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {enabled:true}
    });
  });

  //on product pages
  if($(".product-title").length) {


    //check for hash
    var hash = window.location.hash;

    if(hash != '') {

      hash = hash.substring(1, hash.length);

      //show carousel
      showCarousel(hash);
    }
  }
});
