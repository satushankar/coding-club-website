// Loads photos into the events page. Half done - the JSON file it wants does
// not exist yet, so it fails quietly and shows nothing.

function loadGallery() {
  var target = document.getElementById("gallery");
  if (!target) {
    return;
  }

  fetch("data/photos.json")
    .then(function (res) { return res.json(); })
    .then(function (photos) {
      photos.forEach(function (photo) {
        var img = document.createElement("img");
        img.src = photo.src;
        img.alt = photo.caption || "";
        target.appendChild(img);
      });
    })
    .catch(function () {
      // No photos file yet. Leave the section empty.
    });
}

document.addEventListener("DOMContentLoaded", loadGallery);
