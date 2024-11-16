import "dotenv/config";
import { db } from "./db";
import { projects } from "./db/schema";

async function main() {
  db.insert(projects).values({
    title: "Project 1",
    shortDescription: "This is a short description",
    status: "inactive",
  });

  // const projects = await db.query.projects.findMany({
  //   columns: {
  //     title: true,
  //     shortDescription: true,
  //   },
  //   with: {
  //     tasks: {
  //       columns: {
  //         title: true,
  //         description: true,
  //       },
  //     },
  //   },
  // });
  // console.log(JSON.stringify(projects, null, 2));
  // const project = await db
  //   .select({
  //     title: projects.title,
  //     shortDescription: projects.shortDescription,
  //     tasks: {
  //       title: tasks.title,
  //       description: tasks.description,
  //     },
  //   })
  //   .from(projects)
  //   .leftJoin(tasks, eq(tasks.projectId, projects.id));
  // const res = await db.execute(`
  //     SELECT
  //       p.id,
  //       p.title
  //     FROM projects p
  //   `);
  // console.log(res.rows);
  // console.log(project);
  // const project = await db.insert(projectsTable).values({
  //   title: "Project 2",
  //   shortDescription: "This is a short description",
  // });
  // console.log(project);
  // const projectId = "a1a6508a-e1c1-478a-be7b-1f4f4ae432e3";
  // const tasks: InferInsertModel<typeof tasksTable>[] = [
  //   {
  //     title: "Task 1",
  //     description: "This is a description",
  //     projectId: projectId,
  //   },
  //   {
  //     title: "Task 2",
  //     description: "This is a description",
  //     projectId: projectId,
  //   },
  //   {
  //     title: "Task 3",
  //     description: "This is a description",
  //     projectId: projectId,
  //   },
  //   {
  //     title: "Task 4",
  //     description: "This is a description",
  //     projectId: projectId,
  //   },
  // ];
  // await db.insert(tasksTable).values(tasks);
  // console.log({ project, task });
}

main();
