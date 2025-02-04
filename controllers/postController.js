// const posts = require("../data/posts");
const connection = require("../data/db");

const index = (req, res) => {
    const sql = "SELECT * FROM `posts`";

    connection.query(sql, (err, posts) => {
        if (err) {
            return res.status(500).json({
                message: "Errore interno del server",
            });
        } else {
            return res.status(200).json({
                status: "success",
                data: posts,
            });
        }
    });
};

//index

// Simulazione di un errore });
//   const index = (req, res) => {
//     throw new Error('Errore forzato')
//   };

// const index = (req, res) => {
//     const tag = req.query.tag;
//     let filterPosts = posts;
//     if (tag) {
//         filterPosts = posts.filter(post => post.tags.includes(tag));
//     }

//     res.json({
//         data: filterPosts,
//         count: filterPosts.length
//     });
// };

//show
const show = (req, res) => {
    // const post = posts.find(p => p.id === parseInt(req.params.id));
    // res.status(200).send(post);
    const id = req.params.id;

    const sql = "SELECT * FROM `posts` WHERE id = ?";

    const tagsSql = `
        SELECT tags.*
        FROM tags
        JOIN post_tag
        ON post_tag.tag_id =  tags.id
        JOIN posts
        ON post_tag.post_id = posts.id
        WHERE posts.id = ?
        `;


    connection.query(sql, [id], (err, posts) => {
        if (err) {
            return res.status(500).json({
                message: "errore interno del server",
            });
        } else if (posts.length === 0) {
            return res.status(404).json({
                message: "Post non trovata",
            })
        } else {
            // Procedo con la seconda query

            connection.query(tagsSql, [id], (err, tags) => {
                if (err) {
                    return res.status(500).json({
                        message: "errore interno del server"
                    });
                }

                const postDetails = {
                    ...posts[0],
                    tags: tags,
                };

                return res.status(200).json({
                    status: "success",
                    data: postDetails,
                });
            });

        }
    });

};

//create o store
//const store = (req, res) => {
//1)controllo i dati inseriti su console log
//2)Ora devo calcolare l'id consecutivo all'ultimo elemento dell'array se array nullo id =1
//3)const id = posts[posts.length-1].id+1 => vale solo per array non nullo
//4)Costruisco il json con newPostId e body inserito dal client ( Postman)
//5)ora puscio l'oggetto nell'array posts
//6)ora mando la risposta con quell'oggetto
// console.log(req.body)
// const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
// const newItem = { id, ...req.body }
// posts.push(newItem);
// res.status(201).json(newItem);

//};

//update
// const update = (req, res) => {
//     //con find prendo l'elemento dell'array che ha lo stesso id dell'id della request
//     //serve parseInt perche' su quesry string id e' una stringa e su posts e' un numero
//     const post = posts.find(p => p.id === parseInt(req.params.id));
//     //Tramite object assign vado a copiare i valori di tutte le proprieta' 
//     //nell'oggetto target , post in questo caso 
//     Object.assign(post, req.body);
//     res.json(post);
// };

// modify
// const modify = (req, res) => {
//     const post = posts.find(p => p.id === parseInt(req.params.id));
//     Object.keys(req.body).forEach(key => {
//         post[key] = req.body[key];
//     });
//     res.json(post);

// };

// destroy
const destroy = (req, res) => {
    // const postId = parseInt(req.params.id);
    // const postIndex = posts.findIndex(p => p.id === postId);
    // posts.splice(postIndex, 1);
    // console.log("Lista aggiornata dei post", posts);
    // res.sendStatus(204);
    const id = req.params.id;

    const sql = "DELETE FROM `posts` WHERE id=?"

    connection.query(sql, [id], (err) => {
        if (err) {
            return res.status(500).json({
                message: "errore interno del server",
            });
        } else {
            return res.sendStatus(204);
        }
    });
};

module.exports = {
    index,
    show,
    // store,
    // update,
    // modify,
    destroy,
};