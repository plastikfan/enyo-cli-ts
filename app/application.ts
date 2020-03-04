import * as types from './types';
import { } from 'zenobia-ts';
import * as commandFactory from './cli/commands/command-factory';

/**
 * @description entry point into the cli application
 *
 * @export
 * @param {IExecutionContext} executionContext
 * @returns {number}
 */
export function run (applicationConfig: string, executionContext: types.IExecutionContext)
: number {
  let resultCode = 0;

  try {
    // const applicationConfigContent = loadConfig(applicationConfig, executionContext.vfs);
    // const document: Document = executionContext.parser.parseFromString(
    //   applicationConfigContent, 'text/xml');

    // executionContext.builderFactory()
    const command = commandFactory.construct(executionContext);
    const executionResult: types.ICommandExecutionResult = command.exec(executionContext);
    resultCode = executionResult.resultCode;
  } catch (error) {
    resultCode = 1;
  }

  return resultCode;
}

// function loadConfig (applicationConfig: string, virtualFS: types.VirtualFS): string {
//   return virtualFS.readFileSync(applicationConfig).toString();
// }
