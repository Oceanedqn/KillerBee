function getIdParam(req) {
    const id = req.params.id;
    if (/^\d+$/.test(id)) {
        return Number.parseInt(id, 10);
    }
    throw new TypeError(`Invalid ':id' param: "${id}"`);
}

function checkErrorDB(response) {
    return hasError = response[0][0][''] != undefined
}

module.exports = { getIdParam, checkErrorDB };