import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigate-from-ts-file',
  templateUrl: './navigate-from-ts-file.component.html',
  styleUrls: ['./navigate-from-ts-file.component.scss']
})
export class NavigateFromTsFileComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  onClickFromNavigate(){
    this.router.navigate(['/categories']);
  }

  onClickFromNavigateFromUrl(){
    this.router.navigateByUrl('/categories')
  }
}
