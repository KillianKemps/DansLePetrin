/*****************************************************************/
/* Generating map                                                */

	// create a map in the "map" div, set the view to a given place and zoom
	var map = L.map('map').setView([48.83478, 2.3679], 13);

	//set bounds so we can't look outside Paris
	var southWest = new L.latLng([48.81, 2.22], map.getMaxZoom());
	var northEast = new L.latLng([48.91, 2.48], map.getMaxZoom());
	map.setMaxBounds(new L.LatLngBounds(southWest, northEast));

	// add an OpenStreetMap tile layer
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
	    maxZoom: 18
	}).addTo(map);
