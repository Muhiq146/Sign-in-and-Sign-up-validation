const data = [];

alpha = () => {
  if (signupVal()) {
    const a = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      pass: document.getElementById("pass").value,
    };
    data.push(a);
    console.log(data);
    localStorage.setItem("key", JSON.stringify(data));

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
  }
};

// To display the signUp section
display = () => {
  document.getElementById("signUp").innerHTML = `
    <h3 style="text-align: center; font-weight: 300; line-height: 1.2">
            Sign up
          </h3>
          <input id="name" class="m-2 form-control" onchange="change('name')" placeholder="Name" type="text" />
          <div id="nameMsg" style="color: red;"></div>
          <input id="email" class="m-2 form-control" onchange="change('email')" placeholder="Email" type="email" />
          <div id="emailMsg" style="color: red;"></div>
          <input id="pass" maxlength="6" class="m-2 form-control" onchange="change('pass')" placeholder="Password" type="password" />
          <div id="passMsg" style="color: red;"></div>
          <div style="display: flex; justify-content: center; margin-top: 5%">
          <button onclick="alpha()" class="m-2 btn btn-primary">Sign Up</button>
          </div>`;

  document.getElementById("signIn").innerHTML = `
    <h3 style="text-align: center">Welcome Back!</h3>
          <p class="m-2" style="text-align: center">To keep conected with us please login with your personal info</p>
          <div style="display: flex; justify-content: center; margin-top: 5%">
          <button onclick="display2()" class="m-2 btn btn-primary" >Sign In</button>
          </div>`;

  document.getElementById("signIn").style.backgroundColor = "skyblue";
  document.getElementById("signUp").style.backgroundColor = "white";
};

//  To display the signIn section
display2 = () => {
  document.getElementById("signUp").innerHTML = `
    <h3 style="text-align: center">Hello Friend!</h3>
          <p style="text-align: center">Enter your personal details and start journey with us</p>
          <div style="display: flex; justify-content: center; margin-top: 5%">
          <button class="m-2 btn btn-primary" onclick="display()" id="btn-up">Sign Up</button>
          </div>`;

  document.getElementById("signIn").innerHTML = `
    <h3 style="text-align: center; font-weight: 300; line-height: 1.2">
            Sign in
          </h3>
          <input id="emaVal" class="m-2 form-control" onchange="change('emaVal')" placeholder="Email" type="email" />
          <div id="emaValMsg" style="color: red;"></div>
          <input id="passVal" maxlength="6" class="m-2 form-control" onchange="change('passVal')" placeholder="Password" type="password" />
          <div id="passValMsg" style="color: red;"></div>
          <div style="display: flex; justify-content: center; margin-top: 5%">
          <button class="m-2 btn btn-primary" onclick="dis()" id="btn-in">Sign In</button>
          </div>`;

  document.getElementById("signIn").style.backgroundColor = "white";
  document.getElementById("signUp").style.backgroundColor = "skyblue";
};
console.log(JSON.parse(localStorage.getItem("key")));
// For the validation of data to signIn
dis = () => {
  if (signinVal()) {
    var h = JSON.parse(localStorage.getItem("key"));
    for (var i = 0; i < data.length; i++) {
      l = h[i].name;
      if (
        document.getElementById("emaVal").value === h[i].email &&
        document.getElementById("passVal").value === h[i].pass
      ) {
        console.log("valid");
        window.location.href = "dashboard.html";
        document.getElementById("header").value = `Hello ${l}`;
      } else {        
        document.getElementById('passValMsg').innerHTML="Invalid password or email!"
      }
    }
    document.getElementById("emaVal").value = "";
    document.getElementById("passVal").value = "";
  }
};

// Signup validation
signupVal = () => {
  if (
    emailVal(document.getElementById("email").value) ||
    document.getElementById("name").value == "" ||
    document.getElementById("email").value == "" ||
    document.getElementById("pass").value == ""
  ) {
    if(emailVal(document.getElementById("email").value)){
      document.getElementById('email').style.borderColor = "red";
      document.getElementById('emailMsg').innerHTML = "Please input correct e-mail, this is not a valid e-mail!";
    }
    if(document.getElementById("name").value == ""){
      warrn('name');
    }
    if(document.getElementById("email").value == ""){
      warrn('email');
    }
    if(document.getElementById("pass").value == ""){
      warrn('pass');
    }
    // alert("All fields are necessary, please fill all the fields.");
    return false;
  } else {
    return true;
  }
};

// SignIn validation
signinVal = () => {
  if (
    emailVal(document.getElementById("emaVal").value) ||
    document.getElementById("emaVal").value == "" ||
    document.getElementById("passVal").value == ""
  ) {
    if(emailVal(document.getElementById("emaVal").value)){
      document.getElementById('emaVal').style.borderColor = "red";
      document.getElementById('emaValMsg').innerHTML = "Please input correct e-mail, this is not a valid e-mail!";
    }
    if(document.getElementById("emaVal").value == ""){
      warrn('emaVal');
    }
    if(document.getElementById("passVal").value == ""){
      warrn('passVal');
    }
    // alert("All fields are required, please fill all the fields.");
    return false;
  } else {
    return true;
  }
};

// email validation
emailVal = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return false;
  } else {
    // alert("You have entered an invalid email address!");
    return true;
  }
};

warrn = (ast) => {
  document.getElementById(`${ast}`).style.borderColor = "red";
  document.getElementById(`${ast}Msg`).innerHTML = "Please fill this feild!";
}

change = (sat) => {
  document.getElementById(`${sat}`).style.removeProperty("border-color");
  document.getElementById(`${sat}Msg`).innerHTML = "";
}