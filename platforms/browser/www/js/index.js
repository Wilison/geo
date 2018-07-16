var app = {
    // Application Constructor
    initialize: function() {
        //document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        // probando si funciona SQLite
        document.addEventListener('deviceready', function() {
            window.sqlitePlugin.selfTest(function() {
                alert("Plugin SQLite funciona correctamente!");
            });
        });
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        alert("mapa de wilson 2");
        //iniciando geolocalizacion
        navigator.geolocation.getCurrentPosition(onMapSuccess, onMapError, { enableHighAccuracy: true });
        alert("Termino de ejecutarse");
    }
};
/*var lati;
var longi;*/
var onMapSuccess = function (position) {
 
    alert("success");

    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
    alert("calculado");
    //lati = Longitude;
    //longi = Longitude;

    //getMap(Latitude, Longitude);
    alert(Latitude+ "//" +Longitude);


    var MiPosicion = new google.maps.LatLng(Latitude,Longitude);
    var  map = new google.maps.Map(document.getElementById('map'), {
          center: MiPosicion, //{lat: -34.397, lng: 150.644},     ------   -13.523620, -71.957265
          zoom: 18
        });

     var marker = new google.maps.Marker(
        {
            position: MiPosicion,
            map: map,
            title: "mi posicion"
        });

     alert("mapa creado con google mapas satisfactoriamente");
     //crearmapa(Latitude,Longitude);


     //GRAFICAR UNA POLILINEA DE UN PUNTO A OTRO CON GOOGLE MAPS
     var punto1 = MiPosicion;
     var punto2 = new google.maps.LatLng(-13.523620,-71.957265);
     var MiRuta = [punto1,punto2];
     var TrazoVuelo = new google.maps.Polyline(
         {
             path: MiRuta,
             strokeColor: "#0000FF",
             strokeOpacity: 0.8,
             strokeWeight: 3
         });
    TrazoVuelo.setMap(map);

    //TRAZAR UNA RUTA EN AUTO DE UN PUNTO A OTRO CON GOOGLE MAPS
    var ServiciosDireccion = new google.maps.DirectionsService();
    var RenderizacionDireccion = new google.maps.DirectionsRenderer({
        map: map
    });
    var objet = {
        origin: MiPosicion,
        destination: punto2,
        travelMode: google.maps.TravelMode.WALKING //DRIVING
    };
    ServiciosDireccion.route(objet,FuncionRutear);
    function FuncionRutear(resultados,estodo)
    {
        //mostrar la linea en A y B
        if(estodo == "OK"){
            RenderizacionDireccion.setDirections(resultados);
        }
        else{
            alert("Error "+ estodo);
        }
    }

    //AGREGAR EL LISTENER CLICK
    map.addListener('click',function(event){
        alert("Hizo click en: "+ event.latLng);
    })
    
}

function initMap(){

    
    alert("entro a initmap");

    /*var latLong = new google.maps.LatLng(Latitude,Longitude);
    var mapOptions = {
        center: latLong,
        zoom: 11,
        mapTypeId: google.maps.mapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),mapOptions);*/
}

function onMapError(error) {
    alert("Error");
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}


app.initialize();

