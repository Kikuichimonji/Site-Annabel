var legalc = document.getElementById("legal-clic");
var legal = document.getElementById("infos-legal");
var closelegal = document.getElementById("close-legal");
var burger = document.getElementById("burger");
var burgernav = document.getElementsByClassName("mainBurger")[0];
var images = document.getElementById("diapo");
var next = document.getElementById("next");
var prev = document.getElementById("previous");
var count = 1;

legalc.addEventListener("click",function() {

    legal.classList.toggle("hidden-legal");
    setTimeout(function(){legalc.scrollIntoView()},50);
});

closelegal.addEventListener("click",function() {
    legal.classList.toggle("hidden-legal");
});

burger.addEventListener("click", function(){
    burgernav.classList.toggle("hiddenBurger");
});

burgernav.addEventListener("click",function(){
    burgernav.classList.toggle("hiddenBurger");
});

window.addEventListener("resize",function(){
    if(window.innerWidth > 800)
        burgernav.classList.value="mainBurger hiddenBurger";
});

next.addEventListener("click",function(){diapo(1)});
prev.addEventListener("click",function(){diapo(-1)});

function diapo(n)
{
        
        count = count + n
        if(count ==5)
            count=1;
        if(count ==0)
            count=4;
        images.src = "img/liste"+count+".jpg";
}
