import data from '~/server/data/PLACEHOLDER_DATA.json';

export default defineEventHandler((): ActiveWorkout[] => {
    return data.activeWorkouts.filter(aw => !aw.isActive);
});