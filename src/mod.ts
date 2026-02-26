import { copy } from "@std/fs";

interface Command {
  base: string;
  options: string[];
  exec: () => Promise<void>;
}

const initCommand: Command = {
  base: "init",
  options: [],
  exec: async () => {
    console.log("Initating a project", Deno.cwd());

    await copy("../static/init/", Deno.cwd(), { overwrite: true });
  },
};

if (Deno.args[0] === initCommand.base) initCommand.exec();
