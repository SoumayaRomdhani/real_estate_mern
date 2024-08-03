export const errorHandler = (statusCode, message)=>{
    const error = new Error();//this is the error constructer of JS
    error.statusCode = statusCode
    error.message = message
    return error;
} 