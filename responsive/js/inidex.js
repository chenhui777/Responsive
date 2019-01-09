

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
    

//charts1

 // 基于准备好的dom，初始化echarts实例
//  var myChart = echarts.init(document.getElementById('main'));
// //  app.title = '坐标轴刻度与标签对齐';

var myChart1 = echarts.init(document.getElementById('main'));

 option = {
     color: ['#3398DB'],
     tooltip : {
         trigger: 'axis',
         axisPointer : {            // 坐标轴指示器，坐标轴触发有效
             type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
         }
     },
     grid: {
         left: '3%',
         right: '4%',
         bottom: '3%',
         containLabel: true
     },
     xAxis : [
         {
             type : 'category',
             data : ['1', '2', '3', '4', '5', '6', '7' , '8'],
             axisTick: {
                 alignWithLabel: true
             },
            

         }
     ],
     yAxis : [
         {
             type : 'value'
         }
     ],
     series : [
         {
             name:'New Orders',
             type:'bar',
             barWidth: '60%',
             data:[40, 30, 60, 35, 60, 25, 50, 40]
         }
     ]
 };
myChart1.setOption(option);
window.addEventListener("resize",function(){

    myChart1.resize();

});


// app.title = '坐标轴刻度与标签对齐';

 



  //charts2
   // 基于准备好的dom，初始化echarts实例
