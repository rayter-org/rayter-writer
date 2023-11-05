import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
//import styles from '@ironkinoko/rollup-plugin-styles';
import postcss from 'rollup-plugin-postcss'
//import sass from 'rollup-plugin-sass';
import vue from "@vitejs/plugin-vue"

export default {
	input: "src/main.js",
	output: {
		file: "dist/bundle.js",
		format: "iife",
	},
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify("development"),
            "__VUE_OPTIONS_API__": true,
            "__VUE_PROD_DEVTOOLS__": false,
            preventAssignment:true,
        }),
        nodeResolve(),
        commonjs(),

        vue(),
        
        //vue({style:{
        //    //preprocessLang: "sass",
        //}}),

        postcss(),
        /*postcss({
            use: [
                [
                    "sass",
                    {
                        indentedSyntax: true,
                    }
                ]
            ]
        }),*/

        //styles(),
        /*styles({
            mode: "extract",
            minimize: true,
            url: {
                hash: 'assets/[name]-[hash][extname]',
                publicPath: './assets/',
            },
        }),*/
        //sass(),
    ],
};
