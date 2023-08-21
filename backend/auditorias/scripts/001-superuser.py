from django.contrib.auth.models import User


def run(*args):
    User.objects.create_superuser(
        username='rodri', email='cr.rodrigocasas@gmail.com', password='rodri'
    )
    print("Superusuario RODRI creado con éxito.")
