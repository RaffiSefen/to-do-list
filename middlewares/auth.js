

let authMiddleware = (req, res, next) => {
    try {
        console.log("middleware fired")
        next()
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = authMiddleware