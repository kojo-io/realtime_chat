import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import {NbButtonModule, NbChatModule, NbLayoutModule, NbSidebarModule} from "@nebular/theme";
import {NbAuthModule} from "@nebular/auth";


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    NbLayoutModule,
    NbButtonModule,
    NbSidebarModule,
    NbAuthModule,
    NbChatModule
  ]
})
export class IndexModule { }
