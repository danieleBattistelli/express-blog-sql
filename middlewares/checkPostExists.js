const posts = require("../data/posts")

const checkPostExist = (req, res, next) => {
    /**
  * 1. Prendo id da req, lo trasformo in un numero
  * 2. Cerco nell'array l'oggetto con id corrispondente
  * 3. Se l'oggetto è trovato
  *      next
  *    Altrimenti
  *      mando la risposta con errore 404
  */
    console.log("blog exists middleware");
    const postId = parseInt(req.params.id);
    post = posts.find(p => p.id === postId);
    //con find se non trovato abbiamo undefinied = state FALSE
    if (post !== undefined) {
        next();
    } else {
        res.statusCode = 404;
        res.json({
            error: true,
            message: "post non trovato"
        });
    }
}

module.exports = checkPostExist;