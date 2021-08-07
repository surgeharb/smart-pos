build-prod:
	docker-compose build && docker-compose up

run-postgres-dev:
	docker run --name postgres-dev \
		-p 54321:5432 \
		-e POSTGRES_DB=smart-pos \
		-e POSTGRES_USER=smart-pos \
		-e POSTGRES_PASSWORD=smart-pos \
		-d postgres:12.3-alpine
