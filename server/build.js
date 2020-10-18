import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import chalk from 'chalk';

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.log(chalk.red(err));
        return 1;
    }
    return 0;
});