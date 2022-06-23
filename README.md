# CarCar

Team:


* Person 1 - Which microservice?
* Person 2 - Which microservice? Cooper Edmondson (Service)

* Jack Lemieux - Sales microservice
* Person 2 - Which microservice?


## Design

## Service microservice

The service microservice needs 2 lists, and 2 forms.

The first list is a table that will display the: status of the appointment(allowing the user to update the status with two buttons), the vin, customer name, technician, reason, date, time, and if the car is a “vip” (which means if the vin matches the vin from a car that was sold by the dealership).

The second list is another table that shows the same things (without the buttons) but allows the user to see the service history of a vin. There is a search-bar on the page and will update the page on user input. 


The first form is to create a Technician. This will submit and gives access to that object (aka the technician) to the two lists. 

The second form is to create an appointment. The form for this allows the user to create an appointment using the vin (user created , the backend checks if this matches one that was sold from the inventory) , technician (which is a dropdown to choose which technician), date/time (this part was tricky. I had to use charFields for both of these in my model but in the front-end display them as regular date and time types), and the customer name. 

On the front-end I also added success messages to the forms I did to create a better user-experience. 

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
Three forms need to be created for Sales Microservice. The sales person form will include a name and an employee number. They will be allowed to set a sold status/move cars in the inviintory to a seperate list, stopping it from being sold/seen in the inventory. Potential customer form will include a name, their address, and a phone number. They will be attached to the sold status/list of a vehicle if they purchase it. Lastly, a sale record form will be added allowing a sales person to mark a car as sold/in the sold list. It will also have mandetory feilds for customer and sales person as well as a recorded price which will be stored in app. These three forms will have Nav Bar links that will be part of the SPA. 
