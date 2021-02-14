---
title: Battleship
date: 2019-12-20 00:00:00 Z
categories:
- Jeux video
- c#
layout: post
image: "/images/projects/battleship/battleship.png"
exclude: false
#gallery:
#- image
---

## Introduction
Le projet **Battleship Console** est un projet de trois jours, fait durant les cours d'introduction au C# en 1re année de Master MTI3D à Laval,
Il est développé pour la **console de commande de Windows**. C'est un remake de la bataille navale qui se joue au tour par tour à **deux joueurs en local**.<br>

<br>
<h3 style="text-align:center;"><a href="https://github.com/BaptisteManusset/battleship"><strong><i class="fab fa-github"></i></strong></a> <a href="https://github.com/BaptisteManusset/battleship/raw/master/Build.zip"><strong> Lien de téléchargement</strong></a></h3>
<br>


## Contrôle
Le jeu se joue au clavier, avec les **touches directionnelles** ou les touches **ZQSD**. La validation d’une étape se fait grâce à touche **Entrer** ou **Espace**.Dans l’écran de placement des bateaux vous pouvez changer l’orientation du bateau grâceà la touche **R** et changer de bateau grâce à la touche **Tab**.


## Déroulement

![écran de placement des bateaux](/images/projects/battleship/placement-bateau-1.png)

### Placement des bateaux

Après avoir choisi leur pseudo, les joueurs peuvent placer leurs vaisseaux.
L’écran est divisé en 3. En haut à gauche, ​la carte avec les bateaux déjà placés en gris.
Le curseur de placement en vert si la case est libre et la rouge si elle est déjà prise.
En haut à droite le pseudo, puis en dessous, ​la liste des bateaux disponible avec leurs nombres, leurs tailles et leurs noms. En dessous, une zone permettant d'afficher des messages (placement impossible ou autre information).
Pour rendre le placement des bateaux le plus simple possible, j'ai choisi de le gérer avec un curseur. Celui-ci est contrôlé grâce aux touches directionnelles ou ZQSD​.

![tour du joueur 1](/images\projects\battleship\tour-1.png)
### La Partie

Le jeu se présente sous la forme de deux grilles une pour afficher ses bateaux et une autre pour afficher les bateaux de l’autre joueur.
Dans votre carte, il y a les différents bateaux qui sont affichés avec les zones déjà touchées en rouges avec des points noirs.

Sur la carte ennemie, le joueur peut viser une case grâce au curseur qu’il déplace de la même façon que pour placer les bateaux, il est lui aussi représenté par une case rouge.
Les coups ratés sont représentés par une case bleue foncé avec un ​X.

### Changement de joueur
Il y a un écran de transition, pour éviter qu’un joueur puisse voir la carte de l'adversaire.


## Technique
### Les cartes
Pour ce projet, je n'ai pas utilisé de librairie particulière, tout est affiché grâce à la console de Windows.
Les cartes sont affichées en plusieurs étapes.
- La première est d’afficher le fond bleu.
- puis j’affiche les bateaux et les autres informations nécessaires.
- En dernier, j’affiche, le curseur.

Pour afficher ces éléments, j’utilise **​Console.SetCursorPosition();** qui permet d'informer la console où elle doit modifier l'affichage et par quel caractère.

### Les déplacements
Les déplacements du curseur sont gérer grâce à la fonction **​Console.ReadKey()​** qui est une fonction assez similaire à **Console.ReadLine()**, mais qui n’attends qu’un seul caractère.

### Les joueurs
Les joueurs sont stockés dans une liste de ​Joueur​. La classe **Joueur** contient deux matrices d’entier de 10 cases de côté (grille et radar). Le nom du joueur, et une couleur qui est définie par le programme qui ne peut être modifiée. La classe contient aussi une variable vie qui est calculée en listant le nombre de cases que couvrent les bateaux moins les cases déjà touchées par le joueur adverse.

### La victoire
La victoire est définie quand un joueur arrive à 0 point de vie. Cela arrête la boucle permettant la gestion des tours.



## Code

Le code source est disponible sur github à l'adresse [github.com/BaptisteManusset/battleship](https://github.com/BaptisteManusset/battleship) vous pourrez trouver [la verification VirusTotal](https://www.virustotal.com/gui/file/e3604347e6ec01d60035a5a93428f78b33c083f724568fa32d1771942ad75ea5/detection).
