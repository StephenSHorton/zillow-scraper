from rest_framework import serializers
from scrapes.models import Scrape

# Lead Serializer


class ScrapeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scrape
        fields = '__all__'
