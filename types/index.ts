declare global {
    interface Workout {
        id: number;
        name: string;
        image: string;
        exercises: []
    }

    interface Exercise {
        id: number;
        name: string;
        image: string;
        description: string;
    }
}

export {}