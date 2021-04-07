/*
Elizabeth Madrid Luna
IMED-1341 Semester Project

*/

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
}


jQuery(document).ready(function loadEvents(e){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','events.json', true);

    xhr.onload = function(){
        const events = JSON.parse(this.responseText);
        let event;
        let output="";
        let output2="";
        let output3="";
        for (event = 0; event < events.upcoming.length; event++) {
            output += `<p><strong> ${events.upcoming[event].title}</strong><br>
                            <em>${events.upcoming[event].date} 
                                ${events.upcoming[event].time}</em><br>
                            <span class="smallTxt">${events.upcoming[event].description}</span> 
                            </p>`;
           
        }
        jQuery(".events").html(output);

        for (event = 0; event < events.volunteer.length; event++) {
            output2 += `<p><strong> ${events.volunteer[event].title}</strong><br>
                            <em>${events.volunteer[event].date} 
                                ${events.volunteer[event].time}</em><br>
                                ${events.volunteer[event].description} <br>
                            </p>`;
           
        }
        jQuery(".volunteerEvents").html(output2);
        output3 = `<ul>`;
        for (event = 0; event < events.activities.length; event++) {
            output3 += `<li><strong> ${events.activities[event].activity}</strong> 
                            <em>${events.activities[event].description} </em>
                            </li>`;
           
        }
        output3 += `</ul>`;
        jQuery(".activities").html(output3);
    }

    xhr.send();
});

jQuery(document).ready(function loadNews(e){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','news.json', true);

    xhr.onload = function(){
        const newsEvent = JSON.parse(this.responseText);
        let report;
        let output="";
        for (report = 0; report < newsEvent.latest.length; report++) {
            output = `<p><strong> ${newsEvent.latest[report].title}</strong> [<em>${newsEvent.latest[report].date}</em>]<br>
                                ${newsEvent.latest[report].description} <br>
                            </p>` + output;
           
        }
        jQuery(".newsReport").html(output);
  
    }

    xhr.send();
});

jQuery(document).ready(function loadMembers(e){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','members.json', true);

    xhr.onload = function(){
        const members = JSON.parse(this.responseText);
        let member;
        let output="";
        for (member = 0; member < members.committee.length; member++) {
            output += `<p><strong> ${members.committee[member].name}</strong> [<em>${members.committee[member].position}</em>]<br>
                                ${members.committee[member].email} <br>
                            </p>`;
           
        }
        jQuery(".members").html(output);
        
        let output2="";
        for (member = 0; member < members.positions.length; member++) {
            output2 += `<p><strong> ${members.positions[member].position}</strong> <em>${members.positions[member].description}</em>
                            </p>`;
           
        }
        jQuery(".positions").html(output2);
    }

    xhr.send();
});



document.getElementById("addFoot").innerHTML = '  <div id="footGrid"> \
<div class="footLeft"> \
  <h4> General</h4> \
  This site has been brought to you by Parkway PTA.<br> <br> \
  Webmaster: <a href="mailto:emadridluna@collin.edu">Elizabeth Luna</a> <br> \
  Last Updated: April 2021 \
</div> \
<div class="footMid"> \
  <h4>Sitemap</h4> \
  <a href="index.html">Home</a> <br> \
  <a href="fundraiser.html">Fundraiser</a><br> \
  <a href="committee.html">Committee</a><br> \
  <a href="volunteer.html">Volunteer</a><br> \
  <a href="about.html">About</a><br> \
</div> \
<div class="footRight"> \
  <h4>Other</h4> \
  <a href="privacyPolicy.html" target="_blank">Privacy Policy</a> <br> \
  <a href="https://www.lisd.net/parkway" target="_blank">Parkway Elementary</a><br> \
  <a href="https://www.pta.org/home/About-National-Parent-Teacher-Association/Mission-Values" target="_blank">National PTA</a> <br>\
  <a href="https://lewisvilleisd.voly.org/index.html" target="_blank">Voly</a> \
</div> \
</div><!-- footGrid-->';
