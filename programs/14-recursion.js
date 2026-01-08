const user = {
  name: "Abhishek",
  age: 28,
  address: {
    personal: {
      city: "Vaishali",
      area: "Bhagwanpur",
    },
    office: {
      city: "Noida",
      area: "Sector 16",
    },
  },
};

/* {
	  user_name: "Abhishek",
	  user_age: 28,
	  user_address_personal_city: "Vaishali",
	  user_address_personal_area: "Bhagwanpur",
	  user_address_office_city: "Noida",
	  user_address_office_area: "Sector 16"
	} */

let result = {};

function printObj(parent, user) {
  for (const key in user) {
    if (typeof user[key] === "object") {
      printObj(parent + "_" + key, user[key]);
    } else if (Array.isArray(user[key])) {
    } else {
      result[parent + "_" + key] = user[key];
    }
  }
}

printObj("user", user);
console.log(result);
