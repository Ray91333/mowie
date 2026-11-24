@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Собираю курс...
python build.py || goto :error
git add -A
git diff --cached --quiet && (echo Изменений нет, сайт уже актуален. & goto :end)
set MSG=Обновление курса %date% %time:~0,5%
git commit -m "%MSG%" || goto :error
echo Отправляю на GitHub...
git push || goto :error
echo.
echo Готово! Через 1-2 минуты сайт обновится: https://ray91333.github.io/mowie/
goto :end
:error
echo.
echo Что-то пошло не так. Покажите это окно Claude.
:end
pause
