from django.http import HttpResponse
import requests

api_key = "X1-ZWz18pbkpue8ln_4hjdy"


def get_zillow_response(request, zpid):
    r = requests.get(
        f'https://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id={api_key}&zpid={zpid}')
    return HttpResponse(r.content)
