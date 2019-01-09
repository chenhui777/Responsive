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


// //charts1
var myChart111 = echarts.init(document.getElementById('charts1'));

// app.title = '坐标轴刻度与标签对齐';

option = {
    color: ['white'],
    backgroundColor :['#f0146c'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'none'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '0%',
        right: '4%',
        bottom: '100%',
        containLabel: true
    },
    xAxis : [
        {   show:false,
            type : 'category',
            data : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '',''],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {   show:false,
            type : 'value',
            min:0,
            max:20,
        }
    ],
    series : [
        {
            name:'',
            type:'bar',
            barWidth: '30%',
            data:[1, 14, 10, 20, 1, 14, 10, 20, 1, 14, 10, 20, 1, 14, 10, 20]
        }
    ]
};
myChart111.setOption(option);
window.addEventListener("resize",function(){
    myChart111.resize();
});




// var myChart = echarts.init(document.getElementById('charts1'));
//     // app.title = '坐标轴刻度与标签对齐';

//     option = {
//         color: ['white'],
//         backgroundColor :['#f0146c'],
//         tooltip : {
//             trigger: 'axis',
//             axisPointer : {            // 坐标轴指示器，坐标轴触发有效
//                 type : 'none'        // 默认为直线，可选为：'line' | 'shadow'
//             }
//         },
//         grid: {
//             left: '0%',
//             right: '6%',
//             bottom: '100%',
//             containLabel: true
//         },
//         xAxis : [
//             {   show:false,
//                 type : 'category',
//                 data : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '',''],
//                 axisTick: {
//                     alignWithLabel: true
//                 }
//             }
//         ],
//         yAxis : [
//             {   show:false,
//                 type : 'value',
//                 min:0,
//                 max:20,
//             }
//         ],
//         series : [
//             {
//                 name:'',
//                 type:'bar',
//                 barWidth: '30%',
//                 data:[1, 14, 10, 20, 1, 14, 10, 20, 1, 14, 10, 20, 1, 14, 10, 20]
//             }
//         ]
//     };
// myChart.setOption(option);
// window.addEventListener("resize",function(){
//     myChart.resize();
// });


//charts2
var myChart1 = echarts.init(document.getElementById('charts2'));

// app.title = '坐标轴刻度与标签对齐';

option = {
    color: ['white'],
    backgroundColor :['#07abee'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'none'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '0%',
        right: '4%',
        bottom: '100%',
        containLabel: true
    },
    xAxis : [
        {   show:false,
            type : 'category',
            data : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '',''],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {   show:false,
            type : 'value',
            min:0,
            max:20,
        }
    ],
    series : [
        {
            name:'',
            type:'bar',
            barWidth: '30%',
            data:[1, 14, 10, 20, 1, 14, 10, 20, 1, 14, 10, 20, 1, 14, 10, 20]
        }
    ]
};
myChart1.setOption(option);
window.addEventListener("resize",function(){
    myChart1.resize();
});


//charts3
var myChart2 = echarts.init(document.getElementById('charts3'));

// app.title = '坐标轴刻度与标签对齐';

option = {
    color: ['white'],
    backgroundColor :['#641bd0'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'none'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '0%',
        right: '4%',
        bottom: '100%',
        containLabel: true
    },
    xAxis : [
        {   show:false,
            type : 'category',
            data : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '',''],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {   show:false,
            type : 'value',
            min:0,
            max:20,
        }
    ],
    series : [
        {
            name:'',
            type:'bar',
            barWidth: '30%',
            data:[1, 14, 10, 20, 1, 14, 10, 20, 1, 14, 10, 20, 1, 14, 10, 20]
        }
    ]
};
myChart2.setOption(option);
window.addEventListener("resize",function(){
    myChart2.resize();
});


var myChart3 = echarts.init(document.getElementById('charts4'));
option = {
    backgroundColor :['white'],
    tooltip : {
        trigger : 'axis',
        axisPointer :{
            type:"line"
        }
    },
    xAxis : [
            {
                type : 'category',
                axisLine: {
                    // symbol: ['none', 'arrow'], //设置x轴或y轴箭头
                    lineStyle: {
                        
                        width: 1, //这里是为了突出显示加上的
                    }
                },
                //刻度是向内还是向外
                axisTick:{
                    inside:true,
                    length:2,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'solid',
                        color:'#66',//网格颜色
                    }
                },
                axisLabel:{ //调整x轴的lable
                    //interval:0,  //按x轴的长度显示的刻度的个数    例如：本来显示20个刻度，因为x轴端只显示了10个，
                    rotate:0,  //实现x轴的刻度的标识实现旋转，
                    textStyle:{
                        fontSize:10,// 让字体变大
                        color:"#666"
                    }
                },
              
                boundaryGap : false,
                 data: ['01', '02', '03', '04','05', '06', '07', '08', '09', '10', '11','12']
               // data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
    yAxis: {
        type: 'value',
        min :0,
        max :25
    },
  
       series : [

            {
                name:'Sales Report',
                type:'line',
                stack: '',
                // fontWeight :40,
                smooth:true,
                // symbol :hollow,     //设定为实心点
                            symbolSize: 10,   //设定实心点的大小
                itemStyle : {
                    normal : {
                        color:'#2dce89',//设置折线折点颜色
                        lineStyle:{
                            width : 5,
                            color:'#2dce89'//设置折线线条颜色
                        },
                        areaStyle :{
                            normal : {
                                color:"#d5f5e7"
                            }
                        }
                    }
                },
                data: [15, 8, 12, 5, 12, 8, 16,25, 15, 10, 20, 10],
                //data:['aa','AA']
            }
        ]
};
myChart3.setOption(option);
window.addEventListener("resize",function(){
    myChart3.resize();
});


//id = main
var dom = document.getElementById("main");
var myChart = echarts.init(dom);
var app = {};
option = null;
var posList = [
    'left', 'right', 'top', 'bottom',
    'inside',
    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
];

app.configParameters = {
    rotate: {
        min: -90,
        max: 90
    },
    align: {
        options: {
            left: 'left',
            center: 'center',
            right: 'right'
        }
    },
    verticalAlign: {
        options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
        }
    },
    position: {
        options: echarts.util.reduce(posList, function (map, pos) {
            map[pos] = pos;
            return map;
        }, {})
    },
    distance: {
        min: 0,
        max: 100
    }
};

