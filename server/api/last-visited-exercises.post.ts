import data from '~/server/data/PLACEHOLDER_DATA.json';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const exAlreadyExists = !!(data.lastVisitedExercises.find(ex => ex.id === body.id));

    if (!exAlreadyExists && body?.id && body?.name && body?.visitedOn && body?.image) {
        if (data.lastVisitedExercises.length >= 5) {
            data.lastVisitedExercises.shift();
        }

        data.lastVisitedExercises.push(body);
        return body;
    }

    return data.lastVisitedExercises;
});