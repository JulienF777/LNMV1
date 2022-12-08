const urls = ['images/17.jpg','images/5.jpg','images/6.jpg','images/2.jpg','images/1.jpg','images/3.jpg','images/4.jpg','images/7.jpg','images/8.jpg','images/9.jpg'];

// function makeDiv(){
//     let body = document.querySelector("body");

//     function getRandomInt(min, max) {
//             return Math.floor(Math.random() * (max - min + 1) ) + min;
//           }
//     const round1 = document.createElement("div");
//     round1.classList.add('round');
//     var posx = getRandomInt(0,100)
//     var posy = getRandomInt(0,100)
    
//     round1.style.transform = 'translate(0px,'+getRandomInt(0,40)+'vw)'
//     round1.style.left = posx+'%';
//     round1.style.top = posy+'%';

//     body.append(round1);
// };

// makeDiv();


// urls.forEach(url => {
// const content1 = document.getElementById('content');

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }

// const round1 = document.createElement("div");
// round1.classList.add('round');
// round1.style.left = getRandomInt(4,82)+'vw';
// round1.style.transform = 'translate(0px,'+getRandomInt(0,40)+'vw)'

// const img1 = document.createElement("img");
// img1.src = url;
// img1.style.width = getRandomInt(8,20)+'vw';

// round1.append(img1);
// body.append(round1);
// })





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
// console.log('minleft'+minleft);
// console.log('maxleft'+maxleft);
// if(minleft<40){ minleft = maxleft+8};
if(maxleft<60){ maxleft = maxleft+26};

// console.log('minhauteur'+minhauteur);
// console.log('maxhauteur'+maxhauteur);
if(minhauteur<500){ minhauteur = minhauteur+50};
if(maxhauteur<500){ maxhauteur = maxhauteur+40};

}
animationprojects.classList.add('animationprojects');
body.append(animationprojects);


//toggle overlay
  // const toggleButton = document.querySelector('.toggle-overlay');
  // const toggleretour = document.querySelector('.menu-item.retour');
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
    
    // function hideelements(){
    //   const elements = document.querySelector('.elements');
    //   elements.style.display = 'none';
    // }

    // setTimeout(hideelements, 500);
  })
})



function afficherprojets(){
  const grid = document.querySelector('.grid');
            for(i=0; i<=urls.length-1; i++){
                  // const projet1 = document.getElementById('content');

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
afficherprojets();
//<div class="grid1" id="idgrid1">//
// .p0 {
//   grid-column: 1;
//   grid-row: 1;
// }


