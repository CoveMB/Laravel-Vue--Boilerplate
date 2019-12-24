<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>


## BoilerPLate

This boilerplate contain the required configurations to get yup and running with a Laravel/Vue project with Docker.

## Prerequisites

Having Docker and Docker-compose on your machine.

## Steps

Clone the repository
```sh
git clone https://github.com/cominityio/DockerLaravelBoilerplate.git
```
Create a new .env file similar to .env.example
Choose your databse name / user name / password (there will be share in all your containers)
Add the following (note that the host is referenced as db, it will be used by Docker to establish the connection)
```
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
```
Generate a new key for your app using:
```sh
php artisan key:generate
```
You can now enter the following commands (the build command is only needed the first time or when you install a new package)
```
docker-compose up --build
```
You will need to rebuild the containers if you add a package
Before accessing the project you need to enter the app container
```
docker-compose exec bash
```
Then produce a mix manifest for vue
```
yarn dev
```
You can now run the watch command that will enable hot reloading
```
yarn watch
```
You can acces the project at http://localhost:8080  
You can acces phpmyadmin at http://localhost:80  
To shutdown the containers use
```
docker-compose down
```
At the end of the project, to clean your system of all containers or db volumes use
```
docker system prune -a
```

## Debuging

To enter in the app container use
```
docker-compose exec bash
```
If you already have mysql or apache running in your computer you'll need to free the ports, run:
```
sudo systemctl stop mysql
```
```
sudo /etc/init.d/apache2 stop
```
If you are missing privileges you can use
```
sudo chown -R $USER:$USER ~/path/to/project
```
