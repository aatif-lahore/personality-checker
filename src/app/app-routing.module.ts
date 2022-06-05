import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuizIntroComponent} from './components/quiz-intro/quiz-intro.component';
import {LandingComponent} from './components/landing/landing.component';
import {QuizComponent} from './components/quiz/quiz.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path : 'getting-started',
    component: QuizIntroComponent
  },
  {
    path : 'quiz',
    component: QuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
