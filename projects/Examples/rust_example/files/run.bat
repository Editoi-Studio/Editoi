@echo off
:start
cls
echo Compiling...
rustc main.rs

timeout 3
:wait
if exist main.exe (main.exe) else (timeout 3 && goto wait)
pause
goto start