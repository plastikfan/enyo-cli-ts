// import * as path from 'path';
// import { DOMParserImpl as Parser } from 'xmldom-ts';
// import * as jaxom from 'jaxom-ts';
import * as zenobia from 'zenobia-ts';
// import * as aergia from 'aergia-cli-ts';
// import * as xiberia from 'xiberia';
import * as types from './types';
// import * as commandLine from './cli/command-line';
// import * as application from './application';
import yargs = require('yargs');

// The command-builder-factory.construct needs to be exported form zen
// (it is currently exported as any, but it needs to be ICommandBuilderFactory)
//
module.exports = (applicationConsole: types.IApplicationConsole, vfs: zenobia.VirtualFS,
  yin: yargs.Argv = yargs): number => {
  // const conversionSchema: xiberia.IJsonConversionSchema = {
  //   labels: {
  //     commandNameId: 'name',
  //     commandOptions: 'Options',
  //     descendants: '_children',
  //     elements: '_',
  //     validationGroups: 'ArgumentGroups'
  //   },
  //   paths: {
  //     collective: 'commands'
  //   },
  //   exclusions: {
  //     options: ['name', '_']
  //   }
  // };

  throw new Error();
  // setup
  //
  // const spec: xiberia.ISpec = jaxom.Specs.default;
  // const converter: xiberia.IConverter = new jaxom.XpathConverter(spec);
  // const specSvc: xiberia.ISpecService = new jaxom.SpecOptionService(spec);
  // const parser: DOMParser = new Parser();
  // create zenobia-cli => pass into commandLine.build

  // const yargsBuilder: xiberia.IYargsApiBuilder = new aergia.YargsBuilder(yin, conversionSchema);

  // acquire inputs
  //
  // const enyoDynamicCli = new zenobia.DynamicYargsCli<types.IEnyoCli>(
  //   yin,
  //   zenobia.commandConverterConstruct,
  //   converter,
  //   specSvc,
  //   parser,
  //   vfs,
  //   yargsBuilder,
  //   {
  //     positionalArguments: []
  //   }
  // );

  /*
  ERROR in /Users/Plastikfan/dev/github/js/enyo-cli-ts/app/composition-root.ts
  [tsl] ERROR in /Users/Plastikfan/dev/github/js/enyo-cli-ts/app/composition-root.ts(52,5)
        TS2345: Argument of type 'import(
          "/Users/Plastikfan/dev/github/js/enyo-cli-ts/node_modules/aergia-cli-ts/dist/yargs/yargs-builder.class"
        ).YargsBuilder'
        is not assignable to parameter of type 'import(
          "/Users/Plastikfan/dev/github/js/enyo-cli-ts/node_modules/zenobia-ts/node_modules/aergia-cli-ts/dist/yargs/yargs-builder.class"
        ).YargsBuilder'.
    Types have separate declarations of a private property 'instance'.
  */

  // const xmlContent = enyoDynamicCli.load('./enyo.app.zenobia.xml');
  // enyoDynamicCli.build(xmlContent);

  // commandBuilder.buildNamedCommand()
  // const inputs: types.ICommandLineInputs = commandLine.build(vfs, enyoDynamicCli);

  // inject dependencies
  //
  // const executionContext: types.IExecutionContext = {
  //   inputs: inputs,
  //   converter: converter,
  //   specSvc: specSvc,
  //   xpath: zenobia.Selectors,
  //   builderFactory: zenobia.commandConverterConstruct,
  //   parser: parser,
  //   applicationConsole: applicationConsole,
  //   vfs: vfs
  // };

  // const applicationConfigFilename = path.resolve(__dirname, './enyo.app.zenobia.xml');

  // const executionResult = application.run(applicationConfigFilename, executionContext);
  // process.exitCode = executionResult;
  // return executionResult;
};
