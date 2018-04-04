import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutOneComponent } from './layout-one/layout-one.component';
import { LayoutTwoComponent } from './layout-two/layout-two.component';
import { LayoutThreeComponent } from './layout-three/layout-three.component';
import { LayoutFourComponent } from './layout-four/layout-four.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LayoutOneComponent, LayoutTwoComponent, LayoutThreeComponent, LayoutFourComponent]
})
export class SectionModule { }
