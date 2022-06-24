from django.db import models
from django.urls import reverse
from django.core.exceptions import ObjectDoesNotExist


# # Create your models here.
class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return self.vin


class SalesPerson(models.Model):
    name = models.CharField(max_length=255, null=True)
    employee_number = models.IntegerField(null=True)

    def __str__(self):
        return self.name


class Customer(models.Model):
    name = models.CharField(max_length=255, null=True)
    address = models.CharField(max_length=255, null=True)
    phone_number = models.BigIntegerField(null=True)

    def __str__(self):
        return self.name


class SalesForm(models.Model):
    sales_person = models.ForeignKey(SalesPerson, on_delete=models.PROTECT, null=True)
    customer = models.ForeignKey(Customer, on_delete=models.PROTECT, null=True)
    vin = models.OneToOneField(
        AutomobileVO,
        related_name="+",
        on_delete=models.PROTECT,
        null=True,
    )
    price = models.PositiveIntegerField()
    
    # def __str__(self):
    #     return self.vin

    def sold_car(self):
        try:
            self.sold
        except ObjectDoesNotExist:
            Sold.objects.create(sales_form=self)

class Sold(models.Model):
    sold = models.DateTimeField(auto_now_add=True, null=True)

    sales_form = models.OneToOneField(
        SalesForm,
        related_name='sold',
        on_delete=models.PROTECT,
        null=True
    )