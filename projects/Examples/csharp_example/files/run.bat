@echo off
:start
cls
echo Compiling...
"C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools\MSBuild\15.0\Bin\Roslyn\csc.exe" main.cs

timeout 3
:wait
if exist main.exe (main.exe) else (timeout 3 && goto wait)
pause
goto start