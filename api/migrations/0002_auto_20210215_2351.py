# Generated by Django 3.1.5 on 2021-02-16 07:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='vehicledata',
            old_name='Bycycle',
            new_name='Bicycle',
        ),
    ]
