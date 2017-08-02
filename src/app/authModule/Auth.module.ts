import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FacebookModule } from 'ngx-facebook';

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
    { path: 'verify', component: VerifyComponent },
    { path: 'forgotPass', component: ForgotPasswordComponent },
    { path: 'changePass', component: ChangePassComponent },
];

const Routing: ModuleWithProviders = RouterModule.forChild(routing);


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FacebookModule.forRoot(),
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
