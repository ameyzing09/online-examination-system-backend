import { Op } from 'sequelize'
import classModel from '../model/class'

let classMethod = {
    getAllClass: async() => {
        try{
            return await classModel.findAll()
        } catch(err) {
            console.log("classMethod.js || getAllClass : ", err)
        }
    },
    getClassIdMethod: async(std, div) => {
        try{
            return await classModel.findOne({
                where: {
                [Op.and] : [
                        { 
                            class_std: std,
                            class_div: div
                        }
                    ]
                }
            })
        } catch(err) {
            console.log("classMethod.js || error ", err)
         }
    }
}

export default classMethod