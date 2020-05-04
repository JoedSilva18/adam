"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _v2 = require('ibm-watson/assistant/v2'); var _v22 = _interopRequireDefault(_v2);
var _auth = require('ibm-watson/auth');

class WatsonAssistant {
  async getService() {
    const assistant = new (0, _v22.default)({
      version: '2020-04-01',
      authenticator: new (0, _auth.IamAuthenticator)({
        apikey: process.env.WATSON_APIKEY,
      }),
      url: process.env.WATSON_URL,
    });

    return assistant;
  }
}

exports. default = new WatsonAssistant();
