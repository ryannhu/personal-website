const fs = require('fs')

const redirectsContent =`/* /index.html 200`

const filePath = './build/_redirects';

fs.writeFileSync(filePath, redirectsContent);

