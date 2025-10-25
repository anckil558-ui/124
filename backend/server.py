from fastapi import FastAPI, APIRouter, HTTPException, File, UploadFile
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from datetime import datetime
from models import (
    ContactFormInput,
    ContactForm,
    CareerApplicationInput,
    CareerApplication,
    NewsletterSubscriptionInput,
    NewsletterSubscription,
    ApiResponse
)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Health check
@api_router.get("/")
async def root():
    return {"message": "AppDost API is running", "version": "1.0.0"}

# Contact Form Endpoints
@api_router.post("/contact", response_model=ApiResponse)
async def submit_contact_form(input_data: ContactFormInput):
    try:
        # Create contact form object
        contact_dict = input_data.dict()
        contact_obj = ContactForm(**contact_dict)
        
        # Save to database
        result = await db.contacts.insert_one(contact_obj.dict())
        
        if result.inserted_id:
            return ApiResponse(
                success=True,
                message="Thank you for contacting us! We'll get back to you within 24 hours.",
                data={"contact_id": contact_obj.id}
            )
        else:
            raise HTTPException(status_code=500, detail="Failed to submit contact form")
    except Exception as e:
        logging.error(f"Error submitting contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="An error occurred while submitting your message")

@api_router.get("/contact")
async def get_all_contacts():
    try:
        contacts = await db.contacts.find().sort("created_at", -1).to_list(100)
        return {"success": True, "count": len(contacts), "contacts": contacts}
    except Exception as e:
        logging.error(f"Error fetching contacts: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch contacts")

# Career Application Endpoints
@api_router.post("/careers/apply", response_model=ApiResponse)
async def submit_career_application(input_data: CareerApplicationInput):
    try:
        # Create application object
        application_dict = input_data.dict()
        application_obj = CareerApplication(**application_dict)
        
        # Save to database
        result = await db.applications.insert_one(application_obj.dict())
        
        if result.inserted_id:
            return ApiResponse(
                success=True,
                message="Application submitted successfully! We'll review your application and get back to you soon.",
                data={"application_id": application_obj.id}
            )
        else:
            raise HTTPException(status_code=500, detail="Failed to submit application")
    except Exception as e:
        logging.error(f"Error submitting application: {str(e)}")
        raise HTTPException(status_code=500, detail="An error occurred while submitting your application")

@api_router.get("/careers/applications")
async def get_all_applications():
    try:
        applications = await db.applications.find().sort("created_at", -1).to_list(100)
        # Remove resume_data from response for performance
        for app in applications:
            if 'resume_data' in app:
                app['has_resume'] = bool(app['resume_data'])
                del app['resume_data']
        return {"success": True, "count": len(applications), "applications": applications}
    except Exception as e:
        logging.error(f"Error fetching applications: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch applications")

# Newsletter Subscription Endpoints
@api_router.post("/newsletter/subscribe", response_model=ApiResponse)
async def subscribe_newsletter(input_data: NewsletterSubscriptionInput):
    try:
        # Check if email already exists
        existing = await db.newsletter_subscribers.find_one({"email": input_data.email})
        
        if existing:
            # Update if inactive
            if not existing.get('is_active', False):
                await db.newsletter_subscribers.update_one(
                    {"email": input_data.email},
                    {"$set": {"is_active": True, "subscribed_at": datetime.utcnow()}}
                )
                return ApiResponse(
                    success=True,
                    message="Welcome back! Your subscription has been reactivated."
                )
            else:
                return ApiResponse(
                    success=True,
                    message="You're already subscribed to our newsletter!"
                )
        
        # Create new subscription
        subscription_dict = input_data.dict()
        subscription_obj = NewsletterSubscription(**subscription_dict)
        
        # Save to database
        result = await db.newsletter_subscribers.insert_one(subscription_obj.dict())
        
        if result.inserted_id:
            return ApiResponse(
                success=True,
                message="Thank you for subscribing! You'll receive our latest updates.",
                data={"subscription_id": subscription_obj.id}
            )
        else:
            raise HTTPException(status_code=500, detail="Failed to subscribe")
    except Exception as e:
        logging.error(f"Error subscribing to newsletter: {str(e)}")
        raise HTTPException(status_code=500, detail="An error occurred while subscribing")

@api_router.get("/newsletter/subscribers")
async def get_all_subscribers():
    try:
        subscribers = await db.newsletter_subscribers.find({"is_active": True}).sort("subscribed_at", -1).to_list(1000)
        return {"success": True, "count": len(subscribers), "subscribers": subscribers}
    except Exception as e:
        logging.error(f"Error fetching subscribers: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch subscribers")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()