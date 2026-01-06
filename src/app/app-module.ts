import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { Home } from './ui/home/home';
import { Contact } from './ui/contact/contact';
import { Login } from './ui/login/login';

import { Navbar } from './component/navbar/navbar';
import { Footer } from './component/footer/footer';
import { WhyChosse } from './component/why-chosse/why-chosse';
import { AvisClient } from './component/avis-client/avis-client';

import { MainLayout } from './layouts/main-layout/main-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { AuthDashbord } from './layouts/auth-dashbord/auth-dashbord';

import { Sidebar } from './dashbord/components/sidebar/sidebar';
import { Navbardashbord } from './dashbord/components/navbardashbord/navbardashbord';
import { Index } from './dashbord/ui/index/index';

import { ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

import {
  WalletMinimal,
  BanknoteArrowUp,
  UserCheck,
  Lock,
  Clock9,
  FunnelPlus,
  CreditCard,
  TrendingDown,
  TrendingUp,
  Send,
  Eclipse,
  Phone,
  ChevronRight,
  Handshake,
  HandCoins,
  DollarSign,
  Workflow,
  Briefcase,
  Users,
  FileUser,
  MessagesSquare,
  Building2,
  User,
  Settings,
  LogOut,
  BotMessageSquare,
  MessageCircleMore,
  Bell,
  RefreshCw,
  ChevronDown,
  EllipsisVertical,
  House,
  Form
} from 'lucide-angular';

@NgModule({
  declarations: [
    App,
    Home,
    Navbar,
    MainLayout,
    WhyChosse,
    AvisClient,
    Footer,
    Contact,
    Login,
    AuthLayout,
    Sidebar,
    Navbardashbord,
    Index,
    AuthDashbord
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LucideAngularModule.pick({
      WalletMinimal,
      BanknoteArrowUp,
      UserCheck,
      Lock,
      TrendingUp,
      Clock9,
      TrendingDown,
      CreditCard,
      FunnelPlus,
      Send,
      Eclipse,
      Workflow,
      Phone,
      Briefcase,
      Handshake,
      DollarSign,
      HandCoins,
      ChevronRight,
      Users,
      FileUser,
      MessagesSquare,
      Building2,
      User,
      Settings,
      LogOut,
      BotMessageSquare,
      MessageCircleMore,
      Bell,
      RefreshCw,
      ChevronDown,
      EllipsisVertical,
      House,
      Form
    })
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule {}
