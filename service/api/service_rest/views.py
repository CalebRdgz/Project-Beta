
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from django.shortcuts import render
from common.json import ModelEncoder
# Create your views here.
from .models import Appointment, AutomobileVO, Technician, Status


class StatusEncoder(ModelEncoder):
    model = Status
    properties = ["name"]

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = ["technician", "employee_number"]


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "is_vip", "id"]
    


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
    "id",
    "customer",
    "date",
    "time",
    "reason",
    "vin",
    "technician",
    "status",
    ]
    encoders = {
        "technician": TechnicianEncoder(),
        "status": StatusEncoder(),
    }
    def get_extra_data(self, o):
        try:
            AutomobileVO.objects.get(vin=o.vin)
            return {"vip": "👑"}
        except:
            return {"vip": "❌"}

        
@require_http_methods(["GET"])
def api_list_vins(request):
    if request.method == "GET":
        vin = AutomobileVO.objects.all()
        return JsonResponse(
            {'vin': vin},
            encoder = AutomobileVOEncoder,
            safe=False,
        )

@require_http_methods(["GET"])
def api_all_appointments(requests):
    history = Appointment.objects.all()
    return JsonResponse(
        history,
        encoder=AppointmentEncoder,
        safe=False
    )


#Method for Appointment Lists
@require_http_methods(["GET", "POST"])
def api_list_appointment(request):
    if request.method == "GET":
        status = Status.objects.get(name="SUBMITTED")
        appointment = Appointment.objects.filter(status=status)
        return JsonResponse(
            {'appointment': appointment},
            encoder=AppointmentEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        try:
            technician = Technician.objects.get(technician =content['technician'])
            content['technician'] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "something went wrong"}
            )
        appointment = Appointment.create(**content)  #remove the objects in case
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False
        )

#Method for Appointment Details
@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_appointment(request, pk):
    if request.method == "GET":
        appointment = Appointment.objects.get(id=pk)
        return JsonResponse(
            {'appointment': appointment},
            encoder=AppointmentEncoder,
            safe=False
        )
    elif request.method == "DELETE":
        count, _ = Appointment.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        try:
            if "technician" in content:
                technician = Technician.objects.get(id=content["technician"])
                content["technician"] = technician
            elif "vin" in content:
                vin = AutomobileVO.objects.get(vin=content["vin"])
                content["vin"] = vin
        except AutomobileVO.DoesNotExist:
                return JsonResponse(
                    {"message": "Vin Does Not Exist"},
                    status= 400,
                )
        appointment = Appointment.objects.filter(id=pk).update(**content)
        return JsonResponse(
            {'appointment': appointment},
            encoder=AppointmentEncoder,
            safe=False
        )



# Methods for Technicians List

@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technician = Technician.objects.all()
        return JsonResponse(
            {'technician': technician},
            encoder=TechnicianEncoder,
            safe=False
        )
    else:
        content = json.loads(request.body)
        technicians = Technician.objects.create(**content)
        return JsonResponse(
            {'technician': technicians},
            encoder=TechnicianEncoder,
            safe=False
        )

# Methods for Technicians Detail

@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_technicians(request, pk):
    if request.method == "GET": 
        technician = Technician.objects.get(id=pk)
        return JsonResponse(
            {'technician': technician},
            encoder=TechnicianEncoder,
            safe=False
        )
    elif request.method == "DELETE":
        count, _ = Technician.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        technician = Technician.objects.filter(id=pk).update(**content)
        return JsonResponse(
            {"message": "Updated Technician Name"},
            encoder=TechnicianEncoder,
            safe=False
        )



@require_http_methods(["PUT"])
def completed_status(request, pk):
    stat = Appointment.objects.get(id=pk)
    stat.completed()
    return JsonResponse(
        stat,
        encoder=AppointmentEncoder,
        safe=False
    )

@require_http_methods(["PUT"])
def cancelled_status(request, pk):
    status = Appointment.objects.get(id=pk)
    status.cancelled()
    return JsonResponse(
        status,
        encoder=AppointmentEncoder,
        safe=False
    )