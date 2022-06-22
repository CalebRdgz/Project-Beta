from django.contrib import admin

# Register your models here.
from .models import SalesForm, SalesPerson, Customer, Sold

@admin.register(Sold)
class SoldAdmin(admin.ModelAdmin):
    pass

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    pass

@admin.register(SalesPerson)
class SalesPersonAdmin(admin.ModelAdmin):
    pass

@admin.register(SalesForm)
class SalesFormAdmin(admin.ModelAdmin):
    pass
