function initMap(){
  // This is the latitude and longitude for Chicago
  const center = { lat: 41.8781, lng: -87.6298 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: center,
    // Feature 1: satellite map with labels
     mapTypeId: "hybrid"  
  });

  // Feature 2: a marker on Illinois Tech
  const marker = new google.maps.Marker({
    position: { lat: 41.8348, lng: -87.6270 },
    map: map,
    title: "Illinois Tech"
  });

  // Feature 3: an info window that opens when the marker is clicked
  const infoWindow = new google.maps.InfoWindow({
    content: "Illinois Institute of Technology"
  });
  marker.addListener("click", function(){
    infoWindow.open(map, marker);
  });
}

// Questions button: shows an alert with two lines
function init(){
  const button = document.getElementById("questionsBtn");
  if (button) {
    button.addEventListener("click", function(){
      alert("If you have questions, contact me at:\ntbalea@hawk.illinoistech.edu");
    });
  }
}
window.addEventListener("load", init);
