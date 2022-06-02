call powershell -command "Expand-Archive -Force 'Site.zip' './'"
call cd Site
call npm install
call npm install express pg bcrypt
call start http://localhost:3000/
call npm start
