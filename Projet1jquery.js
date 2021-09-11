$(function(){
    var MainMenuItem=$("#main-menu ul").children("li"), /*on selectionne tout avec les li*/
        NombredElementMainMenuItem=MainMenuItem.length,
        OpenedIndex=-1,
       
        init=function(){
                bindEvents();
               /* item= MainMenuItem.eq(newIndex) ;eq retourne l'item*/
                /*console.log(OpenedIndex,item);*/
                if(validIndex(OpenedIndex)){
                    animateItem(MainMenuItem.eq(OpenedIndex),true ,250);
                }           
            },
        bindEvents= function(){
            MainMenuItem.children(".images").click(function(){
                var newIndex=$(this).parent().index();/* l'element auquel je suis*/
                    checkAndAnimateItem(newIndex);
              });
                $(".button").hover(
                    function()
                    {
                        $(this).addClass("hovered")
                    },
                    function()
                    {
                        $(this).removeClass("hovered")

                    }
                );  /*same mouseenter et mouseleave*/
                $(".button").click(function(){
                    var newIndex=$(this).index();
                    checkAndAnimateItem(newIndex);


                });
            

            },
        validIndex = function(indexToCheck)
        {
            return (indexToCheck >=0) && (indexToCheck< NombredElementMainMenuItem);
        }, 
        animateItem=function(item , toOpen, speed){
            var colorImage=item.find(".color"),/* pour trouver parmi les descendant*/
                itemParam=toOpen ?{width:"420px"}:{width:"140px"},/* si c'est vrai 420 faux 140*/
                colorImageParam=toOpen ? {left:"0px"}: {left:"140px"};/* 0 pour ouvrir 140 pour fermer*/
               
               
                colorImage.animate(colorImageParam,speed);
                item.animate(itemParam,speed);
      
            
    },
    checkAndAnimateItem= function(indexToCheckAndAnimate){
        
        if(OpenedIndex === indexToCheckAndAnimate)
        {
            animateItem(MainMenuItem.eq(indexToCheckAndAnimate), false  ,250);
            OpenedIndex=-1;
        }
        else{
            if(validIndex(indexToCheckAndAnimate)){
                animateItem(  MainMenuItem.eq(OpenedIndex) , false, 250);
                OpenedIndex=indexToCheckAndAnimate;
                animateItem(MainMenuItem.eq(OpenedIndex), true,250);

            }
        }
    };
        init();
        
});