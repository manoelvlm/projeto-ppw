from django.db import models

class Investidor(models.Model):
    id = models.AutoField(primary_key=True, db_column='id_investidor')
    code = models.CharField(max_length=255, blank=True, null=True, db_column='codigo_investidor')
    accession_date = models.CharField(max_length=255, blank=True, null=True, db_column='data_adesao')
    civil_state = models.CharField(max_length=255, blank=True, null=True, db_column='estado_civil')
    genre = models.CharField(max_length=1, blank=True, null=True, db_column='genero')
    carreer = models.CharField(max_length=255, blank=True, null=True, db_column='profissao')
    age = models.IntegerField(blank=True, null=True, db_column='idade')
    state = models.CharField(max_length=2, blank=True, null=True, db_column='uf_investidor')
    city = models.CharField(max_length=255, blank=True, null=True, db_column='cidade_investidor')
    country = models.CharField(max_length=255, blank=True, null=True, db_column='pais_investidor')
    account_status = models.CharField(max_length=1, blank=True, null=True, db_column='situacao_conta')
    had_activity_last_year = models.CharField(max_length=1, blank=True, null=True, db_column='operou_12_meses')

    class Meta:
        managed = False
        db_table = 'investidores'
