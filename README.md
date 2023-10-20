<p align='center'><img src="https://github.com/shouryaraj/ts-express-starter/blob/main/comic-1302162_1280.png" alt="Cool Banner"  height="200" /> </p>

# TypeScript Express Base - Open-Source Starter Kit

![Node.js](https://img.shields.io/badge/Node.js-%3E%3D14.17.0-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-%3E%3D4.1.0-blue)
![Express](https://img.shields.io/badge/Express-%5E4.17.1-green)

**TypeScript Express Base** is an open-source starter kit for building web applications with TypeScript and Express.js. It provides a solid foundation for creating RESTful APIs or web services with robust and maintainable code.

## Features

## Features

- **TypeScript**: Write your code in TypeScript for strong typing and improved development experience. Learn more about TypeScript [here](https://www.typescriptlang.org/).
- **Express.js**: A fast, minimal, and flexible [Node.js web application framework](https://expressjs.com/) to build robust APIs.
- **Prettier & ESLint**: Code formatting and linting tools to maintain a consistent coding style. Explore Prettier [here](https://prettier.io/) and ESLint [here](https://eslint.org/).
- **Environment Variables**: Load environment variables from a `.env` file for configuration. Check out the `dotenv` library [here](https://www.npmjs.com/package/dotenv).
- **Nodemon**: Automatically restart the server during development for a seamless development experience. Learn more about Nodemon [here](https://nodemon.io/).
- **Dependency Management**: Manage your project's dependencies and scripts with Yarn or npm. Explore Yarn [here](https://yarnpkg.com/) and npm [here](https://www.npmjs.com/).

## Getting Started

Follow these steps to use this starter kit for your project:

1. **Clone the Repository**:

```
git clone https://github.com/yourusername/typescript-express-base.git your-app-name
cd your-app-name
```


2. **Install Dependecy**:

Use your preferred package manager to install project dependencies.

Using npm:

   ```
   npm install
   ```

Using Yarn:
   ```
   yarn
   ```



3. **Configuration**:

Create a .env file in the root directory to set your environment-specific variables.
Customize ESLint and Prettier configurations in .eslintrc.js and .prettierrc.js, respectively, as needed.


4. **Start the Application**:

* For development:

Using npm:

   ```
   npm run start:dev
   ```
Using Yarn:

   ```  
   yarn start:dev
   ```


* For production:

Using npm:

   ```
   npm run start:prod
   ```



Using Yarn:

   ```
   yarn start:prod
   ```

4. **Access Your Application**:

Visit http://localhost:3000/health in your browser, and you'll see "Hello, Express app is healthy!" if everything is set up correctly.

## Author

[Bugdebugger](https://github.com/shouryaraj)


## Acknowledgments
- Express.js
- TypeScript
- Prettier
- ESLint
- dotenv
