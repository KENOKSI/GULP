import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

// Конвертация OTF → TTF → WOFF2
export const otfToTtf = () => {
    return app.gulp.src(`${app.path.src.fonts}*.otf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(fonter({ formats: ['ttf'] }))
        .pipe(app.gulp.dest(`${app.path.src.fonts}`))
        .pipe(app.gulp.src(`${app.path.src.fonts}*.ttf`))
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(app.path.build.fonts));
}

// Конвертация TTF → WOFF + WOFF2
export const ttfToWoff = () => {
    return app.gulp.src(`${app.path.src.fonts}*.ttf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(fonter({ formats: ['woff'] }))
        .pipe(app.gulp.dest(app.path.build.fonts))
        .pipe(app.gulp.src(`${app.path.src.fonts}*.ttf`))
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(app.path.build.fonts));
}

// Автоматическое создание SCSS
export const fontsStyle = (done) => {
    const scssFile = `${app.path.srcFolder}/scss/fonts.scss`;
    const fontsDir = app.path.build.fonts;

    if (fs.existsSync(scssFile)) {
        console.log("⚠️ Файл scss/fonts.scss уже существует. Удалите его, если хотите обновить.");
        return done();
    }

    fs.readdir(fontsDir, (err, items) => {
        if (err || !items || items.length === 0) {
            console.log("❌ Нет шрифтов в папке или ошибка чтения");
            return done();
        }

        let content = '';
        let fontNames = new Set();

        items.forEach(item => {
            let fontName = item.split('.')[0];
            if (!fontNames.has(fontName)) {
                fontNames.add(fontName);
                content += `@include font("${fontName}", "${fontName}", "400", "normal");\r\n`;
            }
        });

        if (content) {
            fs.writeFileSync(scssFile, content);
            console.log(`✅ Создан файл scss/fonts.scss с ${fontNames.size} шрифтами`);
        } else {
            console.log("⚠️ Шрифты не найдены");
        }
        done();
    });
}