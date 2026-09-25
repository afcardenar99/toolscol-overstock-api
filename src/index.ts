import express from 'express';
import 'dotenv/config'; // Forma recomendada y limpia en TypeScript

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Listening on  http://${process.env.PG_HOST}:${port}`)
})