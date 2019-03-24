### build
```
docker login -u mrcharleshu

docker build . --tag simple-express-web:v1
docker tag simple-express-web:v1 mrcharleshu/simple-express-web:v1
docker push mrcharleshu/simple-express-web:v1

docker build . --tag simple-express-web:v2
docker tag simple-express-web:v2 mrcharleshu/simple-express-web:v2
docker push mrcharleshu/simple-express-web:v2
```

###
```
npm start
curl localhost:3000/v1
curl localhost:3000/v1/another
curl localhost:3000/v1/health
```
