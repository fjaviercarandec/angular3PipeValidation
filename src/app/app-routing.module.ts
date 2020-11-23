import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateComponent } from './components/date/date.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path: 'date',
    component: DateComponent
  },
  {
    path: 'form',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
