# Gaia

`gaia` is an NPM package that simplifies the installation, initialization, and startup of a **GaiaNet node**. It allows developers to easily set up a GaiaNet node with customizable model configurations, making it an ideal tool for building AI-powered applications.

---

## Features

- **Easy Installation:** Automates the installation of the GaiaNet node with a single command.
- **Customizable Models:** Supports custom model configurations via a URL.
- **CLI and Programmable API:** Can be used as a command-line tool or integrated into Node.js/TypeScript projects.
- **Cross-Platform:** Works on Linux, macOS, and Windows (via WSL).
- **Secure:** Validates URLs and ensures secure command execution.

---

## Why Use Gaia?

Gaia is designed to help **application developers** quickly integrate Gaia nodes into their projects. 

Here’s how it can help:

1. **Simplify Node Setup:**
   - Automates the installation and configuration of GaiaNet nodes, saving developers time and effort.
   - No need to manually download and configure dependencies.

2. **Customizable AI Models:**
   - Developers can specify custom model configurations via a URL, allowing them to tailor the node to their application’s needs.

3. **Seamless Integration:**
   - Gaia can be used as a CLI tool or programmatically in Node.js/TypeScript projects, making it versatile for different use cases.

4. **Open Source and Extensible:**
   - Gaia is open source, so developers can modify and extend it to suit their requirements.

5. **Community Support:**
   - Join a growing community of developers building AI-powered applications with GaiaNet.

---

## Installation

To install the `gaia` package globally, run:

```bash
npm install -g gaia
```

## Usage

To start a Gaia node with the default model configuration, run:

```bash
gaia
```

To use a custom model configuration, provide the URL to the configuration file using the `--model` flag:

```bash
gaia --model https://raw.githubusercontent.com/GaiaNet-AI/node-configs/main/llama-3.2-3b-instruct/config.json
```

## Usage

You can also use the `initGaiaNode` function programmatically in your Node.js or TypeScript projects:

```bash
const { initGaiaNode } = require('gaia');

// URL to the model configuration JSON
const modelConfigUrl = 'https://raw.githubusercontent.com/GaiaNet-AI/node-configs/main/llama-3.2-3b-instruct/config.json';

// Initialize and start the Gaia node
initGaiaNode(modelConfigUrl)
  .then(() => {
    console.log('Gaia node setup completed successfully.');
  })
  .catch((error) => {
    console.error('Failed to set up Gaia node:', error);
  });
```

## Example Use Cases

1. AI Chatbots:
    - Use Gaia to deploy a Gaia node as the backend for an AI-powered chatbot.
2. Knowledge Bases:
    - Set up a Gaia node to serve as a knowledge base for your application.
3. AI-Powered APIs:
    - Use Gaia nodes as drop-in replacements for OpenAI APIs in your applications.
4. Research and Development:
    - Quickly spin up Gaia nodes for testing and experimentation with different AI models.

## Security Considerations

Gaia is designed with security in mind:
- **URL Validation:** Ensures that the model configuration URL points to a trusted domain.
- **Secure Command Execution:** Uses `child_process.execFile` to prevent shell injection vulnerabilities.
- **Error Handling:** Logs errors without exposing sensitive information.

## Contributing

Contributions are welcome! If you’d like to contribute to Gaia, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Support

If you encounter any issues or have questions, please open an issue on the GitHub repository.

## Get Started Today!

Start building AI-powered applications with Gaia. Install the package and deploy your first GaiaNet node in minutes:

```bash
npm install -g gaia
gaia --model https://raw.githubusercontent.com/GaiaNet-AI/node-configs/main/llama-3.2-3b-instruct/config.json
```

> Find many other node configurations from Gaia's [node-configs](https://github.com/GaiaNet-AI/node-configs) repository.  There are several pre-set node configs for you to choose.

Join the growing community of developers using Gaia to simplify AI integration. 🚀