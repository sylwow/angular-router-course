import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { resolve } from 'dns';
import { CourseComponent } from './course/course.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { HomeComponent } from './home/home.component';
import { LessonDetailComponent } from './lesson/lesson-detail.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { CourseResolver } from './resolvers/course.resolver';
import { LessonResolver } from './resolvers/lesson.resolver';
import { LessonsResolver } from './resolvers/lessons.resolver';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':course',
    resolve: { course: CourseResolver },
    component: CourseComponent,
    children: [
      {
        path: 'lessons/:lessonSeqNo',
        component: LessonDetailComponent,
        resolve: { lesson: LessonResolver },
      },
      {
        path: '',
        resolve: { lessons: LessonsResolver },
        component: LessonsListComponent
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    CourseResolver,
    LessonsResolver,
    LessonResolver,
  ]
})
export class CoursesRoutingModule {



}
