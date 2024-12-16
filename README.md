# Mentor Token

**Mentor Token** is a revolutionary MERN stack application that connects startups with seasoned mentors, 
offering invaluable guidance, expertise, and support tailored to your unique needs. Our platform facilitates networking and tokenizes assets while incentivizing good performance,
 creating a dynamic ecosystem that fosters collaboration and growth. With distinct dashboards for mentors and startups, users can easily manage job offers,
 apply for open positions, and navigate a microservice architecture that enhances scalability and maintainability.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- **User Authentication:** Secure registration and login for mentors and startups.
- **Dynamic Dashboards:** Customized user interfaces for mentors and startups.
- **Job Board:** Startups can post job offers, and mentors can view, apply, and accept/reject offers.
- **Notifications:** Real-time updates for mentors on job applications and offers.
- **Profile Management:** Users can update their profiles and view their application status.

## Tech Stack

- **Frontend:** React, Redux & Redux Toolkit, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **Styling:** Modular CSS

## Installation

To get started with the Mentor Token project, follow these steps (TBA...):

1. **Clone the repository:**

2. **Navigate to the server directory and install dependencies:**

3. **Set up your environment variables:**

4. **Start the backend server:**

5. **Navigate to the client directory and install dependencies:**

6. **Start the frontend application:**


## Usage

1. Open your browser and navigate to `http://localhost:9000`.
2. Register as a mentor or startup.
3. Explore the dashboards to post job offers or apply for jobs.

## API Endpoints

### Authentication

- **POST /api/v1/auth/register:** Register a new user (mentor/startup).
- **POST /api/v1/auth/login:** Login an existing user.

### Job Management

- **GET /api/v1/jobs:** Retrieve all job offers.
- **POST /api/v1/jobs:** Post a new job offer (startup only).
- **PUT /api/v1/jobs/:id/apply:** Apply for a job offer (mentor only).
- **PUT /api/v1/jobs/:id/accept:** Accept a job offer (mentor only).
- **PUT /api/v1/jobs/:id/reject:** Reject a job offer (mentor only).

### Dashboard

- **GET /api/v1/dashboard/mentor:** Retrieve mentor dashboard data
- **GET /api/v1/dashboard/startup:** Retrieve startup dashboard data

### Applications

- **GET /api/v1/applications:** View job applications (mentor only).
- **POST /api/v1/applications:** Submit a new application (mentor only).
