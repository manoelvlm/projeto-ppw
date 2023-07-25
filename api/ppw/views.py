from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

import functools
import json
import os
import pyrebase
 
from ppw.data.relational_queries import (
    accession_trend_by_time_query, active_inactive_investidors_query,
    age_distribution_query, carreer_investidor_activity_year_query,
    city_with_most_investidors_query, civil_status_investidors_activity_query,
    investidors_genre_query, most_common_job_query,
    state_with_most_investidors_query, top_3_most_common_jobs_query)
 
config = {
    "apiKey": os.environ['API_KEY'],
    "authDomain": os.environ['AUTH_DOMAIN'],
    "databaseURL": os.environ['FB_DB_URL'],
    "projectId": os.environ['PROJECT_ID'],
    "storageBucket": os.environ['STORAGE_BUCKET'],
    "messagingSenderId": os.environ['SENDER_ID'],
    "appId": os.environ['APP_ID']
}
 
# Initialising database,auth and firebase for further use
firebase=pyrebase.initialize_app(config)
authe = firebase.auth()
database=firebase.database()
 
def check_user_auth(view_func):
    @functools.wraps(view_func)
    def wrapper(request, *args, **kwargs):
        if 'uuid' not in request.session:
            return _build_response({"result": "error - user must be logged"})
        return view_func(request, args, kwargs)
    return wrapper
 
@csrf_exempt
def signup(request):
     data = json.loads(request.body)
     email = data['email']
     passs = data['pass']
     try:
        user = authe.create_user_with_email_and_password(email, passs)
        uid = user['localId']
        idtoken = request.session['uid']
     except:
        return  _build_response({"result": "error to sign up"})
     return _build_response({"result": "success"})

@csrf_exempt
def login(request):
    email = request.POST.get('email')
    pasw = request.POST.get('pass')
    try:
        user = authe.sign_in_with_email_and_password(email,pasw)
    except:
        return _build_response({"result": "invalid credentials"})
    session_id = user['idToken']
    request.session['uid'] = str(session_id)
    return _build_response({"result": "success"})

@check_user_auth
def age_distribution_view(request):
    age_min = request.GET.get('age_min', 18)
    age_max = request.GET.get('age_max', 100)
    age_distribution = list(age_distribution_query(age_min, age_max))
    return _build_response(age_distribution)
 
@check_user_auth
def top_3_most_common_jobs_view(request):
    top_job = list(top_3_most_common_jobs_query())
    return _build_response(top_job)
 
@check_user_auth
def active_inactive_investidors_view(request):
    active_inactive_data = list(active_inactive_investidors_query())
    return _build_response(active_inactive_data)
 
@check_user_auth
def state_most_investidors_lives_view(request):
    state_most_investidors = list(state_with_most_investidors_query())
    return _build_response(state_most_investidors)
 
@check_user_auth
def city_most_investidors_lives_view(request):
    state = request.GET.get('state')
    city_most_investidors = list(city_with_most_investidors_query(state))
    return _build_response(city_most_investidors)
 
@check_user_auth
def investidors_genre_view(request):
    age = request.GET.get('age')
    investidors_genre = list(investidors_genre_query(age))
    return _build_response(investidors_genre)
 
@check_user_auth
def accession_trend_view(request):
    accession_trend = list(accession_trend_by_time_query())
    print (accession_trend)
    return _build_response(accession_trend)
 
@check_user_auth
def most_common_carrer_view(request):
    most_common_job = list(most_common_job_query())
    return _build_response(most_common_job)
 
@check_user_auth
def investidor_carreer_year_view(request):
    activity_investidor_carreer = list(carreer_investidor_activity_year_query())
    return _build_response(activity_investidor_carreer)
 
@check_user_auth
def civil_status_investidors_activity_view(request):
    civil_status_investidors = list(civil_status_investidors_activity_query())
    return _build_response(civil_status_investidors)
 
def _build_response(result):
    return JsonResponse({'result': result})
 