import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { ClassesComponent } from './components/classes/classes.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaleryComponent } from './components/galery/galery.component';
import { GuidesComponent } from './components/guides/guides.component';
import { HeaderComponent } from './components/header/header.component';
import { LinkComponent } from './components/header/link/link.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { HomeComponent } from './components/home/home.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { RegisterComponent } from './components/register/register.component';
import { CharacterComponent } from './components/character/character.component';
import { AuthGuardService } from 'src/_services/auth-guard.service';
import { DpsComponent } from './components/classes/dps/dps.component';
import { HealComponent } from './components/classes/heal/heal.component';
import { TankComponent } from './components/classes/tank/tank.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'guides', component: GuidesComponent },
  { path: 'galery', component: GaleryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'dps', component: DpsComponent},
  { path: 'heal', component: HealComponent},
  { path: 'tank', component: TankComponent},
  { path: '**', component: NotFoundPageComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    FooterComponent,
    GaleryComponent,
    GuidesComponent,
    HeaderComponent,
    LinkComponent,
    LogoComponent,
    HomeComponent,
    JobsComponent,
    LoginComponent,
    NotFoundPageComponent,
    RegisterComponent,
    CharacterComponent,
    DpsComponent,
    HealComponent,
    TankComponent



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
