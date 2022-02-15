import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { resolve } from 'dns';
import { CourseComponent } from './course/course.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { HomeComponent } from './home/home.component';
import { CourseResolver } from './resolvers/course.resolver';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':course',
    resolve: { course: CourseResolver },
    component: CourseComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    CourseResolver
  ]
})
export class CoursesRoutingModule {



}
