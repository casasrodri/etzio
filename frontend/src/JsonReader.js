export default async function getResponse(json) {
        return fetch(`/responses/${json}.json`)
            .then((response) => response.json())
            .then((json) => json);
};
