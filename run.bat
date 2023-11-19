@echo off
cd docker

IF "%1"=="up" (
    echo Starting Docker Compose...
    docker-compose up -d
) ELSE IF "%1"=="down" (
    echo Stopping Docker Compose...
    docker-compose down
) ELSE (
    echo Invalid argument. Use 'up' to start or 'down' to stop.
)

pause
