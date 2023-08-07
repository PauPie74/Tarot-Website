# "0": {
#   name: "The Fool",
#   meaning: 'Beginnings, possibilities, impulsiveness, innocence, a free spirit',
#   td: 'https://i.imgur.com/09MyMit.jpg',
#   rw: 'https://i.imgur.com/LnbK1Xy.png',
#   ls:
#   'https://i.imgur.com/CZd6eUr.png'
# }

n = open("tarot names.txt", 'r')
m = open("tarot meanings.txt", 'r')
td_f = open("td.txt", 'r')
rw_f = open("rw.txt", 'r')
ls_f = open("ls.txt", 'r')


for i in range(1,79):
     name = n.readline().strip()
     meaning = m.readline().strip()
     td = td_f.readline().strip()
     rw = rw_f.readline().strip()
     ls = ls_f.readline().strip()
     print("\""+ str(i-1) + "\": {\n\tname: \""+ name + "\",\n\tmeaning: \""+ meaning+ "\",\n\ttd: \""+td+ "\",\n\trw: \""+rw+ "\",\n\tls: \"",ls + "\",\n},",)
     # : {
#   name: "The Fool",
#   meaning: 'Beginnings, possibilities, impulsiveness, innocence, a free spirit',
#   td: 'https://i.imgur.com/09MyMit.jpg',
#   rw: 'https://i.imgur.com/LnbK1Xy.png',
#   ls:
#   'https://i.imgur.com/CZd6eUr.png'
# }}