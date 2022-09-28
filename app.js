let img = document.querySelector(`.inimg`);
let text = document.querySelector(`.intext`);
let fishP = document.querySelector(".fıshtype p ");
let hrotate = document.querySelector(".rotate");
let img2 = document.querySelector(`.inimg2`);
let text2 = document.querySelector(`.intext2`);

document.addEventListener(`scroll`, (e)=>{
    console.log((document.body.scrollTop))


   if(document.body.scrollTop >= 0){
        img.classList.add("inimg1");
        text.classList.add("intext1");
        hrotate.classList.add("hrotate");
        img2.classList.add("newinimg2")
        text2.classList.add("newintext2");
   }
   
})

/*
document.addEventListener(`mousemove`, (e)=>{
     console.log(e.y)
     if(e.y >= 140){
          img.classList.add("inimg1");
        text.classList.add("intext1")
     }
})*/