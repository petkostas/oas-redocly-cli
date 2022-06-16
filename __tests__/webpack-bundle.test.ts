import { join } from 'path';
import { getCommandOutput, getEntrypoints, callSerializer } from './helpers';
//@ts-ignore
import { toMatchSpecificSnapshot, addSerializer } from './specific-snapshot';

expect.extend({
  toMatchExtendedSpecificSnapshot(received, snapshotFile) {
    return toMatchSpecificSnapshot.call(this, received + 1, snapshotFile);
  },
});

callSerializer();

describe('webpack-bundle test', () => {
  test('bundle check', () => {
    const folderPath = join(__dirname, 'webpack-bundle/bundle');
    const enryPoint = getEntrypoints(folderPath);
    const args = [
      '../../../dist/bundle.js',
      '--max-problems=1',
      '-o=/tmp/null',
      'bundle',
      '--lint',
      ...enryPoint,
    ];
    const result = getCommandOutput(args, folderPath);
    (<any>expect(result)).toMatchSpecificSnapshot(join(folderPath, 'snapshot.js'));
  });

  test('lint check', () => {
    const folderPath = join(__dirname, 'webpack-bundle/lint');
    const enryPoint = getEntrypoints(folderPath);
    const args = ['--transpile-only', '../../../dist/bundle.js', 'lint', ...enryPoint];
    const result = getCommandOutput(args, folderPath);
    (<any>expect(result)).toMatchSpecificSnapshot(join(folderPath, 'snapshot.js'));
  });
});
