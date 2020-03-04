
import { IExecutionContext } from '../../types';

export abstract class CliCommand {
  constructor (protected executionContext: IExecutionContext) {

  }
}
