from rest_framework import serializers

from .models import List, Card, Tree, Farmer, Picture


class PictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Picture
        fields = '__all__'


class TreeSerializer(serializers.ModelSerializer):
    picture = PictureSerializer(read_only=True)

    class Meta:
        model = Tree
        fields = '__all__'


class FarmerSerializer(serializers.ModelSerializer):
    picture = PictureSerializer(read_only=False, many=True)
    class Meta:
        model = Farmer
        fields = '__all__'


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = '__all__'


class ListSerializer(serializers.ModelSerializer):
    cards = CardSerializer(read_only=True, many=True)

    class Meta:
        model = List
        fields = '__all__'
