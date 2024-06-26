import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';
ListComponent
@NgModule({
  declarations: [MainPageComponent, ListComponent, AddCharacterComponent,],
  imports: [FormsModule,
CommonModule
  ],
  exports: [MainPageComponent,  ListComponent],
})
export class DbzModule { }
