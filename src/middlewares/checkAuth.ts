const checkAuth = (req, res, next) => {
    const logado = req.cookies['logado'];
    if (!logado) res.redirect('/login');
    else next();
};