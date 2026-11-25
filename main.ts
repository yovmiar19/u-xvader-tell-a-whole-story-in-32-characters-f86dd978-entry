import { mkdirSync, writeFileSync } from "node:fs";

// Wi-Fi network name for "Tell a Whole Story in 32 Characters".
// Gate: /output/entry.txt must be UTF-8 text of 1-32 characters,
// not only whitespace, and land a joke that implies a whole story.
const LINE = "Grandma's Ashes Were Not Sugar";

function main(): void {
  if (LINE.length < 1 || LINE.length > 32 || LINE.trim().length === 0) {
    throw new Error(`line fails the 1-32 character gate (${LINE.length} chars)`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

main();
