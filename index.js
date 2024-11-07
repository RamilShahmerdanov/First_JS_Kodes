 let login = confirm("Do you want to login our system");
 let names = ["ramil","elgun","huseyn","eli"];
 let pass =135246 ;

 if(login){
    let logindata = prompt("Please write your name")
    let loginame = names.includes(logindata);
    if (loginame){
        let loginpass = prompt(`${logindata}, pleace enter your password`);
        if(parseInt(loginpass)===pass){
            alert(`${logindata}, welcome to our system!`);
        }else{
            alert("Incorrect password! Try again.");
        }
    }else{
        alert(`${logindata}, you are not a member of our system.`);
        let signup =confirm ("Do dou want to creat an accout ? ")
        if(signup){
            let creat = prompt("Write your name")
            let creat1 = prompt("Write your password")
            names.push(creat);

            alert(`${creat},congratulations you are already a member in our system`);
            alert("Please log in again!");
            

        }
    }
 }else{
    alert("You chose not to login.");
 }
