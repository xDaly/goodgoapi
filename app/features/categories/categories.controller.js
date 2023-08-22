const categoriesService = require("./categories.service")
const resHandler = require("../../helpers/responseHandler.helper");

exports.create = async (req, res) => {
    try {
        const categorie = await categoriesService.create('hello')
        resHandler.setSuccess(201, 'Categorie crée avec success', categorie)
        return resHandler.send(res)
    } catch (error) {
        console.error(error)
        resHandler.setSuccess(500, 'Probleme lors de creation')
        return resHandler.send(res)
    }
}