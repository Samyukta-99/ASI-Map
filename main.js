var osmMap = L.tileLayer.provider('OpenStreetMap.Mapnik');
var stamenMap = L.tileLayer.provider('Stadia.StamenWatercolor');
var imageryMap = L.tileLayer.provider('Esri.WorldImagery');

var baseMaps = {
    OSM: osmMap,
    'Stamen Watercolor': stamenMap,
    'World Imagery': imageryMap
};

var geoServerIPPort = 'localhost:8080';
var geoServerWorkspace = 'GIS';
var StateLayerName = 'GIS:states';

var indStateLayer = L.tileLayer.wms(
    "https://" + geoServerIPPort + "/geoserver/" + geoServerWorkspace + "/wms",
    {
        layers: StateLayerName,
        format: "image/png",
        transparent: true,
        version: "1.1.0",
        tiled: true,

        
    }
);

var overlayMaps = {
    "India States": indStateLayer,
};

var map = L.map('map', {
    center: [22.735656852206496, 79.89257812500001],
    zoom: 5,
    layers:[osmMap, indStateLayer]
});

var mapLayers = L.control.layers(baseMaps, overlayMaps).addTo(map);

var ctlMeasure = L.control.polylineMeasure({
    position: "topleft",
    measureControlTitle: "Measure Length"
}).addTo(map);

var myIcon = L.icon({
    iconUrl: 'resources/Images/location_icon.png' ,
    iconSize: [20,26]
})

