let btns = document.querySelector('.cls_btns>button')
let btn1 = document.querySelector(".cls_btns>button:nth-of-type(1)");
let btn2 = document.querySelector(".cls_btns>button:nth-of-type(2)");
let btn3 = document.querySelector(".cls_btns>button:nth-of-type(3)");
let btn4 = document.querySelector(".cls_btns>button:nth-of-type(4)");
let btn5 = document.querySelector(".cls_btns>button:nth-of-type(5)");
let btn_div = document.querySelector(".txt_cont");
let activeValue = 1;
let btn_div2 = document.querySelectorAll(".txt_cont");
let btn_div3 = document.querySelectorAll(".txt_cont2");
let prc = document.querySelectorAll(".prc");
let prc2 = document.querySelectorAll(".prc2");

let fst_clean = [
  "От 2000",
  "От 2000",
  "От 3000",
  "От 2500",
  "От 1500",
  "От 8000",
];

let sec_clean = [
  "От 2500",
  "От 2500",
  "От 3000",
  "От 3000",
  "От 2000",
  "От 10000",
];

let th_clean = [
  "От 3000",
  "От 3000",
  "От 3500",
  "От 3500",
  "От 2500",
  "От 12000",
];

let fo_clean = [
  "От 3500",
  "От 3500",
  "От 4000",
  "От 4000",
  "От 3000",
  "От 15000",
];
let fi_clean = [
  "От 3500",
  "От 3500",
  "От 4000",
  "От 4000",
  "От 3000",
  "От 15000",
];
function toActive1() {
  btn1.classList.toggle("active");
  activeValue = 1;
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
  btn5.classList.remove("active");
    btn1.classList.toggle("active");

  if (activeValue === 1) {
    for (let i = 0; i < wash_1st_cl.length; i++) {
      prc[i].textContent = wash_1st_cl[i];
      let btn_div2 = document.querySelectorAll(".txt_cont");
    }
 for (let i = 0; i < fst_clean.length; i++) {
   prc2[i].textContent = fst_clean[i];
 }
  }
      console.log(activeValue);
    btn1.classList.toggle("active");
}
btn1.addEventListener("click", toActive1);
let wash_2nd_cl = [
  700, 1000, 200, 600, 1100, 200, 600, 500, 600, 600, 250, 1300,
];

