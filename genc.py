import pandas as pd

google_id = ''
sheet_name = ''

url = 'https://docs.google.com/spreadsheets/d/{0}}/edit#gid=1671636016'

df = pd.read_csv(url)

print(df)