from scrapes.models import Scrape
from rest_framework import viewsets, permissions
from .serializers import ScrapeSerializer

# Lead Viewset


class ScrapeViewSet(viewsets.ModelViewSet):
    queryset = Scrape.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ScrapeSerializer
