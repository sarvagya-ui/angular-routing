import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-static-data-passing',
  templateUrl: './static-data-passing.component.html',
  styleUrls: ['./static-data-passing.component.scss']
})
export class StaticDataPassingComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(res=>{
      console.log(res);
    })
  }

}
