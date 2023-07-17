import data from '~/server/data/PLACEHOLDER_DATA.json';

export default defineEventHandler(event => {
    const { explore, exerciseId } = getQuery(event);

    if (exerciseId) {
        return data.exercises.find(ex => ex.id === Number(exerciseId));
    } else if (explore) {
        return data.exercises
            .filter(ex =>
                ex.type.toLowerCase() === (explore as string).toLowerCase());
    } else {
        return [];
    }
});