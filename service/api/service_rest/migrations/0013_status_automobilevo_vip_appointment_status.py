# Generated by Django 4.0.3 on 2022-06-21 22:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0012_remove_appointment_status_delete_status'),
    ]

    operations = [
        migrations.CreateModel(
            name='Status',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=15, unique=True)),
            ],
            options={
                'verbose_name_plural': 'statuses',
            },
        ),
        migrations.AddField(
            model_name='automobilevo',
            name='vip',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='appointment',
            name='status',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='appointments', to='service_rest.status'),
        ),
    ]
