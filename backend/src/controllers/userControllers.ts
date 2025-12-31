import { Request, Response } from "express"

let user = {

}
export const createUser = (req: Request, res: Response): any => {
    const {id, name} = req.body

    if(!id || !name) {
        return res.status(404).json({message: 'Id and Name are Required'})
    }

    return res.status(200).json({message: 'Record Added Successfully', user: {id, name}})

}