1. User Management Service
Responsibilities: Handles user registration, authentication, profile management, and user settings.
Endpoints:
POST /users/register
POST /users/login
GET /users/profile
PUT /users/profile
2. Course Management Service
Responsibilities: Manages the creation, update, and retrieval of coding courses and lessons.
Endpoints:
POST /courses
GET /courses
PUT /courses/{id}
DELETE /courses/{id}
GET /courses/{id}/lessons
3. Content Delivery Service
Responsibilities: Serves the coding lessons, exercises, and interactive content to users.
Endpoints:
GET /lessons/{id}
POST /lessons/{id}/submit
GET /lessons/{id}/next
4. Progress Tracking Service
Responsibilities: Tracks user progress, stores user achievements, and manages streaks or levels.
Endpoints:
GET /progress/{userId}
POST /progress/{userId}/update
GET /achievements/{userId}
5. Code Execution Service
Responsibilities: Executes code submitted by users in various coding languages, handles syntax checking, and returns execution results or errors.
Endpoints:
POST /execute
Considerations: Might need to be isolated for security, especially when running user-submitted code.