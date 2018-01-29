from rest_framework.viewsets import ModelViewSet

from .serializers import *


class TreeViewSet(ModelViewSet):
    queryset = Tree.objects.all()
    serializer_class = TreeSerializer


class FarmerViewSet(ModelViewSet):
    queryset = Farmer.objects.all()
    serializer_class = FarmerSerializer


class PictureViewSet(ModelViewSet):
    queryset = Picture.objects.all()
    serializer_class = PictureSerializer
