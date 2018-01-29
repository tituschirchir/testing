from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions

from .serializers import *
from .models import *


class ListViewSet(ModelViewSet):
    queryset = List.objects.all()
    serializer_class = ListSerializer


class CardViewSet(ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer


class TreeViewSet(ModelViewSet):
    queryset = Tree.objects.all()
    serializer_class = TreeSerializer


class FarmerViewSet(ModelViewSet):
    queryset = Farmer.objects.all()
    serializer_class = FarmerSerializer


class PictureViewSet(ModelViewSet):
    queryset = Picture.objects.all()
    serializer_class = PictureSerializer
