'use strict';

/**
 * seven-wonder service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::seven-wonder.seven-wonder');
