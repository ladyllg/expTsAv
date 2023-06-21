export const setLocals = (req, res, next) => {
    res.locals.logado = req.cookies['logado'];
    next();
};