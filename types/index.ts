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
        type: string;
        images: [];
        videos: [];
    }

    interface LastVisitedExercise {
        id: number;
        name: string;
        image: string;
        type: string;
        visitedOn: string | Date;
    }
}

export {}