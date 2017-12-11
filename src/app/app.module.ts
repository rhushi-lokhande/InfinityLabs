import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { HostComponent } from './host/host.component';
import { AddHostComponent } from './host/addhost.component';
import { ListHostComponent } from './host/list-host.component';
import { ValidatiionService } from './host/validation.service';
@NgModule({
  declarations: [
    AppComponent, HostComponent, AddHostComponent, ListHostComponent],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ValidatiionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
