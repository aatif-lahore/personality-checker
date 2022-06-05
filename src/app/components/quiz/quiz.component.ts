import { Component, OnInit } from '@angular/core';
import {QuizService} from '../../services/quiz.service';
import {Question} from '../../core/types';
import {Observable, take} from 'rxjs';
import {Form, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  currentQuestion: Question;
  formGroup: FormGroup;

  constructor(protected service: QuizService) {
  }

  ngOnInit(): void {
    this.service.getQuestion()
        .pipe(take(1))
        .subscribe(ques => {
          this.currentQuestion = ques;
        });
    this.formGroup = new FormGroup<any>({
      id: new FormControl
    });
  }

  next() {
    if (this.formGroup.valid) {
      this.service.processAnswer(this.currentQuestion, this.formGroup.value);

      this.service.getQuestion(this.currentQuestion.id)
          .pipe(take(1))
          .subscribe(ques => {
            this.currentQuestion = ques;
          });
    }
  }
}
