import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-load-component',
  templateUrl: './load-component.component.html',
  styleUrls: ['./load-component.component.scss']
})
export class LoadComponentComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
    });

    this.activatedRoute.fragment.subscribe(fragment => {
      console.log(fragment);
    });

    this.activatedRoute.snapshot.queryParams['id'];
    console.log(this.activatedRoute.snapshot.queryParams['id']);

    this.activatedRoute.snapshot.fragment;
    console.log(this.activatedRoute.snapshot.fragment);

  }



}
