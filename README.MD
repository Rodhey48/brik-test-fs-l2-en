# WELCOME 
ikuti intruksi berikut ini

### setup server
- didalam folder server, pastikan membuat file .env (example sudah diberikan) dan mempunyai node versi 20^, npm versi 10^
- siapkan database posgresql, dan masukan credential di file .env
- jalan kan di terminal "npm install" (di folder server)
- setelah selesai jalan "npx sequelize-cli db:migrate", setelah itu "npx sequelize-cli db:seed:all" (ada opsi membuat database dengan "npx sequelize-cli db:create" )
- jalankan aplikasi dengan "node app.js"
- server sudah berjalan di port yang diberikan di file env