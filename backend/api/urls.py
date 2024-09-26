from django.urls import path
from django.http import JsonResponse
from . import views

def root_view(request):
    return JsonResponse({'message': 'Welcome to the API'})

urlpatterns = [
    path('', root_view),
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
]