let bar = document.getElementById("bar");
let navbarMenu = document.getElementById("navbarMenu");

bar.addEventListener("click",function(){
    
   navbarMenu.classList.toggle("openMenu");
   bar.classList.toggle("whiteBar");
})
let drinks = document.querySelectorAll(".img-container img");
let coffe = document.querySelector(".coffe");
let circle = document.querySelector(".circle");
drinks.forEach(drink => {
    drink.addEventListener("click", function(e){
        coffe.src=e.target.src;
        console.log(e.target.src);
        if (e.target.src=="http://127.0.0.1:5500/img1.png") {
            circle.style.backgroundColor="green";
        }
        else if(e.target.src=="http://127.0.0.1:5500/img2.png") {
            circle.style.backgroundColor="pink";
        }
        else if(e.target.src=="http://127.0.0.1:5500/img3.png"){
            circle.style.backgroundColor="#c941a1";
        }
    })
});
