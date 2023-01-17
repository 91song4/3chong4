const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/', (req, res) => {
  res.render('index.ejs');
})

io.on('connection', (socket) => {
  console.log(`${socket.id} 접속`);
  socket.emit('usercount', io.engine.clientsCount);

  socket.on('message', (msg) => {
    console.log('Message received ' + msg + ' user: ' + socket.id);

    io.emit('message', {msg, user:socket.id});
  })

  socket.on('disconnect', () => {
    console.log(`${socket.id} 접속해제`);
  })

})

httpServer.listen(3000, () => {
  console.log('Listening on http://localhost:3000/');
})