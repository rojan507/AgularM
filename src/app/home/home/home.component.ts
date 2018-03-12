import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  
  title = "Sentiment Analysis";
  selectedValue: string = "";
  isDeterminate:boolean=false;
  progressValue=10;
  @Input()  canEmailspin=false;
  @Input()  canTwitterspin=false;
  @Input()  canFileuploadspin=false;
  seconds=10;
  email:string="";
  emailconfig:string="" ;
  twitterHandle:string="";
  filename:string="";






  constructor() { }

  items = [
    { value: "0", view: "PDF" },
    { value: "1", view: "EXCEL" },
    { value: "2", view: "TEXT" }
  ];

  ngOnInit() {
    
  }

  

  submitPage($event){
    
    if(this.email!=""){
      this.canEmailspin=true;

      setTimeout(()=>{    //<<<---    using ()=> syntax
        this.canEmailspin = false;
      },3000);
    }
    alert(this.canEmailspin);
    if(this.twitterHandle!=""){
      this.canTwitterspin=true;
    }
    if(this.filename!=""){
      this.canFileuploadspin=true;
    }
  }
}
