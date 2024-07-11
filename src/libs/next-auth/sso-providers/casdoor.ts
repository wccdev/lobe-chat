/* eslint-disable sort-keys-fix/sort-keys-fix */
import { authEnv } from '@/config/auth';

const provider = {
  id: 'casdoor',
  provider: {
    id: 'casdoor',
    name: 'Casdoor',
    type: 'oidc',
    issuer: authEnv.CASDOOR_ISSUER,
    authorization: { params: { scope: 'openid email profile' } },
    clientId: authEnv.CASDOOR_CLIENT_ID,
    clientSecret: authEnv.CASDOOR_CLIENT_SECRET,
    checks: ['pkce', 'state'],
    profile(profile: any) {
      return {
        id: profile.sub,
        name: profile.displayName,
        email: profile.email,
        image: profile.avatar,
      }
    },
  }
};

export default provider;
