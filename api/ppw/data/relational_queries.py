from django.db.models import Count, Q
from django.db.models.functions import Cast, Substr
from django.db.models import IntegerField
from ppw.models import Investidor


def age_distribution_query():
    return Investidor.objects.values("age").annotate(total=Count("age"))

def top_3_most_common_jobs_query():
    return (
        Investidor.objects.values("carreer")
        .annotate(carrer_count=Count("carreer"))
        .order_by("-carrer_count")[:3]
    )

def active_inactive_investidors_query():
    return Investidor.objects.values("account_status").annotate(
        total=Count("account_status")
    )

def state_with_most_investidors_query():
    return (
        Investidor.objects.values("state")
        .annotate(state_count=Count("state"))
        .order_by("-state_count")[:1]
    )

def city_with_most_investidors_query():
    return (
        Investidor.objects.values("city")
        .annotate(city_count=Count("city"))
        .order_by("-city_count")[:1]
    )

def civil_status_investidors_activity_query():
    return (
        Investidor.objects.values("civil_state")
        .annotate(
            had_activity=Count(
                "had_activity_last_year", filter=Q(had_activity_last_year="S")
            )
        )
        .annotate(
            had_not_activity=Count(
                "had_activity_last_year", filter=Q(had_activity_last_year="N")
            )
        )
    )

def investidors_genre_query():
    return Investidor.objects.values("genre").annotate(total=Count("genre"))

def accession_trend_by_time_query():
    return (
        Investidor.objects
        .all()
        .annotate(year=Cast(Substr('accession_date', 7), output_field=IntegerField()))
        .values("year")
        .annotate(total_by_year=Count("year"))
        .order_by('-year')
    )

def carreer_investidor_activity_year_query():
    return (
        Investidor.objects.values("carreer")
        .annotate(
            had_activity=Count(
                "had_activity_last_year", filter=Q(had_activity_last_year="S")
            )
        )
        .annotate(
            had_not_activity=Count(
                "had_activity_last_year", filter=Q(had_activity_last_year="N")
            )
        )
    )

def most_common_job_query():
    return (
        Investidor.objects.values("carreer")
        .annotate(carrer_count=Count("carreer"))
        .filter(has_activity_last_year="S")
        .order_by("-carrer_count")[:1]
    )
