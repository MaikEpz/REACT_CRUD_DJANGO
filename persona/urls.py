from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from persona import views

router = routers.DefaultRouter()
router.register(r'person', views.PersonaView,'person')
urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title='Persona API'))
]

#genera get, post, put, delete
