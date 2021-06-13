# Shorty

##### A simple url Shortening service using Node, React and MySql

###### Requires Node >v10.13, Mysql v8

### Setup Database
 - Install Mysql on your machine
 - Once installed, open mysql server using your preferred Database application or start up using command line.
 - Create a Database `db1` (as used in the application itself)
 - Navigate to `db` folder in the repo and import the `db1.sql` file. This will create table with sample data in the database

### Backend
 * Goto `/server` folder and run `npm install`
 * After Dependencies installation, run `npm start`. Server should start running on :5000 port.
 
### Frontend
* To Run Frontend, Navigate to `/client` folder, and run `npm install` 
* Run `npm start`. Frontend should start running on :3000 port.

### Troubleshooting
*  if Server is not able to connect database, Check database connection setting in `/server/config/db_config.js`. Update the relevant values for your mysql server

### Screenshots
![alt Home](https://i.ibb.co/0K3Y1Yd/Screenshot-2021-06-13-at-5-47-24-PM.png)
![alt Success](https://i.ibb.co/7gftR5F/image.png)
![alt Auth](https://i.ibb.co/YB75TSp/image.png)

### Work in Progress
* Dockerize the setup and reduce the clutter.
* Custom short links
* Deployment on a Cloud service
