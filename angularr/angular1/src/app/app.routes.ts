import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import{ ProductsComponent} from'./pages/admin/products/products.component'

export const routes: Routes = [
// route '/' = page Home
  // path, component
  { path: '', component: HomeComponent },
  { path: 'admin', component: ProductsComponent },
];
