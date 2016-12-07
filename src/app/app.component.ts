import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { StoresPage } from '../pages/stores/stores';
import { StorePage } from '../pages/stores/store';
import { SharePage } from '../pages/share/share';
import { ProfilePage } from '../pages/profile/profile';
import { LoginUserPage } from '../pages/loginuser/loginuser';
import { AdPage } from '../pages/ad/ad';
import { AdAdvancePage } from '../pages/ad/adAdvance';
import { AdBasicPage } from '../pages/ad/adBasic';
import { AdPromoPage } from '../pages/ad/adPromo';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Iniciar sesión', component: LoginUserPage },
      { title: 'Registrarme', component: SignupPage },
      { title: 'Tiendas', component: StoresPage },
      { title: 'Perfil', component: ProfilePage },
      { title: 'Compartir', component: SharePage },
      { title: 'Inicio', component: HomePage },
      { title: 'Anuncio', component: AdPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
