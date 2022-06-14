import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from '../entry';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.css']
})
export class CreateEntryComponent implements OnInit {

  entry: Entry=new Entry();
  errors = null;
  constructor(private entryService: EntryService,
    private router: Router) { }

  ngOnInit(): void {
  }

  
  
  saveEntry(){
    
     
    this.entryService.createEntry(this.entry).subscribe( data =>
      {console.log(data);
      this.goToEntryList();},
     
      err => {
          this.errors = err;
          console.log("Enter valid Name"+this.errors);
        })
      
  }

  goToEntryList(){
    this.router.navigate(['/Entries']);
  }


  onSubmit(){
    this.saveEntry();
  }
  }

