import Cause from './Cause'
import Project from './Project'

export default function OrganizationDashboard(organization) {
    return `
    <h1>Welcome, ${organization.orgName}!</h1>

    <h2>Here is your user information:</h2>
    <ul>
        <li>Organization: ${organization.orgName}</li>
        <li>Mission: ${organization.orgMission}</li>
        <li>Contact Person: ${organization.contactPerson}</li>
        <li>Contact Email: ${organization.orgEmail}</li>
        <li>Website: ${organization.websiteUrl}</li>
    </ul>

    <h2>Your organization supports:</h2>
    <ul>
        <li>${Cause(organization.causes)}</li>
    </ul>

    `;
}