// 1. Creando las funciones que ejecutarán el comportamiento según la petición del cliente

function addMessage(user) {
    return new Promise((resolve, reject) => {
        if (!user) {
            console.error('[messageController] No hay mensaje o usuario.');
            reject('Los datos son incorrectos');
            return false;
        }

        const fullMessage = {
            user: user,
            date: new Date(),
        };
    
        console.log(fullMessage);
        resolve(fullMessage);
    });
    
}

module.exports = {  // 2. Exportando las funciones
    addMessage,
};