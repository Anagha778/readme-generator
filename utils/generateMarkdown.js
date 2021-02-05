// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
    if (license === null)
    {
      return ``;
    }
    else
    {
    let li = "https://shields.io/badge/license-"+license+"-blue.svg";
    return `${li}`;
    }
  };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
    if (license === "MIT")
    {
      return `https://choosealicense.com/licenses/mit/`;
    }
    else if (license === "Apache")
    {
      return `https://choosealicense.com/licenses/apache-2.0/`;
    }
    else if (license === "GPLv3")
    {
      return `https://choosealicense.com/licenses/gpl-3.0/`;
    }
    else if (license === "Unlicense")
    {
      return `https://choosealicense.com/licenses/unlicense/`;
    }
    else 
    {
      return ``;
    }
  };

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
    return `# ${data.pname} ![Github license](${renderLicenseBadge(data.plicense)})
    ## Description
    ${data.pdescription}
    ## Table of Contents:
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Contributor](#Contributors)
    * [Tests](#Tests)
    * [Questions](#Questions)
    ## Installation:
    Install dependency using command : ${data.pdependency}
    ## Usage:
    ${data.pusage}
    ## License:
    ${renderLicenseSection(data.plicense)}
    ## Contributors:
    ${data.pcontributor}
    ## Tests:
    ${data.ptest}
    ## Questions:
    * Link to my GitHub profile : https://github.com/${data.username}  
    * For additional questions reach me at : ${data.eaddress}
    `;
}

module.exports = generateMarkdown;