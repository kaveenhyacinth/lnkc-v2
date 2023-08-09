start-local:
	@docker compose stop && docker compose up --build -d --remove-orphans

stop-local:
	@docker compose stop