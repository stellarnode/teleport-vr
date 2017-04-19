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
      $("#hero-welcome").append("<p class=\"hello\"><strong>Get in touch with us:</strong><br>+34 643 659 803<br>teleportvrteam@gmail.com</p>");

    });

});
