import { ToggleChevronDirective } from './directives/toggle-chevron.directive';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './components/tree/tree.component';
import { MultiCheckComponent } from './components/multi-check/multi-check.component';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { TreeModule } from '@circlon/angular-tree-component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    MultiCheckComponent,
    ToggleChevronDirective,
    TreeViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
