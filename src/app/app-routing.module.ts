import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SessionUserComponent} from "./components/session-user/session-user.component";
import {LoginComponent} from "./components/login/login.component";
import {CadastroComponent} from "./components/cadastro/cadastro.component";

const routes: Routes = [
  {path: '', component: SessionUserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastre-se', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
