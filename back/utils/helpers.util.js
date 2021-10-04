// Get ID on url
function getIdParam(req) {
    const id = req.params.id;
    console.log(id)
    if (/^\d+$/.test(id)) {
        return Number.parseInt(id, 10);
    }
    throw new TypeError(`Invalid ':id' param: "${id}"`);
}

// Check if error in db response
function checkErrorDB(response) {
    return hasError = response[0][0][''] != undefined
}

// Setup params of queries
async function setupParams(parameters) {
    if (typeof parameters === '') {
        console.log(parameters)
        return '';
    }

    let type = '';
    let string_params = '';
    let currentCount = 0;
    for (const element in parameters) {
        currentCount = currentCount + 1;
        type = typeof (parameters[element]);
        //parameters = cleanParamWithRegex(parameters);
        console.log(type)
        if (type === 'string') {
            type = `\'${parameters[element]}\'`
        } else if (type === 'number') {
            type = `${parameters[element]}`
        }
        string_params += `@${element}=${type}`
        if (currentCount != Object.keys(parameters).length) {
            string_params += ', '
        }
    }
    return string_params
}






module.exports = { getIdParam, checkErrorDB, setupParams };