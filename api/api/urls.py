"""
URL configuration for api project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from ppw import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/login', views.login, name='login'),
    path('api/signup', views.signup, name='signup'),
    path('api/age-distribution', views.age_distribution_view, name='age-distribution'),
    path('api/top-n-common-jobs', views.top_3_most_common_jobs_view, name='top-3-common-jobs'),
    path('api/active-inactive-investidors', views.active_inactive_investidors_view, name='active-inactive-investidors'),
    path('api/state-most-investidors', views.state_most_investidors_lives_view, name='state-most-investidors'),
    path('api/city-most-investidors', views.city_most_investidors_lives_view, name='city-inactive-investidors'),
    path('api/investidors-genre', views.investidors_genre_view, name='investidors-genre'),
    path('api/accession-date-trend', views.accession_trend_view, name='accession-date-trend'),
    path('api/most-common-jobs-year-activities', views.most_common_carrer_view, name='most-common-jobs-activities'),
    path('api/investidor-activity-year-carreer', views.investidor_carreer_year_view, name='investidor-activity-year-carreer'),
    path('api/civil-status-year-activity', views.civil_status_investidors_activity_view, name='civil-status-year-activity'),
]
