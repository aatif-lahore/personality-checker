import {Question} from '../core/types';

export const questionsData: Question[] = [
    {
        id: 1,
        question: 'How are you feeling today?',
        answers: [
            {
                id: 1,
                description: 'I am intro',
                weight: 1
            },
            {
                id: 2,
                description: 'I am sick',
                weight: 2
            }
        ]
    },
    {
        id: 2,
        question: 'Whats your name?',
        answers: [
            {
                id: 1,
                description: 'I am intro',
                weight: 1
            },
            {
                id: 2,
                description: 'I am sick',
                weight: 2
            }
        ]
    },
    {
        id: 3,
        question: 'Where do you live?',
        answers: [
            {
                id: 1,
                description: 'I am intro',
                weight: 1
            },
            {
                id: 2,
                description: 'I am sick',
                weight: 2
            }
        ]
    }
]
