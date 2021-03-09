---
layout: post
categories:
image:
categories:
- Réalité Virtuelle
- Jeux vidéo
- Unity
image: "/images/projects/hautetension/hautetension.jpg"
exclude: false
---
Le projet **Haute tension** est un projet fait durant la 1er année de master MTI3D. Je travaille avec 3 amis sur le développement d’un outil de formation en réalité virtuelle “Projet Haute Tension”. C’est un outil de formation destiné à la formation d’élèves, électriciens à d’Angers. Cet outil de formation est destiné à l’origine pour le HTC vive.

Mais avec le confinement, nous avons décidé de réorienter le développement pour fournir un outil de formation sur ordinateur. Il pourra aussi servir de base pour le développement d’une version en réalité virtuelle.

Le projet permet de simuler la mise en tension d’un poste de livraison, ici une réplique de celui de l’université, qui fait la jonction entre les bâtiments et les câbles hautes-tensions.

![](/images/projects/hautetension/scene-haute-tension.png)


Nous avons réparti les tâches en deux équipes une de deux développeurs et une de deux graphistes/modélisateurs. Pour ma part, j’ai fait une partie du développement, ce que j’ai trouvé le plus intéressant, c’est de faire la gestion des différentes étapes du scénario.

J’ai décomposé le fonctionnement en deux éléments:

*	Le premier est un script **Quest Manager** qui permet de gérer les différentes étapes. (le cerveau sur la capture)
*	Le second est un script **Quest Element** qui regroupe toutes les informations nécessaire pour le fonctionnement d’une étape (les yeux). Il suffit via un autre script d’appeler le quest Element pour valider l’étape pour passer à la suivante.
*	Des gizmos permettent de visualiser les liens entre chaque étape

J’ai aussi fait un EditorWindow permettant de tester rapidement le fonctionnement des étapes sans avoir à les faire en jeu.

![](/images/projects/hautetension/all-ui.png)

Pour permettre à l’utilisateur de suivre sa progression, il a accès à une interface et grâce à des feed-backs sonores (Le visuel de l’interface est encore en WIP).

![](/images/projects/hautetension/interaction_entre_elements.png)

1. **Quest Manager**
2. **Quest Element**
3. **Quest Outline**
4. Lien entre un **QuestElement** et une erreur


J’ai décomposé le fonctionnement en deux éléments:<br>
 - Le premier est un script **Quest Manager** qui permet de gérer les différentes étapes. (le cerveau sur la capture)<br>
 - Le second est un script **Quest Element** qui regroupe toutes les informations nécessaire pour le fonctionnement d’une étape (les yeux). Il suffit via un autre script d'appeler le quest Element pour valider l'étape pour passer à la suivante.
<br>Des gizmos permettent de visualiser les liens entre chaque étape<br>


J’ai aussi fait un EditorWindow permettant de tester rapidement le fonctionnement des étapes sans avoir à les faire en jeu.

![](/images/projects/hautetension/all-ui.png)



Pour permettre à l’utilisateur de suivre sa progression, il a accès à une interface et reçoit des feed-backs sonores. Malheuresement nous n'avons pas eu le temps de finir l'interface.

![](/images/projects/hautetension/uiQuest.png)
