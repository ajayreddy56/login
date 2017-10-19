import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './login/home.component';


import { LoginComponent } from './login/login.component';


const routes:Routes=[
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'Home',component:HomeComponent}
];

@NgModule({
	imports:[
	RouterModule.forRoot(routes)
	],
	exports:[
		RouterModule
	]
})

export class AppRoutingModule{}