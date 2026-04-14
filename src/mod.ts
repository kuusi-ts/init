import { parseArgs } from "@std/cli";
import { type InitFlags, initProject } from "./init.ts";

const flags: InitFlags = parseArgs(Deno.args, {
  boolean: ["help"],
  default: {},
  alias: {
    help: "h",
  },
});

try {
  initProject(flags);
} catch (err) {
  throw err;
}
