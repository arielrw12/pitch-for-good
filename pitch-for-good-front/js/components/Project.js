export default function Project(projects) {
    return `
    ${projects.map(project => {
        return `

        <h4 class="project__projectName" id="${project.projectId}">Project name: ${project.projectName}</h4>
        <h4 class="project__projectDescription">Project description: ${project.projectDescription}</h4>
        <h4 class="project__estimatedDuration">Estimated project duration: ${project.estimatedDuration}</h4>
        <h4 class="project__createDate">Date project was created: ${project.createDate}</h4>
        <h4 class="project__status">Current project status: ${project.status}</h4>
        <img src="/images/horizontalline1.png">
        
        `;
    }).join('')}     
    `;
    }

