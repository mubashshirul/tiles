import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TilesListComponent } from './tiles-list/tiles-list.component';
import { TilesDetailComponent } from './tiles-detail/tiles-detail.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tiles',        component: TilesListComponent },
  { path: 'tiles/:id',        component: TilesDetailComponent }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
