# Generated by Django 4.0.3 on 2022-06-21 02:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0006_automobilevo_color'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='automobilevo',
            name='color',
        ),
    ]
