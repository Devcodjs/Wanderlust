// Initialize the map
if (typeof coordinates !== 'undefined' && coordinates.length === 2) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: coordinates,
    zoom: 10
  });

  // Add marker
  new mapboxgl.Marker({ color: 'red' })
    .setLngLat(coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h5>${document.querySelector('h1').textContent}</h5>`)
    )
    .addTo(map);
} else {
  console.error('Invalid coordinates:', coordinates);
  document.getElementById('map').innerHTML = 
    '<p class="text-danger">Map could not be loaded. Invalid location data.</p>';
}