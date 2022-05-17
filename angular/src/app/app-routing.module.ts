import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';

import { RegisterComponent } from './register/register.component';

const routes: Routes = [

{
  component:RegisterComponent,
  path:''
},

{
  component:DisplayComponent,
  path:'display',
  pathMatch:'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
