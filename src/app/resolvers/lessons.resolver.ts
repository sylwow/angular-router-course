import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { LessonSummary } from '../courses/model/lesson-summary';
import { CoursesService } from '../services/courses.service';

@Injectable()
export class LessonsResolver implements Resolve<LessonSummary[]> {

  constructor(private coursesService: CoursesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonSummary[]> {
    const courseUrl = route.paramMap.get('course');

    return this.coursesService.loadAllCourseLessonsSummary(courseUrl);
  }
}
