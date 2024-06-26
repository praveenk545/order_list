import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { ListComponent } from './list/list.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
{path:"home",component:OrderComponent
},
{path:"task",component:ListComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
