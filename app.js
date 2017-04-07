/**
 * Created by jikaifu on 2017/4/6.
 */
const fs = require('fs');
const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(bodyParser());

const controller =require('./controllers');



app.use(controller());
app.listen(3000);
console.log('app start at port 3000...');