function toActive2() {
  btn1.classList.remove("active");
  activeValue = 2;
  btn2.classList.toggle("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
  btn5.classList.remove("active");


if (activeValue === 2) {
  for (let i = 0; i < wash_2nd_cl.length; i++) {
   
    prc[i].textContent = wash_2nd_cl[i];


  }
   for (let i = 0; i < sec_clean.length; i++) {
     prc2[i].textContent = sec_clean[i];
   }
}

  
}
btn2.addEventListener("click", toActive2);

function toActive3() {
  btn1.classList.remove("active");
  activeValue = 3;
  btn2.classList.remove("active");
  btn3.classList.toggle("active");
  btn4.classList.remove("active");
  btn5.classList.remove("active");


if (activeValue === 3) {
  for (let i = 0; i < wash_3rd_cl.length; i++) {
   
    prc[i].textContent = wash_3rd_cl[i];


  }
   for (let i = 0; i < th_clean.length; i++) {
     prc2[i].textContent = th_clean[i];
   }
}
  
}
btn3.addEventListener("click", toActive3);
  let wash_4_5_cl = [1100,1500,300,1000,1600,400,800,700,900,900,500,1800]
function toActive4() {
  btn1.classList.remove("active");
  activeValue = 4;
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.toggle("active");
  btn5.classList.remove("active");


  if (activeValue === 4) {
  for (let i = 0; i < wash_4_5_cl.length; i++) {
    prc[i].textContent = wash_4_5_cl[i];
  }
   for (let i = 0; i < fo_clean.length; i++) {
     prc2[i].textContent = fo_clean[i];
   }
}
}
btn4.addEventListener("click", toActive4);

function toActive5() {
  btn1.classList.remove("active");
  activeValue = 5;
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
  btn5.classList.toggle("active");

    if (activeValue === 5) {
      for (let i = 0; i < wash_4_5_cl.length; i++) {
        prc[i].textContent = wash_4_5_cl[i];
      }
       for (let i = 0; i < fi_clean.length; i++) {
         prc2[i].textContent = fi_clean[i];
       }
    }
}
btn5.addEventListener("click", toActive5);

let wash_1st_cl = [600,950,150,600,1000,200,600,500,600,600,250,1200]
let wash_3rd_cl = [800,1200,200,800,1200,300,700,600,700,700,300,1500]

if ( activeValue === 1){
    for (let i = 0; i < wash_1st_cl.length; i++) {
  
      prc[i].textContent = wash_1st_cl[i];
      let btn_div2 = document.querySelectorAll(".txt_cont");
    
    }
    console.log(activeValue)
     btn1.classList.toggle("active");
     for (let i = 0; i < fst_clean.length; i++) {
       prc2[i].textContent = fst_clean[i];
     }
}



let c_c1 = document.querySelector(".c_card:nth-of-type(1)");
let c_c2 = document.querySelector(".c_card:nth-of-type(2)");
let c_c3 = document.querySelector(".c_card:nth-of-type(3)");

let carousel = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let c_b1 = document.querySelector(".c_btn1");
let c_b2 = document.querySelector(".c_btn2");
let ci = 1
let i = 3;
function toNext(){






    c_c1.style.backgroundImage = `url(imgs/carousel/i${carousel[i++]}.png)`;
        c_c1.style.transition = "1.3s";
    c_c2.style.backgroundImage = `url(imgs/carousel/i${carousel[i++]}.png)`;
    c_c2.style.transition = "1.3s";
    c_c3.style.backgroundImage = `url(imgs/carousel/i${carousel[i++]}.png)`;
    c_c3.style.transition = "1.3s";
    if(i === 9){
      i = 0
    }

}



c_b2.addEventListener('click', toNext)



let reg = document.querySelector('.reg')



function noClick(e){
e.preventDefault()
}

reg.addEventListener('click', noClick)

let sel = document.querySelector('select')
console.log(sel)
let opt1 = document.querySelector("option:nth-of-type(1)");


function ds (){
  console.log('fd')
  if (sel.value == "cr") {
 activeValue = 2;
  if (activeValue === 2) {
    for (let i = 0; i < wash_2nd_cl.length; i++) {
      prc[i].textContent = wash_2nd_cl[i];
    }
    for (let i = 0; i < sec_clean.length; i++) {
      prc2[i].textContent = sec_clean[i];
    }
  }

  }

  if(sel.value == 'leg'){
     activeValue = 1;
     if (activeValue === 1) {
       for (let i = 0; i < wash_1st_cl.length; i++) {
         prc[i].textContent = wash_1st_cl[i];
         let btn_div2 = document.querySelectorAll(".txt_cont");
       }
       for (let i = 0; i < fst_clean.length; i++) {
         prc2[i].textContent = fst_clean[i];
       }
     }
  }
  
   if(sel.value == 'jeep'){

    activeValue = 3;
    if (activeValue === 3) {
      for (let i = 0; i < wash_3rd_cl.length; i++) {
        prc[i].textContent = wash_3rd_cl[i];
      }
      for (let i = 0; i < th_clean.length; i++) {
        prc2[i].textContent = th_clean[i];
      }
    }
   }

 if (sel.value == "gruz") {
   activeValue = 4;
   if (activeValue === 4) {
     for (let i = 0; i < wash_4_5_cl.length; i++) {
       prc[i].textContent = wash_4_5_cl[i];
     }
     for (let i = 0; i < fo_clean.length; i++) {
       prc2[i].textContent = fo_clean[i];
     }
   }
 }

 if (sel.value == "pass") {
   activeValue = 5;
  
    if (activeValue === 5) {
      for (let i = 0; i < wash_4_5_cl.length; i++) {
        prc[i].textContent = wash_4_5_cl[i];
      }
      for (let i = 0; i < fi_clean.length; i++) {
        prc2[i].textContent = fi_clean[i];
      }
    }
 }
}

function ds2(){}



sel.addEventListener("change", ds);
sel.addEventListener("change", ds2);



// slider f-n

let scard = document.querySelector('.s_card')
let j =1
function sNext(){
 scard.style.backgroundImage = `url(imgs/carousel/i${carousel[j++]}.png)`;
 if (j === 9){
  j=0
 }
}
c_b1.addEventListener('click', sNext)

let Locked = 0;
let mm = document.querySelector(".mob_menu");
let mbar = document.querySelector(".menu");
  mbar.style.transition = "all 1s linear 1s;";
function openBar (){
  mbar.classList.toggle('opened')
Locked = 1
if (Locked === 1) {
  body.classList.toggle("locked");
  console.log(Locked);
  mm.classList.toggle('none')
  over.classList.toggle('oop')
}
}
mm.addEventListener('click', openBar)
let body = document.querySelector('body')




let close1 = document.querySelector(".menu>ul>li:nth-of-type(1)>a");
let close2 = document.querySelector('.menu>ul>li:nth-of-type(2)>a');
let close3 = document.querySelector(".menu>ul>li:nth-of-type(3)>a");
let close4 = document.querySelector(".menu>ul>li:nth-of-type(4)>a");


function cltab() {
 mbar.classList.remove('opened')
  over.classList.remove("oop");
  body.classList.toggle("locked");
  mm.classList.toggle("none");
}

close1.addEventListener("click", cltab);
close2.addEventListener('click', cltab);
close3.addEventListener("click", cltab);
close4.addEventListener("click", cltab);
const over = document.querySelector(".over");
function PopClose(event){
const target = event.target


  mbar.classList.remove('opened')
  body.classList.remove('locked')
  mm.classList.toggle('none')
    over.classList.remove("oop");

}
over.addEventListener('click', PopClose)
