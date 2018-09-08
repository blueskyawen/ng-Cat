/**
 * Created by liuxuwen on 18-5-30.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  tabItems2 : any[] = [];
  currentTab2 : string;

  constructor() {
    this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false}];
    this.currentTab2= this.tabItems2[0].label
  }
}
