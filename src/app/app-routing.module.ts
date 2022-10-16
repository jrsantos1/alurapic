import { SigninComponent } from './home/signin/signin.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './../shared/photo-form/photo-form.component';
import { AppComponent } from './app.component';
import { PhotoListComponent } from './../shared/photo-list/photo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'add', component: PhotoFormComponent},
  {path: 'user/:userName', component: PhotoListComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
