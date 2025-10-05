// in-memory user database
let users = []

//get all users
function getAll(){
    return users
}

//add a new user
function add(user){
    users.push(user)
}
// users -> array of user objects
//user -> parameter to be added

//find user by id
function getById(id){
    return users.find((u) => u.id === id)
}
//find -> method that returns the first element in the array that satisfies the provided function

//update user by id
function update(id, updateUser){
    const index = users.findIndex((u) => u.id === id)
    if(index !== -1) {
        users[index] = updateUser
    }
}
//this function works by finding the index of the user with the specified id using findIndex method. If a user with the given id is found (index is not -1), it updates the user at that index with the new user data provided in updateUser parameter.

//findIndex -> method that returns the index of the first element in the array that satisfies the provided function. If no elements satisfy the function, it returns -1.

//delete user by id
function remove(id){
    users = users.filter((u) => u.id !== id)
}
//remove function works by using the filter method to create a new array that excludes the user with the specified id. The original users array is then replaced with this new array, effectively removing the user with the given id.

//exporting the functions to be used in other files
exports.getAll = getAll
exports.add  = add
exports.getById = getById
exports.update = update
exports.remove = remove