export default async function getNodeResponse(json) {
    return fetch(`/responses/${json}.json`)
        .then((res) => res.json())
        .then((d) => d.root);
}
