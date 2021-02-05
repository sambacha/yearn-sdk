import {
  checkFilesExist,
  ensureNxProject,
  readJson,
  runNxCommandAsync,
  uniq,
} from '@nrwl/nx-plugin/testing';
describe('ysdk-plugin e2e', () => {
  it('should create ysdk-plugin', async (done) => {
    const plugin = uniq('ysdk-plugin');
    ensureNxProject('@yearn-finance/ysdk-plugin', 'dist/packages/ysdk-plugin');
    await runNxCommandAsync(
      `generate @yearn-finance/ysdk-plugin:ysdk-plugin ${plugin}`
    );

    const result = await runNxCommandAsync(`build ${plugin}`);
    expect(result.stdout).toContain('Executor ran');

    done();
  });

  describe('--directory', () => {
    it('should create src in the specified directory', async (done) => {
      const plugin = uniq('ysdk-plugin');
      ensureNxProject(
        '@yearn-finance/ysdk-plugin',
        'dist/packages/ysdk-plugin'
      );
      await runNxCommandAsync(
        `generate @yearn-finance/ysdk-plugin:ysdk-plugin ${plugin} --directory subdir`
      );
      expect(() =>
        checkFilesExist(`libs/subdir/${plugin}/src/index.ts`)
      ).not.toThrow();
      done();
    });
  });

  describe('--tags', () => {
    it('should add tags to nx.json', async (done) => {
      const plugin = uniq('ysdk-plugin');
      ensureNxProject(
        '@yearn-finance/ysdk-plugin',
        'dist/packages/ysdk-plugin'
      );
      await runNxCommandAsync(
        `generate @yearn-finance/ysdk-plugin:ysdk-plugin ${plugin} --tags e2etag,e2ePackage`
      );
      const nxJson = readJson('nx.json');
      expect(nxJson.projects[plugin].tags).toEqual(['e2etag', 'e2ePackage']);
      done();
    });
  });
});
