const shell = require('shelljs');

async function initGaiaNode(modelConfigUrl) {
  try {
    // Step 1: Install Gaia node
    console.log('Installing Gaia node...');
    shell.exec(`curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/install.sh' | bash`);

    // Step 2: Source the shell configuration to make `gaianet` available
    console.log('Sourcing shell configuration...');
    const shellConfigFile = process.env.SHELL.includes('zsh') ? '~/.zshrc' : '~/.bashrc';
    shell.exec(`source ${shellConfigFile}`);

    // Step 3: Initialize the Gaia node with the custom configuration URL
    console.log('Initializing Gaia node with the specified model...');
    const initCommand = `gaianet init --config ${modelConfigUrl}`;
    const initResult = shell.exec(initCommand);

    if (initResult.code !== 0) {
      throw new Error(`Failed to initialize Gaia node: ${initResult.stderr}`);
    }

    // Step 4: Start the node
    console.log('Starting Gaia node...');
    const startResult = shell.exec('gaianet start');

    if (startResult.code !== 0) {
      throw new Error(`Failed to start Gaia node: ${startResult.stderr}`);
    }

    console.log('Gaia node is now running!');
  } catch (error) {
    console.error('Error setting up Gaia node:', error);
  }
}

module.exports = { initGaiaNode };