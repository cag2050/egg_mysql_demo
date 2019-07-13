'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 从router：/user/:id 中，取 id 参数值，官方网址：https://eggjs.org/zh-cn/basics/controller.html#router-params
  router.get('/user/:id', controller.user.info);
};
