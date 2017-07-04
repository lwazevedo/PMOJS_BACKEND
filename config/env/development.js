"use strict";

/**
 * Development environment settings
 * @description :: This section overrides all other config values ONLY in development environment
 */

module.exports = {
  port: 3000,
  connections: {
    redis: {
      adapter: 'sails-redis',
      port: 6379,
      host: 'localhost'
    },
    memory: {
      adapter: 'sails-memory'
    },
    disk: {
      adapter: 'sails-disk'
    }
  },
  log: {
    level: 'verbose'
  },
  models: {
    connection: 'disk',
    migrate: 'alter'
  }
};