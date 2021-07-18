import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Services
import { TextCountService } from './services/text-count/text-count.service';
import { TextLogService } from './services/text-log/text-log.service';
import { TitleCreatorService } from './services/title-creator.service'
// Directives

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ActiveTextboxComponent } from './active-textbox/active-textbox.component';
import { TextLogsComponent } from './text-logs/text-logs.component';
import { SelectOptionsComponent } from './active-textbox/select-options/select-options.component';
import { ToggleLogsViewComponent } from "./active-textbox/toggle-view/toggle-logs-view.component"

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ActiveTextboxComponent,
    TextLogsComponent,
    SelectOptionsComponent,
    ToggleLogsViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TextCountService, TextLogService, TitleCreatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
