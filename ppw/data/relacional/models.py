from sqlalchemy.orm import declarative_base
from sqlalchemy import Column, Integer, String

Base = declarative_base()

class Investidor(Base):
    __tablename__ = "Investidores"

    id = Column(String, primary_key=True)
    accession_date = Column(String)
    civil_status = Column(String)
    job_type = Column(String)
    age = Column(Integer)
    code = Column(String)
    state = Column(String)
    city = Column(String)
    country = Column(String)
    account_status = Column(String)
    genre = Column(String)

    def __repr__(self):
        return """<Investidor (
            accession_date='%s',
            civil_status='%s',
            job_type='%s',
            age='%s',
            code='%s',
            state='%s',
            city='%s',
            country='%s',
            account_status='%s',
            genre='%s')>""".format(
                self.accession_date,
                self.civil_status,
                self.job_type,
                self.age,
                self.code,
                self.state,
                self.city,
                self.country,
                self.account_status,
                self.genre)
