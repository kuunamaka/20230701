# 20230701
Coding-Test repo

# Docker-server
- up command
$ docker-composen up

- down command
$ docker-compose down
or ctrl + c
to stop the server

# OpenApi generator
Run the command 
$ cd docs
$ docker run --rm -p 8080:8080 -e SWAGGER_JSON=/local/openapi.yaml -v ${PWD}:/local swaggerapi/swagger-ui:v3.20.1

and serach below on explore box
./openapi.yaml

to see the openApi on Swagger UI.

# postgreSQL
connect postgreSQL container
$ docker exec -it postgres /bin/sh

connect postgreSQL
$ psql -h localhost -U postgres

show all db
$ \l
