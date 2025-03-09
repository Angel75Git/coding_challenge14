//Task 2
//Getting parent div ticketContainer
const dashBoard = document.getElementById("ticketContainer");

//New Support Ticket
function newTicket(name, issue, Plevel) {
    const ticket = document.createElement("div");
    //Setting Attributes to cards
    ticket.setAttribute("class", "card-support")
    ticket.setAttribute("id", name)

    //Name of Customer
    const customerName = document.createElement("h1");
    customerName.textContent = name;
    
    //Their Issue Description
    const customerIssue = document.createElement("p");
    customerIssue.textContent = issue;

    //Priority Level + Categorizing level and adding class
    const customerLevel = document.createElement("label")
    customerLevel.textContent = Plevel;
    if (Plevel === "High") {
        ticket.classList.add("High");
    }    else if(Plevel === "Medium"){
            ticket.classList.add("Medium");
    }    else if(Plevel == "Low"){
            ticket.classList.add("Low");
    }

    //Appending all Attributes to ticket
    ticket.appendChild(customerName);
    ticket.appendChild(customerIssue);
    ticket.appendChild(customerLevel);

    //Adding a Reemove Button
    const resolveBtn = document.createElement("button");
    resolveBtn.textContent = "Resolve";

    //setting button attributes
    resolveBtn.setAttribute("class", "Remove-button")
    resolveBtn.setAttribute("id", "Remove-ticket")

    //Part of Task 4 - Having the Resolve button remove the ticket
    resolveBtn.addEventListener("click", function(event){
        ticket.remove() 
        event.stopPropagation() //In order that the log doesn't appear
    })


    ticket.appendChild(resolveBtn)
    //Connecting the ticket to dashboard
    dashBoard.appendChild(ticket)
}

//New entries - support Tickets
newTicket("Paul", "Too long wait times", "High")
newTicket("Zack", "Too short wait times", "Low")
newTicket("Betty", "Not enough lighting", "Medium")
newTicket("Anna", "Lost my purse", "High")

//Task 3
//Collecting ALL High Class tickets
nodeList = document.querySelectorAll(".High")

//Converting NodeList to array
const highArray = Array.from(nodeList)
//Highlighting the Background to red
highArray.forEach(ticket => {
    ticket.style.backgroundColor = "red"
    ticket.style.border = "2px solid black"
})

//Task 4
// Simply logging each time user clicks the ticket container
document.getElementById("ticketContainer").addEventListener("click", function(){
    console.log("The ticketContainer has been Clicked!");
    
})