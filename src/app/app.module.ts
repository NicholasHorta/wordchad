import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Services
import {TextCountService} from './services/text-count/text-count.service';
import { TextLogService } from './services/text-log/text-log.service';


// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ActiveTextboxComponent } from './active-textbox/active-textbox.component';
import { TextLogsComponent } from './text-logs/text-logs.component';
import { SelectOptionsComponent } from './active-textbox/select-options/select-options.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ActiveTextboxComponent,
    TextLogsComponent,
    SelectOptionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TextCountService, TextLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
