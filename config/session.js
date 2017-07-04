/**
 * Session Configuration
 * (sails.config.session)
 *
 * Sails session integration leans heavily on the great work already done by
 * Express, but also unifies Socket.io with the Connect session store. It uses
 * Connect's cookie parser to normalize configuration differences between Express
 * and Socket.io and hooks into Sails' middleware interpreter to allow you to access
 * and auto-save to `req.session` with Socket.io the same way you would with Express.
 *
 * For more information on configuring the session, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.session.html
 */

module.exports.session = {
  secret: '2e02907ae1510994b9874461f7bd77e1',

  // cookie: {
  //     path: '/',
  //     httpOnly: true,
  //     secure: false,
  //     maxAge: 24 * 60 * 60 * 1000
  // },

  adapter: 'redis',

  host: 'localhost',
  port: 6379,
  ttl: 15 * 60 * 60,
  // db: 0,
  // pass: <redis auth password>,
  prefix: '',
  key: 'authorization-id',
  saveUninitialized: false,
  resave: false,
};