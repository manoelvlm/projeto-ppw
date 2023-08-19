import json

import requests
from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import (DateRange, Dimension, Metric,
                                                RunReportRequest)
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google.oauth2.service_account import \
    Credentials as ServiceAccountCredentials


def sample_run_report(property_id, key_path):

    locations_list = []

    """Runs a simple report on a Google Analytics 4 property."""

    credentials = ServiceAccountCredentials.from_service_account_file(
        key_path, 
        scopes=["https://www.googleapis.com/auth/analytics.readonly"]
    )
    
    client = BetaAnalyticsDataClient(credentials=credentials)

    request = RunReportRequest(
        property=f"properties/{property_id}",
        dimensions=[Dimension(name="city"), Dimension(name='country')],
        metrics=[Metric(name="activeUsers")],
        date_ranges=[DateRange(start_date="2023-08-01", end_date="today")],
    )
    response = client.run_report(request)

    for row in response.rows:
        locations = {
            'city': row.dimension_values[0].value,
            'country': row.dimension_values[1].value,
            'access': row.metric_values[0].value
        }

        locations_list.append(locations)

    return locations_list

def get_coordinates(locations_list):

    coordinates = []

    for location in locations_list:
        if location['city'] == '(not set)':
            r = requests.get(f'https://nominatim.openstreetmap.org/search?country={location["country"]}&format=json')
        else:
            r = requests.get(f'https://nominatim.openstreetmap.org/search?city={location["city"]}&country={location["country"]}&format=json')

        data = r.json()
        
        coord = {
            'lat': data[0]['lat'],
            'lon': data[0]['lon']
        }
        
        coordinates.append(coord)

    return coordinates

def make_response(locations_list, coordinates):
    response = []
    
    for i, location in enumerate(locations_list):
        merged_data = location
        merged_data.update(coordinates[i])
        response.append(merged_data)
        
    return response

if __name__ == '__main__':
    locations_list = sample_run_report('402656094', '/home/manoel/projeto-ppw/scripts/GA/credentials.json')
    coordinates = get_coordinates(locations_list)
    
    response = make_response(locations_list, coordinates)
    print(response)

