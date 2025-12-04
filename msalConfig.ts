import { Configuration } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: "dc784c34-6594-4f76-b709-21c23fe35a84",
    authority: "https://login.microsoftonline.com/26bef5f1-7958-4594-8cbf-19b3b090d072",
    redirectUri: "http://localhost:3000"
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false
  }
};