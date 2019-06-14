$(document).ready(function () {


    //index.html end topbutton 
    $("#scrollTop").clik(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    })


    //nav share animation index.html







    $('#example').DataTable();






})
    $(window).scroll(function () {
if(scrollY>20){
    $("#header").css("display","none");
    $("#header a.my-logo-black").css("display","none");
    $("#header a.my-logo-white").css("display","block");
    // $("#header a.nav-item").css("color","white");
}
else{
    $("#header").css("display","block");
    $("#header a.my-logo-black").css("display","");
    $("#header a.my-logo-black").css("display","");
}
if(scrollY>200){
    
    $("#header").css("display","block");
    $("#header").css("background-color","white");
    $("#header a.my-logo-black").css("display","block");
    $("#header a.my-logo-white").css("display","none");
    // $("#header a.nav-link").attr("style","color:black");
    // $("#header .fa-shopping-cart").attr("style","");

}
     else{
        $("#header").css("background-color","");
        $("#header a.my-logo-white").css("display","block");
        $("#header a.my-logo-black").css("display","none");
        // $("#header a.nav-link").attr("style","color:white");
        // $("#header .fa-shopping-cart").attr("style","color:white");
     }   

    
    


    


})

    

// acordion.html
var titles = document.querySelectorAll(".title");


for (var i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", function () {
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

//datetables.html
$(function () {
    $('input[name="daterange"]').daterangepicker({
        opens: 'left'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});

$(function () {

    $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });

    $('input[name="datefilter"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });

    $('input[name="datefilter"]').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });

});

$(function () {

    $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });

    $('input[name="datefilter"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });

    $('input[name="datefilter"]').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });

})

$(function () {

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);

});


// data table

$(document).ready(function () {
    $("# dtBasicExample").DataTable();
    $(".dataTables_length").addClass(".bs-select");
});