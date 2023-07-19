import data from '~/server/data/PLACEHOLDER_DATA.json';

export default defineEventHandler((event): ActiveWorkout | ActiveWorkout[] | undefined => {
    const query = getQuery(event);

    if (query?.active) {
        return data.activeWorkouts.find(aw => aw.isActive);
    }

    if (query?.workoutId) {
        return data.activeWorkouts.find(aw => aw.id === Number(query.workoutId));
    }

    return data.activeWorkouts.filter(aw => !aw.isActive);
});