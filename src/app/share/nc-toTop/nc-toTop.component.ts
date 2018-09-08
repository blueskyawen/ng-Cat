/**
 * Created by liuxuwen on 18-5-31.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-toTop',
  templateUrl: './nc-toTop.component.html',
  styleUrls: ['./nc-toTop.component.css']
})
export class NcToTopComponent {
  timer : any = null;

  constructor() {
    window.onscroll = function () {
      var backtop = window.pageYOffset;
      if(backtop > 0){
        document.getElementById("backTop").style.display = "block";
      } else {
        document.getElementById("backTop").style.display = "none";
      }
    };
  }

  scrollWindow(){
    this.timer = setInterval(() => {
      var backtop = window.pageYOffset;
      window.scrollBy(0,-60);
      if(backtop < 1){
        clearInterval(this.timer);
      }
    },60);
  }
}
