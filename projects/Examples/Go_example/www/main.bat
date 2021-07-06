@echo off
:start
cls
echo Compiling...
#go mod init example.com/hello
go run .

pause
goto start

