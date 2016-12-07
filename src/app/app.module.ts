import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { HomePage } from '../pages/home/home';
import { LoginUserPage } from '../pages/loginuser/loginuser';
import { SignupPage } from '../pages/signup/signup';
import { StoresPage } from '../pages/stores/stores';
import { StorePage } from '../pages/stores/store';
import { SharePage } from '../pages/share/share';
import { ProfilePage } from '../pages/profile/profile';
import { AdPage } from '../pages/ad/ad';
import { AdAdvancePage } from '../pages/ad/adAdvance';
import { AdBasicPage } from '../pages/ad/adBasic';
import { AdPromoPage } from '../pages/ad/adPromo';

@NgModule({
  declarations: [
    MyApp,
    SignupPage,
    HomePage,
    StoresPage,
    StorePage,
    SharePage,
    LoginUserPage,
    AdPage,
    AdAdvancePage,
    AdBasicPage,
    AdPromoPage,
    ProfilePage,
    Page1,
    Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignupPage,
    HomePage,
    StoresPage,
    StorePage,
    LoginUserPage,
    SharePage,
    AdPage,
    AdAdvancePage,
    AdBasicPage,
    AdPromoPage,
    ProfilePage,
    Page1,
    Page2
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
