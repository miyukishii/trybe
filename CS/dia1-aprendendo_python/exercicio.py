#  Crie uma função que receba dois números e retorne o maior deles.
def returnHigherValue(a, b):
    if a > b:
        return a
    return b 

print("O maior valor é:", returnHigherValue(2, 4))

# Calcule a média aritmética dos valores contidos em uma lista.
def arithmeticAverage(array):
    result = 0
    
    for elem in array:
        result = result + elem
    return result / len(array)
        

print("A média aritmética é:", arithmeticAverage([1,2,3,4]))

# Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
def returnSquare(n):
    for num in range(n):
        print (n * '*')
        

returnSquare(4)