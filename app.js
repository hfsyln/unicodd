let img = document.querySelector(`.inimg`);
let text = document.querySelector(`.intext`)

document.addEventListener(`mousemove`, (e)=>{
    console.log(e.y)
   if(e.y >= "170"){
        img.classList.add("inimg1");
        text.classList.add("intext1")
   }
})