document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var heroPanoramaContainer = document.getElementById("hero-panorama");
    var heroPanorama = new PhotoSphereViewer({
      panorama: "http://teleport-stellarnode.rhcloud.com/images/360-panorama-matador-seo.jpg",
      container: heroPanoramaContainer
    });
});
