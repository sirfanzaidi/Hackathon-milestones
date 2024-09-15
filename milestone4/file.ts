// Get refrences to the form and display area 
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLFormElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); //prevent page reload

// collect input values
const name = (document.getElementById('name') as HTMLInputElement).value
const email = (document.getElementById('email') as HTMLInputElement).value
const phone = (document.getElementById('phone') as HTMLInputElement).value
const education = (document.getElementById('education') as HTMLInputElement).value
const experience = (document.getElementById('experience') as HTMLInputElement).value
const skills = (document.getElementById('skills') as HTMLInputElement).value


//Generate the resume content dynamically
const resumeHTML = `
<h2><b>Editable Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b> <span contenteditable= "true">${name} </p>
<p><b>Email:</b> <span contenteditable= "true"${email}</p>
<p><b>Phone:</b> <span contenteditable= "true"${phone}</p>
<p><b>Education:</b> <span contenteditable= "true"${education}</p>
<p><b>Skills:</b> <span contenteditable= "true"${skills}</span></p>

<h3>Education</h3>
<p contenteditable= "true"><b>education:</b>${education}</p>

<h3>experience</h3>
<p contenteditable= "true"><b>experience:</b>${experience}</p>

<h3>skills</h3>
<p contenteditable= "true"><b>skills:</b>${skills}</p>
`

// Display the generated Resume
if (resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
}else    {
    console.error('the resume display element is missing')
}

})
