import { Routes } from '@angular/router';
import { SumaComponent } from './suma/suma.component';
import { RestaComponent } from './resta/resta.component';
import { ListaComponent } from './lista/lista.component';

export const routes: Routes = [
    { path: 'lista', component: ListaComponent },
    { path: 'suma', component: SumaComponent },
    { path: 'resta', component: RestaComponent },
    { path: '**', redirectTo: 'lista', pathMatch: 'full' } // Ruta por defecto
];
