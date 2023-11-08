import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {

  isMobile: boolean = false;
  showSidebar: boolean = false;
  
  ngOnInit(): void {
      this.checkIfMobile();
      window.onresize = () => this.checkIfMobile();
  }
  
  checkIfMobile(): void {
      this.isMobile = window.innerWidth < 769;
  }
  
}
