'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
    const ctx = this.ctx;
    // 从router：/user/:id 中，取 id 参数值
    const userId = ctx.params.id;
    // 校验 params.id，必须为数字
    // ctx.validate检验不通过会抛出异常
    // const errors = ctx.validate({ id: { type: 'id' } }, this.ctx.params);
    // 而app.validator.validate检验不通过会返回错误。你可以自己选择要对这个错误怎么处理，是不管呢还是返回前端。
    try {
      // const errors = this.app.validator.validate({ id: { type: 'id' } }, this.ctx.params);
      // console.log(errors)
      ctx.validate({ id: { type: 'id' } }, this.ctx.params)
    } catch (err) {
      console.log(err)
      // ctx.body = { '校验错误': `参数 ${err.errors[0]['field']}: ${err.errors[0]['message']}` }
      // 国际化，从 config/locale/zh-CN.js 中找对应关系；此网址中的方案一：https://www.cnblogs.com/cag2050/p/11181208.html
      let tipMessage = err.errors[0]['message']
      ctx.body = { '校验错误': `参数 ${err.errors[0]['field']}: ${this.ctx.gettext(tipMessage)}` }
      return;
    }
    const user = await ctx.service.user.find(userId);
    ctx.body = user;
  }
}

module.exports = UserController;
