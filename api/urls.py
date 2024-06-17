from django.urls import path
from . import views

urlpatterns = [
    path("", views.getRoutes, name="routes"),
    path("notes/", views.getNotes, name="notes"),
    # path("notes/create/", views.createNote, name="create-note"),
    path("notes/<int:pk>/", views.getNote, name="note"),
    # path("notes/<int:pk>/update/", views.updateNote, name="update-note"),
    # path("notes/<int:pk>/delete/", views.deleteNote, name="delete-note"),
    
]