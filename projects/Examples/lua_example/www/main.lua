function hello()
  print("Hello world!")
end

function read(n)   
  print("Reading " .. n .. " number:")
  return io.read("*n")  
end

function main()
  
  hello()
    
  a = read("first")
  b = read("second")
  soma = a+b
  
  print("Total: " .. soma )
  
end

main()