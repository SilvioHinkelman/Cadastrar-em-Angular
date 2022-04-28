import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pag/home/home.component';
import { UsersComponent } from './pag/users/users.component';
import { ListComponent } from './pag/list/list.component';
import { OptionsComponent } from './pag/options/options.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { BancoDadosService } from './service/banco-dados.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ListComponent,
    OptionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [BancoDadosService,UsersComponent,ListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
