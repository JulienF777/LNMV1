const urls = ['images/17.jpg','images/5.jpg','images/6.jpg','images/2.jpg','images/1.jpg','images/3.jpg','images/4.jpg','images/7.jpg','images/8.jpg','images/9.jpg'];

let minleft = 2;
let maxleft = 20;
let minhauteur = 2;
let maxhauteur = 50;

const animationprojects = document.createElement("div");

for(i=0; i<=urls.length-1; i++){

const content1 = document.getElementById('content');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

const round1 = document.createElement("div");
round1.classList.add('round');
round1.style.left = getRandomInt(minleft,maxleft)+'vw';
round1.style.transform = 'translate(0px,'+getRandomInt(minhauteur,maxhauteur)+'vw)' //ajuste la hauteur

const img1 = document.createElement("img");
img1.src = urls[i];
img1.style.width = getRandomInt(10,30)+'vw';

round1.append(img1);
animationprojects.append(round1);
if(maxleft<60){ maxleft = maxleft+26};
if(minhauteur<500){ minhauteur = minhauteur+50};
if(maxhauteur<500){ maxhauteur = maxhauteur+40};

}
animationprojects.classList.add('animationprojects');
body.append(animationprojects);
const overlay = document.querySelector('.overlay');
const intro = document.querySelector('.intro');
const elements = document.querySelector('.elements');
const projectmenu = document.querySelector('.project-menu');
const grid = document.querySelector('.grid');
const mentions = document.querySelector('.mentions');


[document.querySelector('.toggle-overlay'), document.querySelector('.menu-item.retour')].forEach(item => {
  item.addEventListener('click', event => {
    overlay.classList.toggle('active');
    intro.classList.toggle('active');
    elements.classList.toggle('active');
    projectmenu.classList.toggle('active');
    animationprojects.classList.toggle('active');
    grid.classList.toggle('active');
    body.classList.toggle('active');
    mentions.classList.toggle('active');

    afficherprojets();
  })
})



function afficherprojets(){
  const grid = document.querySelector('.grid');
            for(i=0; i<=urls.length-1; i++){
          const projet1 = document.createElement("div");
          projet1.classList.add('p'+i);

          const img1 = document.createElement("img");
          img1.src = urls[i];
          img1.style.width = '100%';
          img1.style.borderRadius = '50vw';

          
          projet1.style.gridAutoColumns = 'auto';
          projet1.style.gridAutoRows = 'auto';

          projet1.append(img1);
          grid.append(projet1);
}
}


  
  // Use setInterval() to call the logPageYOffset function every 1 second

  let height20p = 80*window.devicePixelRatio;
  window.onscroll = function(ev) {
    // Check if the user has scrolled down the page and reached the bottom
    function updateInnerHeight() {
      window.innerHeight = window.innerHeight;
    }
    // Listen for the resize event and call the updateInnerHeight function whenever it occurs
    window.addEventListener('resize', updateInnerHeight);

    // (window.pageYOffset > height20p &&
    if ((window.innerHeight + window.pageYOffset) >= grid.offsetHeight) {
      const grid = document.querySelector('.grid');
      for(i=0; i<=urls.length-1; i++){
        const projet1 = document.createElement("div");
        projet1.classList.add('p'+i);
  
        const img1 = document.createElement("img");
        img1.src = urls[i];
        img1.style.width = '100%';
        img1.style.borderRadius = '50vw';
  
        projet1.style.gridAutoColumns = 'auto';
        projet1.style.gridAutoRows = 'auto';

        projet1.append(img1);
        grid.append(projet1);
      }
      // height20p = height20p + 625;
    }
  };

  
  function logPageYOffset() {
    console.log('Yoffset '+window.pageYOffset);
    // console.log('height20p '+height20p);
    console.log('windows innerheight '+window.innerHeight);
    console.log('grid Height '+grid.offsetHeight);

  }
  setInterval(logPageYOffset, 500);