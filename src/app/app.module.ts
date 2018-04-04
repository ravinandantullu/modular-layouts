import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { SectionModule } from './module/section/section.module';
import { HublotComponent } from './component/hublot/hublot.component';
import { HublotHeaderComponent } from './component/hublot/hublot-header/hublot-header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidenavComponent,
    HublotComponent,
    HublotHeaderComponent,
  ],
  imports: [
    BrowserModule,
    SectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
