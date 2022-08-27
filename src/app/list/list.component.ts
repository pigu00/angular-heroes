import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public heroes:string[]= ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public heroeDeleted:string|undefined='';
  
  constructor() { }

  ngOnInit(): void {
  }
  deleteHeroe(){
    this.heroeDeleted = this.heroes.shift()||"";
  } 

  
}
