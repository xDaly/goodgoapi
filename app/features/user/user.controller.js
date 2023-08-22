const { CreateToken } = require('../../helpers/jwt.helper')
const resHandler = require('../../helpers/responseHandler.helper')
const { ROLES } = require('../../helpers/variables.constants')
const { createUser, createProfil, checkUser, getProfil } = require('./user.service')



exports.signin = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await checkUser(username, password)
        const token = await CreateToken(user.id)
        const profil = await getProfil(user.id)
        const userData = {
            userData: {
                ...user,
                ...profil,
            },
            token: token
        }
        resHandler.setSuccess(200, 'connecte avec success', userData)
        return resHandler.send(res);


    } catch (error) {
        resHandler.setError(400, error)
        return resHandler.send(res);
    }
}

exports.createShop = async (req, res) => {
    try {
        const newUser = await createUser({
            username: req.body.username,
            password: req.body.password,
            role: ROLES.GROSSISTE,
            activated: true
        })
        const newProfil = await createProfil({
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            shop_name: req.body.shop_name,
            logo: req.body.logo,
            couverture: req.body.couverture,
            UserId: newUser.id
        })
        resHandler.setSuccess(200, 'grossiste crée avec success', { ...newUser, ...newProfil.get() })
        return resHandler.send(res);
    } catch (error) {
        resHandler.setError(400, error)
        return resHandler.send(res);
    }
}