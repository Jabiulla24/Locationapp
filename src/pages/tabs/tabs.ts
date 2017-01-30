import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { OffersPage } from '../offers/offers';
import { QuestionsPage } from '../questions/questions';
import { EventsPage } from '../events/events';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  tab4Root:any=QuestionsPage;
  tab5Root:any=EventsPage;
  tab6Root:any=OffersPage;
  


  constructor() {

  }
}
