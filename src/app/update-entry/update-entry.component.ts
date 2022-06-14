import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entry } from '../entry';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-update-entry',
  templateUrl: './update-entry.component.html',
  styleUrls: ['./update-entry.component.css']
})
export class UpdateEntryComponent implements OnInit {
  id: number=0;
  entry: Entry=new Entry();
 // entries: Entry[]=[];

  constructor(private entryService: EntryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
   
    this.id= this.route.snapshot.params['id'];

    this.entryService.getEntryById(this.id).subscribe(data=>
     // {this.entries =data;},
     {this.entry =data;},
      error=> console.log(error));
  }


  onSubmit(){
   // console.log(this.entry);
    this.entryService.updateEntry(this.id, this.entry).subscribe(data=>
      {console.log(data);
        this.goToEntryList();},
      error=> console.log(error));
  };
  
  goToEntryList(){
    this.router.navigate(['/Entries']);
  }


}
