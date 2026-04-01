import replace from "gulp-replace"; //Плагин для замены текста
import plumber from "gulp-plumber";//Плагин для обработки ошибок
import notify from "gulp-notify";//Плагин для вывода сообщений (на случай ошибок)
import browsersync from "browser-sync";//Плагин для локального сервера и обновления страницы
import newer from "gulp-newer";//Плагин для проверки обновлений файлов

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer
}

////Здесь мы подключаем все необходимые плагины для работы