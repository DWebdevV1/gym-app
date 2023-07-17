import data from '~/server/data/PLACEHOLDER_DATA.json';

export default defineEventHandler((): ActiveWorkout | undefined => {
    return data.activeWorkouts.find(aw => aw.isActive);
});