//    window.addEventListener("resize", function () {
//     myChart.resize();
//     })
 var myChart = echarts.init(document.getElementById('max'));
  option = {
    title : {
        text: '',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
   
    legend: {
        orient: 'vertical',
        left: 'right',
        data: ['Jenas','T-Shirts','Shoes','Lengerie','Laptops','Mobiles']
    },
    series : [
        {
            name: '',
            type: 'pie',
            hoverAnimation:false,
            radius : ['55%','10%'],
            center: ['50%', '40%'],
            data:[
                {value:25, name:'Jenas'},
                {value:50, name:'T-Shirts'},
                {value:25, name:'Shoes'},
                {value:25, name:'Lengerie'},
                {value:15, name:'Laptops'},
                {value:10, name:'Mobiles'}
            ],
            color:['#f6da22','#bbe2e8','#6cacde',"red","pink","green"],
            itemStyle: {
                emphasis: {
                    shadowBlur: 0,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                normal : {
                    label : {
                      show : false,
                    },
                    labelLine : {
                      show : false
                    }
                  },
            }
        }
    ]
};
myChart.setOption(option);
window.addEventListener("resize",function(){
    myChart.resize();
});


var myChart3 = echarts.init(document.getElementById('charts3'));

option = {
    tooltip:{
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} "
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15','16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
    },
    color: {
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 0.5,
        colorStops: [{
            offset: 0, color: '#b488e5' // 0% 处的颜色
        },{
            offset: 0.5, color: '#b488e5' // 0% 处的颜色
        }, 
        {
            offset: 1, color: '#b488e5' // 100% 处的颜色
        }],
        globalCoord: true // 缺省为 false
        
    },
    grid: {
        x: 80,
        y: 60,
        x2: 80,
        y2: 60,
        // width: {totalWidth} - x - x2,
        // height: {totalHeight} - y - y2,
        backgroundColor: 'rgba(0,0,0,0)',
        borderWidth: 1,
        borderColor: '#ccc'
    },  
    // xAxis: {
    //     show: true,
    //     splitLine:{//分割线
    //         show: true,
    //         lineStyle:{color:'#cbcec6',
    //             type:'solid'
    //                     }
    //                 },
    
    // },
    
    yAxis: {
        type: 'value',
        show: true,
        min:0,
        max:20,
        interval:2,
        },
    series: [{
        name:"",
        type:"bar",
        data: [6, 4, 6, 5, 12, 8, 12, 15, 6, 8, 6, 8,20, 10, 15, 8, 14, 10, 13, 6, 5, 12, 8, 10, 17, 6, 7, 6, 10,0],
        type: 'line',
        areaStyle: {}
    }]
};

myChart3.setOption(option);
window.addEventListener("resize",function(){
    myChart3.resize();
});



// 四个圈圈
//圈1
var myChartS1 = echarts.init(document.getElementById('one-q1'));
option = {
  title : {
      text: '',
      subtext: '',
      x:'center'
  },
//   tooltip : {
//       trigger: 'item',
//       formatter: "{a} <br/>{b} : {c} ({d}%)"
//   },
 
  legend: {
      orient: 'vertical',
      left: 'right',
      data: []
  },
  series : [
      {
          name: '',
          type: 'pie',
          hoverAnimation:false,
          radius : ['70%','90%'],
        //   center: ['50%', '40%'],
          data:[
              {value:81, name:'Jenas'},
              {value:19, name:'T-Shirts'}
          ],
          color:['#5e72e4','#f2f2f2'],
          itemStyle: {
              emphasis: {
                  shadowBlur: 0,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              normal : {
                  label : {
                    show : false
                  },
                  labelLine : {
                    show : false
                  }
                },
          }
      }
  ]
};
myChartS1.setOption(option);
window.addEventListener("resize",function(){
    myChartS1.resize();
});

//圈2
var myChartS2 = echarts.init(document.getElementById('one-q2'));
option = {
  title : {
      text: '',
      subtext: '',
      x:'center'
  },
//   tooltip : {
//       trigger: 'item',
//       formatter: "{a} <br/>{b} : {c} ({d}%)"
//   },
 
  legend: {
      orient: 'vertical',
      left: 'right',
      data: []
  },
  series : [
      {
          name: '',
          type: 'pie',
          hoverAnimation:false,
          radius : ['70%','90%'],
        //   center: ['50%', '40%'],
          data:[
              {value:38, name:'Jenas'},
              {value:62, name:'T-Shirts'}
          ],
          color:['#ff2fa0','#f2f2f2'],
          itemStyle: {
              emphasis: {
                  shadowBlur: 0,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              normal : {
                  label : {
                    show : false
                  },
                  labelLine : {
                    show : false
                  }
                },
          }
      }
  ]
};
myChartS2.setOption(option);
window.addEventListener("resize",function(){
    myChartS2.resize();
});

//圈3
var myChartS3 = echarts.init(document.getElementById('one-q3'));
option = {
  title : {
      text: '',
      subtext: '',
      x:'center'
  },
//   tooltip : {
//       trigger: 'item',
//       formatter: "{a} <br/>{b} : {c} ({d}%)"
//   },
 
  legend: {
      orient: 'vertical',
      left: 'right',
      data: []
  },
  series : [
      {
          name: '',
          type: 'pie',
          hoverAnimation:false,
          radius : ['70%','90%'],
        //   center: ['50%', '40%'],
          data:[
              {value:60, name:'Jenas'},
              {value:40, name:'T-Shirts'}
          ],
          color:['#2dce89','#f2f2f2'],
          itemStyle: {
              emphasis: {
                  shadowBlur: 0,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              normal : {
                  label : {
                    show : false
                  },
                  labelLine : {
                    show : false
                  }
                },
          }
      }
  ]
};
myChartS3.setOption(option);
window.addEventListener("resize",function(){
    myChartS3.resize();
});

//圈4
var myChartS4 = echarts.init(document.getElementById('one-q4'));
option = {
  title : {
      text: '',
      subtext: '',
      x:'center'
  },
//   tooltip : {
//       trigger: 'item',
//       formatter: "{a} <br/>{b} : {c} ({d}%)"
//   },
 
  legend: {
      orient: 'vertical',
      left: 'right',
      data: []
  },
  series : [
      {
          name: '',
          type: 'pie',
          hoverAnimation:false,
          radius : ['70%','90%'],
        //   center: ['50%', '40%'],
          data:[
              {value:38, name:'Jenas'},
              {value:62, name:'T-Shirts'}
          ],
          color:['#172b4d','#f2f2f2'],
          itemStyle: {
              emphasis: {
                  shadowBlur: 0,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              normal : {
                  label : {
                    show : false
                  },
                  labelLine : {
                    show : false
                  }
                },
          }
      }
  ]
};
myChartS4.setOption(option);
window.addEventListener("resize",function(){
    myChartS4.resize();
});




//头部固定

//   $(window).scrollTop(function(){
//         let kk = $(window).scrollTop();
//         if(kk>0){
//          $(".header").css({"position":"fixed"})
//     }
//   });
 

})

   
