import { TestBed } from '@angular/core/testing';

import { QuizService } from './quiz.service';
import {questionsData} from '../data/questions';
import {take} from 'rxjs';

describe('QuizService', () => {
  let service: QuizService;
  const data = questionsData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have loaded questions', () => {
    expect(service.getAllQuestions().length).toBeGreaterThan(0);
  });

  it('should return value for total questions', () => {
    expect(service.getTotalQuestionCount()).toBeDefined();
    expect(service.getTotalQuestionCount()).toBeInstanceOf(Number);
  });

  it('should return first question', () => {
    expect(service.getQuestion()).toBeDefined();
  });

  it('should return next question', () => {
    service.getQuestion(1)
        .pipe(take(1))
        .subscribe(q => {
          expect(q).toBeDefined();
        });
  });

  it('should not return next question', () => {
    service.getQuestion(data.length + 1)
        .pipe(take(1))
        .subscribe(q => {
          expect(q).toBeFalsy();
        });
  });

  it('should have a default selected answer', () => {
    service.getQuestion(1)
        .pipe(take(1))
        .subscribe(q => {
          expect(q.selectedAnswer).toBeTruthy();
          expect(q.selectedAnswer).toBeDefined();
        });
  });

  it('should process and save answer', () => {
    let currentAnswers = service.getCurrentAnswers();
    expect(currentAnswers.length).toBe(0);
    service.processAnswer(data[0] , 1);
    currentAnswers = service.getCurrentAnswers();
    expect(currentAnswers.length).toBe(1);
  });

  it('should calculate result', () => {
    service.processAnswer(data[0] , 1);
    const result = service.processResult();
    expect(result).toBeTruthy();
  });
});
