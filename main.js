app.get('/webhook/', function (req, res) {
  if (req.query['hub.verify_token'] === 'LUKzfBrS') {
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong validation token');
})
