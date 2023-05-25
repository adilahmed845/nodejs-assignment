const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,"file");

const create = async(val) => {

    await fs.promises.writeFile(`${dirPath}/file${val}`,`content ${val}`);

}

create(1);