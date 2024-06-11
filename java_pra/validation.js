class validation{
    constructor(email) {
        this.email = email;
    }
     validate() {
        let pattern = /[A-z0-9._]+@[A-z0-9]+\.[A-z]/;
       
        
         if (this.email.search(pattern) == -1) {
            alert("Email is not correct"); 
         }
         
        
        else {
            alert(" Email Address is valid");
        }
           
        }
}