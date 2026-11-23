import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Winner D1 (24/25 dari 12 kandidat): 🫶 heart hands — satu-satunya kandidat
// yang mencetak 5 di hangat, universal, dan "terasa dipilih". Gestur hati adalah
// tindakan hangat yang disengaja, bukan sekadar wajah tersenyum: langsung terbaca
// oleh orang asing sebagai "terima kasih hangat", tanpa risiko intim (bukan 🥰/🤗)
// dan tanpa penalti default-smiley (bukan 😊/🙂). Satu code point U+1FAF6.
const EMOJI = "🫶";

// Output file: first CLI argument when given, otherwise the standard path.
const outFile = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, EMOJI, "utf8");
