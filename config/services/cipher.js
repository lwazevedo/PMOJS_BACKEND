"use strict";

module.exports = {
  services: {
    cipher: {
      jwt: {
        secretKey: 'DEFAULT_SECRET_KEY',
        expiresIn: '1h'
      }
    }
  }
};