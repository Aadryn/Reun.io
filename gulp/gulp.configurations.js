(function (module, require) {
    'use strict';

    var plugins = function (plugins) {

        return {
            builds: {
                client: {
                    sourceDirectory: 'sources/client',
                    baseOutputDirectory: 'builds/public'
                },
                server: {
                    baseOutputDirectory: 'builds'

                }

            },
            assets: {
                client: {
                    index: 'sources/client/index.html',
                    scripts: [
                        'sources/client/application/reunio.tool.js',
                        'sources/client/application/reunio.application.js',
                        'sources/client/application/reunio.configuration.js',
                        'sources/client/application/**/*.module.js',
                        'sources/client/application/**/*.configuration.js'
                    ],
                    styles: [
                        'sources/client/assets/styles/default.css'
                    ]
                },
                server: {
                    scripts: [
                        'sources/server/**/*.js'
                    ]
                }
            },
            options: {
                del: {},
                wiredep: {},
                inject: {
                    name: 'application',
                    relative: true
                },
                ngHtml2js: {
                    template: '    $templateCache.put(\'<%= template.url %>\', \'<%= template.escapedContent %>\');'
                },
                usemin: {
                    "styles_bower": [plugins.gulp_minify_css(), plugins.gulp_rev()],
                    "scripts_bower": [plugins.gulp_uglify(), plugins.gulp_rev()],
                    "styles_application": [plugins.gulp_minify_css(), plugins.gulp_rev()],
                    "scripts_application": [plugins.gulp_uglify(), plugins.gulp_rev()]
                },
                uglify: {
                    indent_start: 0,     // start indentation on every line (only when `beautify`)
                    indent_level: 4,     // indentation level (only when `beautify`)
                    quote_keys: false, // quote all keys in object literals?
                    space_colon: true,  // add a space after colon signs?
                    ascii_only: false, // output ASCII-safe? (encodes Unicode characters as ASCII)
                    inline_script: false, // escape "</script"?
                    width: 80,    // informative maximum line width (for beautified output)
                    max_line_len: 32000, // maximum line length (for non-beautified output)
                    ie_proof: true,  // output IE-safe code?
                    beautify: false, // beautify output?
                    source_map: null,  // output a source map
                    bracketize: false, // use brackets every time?
                    comments: false, // output comments?
                    semicolons: true,  // use semicolons to separate statements? (otherwise, newlines)
                }

            }
        }
    };

    module.exports = plugins;

})(module, require);