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

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
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
