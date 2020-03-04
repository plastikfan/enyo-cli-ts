import {
  IExecutionContext, ApplicationCommand, ICliCommand, ICommandExecutionResult
} from '../../types';

import { RenameCommand } from '../commands/rename-command.class';

/**
 * @description Constructs a command instance depending on the execution context which
 * contains an attribute that indicates the command to be constructed.
 *
 * @export
 * @param {ct.IExecutionContext} executionContext
 * @returns {ct.ICliCommand}
 */
export function construct (executionContext: IExecutionContext): ICliCommand {
  let command = {
    exec: (executionContext: IExecutionContext): ICommandExecutionResult => {
      return {
        resultCode: 0,
        payload: []
      };
    }
  };
  const applicationCommand: ApplicationCommand = executionContext.inputs.applicationCommand;

  switch (applicationCommand) {
    case 'rename':
      command = new RenameCommand(executionContext);
      break;
    case 'reorder':
    case 'renumber':
    case 'move':
    case 'copy':
    case 'find':
      break;
  }

  return command;
}
