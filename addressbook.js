class Contact {
    constructor(FirstName, LastName, Address, City, State, Zip, PhoneNumber, Email) {

        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Address = Address;
        this.City = City;
        this.State = State;
        this.Zip = Zip;
        this.PhoneNumber = PhoneNumber;
        this.Email = Email;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];}
    
    addNewContact(contact) {
    this.contacts.push(contact);
    console.log("Contact Added " + contact.FirstName);}

    displayContactDetails() {
    this.contacts.forEach(element => {
        console.log("Full Name: "+element.FirstName + " " + element.LastName);
    });}
}



const addressbook=new AddressBook();
const Contact1 = new Contact(
    FirstName= "Soundarya",
    LastName= "S",
    Address= "Guindy",
    City= "Chennai",
    State= "TN",
    Zip ="689642",
    PhoneNumber= "1234567890",
    Email= "soundarya@gmail.com");
const Contact2 = new Contact(
    FirstName="Swetha",
    LastName= "S",
    Address= "Adyar",
    City= "Chennai",
    State= "TN",
    Zip= "123456",
    PhoneNumber= "1023445678",
    Email= "swetha@gmail.com");

addressbook.addNewContact(Contact1);
addressbook.addNewContact(Contact2);
addressbook.displayContactDetails();