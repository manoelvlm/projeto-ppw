import os

import pandas as pd
import psycopg2
from dotenv import load_dotenv
from psycopg2 import sql
from sqlalchemy import create_engine

# Carrega as variáveis de ambiente do arquivo .env
load_dotenv()

def create_table():
    dbname = os.getenv('DB_NAME')
    user = os.getenv('DB_USER')
    password = os.getenv('DB_PASSWORD')
    host = os.getenv('DB_HOST')

    conn = psycopg2.connect(dbname=dbname, user=user, password=password, host=host)
    conn.autocommit = True

    with conn.cursor() as cur:
        cur.execute('''
            DROP TABLE IF EXISTS investidores;
            CREATE TABLE IF NOT EXISTS investidores (
                id_investidor SERIAL PRIMARY KEY,
                codigo_investidor VARCHAR(255),
                data_adesao VARCHAR(255),
                estado_civil VARCHAR(255),
                genero CHAR(1),
                profissao VARCHAR(255),
                idade INT,
                uf_investidor VARCHAR(2),
                cidade_investidor VARCHAR(255),
                pais_investidor VARCHAR(255),
                situacao_conta CHAR(1),
                operou_12_meses CHAR(1)
            )
        ''')

    conn.close()

def insert_data_from_csv(file_path):
    dbname = os.getenv('DB_NAME')
    user = os.getenv('DB_USER')
    password = os.getenv('DB_PASSWORD')
    host = os.getenv('DB_HOST')

    engine = create_engine(f'postgresql+psycopg2://{user}:{password}@{host}/{dbname}')

    chunksize = 10000  # define o número de linhas por chunk

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
        chunk.to_sql('investidores', engine, if_exists='append', index=False)

create_table()
insert_data_from_csv(os.getenv('CSV_PATH'))
