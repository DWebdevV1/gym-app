import data from '~/server/data/PLACEHOLDER_DATA.json';

export default defineEventHandler((event) => {
    const queryObj = getQuery(event);

    if (queryObj?.exerciseType) {
        return data.exercises
            .filter(ex =>
                ex.type.toLowerCase() === (queryObj.exerciseType as string).toLowerCase())?.length || 0;
    }

    return data.exercises.length || 0;
});