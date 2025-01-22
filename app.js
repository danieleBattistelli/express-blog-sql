const express = require("express");
const app = express();
const port = 3000;
const postsRouters = require("./routers/posts");
const handleError = require("./middlewares/handleError");
const bodyParser = require('body-parser');
const corsMiddleware = require("cors");

// Diamo il permesso a questo indirizzo di richiedere i dati
app.use(corsMiddleware({
    origin: 'http://127.0.0.1:5500'
  }));

// aggiungo il body parser in formato json per poter leggere il body della richiesta quando arriva alle rotte post, put e patch
app.use(express.json());

app.use("/posts", express.static('public'));
app.use(express.json());
app.use("/posts", postsRouters);

app.use(handleError);

app.listen(port, () => {
    console.log(`server in esecuzione su http://localhost:${port}/posts`);
});
