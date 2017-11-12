let koa = require('koa');
let app = new koa();
let router = require('koa-router')();
// CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。
// 下面以koa2-cors为例，
const cors = require('koa2-cors');

// 具体参数我们在后面进行解释
app.use(cors({
    origin: function (ctx) {
        if (ctx.url === '/test') {
            return "*"; // 允许来自所有域名请求
        }
        return 'http://localhost:3000';
        // 这样就能允许 http://localhost:3000 这个域名的请求了
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

router.get('/api/22', async function (ctx) {
    ctx.body = {
        'okokok': '恭喜 __ 你成功登陆了123123'
    }
});

let homeAdData = require('./home/ad.js');
router.get('/api/homead', async (ctx, next) => {
    ctx.response.body = homeAdData
});

let homeListData = require('./home/list.js');
router.get('/api/homelist/:city/:page', async (ctx, next) => {
    // 参数
    const params = ctx.params;
    const paramsCity = params.city;
    const paramsPage = params.page;

    console.log('当前城市：' + paramsCity);
    console.log('当前页数：' + paramsPage);

    ctx.response.body = homeListData
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(8090);//8090端口启用koa2