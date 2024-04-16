const express = require('express');

const app = express();
const PORT = 3002;

app.get('/', (request, response) => {
response.status(200).json({
message: 'Hello Docker! V2',
});
});

app.listen(PORT, () => {
console.log(`Server is up on localhost:${PORT}`);
});
