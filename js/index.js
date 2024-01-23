/// <reference types="../@types/jquery" />
let counter = 100
$("a").on("click",function(e){
    console.log(
        e.target.getAttribute("href")
    );
    let aHref = e.target.getAttribute("href")
    let sectionScroll = $(aHref).offset().top
    $("body").animate({scrollTop:sectionScroll}, 5000)
})

$("#icon").on("click", function(){
   
    $(".side-box").animate({width:"250px"} , 50)
        $("caption-home").animate({marginLeft :'250px'},50)
    })
   
   

$("#xMark").on("click", function(){
    $(".side-box").animate({width:"0px"} , 50)
    $("caption-home").animate({marginLeft :'0px'},50)
   
})

$('#about .open-close').on("click", function(){
    $('.text').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

window.onload = function() {
countTime("10 october 2025 9:56:00");
}

function countTime(countTo) {
  
        let newDate = new Date(countTo);
    newDate = (newDate.getTime()/1000);

    let nowDate = new Date();
    nowDate = (nowDate.getTime()/1000);

    timeDifference = (newDate- nowDate);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countTime(countTo); }, 1000);
}


$("#textarea").on("keyup" ,function(){
    let contLength = $(this).val().length
    let  cont = counter - contLength
    if(cont <= 0){
        $("#warningMessage").removeClass("d-none")
        $("#num").addClass("d-none")
    }
    else{
        $("#num").text(cont)
    }
})
