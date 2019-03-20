import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


// Imports von Typescript-Dateien/Klassen in diese Klasse
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ShowListComponent} from './components/show-list/show-list.component';
import {FormComponent} from './components/form/form.component';
import {ShowDataService} from './services/show-data.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DetailComponent } from './components/detail/detail.component';

// Konfiguration der Angular-Applikation (die Applikation iszt ein Modul)
@NgModule({
  // Welche Komponenten haben wir?
  declarations: [
    AppComponent,
    ShowListComponent,
    FormComponent,
    DetailComponent
  ],
  // Welche anderen Angular-Module werden benötigt?
  // Ist so was wie das importieren von Jar-Dateien
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // um mit Formularen arbeiten zu können
    HttpClientModule // um Http-Anfragen stellen zu können
  ],
  // Welche Services sollen unseren Komponenten bereitgestellt werden?
  providers: [ShowDataService],
  // Welche Komponente soll beim Start der Applikation angezeigt werden
  bootstrap: [AppComponent]
})
export class AppModule {
}
