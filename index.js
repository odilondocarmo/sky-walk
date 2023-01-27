const express = require('express')
const app = express()
const port = 3000 | process.env.PORT;

app.use(express.static(`${__dirname}/public`));

app.listen(port, () => {
  console.log(`Servidor web em execução: http://localhost:${port}`)
})