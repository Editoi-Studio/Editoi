
global _main  
extern _scanf 
extern _printf   

SECTION .data
    message1: db "Reading first number: ", 0
    message2: db "Reading second number: ", 0
    formatin: db "%d", 0
    formatout: db "Total: %d", 10, 0 ; newline, nul terminator
    integer1: times 4 db 0 ; 32-bits integer = 4 bytes
    integer2: times 4 db 0 ;

SECTION .text
_main:
   push ebx ; save registers
   push ecx
   push message1
   call _printf

   add esp, 4 ; remove parameters
   push integer1 ; address of integer1 (second parameter)
   push formatin ; arguments are right to left (first parameter)
   call _scanf

   add esp, 8 ; remove parameters
   push message2
   call _printf

   add esp, 4 ; remove parameters
   push integer2 ; address of integer2
   push formatin ; arguments are right to left
   call _scanf

   add esp, 8 ; remove parameters
 
   mov ebx, dword [integer1]
   mov ecx, dword [integer2]
   add ebx, ecx ; add the values          ; the addition
   push ebx
   push formatout   
   call _printf                            ; call printf to display the sum
   add esp, 8                             ; remove parameters
   pop ecx
   pop ebx ; restore registers in reverse order
   mov eax, 0 ; no error
   ret
