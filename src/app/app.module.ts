import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AccordionModule } from 'primeng/accordion';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import {TooltipModule} from 'primeng/tooltip';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {FieldsetModule} from 'primeng/fieldset';
import {ChartModule} from 'primeng/chart';
import {TabMenuModule} from 'primeng/tabmenu';
import { AppComponent } from './app.component';
import { StocksComponent } from './stocks.component/stocks.component';
import { RouterModule } from '@angular/router';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ToolbarModule} from 'primeng/toolbar';
import {ContextMenuModule} from 'primeng/contextmenu';
import {PanelModule} from 'primeng/panel';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {SafePipe} from './safe_pipe.component';

@NgModule({
    declarations: [
        AppComponent, StocksComponent, SafePipe
    ],
    imports: [
        CalendarModule, DropdownModule, TooltipModule, MessagesModule, MessageModule, FieldsetModule,ChartModule,
        AccordionModule,
        RadioButtonModule,
        CheckboxModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        TabMenuModule,
        RouterModule,
        BreadcrumbModule,
        ToolbarModule,
        ContextMenuModule,
        PanelModule,
        TabViewModule,
        CardModule,
        CodeHighlighterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }