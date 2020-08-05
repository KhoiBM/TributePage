var gulp = require('gulp');
var bs = require('browser-sync').create('My server'); // create a browser sync instance.
var reload = bs.reload;
gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./app",
            index: "index.html"
        },
        // files: ["**/*.css", "**/*.html"],
        files: ['./app'],
        watch: true,
        port: 3100
    });
    // gulp.watch("**/*.html").on("change", reload);
});