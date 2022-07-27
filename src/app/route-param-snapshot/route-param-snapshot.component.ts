import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-param-snapshot',
  templateUrl: './route-param-snapshot.component.html',
  styleUrls: ['./route-param-snapshot.component.scss']
})
export class RouteParamSnapshotComponent implements OnInit {

  id!:number;
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
  }

}
