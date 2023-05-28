import data from '~/server/data/PLACEHOLDER_DATA.json';

export default defineEventHandler(event => {
    return data.workout?.length || 0;
});