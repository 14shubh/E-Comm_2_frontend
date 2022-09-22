import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})


export class CategoryComponent implements OnInit {
category:Category = new Category("","");
  constructor() { }
  file:any ;
  public AddCategory(){
    console.log(this.category.categoryName);
    console.log(this.category.categoryImage);
  }

  public select(event:any){
    // console.log(event);
    if(event.target.files.length > 0){
      this.file = event.target.files[0];
      this.category.categoryImage = this.file;
    }

    console.log(this.file.name);
  }
  ngOnInit(): void {
  }

}
