import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { LessonDetail } from '../courses/model/lesson-detail';
import { CoursesService } from '../services/courses.service';

@Injectable()
export class LessonResolver implements Resolve<LessonDetail> {
  constructor(private coursesServcice: CoursesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonDetail> {
    //const courseUrl = route.paramMap.get('course')
    const courseUrl = route.parent.paramMap.get('course') // with use routing option paramsInheritanceStrategy: 'always'
    const lessonSeqNo = route.paramMap.get('lessonSeqNo')

    return this.coursesServcice.loadLessonDetail(courseUrl, lessonSeqNo);
  }
}
