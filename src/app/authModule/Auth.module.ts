import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Angular2SocialLoginModule } from 'angular2-social-login';

// component
import { AuthComponent } from './Auth.component';
import { SignInComponent } from './SignIn/SignIn.component';
import { SignOutComponent } from './SignOut/SignOut.component';
import { RegisterComponent } from './Register/Register.component';
import { VerifyComponent } from './Verify/Verify.component';
import { ForgotPasswordComponent } from './ForgotPassword/ForgotPassword.component';
import { ChangePassComponent } from './ChangePass/ChangePass.component';

// services
import { UserService } from '../Share/Services/user.service';


const routing: Routes = [
    { path: 'signIn', component: SignInComponent },
    { path: 'signOut', component: SignOutComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'verify/:IdU/:phone/:code', component: VerifyComponent },
    { path: 'forgotPass', component: ForgotPasswordComponent },
    { path: 'changePass', component: ChangePassComponent },
];

const Routing: ModuleWithProviders = RouterModule.forChild(routing);

// tslint:disable-next-line:prefer-const
let providers = {
    'google': {
      'clientId': 'GOOGLE_CLIENT_ID'
    },
    'linkedin': {
      'clientId': 'LINKEDIN_CLIENT_ID'
    },
    'facebook': {
      'clientId': '1841378422845116',
      'apiVersion': 'v2.4'
    }
  };

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        Angular2SocialLoginModule,
        FormsModule,
        Routing
    ],
    declarations: [AuthComponent,
        SignInComponent,
        SignOutComponent,
        RegisterComponent,
        VerifyComponent,
        ForgotPasswordComponent,
        ChangePassComponent
    ],
    providers: [
        UserService
    ]
})
export class AuthModule { }

Angular2SocialLoginModule.loadProvidersScripts(providers);
