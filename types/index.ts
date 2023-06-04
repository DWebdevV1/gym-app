declare global {
    interface Workout {
        id: number;
        name: string;
        image: string;
        exercises: Exercise[]
    }

    interface Exercise {
        id: number;
        name: string;
        image: string;
        description: string;
        images: [];
        videos: [];
    }
}

export {}