import { promises as fs } from 'fs';

export async function readJsonFile<T>(path: string): Promise<T> {
  const data = await fs.readFile(path, 'utf-8');
  return JSON.parse(data);
}

export async function writeJsonFile<T>(path: string, data: T): Promise<void> {
  await fs.writeFile(path, JSON.stringify(data, null, 2));
}
