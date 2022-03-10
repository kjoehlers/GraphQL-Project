const express = require('express');
const PORT = 3500;

const app = express();

app.use('/graphql', (req, res) => {
  res.send('Welsome to our Authors App');
});

app.listen(PORT, ()=>{
  console.log('Server running on port: ', PORT);
})