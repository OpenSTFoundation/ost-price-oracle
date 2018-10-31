'use strict';

/**
 * Restful API response formatter
 *
 * @module lib/formatter/response
 */

const OSTBase = require('@openstfoundation/openst-base'),
  responseHelper = new OSTBase.responseHelper({ moduleName: 'ost-price-oracle' });

module.exports = responseHelper;
