import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { TopLeftToolbarComponent } from './top-left-toolbar/top-left-toolbar.component';
import { TopRightToolbarComponent } from './top-right-toolbar/top-right-toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { SearchComponent } from './search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ChatComponent } from './chat/chat.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavService } from './side-nav.service';
import { MydialogComponent } from './mydialog/mydialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { OpenModalService } from './open-modal.service';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MessagesComponent } from './messages/messages.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { LandingComponent } from './landing/landing.component';
import { MatFabMenuModule } from '@angular-material-extensions/fab-menu';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopLeftToolbarComponent,
    TopRightToolbarComponent,
    SearchComponent,
    ChatComponent,
    MydialogComponent,
    MessagesComponent,
    SendMessageComponent,
    LandingComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatDialogModule,
    MatCardModule,
    MatCheckboxModule,
    MatFabMenuModule,
  ],
  entryComponents: [MydialogComponent],
  providers: [SideNavService, OpenModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
