var express=require("express");
var app=express();
var fortune=require('./lib/fortune.js');
var handlebars=require('express3-handlebars').create({defaultLayout:'main'})
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars')


app.use(express.static(__dirname+'/public'));


//这样我们可以在启动服务器前通过设置环境变量覆盖端口。如果你在运行这个案例时发现它监听的不是3000端口，检查下是否设置了环境变量port
app.set('port',process.env.PORT||3000);

app.get('/',function (req,res) {
    res.render('home')
})

app.get('/about',function (req,res) {
    res.render('about',{
                        fortune:fortune.getFortune(),
    });
});


//定制404页面
app.use(function(req,res,next){
    res.status(404);
    res.render('404')
    });
//定制500页面
app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(500);
    res.render('500')
    });

app.listen(app.get('port'),function(){
    console.log('Express started on http://localhost:'+
    app.get('port')+';press Ctrl-C to terminate.');
    })
