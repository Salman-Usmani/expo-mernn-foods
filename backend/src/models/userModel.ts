import { Document, Schema } from "mongoose";

export interface IUser extends Document {
    name: string
    email: string
    setPassword: (password: string) => void
    validatePassword: (password: string) => boolean
}

const userSchema: Schema = new Schema ({
    name:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    passwordHash:{type: String, required: true},
    passwordSalt:{type: String, required: true},
})

userSchema.methods.setPassword = function (password: string) {
    this.passwordSalt = crypto
}