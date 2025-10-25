# AppDost Backend Contracts

## API Endpoints

### 1. Contact Form Submission
- **Endpoint**: `POST /api/contact`
- **Purpose**: Store contact form submissions
- **Request Body**:
  ```json
  {
    "name": "string",
    "email": "string",
    "phone": "string",
    "subject": "string",
    "message": "string"
  }
  ```
- **Response**: `{ "success": true, "message": "Contact form submitted successfully" }`
- **Database**: `contacts` collection

### 2. Career Application Submission
- **Endpoint**: `POST /api/careers/apply`
- **Purpose**: Store job applications
- **Request Body**:
  ```json
  {
    "jobId": "string",
    "jobTitle": "string",
    "name": "string",
    "email": "string",
    "phone": "string",
    "resumeUrl": "string",
    "coverLetter": "string"
  }
  ```
- **Response**: `{ "success": true, "message": "Application submitted successfully" }`
- **Database**: `applications` collection

### 3. Newsletter Subscription
- **Endpoint**: `POST /api/newsletter/subscribe`
- **Purpose**: Store newsletter subscriptions
- **Request Body**:
  ```json
  {
    "email": "string"
  }
  ```
- **Response**: `{ "success": true, "message": "Subscribed successfully" }`
- **Database**: `newsletter_subscribers` collection

### 4. Blog Posts (Read-only for MVP)
- **Endpoint**: `GET /api/blog/posts`
- **Purpose**: Fetch blog posts
- **Response**: Array of blog post objects
- **Database**: Uses mock data from frontend (no backend needed for MVP)

### 5. Projects (Read-only for MVP)
- **Endpoint**: `GET /api/projects`
- **Purpose**: Fetch portfolio projects
- **Response**: Array of project objects
- **Database**: Uses mock data from frontend (no backend needed for MVP)

### 6. Services (Read-only for MVP)
- **Endpoint**: `GET /api/services`
- **Purpose**: Fetch services
- **Response**: Array of service objects
- **Database**: Uses mock data from frontend (no backend needed for MVP)

### 7. Job Listings (Read-only for MVP)
- **Endpoint**: `GET /api/careers/jobs`
- **Purpose**: Fetch job openings
- **Response**: Array of job objects
- **Database**: Uses mock data from frontend (no backend needed for MVP)

## Data Models

### Contact
```python
{
  "_id": ObjectId,
  "name": str,
  "email": str,
  "phone": str,
  "subject": str,
  "message": str,
  "created_at": datetime,
  "status": str  # "new", "contacted", "resolved"
}
```

### Application
```python
{
  "_id": ObjectId,
  "job_id": str,
  "job_title": str,
  "name": str,
  "email": str,
  "phone": str,
  "resume_url": str,
  "cover_letter": str,
  "created_at": datetime,
  "status": str  # "received", "reviewing", "shortlisted", "rejected"
}
```

### Newsletter Subscriber
```python
{
  "_id": ObjectId,
  "email": str,
  "subscribed_at": datetime,
  "is_active": bool
}
```

## Frontend-Backend Integration Changes

### Contact Page (`/pages/Contact.jsx`)
- Replace mock form submission with API call to `/api/contact`
- Add proper error handling
- Show success/error toasts

### Careers Page (`/pages/Careers.jsx`)
- Replace mock application submission with API call to `/api/careers/apply`
- Add file upload handling for resume (base64 or multipart form data)
- Add proper error handling

### Blog Page (`/pages/Blog.jsx`)
- Keep using mock data for MVP
- Can be extended later to fetch from `/api/blog/posts`

## Implementation Priority
1. **High Priority**: Contact form API, Career application API
2. **Medium Priority**: Newsletter subscription API
3. **Low Priority**: Blog/Projects/Services APIs (currently using mock data is fine)

## Notes
- All POST endpoints should include proper validation
- Add rate limiting for form submissions
- All responses should follow consistent format
- Add proper error messages for validation failures
- CORS is already configured in backend
