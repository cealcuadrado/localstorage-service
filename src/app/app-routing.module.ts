import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'one', loadChildren: () => import('./one/one.module').then(m => m.OneModule) },
  { path: 'two', loadChildren: () => import('./two/two.module').then(m => m.TwoModule) },
  { path: 'three', loadChildren: () => import('./three/three.module').then(m => m.ThreeModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
