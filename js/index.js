const binary = document.getElementById("binary");
const stars = document.getElementById("stars");
const presenter = document.getElementById("presenter");
const city = document.getElementById("city");
const thirdInner = document.getElementById("thirdInner");
const his1 = document.getElementById("his1");
const his2 = document.getElementById("his2");
const holdingChip = document.getElementById("holdingChip");
const robotsFinger = document.getElementById("robotsFinger");
const build = document.getElementById("build");
const title = document.getElementById("title");
const buildRobot = document.getElementById("buildRobot");
const third = document.getElementById("third");
let oneTime = false;
let oneTime2 = false;
window.addEventListener("scroll", () => {
    binary.style.top = scrollY%100 + "px";
    stars.style.left = scrollY%100 + "px";
    holdingChip.style.transform = `translateY(${-window.pageYOffset}px)`;
    robotsFinger.style.transform = `translateY(${-window.pageYOffset}px)`;
    title.style.transform = `translateY(${-window.pageYOffset*0.4}px)`;
    window.pageYOffset < 500 ? city.style.visibility = 'hidden': city.style.visibility = 'visible';
    if( window.pageYOffset > 640 && !oneTime){
        let num1 = 1;
        let num2 = 49;
        let num3 = 1;
        oneTime = true
        const inter = setInterval(() => {
            his1.style.transform = `translate(0, ${num1}vh)`;
            his2.style.transform = `translate(0, ${num2}vh)`;
            num1 += num3;
            num2 -= num3;
            setTimeout(()=> clearInterval(inter), 1200);
        }, 26)
    }
    if(window.pageYOffset > 1150  && !oneTime2){
        let growRatio = 1;
        let shrinkRatio = 1;
        const smallNum = 0.009;
        const interval2 = setInterval(() => {
            thirdInner.style.transform = `scale(${growRatio})`;
            growRatio += smallNum;
            shrinkRatio -= smallNum/1.3;
            city.style.transform = `scale(${shrinkRatio})`;
            presenter.style.transform = `scale(${growRatio})`;
        }, 20)
        setTimeout(() => {
            clearInterval(interval2);
        }, 1200)
        city.style.position = "fixed";
        oneTime2 = true;
    }            
})