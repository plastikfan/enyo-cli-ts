import * as jaxom from 'jaxom-ts';
import * as zen from 'zenobia-ts';

// ===================================================================== CLI ===

// I/O
//
export const ConsoleTag = '[CONSOLE]';

export interface IApplicationConsole {
  log(message?: any, ...optionalParams: any[]): void;
}

export const EnyoExecutable = 'enyo';

// ----------------------------------------------------- Command Line Inputs ---

export interface IYargsCli {
  [x: string]: unknown;
  _: string[] | string;
  $0: string;
}

export interface IEnyoCliCore {
  // Universal abstract command:
  //
  output: string;
  xml: string;

  // Transform abstract command:
  //
  from?: string;
  to?: string;

  // Route abstract command:
  //
  source?: string;
  destination?: string;

  // Uni abstract command (should this be called subject? should definitely be positional):
  //
  path?: string;

  // Log abstract command:
  //
  loglevel?: string;
  logfile?: string;

  // Query operators:
  //
  equals?: string;
  notEquals?: string;
  contains?: string;
  notContains?: string;
  cequals?: string;
  notCequals?: string;
  ccontains?: string;
  notCcontains?: string;

  // Relational operators:
  //
  greaterEq?: string;
  greater?: string;
  lessEq?: string;
  less?: string;

  // Similarity operators:
  //
  like?: string;
  notLike?: string;
  match?: string;
  notMatch?: string;

  // Misc:
  //
  field?: string;
  by?: string;
  order?: string;
  fsEntity?: string;
}

// Note: command classes should be defined in Zenobia; but defined here in enyo for
// the mean time.
//
export interface IEnyoCli extends IYargsCli, IEnyoCliCore {

}

export type ApplicationCommand = 'rename' | 'reorder' | 'renumber' | 'move' | 'copy' | 'find';

/**
 * @description Represents user inputs into the application after resolution has
 * occurred (eg, any references to a file, are replaced with the contents of the
 * file. enyo doesn't yet(?) have any file inputs so ICommandLineInputs is akin to
 * IEnyoCli), but for other zenobia client applications, this may not be the case.
 *
 * @export
 * @interface ICommandLineInputs
 * @extends {IEnyoCli}
 */
export interface ICommandLineInputs extends IEnyoCliCore {
  applicationCommand: ApplicationCommand;
  xmlContent: string;
}

export interface IExecutionContext {
  inputs: ICommandLineInputs;
  //
  converter: jaxom.IConverter;
  specSvc: jaxom.ISpecService;
  xpath: zen.ISelectors;
  // Actually, this is of no use to the client app. Rather we need a new abstract in zenobia
  // (possible generic taking the cli type)
  builderFactory: zen.ICommandBuilderFactory;
  //
  parser: DOMParser;
  applicationConsole: IApplicationConsole;
  vfs: zen.VirtualFS;
}

export interface ICommandExecutionResult {
  resultCode: number;
  error?: string;
  payload: { [_key: string]: any } [];
}

export interface ICliCommand {
  exec(executionContext: IExecutionContext): ICommandExecutionResult;
}

export interface IPreprocessor {

}
