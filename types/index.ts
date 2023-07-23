declare global {

    interface ActiveWorkout {
        id: number;
        name: string;
        isActive: boolean;
        sessions: {
            session_01: Session,
            session_02: Session,
            session_03: Session,
            session_04: Session,
            session_05: Session,
            session_06: Session,
            session_07: Session
        }
    }

    interface Session {
        id?: number;
        name: string;
        exercises: Exercise[];
        isSelected?: boolean;
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