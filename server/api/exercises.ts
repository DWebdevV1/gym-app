import data from '~/server/data/PLACEHOLDER_DATA.json';

export default defineEventHandler(event => {
    const queryObj = getQuery(event);
    if (queryObj?.explore) {
        return data.workout
            .find(w =>
                w.name?.toLowerCase() === (queryObj.explore as string).toLowerCase());
    } else {
        return [];
    }
});