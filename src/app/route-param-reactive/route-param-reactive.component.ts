import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-route-param-reactive',
  templateUrl: './route-param-reactive.component.html',
  styleUrls: ['./route-param-reactive.component.scss']
})
export class RouteParamReactiveComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['/dataCompComponent',1])
  }
}
