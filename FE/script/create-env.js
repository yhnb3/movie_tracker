const fs = require('fs');

const path = `./.env`;
const vars = `REACT_APP_API_CODE=${process.env.REACT_APP_API_CODE}`;
fs.writeFileSync(path, vars);
