import { PickerlistComponent } from './components/pickerlist/pickerlist.component';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { MultiCheckComponent } from './components/multi-check/multi-check.component';
import { AppComponent } from './app.component';
import { TreeComponent } from './components/tree/tree.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tree', component: TreeComponent},
  { path: 'treeX', component: TreeViewComponent},
  { path: 'multi', component: MultiCheckComponent},
  { path: 'picker', component: PickerlistComponent},
  { path: '', component: AppComponent},

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
