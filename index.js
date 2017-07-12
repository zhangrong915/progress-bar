window.onload=function(){
    //currentState:0表示失败，1表示成功，2表示正在进行
    var json={
         allState:["设计","开发","测试","验收","维护"],
         currentQueen:[1,2,4],
         currentState:[0,1,2]
    };

    /**创建进度条代码 */
    function createProgress(json){
        var _html='';
        var html='';
        for(var i=0;i<json.allState.length;i++){
            _html=_html+'<span title="'+json.allState[i]+'"></span>';
        }
        _html='<div class="bar">'+_html+'</div>';
        for(var i=0;i<json.currentQueen.length;i++){
        html=html+'<div class="bar-wrap">'+_html+'</div>';
        }
        return html;
    }

    /**设置宽度:设置进度条的显示长度，分配每一个刻度的长度 bar表示选择器*/
    function setProgressWidth(bar,json){
        var barItemWidth=$(bar).innerWidth()/(json.allState.length); //小刻度的宽度
        $(bar).innerWidth(barItemWidth*(json.allState.length));  //进度条的宽度
        $(bar).children().outerWidth(barItemWidth);  //设置进度条小刻度的宽度
    }

    /*展示进度条：与json数据进行交互，显示进度状态，bar表示选择器*/
    function showProgeress(bar){
        var bar=$(bar);
        var arr=[];
        /*取得进度条*/
        for(var i=0;i<bar.length;i++){
            arr.push($(bar[i]).children());
        }
        /*分别展示进度条*/
        for(var i=0;i<arr.length;i++){
            fun(json.currentQueen[i],json.currentState[i],arr[i]);
        }
    }

    /*进度条的具体展示细节progress表示进行到那个阶段，state表示这个阶段的状态，span表示具体到哪个进度条*/
    function fun(progress,state,span){
        var i;
        for(i=0;i<progress;i++){
            span[i].style.backgroundColor="#49D292";
        }
        switch(state){
            case 0:span[i].style.backgroundColor="#F1684E"; break;
            case 1:span[i].style.backgroundColor="#49D292"; break;
            case 2:span[i].style.backgroundColor="#C9FDD7"; break;
        }
    }

     var html=createProgress(json);
     $('.progress-bar').html(html);
     setProgressWidth('.bar',json);
     showProgeress('.bar')
}