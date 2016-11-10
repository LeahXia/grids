$(document).ready(function(){
    var init= function(rows){
    for(i=0;i<rows;i++){
    $("table").append("<tr class='row'></tr>");
    };
    for(j=0;j<rows;j++){
    $(".row").append("<td class='col'></td>");
    };
    var heightWidth= Math.floor(600/rows);
    $(".col").height(heightWidth).width(heightWidth);}
    
    init(60);
    
    $(".col").hover(function(){
        $(this).css("background","white");
    });
    $("#reset").click(function(){
        $(".col").css("background","black");
    });
    
    $("#colorful").click(function(){ 
        $(".col").hover(function(){
            $(this).css("background","rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")"); 
        });
    });
    
    $("#black").click(function(){
        $(".col").hover(function(){
            $(this).css("background","white");
        });
    });
    
    var setC= $("#setNum").val();
    $("#setColor").click(function(){
        $(".col").hover(function(){
            $(this).css("background","#"+$("#setNum").val());
        });
    });
    
    $("#lucky").click(function(){ 
        var red=Math.floor(Math.random()*255);
        var green=Math.floor(Math.random()*255);
        var blue=Math.floor(Math.random()*255);
        $(".col").hover(function(){
            $(this).css("background","rgb("+red+","+green+","+blue+")"); 
        });
    });
    
    
    $("#sizeSub").click(function(){
      if($("#canvasSize").val()<0 || $("#canvasSize").val()>61){
        alert("Please choose between 1 and 60");
      }else{
        $(".row").remove();
        $(".col").remove();
        init($("#canvasSize").val());};
        $(".col").hover(function(){
          $(this).css("background","white");
      });                
    });
    $("#sizeDef").click(function(){
        $(".row").remove();
        $(".col").remove();
        init(60);
        $(".col").hover(function(){
          $(this).css("background","white");
      });                
    });

    $("#boom").click(function(){
      $(".col").hover(function(){
        $(this).css("background","yellow");
            $(this).effect("explode");
      });
      });
    
    $("#dbl").click(function(){
      $(".col").dblclick(function(){
          $(this).css("background","black");
          $(".col").hover(function(){
             $(this).css("background","black");
          });
      }); 
    });
    
    $("darker").click(function(){
        $(".col").hover(function(){
          var currentOp= $(this).css("opacity");
            if(currentOp<1){
                return currentOp-=0.1;
            }else{
                return currentOp=1;
            }
           $(this).css("opacity",currentOp);
           
        });
    });
 
    
    
    
    
    
    
});
