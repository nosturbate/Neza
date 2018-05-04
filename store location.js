// JavaScript Document
function initMap() {
	var shops = [{
		latlang: {
			lat: 29.990565,
			lng: -90.059027
		}
	}, {
		latlang: {
			lat: 30.466495,
			lng: -90.996894
		}
	}];
	var mapStyle = [{
		"featureType": "water",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#d3d3d3"
		}]
	}, {
		"featureType": "transit",
		"stylers": [{
			"color": "#808080"
		}, {
			"visibility": "off"
		}]
	}, {
		"featureType": "road.highway",
		"elementType": "geometry.stroke",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#b3b3b3"
		}]
	}, {
		"featureType": "road.highway",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#ffffff"
		}]
	}, {
		"featureType": "road.local",
		"elementType": "geometry.fill",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#ffffff"
		}, {
			"weight": 1.8
		}]
	}, {
		"featureType": "road.local",
		"elementType": "geometry.stroke",
		"stylers": [{
			"color": "#d7d7d7"
		}]
	}, {
		"featureType": "poi",
		"elementType": "geometry.fill",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#ebebeb"
		}]
	}, {
		"featureType": "administrative",
		"elementType": "geometry",
		"stylers": [{
			"color": "#a7a7a7"
		}]
	}, {
		"featureType": "road.arterial",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#ffffff"
		}]
	}, {
		"featureType": "road.arterial",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#ffffff"
		}]
	}, {
		"featureType": "landscape",
		"elementType": "geometry.fill",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#efefef"
		}]
	}, {
		"featureType": "road",
		"elementType": "labels.text.fill",
		"stylers": [{
			"color": "#696969"
		}]
	}, {
		"featureType": "administrative",
		"elementType": "labels.text.fill",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#737373"
		}]
	}, {
		"featureType": "poi",
		"elementType": "labels.icon",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "poi",
		"elementType": "labels",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "road.arterial",
		"elementType": "geometry.stroke",
		"stylers": [{
			"color": "#d6d6d6"
		}]
	}, {
		"featureType": "road",
		"elementType": "labels.icon",
		"stylers": [{
			"visibility": "off"
		}]
	}, {}, {
		"featureType": "poi",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#dadada"
		}]
	}];
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: shops[0].latlang,
		styles: mapStyle,
		scrollwheel: false
	});
	var bounds = new google.maps.LatLngBounds();
	var infowindow = new google.maps.InfoWindow();
	var icon = {
		url: 'http://www.usstoneoutlet.com/media/uploads/2017/11/marker.png',
		size: new google.maps.Size(20, 32),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(0, 32)
	};

	function createMarker(shop) {
		var marker = new google.maps.Marker({
			position: shop.latlang,
			icon: icon,
			animation: google.maps.Animation.DROP,
			map: map
		});
		bounds.extend(marker.getPosition());
	}
	for (var i = 0; i < shops.length; i++) {
		createMarker(shops[i]);
	};
	map.fitBounds(bounds);
}
$(function() {
	$('.qa-heading').click(function() {
		$(this).next().slideToggle('fast');
	});
});