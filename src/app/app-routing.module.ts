import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { UpdateEntryComponent } from './update-entry/update-entry.component';

const routes: Routes = [
  {path: 'Entries', component: EntryListComponent },
  {path: 'Create-Entries', component: CreateEntryComponent },
  {path: '', redirectTo: 'Entries', pathMatch: 'full'}, // If I type Localhost:<portnumber> It will redirect to localhost:<port>/Entries
  {path: 'UpdateEntry/:id', component: UpdateEntryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
