const nodeResolve = require("rollup-plugin-node-resolve");
const babel = require("rollup-plugin-babel");
const butternut = require("rollup-plugin-butternut");
const production = process.env.NODE_ENV === "production";

export default {
    entry: "src/javascript/main.js",
    format: "iife",
    useStrict: false,
    moduleName: "novikova",
    sourceMap: !production,
    dest: "dist/js/bundle.js",
    plugins: [
        babel({
            exclude: "node_modules/**",
            plugins: [
                ["transform-react-jsx", { "pragma": "h" }]// default pragma is preact.h
            ]}),
        nodeResolve({ browser: true, jsnext: true, main: true }),
        production ? butternut({ sourceMap: false }) : {}
    ]
}