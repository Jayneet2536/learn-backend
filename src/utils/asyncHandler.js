// const asyncHandler = (fn) => async(req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status( error.code || 500).json({
//             status: false,
//             message: error.message
//         })
//     }
// }

const asyncHandler = (requestHandler) => {
    return (req, res, next)=> {
        Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error));
    }
}

export {asyncHandler}