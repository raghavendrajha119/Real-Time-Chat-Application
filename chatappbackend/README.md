# Backend
The Backend is based on Django framework.

## Directory structure
```
.
├── chatappbackend
│   ├── asgi.py
│   ├── __init__.py
│   ├── __pycache__
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── db.sqlite3
├── home
│   ├── admin.py
│   ├── apps.py
│   ├── __init__.py
│   ├── migrations
│   ├── models.py
│   ├── __pycache__
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── manage.py
├── README.md
└── requirements.txt

```
## Features
- Authentication based on django rest framework ,authentication based on access and refresh token where frontend makes request using axios and corsheaders.