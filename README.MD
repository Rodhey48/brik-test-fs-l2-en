# WELCOME 
ikuti intruksi berikut ini

### requierment
- node versi 20^, npm versi 10^


### setup server
- didalam folder server, pastikan membuat file .env (example sudah diberikan)
- siapkan database posgresql, dan masukan credential di file .env
- jalan kan di terminal "npm install" (di folder server)
- setelah selesai jalan "npx sequelize-cli db:migrate", setelah itu "npx sequelize-cli db:seed:all" (ada opsi membuat database dengan "npx sequelize-cli db:create" )
- jalankan aplikasi dengan "node app.js"
- server sudah berjalan di port yang diberikan di file env

### setup client
- masuk ke directory client lewat terminal
- jalankan npm install
- setelah selesai jalan kan client dengan "npm run dev"
- client sudah berjalan secara default di http://localhost:5173/

### kredensial untuk login 
- email : admin@email.com ; password: Asd123; type: admin
- email : user1@email.com ; password: Asd123; type: user
