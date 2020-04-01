import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';

import {HttpClientModule} from '@angular/common/http';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ResultsComponent } from './components/results/results.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { SortPipe } from './pipes/sort.pipe';
import { ChangeDatePipe } from './pipes/change-date.pipe';
import { getSpanishPaginatorIntl } from './esp-paginator-intl';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    ResultsComponent,
    PaginatePipe,
    ModalComponent,
    SortPipe,
    ChangeDatePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
  entryComponents:[ModalComponent],
  providers: [
    { provide: MatPaginatorIntl, useValue: getSpanishPaginatorIntl() }],
  bootstrap: [AppComponent]
})
export class AppModule { }
