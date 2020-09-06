// i18next-parser.config.js

module.exports = {
    contextSeparator: '_',
    // Key separator used in your translation keys

    createOldCatalogs: false,
    // Save the \_old files

    defaultNamespace: 'translation',
    // Default namespace used in your i18next config

    defaultValue: '',
    // Default value to give to empty keys

    indentation: 2,
    // Indentation of the catalog files

    keepRemoved: false,
    // Keep keys from the catalog that are no longer in code

    keySeparator: '.',
    // Key separator used in your translation keys
    // If you want to use plain english keys, separators such as `.` and `:` will conflict. You might want to set `keySeparator: false` and `namespaceSeparator: false`. That way, `t('Status: Loading...')` will not think that there are a namespace and three separator dots for instance.

    lineEnding: 'auto',
    // Control the line ending. See options at https://github.com/ryanve/eol

    locales: ['en'],
    // An array of the locales in your applications

    namespaceSeparator: ':',
    // Namespace separator used in your translation keys
    // If you want to use plain english keys, separators such as `.` and `:` will conflict. You might want to set `keySeparator: false` and `namespaceSeparator: false`. That way, `t('Status: Loading...')` will not think that there are a namespace and three separator dots for instance.

    output: './public/locales/$LOCALE/$NAMESPACE.json',
    // Supports $LOCALE and $NAMESPACE injection
    // Supports JSON (.json) and YAML (.yml) file formats
    // Where to write the locale files relative to process.cwd()

    input: './src/**/*.tsx',
    // An array of globs that describe where to look for source files
    // relative to the location of the configuration file

    sort: false,
    // Whether or not to sort the catalog

    skipDefaultValues: false,
    // Whether to ignore default values.

    useKeysAsDefaultValue: false,
    // Whether to use the keys as the default value; ex. "Hello": "Hello", "World": "World"
    // This option takes precedence over the `defaultValue` and `skipDefaultValues` options

    verbose: false,
    // Display info about the parsing including some stats

    failOnWarnings: false,
    // Exit with an exit code of 1 on warnings
};
