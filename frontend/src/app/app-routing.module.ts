import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/home/home.module').then((m) => m.HomeModule),
    data: {
      title: 'Home',
    },
  },
  {
    path: 'clientes',
    loadChildren: () =>
      import('./views/clientes/clientes.module').then((m) => m.ClientesModule),
    data: { title: 'Clientes', breadcrumb: 'Clientes' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
