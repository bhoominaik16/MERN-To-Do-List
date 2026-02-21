# 📝 TaskFlow – Full Stack Task Management Platform

TaskFlow is a full-stack MERN application that allows users to create, organize, and manage tasks efficiently across different stages (To Do, Ongoing, Done).

The project is fully containerized using Docker and includes CI automation with GitHub Actions along with a Python-based deployment script for streamlined updates.

---

## ✨ Features

1. 📋 Create and manage tasks
2. 🔄 Move tasks between To Do, Ongoing, and Done
3. 🗑 Delete tasks
4. 💾 Persistent storage with MongoDB
5. 🐳 Fully Dockerized deployment
6. 🔁 CI pipeline with automated Docker image build
7. 🚀 Python-based deployment automation

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* Axios
* Tailwind CSS
* Nginx (production build serving)

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### DevOps & Automation

* Docker (multi-stage builds)
* Docker Compose
* GitHub Actions (CI pipeline)
* Docker Hub (image registry)
* Python (deployment automation using subprocess)

---

## 📂 Project Structure

TaskFlow/   
│   
├── frontend/   
├── backend/   
├── docker-compose.yml    
├── deploy.py   
├── .github/workflows/ci.yml   
└── README.md   


## ⚙️ Environment Variables

### Backend (`backend/.env`)

PORT=5000    
MONGO_URI=mongodb://mongo:27017/taskflow    

### Frontend (`frontend/.env`)

VITE_API_URL=http://localhost:5001

---

## 🐳 Running with Docker (Recommended)

### Build Containers

docker compose build

### Start Application

docker compose up -d


### Access the Application

Frontend:
http://localhost:3001

Backend:
http://localhost:5001

MongoDB:
mongodb://localhost:27018

---

## 🔁 CI Pipeline

The GitHub Actions workflow:

* Triggers on push to the `main` branch
* Builds frontend and backend Docker images
* Tags images as `latest`
* Pushes images to Docker Hub

Docker Hub Images:

* `yourdockerhubusername/taskflow-frontend`
* `yourdockerhubusername/taskflow-backend`

This ensures production-ready images are automatically generated and stored in Docker Hub.

---

## 🐍 Python Deployment Script

The project includes a deployment script (`deploy.py`) that:

* Pulls the latest Docker images from Docker Hub
* Stops existing containers
* Recreates containers with updated images
* Starts services automatically

Run it using:

python deploy.py

This simplifies server-side updates and ensures the latest CI-built images are deployed.

---

## 🏗 Architecture Overview

Browser   
   ↓    
Nginx (Frontend – Port 3001)    
   ↓    
Express Backend (Port 5000 inside container)    
   ↓    
MongoDB    

Docker Port Mapping:

* 3001 → Frontend (Nginx)
* 5001 → Backend
* 27018 → MongoDB

---

## 📌 What This Project Demonstrates

* Full-stack MERN development
* REST API design with Express
* MongoDB data modeling with Mongoose
* Docker-based containerization
* Multi-service orchestration using Docker Compose
* CI automation with GitHub Actions
* Deployment automation using Python

