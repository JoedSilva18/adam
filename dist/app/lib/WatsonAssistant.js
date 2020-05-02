"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _v2 = require('ibm-watson/assistant/v2'); var _v22 = _interopRequireDefault(_v2);
var _auth = require('ibm-watson/auth');

class WatsonAssistant {
  async getService() {
    const assistant = new (0, _v22.default)({
      version: '2020-04-01',
      authenticator: new (0, _auth.IamAuthenticator)({
        apikey: 'FtioZq2albOdRcSS3uFR94zFcMfN1LyzQBIgIYBMnRaO',
      }),
      url:
        'https://api.us-south.assistant.watson.cloud.ibm.com/instances/a394d2bd-5ee7-45aa-89cd-065322c9eb01',
    });

    return assistant;
  }
}

exports. default = new WatsonAssistant();
