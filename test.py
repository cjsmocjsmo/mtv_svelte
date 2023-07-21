#!/usr/bin/python3

import re
import os
import requests

silo = requests.get('http://192.168.0.94:8080/scifi/silo/01')
if silo.text != []:
    print("Silo: sucess")
else:
    print("Silo: failed")


thelastofus = requests.get('http://192.168.0.94:8080/scifi/thelastofus/01')
print(thelastofus.text)
if thelastofus.text != []:
    print("The Last of Us: sucess")
else:
    print("The Last of Us: failed")

foundation1 = requests.get('http://192.168.0.94:8080/scifi/foundation/01')

foundation2 = requests.get('http://192.168.0.94:8080/scifi/foundation/02')

alteredcarbon1 = requests.get('http://192.168.0.94:8080/scifi/alteredcarbon/01')

alteredcarbon2 = requests.get('http://192.168.0.94:8080/scifi/alteredcarbon/02')

cowboybebop = requests.get('http://192.168.0.94:8080/scifi/cowboybebop/01')

forallmankind1 = requests.get('http://192.168.0.94:8080/scifi/forallmankind/01')

forallmankind2 = requests.get('http://192.168.0.94:8080/scifi/forallmankind/02')

forallmankind3 = requests.get('http://192.168.0.94:8080/scifi/forallmankind/03')



