from django.contrib import admin
from django.urls import path, include
from . import zillowproxy

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('scrapes.urls')),
    path('zillowproxy/<slug:zpid>', zillowproxy.get_zillow_response)
]
