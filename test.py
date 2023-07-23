#!/usr/bin/python3

import re
import os
import requests

print("Starting Comedy Tests \n")

fuubar = requests.get('http://192.168.0.94:8080/comedy/fuubar/01')
if fuubar.text == "":
    print("Fuubar: FAILED")




print("\nStarting Fantasy Tests\n")

houseofthedragon = requests.get('http://192.168.0.94:8080/fantasy/houseofthedragon/01')
if houseofthedragon.text == "":
    print("House of the Dragon: FAILED")

ringsofpower = requests.get('http://192.168.0.94:8080/fantasy/ringsofpower/01')
if ringsofpower.text == "":
    print("Rings of Power: FAILED")

wheeloftime = requests.get('http://192.168.0.94:8080/fantasy/wheeloftime/01')
if wheeloftime.text == "":
    print("Wheel of Time: FAILED")




print("\nStarting Star Trek Tests\n")

voyager = requests.get('http://192.168.0.94:8080/startrek/voyager/01')
if voyager.text == "":
    print("Voyager: FAILED")

sttv = requests.get('http://192.168.0.94:8080/startrek/sttv/01')
if sttv.text == "":
    print("STTV: FAILED")

sttv2 = requests.get('http://192.168.0.94:8080/startrek/sttv/02')
if sttv2.text == "":
    print("STTV 2: FAILED")

sttv3 = requests.get('http://192.168.0.94:8080/startrek/sttv/03')
if sttv3.text == "":
    print("STTV 3: FAILED")

ent = requests.get('http://192.168.0.94:8080/startrek/enterprise/01')
if ent.text == "":
    print("Enterprise: FAILED")

ent2 = requests.get('http://192.168.0.94:8080/startrek/enterprise/02')
if ent2.text == "":
    print("Enterprise2: FAILED")

ent3 = requests.get('http://192.168.0.94:8080/startrek/enterprise/03')
if ent3.text == "":
    print("Enterprise3: FAILED")

tng = requests.get('http://192.168.0.94:8080/startrek/tng/01')
if tng.text == "":
    print("TNG: FAILED")

tng2 = requests.get('http://192.168.0.94:8080/startrek/tng/02')
if tng2.text == "":
    print("TNG: FAILED")

tng3 = requests.get('http://192.168.0.94:8080/startrek/tng/03')
if tng3.text == "":
    print("TNG: FAILED")

tng4 = requests.get('http://192.168.0.94:8080/startrek/tng/04')
if tng4.text == "":
    print("TNG: FAILED")

tng5 = requests.get('http://192.168.0.94:8080/startrek/tng/05')
if tng5.text == "":
    print("TNG: FAILED")

tng6 = requests.get('http://192.168.0.94:8080/startrek/tng/06')
if tng6.text == "":
    print("TNG: FAILED")

tng7 = requests.get('http://192.168.0.94:8080/startrek/tng/07')
if tng7.text == "":
    print("TNG: FAILED")

discovery = requests.get('http://192.168.0.94:8080/startrek/discovery/01')
if discovery.text == "":
    print("Discovery: FAILED")

discovery2 = requests.get('http://192.168.0.94:8080/startrek/discovery/02')
if discovery2.text == "":
    print("Discovery: FAILED")

discovery3 = requests.get('http://192.168.0.94:8080/startrek/discovery/03')
if discovery3.text == "":
    print("Discovery: FAILED")

discovery4 = requests.get('http://192.168.0.94:8080/startrek/discovery/04')
if discovery4.text == "":
    print("Discovery: FAILED")

picard = requests.get('http://192.168.0.94:8080/startrek/picard/01')
if picard.text == "":
    print("Picard: FAILED")

picard2 = requests.get('http://192.168.0.94:8080/startrek/picard/02')
if picard2.text == "":
    print("Picard: FAILED")

picard3 = requests.get('http://192.168.0.94:8080/startrek/picard/03')
if picard3.text == "":
    print("Picard: FAILED")

ld = requests.get('http://192.168.0.94:8080/startrek/lowerdecks/01')
if ld.text == "":
    print("Lower Decks: FAILED")

ld2 = requests.get('http://192.168.0.94:8080/startrek/lowerdecks/02')
if ld2.text == "":
    print("Lower Decks: FAILED")

ld3 = requests.get('http://192.168.0.94:8080/startrek/lowerdecks/03')
if ld3.text == "":
    print("Lower Decks: FAILED")

prod = requests.get('http://192.168.0.94:8080/startrek/prodigy/01')
if prod.text == "":
    print("Prodigy: FAILED")

snw = requests.get('http://192.168.0.94:8080/startrek/strangenewworlds/01')
print(snw.text)
if snw.text == "":
    print("Strange New Worlds: FAILED")

print("\nStarting Star Wars Tests\n")

andor = requests.get('http://192.168.0.94:8080/starwars/andor/01')
if andor.text == "":
    print("Andor: FAILED")

