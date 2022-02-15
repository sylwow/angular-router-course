import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { LoadingService } from "../../shared/loading/loading.service";
import { Course } from "../model/course";
import { CoursesService } from "../services/courses.service";

@Injectable()
export class CourseResolver implements Resolve<Course>
{
  constructor(
    private coursesService: CoursesService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Course | Observable<Course> | Promise<Course> {
    return this.coursesService.loadCourseByUrl(route.params['course']);
  }
}
