import { NgModule } from '@angular/core';
import {
  MatCheckboxModule,
  MatCardModule,
  MatIconModule,
  MatGridListModule,
  MatRadioModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatListModule,
  MatExpansionModule,
  MatChipsModule,
  MatSidenavModule
} from '@angular/material';


@NgModule({
  imports: [
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatRadioModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatListModule,
    MatExpansionModule,
    MatChipsModule,
    MatSidenavModule,
  
  ],
  exports: [
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatRadioModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatListModule,
    MatExpansionModule,
    MatChipsModule,
    MatSidenavModule
  ]
})
export class AppMatModule { }
