import requests
import pandas as pd


def update():
    url = 'https://api.nomics.com/v1/currencies/ticker?key=62da6f10116c0b7113ded736960e81697da09e14&convert=INR&per-page=100&page=1'
    response = requests.get(url)
    temp = response.json()
    df = pd.read_csv("coinvalue.csv")
    for x in range(len(temp)):
        df.loc[x, 'old_value'] = df.loc[x, 'new_value']
        df.loc[x, 'new_value'] = temp[x]["price"]
        df.to_csv("coinvalue.csv", index=False)
