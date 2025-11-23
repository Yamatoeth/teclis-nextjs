import i18n, { TFunction } from 'i18next';
import fs from 'fs';

const usedKeys = new Set<string>();

// Patch global avec cast
const originalT = i18n.t.bind(i18n);
i18n.t = ((key: string, options?: any) => {
  usedKeys.add(key);
  return originalT(key, options);
}) as unknown as TFunction;

// À la fin de l'exécution (fermeture app ou tests)
process.on('exit', () => {
  fs.writeFileSync('i18n/used-keys-runtime.json', JSON.stringify([...usedKeys], null, 2));
});