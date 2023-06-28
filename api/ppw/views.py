from django.http import JsonResponse
from ppw.data.relational_queries import (
    accession_trend_by_time_query, active_inactive_investidors_query,
    age_distribution_query, carreer_investidor_activity_year_query,
    city_with_most_investidors_query, civil_status_investidors_activity_query,
    investidors_genre_query, most_common_job_query,
    state_with_most_investidors_query, top_3_most_common_jobs_query)


def age_distribution_view(request):
    age_min = request.GET.get('age_min', 18)
    age_max = request.GET.get('age_max', 100)
    age_distribution = list(age_distribution_query(age_min, age_max))
    return _build_response(age_distribution)

def top_3_most_common_jobs_view(request):
    top_job = list(top_3_most_common_jobs_query())
    return _build_response(top_job)

def active_inactive_investidors_view(request):
    active_inactive_data = list(active_inactive_investidors_query())
    return _build_response(active_inactive_data)

def state_most_investidors_lives_view(request):
    state_most_investidors = list(state_with_most_investidors_query())
    return _build_response(state_most_investidors)

def city_most_investidors_lives_view(request):
    state = request.GET.get('state')
    city_most_investidors = list(city_with_most_investidors_query(state))
    return _build_response(city_most_investidors)

def investidors_genre_view(request):
    age = request.GET.get('age')
    investidors_genre = list(investidors_genre_query(age))
    return _build_response(investidors_genre)

def accession_trend_view(request):
    accession_trend = list(accession_trend_by_time_query())
    print (accession_trend)
    return _build_response(accession_trend)

def most_common_carrer_view(request):
    most_common_job = list(most_common_job_query())
    return _build_response(most_common_job)

def investidor_carreer_year_view(request):
    activity_investidor_carreer = list(carreer_investidor_activity_year_query())
    return _build_response(activity_investidor_carreer)

def civil_status_investidors_activity_view(request):
    civil_status_investidors = list(civil_status_investidors_activity_query())
    return _build_response(civil_status_investidors)


def _build_response(result):
    return JsonResponse({'result': result})
