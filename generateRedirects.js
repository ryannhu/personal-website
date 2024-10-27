const fs = require('fs')

const redirectsContent =`/* /index.html 200`

const filePath = './dist/_redirects';

fs.writeFileSync(filePath, redirectsContent);


