document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var heroPanoramaContainer = document.getElementById("hero-panorama");
    var heroPanorama = new PhotoSphereViewer({
      // panorama: "http://teleport-stellarnode.rhcloud.com/images/360-panorama-matador-seo.jpg",
      panorama: "http://teleport-stellarnode.rhcloud.com/images/High-quality-360-videos-and-tours-for-real-estate-2048-1024-Kitchen_Offset_2.jpg",
      container: heroPanoramaContainer
      // default_position: {long: Math.PI/128, lat: Math.PI/64}
    });

    var contactsLink = document.getElementById("contacts");

    contactsLink.addEventListener("click", function() {

      $("#contacts").hide();
      $(".iwantit").hide();
      $("#hero-welcome").append("<p class=\"hello text-center\"><strong>Tell us how we can help:</strong><br>+34 643 659 803<br>teleport.vr.team@gmail.com</p>");

    });

    $('.starter-template').forwardevents( {directEventsTo:$('#hero-panorama')} );

    // function passThrough(e) {
    //   $("#hero-panorama").each(function() {
    //      // check if clicked point (taken from event) is inside element
    //      var mouseX = e.pageX;
    //      var mouseY = e.pageY;
    //      var offset = $(this).offset();
    //      var width = $(this).width();
    //      var height = $(this).height();
    //
    //      if (mouseX > offset.left && mouseX < offset.left+width && mouseY > offset.top && mouseY < offset.top+height)
    //        $(this).click(); // force click event
    //   });
    // }
    //
    // $(".starter-template").click(passThrough);
    //
    // var dthen = new Date();
    //
    // var doPassThrough = true;
    // $('input').click(function(){
    //   doPassThrough =  !doPassThrough;
    //   if (doPassThrough){
    //     $("#shield").click(passThrough);
    //   } else {
    //     $('#shield').unbind('click', passThrough);
    //   }
    // });




});
