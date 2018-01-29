from django.http import HttpResponse


# Create your views here.


def getCost(request):
    s1 = request.GET.get("trees", "")
    vall = int(s1)
    vall = vall * 0.1
    result = '{ "sum" : "' + str(vall) + '" }'
    return HttpResponse(result)
