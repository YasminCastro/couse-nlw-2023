import fastify from "fastify";
import { memoriesRoutes } from "./routes/memories";
import cors from "@fastify/cors";

const app = fastify();

app.register(cors, { origin: true });
// app.register(cors, { origin: ["localhost:3000"] });
app.register(memoriesRoutes);

app.listen({ port: 3333 }).then(() => {
  console.log("🙂 Server is running on port 3333");
});
