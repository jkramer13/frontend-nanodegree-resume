var bio = {
	"name" : "Joshua Kramer",
	"role" : "Web Developer", 
	"contacts" : {
		"mobile" : "954-263-9330",
		"email" : "jkramer13@att.net",
		"github" : "jkramer13",
		"location" : "Boca Raton"
	},
	"welcomeMessage" : "Welcome to My Resume!",
	"skills" : ["Web Development", "HTML", "CSS", "Python", "JavaScript"],
	"bioPic" : "images/joshkramer2.png"};

var HTMLheaderName = bio.name;
$('#header').append('<h1>' + HTMLheaderName +'</h1>'); 

var HTMLheaderRole = bio.role;
$('#header').append('<span>' + HTMLheaderRole + '</span><hr>');

var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">954-263-9330</span></li>';
var myMobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace('954-263-9330', myMobile);

$('#topContacts').append(formattedMobile);
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">jkramer13@att.net</span></li>';
var myEmail = bio.contacts.email;
var formattedEmail = HTMLemail.replace('jkramer13@att.net', myEmail);

$('#topContacts').append(formattedEmail);
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">jkramer13</span></li>';
var myGithub = bio.contacts.github;
var formattedGithub = HTMLgithub.replace('jkramer13', myGithub);

$('#topContacts').append(formattedGithub);
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">Boca Raton</span></li>';
var myLocation = bio.contacts.location;
var formattedLocation = HTMLlocation.replace('Boca Raton', myLocation);

$('#topContacts').append(formattedLocation);
var HTMLwelcomeMsg = bio.welcomeMessage;

$('#header').append('<span>' + HTMLwelcomeMsg + '</span><hr>');
var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var mySkillsstart = bio.skillsStart;
var formattedskillsStart = HTMLskillsStart.replace('Skills at a Glance:', mySkillsstart);

var HTMLbioPic = '<img src="images/joshkramer2.png" class="biopic">';
var myBiopic = bio.bioPic;
var formattedbioPic = HTMLbioPic.replace('images/joshkramer2.png', myBiopic);
$('#header').append('<span>' + HTMLbioPic + '</span><hr>');

$("#header").append(HTMLskillsStart);
for ( var i = 0; i < bio.skills.length; i ++ ) {
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedSkills);	

}

var work = {
	"jobs": [{
		"employer" : "AT&T Corp.",
		"title" : "Client Support Specialist",
		"dates" : "November 2012 - Present",
		"location" : "North Palm Beach, FL",
		"description" : "Responsible for qualifying, designing, pricing, contracting and ordering, data (AT&T VPN ((AVPN)), IP, BVoIP, IPFR, IPTF, VDNA), ASE, ADE, strategic, applications services and complex voice (local and long distance) to for AT&T's Signature Client Group Tier 1 and 2A enterprise customers and account teams to support, maintenance and overall customer/ATT experience"
	}, {

		"employer" : "AT&T Corp.",
		"title" : "Technical Consultant",
		"dates" : "2008 - November 2012",
		"location" : "Sunrise, FL",
		"description" : "Responsible for tracking performance and training for region-wide wireless sales initiative.  Additional responsibilities included pre-sale and post-sale activities with potential and existing customers" 
	}]

};

for ( var i = 0; i < work.jobs.length; i ++ ) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

	$(".work-entry:last").append(formattedEmployer + formattedTitle);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDescription);

}

var projects = {

	"myprojects" : [{ 

		"title" : ["Introduction to Programming Course Projects"],
		"dates" : ["March-September, 2016"],
		"description": ["My projects for the Introduction to Programming Nano-Degree course have included creating and designing my own, personal webite via HTML, creating and running a Mad Libs Generator, creating a movie website, finding my next path to future opportunities and creating this Resume.  Below are examples of my work from the first 3 Projects as previously referenced:"],
		"images" : [
				 "images/stage1.png", 
				 "images/stage2.png", 
				 "images/stage3.png"
		]
   }]

};

for ( var i = 0; i < projects.myprojects.length; i ++ ) {
	$("#projects").append(HTMLprojectStart);
	var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.myprojects[i].title);
	var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.myprojects[i].dates);
	var formattedprjectDescription = HTMLprojectDescription.replace("%data%", projects.myprojects[i].description);
	$(".project-entry:last").append(formattedprojectTitle);
	$(".project-entry:last").append(formattedprojectDates);
	$(".project-entry:last").append(formattedprjectDescription);

for ( var j = 0; j < projects.myprojects[i].images.length; j ++ ) {
	var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.myprojects[i].images[j]);
	$(".project-entry:last").append(formattedprojectImage);
 
 }

}

var education = {
	
	"schools" : [{
	   
		 "name" : "Florida Atlantic University",
		 "location" : ["Boca Raton, FL"],
		 "degree" : "BS",
		 "major" : "Marketing",
		 "dates" : "1996-2000 -- ",
		 "url" : "http://fau.edu/"

		}],

	"onlineSchools" : [{

		 "title" : ["Introduction to Programming Nano-Degree"],
		 "school" : "Udacity",
		 "dates" : ["March-September, 2016"],
		 "url" : "https://www.udacity.com/"
		 //"minor" : "JavaScript",
		 //"graduation year" : "2016",
		 //"Online Courses" : ["Introduction to Programming", "JavaScript Syntax"]
		}]
};

$("#education").append(HTMLschoolStart);

for ( var i = 0; i < education.schools.length; i ++ ) {
	var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
	var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
	var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
	var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
	var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
	var formattedonlineURL = HTMLonlineURL.replace("%data%", education.schools[i].url);
	$(".education-entry:last").append(formattedschoolName + formattedschoolLocation);
	$(".education-entry:last").append(formattedschoolDegree);
	$(".education-entry:last").append(formattedschoolMajor);
	$(".education-entry:last").append(formattedschoolDates);
	$(".education-entry:last").append(formattedonlineURL);

}

$("#education").append(HTMLonlineClasses);

for ( var i = 0; i < education.onlineSchools.length; i ++ ) {
	$("#education").append(HTMLschoolStart);
	var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineSchools[i].school);
	var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineSchools[i].title);
	var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineSchools[i].dates);
	var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineSchools[i].url);
	$(".education-entry:last").append(formattedonlineSchool);
	$(".education-entry:last").append(formattedonlineTitle);
	$(".education-entry:last").append(formattedonlineDates);
	$(".education-entry:last").append(formattedonlineURL);

}

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

//Optional Internationalize Name Button Function//
//$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);


$('#footerContacts').append(formattedMobile);
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">jkramer13@att.net</span></li>';
var myEmail = bio.contacts.email;
var formattedEmail = HTMLemail.replace('jkramer13@att.net', myEmail);

$('#footerContacts').append(formattedEmail);
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">jkramer13</span></li>';
var myGithub = bio.contacts.github;
var formattedGithub = HTMLgithub.replace('jkramer13', myGithub);

$('#footerContacts').append(formattedGithub);
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">Boca Raton</span></li>';
var myLocation = bio.contacts.location;
var formattedLocation = HTMLlocation.replace('Boca Raton', myLocation);

$('#footerContacts').append(formattedLocation);
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">Boca Raton</span></li>';
var myLocation = bio.contacts.location;
var formattedLocation = HTMLlocation.replace('Boca Raton', myLocation);