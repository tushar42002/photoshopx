console.log("hello2");




// active class in menu or ul li with div class="portfolio-menu"
let js = document.querySelectorAll(".portfolio-menu li");
js.forEach((item) =>{
    item.addEventListener("click", () => {
        let activeClass = document.querySelector(".active");
         activeClass.className = activeClass.className.replace("active", "");
        item.className += "active"
    })
})
// const menubtn = document.querySelector('ul');
//     document.querySelector('.menubar').onclick =  function(){
//         //  this.classList.toggle('active');
//         menubtn.classList.toggle('active')
//     }
    const menubtn = document.querySelector('.menu');
    document.querySelector('.menubar').onclick =  function(){
          this.classList.toggle('active1');
        menubtn.classList.toggle('active1');
    }
    //  const menubar = document.querySelector('.menubar');
    //  document.querySelector('.menubar').onclick =  function(){
    //     //  this.classList.toggle('active');
    //      menubar.classList.toggle('active2');
    //  }
