import * as path from 'path';
import { DOMParserImpl as Parser } from 'xmldom-ts';
import * as jaxom from 'jaxom-ts';
import {
  VirtualFS,
  commandBuilderConstruct as builder,
  Selectors,
  // IDynamicCli,
  DynamicCli
  // ICommandBuilder
} from 'zenobia-ts';
import * as types from './types';
import * as commandLine from './cli/command-line';
import * as application from './application';
import yargs = require('yargs');

// The command-builder-factory.construct needs to be exported form zen
// (it is currently exported as any, but it needs to be ICommandBuilderFactory)
//
module.exports = (applicationConsole: types.IApplicationConsole, vfs: VirtualFS,
  yin: yargs.Argv = yargs): number => {
  // setup
  //
  const spec: jaxom.ISpec = jaxom.Specs.default;
  const converter: jaxom.IConverter = new jaxom.XpathConverter(spec);
  const specSvc: jaxom.ISpecService = new jaxom.SpecOptionService(spec);
  const parser: DOMParser = new Parser();
  // create zenobia-cli => pass into commandLine.build

  // acquire inputs
  //
  const dynamicCli = new DynamicCli<types.IEnyoCli>(yin);
  const inputs: types.ICommandLineInputs = commandLine.build(yin, vfs, dynamicCli);

  // inject dependencies
  //
  const executionContext: types.IExecutionContext = {
    inputs: inputs,
    converter: converter,
    specSvc: specSvc,
    xpath: Selectors,
    builderFactory: builder,
    parser: parser,
    applicationConsole: applicationConsole,
    vfs: vfs
  };

  const applicationConfigFilename = path.resolve(__dirname, './enyo.app.zenobia.xml');

  const executionResult = application.run(applicationConfigFilename, executionContext);
  process.exitCode = executionResult;
  return executionResult;
};
