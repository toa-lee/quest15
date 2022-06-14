aws ecs register-task-definition --cli-input-json file://task.json
aws ecs update-service --cluster service-ecs-cluster --service staging --task-definition http-ecs-service
