# Generated by Django 4.0.3 on 2022-06-21 03:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0008_appointment_car_vin'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='car_vin',
        ),
    ]
