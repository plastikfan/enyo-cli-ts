import * as fs from 'fs';
import * as memfs from 'memfs';
// import * as jaxom from 'jaxom-ts';

// Argh, a lot of these definition don't need to be provided, we can import them from zenobia

export type VirtualFS = typeof fs | memfs.IFs;

export type NullableNode = Node | null;

export interface ISelect {
  (e: string, doc?: Node, single?: boolean): string | number | boolean | Node | Node[];
}

export interface ISelectById {
  (elementName: string, id: string, name: string, parentNode: Node): NullableNode;
}

export interface ISelectors {
  select: ISelect;
  selectById: ISelectById;
}

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

export interface IEnyoCli extends IYargsCli {
  parseInfo: string;
  query: string;
  xml: string;
  //
  output?: string;
}

export type ApplicationCommand = 'rename' | 'reorder' | 'renumber' | 'move' | 'copy' | 'find';

export interface ICommandLineInputs {
  applicationCommand: ApplicationCommand;

  output: string;
  argv: IEnyoCli;
}

export interface IExecutionContext { }

export interface ICommandExecutionResult { }

export interface ICliCommand {
  exec(executionContext: IExecutionContext): ICommandExecutionResult;
}

// export interface ICommandBuilderFactory {
//   (converter: jaxom.IConverter, specSvc: jaxom.ISpecService, parseInfo: jaxom.IParseInfo,
//     xpath: ISelectors): ICommandBuilder;
// }
