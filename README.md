# front-end

# Environment

Create `.env` file containing:

    API_URL=<link to API>

# Install Node + NPM

- [Ubuntu](https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/)
- [Windows](https://treehouse.github.io/installation-guides/windows/node-windows.html)

# Clone

- SSH: `git clone git@github.com:neo-portfolio/front-end.git && cd front-end`
    
- HTTPS: `git clone https://github.com/neo-portfolio/front-end.git && cd front-end`


# Install dependencies

    npm i
    
# Run dev environment

    npm run dev
   
# Docker

## /!\ Don't forget to have a `.env` file in your folder

## Build

    sudo docker build -t front .
    
## Run

    sudo docker run -p 3000:3000 front
    
Alternatively, you can run it as a demon with:

    sudo docker run -d -p 3000:3000 front