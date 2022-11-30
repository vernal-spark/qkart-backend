const { User } = require("../models");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const bcrypt = require("bcryptjs");

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Implement getUserById(id)
/**
 * Get User by id
 * - Fetch user object from Mongo using the "_id" field and return user object
 * @param {String} id
 * @returns {Promise<User>}
 */
const getUserById=async(id)=>{
    return User.findById(id)
}
// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Implement getUserByEmail(email)
/**
 * Get user by email
 * - Fetch user object from Mongo using the "email" field and return user object
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail=async(email)=>{
    return User.findOne({email})
}
// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Implement createUser(user)
/**
 * Create a user
 *  - check if the user with the email already exists using `User.isEmailTaken()` method
 *  - If so throw an error using the `ApiError` class. Pass two arguments to the constructor,
 *    1. “200 OK status code using `http-status` library
 *    2. An error message, “Email already taken”
 *  - Otherwise, create and return a new User object
 *
 * @param {Object} userBody
 * @returns {Promise<User>}
 * @throws {ApiError}
 *
 * userBody example:
 * {
 *  "name": "crio-users",
 *  "email": "crio-user@gmail.com",
 *  "password": "usersPasswordHashed"
 * }
 *
 * 200 status code on duplicate email - https://stackoverflow.com/a/53144807
 */
const createUser=async(user)=>{
    if(await User.isEmailTaken(user.email)){
        throw new ApiError(httpStatus.OK,"Email Already Taken")
    }
    const result=await User.create(user)
    return result
}
// class UserService{
//     createUser=async(userBody)=>{
//         try{
//             const newUser=new User(userBody)
//             const result=await newUser.save()
//             return result
//         }catch(e){
//             throw e
//         }
//     }

//     getUserById=async(id)=>{
//         try{
//             const result=await User.findById(id)
//             return result
//         }catch(e){
//             throw e
//         }
//     }

//     getUserByEmail=async(email)=>{
//         try{
//             const result=await User.findOne({email})
//             return result;
//         }catch(e){
//             throw e
//         }
//     }
// }

module.exports={getUserById,
getUserByEmail,
createUser}

