import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SessionUserComponent} from "./components/session-user/session-user.component";

const routes: Routes = [
  {path: '', component: SessionUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
