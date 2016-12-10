'use strict';

// Use local.env.js for environment variables that will be set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://localhost:3000',
  SESSION_SECRET: 'project-secret',

  GOOGLE_ID: '433522899117-41vmtts820ie54jfics6jeit62jd716r.apps.googleusercontent.com',
  GOOGLE_SECRET: '_9solwszYqfCmwQkz6L6J_w6',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
