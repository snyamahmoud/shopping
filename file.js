$(document).ready(function (){
    "use strict";
    $('.checkout').click(function() {
        
      alert("The Shopping Detail Is = 'Products' And The total Cost = '' .");
    });
    
    $('.send').click(function() {
      alert("The Message Sent");
    });
    
    $("input[type='submit'").click(function(){
        alert("Search Loading .....");
    });
    
    $(".adding1").click(function() {
        $('.glyphicon-shopping-car').text(1);
    });
    
    $(".remove1").click(function() {
        $(".div1").remove();
    }) ;
    $(".remove2").click(function() {
        $(".div2").remove();
    }) ;
    
     $(".remove3").click(function() {
        $(".div3").remove();
    }) ;
    $(".remove4").click(function() {
        $(".div4").remove();
    }) ;
    
     $(".remove5").click(function() {
        $(".div5").remove();
    }) ;
    $(".remove6").click(function() {
        $(".div6").remove();
    }) ;
        
    $("html").niceScroll();
    $('.carousel').carousel(
    {
        interval:3000
    });
    $(".gear-check").click(function () {
         $(".color-option").fadeToggle();                   
    });
    
    var colorLi = $(".color-option ul li") , scrollButton = $("#scroll-top");
    
colorLi
      .eq(0).css("backgroundColor", "#E41B17").end()
      .eq(1).css("backgroundColor", "#E426D5").end()
      .eq(2).css("backgroundColor", "#009AFF").end()
      .eq(3).css("backgroundColor", "#FFD500");
      
      colorLi.click(function () {
        
         $("link[href*='theme']").attr("href",$(this).attr("data-value"));
       });
      
      
      $(window).scroll(function () {
           if( $(this).scrollTop() >= 700)
           {
            scrollButton.show();
           }
           else
           {
            scrollButton.hide();

           }
          
             });
      
               scrollButton.click(function () {
                $("html,body").animate({scrollTop:0}, 600);

        });
      
      
      $(window).load(function () {
            $(".loading-overlay .spinner").fadeOut(2000, function () {
                
            $("body").css("overflow","auto");
            $(this).parent().fadeOut(2000,function () {

                $(this).remove();
            });
        });
      });

});
