import * as yargs from 'yargs';
import * as xiberia from 'xiberia';
import * as zenobia from 'zenobia-ts';
import * as types from '../types';
// preprocess needs to be injected here, so that we can safely call argv on yargs; preprocessor.peek/poke
//
export function build (vfs: zenobia.VirtualFS,
  dynamicCli: xiberia.IDynamicCli<zenobia.IYargsArgumentsCli, yargs.Argv>)
  : types.ICommandLineInputs {
  throw new Error('');
  // dynamicCli.peek();

  // dynamicCli.create()
  // dynamicCli.instance.scriptName('enyo-cli')
  // TODO: .zenobia.build(...)
  // .help();

  // const applicationCli: types.IEnyoCli = dynamicCli.instance.argv as types.IEnyoCli;

  // ... poke
  // const xmlOption: string = applicationCli.xml;
  // const xmlContent = zenobia.containsText(xmlOption)
  //   ? vfs.readFileSync(xmlOption).toString()
  //   : '';

  // const instance = dynamicCli.build(xmlContent);
  // instance.scriptName('enyo-cli')
  //   .help();

  // const applicationCli: types.IEnyoCli = dynamicCli.argv() as types.IEnyoCli;

  // const filler = {
  //   applicationCommand: applicationCli._[0] as types.ApplicationCommand,
  //   xmlContent: xmlContent
  // };

  // const result: types.ICommandLineInputs = zenobia.fillMissing(applicationCli, filler,
  //   'ICommandLineInputs');

  // return result;
}
