'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    // get：查询一条记录
    const user = await this.app.mysql.get('users', { id: uid });
    return { user };
  }
}

module.exports = UserService;
