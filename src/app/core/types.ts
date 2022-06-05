export interface Question {
    id: number;
    question: string;
    answers: Answer[];
    selectedAnswer?: Answer;
}

export interface Answer {
    id: number;
    description: string;
    weight: number;
}
