from ppw.data.relational_queries import (
    age_distribution_query,
    top_3_most_common_jobs_query,
    active_inactive_investidors_query,
    state_with_most_investidors_query,
    city_with_most_investidors_query,
    investidors_genre_query,
    accession_trend_by_time_query,
    most_common_job_query,
    carreer_investidor_activity_year_query,
    civil_status_investidors_activity_query
)
from django.http import JsonResponse

def age_distribution_view(request):
    age_distribution = list(age_distribution_query())
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
    city_most_investidors = list(city_with_most_investidors_query())
    return _build_response(city_most_investidors)

def investidors_genre_view(request):
    investidors_genre = list(investidors_genre_query())
    return _build_response(investidors_genre)

def accession_trend_view(request):
    accession_trend = list(accession_trend_by_time_query())
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
