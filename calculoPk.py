import math
import pandas as pd
import numpy as np
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

# Inicializar variáveis
PontoA = 0.0
PontoB = 0.0
DistanciaAB = 0.0
#
Tendencia = 'Baixa'
AtingiuLimiar = 'Não'
#
Indice = []
SARParabolic = []
Fechamento = []
Movimento = []
Correcao = []
MovimentoArtificial = []
MovimentoArtificialRand = []
MovimentoArtificialRandAcumulado = []
CorrecaoArtificial = []
CorrecaoArtificialRand = []
CorrecaoArtificialRandAcumulado = []
PontoArtificial = []

df = pd.DataFrame(arquivo, columns=['Fechamento'])
dfOrdenados = df['Fechamento']
Tamanho = 500
if Tamanho > len(dfOrdenados):
    Tamanho = len(dfOrdenados)
# Somente os preços de fechamento de 0 até Tamanho
for i in range(Tamanho):
    Fechamento.append(i)
    Fechamento[i] = dfOrdenados[i]

for i in range(len(Fechamento)):
    Indice.append(i)
    SARParabolic.append(0)
    # Inicializar o SARParabolic no Primeiro preço de Fechamento
    if i == 0:
        SARParabolic[i] = Fechamento[i]
    else:
        if AtingiuLimiar == 'Sim':
            AtingiuLimiar = 'Não'
            SARParabolic[i] = Fechamento[i-2]
            if Tendencia == 'Alta':
                Tendencia = 'Baixa'
                # Encontrar maior ponto do vetor
                PontoA = SARParabolic[i]
                # Calcular Movimento
                if PontoB > 0:
                    DistanciaAB = (PontoA - PontoB) / PontoB
                    if DistanciaAB > 0:
                        Movimento.append(DistanciaAB)
                        # print(Movimento)
                    else:
                        if DistanciaAB < 0:
                            Correcao.append(abs(DistanciaAB))
                            # print(Correcao)
            else:  # Tendencia == 'Baixa'
                Tendencia = 'Alta'
                # Encontrar maior ponto do vetor
                PontoB = SARParabolic[i]
                # Calcular Movimento
                if PontoA > 0:
                    DistanciaAB = (PontoB - PontoA) / PontoA
                    if DistanciaAB > 0:
                        Movimento.append(DistanciaAB)
                        # print(Movimento)
                    else:
                        if DistanciaAB < 0:
                            Correcao.append(abs(DistanciaAB))
                            # print(Correcao)
        else:  # AtingiuLimiar == 'Não':
            # Atualizar o valor de SARParabolic com fator de 0.02
            fator = 0.02
            if Tendencia == 'Alta':
                SARParabolic[i] = SARParabolic[i-1] * (1+fator)
            else:  # Tendencia == 'Baixa':
                SARParabolic[i] = SARParabolic[i-1] * (1-fator)
            # Verificar se o Fechamento atingiu o limiar para mudar o sentido da tendência
            if Tendencia == 'Alta':
                if Fechamento[i] < SARParabolic[i]:
                    AtingiuLimiar = 'Sim'
            else:  # Tendencia == 'Baixa':
                if Fechamento[i] > SARParabolic[i]:
                    AtingiuLimiar = 'Sim'

# Calcular Média e Desvio Padrão usando Logaritmo
#MovimentoMu = np.mean(Movimento)
MovimentoMu = cal_media(Movimento)
#MovimentoSigma = np.std(Movimento)
MovimentoSigma = cal_desvio(Movimento, MovimentoMu)
#CorrecaoMu = np.mean(Correcao)
CorrecaoMu = cal_media(Correcao)
#CorrecaoSigma = np.std(Correcao)
CorrecaoSigma = cal_desvio(Correcao, CorrecaoMu)

for i in range(Tamanho):
    MovimentoArtificialRand.append(0)
    MovimentoArtificialRandAcumulado.append(0)
    CorrecaoArtificialRand.append(0)
    CorrecaoArtificialRandAcumulado.append(0)
    if i == 0:
        MovimentoArtificialRand[i] = 0
        CorrecaoArtificialRand[i] = 0
    if i > 0:
        MovimentoArtificialRand[i] = np.random.lognormal(MovimentoMu, MovimentoSigma, 1)[0]
        CorrecaoArtificialRand[i] = np.random.lognormal(CorrecaoMu, CorrecaoSigma, 1)[0]
        # Falta acompanhar a média dos valores randômicos para atender à probalidade de cada classe
        MovimentoArtificialRandAcumulado[i] = MovimentoArtificialRand[i] / i
        CorrecaoArtificialRandAcumulado[i] = CorrecaoArtificialRand[i] / i

for i in range(len(Movimento)):
    #MovimentoArtificial = np.append(MovimentoArtificial,0)
    WarmUP = round(Tamanho * 0.1) + i
    MovimentoArtificial.append(MovimentoArtificialRand[WarmUP])
    #MovimentoArtificial[i] = np.random.lognormal(MovimentoMu, MovimentoSigma, 1)
#
#CorrecaoArtificialRand = np.random.lognormal(CorrecaoMu, CorrecaoSigma, len(Correcao))
for i in range(len(Correcao)):
    #CorrecaoArtificial = np.append(CorrecaoArtificial,0)
    WarmUP = round(Tamanho * 0.1) + i
    CorrecaoArtificial.append(CorrecaoArtificialRand[WarmUP])
    #CorrecaoArtificial[i] = np.random.lognormal(CorrecaoMu, CorrecaoSigma, 1)

# Gerar Pontos Artificiais
for i in range(len(MovimentoArtificial)):
    PontoArtificial.append(0)
    if i == 0:
        PontoArtificial[i] = Fechamento[0]
        Impar = True
        Par = False
        j = 0
        k = 0
    else:
        if Par == True:
            PontoArtificial[i] = PontoArtificial[i-1] * (1 + MovimentoArtificial[j])
            j += 1
            Par = False
            Impar = True
        else:
            if Impar == True:
                PontoArtificial[i] = PontoArtificial[i-1] * (1 - CorrecaoArtificial[k])
                k += 1
                Impar = False
                Par = True


soma = 0
count = dfOrdenados.count()
for i in df.index:
    soma += math.log(float(dfOrdenados[i]))
media = soma/count
# media = 2.454439041#populacional
# desvio = 0.5268861611#populacional
soma = 0
for i in df.index:
    soma += ((math.log(float(dfOrdenados[i]))) - media)**2
desvio = (soma/count)**(0.5)
data = {}
data["Entrada"] = arquivo
data["Media"] = media
data["Desvio"] = desvio

k = round(1+(3.3*math.log10(count)))
data["Classes"] = k
min = dfOrdenados.min()
max = dfOrdenados.max()
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
#data["Fechamento"] = Fechamento
data["SARParabolic"] = SARParabolic
data["PontoArtificial"] = PontoArtificial
data["MovimentoArtificialRandAcumulado"] = MovimentoArtificialRandAcumulado
data["CorrecaoArtificialRandAcumulado"] = CorrecaoArtificialRandAcumulado
data["Movimento"] = Movimento
data["Correcao"] = Correcao
data["MovimentoArtificial"] = MovimentoArtificial
data["CorrecaoArtificial"] = CorrecaoArtificial
print(json.dumps(data))
'''plt.title('Histograma de Pk', fontsize=20)
plt.xlabel('Pk', fontsize=15)
plt.ylabel('Frequência', fontsize=15)
plt.tick_params(labelsize=12)
plt.hist(logn, 5, rwidth=0.9)
plt.show()'''
