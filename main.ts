import { mkdirSync, writeFileSync } from "node:fs";

// The funniest voicemail greeting a cat would record:
// a proud, unbothered cat mid-crime, knocking the caller's mug off
// the counter and making the crash itself the beep.
const entry =
  "You've reached Miso. I'm pushing your favorite mug off the counter right now \u2014 leave a message after the crash.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
