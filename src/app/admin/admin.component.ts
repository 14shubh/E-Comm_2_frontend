import { Component, OnInit } from '@angular/core';
import { AddcategoryComponent } from './addcategory/addcategory.component'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  add:AddcategoryComponent = new AddcategoryComponent();
  constructor() { }

  ngOnInit(): void {
  }

}
