import data from '~/server/data/PLACEHOLDER_DATA.json';

export default defineEventHandler(() => {
    return data.workout.length || 0;
});