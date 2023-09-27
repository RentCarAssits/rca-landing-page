import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './public/pages/hero/hero.component';
import { NotFoundComponent } from './public/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HeroComponent,

    children: [{ path: '', redirectTo: 'public/landing', pathMatch: 'full' }],
  },
  {
    path: 'public',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },
  { path: 'public/page-not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'public/landing' },

  /*BILLING MANAGEMENT*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
