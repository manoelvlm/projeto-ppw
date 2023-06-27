from abc import ABC, abstractmethod

class InvestidorQuestions(ABC):

    @abstractmethod
    def age_distribution():
        pass

    @abstractmethod
    def top_3_most_common_jobs():
        pass

    @abstractmethod
    def active_inactive_investidors():
        pass

    @abstractmethod
    def state_with_most_investidors():
        pass

    @abstractmethod
    def city_with_most_investidors():
        pass

    @abstractmethod
    def civil_status_investidors_activity():
        pass

    @abstractmethod
    def investidors_genre():
        pass

    @abstractmethod
    def accession_by_time():
        pass

    @abstractmethod
    def job_investidor_type_year_activity():
        pass

    @abstractmethod
    def most_common_job():
        pass
