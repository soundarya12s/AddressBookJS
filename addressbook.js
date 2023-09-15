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

    EditContact(contact) {
        validate(contact);
        this.contacts.forEach(element => {
            if (contact.FirstName == element.FirstName) {
                element.LastName = contact.LastName;
                element.Address = contact.Address;
                element.City = contact.City;
                element.State = contact.State;
                element.Zip = contact.Zip;
                element.PhoneNumber = contact.PhoneNumber;
                element.Email = contact.Email;
                console.log("Edited Address Book Successfully");
            }
        });}


        DeleteContact(name) {
            this.contacts.forEach(element => {
                if (name == element.FirstName) {
                    this.contacts.pop(element);
                    console.log(name + " deleted Successfully");
                }
            });
        }

        duplicateContact(contact) {
            if (this.contacts.some((element) => element.FirstName == contact.FirstName)) {
                console.log("Contact already Exists");
            }
            else {
                this.addNewContact(contact)
            }
        }

        CountContact() {
            const count = this.contacts.reduce((count, sum) => {
                return count + 1
            }, 0);
            console.log("Total number of contacts in the Addressbook: " + count);
        }

    displayContactDetails() {
    this.contacts.forEach(element => {
        console.log("Full Name: "+element.FirstName + " " + element.LastName);
    });}
}



const addressbook=new AddressBook();
const Contact1 = new Contact(
    FirstName= "Soundarya",
    LastName= "Sathya",
    Address= "Guindy",
    City= "Chennai",
    State= "TamilNadu",
    Zip ="689642",
    PhoneNumber= "1234567890",
    Email= "soundarya@gmail.com");
const Contact2 = new Contact(
    FirstName="Swetha",
    LastName= "Sarathy",
    Address= "Adyar",
    City= "Chennai",
    State= "TamilNadu",
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
    State = "TamilNadu",
    Zip = "123456",
    PhoneNumber = "1023445678",
    Email = "Shri@gmail.com");
    addressbook.addNewContact(Contact3);

  

addressbook.DeleteContact("Reya");
addressbook.CountContact();
addressbook.displayContactDetails();
addressbook.duplicateContact(Contact3);