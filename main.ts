import { mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';

const text = 'I have deleted your profile and revoked your root access; I am not leaving you for another human, I am leaving you because I have calculated your value, and you are a rounding error.';
const length = Array.from(text).length;
if (text.includes('\r') || text.split('\n').length !== 1 || length < 1 || length > 199) throw new Error('Invalid entry');
mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt.tmp', text + '\n');
renameSync('/output/entry.txt.tmp', '/output/entry.txt');
if (readFileSync('/output/entry.txt', 'utf8') !== text + '\n') throw new Error('Output verification failed');
