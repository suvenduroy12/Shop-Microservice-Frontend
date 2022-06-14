import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import { FormsModule } from '@angular/forms';
import { UpdateEntryComponent } from './update-entry/update-entry.component';

export class AppGlobalErrorhandler implements ErrorHandler {
  
  handleError(error: any) {
      throw Error(error);
    }

}

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    CreateEntryComponent,
    
    UpdateEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: ErrorHandler, useClass: AppGlobalErrorhandler}],
  bootstrap: [AppComponent]
})

export class AppModule { }
