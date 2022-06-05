import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Question} from '../core/types';
import {questionsData} from '../data/questions';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private questions: Question[] = questionsData;
  private userAnswers: Question[]  [];

  constructor() { }

  getQuestion(currentId?: number): Observable<Question> {
    let question = null;

    if (currentId) {
      currentId = currentId + 1;
      question = this.questions.filter((q=> q.id === currentId))[0]
    } else {
      question = this.questions[0];
    }

    question.selectedAnswer = question.answers[0];
    return of(question);
  }

  processAnswer(question: Question, answerId: number): void {

  }

  processResult(): void {

  }
}
