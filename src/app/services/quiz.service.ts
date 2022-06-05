import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Question} from '../core/types';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getQuestion(currentId?: number): Observable<Question> {
    const ques: Question = {
      id: 1,
      question: 'How are you feeling today?',
      answers: [
        {
          description: 'I am good',
          weight: 1
        },
        {
          description: 'I am sick',
          weight: 2
        }
      ]
    }
    return of(ques);
  }

  processResult(): void {

  }
}
