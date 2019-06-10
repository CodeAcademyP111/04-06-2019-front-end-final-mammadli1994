$(document).ready(function () {
    var toInterval = 12416;
    var fromInterval = 600;
     
    var toInterval = 1416;
    var fromInterval = 600;
    setInterval(function () {

        

        if (fromInterval <= toInterval) {
            
            fromInterval++;


            if(scrollY>2900){
                fromInterval=600;
                
            }
           
               

            $(".interval").text(fromInterval);

       
           
     
    }
    console.log(fromInterval)
    }, 0.1)

    $(window).scroll(function () {

        if (scrollY > 100) {
            $("header").css("background-color", "white");
            $(".navbar-brand").attr("src", "img/12.png")
        } else {
            $("header").css("background-color", "")
        }
// console.log(scrollY)
    })

    // $('.carousel').carousel({
    //     interval: 0
    // })




})



var titles = document.querySelectorAll(".title");


for (var i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", function() {
        if (this.nextElementSibling.style.maxHeight == "") {
            this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px";
            this.children[1].classList.replace("fa-plus", "fa-minus");
        } else {
            this.nextElementSibling.style.maxHeight = "";
            this.children[1].classList.replace("fa-minus", "fa-plus");
        }
        this.classList.toggle("active");
    })
}