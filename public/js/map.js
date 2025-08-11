

// Initialize the map
let parsedCoordinates;

// 1. Try to parse the coordinates if they are a string
if (typeof coordinates === 'string') {
  try {
    parsedCoordinates = JSON.parse(coordinates);
  } catch (error) {
    console.error("Failed to parse coordinates string:", error);
    // If parsing fails, set it to a non-array value so the next check fails
    parsedCoordinates = null;
  }
} else {
  // If it's not a string, assume it's already in the correct format
  parsedCoordinates = coordinates;
}

console.log(parsedCoordinates);

if (typeof coordinates !== 'undefined' && Array.isArray(parsedCoordinates) && parsedCoordinates.length === 2) {
  mapboxgl.accessToken = mapToken;
  console.log("tok"+mapboxgl.accessToken);
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: parsedCoordinates,
    zoom: 10
  });

  // Add marker
  new mapboxgl.Marker({ color: 'red' })
    .setLngLat(parsedCoordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h5>${document.querySelector('h1').textContent}</h5>`)
    )
    .addTo(map);
} else {
  console.error('Invalid coordinates:', parsedCoordinates);
  document.getElementById('map').innerHTML = 
    '<p class="text-danger">Map could not be loaded. Invalid location data.</p>';
}