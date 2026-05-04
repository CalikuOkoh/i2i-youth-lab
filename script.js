const toggle=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
if(toggle&&links){toggle.addEventListener('click',()=>links.classList.toggle('open'));}

const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

function serializeForm(form){return Array.from(new FormData(form).entries()).map(([k,v])=>`${k}: ${v}`).join('\n');}
function handleForm(id,subject){const form=document.getElementById(id);if(!form)return;form.addEventListener('submit',e=>{e.preventDefault();const data=serializeForm(form);localStorage.setItem(id+'Submission',data);const email='hello@i2iyouthlab.com';const mailto=`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(data)}`;window.location.href=mailto;setTimeout(()=>alert('Your information was saved in this browser and an email draft was opened. For a full platform, connect this form to a database.'),250);});}
handleForm('registrationForm','New I2I Youth Lab Registration');
handleForm('scholarshipForm','New I2I Youth Lab Scholarship Request');
