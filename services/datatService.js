const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./services/data.json'))

function getList() {

    return data
}

function getById(id) {


    const product = data.find(p => p.id == id)

    return product


}

function create(name, lastName, age, city, country) {
    const d = new Date


    const id = 'asdf' + '-' + d.valueOf()
    data.push({
        id,
        name,
        lastName,
        age,
        city,
        country
    })
    fs.writeFile('./services/data.json', JSON.stringify(data, null, 2), () => { })
}



module.exports = {
    getById,
    getList,
    create
}