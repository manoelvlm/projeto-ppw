import os
import subprocess
import zipfile

import psycopg2
import requests
from dotenv import load_dotenv
from psycopg2 import sql
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.edge.service import Service
from sqlalchemy import create_engine

load_dotenv()

def get_zip_file():
  edge_options = webdriver.EdgeOptions()

  edge_options.add_argument("--user-data-dir=~/.config/microsoft-edge")
  edge_options.add_argument('--profile-directory=Default')
  edge_options.add_argument('--headless')

  driver = webdriver.Edge(service=Service('/usr/local/bin/msedgedriver'), options=edge_options)
  driver.get('https://www.tesourotransparente.gov.br/ckan/dataset/investidores-do-tesouro-direto')

  download_link = driver.find_element(By.XPATH, '//a[contains(@href, "TesouroDireto.zip")]')

  final_download_link = download_link.get_attribute('href')
  print(final_download_link)

  subprocess.run(['wget', '-O', 'TesouroDireto.zip', final_download_link], check=True)


def insert_data_from_csv(file_path):

  subprocess.run(['unzip', '-o', 'TesouroDireto.zip', '-d', '.'])

  dbname = os.getenv('DB_NAME')
  user = os.getenv('DB_USER')
  password = os.getenv('DB_PASSWORD')
  host = os.getenv('DB_HOST')

  engine = create_engine(f'postgresql+psycopg2://{user}:{password}@{host}/{dbname}')

  chunksize = 10000

  for chunk in pd.read_csv(file_path, sep=';', encoding='ISO-8859-1', chunksize=chunksize):
    chunk.columns = [
      'codigo_investidor',
      'data_adesao', 
      'estado_civil', 
      'genero', 
      'profissao', 
      'idade', 
      'uf_investidor', 
      'cidade_investidor', 
      'pais_investidor', 
      'situacao_conta', 
      'operou_12_meses'
    ]

    # Usando o método to_sql com 'if_exists' como 'replace' não é eficiente para a situação
    # Dado que a operação replace deletaria e recriaria a tabela.
    # Em vez disso, recomendo utilizar o método abaixo, que já contém a lógica do INSERT ... ON CONFLICT.
    chunk.to_sql('investidores', engine, if_exists='append', index=False, method='multi', chunksize=chunksize)

if __name__ == '__main__':
  get_zip_file()
  # insert_data_from_csv(os.getenv('CSV_PATH'))