
$(function(){
    $(".nav-c ul .li-outside").hover(
        function(){
            $(this).css({
                "backgound":"#3a4b68",
                "border-left":"3px solid #ffffff"
            }),
            $(this).find(".icon-outside").css({"color":"white"}),
            $(this).find("span").css({"color":"white"})
        },
        function(){
            $(this).css({
                "backgound":"#172b4d",
                "border-left-color":"#172b4d"
            }),
            $(this).find(".icon-outside").css({"color":"#7f9bcc"}),
            $(this).find("span").css({"color":"#7a96c6"})
            
        }
    );
    

    $(".nav-b ul li").hover(
        function(){
            $(this).find("span").css({"color":"white"})
            $(this).css({
                "backgound":"#172b4d",
                "border-left-color":"white"
            })
        },
        function(){
            $(this).find("span").css({"color":"#7a96c6"}),
            $(this).css({
                "backgound":"#172b4d",
                "border-left-color":"#172b4d"
            })
        }

    );
    
$(".nav-c ul .none p").hover(
    function(){
        $(this).find("span").css({"color":"white"}),
        $(this).find("i").css({"color":"white"})
    },
    function(){
        $(this).find("span").css({"color":"#7a96c6"}),
        $(this).find("i").css({"color":"#7a96c6"})
    }
);   
let str = false;
$(".nav-c ul .li-outside").click(
    function(){
        if(str == false){
            $(this).next(".none").css({"display":"block"}),
            $(this).siblings().next(".none").css({"display":"none"}),
            str = true
        }else{
            $(this).next(".none").css({"display":"none"}),
            str = false
        }
    }
)




// 头头右侧 :: 有待完善

$(".four ul li").click(
    function(){
        let index = $(this).index();
        console.log(index);
        $(".nono1").attr({flag:false})
        if(index == 0){
            $(".nono1").css({"display":"none"})

            $(".nono0").css({"display":"block"})
        }else if(index == 2){
            $(".nono1").css({"display":"none"})

            $(".nono2").css({"display":"block"})
        }else if(index == 4){
            $(".nono1").css({"display":"none"})

            $(".nono3").css({"display":"block"})
        }else if(index == 6){
            $(".nono1").css({"display":"none"})

            $(".nono4").css({"display":"block"})
        }else{
            $(".nono1").css({"display":"none"})

        }
    }       
)

//点击菜单 让左侧的导航栏隐藏
    $(".icon-menu").click(
        function(){
            if(str == false){
                $("nav").css({
                    "display":"none"
                }),
                $(".shadow").css({
                    "display":"none"
                }),
                str = true
            }else{
                $("nav").css({
                    "display":"block"
                }),
                $(".shadow").css({
                    "display":"block"
                }),
                str = false
            }
            
        }

    )






})