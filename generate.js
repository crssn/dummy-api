const fs = require('fs')

const writeJSON = (name, json) => {
    fs.writeFile(name, json, (err) => {
        if (err) throw err;
        console.log('JSON generated!');
    });
}

const generateRandomString = count => 
    { return [...Array(count)].map(_ => ((Math.random() * 36) | 0).toString(36)).join('') }

const genDeployment = () => ({
    deploymentId: generateRandomString(32),
    resource: generateRandomString(10),
    file: generateRandomString(200000)
})

const generateDeps = count => Array(count).fill(0).map(() => genDeployment())

const generateJSON = count => {
    const deployments = generateDeps(count)
    const json = JSON.stringify({ deployments }, null, 2)
    writeJSON('db.json', json);    
}

generateJSON(1);
