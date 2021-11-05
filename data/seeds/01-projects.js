exports.seed = function (knex, Promise) {
    return knex("projects").insert([
      {
        project_name: "project1",
        project_description: "this is project 1",
        project_completed: false,
      },
      {
        project_name: "project2",
        project_description: "this is project 2",
        project_completed: true,
      },
      {
        project_name: "project3",
        project_description: "this is project 3",
        project_completed: false,
      },
    ]);
  };
  