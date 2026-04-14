const roles = [
  "Front-End Developer",
  "Graphic Designer",
  "Photographer",
  "Video Editor"
];

let i = 0;
let j = 0;
let deleting = false;

function typeEffect(){
  let current = roles[i];

  if(deleting){
    j--;
  } else {
    j++;
  }

  document.getElementById("typing").textContent = current.substring(0,j);

  if(!deleting && j === current.length){
    deleting = true;
    setTimeout(typeEffect,1000);
    return;
  }

  if(deleting && j === 0){
    deleting = false;
    i = (i+1)%roles.length;
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

function scrollToContact(){
  document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}