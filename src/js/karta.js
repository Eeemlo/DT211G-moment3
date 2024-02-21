let map;

//Ladda in karta
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  let marker;


  //Ny karta
  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 10,
  });

  //Marker
  marker = new google.maps.Marker({
    position: { lat: -34.397, lng: 150.644 },
    map: map,
  });
}

initMap();

//Sök adress
//const url = `https://maps.googleapis.com/maps/api/geocode/json?address=Lindekullegatan&key=AIzaSyAjc2xbi8IyEG0I5LGiZpUY_BrQtMsJvhs`;
const searchBar = document.getElementById("searchbar");
const searchButton = document.getElementById("searchbutton");


//Event vid adressinmatning
searchButton.onclick = async function () {
  let input = searchBar.value;
  //Gör fetchanrop
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=AIzaSyAjc2xbi8IyEG0I5LGiZpUY_BrQtMsJvhs`
  );
  //Lagra svar i variabel
  const data = await response.json();

  console.log(data);
};
