import subprocess
import sys

def run_command(command):
    result = subprocess.run(command, shell=True)
    if result.returncode != 0:
        print(f"Error executing: {command}")
        sys.exit(1)

print("Pulling latest changes...")
run_command("git pull origin main")

print("Building Docker containers...")
run_command("docker compose build")

print("Starting services...")
run_command("docker compose up -d")

print("Deployment completed successfully!")