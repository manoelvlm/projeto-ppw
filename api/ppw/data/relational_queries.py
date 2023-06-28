from django.db.models import Count, IntegerField, Q
from django.db.models.functions import Cast, Substr
from ppw.models import Investidor


# Qual é a distribuição de idade entre os investidores cadastrados no programa Tesouro Direto?
def age_distribution_query(min_age, max_age):
    return Investidor.objects.filter(age__range=(min_age, max_age)).values('age').annotate(total=Count('age'))

# Quais são as três profissões mais comum entre os investidores?
def top_3_most_common_jobs_query():
    return (
        Investidor.objects.values("carreer")
        .annotate(carrer_count=Count("carreer"))
        .order_by("-carrer_count")[:3]
    )

# Qual é a proporção de investidores ativos e inativos?
def active_inactive_investidors_query():
    return Investidor.objects.values("account_status").annotate(
        total=Count("account_status")
    )

# Qual é o estado com o maior número de investidores registrados?
def state_with_most_investidors_query():
    return (
        Investidor.objects.values("state")
        .annotate(state_count=Count("state"))
        .order_by("-state_count")[:1]
    )

# Quais são as três cidades com os maiores números de investidores registrados por estado? 
def city_with_most_investidors_query(state):
    return (
        Investidor.objects.filter(state=state)
        .values("city")
        .annotate(city_count=Count("city"))
        .order_by("-city_count")[:3]
    )

# Qual é a relação entre estado civil e a atividade dos investidores no último ano?
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

# Qual é a proporção de gêneros entre os investidores?
def investidors_genre_query(age):
    return Investidor.objects.filter(age=age).values("age", "genre").annotate(total=Count("id"))

# Qual é a tendência de adesão ao Tesouro Direto ao longo do tempo (anual)?
def accession_trend_by_time_query():
    return (
        Investidor.objects
        .all()
        .annotate(year=Cast(Substr('accession_date', 7), output_field=IntegerField()))
        .values("year")
        .annotate(total_by_year=Count("year"))
        .order_by('-year')
    )

# Existe alguma correlação entre a profissão do investidor e sua atividade no último ano?
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

# Qual é a profissão mais comum entre os investidores ativos no último ano?
def most_common_job_query():
    return (
        Investidor.objects.values("carreer")
        .annotate(carrer_count=Count("carreer"))
        .filter(has_activity_last_year="S")
        .order_by("-carrer_count")[:1]
    )
