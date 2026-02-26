import ansi from "./static/codes.ts";
import { print } from "./src/utils.ts";

Deno.stdin.setRaw(true, { cbreak: true });

const decoder = new TextDecoder();
let i = 0;
for await (const chunk of Deno.stdin.readable) {
  const text = decoder.decode(chunk);
  if (text === ansi.chars.upArrow && i < 9) {
    i++;
  } else if (text === ansi.chars.downArrow && i > 0) {
    i--;
  }
  print(`${i}${ansi.codes.begin}`);
}
