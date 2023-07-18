import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


//Components
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    ListComponent
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    ListComponent,
    FormsModule
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule
  ]
})
export class SharedModule { }