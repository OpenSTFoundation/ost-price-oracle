/**
 * Class for core constants.
 *
 * @class CoreConstants
 */
class CoreConstants {
  /**
   * Debug enabled.
   *
   * @returns {*}
   */
  get DEBUG_ENABLED() {
    return process.env.OST_DEBUG_ENABLED;
  }

  /**
   * Returns package name.
   *
   * @returns {string}
   */
  get icNameSpace() {
    return 'ost-price-oracle';
  }
}

module.exports = CoreConstants;
