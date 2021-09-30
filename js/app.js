/*==================NavResponsive==================*/
const nav = document.getElementById("responsive-nav");
const navBtn = document.getElementById("responsive-btn");
console.log(nav);
console.log(navBtn)
navBtn.addEventListener("click",function(){
  if (nav.className === "right-nav") {
    nav.className += "min";
  } else {
    nav.className = "right-nav";
  }
})
const mediaQuery = window.matchMedia('(min-width: 800px)')

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    nav.className = "right-nav";

  }
  /*else{
    menu.style.display = "none"
  }*/
}


/////////////Add-Section///////////////
const addBtn = document.getElementById("add-btn");
const dropLi = document.getElementById("drop-li");

const main = document.querySelector("main")
let secCount = 5
addBtn.addEventListener("click",function(){
  const section = `
      <section class="about1 section${secCount}" id="${secCount}">
        <div class="show-product-home">
            <div class="div-head"><p style="color: white;">Section ${secCount}</p></div>
        </div>
        <div class="about-p">
            <p>Some text about who we are and what we do.</p>
            <p>Resize the browser window to see that this page is responsive by the way.</p> 
            <p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>" Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>            
            </div>
      </section>
                `
  const li = `
      <a href="#${secCount}" class="sec category" id="section${secCount}">Section${secCount}</a>
  `
  main.insertAdjacentHTML("beforeend", section); 
  dropLi.insertAdjacentHTML("beforeend", li); 
  let elem = document.querySelector(`#section${secCount}`)
  secBtns.push(elem)
  console.log(secBtns)
  secBtns.forEach(function(btn){
    btn.addEventListener("click",function(){
      console.log(secBtns)
      btn.classList.add("highlight")
      let currSec = document.querySelector("."+btn.id)
      currSec.classList.add("sec-highlight") 
      for(let i = 0; i < secBtns.length;i++){
        let bt = secBtns[i]
        if(bt.classList.contains("highlight") && bt.id != btn.id){
          bt.classList.remove("highlight")
          document.querySelector("." + bt.id).classList.remove("sec-highlight")
        }
      }
    })
    ////ViewPort
    document.addEventListener('scroll', function () {
      let currSec = document.querySelector("."+btn.id)

      if (isInViewport(currSec) == true){
        btn.classList.add("highlight")
  
        currSec.classList.add("sec-highlight")
      }
      else{
        btn.classList.remove("highlight")
  
        currSec.classList.remove("sec-highlight")
      }

    });
    /////////////
  });
  secCount++ 

})                


///////////section-highlight/////////////


let secBtns1 =document.querySelectorAll(".sec")
let secBtns = []
for(let x = 0; x < secBtns1.length; x++){
    secBtns.push(secBtns1[x])
}

console.log(secBtns)
let count = 0
secBtns.forEach(function(btn){
  btn.addEventListener("click",function(){
    console.log(secBtns)
    btn.classList.add("highlight")
    let currSec = document.querySelector("."+btn.id)
    currSec.classList.add("sec-highlight") 
    for(let i = 0; i < secBtns.length;i++){
      let bt = secBtns[i]
      if(bt.classList.contains("highlight") && bt.id != btn.id){
        bt.classList.remove("highlight")
        document.querySelector("." + bt.id).classList.remove("sec-highlight")
      }
    }
  })
  ////ViewPort
  document.addEventListener('scroll', function () {
    let currSec = document.querySelector("."+btn.id)

    if (isInViewport(currSec) == true){
      btn.classList.add("highlight")

      currSec.classList.add("sec-highlight")
    }
    else{
      btn.classList.remove("highlight")

      currSec.classList.remove("sec-highlight")
    }
  });
  /////////////
});




///////////////ViewPortFunction//////////////
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)

  );
}





