import data from '~/server/data/PLACEHOLDER_DATA.json';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    if (body?.id && body?.name && body?.visitedOn && body?.image) {
        if (data.lastVisitedExercises.length >= 5) {
            data.lastVisitedExercises.shift();
        }

        data.lastVisitedExercises.push(body);
        return body;
    }

    return data.lastVisitedExercises;
});