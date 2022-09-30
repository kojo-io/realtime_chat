
import {IEnvironment} from "./ienvironment";

const apiHost = 'possible-dragon-20.hasura.app';
const apiUrl = `https://${apiHost}/api/rest/`

export const environment : IEnvironment = {
  apiHost,
  apiUrl,
  enableDebugTools: false,
  logLevel: 'debug',
  production: true
};

