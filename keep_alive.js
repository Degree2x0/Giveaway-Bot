const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Retro is Alive!'));

app.listen(port, () => console.log(`Retro is listening to http://localhost:${port}`));
