import math
import pandas as pd
import numpy as np
import matplotlib as mpl
import matplotlib.pyplot as plt


def I(x):
    z = x/(2**0.5)
    b = (0.5*(math.erf(z)))+0.5
    return b

df = pd.read_csv('MGLU.csv')
soma = 0
count = df['Valor'].count()
for i in df.index:
    soma += math.log(float(df['Valor'][i]))
media =  soma/count
#media = 2.454439041#populacional
#desvio = 0.5268861611#populacional
soma = 0
for i in df.index:
    soma += ((math.log(float(df['Valor'][i]))) - media)**2
desvio = (soma/count)**(0.5)
print("Média:", media)
print("Desvio:",desvio)

k = round(1+(3.3*math.log10(count)))
min = df['Valor'].min()
max = df['Valor'].max()
print("Maior valor:",max)
print("Menor valor:", min)
amplitude = max - min
h = amplitude/k
print("h:", h)
b = round(min + h, 3)
a = min
soma = 0

logn = []
alpha = (math.log(min) - media)/desvio
pk = round(I(alpha),3)
logn.append(pk)
print("Pk(",min,"< Z) =",pk)
soma = round((pk+soma),3)
while(a < max):
    m = round(a-0.001,3)
    if(b == max):
        l = round(b+0.001,3)
    else:
        l = b
    alpha = (math.log(m) - media)/desvio
    beta = (math.log(l) - media)/desvio
    pk = I(beta)-I(alpha)
    pk = round(pk,3)
    logn.append(pk)
    soma = round((pk+soma),3)
    if(b != max):
        print("Pk(",a,"<= Z <",b,") =",pk)
    else:
        print("Pk(",a,"<= Z <=",b,") =",pk)
    a = round(a+h, 3)
    b = round(b+h, 3)

beta = (math.log(max) - media)/desvio
pk = round(1-I(beta),3)
logn.append(pk)
print("Pk(",max,"> Z) =",pk)
soma = round((pk+soma),3)
print("\nSoma dos valores", soma)
d = {"Pk": logn}
data = pd.DataFrame(data=d)
print(data)
s = np.random.lognormal(media, desvio, 1)
print("Número gerado randomicamente:",s[0])
plt.title('Histograma de Pk', fontsize=20)
plt.xlabel('Pk', fontsize=15)
plt.ylabel('Frequência', fontsize=15)
plt.tick_params(labelsize=12)
plt.hist(logn, 5, rwidth=0.9)
plt.show()