badbatch = requests.get('http://192.168.0.94:8080/starwars/badbatch/01')
if badbatch.text == "":
    print("Bad Batch: FAILED")

badbatch2 = requests.get('http://192.168.0.94:8080/starwars/badbatch/02')
if badbatch2.text == "":
    print("Bad Batch: FAILED")

bobafett = requests.get('http://192.168.0.94:8080/starwars/bobafett/01')
if bobafett.text == "":
    print("Boba Fett: FAILED")

mando = requests.get('http://192.168.0.94:8080/starwars/mandalorian/01')
if mando.text == "":
    print("Mandalorian: FAILED")

mando2 = requests.get('http://192.168.0.94:8080/starwars/mandalorian/02')
if mando2.text == "":
    print("Mandalorian: FAILED")

talesofthejedi = requests.get('http://192.168.0.94:8080/starwars/talesofthejedi/01')
if talesofthejedi.text == "":
    print("Tales of the Jedi: FAILED")


visions = requests.get('http://192.168.0.94:8080/starwars/visions/01')
if visions.text == "":
    print("Visions: FAILED")

preh = requests.get('http://192.168.0.94:8080/prehistoricplanet/01')
print(preh.text)
if preh.text == "":
    print("Prehistoric Planet: FAILED")

# print("\nStarting SciFi Tests\n")

# silo = requests.get('http://192.168.0.94:8080/scifi/silo/01')
# if silo.text == "":
#     print("Silo: FAILED")

# thelastofus = requests.get('http://192.168.0.94:8080/thelastofus/01')
# if thelastofus.text == "":
#     print("The Last of Us: FAILED")

# foundation1 = requests.get('http://192.168.0.94:8080/foundation/01')
# if foundation1.text == "":
#     print("Foundation 1: FAILED")

# foundation2 = requests.get('http://192.168.0.94:8080/foundation/02')
# if foundation2.text == "":
#     print("Foundation 2: FAILED")

# alteredcarbon1 = requests.get('http://192.168.0.94:8080/scifi/alteredcarbon/01')
# if alteredcarbon1.text == "":
#     print("Altered Carbon 1: FAILED")

# alteredcarbon2 = requests.get('http://192.168.0.94:8080/scifi/alteredcarbon/02')
# if alteredcarbon2.text == "":
#     print("Altered Carbon 2: FAILED")

# cowboybebop = requests.get('http://192.168.0.94:8080/scifi/cowboybebop/01')
# if cowboybebop.text == "":
#     print("Cowboy Bebop: FAILED")

# forallmankind1 = requests.get('http://192.168.0.94:8080/scifi/forallmankind/01')
# if forallmankind1.text == "":
#     print("For All Mankind 1: FAILED")

# forallmankind2 = requests.get('http://192.168.0.94:8080/scifi/forallmankind/02')
# if forallmankind2.text == "":
#     print("For All Mankind 2: FAILED")

# forallmankind3 = requests.get('http://192.168.0.94:8080/scifi/forallmankind/03')
# if forallmankind3.text == "":
#     print("For All Mankind 3: FAILED")

# lostinspace1 = requests.get('http://192.168.0.94:8080/scifi/lostinspace/01')
# if lostinspace1.text == "":
#     print("Lost in Space 1: FAILED")

# lostinspace2 = requests.get('http://192.168.0.94:8080/scifi/lostinspace/02')
# if lostinspace2.text == "":
#     print("Lost in Space 2: FAILED")

# lostinspace3 = requests.get('http://192.168.0.94:8080/scifi/lostinspace/03')
# if lostinspace3.text == "":
#     print("Lost in Space 3: FAILED")

# raisedbywolves1 = requests.get('http://192.168.0.94:8080/scifi/raisedbywolves/01')
# if raisedbywolves1.text == "":
#     print("Raised by Wolves 1: FAILED")

# raisedbywolves2 = requests.get('http://192.168.0.94:8080/scifi/raisedbywolves/02')
# if raisedbywolves2.text == "":
#     print("Raised by Wolves 2: FAILED")

# nightsky = requests.get('http://192.168.0.94:8080/scifi/nightsky/01')
# if nightsky.text == "":
#     print("Night Sky: FAILED")

# orville1 = requests.get('http://192.168.0.94:8080/scifi/orville/01')
# if orville1.text == "":
#     print("Orville 1: FAILED")

# orville2 = requests.get('http://192.168.0.94:8080/scifi/orville/02')
# if orville2.text == "":
#     print("Orville 2: FAILED")

# orville3 = requests.get('http://192.168.0.94:8080/scifi/orville/03')
# if orville3.text == "":
#     print("Orville 3: FAILED")

# halo = requests.get('http://192.168.0.94:8080/scifi/orville/01')
# if halo.text == "":
#     print("Halo: FAILED")

# print("\nFinished SciFi Tests\n")