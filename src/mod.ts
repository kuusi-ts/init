import { parseArgs } from "@std/cli";
import { type Rgb, rgb24 } from "@std/fmt/colors";
import { join } from "@std/path";
import { defaultFiles } from "./files.ts";

const flags = parseArgs(Deno.args, {
  boolean: ["help"],
  default: {},
  alias: {
    help: "h",
  },
});

const colors: Record<string, Rgb> = {
  green: { r: 100, g: 200, b: 100 },
  red: { r: 200, g: 100, b: 100 },
};

const projDir = String(flags._[0] ?? ".");
const path = join(Deno.cwd(), projDir);

console.log(`Initializing a project in ${rgb24(path, colors.green)}`);

if (projDir !== ".") Deno.mkdirSync(projDir);

for (const file of defaultFiles) {
  if (file.dir) Deno.mkdirSync(join(projDir, file.dir));

  Deno.writeFileSync(
    join(projDir, file.name),
    new TextEncoder().encode(file.content),
  );
}
