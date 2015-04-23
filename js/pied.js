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
    $(this).text("Verberg NL omschrijving");
  } else {
    $(".dutchdescription").hide();
    $(this).text("Toon NL omschrijving");
  }
});
