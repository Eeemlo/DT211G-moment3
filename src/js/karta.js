"use strict";

let map;
let marker;
let infowindow;

//Ladda in karta
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  infowindow = new google.maps.InfoWindow();
  //Ny karta
  map = new Map(document.getElementById("map"), {
    center: { lat: 57.847891, lng: 12.463728 },
    zoom: 4,
    mapId: "EMMAS_MAP_ID",
  });
};

// Skapa en marker i mappen + lägg till ett click event för markern
async function createMarker(data) {
  if (marker) marker.setMap(null);

  //Lagra adress
  const completeAddress = data.formatted_address;

  //Funktion för att visa adress vid klick på pin
  function openMarker() {
    infowindow.setContent(
      `<h4 style="color:#000">${completeAddress}</h4>`
    );
    infowindow.open(map, marker);
  };

  const markerInfo = {
    position: {
      lat: data.geometry.location.lat,
      lng: data.geometry.location.lng,
    },
    map,
    title: completeAddress,
  };

  //Lagra marker
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  marker = new AdvancedMarkerElement(markerInfo);

  //Öpnna adressinfo vid klick
  google.maps.event.addListener(marker, "click", openMarker);
};

// Centrera karta efter ny marker
async function centerMap() {
  map.setCenter({ lat: marker.position.lat, lng: marker.position.lng });
  map.setZoom(14);
};

initMap();

//Variabler för HTML-element
const searchBar = document.getElementById("searchbar");
const searchButton = document.getElementById("searchbutton");

//Event vid adressinmatning
searchButton.onclick = async function () {
  const errorMsg = document.getElementById("error-msg");  
  let input = searchBar.value;

  errorMsg.innerHTML = "";

  //Gör fetchanrop
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=AIzaSyAjc2xbi8IyEG0I5LGiZpUY_BrQtMsJvhs`
  );
  //Lagra svar i variabel
  const data = await response.json();

  //Om flera resultat, välj det första
  if (data && data.results.length > 0) {
    await createMarker(data.results[0]);
    await centerMap();
  } else {
    errorMsg.innerHTML = "Kunde inte hitta plats"
  };
};
