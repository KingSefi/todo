import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoRoutingModule } from './todo.routing.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, TodoRoutingModule, MaterialModule, FormsModule],
})
export class TodoModule {}
