function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("collapse").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("collapse").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}





//map
function initMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(32.029, -81.06),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var uluruC = {
        lat: 31.965976,
        lng: -81.068378
    };
    var uluruR = {
        lat: 32.019672,
        lng: -81.016457
    };
    var cInfo = "<div id='cInfo'><h4>Wormsloe Plantation</h3>";

    var rInfo = "<h4 id='rInfo'>Savannah Yacht Club</h3>"

    var cInfowindow = new google.maps.InfoWindow({
        content: cInfo,
        maxWidth: 200
    });
    var rInfowindow = new google.maps.InfoWindow({
        content: rInfo,
        maxWidth: 200
    });

    var ceremonyMarker = new google.maps.Marker({
        position: uluruC,
        map: map,
        title: 'Reception'
    });
    var receptionMarker = new google.maps.Marker({
        position: uluruR,
        map: map,
        title: "Ceremony"
    });

    ceremonyMarker.addListener('click', function () {
        cInfowindow.open(map, ceremonyMarker);
    });
    receptionMarker.addListener('click', function () {
        rInfowindow.open(map, receptionMarker);
    });
}