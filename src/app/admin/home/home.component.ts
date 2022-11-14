import { Component, OnInit } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
