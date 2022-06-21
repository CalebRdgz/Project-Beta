
from json import encoder
import re
from django.http import JsonResponse
from django.shortcuts import render
import json
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
from .models import SalesPerson, Customer, SalesForm

# Create your views here.

class SalesPersonListEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["name"]


class SalesPersonDetailEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["name", "employee_number"]


class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = ["name"]


class CustomerDetailEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone_number" 
    ]


class SalesFormListEncoder(ModelEncoder):
    model = SalesForm
    properties = [
    "sales_person",
    "customer",
    "price"
    ]


@require_http_methods(["GET", "POST"])
def list_sales_persons(request):
    if request.method == "GET":
        sales_person = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_person": sales_person},
            encoder = SalesPersonListEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            sales_person = SalesPerson.objects.create(**content)
            return JsonResponse(
                sales_person,
                encoder = SalesPersonDetailEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create Sales Rep"}
            )
            response.status_code = 400
            return response


@require_http_methods(["GET"])
def detail_sales_persons(request, pk):
    if request.method == "GET":
        try:
            sales_person = SalesPerson.objects.get(id=pk)
            return JsonResponse(
                sales_person,
                encoder = SalesPersonDetailEncoder,
                safe=False
            )
        except SalesPerson.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    else:
        try:
            content = json.loads(request.body)
            # sales_person_id = content['sales_person_id']
            # sales_person = SalesPerson.objects.objects.get(id=sales_person_id)
            # content['sales_person'] = sales_person
            sales_person = SalesPerson.objects.create(**content)
            return JsonResponse(
                sales_person,
                encoder = SalesPersonDetailEncoder,
                safe=False
            )
        except:
            response = JsonResponse(
                {"message": "Could not create Sales Rep"}
            )
            response.status_code = 400
            return response


@require_http_methods(["GET", "POST"])
def list_customers(request):
    if request.method == "GET":
        customer = Customer.objects.all()
        return JsonResponse(
            {"customer": customer},
            encoder = CustomerListEncoder,
        )
    else:
        try:
            content =json.loads(request.body)
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder = CustomerDetailEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {'message': 'Could not create new customer'}
            )
            response.status_code = 400
            return response


@require_http_methods(["GET"])
def detail_customer(request, pk):
    if request.method == "GET":
        try:
            customer = Customer.objects.get(id=pk)
            return JsonResponse(
                customer,
                encoder =CustomerDetailEncoder,
                safe = False
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response