@echo off
:start
cls
echo Compiling...
jar cfe app.jar Main Main.class Hello.class Read.class
java -jar app.jar
 
pause
goto start
