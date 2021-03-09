import math
import pandas as pd
import numpy as np
import matplotlib as mpl
import matplotlib.pyplot as plt
import sys
import json


def I(x):
    z = x/(2**0.5)
    b = (0.5*(math.erf(z)))+0.5
    return b


def cal_media(x):
    soma = 0
    count = len(x)
    for i in range(0, count):
        soma += math.log(x[i])
    media_mov = soma/count
    return media_mov


def cal_desvio(x, media_mov):
    soma = 0
    count = len(x)
    for i in range(0, count):
        soma += (math.log(x[i]) - media_mov)**2
    desvio_mov = (soma/count)**(0.5)
    return desvio_mov


def getValor(p0, p1, array):
    #arquivo.append(p0)
    array.append(p1)
    #print(array)
    #print(p0)
    media_mov = cal_media([p0,p1])
    desvio_mov = cal_desvio([p0,p1], media_mov)
    #print(cal_desvio([p1],cal_media([p1])))
    #mov = np.random.lognormal(media, desvio, 500)
    #media_mov = cal_media(mov)
    #desvio_mov = cal_desvio(mov, media_mov)
    valor = 0
    if p0 > p1:
        while valor <= p0:
            valor = np.random.lognormal(media_mov, desvio_mov, 1)
            #valor = ((valor[0]-p1)/abs(valor[0]-p1))*valor[0]
    #if(media > media_mov):
            valor = valor[0]
            print(valor)
        print(1)
    else:
        valor = -1
        while valor >= p1 or valor <= p0:
            valor = np.random.lognormal(media_mov, desvio_mov, 1)
            valor = valor[0]
            print(valor)
        print(-1)
    print(valor)
    return valor


def read_in():
    lines = sys.stdin.readlines()
    # Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])


def main():
    # get our data as an array from read_in()
    lines = read_in()

    # Sum  of all the items in the providen array
    # total_sum_inArray = 0
    array = []
    for item in lines:
        array.append(float(item))
    # print(array)
    return array


# Start process
if __name__ == '__main__':
    arquivo = main()

df = pd.DataFrame(arquivo, columns=['Valor'])
soma = 0
count = df['Valor'].count()
for i in df.index:
    soma += math.log(float(df['Valor'][i]))
media = soma/count
# media = 2.454439041#populacional
# desvio = 0.5268861611#populacional
soma = 0
for i in df.index:
    soma += ((math.log(float(df['Valor'][i]))) - media)**2
desvio = (soma/count)**(0.5)
data = {}
data["Entrada"] = arquivo
data["Media"] = media
data["Desvio"] = desvio

k = round(1+(3.3*math.log10(count)))
data["Classes"] = k
min = df['Valor'].min()
max = df['Valor'].max()
data["Maior_valor"] = max
data["Menor_valor"] = min
amplitude = max - min
data["Amplitude"] = amplitude
h = amplitude/k
data["h"] = h
b = round(min + h, 3)
a = min
soma = 0

logn = []
alpha = (math.log(min) - media)/desvio
pk = round(I(alpha), 3)
logn.append(pk)
pks = []
str = "Pk({} < Z)".format(min)
pks.append(str)
soma = round((pk+soma), 3)
while(a < max):
    m = round(a-0.001, 3)
    if(b == max):
        l = round(b+0.001, 3)
    else:
        l = b
    alpha = (math.log(m) - media)/desvio
    beta = (math.log(l) - media)/desvio
    pk = I(beta)-I(alpha)
    pk = round(pk, 3)
    logn.append(pk)
    soma = round((pk+soma), 3)
    if(b != max):
        str = "Pk({} <= Z < {})".format(a, b)
        pks.append(str)
    else:
        str = "Pk({} <= Z <= {})".format(a, b)
        pks.append(str)
    a = round(a+h, 3)
    b = round(b+h, 3)

beta = (math.log(max) - media)/desvio
pk = round(1-I(beta), 3)
logn.append(pk)
str = "Pk({} > Z)".format(max)
pks.append(str)
soma = round((pk+soma), 3)
data["Soma_dos_valores_pks"] = soma
d = {"Pk": logn}
data["Pks"] = logn
data["strings"] = pks
dt = pd.DataFrame(data=d)
# data["Data"] = dt
p1 = df['Valor'][0]
while True:
    aux = arquivo.copy()
    #aux = []
    valor = getValor(math.exp(media), p1, aux)
    p2 = valor
    aux = [p1]
    #aux.pop()
    #print(aux)
    valor = getValor(p1, p2, aux)
    p3 = valor
    print([p1,p2,p3])
    #print(valor)
    if((p2 > p1 and p3 > p2) or (p1 > p2 and p2 > p3)):
        print(2)
        continue
    valor = getValor(p2, p3, aux)
    p4 = valor
    print([p1,p2,p3,p4])
    if((p3 > p2 and p4 > p3) or (p2 > p3 and p3 > p4)):
        print(3)
        continue
    valor = getValor(p3, p4, aux)
    p5 = valor
    print([p1,p2,p3,p4,p5])
    if((p4 > p3 and p5 > p4) or (p3 > p4 and p4 > p5)):
        print(4)
        continue
    break
# p2 = np.random.lognormal(media, desvio, 1)
# p3 = np.random.lognormal(media, desvio, 1)
# p4 = np.random.lognormal(media, desvio, 1)
# p5 = np.random.lognormal(media, desvio, 1)
data["N_g_r"] = [p1, p2, p3, p4, p5]
# print(json.dumps(pks))
print(json.dumps(data))
'''plt.title('Histograma de Pk', fontsize=20)
plt.xlabel('Pk', fontsize=15)
plt.ylabel('Frequência', fontsize=15)
plt.tick_params(labelsize=12)
plt.hist(logn, 5, rwidth=0.9)
plt.show()'''
