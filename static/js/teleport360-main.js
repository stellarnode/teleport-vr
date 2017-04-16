document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var heroPanoramaContainer = document.getElementById("hero-panorama");
    var heroPanorama = new PhotoSphereViewer({
      panorama: "http://teleport-stellarnode.rhcloud.com/images/360_0130_Stitch_YHC_scaledown.JPG",
      container: heroPanoramaContainer
    });
});
