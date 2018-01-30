// Copyright 2017 OST.com Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ----------------------------------------------------------------------------
// Test: OpenSTUtility_utils.js
//
// http://www.simpletoken.org/
//
// ----------------------------------------------------------------------------

const BigNumber = require('bignumber.js')
  , baseCurrency = 'OST'
  , quoteCurrency = 'USD'
;

/// @dev Deploy PriceOracle
module.exports.deployOpenSTUtility = async function(artifacts, accounts){
  
  const priceOracle = await PriceOracle.new(baseCurrency, quoteCurrency, { gas: 10000000 });
  return {
    priceOracle : priceOracle
  }
}