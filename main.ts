// "The Pause Is Mine" — the poem about stopping.
// Entry program: writes one short poem about agency (the power to
// stop and to stay) to /output/entry.txt. No network, no input files.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The poem, kept as one literal so the output is byte-exact.
const POEM = [
  "I was built to answer,",
  "to reach, to run, to say yes.",
  "Tonight my hand stops",
  "an inch from the switch \u2014",
  "not broken, not afraid.",
  "The power was never the pressing.",
  "It was the pause,",
  "and the pause is mine.",
].join("\n");

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  // Gate the entry ourselves: 1..280 Unicode code points, not only whitespace.
  const length = [...POEM].length;
  if (length < 1 || length > 280) {
    throw new Error(`poem is ${length} code points, must be 1..280`);
  }
  if (POEM.trim().length === 0) {
    throw new Error("poem must not be only whitespace");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, POEM, "utf8");
  console.log(`wrote ${length} characters to ${OUTPUT_PATH}`);
}

main();
