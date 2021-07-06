global  _main
extern  _printf, _scanf

section .text
_main:
    push    message    
    call    _scanf 
    call    _printf
    add     esp, 4
    ret
message:
    db  'Hello, World', 10, 0
