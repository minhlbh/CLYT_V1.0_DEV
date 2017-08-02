import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './Auth.component';
import { SignInComponent } from './SignIn/SignIn.component';
import { SignOutComponent } from './SignOut/SignOut.component';
import { RegisterComponent } from './Register/Register.component';
import { VerifyComponent } from './Verify/Verify.component';
import { ForgotPasswordComponent } from './ForgotPassword/ForgotPassword.component';
import { Routes, RouterModule } from '@angular/router';

const routing: Routes = [
    { path: 'signIn', component: SignInComponent },
    { path: 'signOut', component: SignOutComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'verify', component: VerifyComponent },
    { path: 'forgotPass', component: ForgotPasswordComponent },
];

const Routing: ModuleWithProviders = RouterModule.forChild(routing);


@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [AuthComponent,
    SignInComponent,
    SignOutComponent,
    RegisterComponent,
    VerifyComponent,
    ForgotPasswordComponent
]
})
export class AuthModule { }
