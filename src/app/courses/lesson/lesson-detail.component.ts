import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { LessonDetail } from "../model/lesson-detail";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'lesson',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {

  lesson$: Observable<LessonDetail>;

  constructor(
    private router: Router,
    private route: ActivatedRoute) {

    console.log("Created LessonDetailComponent...");

  }

  ngOnInit() {
    this.lesson$ = this.route.data.pipe(
      map(data => data.lesson)
    );
  }

  next(lesson: LessonDetail) {
    let currentIndex = +lesson.seqNo;
    this.router.navigate(['lessons', ++currentIndex], { relativeTo: this.route.parent });
  }

  prev(lesson: LessonDetail) {
    let currentIndex = +lesson.seqNo;
    this.router.navigate(['..', --currentIndex], { relativeTo: this.route });
  }
}
