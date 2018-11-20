import { Component, OnInit } from '@angular/core';
import { flatten } from '@angular/core/src/render3/util';


@Component({
  selector: 'app-emplyees',
  templateUrl: './emplyees.component.html',
  styleUrls: ['./emplyees.component.css']
})
export class EmplyeesComponent  {

  // Interpolation from component to view template

  firstName: string = "Sanjeet";
  lastName: string = "Kumar";
  gender:string = "male";
  age:number = 24;

  //Interpolation from view template to component

  address: string = null;

  //  Interpolation  from component to view template and  from view template to component

  imagePath:string = "http://www.pragimtech.com/Images/Logo.JPG";
  
  fullName():string{
      return this.firstName + ' ' + this.lastName;
  };

// to non string data binding , we must use property binding

isDisable:boolean = false;

// attribute binding
colSpan:number = 2;

//class binding

// when we want to bind more than one class

   classesToapply :string ='btn1Italic , btn1changeColor'; //previous color removed

   //when we want to bind a single class

   isApplyColorClass:boolean = true;

   // adding class using Ng Directives
   btn1Italic:boolean = true;
   btn1changeColor:boolean = true;

   addClass(){
             let classes = {
             boldClass : this.btn1Italic,
             changeColor : this.btn1changeColor,
            };
          return classes
    };

    // adding single line style binding 
    isBold:boolean = true;

      // adding multiline style binding same as   
      isItalic:boolean = true;
      fontSize:number = 30;

      addStyle(){
        let styles = {
          'font-size.px':this.fontSize,
          'font-style': this.isItalic ? 'italic' : 'normal',
          'font-weight': this.isBold ? 'bold' : 'normal',
        }
        return styles;
      }
}
