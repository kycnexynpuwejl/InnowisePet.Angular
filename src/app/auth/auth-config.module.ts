import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'https://localhost:7000',
            redirectUrl: window.location.origin,
            postLogoutRedirectUri: window.location.origin,
            clientId: 'APIClient',
            scope: 'APIScope', // 'openid profile ' + your scopes
            responseType: 'code'
        }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
