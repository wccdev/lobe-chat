import Auth0 from './auth0';
import Authentik from './authentik';
import AzureAD from './azure-ad';
import Casdoor from './casdoor';
import Github from './github';
import Zitadel from './zitadel';

export const ssoProviders = [Auth0, Authentik, AzureAD, Casdoor, Github, Zitadel];
