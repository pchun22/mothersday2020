//var song = new Audio("betterTogether.mp3");

$(".ParkerButton").click( function() {
  console.log("clicked");
  $("#NoeLetter").collapse("hide");
});


$(".NoeButton").click( function() {
  console.log("clicked");
  $("#ParkerLetter").collapse("hide");
});

$(".carousel-inner").click( function() {
  console.log("clicked");
  $("#carouselSlideshow").toggleClass("carousel-fade");
});

// $(".down-arrow").click( function() {
//   console.log("clicked");
//   if(song.paused){
//     song.play();
//   }
//   else{
//     song.pause();
//   }

// });
