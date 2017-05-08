document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var heroPanoramaContainer = document.getElementById("hero-panorama");
    var heroPanorama = new PhotoSphereViewer({
      // panorama: "http://teleport-stellarnode.rhcloud.com/images/360-panorama-matador-seo.jpg",
      panorama: "http://www.teleport360vr.com/images/High-quality-360-videos-and-tours-for-real-estate-2048-1024-Kitchen_Offset_2.jpg",
      container: heroPanoramaContainer
      // default_position: {long: Math.PI/128, lat: Math.PI/64}
    });

    var contactsLink = document.getElementById("contacts");

    contactsLink.addEventListener("click", function() {

      $("#contacts").hide();
      $(".iwantit").hide();
      $("#hero-welcome").append("<p class=\"hello text-center\"><strong>Tell us how we can help:</strong><br>+34 684 286 121<br>teleport.vr.team@gmail.com</p>");

    });

    // $('.starter-template').forwardevents( {directEventsTo:$('#hero-panorama')} );


});
