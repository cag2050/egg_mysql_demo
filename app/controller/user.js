'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
    const ctx = this.ctx;
    // 从router：/user/:id 中，取 id 参数值
    const userId = ctx.params.id;
    const user = await ctx.service.user.find(userId);
    ctx.body = user;
  }
}

module.exports = UserController;
