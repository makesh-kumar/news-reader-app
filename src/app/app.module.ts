import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NewReaderComponent } from './news-reader/news-reader.component';
import { ApiService } from './Services/api.service';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    NewReaderComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    FontAwesomeModule,
    ToastrModule.forRoot(),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
