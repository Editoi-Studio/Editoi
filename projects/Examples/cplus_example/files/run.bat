@echo off
:start
cls
echo Compiling...
g++ -Wall main.cpp -o main
timeout 3
:wait
if exist main.exe (main.exe) else (timeout 3 && goto wait)
pause
goto start
