import teachClassModel from '../model/teachClass'
import teachSubClassModel from '../model/teachSubClass'

let teachClassMethod = {
    fetchAll: async(option) => {
        try{
            return await teachSubClassModel.findAll({
                where : option,
                include: [ teachClassModel ]
            })
        } catch(err) {
            console.log("teachClassMethod.js || fetchAll : ", err)
        }
    },

    fetchOne: async(option) => {
        try{
            return await teachSubClassModel.findOne({
                where: option
            })
        } catch(err) {
            console.log("teachClassMethod.js || fetchOne : ", err)
        }
    },

    create: async(payload) => {
        try{
            return await teachSubClassModel.create(payload)
        } catch(err) {
            console.log("teachClassMethod.js || create : ", err)
        }
    },

    upsert: async(payload, option) => {
        try{
            return await teachSubClassModel.upsert(payload, {
                where: option
            })
        } catch(err) {
            console.log("teachClassMethod.js || upsert : ", err)
        }
    }
}

export default teachClassMethod

