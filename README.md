TaskFlow - Full-Stack Task Management Application

TaskFlow is a modern, full-stack Task Management application built using Domain-Driven Design (DDD) principles and organized into a clean monorepo architecture. It features a robust Java Spring Boot backend and a responsive React/TypeScript frontend styled with Material-UI (MUI).

🏗️ Monorepo Architecture

The project is structured as a monorepo containing both applications and shared configurations:

taskflow-project/
├── apps/
│   ├── backend/          # Spring Boot REST API (Java 25, JPA, H2)
│   └── frontend/         # React, TypeScript, Vite, MUI
├── packages/             # Shared packages / configurations
└── README.md             # Project documentation


🛠️ Technology Stack

Backend (apps/backend)

Language/Framework: Java 25, Spring Boot

Architecture: Domain-Driven Design (DDD) (com.example.backend.domains.task)

Persistence: Spring Data JPA with H2 In-Memory Database

Build Tool: Maven (mvnw)

Frontend (apps/frontend)

Framework: React with Vite

Language: TypeScript

UI Library: Material-UI (MUI)

Routing: React Router (react-router-dom)

🚀 Getting Started & Local Setup

Follow these instructions to run the project locally on your machine.

Prerequisites

Ensure you have the following installed:

Java Development Kit (JDK 25) (with JAVA_HOME properly configured)

Git

1. Clone the Repository

git clone https://github.com/AleksandraMarinkova1/TaskFlow.git
cd taskflow-project


2. Run the Backend

Navigate to the backend application directory:

cd apps/backend


Verify or set your JAVA_HOME variable if needed (PowerShell example):

$env:JAVA_HOME="C:\Program Files\Eclipse Adoptium\jdk-25.0.4.101-hotspot"


Start the Spring Boot application using Maven wrapper:

./mvnw.cmd spring-boot:run


The backend server will start on port 8080 with an H2 database console enabled.

3. Run the Frontend

Open a new terminal window and navigate to the frontend application directory:

cd apps/frontend


Install the required dependencies:

pnpm install
# or using npm:
# npm install


Start the development server:

pnpm dev
# or using npm:
# npm run dev


The frontend application will run locally (typically at http://localhost:5173).

📌 Features & Routing

Task Overview (/): View all tasks in a clean dashboard with priorities, statuses, and action buttons.

Task Creation / Editing (/edit/:id): Seamless routing to edit specific tasks utilizing React Router parameters and state management.

Domain-Centric Design: Clean separation of concerns separating domain logic, persistence layers, and presentation components.