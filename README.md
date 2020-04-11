# api-test
Ini adalah automate Rest API test sederhana dengan menggunakan:
1. `mocha` sebagai test framework
2. `chai` sebagai assertion library
3. `dotenv` untuk handle environment variables dari .env file
4. `supertest` sebagai HTTP request agent untuk memanggil API
5. `chai-json-schema` sebagai assertion untuk cek schema request body
6. `mochawesome` sebagai reporter


Untuk mencobanya hanya perlu clone dan jalankan command berikut:
```sh
npm install
```
Untuk run test dengan command:
```sh
npm run test
```
![test result](https://github.com/Ciwedey/api-test/blob/master/Screenshot%20from%202020-04-11%2014-04-06.png)

Untuk membuka report html run command:
```sh
npm run reports
```
![report result](https://github.com/Ciwedey/api-test/blob/master/Screenshot%20from%202020-04-11%2014-04-30.png)
