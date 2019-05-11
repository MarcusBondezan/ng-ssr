import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazySectionComponent } from './lazy-section.component';

const routes: Routes = [
    { path: '', component: LazySectionComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LazySectionRoutingModule { }