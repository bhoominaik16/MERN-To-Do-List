import subprocess
import sys

def run_command(command):
    result = subprocess.run(command, shell=True)
    if result.returncode != 0:
        print(f"Error executing: {command}")
        sys.exit(1)

print("Pulling latest Docker images...")
run_command("docker compose pull")

print("Starting services...")
run_command("docker compose up -d")

print("Deployment completed successfully!")