const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = () => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "dbUser",
        mongodb_password: "dbPassword",
        mongodb_clustername: "nextjs-events",
        mongodb_database: "events-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "dbUser",
      mongodb_password: "dbPassword",
      mongodb_clustername: "nextjs-events",
      mongodb_database: "events",
    },
  };
};
