import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatIconModule } from '@angular/material';


@NgModule({
    imports: [
      MatButtonModule,
      MatToolbarModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatCardModule,
      MatMenuModule,
      MatIconModule
    ],
    exports: [
      MatButtonModule,
      MatToolbarModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatCardModule,
      MatMenuModule,
      MatIconModule
    ],
  })
  
  export class MaterialModule { }