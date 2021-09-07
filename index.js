//images and container
const slide = document.querySelector('.slide');
const slideImages = document.querySelectorAll('.slide img');

//buttons
const nxtBtn = document.querySelector('.nxtbtn');
const prevsBtn = document.querySelector('.prevsbtn');

//counter
let counter = 1;

const size = slideImages[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nxtBtn.addEventListener('click', ()=>{
  if(counter >= slideImages.lenght -2) return;
  slide.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})
prevsBtn.addEventListener('click', ()=>{
  if(counter <= 0) return;
  slide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

slide.addEventListener('transitionend', ()=>{
  if(slideImages[counter].id == 'lastClone'){
    slide.style.transition = 'none';
    counter = slideImages.length -2;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  };
  if(slideImages[counter].id == 'firstClone'){
    slide.style.transition = 'none';
    counter = slideImages.length - counter;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  };
});

//FEED BUTTON

const newsbtn = document.querySelector('#news-btn');
const popularbtn = document.querySelector('#popular-btn');
const videobtn = document.querySelector('#video-btn');

const new1 = document.querySelector('.New-1');
const new2 = document.querySelector('.New-2');
const new3 = document.querySelector('.New-3');

newsbtn.addEventListener('click', ()=>{
  new1.style.display = "grid";
  new2.style.display = 'none';
  new3.style.display = 'none';
  new1.style.animation = "fadeIn linear 2s";

});

popularbtn.addEventListener('click', ()=>{
  new1.style.display = "none";
  new2.style.display = 'grid';
  new3.style.display = 'none';
  new2.style.animation = "fadeIn linear 2s";
});

videobtn.addEventListener('click', ()=>{
  new1.style.display = "none";
  new2.style.display = 'none';
  new3.style.display = 'grid';
  new3.style.animation = "fadeIn linear 2s";
});
