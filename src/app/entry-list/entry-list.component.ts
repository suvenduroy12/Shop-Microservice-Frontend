import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from '../entry';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Entry[]=[]; //need this [] ??? 
  constructor(private entryService: EntryService, 
             private router: Router) { }

  ngOnInit(): void {
   /* this.entries=[{
      "id":1,
      "name": "Suvendu",
      "product": "ice cream",
      "price": 20
    }];*/

    this.getEntries();

}

private getEntries(){
  this.entryService.getEntryList().subscribe(data => {
    this.entries=data;
  });
}

updateEntry(id: number){
  this.router.navigate(['UpdateEntry',id])
}

deleteEntry(id: number){
  this.entryService.deleteEntry(id).subscribe(data=>{
    console.log(data);
    this.getEntries();
  })
}

opensweetalert(){
  
}
}
