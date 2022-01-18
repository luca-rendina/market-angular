import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CassaComponent } from './cassa/cassa.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{
  path: 'orto',
  component: CatalogoComponent
},
{
  path: '',
  component: CatalogoComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'cassa',
  component: CassaComponent
},
{
  path: 'error',
  component: ErrorComponent
},
//File not found
{
  path : '**', //Default:
  component: NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
