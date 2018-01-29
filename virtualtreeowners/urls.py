from .api import *

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'lists', ListViewSet)
router.register(r'cards', CardViewSet)
router.register(r'farmers', FarmerViewSet)
router.register(r'pictures', PictureViewSet)
router.register(r'trees', TreeViewSet)

urlpatterns = router.urls
