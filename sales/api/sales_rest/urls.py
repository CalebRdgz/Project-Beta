from django.urls import path
from .views import (
    detail_customer,
    list_customers, 
    detail_sales_persons,
    list_sales_persons,
    sales,
    AutomobileVOS
    )

urlpatterns = [
    path('automobilevos/', AutomobileVOS, name='automobilevos'),
    path('sales/', sales, name='sales'),
    path("customers/", list_customers, name='list_customers'),
    path("customers/<int:pk>/", detail_customer, name='detail_customer'),
    path("salespersons/", list_sales_persons, name='list_sales_persons'),
    path("sales_persons/<int:pk>/", detail_sales_persons, name='detail_sales_persons'),
]