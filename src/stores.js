import {writable} from 'svelte/store'

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis itaque mollitia reiciendis ex omnis sed veniam dolore voluptatem enim iure?'
    },
    {
        id: 2,
        rating: 9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis itaque mollitia reiciendis ex omnis sed veniam dolore voluptatem enim iure?'
    },
    {
        id: 3,
        rating: 7,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis itaque mollitia reiciendis ex omnis sed veniam dolore voluptatem enim iure?'
    },
])