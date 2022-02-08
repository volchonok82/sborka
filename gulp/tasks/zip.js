import del from "del";
import gulpzip from "gulp-zip";

export const zip = () => {
    del(`./${app.path.rootFolder}.zip`);
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`,{})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "ZIP",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(gulpzip(`${app.path.rootFolder}.zip`))
        .pipe(app.gulp.dest('./'));
};