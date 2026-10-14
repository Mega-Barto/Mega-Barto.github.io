import { spawnSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const cvDir = join(root, 'src/content/renderCV');
const outputDir = join(cvDir, 'rendercv_output');
const publicDir = join(root, 'public');

const yamlFiles = [
  'JAPB_CV.yaml',
  'JAPB_CV_es.yaml',
  'JAPB_CV_dev.yaml',
  'JAPB_CV_dev_es.yaml',
  'JAPB_CV_qa.yaml',
  'JAPB_CV_qa_es.yaml',
];

for (const yaml of yamlFiles) {
  if (!existsSync(join(cvDir, yaml))) {
    continue;
  }

  const result = spawnSync('rendercv', ['render', yaml], {
    cwd: cvDir,
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      PYTHONUTF8: '1',
      PYTHONIOENCODING: 'utf-8',
    },
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

mkdirSync(publicDir, { recursive: true });

const copies = [
  ['Juan_Alejandro_Pérez_Bermúdez_CV.pdf', 'Juan_Alejandro_Pérez_Bermúdez_CV.pdf'],
  ['Juan_Alejandro_Pérez_Bermúdez_CV_es.pdf', 'Juan_Alejandro_Pérez_Bermúdez_CV_es.pdf'],
];

for (const [source, target] of copies) {
  copyFileSync(join(outputDir, source), join(publicDir, target));
}
