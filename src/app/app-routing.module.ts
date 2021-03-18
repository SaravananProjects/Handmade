import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Application components
import { LoginComponent } from './login/login.component';
import { DealerRoute } from './shared/utils/dealer-route.enum';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: DealerRoute.LOGIN, component: LoginComponent },
    { path: DealerRoute.SIGNUP, component: SignInComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
