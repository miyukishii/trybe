import json  # json é um modulo que vem embutido, porém precisamos importá-lo

try:

    with open("video_games.json", mode='r') as file:
    # content = file.read()  # leitura do arquivo
        games = json.load(file)  # o conteúdo é transformado em estrutura python equivalente, dicionário neste caso.
    # acessamos a chave results que é onde contém nossa lista de games
except FileNotFoundError as exc:
    print(exc)

# print(games[0])  # imprime o primeiro pokemon da lista
# print(len(games))