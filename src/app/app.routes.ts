import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

export const routes: Routes = [



{
    path:'content/:id',
    component:ContentComponent,
    title: 'content'
},

{
    path:'',
    component:HomeComponent,
    title: 'Home'
}



];
