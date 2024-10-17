# stage 1 : build stage
FROM node:alpine AS build
WORKDIR /app

# copy only package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# copy rest of the application files
COPY . .

# stage 2: final image
FROM node:alpine
WORKDIR /app

# copy from build stage
COPY --from=build /app .

# Expose ports
EXPOSE 3000

# start application
CMD ["npm","start"]
