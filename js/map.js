function initMap(){
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(41.69831427014762, -86.1770177669686);
  
  var mapOptions = {
    center = myLocation,
	zoom: 18,
	mapTypeId: google.maps.MapTypeId.SATELLITE,
	mapTypeControlOptions: {
		position: google.maps.ControlPosition.BOTTOM_CENTER
	}
  };
  
  var myMap = new google.maps.Map(el, mapOptions);
  
  var marker = new google.maps.Marker({
	position: myLocation,
	map: myMap,
	animation: google.maps.Animation.DROP,
	icon: 'images/skateboard.png'
  });
  
  var contentString = '<h1>USA Skate Roller Ring</h1><p>USA Skate Roller Ring was a fun family roller ring that was open until it shut down in 2016. It now stands abandoned until further notice.</p>';
  
  var infoWin = new google.maps.InfoWindow ({
	content = contentString
  });
  
  google.maps.event.addListener(marker, 'mouseclick', function() {
	infoWin.open(myMap, marker);
  });
  
}

google.maps.event.addDomListener(window, 'load', init);