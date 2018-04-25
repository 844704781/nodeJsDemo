var fortuneCookies=["西瓜","苹果","葡萄","黄瓜","红枣"];

exports.getFortune=function(){
    var idx=Math.floor(Math.random()*fortuneCookies.length);
    return fortuneCookies[idx];
}
