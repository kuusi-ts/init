import { copy } from "@std/fs";
import { join } from "@std/path";
import { rgb24 } from "@std/fmt/colors";

console.log(rgb24("Hello, World!", {
  r: 100,
  g: 200,
  b: 200,
}));

export interface InitFlags {
  [x: string]: unknown;
  help: boolean;
  h: boolean;
  _: Array<string | number>;
}

export async function initProject(flags: InitFlags): Promise<void> {
  let projDir = flags._[0] ?? ".";
  let path = Deno.cwd();

  if (projDir) {
    projDir = String(projDir);

    try {
      Deno.mkdirSync(projDir);
    } catch (err) {
      console.log("An error occured while creating the project directory.");

      throw err;
    }

    path = join(Deno.cwd(), projDir);
  }

  await copy("assets", path, { overwrite: true });
}
