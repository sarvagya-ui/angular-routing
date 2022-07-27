import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['/parent',1]);
  }
}
