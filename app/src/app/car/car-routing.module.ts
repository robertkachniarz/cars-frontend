import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
const routes: Routes = [
  { path: 'car', redirectTo: 'car/index', pathMatch: 'full' },
  { path: 'car/index', component: IndexComponent },
  { path: 'car/:carId/view', component: ViewComponent },
  { path: 'car/create', component: CreateComponent },
  { path: 'car/:carId/edit', component: EditComponent },
  { path: 'car/:carId/delete', component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRoutingModule {}
