from rest_framework import serializers

from .models import Tree, Farmer, Picture


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