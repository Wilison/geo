var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        /*var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);*/


        //navigator.camera.getPicture(onSuccess, onFail, { quality: 50,destinationType: Camera.DestinationType.FILE_URI });


        // Get geo coordinates

            alert("mapa de wilson");

            navigator.geolocation.getCurrentPosition(onMapSuccess, onMapError, { enableHighAccuracy: true });


    }
};

function onSuccess(imageURI) {
    var image = document.getElementById('myImagewilson');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}



var onMapSuccess = function (position) {
 
    alert("success");

    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
    alert("calculado");

    //getMap(Latitude, Longitude);
    alert(Latitude+ "//" +Longitude);

    crearmapa(Latitude,Longitude);
}

function crearmapa(Latitude,Longitude){
    var latLong = new google.maps.LatLng(Latitude,Longitude);
    var mapOptions = {
        center: latLong,
        zoom: 11,
        mapTypeId: google.maps.mapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),mapOptions);
}

function onMapError(error) {
    alert("Error");
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}


/*$("#tg-map").gmap3({



        marker: {

            position: [-13.518016,-71.956899],

            address: "Las Acllas, Cusco, Perú",

            options: {

                title: "SIWAR COEPRO E.I.R.L."

            }

        },

        map: {

            options: {

                zoom: 16,

                scrollwheel: false,

                disableDoubleClickZoom: true

            }

        }

    });*/
