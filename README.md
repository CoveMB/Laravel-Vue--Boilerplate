<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>


## Project

This project contain the required configurations to get up and running with a Laravel/Vue app inside Docker containers.

## Prerequisites

Having Docker and Docker-compose on your machine.

## Prepare environement

Clone the project repository
```sh
git clone git@github.com:cominityio/poject_name.git
```
Create a new .env file similar to .env.example  
Choose your databse name / user name / password (there will be share in all your containers)  
Add the following (notice that the host is referenced as db, it will be used by Docker to establish the connection)
```
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
```
You can now enter the following commands (the build flag is only needed the first time or when you install a new dependency)
```
docker-compose up --build
```
Before accessing the project you need to enter the app container
```
docker-compose exec bash
```
Install composer dependencies
```
composer install
```
Generate a new key for your app
```sh
php artisan key:generate
```
Then produce a mix manifest for Vue using Yarn
```
yarn dev
```
You can now run the watch command that will enable hot reloading
```
yarn watch
```
You can acces the project at http://localhost:8080  
You can acces phpmyadmin at http://localhost:80  
To shutdown the containers run
```
docker-compose down
```
At the end of the project, to clean your system of all containers or db volumes run
```
docker system prune -a
```

## Debuging

To enter in the app container run
```
docker-compose exec bash
```
If you already have mysql or apache running in your computer you'll need to free the ports, run
```
sudo systemctl stop mysql
```
```
sudo /etc/init.d/apache2 stop
```
If you are missing privileges you can run
```
sudo chown -R $USER:$USER ~/path/to/project
```
