// function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 10.322443717096494, lng: 123.952717914004 },
//     zoom: 13,
//     disableDefaultUI: !0,
//     scaleControl: !0,
//     fullscreenControl: !0,
//     clickableIcons: false,
//     minZoom: 3,
//     maxZoom: 20,
//   });
//   var stadium = new google.maps.LatLng(10.32236848828577, 123.9548207413889);
//   var avm = new google.maps.LatLng(10.327183097962408, 123.95084448599208);
//   var radius = 2500;
//   var marker = new google.maps.Marker({
//     position: stadium,
//     map: map,
//     title: "Atatürk Olimpiyat Stadyumu",
//   });
//   const regionCircle = new google.maps.Circle({
//     strokeColor: "#FF0000",
//     strokeOpacity: 0.8,
//     strokeWeight: 2,
//     fillColor: "#FF0000",
//     fillOpacity: 0.19,
//     map: map,
//     center: avm,
//     radius: radius,
//     clickable: false,
//   });
//   var check = checkCircleInMarker(stadium, avm, radius);
//   if (check) alert("In the region");
//   else alert("Out the region");
// }

// function checkCircleInMarker(markerPosition, circlePosition, radius) {
//   var km = radius / 1000;
//   var kx = Math.cos((Math.PI * circlePosition.lat) / 180) * 111;
//   var dx = Math.abs(circlePosition.lng - markerPosition.lng) * kx;
//   var dy = Math.abs(circlePosition.lat - markerPosition.lat) * 111;
//   return Math.sqrt(dx * dx + dy * dy) <= km;
// }
// initMap();
// function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 10.322443717096494, lng: 123.952717914004 },
//     zoom: 13,
//     disableDefaultUI: true,
//     scaleControl: true,
//     fullscreenControl: true,
//     clickableIcons: false,
//     minZoom: 3,
//     maxZoom: 20,
//   });

//   var stadium = new google.maps.LatLng(10.313303281132347, 123.92740751889124);
//   var avm = new google.maps.LatLng(10.327183097962408, 123.95084448599208);
//   var radius = 2500;

//   var marker = new google.maps.Marker({
//     position: stadium,
//     map: map,
//     title: "Atatürk Olimpiyat Stadyumu",
//   });

//   const regionCircle = new google.maps.Circle({
//     strokeColor: "#FF0000",
//     strokeOpacity: 0.8,
//     strokeWeight: 2,
//     fillColor: "#FF0000",
//     fillOpacity: 0.19,
//     map: map,
//     center: avm,
//     radius: radius,
//     clickable: false,
//   });

//   var check = checkCircleInMarker(stadium, avm, radius);
//   if (check) alert("In the region");
//   else alert("Out the region");
// }

// function checkCircleInMarker(markerPosition, circlePosition, radius) {
//   var dx = Math.abs(circlePosition.lng() - markerPosition.lng());
//   var dy = Math.abs(circlePosition.lat() - markerPosition.lat());
//   var distance = Math.sqrt(dx * dx + dy * dy);
//   return distance <= radius;
// }

// initMap();
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 10.322443717096494, lng: 123.952717914004 },
    zoom: 13,
    disableDefaultUI: true,
    scaleControl: true,
    fullscreenControl: true,
    clickableIcons: false,
    minZoom: 3,
    maxZoom: 20,
  });

  var stadium = new google.maps.LatLng(10.31541713515663, 123.97219375737538);
  var avm = new google.maps.LatLng(10.314551983059491, 123.96118258858415);
  var radius = 2500;

  var marker = new google.maps.Marker({
    position: stadium,
    map: map,
    title: "Atatürk Olimpiyat Stadyumu",
  });

  const regionCircle = new google.maps.Circle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.19,
    map: map,
    center: avm,
    radius: radius,
    clickable: false,
  });

  var check = checkCircleInMarker(marker.getPosition(), avm, radius);
  if (check) alert("In the region");
  else alert("Out the region");
}

function checkCircleInMarker(markerPosition, circlePosition, radius) {
  var R = 6371e3; // Earth's radius in meters
  var φ1 = (markerPosition.lat() * Math.PI) / 180;
  var φ2 = (circlePosition.lat() * Math.PI) / 180;
  var Δφ = ((circlePosition.lat() - markerPosition.lat()) * Math.PI) / 180;
  var Δλ = ((circlePosition.lng() - markerPosition.lng()) * Math.PI) / 180;

  var a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  var distance = R * c; // Distance in meters

  return distance <= radius;
}

initMap();
