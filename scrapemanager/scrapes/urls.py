from rest_framework import routers
from .api import ScrapeViewSet

router = routers.DefaultRouter()
router.register('api/scrapes', ScrapeViewSet, 'scrapes')

urlpatterns = router.urls
