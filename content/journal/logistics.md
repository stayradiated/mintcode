+++
date = "2013-01-31"
title = "Logistics"
author = "Jono Cooper"
+++

I recently received a brand new Timbuk2 Swig backpack in the mail but as it was purchased from the United States, I had a look at the tracking. In the past I had received other items from the US but through FedEx rather than UPS. I'm no expert on logistics but what I found seemed somewhat counterproductive.

The UPS route was as follows:

- San Francisco
- Mather
- Sacramento
- Mather
- Louisville
- Hawaii
- Sydney, Australia
- Auckland, New Zealand
- Rotorua, New Zealand

I'm very confused on how this all works. Why did it even go to Sacramento? Why did they fly it 7,000km to Louisville? Is there really no international mail center on the west coast? The total journey was around 21,000km but with a bit of planning, UPS could have saved 10,000km in travel.

For comparison, FedEx did it differently the last time I received something:

- San Francisco
- Hawaii
- Auckland, New Zealand
- Rotorua, New Zealand

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDHQQL2H3ywWbyNk8NfehXQmL8FAOPDKtM&sensor=true"></script>
<script type="text/javascript">
function initialize() {
	var myLatLng = new google.maps.LatLng(0, -180);
	var mapOptions = {
	  zoom: 2,
	  center: myLatLng,
	  mapTypeId: google.maps.MapTypeId.TERRAIN
	};

	var map = new google.maps.Map(document.getElementById("map_canvas"),
	    mapOptions);
	var upsCoordinates = [
	  new google.maps.LatLng(37.77485, -122.41935),
	  new google.maps.LatLng(37.8820, -119.8547),
	  new google.maps.LatLng(38.5804, -121.530),
	  new google.maps.LatLng(37.8820, -119.8547),
	  new google.maps.LatLng(38.252, -85.758),
	  new google.maps.LatLng(19.89, -155.56),
	  new google.maps.LatLng(-33.9446, 151.1967),
	  new google.maps.LatLng(-36.850, 174.768),
	  new google.maps.LatLng(-38.137, 176.250)
	];
	var fedexCoordinates = [
	  new google.maps.LatLng(37.77485, -122.41935),
	  new google.maps.LatLng(19.89, -155.56),
	  new google.maps.LatLng(-36.850, 174.768),
	  new google.maps.LatLng(-38.137, 176.250)
	];
	var upsPath = new google.maps.Polyline({
	  path: upsCoordinates,
	  strokeColor: "#FF0000",
	  strokeOpacity: 1.0,
	  strokeWeight: 3
	});
	var fedexPath = new google.maps.Polyline({
	  path: fedexCoordinates,
	  strokeColor: "#0000FF",
	  strokeOpacity: 1.0,
	  strokeWeight: 3
	});

	upsPath.setMap(map);
	fedexPath.setMap(map);
}
window.onload = initialize
</script>

<div id="map_canvas" style="width:100%; height:350px; margin: 1.5em 0;"></div>

If UPS optimized their logistics they could save money, time and 10,000km. I'm not sure if there is a reason behind this but maybe because they want people to purchase their express shipping? It's really baffling and if I have a choice in the future, I'll use FedEx.
