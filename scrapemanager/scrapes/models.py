from django.db import models


class Scrape(models.Model):
    propertyImage = models.CharField(max_length=100, blank=True)
    type = models.CharField(max_length=15, blank=True)
    bedrooms = models.CharField(max_length=15, blank=True)
    bathrooms = models.CharField(max_length=15, blank=True)
    yearBuilt = models.CharField(max_length=15, blank=True)
    squareFeet = models.CharField(max_length=15, blank=True)
    zillowUrl = models.CharField(max_length=100, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
