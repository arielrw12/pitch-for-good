import Skills from './Skills'
import Cause from './Cause'
import Project from './Project'

export default function VolunteerDashboard(volunteer) {
    return `
    <div class="vol-dashboard-background">
        <div class="vol-dashboard-container">            

            <div class="container1 container-border">
                <header class="container1-header">
                    <span style="color: var(--secondary-gray);">
                        <i class="fas fa-user fa-2x"></i>
                    </span>
                    <h6 id="header-font">About You</h6>
                </header>
                <div class="container-body-left">
                    <ul>
                        <li>First Name: ${volunteer.firstName}</li>
                        <li>Last Name: ${volunteer.lastName}</li><br>
                        <li>Username: ${volunteer.volUserName}</li>
                        <li>Password: ${volunteer.volPassword}</li><br>
                        <li>Phone Number: ${volunteer.phoneNum}</li>
                        <li>Email: ${volunteer.email}</li><br>
                        <li>Current Job Title: ${volunteer.jobTitle}</li>
                    </ul>  
                    <button type="button" class="js-log-out logout">Log Out</button>
                </div>
            </div>


            <div class="container2 container-border">
                <header class="container2-header">
                    <span style="color: var(--secondary-gray);">
                        <i class="fas fa-clipboard-list fa-2x"></i>
                    </span>
                    <h6 id="header-font">Your Skills</h6>
                </header>
                <ul>
                    <li id="gray-text>${Skills(volunteer.skills)}</li>
                </ul>
                <button class="js--vol-add-skills" id=${volunteer.volunteerId}>ADD SKILLS</button>
            </div>


            <div class="container3 container-border">
                <header class="container3-header">
                    <span style="color: var(--secondary-gray);">
                        <i class="fas fa-hand-holding-heart fa-2x"></i>
                    </span>
                    <h6 id="header-font">Your Causes</h6>
                </header>
                <ul>
                    <li id="gray-text>${Cause(volunteer.causes)}</li>
                </ul>
                <button class="js--vol-add-causes" id=${volunteer.volunteerId}>ADD CAUSES</button>          
            </div>


            <div class="container4 container-border">
                <header class="container4-header">
                    <span style="color: var(--secondary-gray);">
                        <i class="fas fa-bullhorn fa-2x"></i>
                    </span>
                    <h6 id="header-font">Pitch a Project</h6>
                </header>
                <h6 class="pitch-instructions">Have a project in mind? Click below to check out a list of participating organizations.</h6>
                <button class="js--see-organizations button__big" id="${volunteer.volunteerId}">SEE ORGANIZATIONS</button>
            </div>    


            <div class="container5 container-border">
                <header class="container5-header">
                    <span style="color: var(--secondary-gray);">
                        <i class="fas fa-business-time fa-2x"></i>
                    </span>
                    <h6 id="header-font">Your Projects</h6>
                </header>
                <div class="container-body-left">
                    <ul>
                        <li id="gray-text">${Project(volunteer.projects)}</li>
                    </ul>
                </div>
            </div>
            <h6></h6>
        </div> 
    </div>
    `
    // <input type="hidden" value="${volunteer.volunteerId}" class="volunteerId">
}