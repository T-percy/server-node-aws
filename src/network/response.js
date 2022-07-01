// Configurando la estructura de las respuestas y exportandolas

exports.success = (req, res, user, status) => {
    res.status(status || 200).send({
        error: '',
        body: user,
    });
}

exports.error = (req, res, user, status, details) => {
    console.error('[response error] ' + details);

    res.status(status || 500).send({
        error: user,
        body: '',
    });
}