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
  $(".type").hide();
  $("." + color).fadeIn();
}


//init image carousels
$(document).ready(function() {

  //check for hash
  var hash = window.location.hash;

  //show the correct carousel
  if(hash != '') {
    hash = hash.substring(1, hash.length);
    showCarousel(hash);
  }
});
