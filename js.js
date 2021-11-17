function initMap() {
  // The location of Uluru
  const uluru = { lat: 39.775472049800214, lng: -82.08681858959616 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
