import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigateFromTsFileComponent } from './navigate-from-ts-file/navigate-from-ts-file.component';
import { RouteParamSnapshotComponent } from './route-param-snapshot/route-param-snapshot.component';
import { RouteParamReactiveComponent } from './route-param-reactive/route-param-reactive.component';
import { DataCompComponent } from './route-param-reactive/data-comp/data-comp.component';
import { QueryparametersAndFragmentsComponent } from './queryparameters-and-fragments/queryparameters-and-fragments.component';
import { LoadComponentComponent } from './queryparameters-and-fragments/load-component/load-component.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { StaticDataPassingComponent } from './static-data-passing/static-data-passing.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: "navigateFromTsFileComponent", component: NavigateFromTsFileComponent },
  { path: 'routeParamSnapshotComponent/:id', component: RouteParamSnapshotComponent },
  { path: 'routeParamReactiveComponent', component: RouteParamReactiveComponent },
  { path: 'dataCompComponent/:id', component: DataCompComponent },
  { path: 'queryparametersAndFragmentsComponent', component: QueryparametersAndFragmentsComponent },
  { path: 'loadComponentComponent', component: LoadComponentComponent },
  {
    path: 'parent', component: ParentComponent, children: [
      { path: ':id', component: ChildComponent }
    ]
  },
  { path: 'staticdata', component: StaticDataPassingComponent  , data:{id:1,name:'abc'}},
  { path: '**', component: WildCardComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    CategoriesComponent,
    NavigateFromTsFileComponent,
    RouteParamSnapshotComponent,
    RouteParamReactiveComponent,
    DataCompComponent,
    QueryparametersAndFragmentsComponent,
    LoadComponentComponent,
    ParentComponent,
    ChildComponent,
    WildCardComponent,
    StaticDataPassingComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
