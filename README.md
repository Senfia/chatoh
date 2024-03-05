<div align="center" width="100%">
    <img src="./frontend/public/logo.png" width="128" alt="" />
</div>

# Chat Oh!

Welcome to Chat Oh! - Your go-to destination for real-time messaging. This application allows users to engage in seamless conversations through a web interface. It's built using Node.js, Express, React, and WebSockets for efficient and instant communication.

![alt text](https://github.com/Senfia/chatoh/blob/main/chatoh-mockup-.png?raw=true)

## Features

- **Real-time Messaging**: Send and receive messages instantly without refreshing the page.

- **User Authentication**: Secure authentication system ensures privacy and security.

- **Intuitive Interface**: Clean and intuitive UI design for easy navigation and interaction.

- **Responsive Design**: Mobile-friendly layout for usage across various devices.

## Live Demo

See [live demo here](https://chat-oh.cubemite.com/)

## Installation

To run Chat Oh! locally, follow these steps:

1. Clone this repository to your local machine:

```bash

git clone https://github.com/Senfia/chatoh.git

```

2. Navigate to the project directory:

```bash

cd chatoh

```

3. Install dependencies for both the server and client:

```bash

# Install server dependencies

npm install



# Navigate to client directory

cd client



# Install client dependencies

npm install

```

## Usage

1. Setup .env file

```js

PORT=...

MONGO_DB_URI=...

JWT_SECRET=...

NODE_ENV=...

```

2. Build app:

```bash

npm run build

```

### Start server

```

npm start



```

4. Open your browser and navigate to `http://localhost:{PORT}` to access Chat Oh!

## Docker Installation

To run Chat Oh! using Docker, follow these steps:

1. Install Docker on your machine. You can download Docker from the official website: [https://www.docker.com/get-started](https://www.docker.com/get-started).

2. Create a Dockerfile in the root directory of your project with the following content:

### Dockerfile

```

# Use the official Node.js 20 image as the base image

FROM node:20.11.1


# Set the working directory inside the container

WORKDIR /usr/src/app

COPY package*.json ./

# Install the dependencies

RUN npm install



# Copy the code from your local directory to the container

COPY . .



# Build the application

RUN npm run build



# Expose the port on which the application will run (main was 8000, your should be different if you changed it in the code)

EXPOSE 8000



# Start the application

CMD ["npm", "start"]

```

- Build docker image using the following command:

```
docker build . -t chatoh:latest
```

- Create and run the docker container as follows, specifying your appropriate ports

```
docker run --name chatoh -d -it -p 8000:8000 chatoh
```

Alternatively, you can use docker-compose to create and run your container

### Docker-compose

To use docker-compose to create a container, you can use the configuration below.

1. Create a file called docker-compose.yaml
2. Provide your environment variables as required.

```
version: "3.9"

services:
  chatoh:
    restart: always
    container_name: chatoh
    image: chatoh:latest
    ports:
      - 8000:8000
    environment:
      - PORT=
      - MONGO_DB_URI=
      - JWT_SECRET=
      - NODE_ENV=
```

3. Run the command:

```
docker-compose up -d
```

## Technologies Used

- **Node.js**: JavaScript runtime environment for building server-side applications.

- **Express**: Web application framework for Node.js used for building APIs and web applications.

- **React**: JavaScript library for building user interfaces.

- **WebSockets**: Communication protocol providing full-duplex communication channels over a single TCP connection.

- **TailwindCSS **

## Authors

**Senyo Fiawornu**

- [Senfia](https://github.com/Senfia)

**Joseph Darko**

- [osomfonashticah](https://github.com/osomfonashticah)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
