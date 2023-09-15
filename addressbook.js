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

    function validate(Details) {
    console.log(Details.FirstName + " " + Details.LastName + " " + Details.Address + " " + Details.City
        + " " + Details.State + " " + Details.Zip + " " + Details.PhoneNumber + " " + Details.Email);
    if (!/^[A-Z][a-zA-Z]{2,}$/.test(Details.FirstName)) {
        throw new Error("Invalid First Name");
    }
    else if (!/^[A-Z][a-zA-Z]{2,}$/.test(Details.LastName)) {
        throw new Error("Invalid Last Name");
    }
    else if (!/^[0-9a-zA-Z]{4,}$/.test(Details.Address)) {
        throw new Error("Invalid Address");
    }
    else if (!/^[a-zA-Z]{4,}$/.test(Details.City)) {
        throw new Error("Invalid City");
    }
    else if (!/^[0-9a-zA-Z]{4,}$/.test(Details.State)) {
        throw new Error("Invalid State");
    }
    else if (!/^[0-9]{6}$/.test(Details.Zip)) {
        throw new Error("Invalid Zip");
    }
    else if (!/^[0-9]{10}$/.test(Details.PhoneNumber)) {
        throw new Error("Invalid Phone Number");
    }
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Details.Email)) {
        throw new error("Invalid Email")
    }
    else {
        addressbook.addNewContact(Details);
    }
}
    
validate(Contact1);
validate(Contact2);

const Contact3 = new Contact(
    FirstName = "Shri",
    LastName = "Mathi",
    Address = "Anna Nagar",
    City = "Chennai",
    State = "TN",
    Zip = "123456",
    PhoneNumber = "1023445678",
    Email = "Shri@gmail.com");
validate(Contact3);

addressbook.displayContactDetails();