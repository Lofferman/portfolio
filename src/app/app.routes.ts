import { Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { MeshComponent } from './components/blog/blogs/mesh/mesh.component';
import { Five3oneComponent } from './components/blog/blogs/five3one/five3one.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home',  pathMatch:'full'},
    { path: 'home', component: HomeComponent },

    { path: 'blog', component: BlogComponent,
        children: [
          { path: 'mesh', component:MeshComponent},
          { path: 'five3one', component:Five3oneComponent},

        ] 
    },
    { path: '**', redirectTo:'' }
];
