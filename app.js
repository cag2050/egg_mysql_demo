'use strict';
// app.js 和 agent.js 用于自定义启动时的初始化工作，可选

class AppBootHook {
  constructor(app) {
    this.app = app;
  }
}

module.exports = AppBootHook;
