from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import json
app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

data = json.load(open('db/db.json', 'r'))

@app.get("/api/work")
def get_work():
    return data["work"]

@app.get("/api/projects")
def get_projects():
    return data["projects"]

@app.get("/api/feedback")
def get_feedback():
    return data["feedback"]
