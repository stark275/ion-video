import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideosPage } from './videos.page';

const routes: Routes = [
  {
    path: '',
    component: VideosPage
  },
  {
    path: 'play',
    loadChildren: () => import('./play/play.module').then( m => m.PlayPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideosPageRoutingModule {}
