import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "code_drops_crud",
  entities: ["dist/**/*.entity.js"],
  migrations: ["dist/**/migrations/*.ts"],
  migrationsTableName: "history",
});
