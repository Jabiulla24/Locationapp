import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { OffersPage } from '../pages/offers/offers';
import { QuestionsPage } from '../pages/questions/questions';
import { EventsPage } from '../pages/events/events';
import { LoginPage } from '../pages/login/login';
import {RegistrationPage} from '../pages/registration/registration';
import { AuthService } from '../providers/auth-service';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    QuestionsPage,
    EventsPage,
    OffersPage,
    RegistrationPage,
    LoginPage
      
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    QuestionsPage,
    EventsPage,
    OffersPage,
    RegistrationPage,
    LoginPage
    
  ],
  providers: [AuthService,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
