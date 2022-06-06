import {Question} from '../core/types';

export const questionsData: Question[] = [
    {
        id: 1,
        question: 'You’re really busy at work and a colleague is telling you their life story and personal woes. You:',
        answers: [
            {
                id: 1,
                description: 'Don’t dare to interrupt them',
                weight: 1
            },
            {
                id: 2,
                description: 'Interrupt and explain that you are really busy at the moment',
                weight: 2
            }
        ]
    },
    {
        id: 2,
        question: 'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
        answers: [
            {
                id: 1,
                description: 'Bubble with inner anger, but keep quiet',
                weight: 1
            },
            {
                id: 2,
                description: 'Complain in a loud voice, while tapping your foot impatiently',
                weight: 2
            }
        ]
    },
    {
        id: 3,
        question: 'You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:',
        answers: [
            {
                id: 1,
                description: 'Don’t dare contradict them',
                weight: 1
            },
            {
                id: 2,
                description: 'Defend your own point of view, tooth and nail',
                weight: 2
            }
        ]
    },
    {
        id: 4,
        question: 'You are taking part in a guided tour of a museum. You:',
        answers: [
            {
                id: 1,
                description: 'Follow the group without question',
                weight: 1
            },
            {
                id: 2,
                description: 'Are right up the front, adding your own comments in a loud voice',
                weight: 2
            }
        ]
    },
    {
        id: 5,
        question: 'During dinner parties at your home, you have a hard time with people who:',
        answers: [
            {
                id: 1,
                description: 'Ask you to tell a story in front of everyone else',
                weight: 1
            },
            {
                id: 2,
                description: 'Always drag the conversation back to themselves',
                weight: 2
            }
        ]
    }
];
