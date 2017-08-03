import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Angular2SocialLoginModule } from 'angular2-social-login';
import { ResponsiveModule } from 'ng2-responsive';

// component
import { AuthComponent } from './Auth.component';
import { SignInComponent } from './SignIn/SignIn.component';
import { SignOutComponent } from './SignOut/SignOut.component';
import { RegisterComponent } from './Register/Register.component';
import { VerifyComponent } from './Verify/Verify.component';
import { ForgotPasswordComponent } from './ForgotPassword/ForgotPassword.component';
import { ChangePassComponent } from './ChangePass/ChangePass.component';
import { EnterPhoneNumberComponent } from './EnterPhoneNumber/EnterPhoneNumber.component';

// services
import { UserService } from '../Share/Services/user.service';


const routing: Routes = [
    { path: 'signIn', component: SignInComponent },
    { path: 'signOut', component: SignOutComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'verify/:IdU/:phone/:code', component: VerifyComponent },
    { path: 'forgotPass', component: ForgotPasswordComponent },
    { path: 'changePass', component: ChangePassComponent },
    { path: 'phone', component: EnterPhoneNumberComponent },
];

const Routing: ModuleWithProviders = RouterModule.forChild(routing);

// tslint:disable-next-line:prefer-const
let providers = {
    'google': {
        'clientId': '442448415974-lvusnqsttcup9dd79fa2en47car1793k.apps.googleusercontent.com'
        // client secret: Nz_F3bCWPtJs6XMYaui40TMv
    },
    'linkedin': {
        'clientId': 'LINKEDIN_CLIENT_ID'
    },
    'facebook': {
        'clientId': '123454808277990',
        'apiVersion': 'v2.10'
    }
};

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        Angular2SocialLoginModule,
        FormsModule,
        ResponsiveModule,
        Routing
    ],
    declarations: [AuthComponent,
        SignInComponent,
        SignOutComponent,
        RegisterComponent,
        VerifyComponent,
        ForgotPasswordComponent,
        ChangePassComponent,
        EnterPhoneNumberComponent
    ],
    providers: [
        UserService
    ]
})
export class AuthModule { }

Angular2SocialLoginModule.loadProvidersScripts(providers);
