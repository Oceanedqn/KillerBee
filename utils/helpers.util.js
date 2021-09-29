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


function cleanParamWithRegex(parameters) {
    const word_search = ['name', 'description', 'id', 'weight', 'price'];
    sentence.includes(word)
    for (const param in parameters) {
        word_search.forEach(word => {
            if (param.includes(word)) {
                switch (param) {
                    case 'name':
                        // TODO: faire un truc pour remettre le param propre dans le tableau
                        break;
                    case 'description':
                        break;
                    case 'id':
                        break;
                    case 'weight':
                    case 'price:':
                        break;

                };
            };

        });

    };
    return parameters // return tous les parametres propre



}
// if (name == null) {
//     return res.status(422).json({ message: 'le champs "name" n est pas spécifié' });
// }

module.exports = { getIdParam, checkErrorDB, setupParams };