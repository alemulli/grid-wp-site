import { defineConfig } from 'vite'
import liveReload from 'vite-plugin-live-reload';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { glob } from 'glob';
import external_globals from 'rollup-plugin-external-globals';
import { writeFileSync, unlinkSync, existsSync } from 'fs'; // Import the writeFileSync function from the fs module

if (existsSync('./storage/cache/CompiledContainer.php')) {
  unlinkSync('./storage/cache/CompiledContainer.php');
}


const assetEntries = glob.sync('./resources/assets/**/*.{css,js}');
const blockEntries = glob.sync('./blocks/**/*.{css,js}');


writeFileSync('./vite-dev-blocks.js', blockEntries.map(entry => `import './${entry}'`).join('\n'));
let entries = [...assetEntries, ...blockEntries];



function camel_case_dash(str) {
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

function wp_globals() {
  const wpModules = [
    "a11y",
    "annotations",
    "api-fetch",
    "autop",
    "blob",
    "block-directory",
    "block-editor",
    "block-library",
    "block-serialization-default-parser",
    "blocks",
    "components",
    "compose",
    "core-data",
    "data",
    "data-controls",
    "date",
    "deprecated",
    "dom",
    "dom-ready",
    "edit-post",
    "editor",
    "element",
    "escape-html",
    "format-library",
    "hooks",
    "html-entities",
    "i18n",
    "is-shallow-equal",
    "keyboard-shortcuts",
    "keycodes",
    "list-reusable-blocks",
    "media-utils",
    "notices",
    "nux",
    "plugins",
    "primitives",
    "priority-queue",
    "redux-routine",
    "reusable-blocks",
    "rich-text",
    "server-side-render",
    "shortcode",
    "token-list",
    "url",
    "viewport",
    "warning",
    "wordcount"
  ];
  const otherModules = {
    "jquery": "jQuery",
    "tinymce": "tinymce",
    "moment": "moment",
    "react": "React",
    "react-dom": "ReactDOM",
    "backbone": "Backbone",
    "lodash": "lodash"
  };
  return {
    ...otherModules,
    ...Object.fromEntries(
      wpModules.map((handle) => [`@wordpress/${handle}`, `wp.${camel_case_dash(handle)}`])
    )
  };
}









export default defineConfig(() => {
  return {
    base: './',
    resolve: {
      alias: {
        '@': __dirname
      }
    },
    server: {
      cors: true,
      strictPort: true,
      port: 3000,
      https: false,
      hmr: {
        host: 'localhost',
      }
    },
    plugins: [liveReload(__dirname + '/**/*.(php|twig)')],
    build: {
      outDir: './dist',
      emptyOutDir: true,
      manifest: true,
      target: 'es2018',
      rollupOptions: {
        input: entries,
      },
      sourcemap: true,
      cssPostPluginOpts: {
        plugins: [
            postcssImport,
            autoprefixer,
            tailwindcss(),
            external_globals({...wp_globals()})
        ],
      },
      css: {
        devSourceMap: true,
      },
      minify: true,
      write: true
    }
  }
})
