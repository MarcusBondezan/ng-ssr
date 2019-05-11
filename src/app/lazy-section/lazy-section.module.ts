import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazySectionComponent } from './lazy-section.component';
import { LazySectionRoutingModule } from './lazy-section.routing.module';

@NgModule({
    declarations: [
        LazySectionComponent
    ],
    imports: [
        CommonModule,
        LazySectionRoutingModule
    ]
})
export class LazySectionModule { }