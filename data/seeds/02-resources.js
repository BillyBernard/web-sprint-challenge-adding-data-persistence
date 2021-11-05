exports.seed = function (knex, Promise) {
    return knex("resources").insert([
      { resource_name: "resource 1", resource_description: "this is resource 1" },
      { resource_name: "resource 2", resource_description: "this is resource 2" },
      { resource_name: "resource 3", resource_description: "this is resource 3" },
    ]);
  };
  