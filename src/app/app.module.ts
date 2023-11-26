import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Pregunta1Component } from './pregunta1/pregunta1.component';
import { Pregunta2Component } from './pregunta2/pregunta2.component';
import { Pregunta3Component } from './pregunta3/pregunta3.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './angular-material/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Pregunta1Component,
    Pregunta2Component,
    Pregunta3Component
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    //AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent,
        children: [
          {path: 'uno', component: Pregunta1Component},
          {path: 'dos', component: Pregunta2Component},
          {path: 'tres', component: Pregunta3Component}
        ]      
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
