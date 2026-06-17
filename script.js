// ハンバーガーメニュー

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// ヘッダー背景

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){
    header.classList.add("scrolled");
  }else{
    header.classList.remove("scrolled");
  }

});

// スクロールアニメーション

const reveals = document.querySelectorAll(".reveal");

function revealElements(){

  reveals.forEach(item => {

    const top = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if(top < windowHeight - 100){
      item.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealElements);

revealElements();