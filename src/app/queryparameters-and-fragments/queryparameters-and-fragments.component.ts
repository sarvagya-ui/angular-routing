import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-queryparameters-and-fragments',
  templateUrl: './queryparameters-and-fragments.component.html',
  styleUrls: ['./queryparameters-and-fragments.component.scss']
})
export class QueryparametersAndFragmentsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onClick() {
    this.router.navigate(['/loadComponentComponent'],
      {
        queryParams: { id: '1' }
        , fragment: 'load'
      });
  }

}
