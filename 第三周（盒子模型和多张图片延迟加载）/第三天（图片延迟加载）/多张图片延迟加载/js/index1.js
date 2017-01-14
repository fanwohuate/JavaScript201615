//
var newsList = document.getElementById('newsList');
var imgs = newsList.getElementsByTagName('img'); // []

//  获取数据
var data = null;
;(function (){
    var xhr = new XMLHttpRequest();
    xhr.open('GET','data.txt?_='+Math.random(),false);
    xhr.onreadystatechange = function (){
        if(xhr.readyState ==  4 && /^2\d{2}$/.test(xhr.status)){
            data = JSON.parse(xhr.responseText);
        }
    }
    xhr.send(null);

})();
console.log(data); // [obj,obj...]

// 绑定数据

;(function (){
    if(data && data.length){
        var str = '';
        for(var i = 0 ; i < data.length; i++){
            // data : [{src : },{},{}]
            str += '<li>';
                str += '<div><img src="" real="'+ data[i].src  +'"></div>';
                str += '<div><h3>'+ data[i].title +'</h3><p>'+ data[i].desc +'</p></div>';
            str += '</li>';
        }
        newsList.innerHTML = str;
    }
})();
// 这个函数执行结束之后页面已经存在li了

function imgsDelayLoad() {
    for(var i = 0; i < imgs.length; i++){

        var winHeight = utils.win('clientHeight');
        var winScrollTop = utils.win('scrollTop');
        var boxHeight = imgs[i].parentNode.offsetHeight;
        var boxOffsetTop = utils.offset(imgs[i].parentNode).top;
        if(winHeight + winScrollTop > boxHeight + boxOffsetTop){
            // 单张
            imgDelayLoad(imgs[i]);
        }
    }
}
function imgDelayLoad(img){
    if(img.isLoaded){
        return;
    }
    var tempImg = document.createElement('img'); //new Image
    tempImg.src = img.getAttribute('real');
    tempImg.onload = function (){
        img.src = this.src;
        fadeIn(img);
    }
    img.isLoaded = true;
}

function fadeIn(img){
    window.clearInterval(img.timer);
    img.timer = window.setInterval(function (){
        var opacity = utils.getCss(img,'opacity');
        if(opacity >= 1){
            window.clearInterval(img.timer);
            return;
        }
        opacity += 0.01;
        utils.setCss(img,'opacity',opacity);
    },10);
}

imgsDelayLoad();
window.onscroll = imgsDelayLoad;





















