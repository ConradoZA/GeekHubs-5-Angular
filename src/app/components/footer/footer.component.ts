import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  onClickRollUp(){
    let scrollToTop = window.setInterval(() => {
      let positionY = window.pageYOffset;
      if (positionY > 0) {
          window.scrollTo(0, positionY - 70);
      } else {
          window.clearInterval(scrollToTop);
      }
  }, 5);
}

  ngOnInit(): void {
  }

}
