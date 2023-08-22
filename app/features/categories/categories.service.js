const { Category } = require("../../database")


exports.create = async (name) => {
    try {
        const category = await Category.create({
            name: name
        })
        return category
    } catch (error) {
        console.error(error)
        throw (error)
    }
}