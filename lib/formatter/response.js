"use strict";

/**
 * Restful API response formatter
 *
 * @module lib/formatter/response
 */

function Result(data, errCode, errMsg) {
  this.success = (typeof errCode === "undefined");

  this.data = data || {};

  if (!this.success) {
    this.err = {
      code: errCode,
      msg: errMsg
    };
  }

  // Check if response has success
  this.isSuccess = function () {
    return this.success;
  };

  // Check if response is not success. More often not success is checked, so adding a method.
  this.isFailure = function () {
    return !this.isSuccess();
  };

  // Format data to hash
  this.toHash = function () {
    var s = {};
    if (this.success) {
      s.success = true;
      s.data = this.data;
    } else {
      s.success = false;
      if (this.data instanceof Object && Object.keys(this.data).length > 0) {
        //Error with data case.
        s.data = this.data;
      }
      s.err = this.err;
    }

    return s;
  };

  // Render final error or success response
  this.renderResponse = function (res, status) {
    status = status || 200;
    return res.status(status).json(this.toHash());
  };
}

/**
 * OpenST Explorer Response helper
 *
 * @constructor
 */
const ResponseHelper = function () {
};

ResponseHelper.prototype = {

  /**
   * Generate success response object
   *
   * @param {Object} data - data to be formatted
   *
   * @returns {Object<Result>} - formatted success result
   */
  successWithData: function (data) {
    return new Result(data);
  },

  /**
   * Generate error response object
   *
   * @param {String} errCode - Error Code
   * @param {String} errMsg  - Error Message
   * @param {String} errPrefix - Error Prefix
   *
   * @returns {Object<Result>} - formatted error result
   */
  error: function (errCode, errMsg, errPrefix) {
    errCode = 'ost-price-oracle(' + errCode + ')';

    if (errPrefix) {
      errCode = errPrefix + "*" + errCode;
    }
    //console.error('### Error ### ' + errCode + ' ###');
    //console.error('### Error MSG ### ' + errMsg + ' ###');
    return new Result({}, errCode, errMsg);
  }

};

module.exports = new ResponseHelper();