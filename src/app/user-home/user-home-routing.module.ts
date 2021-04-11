import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserHomePage } from './user-home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: UserHomePage,
    children: [
      {
        path: 'main',
        children: [
          {
            path: '',
            loadChildren: () => import('../main/main.module').then( m => m.MainPageModule)
          },
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/main',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserHomePageRoutingModule {}
