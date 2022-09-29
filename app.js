let img = document.querySelector(`.inimg`);
let text = document.querySelector(`.intext`);
let fishP = document.querySelector(".fıshtype p ");
let hrotate = document.querySelector(".rotate");
let img2 = document.querySelector(`.inimg2`);
let text2 = document.querySelector(`.intext2`);
let fıshAll = document.querySelectorAll(".fıshtype")

document.addEventListener(`scroll`, (e)=>{
    console.log((document.body.scrollTop))


   if(document.body.scrollTop >= 0){
        img.classList.add("inimg1");
        text.classList.add("intext1");
        hrotate.classList.add("hrotate");
        img2.classList.add("newinimg2")
        text2.classList.add("newintext2");
        
        console.log(fıshAll)
       
          
          setTimeout(() => {
               fıshAll.forEach((item) => {
                    console.log(item)
                    item.classList.add(`fısh1`)
                    
               }) ;
             }, "2000")
     }
});  

          
          //setInterval(function(){item.classList.add("fısh1")},1000)
         
         
         

     



/*
document.addEventListener(`mousemove`, (e)=>{
     console.log(e.y)
     if(e.y >= 140){
          img.classList.add("inimg1");
        text.classList.add("intext1")
     }
})*/
let menü = false; 

document.querySelector(".hmbrg").addEventListener("click",()=>{
  
 
if(menü == false){
     document.querySelector(".menübar").innerHTML = `
     <nav class="navbar bg-light fixed-top">
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
               <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
               </li>
               <ul class="nav-item nav-list"><a class="nav-link" href="#">Products</a>
                    
                    <li class="nav-iç">
                         <a class="nav-link active" aria-current="page" href="#">Fresh fish</a>
                    </li>
                    <li class="nav-iç">
                         <a class="nav-link active" aria-current="page" href="#">Salted fish</a>
                    </li>
                    <li class="nav-iç">
                         <a class="nav-link active" aria-current="page" href="#">Stockfish</a>
                    </li>
                    <li class="nav-iç">
                         <a class="nav-link active" aria-current="page" href="#">Roe</a>
                    </li>
                    <li class="nav-iç">
                         <a class="nav-link active" aria-current="page" href="#">Dry fish</a>
                    </li>

               </ul>
               <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">About Us</a>
               </li>
               <li class="nav-item">
                    <a class="nav-link" href="#">Contact Us</a>
               </li>
          </ul>
      </div>
     </nav>
     `
     menü = true
     }else {
          document.querySelector(".menübar").innerHTML = ""
          menü = false
     }
});