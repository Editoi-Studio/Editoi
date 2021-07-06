@echo off
:start
cls
echo Compiling...
nasm -fwin32 main.asm
gcc main.obj -o main  

timeout 3
:wait
if exist main.exe (main.exe) else (timeout 3 && goto wait)
pause
goto start
 