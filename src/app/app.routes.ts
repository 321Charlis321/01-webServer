
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIO_ROUTES } from './components/usuario/usuario.router';
import { LoginComponent } from './components/login/login.component';



const APP_ROUTES: Routes = [
    { path: 'home' , component: HomeComponent},
    {path: 'login', component: LoginComponent},
    { path: 'usuario/:id' , component: UsuarioComponent,
    children : USUARIO_ROUTES
},
{path: '**', pathMatch: 'full' , redirectTo: 'home'  }
// tslint:disable-next-line: semicolon
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
