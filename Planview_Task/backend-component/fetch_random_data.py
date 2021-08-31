import datetime
from random import randrange


def fetchdata():
    sdicts = {
    'run_id': randrange(10, 100),
    'run_ts': datetime.datetime.now().date().strftime("%d/%m/%Y"),
    'progress_date': datetime.datetime.now().date().strftime("%d/%m/%Y"),
    'prediction':'red',
    'prediction_details': {
        'finish_date':'Dec 13, 2021' ,
        'confidence': randrange(10, 100)
    }
    }
    if sdicts['prediction_details']['confidence'] > 75:
        sdicts['prediction'] = 'green'
    print (sdicts)
    return sdicts

fetchdata()