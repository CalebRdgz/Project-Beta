# CarCar

Team:



* Jack Lemieux - Sales microservice
* Cooper Edmondson - Services microservice


## Design
Look at Excalidraw.png for design. 

## Service microservice: Cooper Edmondson
(To make the code work on the service end 3 objects must be created within the admin. On the service part , create three objects: 1: "SUBMITTED", 2: "COMPLETED", 3: "CANCELLED" . THis allows for the buttons to work, and for them to change the state of the appointment. Once the button is clicked, refresh the page and everything should work properly!)

The service microservice needs 2 lists, and 2 forms.

The first list is a table that will display the: status of the appointment(allowing the user to update the status with two buttons), the vin, customer name, technician, reason, date, time, and if the car is a “vip” (which means if the vin matches the vin from a car that was sold by the dealership).

The second list is another table that shows the same things (without the buttons) but allows the user to see the service history of a vin. There is a search-bar on the page and will update the page on user input. 


The first form is to create a Technician. This will submit and gives access to that object (aka the technician) to the two lists. 

The second form is to create an appointment. The form for this allows the user to create an appointment using the vin (user created , the backend checks if this matches one that was sold from the inventory) , technician (which is a dropdown to choose which technician), date/time (this part was tricky. I had to use charFields for both of these in my model but in the front-end display them as regular date and time types), and the customer name. 

On the front-end I also added success messages to the forms I did to create a better user-experience. 

## Sales microservice: Jack Lemieux

Three forms need to be created for Sales Microservice. The sales person form will include a name and an employee number. Potential customer form will include a name, their address, and a phone number. They will be attached to the sold status/list of a vehicle if they purchase it. Lastly, a sale record form will be added allowing a sales person to mark a car as sold. It will also have mandetory feilds for customer and sales person as well as a recorded price which will be stored in app. These three forms will have Nav Bar links that will be part of the SPA.

These forms ended up being fairly simple until I tried to implement the SalesForm. Using multiple foreign key relationships caused some errors but the real issue was applying the Sold class to the form and making the vin field a OnetoOne so their could not be repeats. 

The full list of the sales was also easy enough once we implemented the data in the index.js. What was really hard was having the sales list populate the full list after I implemented the dropdown selector. This kept auto filling to the first Sales Rep until I set a base option before my mapping in the dropdown. It turned out much cleaner than anticipated but this was by far the hardest part of the project.  


