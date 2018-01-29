from django.db import models
from django.utils.encoding import python_2_unicode_compatible


@python_2_unicode_compatible
class Picture(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField(blank=True, null=True, upload_to='')

    def __str__(self):
        return "Picture:{self.name}"


@python_2_unicode_compatible
class Tree(models.Model):
    name = models.CharField(max_length=50)
    origin = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    picture = models.ForeignKey(Picture, related_name="tree", on_delete=models.CASCADE)

    def __str__(self):
        return "Tree:{self.name}"


@python_2_unicode_compatible
class Farmer(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    village = models.CharField(max_length=50)
    tree_count = models.IntegerField(default=0)
    picture = models.ManyToManyField(Picture, related_name="farmer_picture")

    def __str__(self):
        return "Farmer:{self.first_name}"


@python_2_unicode_compatible
class List(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return "List:{self.name}"


@python_2_unicode_compatible
class Card(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    picture = models.ForeignKey(Picture, related_name="pictures", on_delete=models.CASCADE)
    story_points = models.IntegerField(null=True, blank=True)
    business_value = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return "Card:{self.title}"
