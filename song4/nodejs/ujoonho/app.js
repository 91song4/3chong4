const app = require('express')();

app.use(require('cors')());
app.use(require('express').json());



app.listen(3100, () => {
  console.log('http://127.0.0.1:3100');
})