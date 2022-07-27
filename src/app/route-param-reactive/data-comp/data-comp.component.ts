import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-comp',
  templateUrl: './data-comp.component.html',
  styleUrls: ['./data-comp.component.scss']
})
export class DataCompComponent implements OnInit {
  id!:number;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res=>{
      this.id = res['id'];
    })
  }

}
