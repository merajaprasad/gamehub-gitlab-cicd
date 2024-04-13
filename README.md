# Webapp deployment using gitlab ci-cd pipeline
clone this github gamehub project code and navigate to project directory.
### Run Below command to Install Dependency
```bash
npm Install
```
### Run Below command to Start the server
```bash
npm Start
```
Now Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.You may also see any lint errors in the console.

#### ```npm run build```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# Run on Docker Container
#### Prerequisits
- install docker
- install git
#### Create Image
```bash
docker build -t gamehubimage .
```
#### Create Container
```bash
docker run -d --name gamehubcontainer -p 3000:3000 gamehubimage
```
Now open application from browser by running [your-public-ip:3000]. if application is not opening from browser then check port 3000 is enabled or not on your EC2 server.

# GitLab Pipeline
Prerequities
- install gitlab runner
- add gitlab runner user to docker group
- configure gitlab secret variable for Docker username and token

### Install gitlab Runner
```bash
curl -LJO https://gitlab-runner-downloads.s3.amazonaws.com/latest/rpm/gitlab-runner_amd64.rpm
sudo rpm -Uvh gitlab-runner_amd64.rpm

sudo gitlab-runner start

sudo gitlab-runner register --url https://gitlab.com/ --registration-token GR1348941Wg5zz_86Qepy8vUjAohB
```
Note : Enter the following details as mentioned here
`url` - same (hit Enter).
`token` - same (hit enter).
`Description` - medevops (give a description of your job).
`Tag` - server, ec2 (give tag of your server).
`Executer` - Shell (give executer name 'shell').

#### Varify Runner Status
```bash
sudo gitlab-runner status
```
### add gitlab runner user to docker group
```
sudo usermod -aG docker gitlab-runner
```



