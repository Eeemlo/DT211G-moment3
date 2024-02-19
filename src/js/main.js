const navbar = document.getElementById('my-nav');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

window.onload = function () {

    const hamburgerEl = document.querySelector('.hamburger')
    const mobileNavEl = document.querySelector('.mobile_nav');

    hamburgerEl.addEventListener('click', function () {
        hamburgerEl.classList.toggle('active');
        mobileNavEl.classList.toggle('active');
    })
}


/*DIAGRAM*/

import Chart from 'chart.js/auto';

const ctx1 = document.getElementById('myChart1');

new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Antal sökande',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

//Variabler för att lagra data
const url = `https://studenter.miun.se/~mallar/dt211g/`;
let data = [];


async function fetchCourses() {
  //Gör fetchanrop
  const response = await fetch(url);
  //Lagra svar i variabeln data
  data = await response.json();  
  
  //Filtrera ut kurser från datan
const courses = data.filter(function(types) {
  return types.type === "Kurs"
});

console.log("kurser filtrerade..")

  //Sortera data efter antal sökande
courses.sort(function(a, b) {
  return b.applicantsTotal - a.applicantsTotal;
});

console.log("data sorterad..");

for (let i = 0; i <= 5; i++) {

console.log(courses[i]) 
}

};

fetchCourses();

async function fetchProgrammes() {
  //Gör fetchanrop
  const response = await fetch(url);
  //Lagra svar i variabeln data
  data = await response.json();  
  
  //Filtrera ut kurser från datan
const programmes = data.filter(function(types) {
  return types.type === "Program"
});

console.log("Program filtrerade..")

  //Sortera data efter antal sökande
programmes.sort(function(a, b) {
  return b.applicantsTotal - a.applicantsTotal;
});

console.log("data sorterad..");


}

fetchProgrammes();