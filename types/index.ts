declare global {

    interface ActiveWorkout {
        id: number;
        name: string;
        isActive: boolean;
        sessions: {
            session_01: { name: string; exercises: Exercise[] },
            session_02: { name: string; exercises: Exercise[] },
            session_03: { name: string; exercises: Exercise[] },
            session_04: { name: string; exercises: Exercise[] },
            session_05: { name: string; exercises: Exercise[] },
            session_06: { name: string; exercises: Exercise[] },
            session_07: { name: string; exercises: Exercise[] }
        }
    }

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