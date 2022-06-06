import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Question} from '../core/types';
import {questionsData} from '../data/questions';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private questions: Question[];
  private userAnswers: Question[] = [];
  private weightThreshold = 3;
  private INTROVERT = 'You\'re an introvert';
  private EXTROVERT = 'You\'re an extrovert';

  constructor() {
    this.questions  = questionsData;
  }

  getAllQuestions(): Question[] {
    return this.questions;
  }

  getCurrentAnswers(): Question[] {
    return this.userAnswers;
  }

  getTotalQuestionCount(): number {
    return this.questions.length;
  }

  getQuestion(currentId?: number): Observable<Question | null> {
    let question = null;

    if (currentId) {
      currentId = currentId + 1;
      question = this.questions.filter((q => q.id === currentId))[0];
    } else {
      question = this.questions[0];
    }

    if (question != null) {
      question.selectedAnswer = question.answers[0];
    }

    return of(question);
  }

  processAnswer(question: Question, answerId: number): void {
    question.selectedAnswer = question.answers.find((a => a.id === answerId));
    this.userAnswers.push(question);
  }

  processResult(): string {
    let weight = 0;

    this.userAnswers.map(question => {
      // @ts-ignore
      weight = weight + question.selectedAnswer?.weight;
    });
    this.userAnswers = [];

    if (weight > this.weightThreshold) {
      return this.EXTROVERT;
    }
    return this.INTROVERT;
  }
}
