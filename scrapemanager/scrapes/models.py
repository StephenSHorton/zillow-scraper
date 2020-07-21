from django.db import models


class Scrape(models.Model):
    address = models.CharField(max_length=100, unique=True)
    type = models.CharField(max_length=15, blank=True)
    bedrooms = models.CharField(max_length=15, blank=True)
    yearbuilt = models.CharField(max_length=15, blank=True)
    squarefeet = models.CharField(max_length=15, blank=True)
    parking = models.CharField(max_length=15, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
