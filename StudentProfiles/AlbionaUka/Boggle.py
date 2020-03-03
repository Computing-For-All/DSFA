from random import randint
alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
dictionary = open ('dictonary.txt','r')
def generateBoggle () :
  boggle = range(5)
  for x in range (5):
    boggle[x] = range(5)
    for y in range (5):
      boggle[x] [y] = alphabet [randint(0,25)]
  return boggle
  
def printBoggle (boggle) :
  for row in boggle :
    for letter in row :
      print letter,
    print
boggle = generateBoggle ()
printBoggle(boggle)

def generateTree (dictionary) :
  root = {}
  for word in dictionary:
    branch = root 
    for letter in word :
      if letter not in branch :
        branch[letter] = {}
      branch = branch [letter]
  return root 
root = generateTree (dictionary)
#print root 

def findWords (branch, boggle, X, Y, word, answeres):
  if X < 0 or X >= 5 or Y <0 or Y  >=5 :
    return 
  letter = boggle[X][Y]
  if letter not in branch :
    return 
  branch = branch[letter]
  word += letter
  if ('\n' in branch) :
    answeres.append(word)
  findWords (branch, boggle, X+1, Y+0, word, answeres)
  findWords (branch, boggle, X-1, Y+0, word, answeres)
  findWords (branch, boggle, X+1, Y+1, word, answeres)
  findWords (branch, boggle, X-1, Y+1, word, answeres)
  findWords (branch, boggle, X+1, Y-1, word, answeres)
  findWords (branch, boggle, X-1, Y-1, word, answeres)
  findWords (branch, boggle, X+0, Y+1, word, answeres)
  findWords (branch, boggle, X+0, Y-1, word, answeres)
def solveBoggle (root, boggle) :
  answers = []
  for x in range (5) :
    for y in range (5) :
      findWords (root, boggle, x, y, "", answers)
  return answers
print solveBoggle (root, boggle)
 
