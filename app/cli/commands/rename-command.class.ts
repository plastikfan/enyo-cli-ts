
import { CliCommand } from './cli-command.class';
import { IExecutionContext, ICommandExecutionResult } from '../../types';

export class RenameCommand extends CliCommand {
  constructor (protected executionContext: IExecutionContext) {
    super(executionContext);
  }

  public exec (): ICommandExecutionResult {
    const execResult: ICommandExecutionResult = {
      resultCode: 0,
      payload: []
    };

    try {

    } catch (error) {
      execResult.resultCode = 1;
      execResult.error = error.message;
      console.log(`Error occurred: ${error.message}`);
    }

    return execResult;
  }
}
