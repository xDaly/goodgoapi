const { User, Profil } = require("../../database")

exports.createUser = async (data) => {
    try {
        const newUser = await User.create({
            username: data.username,
            password: data.password,
            role: data.role,
            activated: data.activated
        })
        return newUser.get()
    } catch (error) {
        console.error(error)
        throw error
    }

}

exports.createProfil = async (data) => {
    try {
        const newProfil = await Profil.create({
            nom: data.nom,
            prenom: data.prenom,
            email: data.email,
            phone: data.phone,
            address: data.address,
            shop_name: data.shop_name,
            // logo: data.logo,
            // couverture: data.couverture,
            UserId: data.UserId
        })
        return newProfil
    } catch (error) {
        console.error(error)
        throw error
    }
}


exports.checkUser = async (username, password) => {
    try {
        const user = await User.findOne({
            where: {
                username: username
            }
        })
        if (!user) {
            throw "utilisateur introuvable";
        }
        if (user.dataValues.password == password) {
            delete user.dataValues.password
            delete user.dataValues.createdAt;
            delete user.dataValues.updatedAt;
            return user.dataValues;
        } else {
            throw "password incorrect";
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}



exports.getProfil = async (id) => {
    try {
        const profil = await Profil.findOne({
            attributes: [["id", "profil_id"], "nom", "prenom", "email", "phone", "address", "shop_name", "logo", "couverture"],
            where: {
                UserId: id,
            },
        });
        console.log('ffezfez', profil);
        return profil.get();
    } catch (error) {
        console.error(error);
        throw error;
    }
};


