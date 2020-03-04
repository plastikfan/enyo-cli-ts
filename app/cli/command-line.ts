import * as yargs from 'yargs';
import * as zen from 'zenobia-ts';
import * as types from '../types';
// preprocess needs to be injected here, so that we can safely call argv on yargs; preprocessor.peek/poke
//
export function build (instance: yargs.Argv, vfs: zen.VirtualFS,
  dynamicCli: zen.IDynamicCli<types.IEnyoCli>): types.ICommandLineInputs {
  // ... peek
  instance = instance.scriptName('enyo-cli')
    // TODO: .zenobia.build(...)
    .help();

  const applicationCli: types.IEnyoCli = instance.argv as types.IEnyoCli;

  // ... poke
  const xmlOption: string = applicationCli.xml;
  const xmlContent = zen.containsText(xmlOption)
    ? vfs.readFileSync(xmlOption).toString()
    : '';

  const filler = {
    applicationCommand: applicationCli._[0] as types.ApplicationCommand,
    xmlContent: xmlContent
  };

  const result: types.ICommandLineInputs = zen.fillMissing(applicationCli, filler,
    'ICommandLineInputs');

  return result;
}
