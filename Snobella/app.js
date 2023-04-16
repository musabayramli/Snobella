



let img = document.querySelectorAll(".heart");

img.forEach((x)=>{
  x.addEventListener("click", ()=>{
    x.setAttribute("src","./img/Vector (11).png")
   })
})

// img.src = './img/Vector (11).png'

function myFunction() {
    var x = document.querySelector(".dive");
    var y=document.querySelector(".content");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display ="block";
    }
  }
//!  change color
  let col1=document.querySelectorAll(".cart1-bag");
  let bag=document.querySelector(".sec4-cart");
  col1.forEach((item)=>{
    item.addEventListener("click", ()=>{
      bag.style.backgroundColor="#FF6B00";
    });
  })




