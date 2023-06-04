import data from '~/server/data/PLACEHOLDER_DATA.json';

export default defineEventHandler(() => {
    return data.workout?.reduce((total, currentWorkout) =>
        total + (currentWorkout.exercises?.length || 0), 0);
});