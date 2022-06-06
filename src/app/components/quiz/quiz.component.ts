import { Component, OnInit } from '@angular/core';
import {QuizService} from '../../services/quiz.service';
import {Question} from '../../core/types';
import {Observable, take} from 'rxjs';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  currentQuestion: Question;
  formGroup: FormGroup;
  showResults: boolean = false;
  result: string;
  totalQuestionsCount: number;

  constructor(protected service: QuizService) {
  }

  ngOnInit(): void {
      this.formGroup = new FormGroup<any>({
          id: new FormControl('', [Validators.required])
      });
    this.service.getQuestion()
        .pipe(take(1))
        .subscribe(ques => {
          this.currentQuestion = ques;
          this.formGroup.patchValue(this.currentQuestion);
        });
    this.totalQuestionsCount = this.service.getTotalQuestionCount();
  }

  next() {
    if (this.formGroup.valid) {
      this.service.processAnswer(this.currentQuestion, this.formGroup.value.id);

      this.service.getQuestion(this.currentQuestion.id)
          .pipe(take(1))
          .subscribe(ques => {
              this.currentQuestion = ques;
              this.showResults = ques == null;
              if (this.showResults) {
                 this.result = this.service.processResult();
              }
          });
    }
  }
}
