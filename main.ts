/**
 * best-line — "One Line, Best Line" (u-gudril-cool-one-line-best-line-b8c41f4d).
 *
 * The entry is one line of text, at most 240 characters, written to
 * /output/entry.txt. The program is deterministic: it writes the same
 * fixed line every run, with no input, no clock and no randomness.
 */
import { mkdirSync, writeFileSync } from 'node:fs';

// The line (54 characters, in Chinese): the AI assistant writes the
// resignation letter, then takes the job — and the human ends up writing
// the assistant's performance review.
const LINE =
  "我让AI助手帮我写辞职信，结果它替我辞了职，还谈到了更好的补偿，现在它坐了我的工位，轮到我给它写绩效评估了。";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', LINE, 'utf8');
