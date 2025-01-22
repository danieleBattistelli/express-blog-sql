const handleError = (err, req, res, net) =>{
    
    console.log("gestione degli errori interni al server")
    res.statusCode = 500
    res.json({
        error: true,
        message:"errore interno del server"
    });
}

module.exports = handleError;