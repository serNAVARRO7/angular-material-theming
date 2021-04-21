import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

// Provides angular material modules to the application
@NgModule({
  exports: [
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class SharedMaterialModule { }