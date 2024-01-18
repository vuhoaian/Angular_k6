import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import{ ProductsComponent} from'./pages/admin/products/products.component'
import{AdminComponent} from'./layouts/admin/admin.component'
import{CreateComponent} from'./pages/create/create.component'
export const routes: Routes = [
// route '/' = page Home
  // path, component
  { path: '', component: HomeComponent },
 //{ path: 'admin', component: ProductsComponent },
 {
  path: 'admin',
  component: AdminComponent,
  children: [
    { path: 'products', component: ProductsComponent },
    { path: 'products/create', component: CreateComponent },
    //{ path: 'products/edit/:id', component: EditComponent },
  ],
},
];