app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
        var labelOption = {
            normal: {
                rotate: app.config.rotate,
                align: app.config.align,
                verticalAlign: app.config.verticalAlign,
                position: app.config.position,
                distance: app.config.distance
            }
        };
        myChart.setOption({
            series: [{
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }]
        });
    }
};


var labelOption = {
    normal: {   //柱子上默认的文字
        show: false,  
        // ture为显示
        //其他的是字体大小  位置 颜色等样式
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        fontSize: 16,
        rich: {
            name: {
                textBorderColor: '#fff'
            }
        }
    }
};

option = {
    color: ['#fb531c', '#19b48b', ],
    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['1', '2', '3', '4', '5','6','7','8'],
            splitLine:{//分割线
                show: true,
                lineStyle:{  //y轴分割线调整
                    color:'#cbcec6',
                    type:'sloid',
                    // width:12

                            }
                        },
        }
    ],
    yAxis: [
        {
           type : 'value',
            min:0,
            splitNumber:4,
            // 设置y轴值间隔
            axisLabel:{
                formatter: function (value) {
                var texts = [];
                if(value=="20"){
                texts.push('20');
                }
                else if (value==30) {
                texts.push('30');
                }
                else if (value==40) {
                texts.push('40');
                }else if(value==50){
                    texts.push('50');
                }else if(value==60){
                    texts.push('60');
                }else if(value==70){
                    texts.push('70');
                }else if(value==80){
                    texts.push('80');
                }
                return texts;
                }
            },
            axisLine:{ 
            lineStyle:{ 
                type : 'solid',
            color:'#b1b1b1', //y轴字体颜色
width:0,// y轴线的宽度
} 
},
        }
    ],
    tooltip : {//提示框  //触发类型，默认（'item'）数据触发，可选为：'item' | 'axis'  
        axisPointer: {
                type: ''
            },
        trigger: 'axis',
        formatter: "{a} <br/>{b} : {c} ",
        backgroundColor:'#cee0ed',//通过设置rgba调节背景颜色与透明度
                color:'black',
                formatter: function(datas)  //回调函数表示的是提示框的信息
              {
                var res = datas[0].name + '<br/>', val;
                  for(var i = 0, length = datas.length; i < length; i++) {
                        val = datas[i].value;
                        res += datas[i].seriesName + '：' + val + '<br/>';
                    }
                    return res;
               }

    },
    series: [
        {
            barWidth: '5px',
            name: 'Vistors',
            type: 'bar',
            barGap: 0.1,
            label: labelOption,
            data: [40, 30, 60, 35, 60,25,50,40]
        },
        {
            barWidth: '5px',
            name: 'Uniqe',
            type: 'bar',
            label: labelOption,
            data: [50, 60, 40, 70, 35,75,30,0]
        }
         
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
    window.addEventListener("resize",function(){
    myChart.resize();
});
}



//  蓝色背景 id=max
var myChart5 = echarts.init(document.getElementById('max'));
option = {
    backgroundColor :['#631ad0'],
    tooltip : {
        trigger : 'axis',
        axisPointer :{
            type:"line"
        }
    },
    xAxis : [
            {
                type : 'category',
                axisLine: {
                    // symbol: ['none', 'arrow'], //设置x轴或y轴箭头
                    lineStyle: {
                        
                        width: 1, //这里是为了突出显示加上的
                    }
                },
                //刻度是向内还是向外
                axisTick:{
                    inside:true,
                    length:2,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'solid',
                        color:'#66',//网格颜色
                    }
                },
                axisLabel:{ //调整x轴的lable
                    //interval:0,  //按x轴的长度显示的刻度的个数    例如：本来显示20个刻度，因为x轴端只显示了10个，
                    rotate:0,  //实现x轴的刻度的标识实现旋转，
                    textStyle:{
                        fontSize:10,// 让字体变大
                        color:"white"
                    }
                },
              
                boundaryGap : false,
                 data: ['1', '2', '3', '4','5', '6', '7']
               // data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
    yAxis: {
        type: 'value',
        min :0,
        max :700,
        axisLabel:{ //调整y轴的lable
            //interval:0,  //按x轴的长度显示的刻度的个数    例如：本来显示20个刻度，因为x轴端只显示了10个，
            rotate:0,  //实现x轴的刻度的标识实现旋转，
            textStyle:{
                fontSize:10,// 让字体变大
                color:"white"
            }
        },

    },
  
       series : [

            {
                name:'Sales Report',
                type:'line',
                stack: '',
                // fontWeight :40,
                smooth:true,
                // symbol :hollow,     //设定为实心点
                            symbolSize: 10,   //设定实心点的大小
                itemStyle : {
                    normal : {
                        color:'#631ad0',//设置折线折点颜色
                        lineStyle:{
                            width : 5,
                            color:'white'//设置折线线条颜色
                        },
                        
                    }
                },
                data: [540, 632, 432, 320, 350, 240, 150],
                //data:['aa','AA']
                areaStyle :{
                    normal : {
                        color:"#9f93ee"
                    }
                }
            }
        ]
};
myChart5.setOption(option);
window.addEventListener("resize",function(){
    myChart5.resize();
});







})