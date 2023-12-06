docker build --no-cache -f SQL\Dockerfile.PostgreSql -t nrprap-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t nrprap-java/app ../../..
