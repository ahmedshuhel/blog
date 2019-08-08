require('dotenv').config();
const { execSync } = require('child_process');
const path = require("path");

const ghpages = () => path.join('node_modules', '.bin', 'gh-pages');
const cmd = `${ghpages()} -x -r https://${process.env.GH_TOKEN}@github.com/ahmedshuhel/ahmedshuhel.github.io -d public -b master`;

// Execute the command...
execSync(cmd, { stdio: [0, 1, 2] });
