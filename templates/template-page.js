// This arrow function makes the new team.
const makeNewTeam = team => {

  // This adds the manager info when applicable.
  const makeNewManager = manager => {
      return `
      <div class="card employee-card">
      <div class="card-header">
          <h2 class="title-card">${manager.getName()}</h2>
          <h3 class="title-card"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
      </div>
      <div class="body-card">
          <ul class="item">
              <li class="item-list">ID: ${manager.getId()}</li>
              <li class="item-list">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li class="item-list">Office number: ${manager.getOfficeNumber()}</li>
          </ul>
      </div>
  </div>
      `;
  };

  // This adds the engineer info when applicable.
  const makeNewEngineer = engineer => {
      return `
      <div class="card employee-info-card">
  <div class="header-card">
      <h2 class="title-card">${engineer.getName()}</h2>
      <h3 class="title-card"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
  </div>
  <div class="body-card">
      <ul class="item">
          <li class="item-list">ID: ${engineer.getId()}</li>
          <li class="item-list">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="item-list">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
      </ul>
  </div>
</div>
      `;
  };

  // This adds the intern info when applicable.
  const makeNewIntern = intern => {
      return `
      <div class="card employee-card">
  <div class="card-header">
      <h2 class="title-card">${intern.getName()}</h2>
      <h3 class="title-card"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
  </div>
  <div class="body-card">
      <ul class="item">
          <li class="item-list">ID: ${intern.getId()}</li>
          <li class="item-list">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="item-list">School: ${intern.getSchool()}</li>
      </ul>
  </div>
</div>
      `;
  };
  // make a new constant called info into an empty array.
  const info = [];

  // Now we push the new info for each job role into the new info array.
  info.push(team
      .filter(employee => employee.getRole() === "Manager")
      .map(manager => makeNewManager(manager))
  );
  info.push(team
      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => makeNewEngineer(engineer))
      .join("")
  );
  info.push(team
      .filter(employee => employee.getRole() === "Intern")
      .map(intern => makeNewIntern(intern))
      .join("")
  );

  return info.join("");

}

// This exports the team arrow function to generate the new page.
module.exports = team => {

  return `
  <!DOCTYPE info>
<info lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>My Team</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
  <div class="container-fluid">
      <div class="row">
          <div class="col-12 jumbotron mb-3 header-team">
              <h1 class="text-center">My Team</h1>
          </div>
      </div>
  </div>
  <div class="container">
      <div class="row">
          <div class="team-area col-12 d-flex justify-content-center">
              ${makeNewTeam(team)}
          </div>
      </div>
  </div>
</body>
</info>
  `;
};