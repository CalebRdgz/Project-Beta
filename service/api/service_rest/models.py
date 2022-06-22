from tabnanny import verbose
from django.db import models
from django.urls import reverse
# Create your models here.


class Status(models.Model):
    name = models.CharField(max_length=15, unique=True)

    class Meta:
        verbose_name_plural = "statuses"


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    vip = models.BooleanField(default=True)
    
    def __str__(self):
        return self.vin



class Technician(models.Model):
    technician = models.CharField(max_length=100)
    employee_number = models.CharField(max_length=50, null=True) #unique=True
    # create an employee number
    def __str__(self):
        return self.technician




class Appointment(models.Model):
    customer = models.CharField(max_length=100)
    date = models.CharField(max_length=30, null=True, blank=False)
    time = models.CharField(max_length=20, null=True, blank=False)
    reason = models.CharField(max_length=100)
    vin = models.CharField(max_length=17, unique=True, null = True)
    technician = models.ForeignKey(
        Technician,
        related_name="+",
        on_delete=models.PROTECT,
    )
    status = models.ForeignKey(
        Status,
        related_name="appointments",
        on_delete=models.PROTECT,
        null= True,
    )

    @classmethod
    def create(cls, **kwargs):
        kwargs["status"] = Status.objects.get(name="SUBMITTED")
        appointment = cls(**kwargs)
        appointment.save()
        return appointment

    def completed(self):
        status = Status.objects.get(name="COMPLETED")
        self.status = status
        self.save()

    def cancelled(self):
        status = Status.objects.get(name="CANCELLED")
        self.status = status
        self.save()



    def __str__(self):
        return self.customer


