from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime
import uuid

# Contact Form Model
class ContactFormInput(BaseModel):
    name: str
    email: EmailStr
    phone: str
    subject: str
    message: str

class ContactForm(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    subject: str
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = "new"  # new, contacted, resolved

# Career Application Model
class CareerApplicationInput(BaseModel):
    job_id: str
    job_title: str
    name: str
    email: EmailStr
    phone: str
    resume_data: Optional[str] = None  # Base64 encoded file data
    resume_filename: Optional[str] = None
    cover_letter: Optional[str] = None

class CareerApplication(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    job_id: str
    job_title: str
    name: str
    email: EmailStr
    phone: str
    resume_data: Optional[str] = None
    resume_filename: Optional[str] = None
    cover_letter: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = "received"  # received, reviewing, shortlisted, rejected

# Newsletter Subscription Model
class NewsletterSubscriptionInput(BaseModel):
    email: EmailStr

class NewsletterSubscription(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    subscribed_at: datetime = Field(default_factory=datetime.utcnow)
    is_active: bool = True

# Standard API Response
class ApiResponse(BaseModel):
    success: bool
    message: str
    data: Optional[dict] = None