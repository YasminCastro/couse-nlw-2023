import "dotenv/config";

import fastify from "fastify";
import { memoriesRoutes } from "./routes/memories";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import { authRoutes } from "./routes/auth";

const app = fastify();

app.register(cors, { origin: true });
app.register(jwt, { secret: "spacetime" });
// app.register(cors, { origin: ["localhost:3000"] });
app.register(memoriesRoutes);
app.register(authRoutes);

app.listen({ port: 3333 }).then(() => {
  console.log("🙂 Server is running on port 3333");
});
