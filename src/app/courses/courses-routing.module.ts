import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { AuthGuard } from '../guards/auth.guard';
import { ConfirmExitGuard } from '../guards/confirm-exit.guard';
import { HomeComponent } from './home/home.component';
import { LessonDetailComponent } from './lesson/lesson-detail.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { CourseResolver } from '../resolvers/course.resolver';
import { LessonResolver } from '../resolvers/lesson.resolver';
import { LessonsResolver } from '../resolvers/lessons.resolver';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':course',
    resolve: { course: CourseResolver },
    component: CourseComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canDeactivate: [ConfirmExitGuard],
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
    AuthGuard,
    ConfirmExitGuard,
  ]
})
export class CoursesRoutingModule {



}
