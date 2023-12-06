docker build --no-cache -f SQL\Dockerfile.PostgreSql -t nrprap/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t nrprap/app ../..
