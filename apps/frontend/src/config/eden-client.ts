import { treaty } from "@elysia/eden";
import type { App } from "../../../backend/src";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "localhost:8080";
const client = treaty<App>(BACKEND_URL);

export { client };
