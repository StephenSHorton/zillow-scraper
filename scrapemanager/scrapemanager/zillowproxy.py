from django.http import JsonResponse
import requests
import json
import xmltodict

api_key = "X1-ZWz18pbkpue8ln_4hjdy"


def get_zillow_response(request, zpid):
    print(f'Getting data for zpid: {zpid}')
    r = requests.get(
        f'https://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id={api_key}&zpid={zpid}')
    data_dict = xmltodict.parse(r.content)
    for key in data_dict:
        print(key)
    rootKey = data_dict["UpdatedPropertyDetails:updatedPropertyDetails"]["response"]
    editedFacts = rootKey["editedFacts"]
    final_dict = {
        'propertyImage': rootKey["images"]["image"]["url"][0] if rootKey.get("images") != None else "",
        'type': editedFacts["useCode"] if editedFacts.get("useCode") != None else "",
        'bedrooms': editedFacts["bedrooms"] if editedFacts.get("bedrooms") != None else "",
        'bathrooms': editedFacts["bathrooms"] if editedFacts.get("bathrooms") != None else "",
        'yearBuilt': editedFacts["yearBuilt"] if editedFacts.get("yearBuilt") != None else "",
        'squareFeet': editedFacts["finishedSqFt"] if editedFacts.get("finishedSqFt") != None else ""
    }
    return JsonResponse(final_dict)
