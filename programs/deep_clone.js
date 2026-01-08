// Deep clone the object with function

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}
const employee = {
  name: "Abhishek",
  skills: {
    tech: "frontend",
    lan: {
      lan1: "C",
    },
  },
  func1: () => {
    return 1;
  },
};
const obj = deepClone(employee);
obj.name = "Anand";
obj.skills.tech = "backend";
obj.skills.lan.lan1 = "Javascript";
console.log(employee);
console.log(obj);
