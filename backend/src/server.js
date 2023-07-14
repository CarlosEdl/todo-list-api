const app = require('./app');
require('dotenv').config();

const PORT = porcess.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server runnin or port ${PORT}`));