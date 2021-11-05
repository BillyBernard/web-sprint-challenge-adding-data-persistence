exports.seed = function (knex, Promise) {
    return knex("tasks").insert([
      {
        task_description: "task 1 ",
        task_notes: "this is task 1",
        task_completed: false,
        project_id: 1,
      },
      {
        task_description: "task 2",
        task_notes: "this is task 2",
        task_completed: false,
        project_id: 2,
      },
      {
        task_description: "task 3",
        task_notes: "this is task 3",
        task_completed: false,
        project_id: 3,
      },
    ]);
  };
  