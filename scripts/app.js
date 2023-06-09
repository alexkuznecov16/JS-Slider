const slideData = [
    {
        city: 'Rostov-on-Don<br>LCD admiral',
        area: '81 m2',
        time: '3.5 months',
        cost: 'Upon request',
        img: 'img/slide1.png'
    },
    {
        city: 'Sochi<br>Thieves',
        area: '105 m2',
        time: '4 months',
        cost: 'Upon request',
        img: 'img/slide2.png'
    },
    {
        city: 'Rostov-on-Don<br>Patriotic',
        area: '93 m2',
        time: '3 months',
        cost: 'Upon request',
        img: 'img/slide3.png'
    },
];

// navigation variables
const prevSlideOpener = document.getElementById('prevSlideOpen'),
      nextSlideOpener = document.getElementById('nextSlideOpen'),
      dotLink1 = document.getElementById('dot1'),
      dotLink2 = document.getElementById('dot2'),
      dotLink3 = document.getElementById('dot3'),
      navLink1 = document.getElementById('link1'),
      navLink2 = document.getElementById('link2'),
      navLink3 = document.getElementById('link3');
    
// html info variables
const cityName = document.getElementById('city'),
      apartmentArea = document.getElementById('apArea'),
      repairTime = document.getElementById('repTime'),
      repairCost = document.getElementById('repCost'),
      image = document.getElementById('slideImg');

// current slide variable
let currentSlide = 0;


// function change variables texts
function getText(){
    cityName.innerHTML = slideData[currentSlide].city;
    apartmentArea.innerHTML = slideData[currentSlide].area;
    repairTime.innerHTML = slideData[currentSlide].time;
    repairCost.innerHTML = slideData[currentSlide].cost;
    image.setAttribute('src', slideData[currentSlide].img);
};

// function change styles for dots
function dotCheck(){
    if(currentSlide === 0){
        dotLink1.classList.add('active');
        dotLink2.classList.remove('active');
        dotLink3.classList.remove('active');
    } else if (currentSlide === 1){
        dotLink2.classList.add('active');
        dotLink1.classList.remove('active');
        dotLink3.classList.remove('active');
    } else{
        dotLink3.classList.add('active');
        dotLink1.classList.remove('active');
        dotLink2.classList.remove('active');
    };
};

// function change style for links
function navLinkCheck(){
    if(currentSlide === 0){
        navLink1.classList.add('active');
        navLink2.classList.remove('active');
        navLink3.classList.remove('active');
    } else if (currentSlide === 1){
        navLink2.classList.add('active');
        navLink1.classList.remove('active');
        navLink3.classList.remove('active');
    } else{
        navLink3.classList.add('active');
        navLink1.classList.remove('active');
        navLink2.classList.remove('active');
    };
};

// Function what do animation
function animation(){
    image.style.opacity = 0;
    setTimeout(() => {
        image.style.opacity = 1;
        getText();
        dotCheck();
        navLinkCheck();
    }, 200);
};


// event on click previous slide
prevSlideOpener.addEventListener('click', () => {
    currentSlide -= 1;
    if(currentSlide < 0){
        currentSlide = (slideData.length - 1);
    };
    animation();
});

// event on click next slide
nextSlideOpener.addEventListener('click', () => {
    currentSlide += 1;
    if(currentSlide > (slideData.length - 1)){
        currentSlide = 0;
    };
    animation();
});


// link navigation
navLink1.addEventListener('click', () => {
    currentSlide = 0;
    animation();
});

navLink2.addEventListener('click', () => {
    currentSlide = 1;
    animation();
});

navLink3.addEventListener('click', () => {
    currentSlide = 2;
    animation();
});


// dot navigation
dotLink1.addEventListener('click', () => {
    currentSlide = 0;
    animation();
});

dotLink2.addEventListener('click', () => {
    currentSlide = 1;
    animation();
});

dotLink3.addEventListener('click', () => {
    currentSlide = 2;
    animation();
});