from django.db import models
from django.utils.encoding import python_2_unicode_compatible


@python_2_unicode_compatible
class Picture(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField(blank=True, null=True, upload_to='')

    def __str__(self):
        return "Picture:{}".format(self.name)


@python_2_unicode_compatible
class Tree(models.Model):
    name = models.CharField(max_length=50)
    origin = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    picture = models.ForeignKey(Picture, related_name="tree", on_delete=models.CASCADE)

    def __str__(self):
        return "Tree:{}".format(self.name)


@python_2_unicode_compatible
class Farmer(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    village = models.CharField(max_length=50)
    tree_count = models.IntegerField(default=0)
    picture = models.ManyToManyField(Picture, related_name="farmer_picture")

    def __str__(self):
        return "Farmer:{}".format(self.first_name)
