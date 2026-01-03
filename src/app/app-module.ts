import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './ui/home/home';
import { Navbar } from './component/navbar/navbar';
import { MainLayout } from './layouts/main-layout/main-layout';
import {LucideAngularModule,WalletMinimal ,BanknoteArrowUp,UserCheck ,Lock,Clock9 ,FunnelPlus ,Send,Eclipse } from 'lucide-angular';

@NgModule({
  declarations: [
    App,
    Home,
    Navbar,
    MainLayout
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ WalletMinimal ,BanknoteArrowUp,UserCheck ,Lock ,Clock9,FunnelPlus,Send,Eclipse  })

  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