var locations = [
    {
        coordinates: [15.82726661, 78.04663489],
        imagePath: 'resources/Popup_Images/AWKT.jpg',
        name: 'Abdul Wahab Khan Tomb',
        locationInfo: 'Kurnool, Andhra Pradesh',
        lat: '15°49\'38.1598"N',
        lon: '78°2\'47.8856"E'
    },
    {
        coordinates: [15.1166 , 77.6333],
        imagePath: 'resources/Popup_Images/Gooty_Fort.jpg',
        name: 'Gooty Fort (Ravadurg)',
        locationInfo: 'Gooty, Andhra Pradesh',
        lat: '13° 56\'4.74"N', 
        lon: '77°16\'19.272"E'
    },
    {
        coordinates: [18.591583, 83.964778],
        imagePath: 'resources/Popup_Images/N-AP-120.jpg',
        name: 'Sri Somesvara temple',
        locationInfo: 'Mukhalingam, Srikakulam, Andhra Pradesh',
        lat: '18° 35\'29.7″ N',
        lon: '83° 57\'53.2"E'
    },
    {
        coordinates: [18.5942, 83.9644],
        imagePath: 'resources/Popup_Images/N-AP-121.jpg',
        name: 'Mukhalingesvara Temple',
        locationInfo: 'Mukhalingam, Srikakulam, Andhra Pradesh',
        lat: '18° 35\'39.12″ N',
        lon: '83° 57\'51.8394"E'
    },
    {
        coordinates: [18.333333, 84.05],
        imagePath: 'resources/Popup_Images/N-AP-123.jpg',
        name: 'Eastern portion of Salihundam hill containing Buddhist remains ( A Chaitya and four stupas)',
        locationInfo: 'Salihundam, Srikakulam, Andhra Pradesh',
        lat: '18° 20\'00″ N',
        lon: '83° 03\'00"E'
    },
    {
        coordinates: [17.5275, 82.908056],
        imagePath: 'resources/Popup_Images/N-AP-124.jpg',
        name: 'Dhana Dibbalu (Ancient Buddhist Mound)',
        locationInfo: 'Kotturu, Visakhapatnam, Andhra Pradesh',
        lat: '17° 31\'39″ N',
        lon: '82° 54\'29"E'
    },
    {
        coordinates: [18.167913, 83.495057],
        imagePath: 'resources/Popup_Images/N-AP-127.jpg',
        name: 'Ruined Buddhist Monastery at Gurubhaktulakonda',
        locationInfo: 'Ramatheertham, Vizianagaram, Andhra Pradesh',
        lat: '18° 10\'4.4394″ N',
        lon: '83° 29\'42.2052"E'
    },
    {
        coordinates: [18.134236, 83.467169],
        imagePath: 'resources/Popup_Images/N-AP128.jpg',
        name: 'Dibbesvaravamipur Temple',
        locationInfo: 'Sarapalli, Vizianagaram, Andhra Pradesh',
        lat: '18° 08\'03.25″ N',
        lon: '83° 28\'01.81"E'
    },
    {
        coordinates: [18.003722, 79.57475],
        imagePath: 'resources/Popup_Images/N-AP-129.jpg',
        name: 'Thousand Pillar Temple',
        locationInfo: 'Hanamkonda, Warangal, Andhra Pradesh',
        lat: '18° 00\'13.4″ N',
        lon: '79° 34\'29.1"E'
    },
    {
        coordinates: [17.0188889, 81.1305556],
        imagePath: 'resources/Popup_Images/N-AP134.jpg',
        name: 'Buddhist monuments',
        locationInfo: 'Guntupalli, West Godavari, Andhra Pradesh',
        lat: '17° 1\'8.0004″ N',
        lon: '81° 7\'50.001"E'
    },
    {
        coordinates: [17.169722, 79.582222],
        imagePath: 'resources/Popup_Images/N-AP-132.jpg',
        name: 'Pillalamari Temple',
        locationInfo: 'Pillalamari, Suryapet, Andhra Pradesh',
        lat: '17° 10\'11″ N',
        lon: '79° 34\'56"E'
    },
    {
        coordinates: [16.316389, 79.849444],
        imagePath: 'resources/Popup_Images/N-AP-60.jpg',
        name: 'Kapoteswara Temple',
        locationInfo: 'Chejerla, Guntur, Andhra Pradesh',
        lat: '16° 18\'59″ N',
        lon: '79° 50\'58"E'
    },
    {
        coordinates: [19.994444, 79.866389],
        imagePath: 'resources/Popup_Images/N-AP-132.jpg',
        name: 'Markandeshwar Temple',
        locationInfo: 'Markanda, Gadchiroli, Maharashtra',
        lat: '19° 59\'40″ N',
        lon: '79° 51\'59"E'
    },
    {
        coordinates: [26.923611, 75.826667],
        imagePath: 'resources/Popup_Images/N-RJ-160.jpg',
        name: 'Hawa Mahal',
        locationInfo: 'Sarada, Udaipur, Rajasthan',
        lat: '26° 55\'25″ N',
        lon: '75° 49\'36"E'
    }
    ,
    {
        coordinates: [24.886389, 74.646944],
        imagePath: 'resources/Popup_Images/N-RJ-41.jpg',
        name: 'Fort of Chittaur',
        locationInfo: 'Chittaurgarh, Rajasthan',
        lat: '24° 53\'11″ N',
        lon: '74° 38\'49"E'
    }
    ,
    {
        coordinates: [26.951111, 76.618333],
        imagePath: 'resources/Popup_Images/N-RJ-73.jpg',
        name: 'Baori',
        locationInfo: 'Abaneri, Dausa, Rajasthan',
        lat: '26° 57\'04″ N',
        lon: '76° 37\'06"E'
    }
    ,
    {
        coordinates: [27.179444, 78.021111],
        imagePath: 'resources/Popup_Images/N-UP-A1.jpg',
        name: 'Agra Fort: Akbari Mahal',
        locationInfo: 'Agra, Uttar Pradesh',
        lat: '27° 10\'46″ N',
        lon: '78° 01\'16"E'
    }
    ,
    {
        coordinates: [27.091111, 77.661111],
        imagePath: 'resources/Popup_Images/N-UP-A45.jpg',
        name: 'Fatehpur Sikri',
        locationInfo: 'Agra, Uttar Pradesh',
        lat: '27° 05\'28″ N',
        lon: '77° 39\'40"E'
    }
    ,
    {
        coordinates: [25.43, 81.876667],
        imagePath: 'resources/Popup_Images/N-UP-L1.png',
        name: 'Allahabad Fort',
        locationInfo: 'Allahabad, Uttar Pradesh',
        lat: '19° 59\'40″ N',
        lon: '79° 51\'59"E'
    }
    ,
    {
        coordinates: [25.458056, 78.575556],
        imagePath: 'resources/Popup_Images/N-UP-L141.jpg',
        name: 'Jhansi Fort',
        locationInfo: 'Jhansi, Uttar Pradesh',
        lat: '25° 27\'29″ N',
        lon: '78° 34\'32"E'
    },
    {
        coordinates: [25.264167, 79.843056],
        imagePath: 'resources/Popup_Images/N-UP-L338.jpg',
        name: 'Rahiliya Temple',
        locationInfo: 'Rahiliya, Mahoba, Uttar Pradesh',
        lat: '25° 15\'51″ N',
        lon: '79° 50\'35"E'
    }
    ,
    {
        coordinates: [25.907222, 79.615],
        imagePath: 'resources/Popup_Images/N-UT-21.jpg',
        name: 'Baijnath Group of Temples: Ancient temples consisting of main shrine of Shiva and seventeen subsidiary shrines',
        locationInfo: 'Baijnath, Bageshwar, Uttarakhand',
        lat: '29° 54\'26″ N',
        lon: '79° 36\'54"E'
    }
    ,
    {
        coordinates: [23.159722, 88.246667],
        imagePath: 'resources/Popup_Images/N-WB-46.jpg',
        name: 'Two ancient Temples(joined together)',
        locationInfo: 'Baidyapur, Burdwan, West Bengal',
        lat: '23° 09\'35″ N',
        lon: '88° 14\'48"E'
    },
    {
        coordinates: [23.151389, 88.044444],
        imagePath: 'resources/Popup_Images/N-WB-53.jpg',
        name: 'Jain Brick Temple (Sat-Deul)',
        locationInfo: 'Deulia, Burdwan, West Bengal',
        lat: '23° 09\'05″ N',
        lon: '88° 02\'40"E'
    }
    ,
    {
        coordinates: [22.5716, 88.3447],
        imagePath: 'resources/Popup_Images/N-WB-75.jpg',
        name: 'Metcalfe Hall',
        locationInfo: 'Kolkata, West Bengal',
        lat: '22° 34\'18″ N',
        lon: '88° 20\'41"E'
    }
    ,
    {
        coordinates: [24.8737, 88.1305],
        imagePath: 'resources/Popup_Images/N-WB-88.jpg',
        name: 'Firoz Minar',
        locationInfo: 'Gaur, Malda, West Bengal',
        lat: '24° 52\'25″ N',
        lon: '88° 07\'49"E'
    }
    ,
    {
        coordinates: [20.239722, 85.851667],
        imagePath: 'resources/Popup_Images/N-OR-37.jpg',
        name: 'Brahmeswar Temple',
        locationInfo: 'Bhubaneswar, Khurda, Orrisa',
        lat: '20° 14\'23″ N',
        lon: '85° 51\'06"E'
    }
    ,
    {
        coordinates: [20.240556, 85.835833],
        imagePath: 'resources/Popup_Images/N-OR-41.jpg',
        name: 'Ananta Vasudeva Temple',
        locationInfo: 'Old Twon, Bhubaneswar, Khurda, Bhubaneswar',
        lat: '20° 14\'26″ N',
        lon: '85° 50\'09"E'
    }
    ,
    {
        coordinates: [19.8875, 86.094722],
        imagePath: 'resources/Popup_Images/N-OR-63.png',
        name: 'Konark Sun Temple',
        locationInfo: 'Puri, Orrisa',
        lat: '19° 53\'15″ N',
        lon: '86° 05\'41"E'
    }
    ,
    {
        coordinates: [19.804722, 85.819167],
        imagePath: 'resources/Popup_Images/N-OR-65.jpg',
        name: 'Shri Jagannath Temple',
        locationInfo: 'Puri, Orrisa',
        lat: '19° 48\'17″ N',
        lon: '85° 49\'09"E'
    }
    ,
    {
        coordinates: [31.381667, 74.524444],
        imagePath: 'resources/Popup_Images/N-PB-30.jpg',
        name: 'Summer Palace of Maharaja Ranjit Singh',
        locationInfo: 'Amritsar, Punjab',
        lat: '31° 22\'54″ N',
        lon: '74° 31\'28"E'
    },
    {
        coordinates: [11.163889, 77.311389],
        imagePath: 'resources/Popup_Images/N-TN-C16.jpg',
        name: 'Muruganathasvami Temple',
        locationInfo: 'Tirumurugan-poondi, Coimbatore, Tamil Nadu',
        lat: '11° 09\'50″ N',
        lon: '77° 18\'41"E'
    },
    {
        coordinates: [11.401944, 79.4075],
        imagePath: 'resources/Popup_Images/N-TN-C17.jpg',
        name: 'Nithisvarasvami Temple',
        locationInfo: 'Srimushnam, Cuddalore, Tamil Nadu',
        lat: '11° 24\'07″ N',
        lon: '79° 24\'27"E'
    },
    {
        coordinates: [10.247222, 78.750833],
        imagePath: 'resources/Popup_Images/N-TN-C174.jpg',
        name: 'Stone and Brick Fort (Thirumayam Fort), Tirumayam',
        locationInfo: 'Pudukottai, Tamil Nadu',
        lat: '10° 14\'50″ N',
        lon: '78° 45\'03"E'
    },
    {
        coordinates: [12.074722, 78.118889],
        imagePath: 'resources/Popup_Images/N-TN-C18.jpg',
        name: 'Chennaraya Perumal Temple Together with Adjacent Lands',
        locationInfo: 'Adiyamankottai, Dharmapuri, Tamil Nadu',
        lat: '12° 04\'29″ N',
        lon: '78° 07\'08"E'
    },
    {
        coordinates: [10.948333, 79.356667],
        imagePath: 'resources/Popup_Images/N-TN-C189.jpg',
        name: 'Airavatesvara Temple, ',
        locationInfo: 'Chatram Darasuram, Thanjavur, Tamil Nadu',
        lat: '10° 56\'54″ N',
        lon: '79° 21\'24"E'
    },
    {
        coordinates: [12.533333, 78.216667],
        imagePath: 'resources/Popup_Images/N-TN-C19.jpg',
        name: 'Hill Fort, Krishnagiri',
        locationInfo: 'Dharmapuri, Tamil Nadu',
        lat: '12° 32\'00″ N',
        lon: '78° 13\'00"E'
    },
    {
        coordinates: [10.785833, 79.131389],
        imagePath: 'resources/Popup_Images/N-TN-C191.jpg',
        name: 'Schwartz (Christ) Church',
        locationInfo: 'Thanjavur, Tamil Nadu',
        lat: '10° 47\'09″ N',
        lon: '79° 07\'53"E'
    },
    {
        coordinates: [10.360833, 77.962778],
        imagePath: 'resources/Popup_Images/N-TN-C21.jpg',
        name: 'Dindigul Fort',
        locationInfo: 'Dindigul, Tamil Nadu',
        lat: '10° 21\'39″ N',
        lon: '77° 57\'46"E'
    },
    {
        coordinates: [11.248889, 77.5],
        imagePath: 'resources/Popup_Images/N-TN-C22.jpg',
        name: 'Jain Temple',
        locationInfo: 'Mettupudur, Erode, Tamil Nadu',
        lat: '11° 14\'56″ N',
        lon: '77° 30\'00"E'
    },
    {
        coordinates: [11.133889, 77.398889],
        imagePath: 'resources/Popup_Images/N-TN-C23.JPG',
        name: 'Sugrisvara Temple And Tank',
        locationInfo: 'Sircar Periyapalayam, Erode, Tamil Nadu',
        lat: '11° 08\'02″ N',
        lon: '56° 23\'77"E'
    },
    {
        coordinates: [12.842222, 79.698611],
        imagePath: 'resources/Popup_Images/N-TN-C24.jpg',
        name: 'Iravatanesvara Temple',
        locationInfo: 'Big Kanchipuram, Kanchipuram, Tamil Nadu',
        lat: '12° 50\'32″ N',
        lon: '79° 41\'55"E'
    },
    {
        coordinates: [9.914722, 78.124167],
        imagePath: 'resources/Popup_Images/N-TN-C241.jpg',
        name: 'Tirumalai Nayaka Palace',
        locationInfo: 'Madurai, Tamil Nadu',
        lat: '9° 54\'53″ N',
        lon: '78° 07\'27"E'
    },
    {
        coordinates: [12.898611, 80.16],
        imagePath: 'resources/Popup_Images/N-TN-C30.jpg',
        name: 'Dhenupurisvara Temple',
        locationInfo: 'Madambakkam, Kanchipuram, Tamil Nadu ',
        lat: '12° 53\'55″ N',
        lon: '80° 09\'36"E'
    },
    {
        coordinates: [12.852778, 79.853611],
        imagePath: 'resources/Popup_Images/N-TN-C31.jpg',
        name: 'Large Siva Temple (Apathsahaesvara Temple), Tenneri,Large Siva Temple (Apathsahaesvara Temple), Tenneri',
        locationInfo: 'Kanchipuram, Tamil Nadu ',
        lat: '12° 51\'10″ N',
        lon: '79° 51\'13"E'
    },
    {
        coordinates: [12.617778, 80.1925],
        imagePath: 'resources/Popup_Images/N-TN-C32.jpg',
        name: 'Arjuna\'s Penance',
        locationInfo: 'Mamallapuram, Kanchipuram, Tamil Nadu',
        lat: '12° 37\'04″ N',
        lon: '80° 11\'33"E'
    },
    {
        coordinates: [12.608889, 80.189722],
        imagePath: 'resources/Popup_Images/N-TN-C33.jpg',
        name: 'Arjuna\'s Ratha',
        locationInfo: 'Mamallapuram, Kanchipuram, Tamil Nadu',
        lat: '12° 36\'32″ N',
        lon: '/80° 11\'23"E'
    },
    {
        coordinates: [12.608889, 80.189444],
        imagePath: 'resources/Popup_Images/N-TN-C34.jpg',
        name: 'Bhima\'s Ratha',
        locationInfo: 'Mamallapuram, Kanchipuram, Tamil Nadu',
        lat: '12° 36\'32″ N',
        lon: '80° 11\'22"E'
    },
    {
        coordinates: [12.608889, 80.189722],
        imagePath: 'resources/Popup_Images/N-TN-C39.jpeg',
        name: 'Draupathi Ratha',
        locationInfo: 'Mamallapuram, Kanchipuram, Tamil Nadu',
        lat: '12° 36\'32″ N',
        lon: '80° 11\'23"E'
    },
    {
        coordinates: [13.078611, 80.285833],
        imagePath: 'resources/Popup_Images/N-TN-C4.jpg',
        name: 'Clive\'s House',
        locationInfo: 'Chennai, Tamil Nadu',
        lat: '13° 04\'43″ N',
        lon: '80° 17\'09"E'
    },
    {
        coordinates: [12.616389, 80.199167],
        imagePath: 'resources/Popup_Images/N-TN-C55.png',
        name: 'Shore Temple',
        locationInfo: 'Mamallapuram, Kanchipuram, Tamil Nadu',
        lat: '12° 36\'59″ N',
        lon: '80° 11\'57"E'
    },
    {
        coordinates: [12.833056, 79.716944],
        imagePath: 'resources/Popup_Images/N-TN-C67.jpg',
        name: 'Kailasanatha Temple',
        locationInfo: 'Salabogam, Kanchipuram, Tamil Nadu',
        lat: '12° 49\'59″ N',
        lon: '79° 43\'01"E'
    },
    {
        coordinates: [8.125, 77.565],
        imagePath: 'resources/Popup_Images/N-TN-T1.jpg',
        name: 'Vattakottai Fort',
        locationInfo: 'Vattakotai, Kanyakumari, Tamil Nadu',
        lat: '8° 07\'30″ N',
        lon: '77° 33\'54"E'
    },
    {
        coordinates: [8.078056, 77.555556],
        imagePath: 'resources/Popup_Images/N-TN-T4.jpg',
        name: 'Vivekananda Rock Memorial',
        locationInfo: 'Kanyakumari, Tamil Nadu',
        lat: '8° 04\'41″ N',
        lon: '77° 33\'20"E'
    },
    {
        coordinates: [326.923611, 75.826667],
        imagePath: 'resources/Popup_Images/N-AS-25.jpg',
        name: 'Ahom Raja\'s Palace',
        locationInfo: 'Garhgaon, Sibsagar, Assam',
        lat: '26° 55\'25″ N',
        lon: '75° 49\'36"E'
    },
    {
        coordinates: [26.966111, 94.624722],
        imagePath: 'resources/Popup_Images/N-AS-34.jpg',
        name: 'Kreng Ghar of the Ahom Kings',
        locationInfo: 'Joysagar, Sibsagar, Assam',
        lat: '26° 57\'58″ N',
        lon: '94° 37\'29"E'
    }




];

locations.forEach(function (location) {
    var marker = L.marker(location.coordinates, {
        icon: myIcon
    }).addTo(map);

    var popupContent = '<div class="custom-popup">' +
        '<img src="' + location.imagePath + '" alt="' + location.name + '">' +
        '<p><strong>' + location.name + '</strong></p>' +
        '<p>' + location.locationInfo + '</p>' +
        '<p>Latitude: ' + location.lat + ', Longitude: ' + location.lon + '</p>' +
        '</div>';

    marker.bindPopup(popupContent, {
        maxWidth: 200
    });

    marker.on('mouseover', function (e) {
        this.openPopup();
    });

    marker.on('mouseout', function (e) {
        this.closePopup();
    });
});



