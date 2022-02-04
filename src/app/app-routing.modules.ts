import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContatoComponent } from "./instituicao/contato/contato.component";
import { SobreComponent } from "./instituicao/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers:[ 
        { provide: APP_BASE_HREF, useValue: '/' } 
    ]
})

export class AppRoutingModule {}