'use strict';
/**
 * Custom console log methods.
 *
 * @module lib/logger/customConsoleLogger
 */
const OSTBase = require('@ostdotcom/base'),
  Logger = OSTBase.Logger;

const rootPrefix = '../..',
  coreConstants = require(rootPrefix + '/config/coreConstants'),
  loggerLevel = 1 === Number(coreConstants.DEBUG_ENABLED) ? Logger.LOG_LEVELS.TRACE : Logger.LOG_LEVELS.DEBUG;

module.exports = new Logger('saas-api', loggerLevel);
