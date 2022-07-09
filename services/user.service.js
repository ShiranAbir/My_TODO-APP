import { storageService } from './storage.service.js'

const USER_KEY = 'loggedInUser'

export const userService = {
    getLoggedinUser,
    updateCount,
    addOrder,
    changeTodoStatus,
}

function getLoggedinUser(){
    const user = storageService.load(USER_KEY)
    if(user) return user

    _login()
    return storageService.load(USER_KEY)
}

function updateCount(amount){
    const user = getLoggedinUser()
    user.balance += amount
    storageService.store(USER_KEY, user)
}

function addOrder(order){
    const user = getLoggedinUser()
    user.orders.unshift(order)
    user.balance -= order.total
    storageService.store(USER_KEY, user)
}

function changeTodoStatus(todoId, status){
    const user = getLoggedinUser()

    const todo = user.todos.find(todo => todo._id === todoId)
    todo.status = status
    storageService.store(USER_KEY, user)
}

function _login(){
    storageService.store(USER_KEY, { fullName: 'Puki', balance: 20, orders: []})
}