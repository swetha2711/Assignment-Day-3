
//Creating my own resume data
var Resume = {
   name: "Swetha",
   DOB: "27.11.1997",
   Emailid: "swethakrishnan2711@gmail.com",
   Qualification: "BE",
   Designation: "Developer",
   Skills: [{ 1: "Python" }, { 2: "SQL" }, { 3: "Selenium" }],
 };
 console.log(Resume);
 for (let i = 0; i < Resume.Skills.length; i++) {
 
     console.log(Resume.Skills[i]);
 }



 //Question 1:iterate using for loops
 let obj=[
   {person:"Name 1",age:"2",company:"Guvi"},
   {person:"Name 2",age:"7",company:"Guvi Geek"},
   {person:"Name 3",age:"10",company:"Guvi Geek Networks"}
]

for(let i=0;i<obj.length;i++){
  console.log(`person:${obj[i].person},age:${obj[i].age},company:${obj[i].company}`)
}

obj.forEach(function(ob){
 console.log(`person:${ob.person} age:${ob.age} company:${ob.company}`)
})

for(const key in obj){
 console.log(`person:${obj[key].person} age:${obj[key].age} company:${obj[key].company}`)
}
for(const ob of obj){
 console.log(`person:${ob.person} age:${ob.age} company:${ob.company}`)
}
