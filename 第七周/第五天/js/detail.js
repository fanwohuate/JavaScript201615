var userName = document.getElementById('userName'),
    submit = document.getElementById('submit');
/*
 * 给提交按钮绑定点击事件，当点击按钮的时候，完成以下的事情：
 * [增加]
 * 1、获取文本框中的内容
 * 2、按照API接口文档的要求,向服务器发送请求
 * 3、接收服务器返回的结果，给予客户相关的提示即可
 */
submit.onclick = function () {
    var value = userName.value;//->获取INPUT文本框中的内容

    //->ADD
    ajax({
        url: '/addInfo',
        method: 'POST',
        dataType: 'JSON',
        data: {
            name: value //->我们自己的AJAX库,如果DATA是个对象,会默认转换为字符串‘xxx=xxx&xxx=xxx...’
        },
        success: function (result) {
            if (result && result.code == 0) {
                alert('亲，增加成功了哦!');
                //->跳转回到首页面:JS页面跳转 window.location.href='xxx/xxx.html' 这样就跳转到了指定路径下的某一个页面
                window.location.href = 'index.html';
            } else {
                alert('亲，很遗憾失败了!');
            }
        }
    });
};
