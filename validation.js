class validation {
     constructor(email) {
    this.email = email;
     }
    validate() {
        let pattern = /[A-z0-9._]+@[A-z0-9]+\.[A-z]{2,4}/;
        if (this.email == "") {
            alert("Mail box cannot be empty");
        }
        else if (this.email.search(pattern) == -1) {
            alert("Enter valid mail address"); 
        }
        
        else {
            alert(" valid email Address ");
        }
           
        }
}
