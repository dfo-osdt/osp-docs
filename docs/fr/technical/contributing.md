---
sidebar: auto
lang: Français
---
# Guide de Contribution

## Requis 
### Logiciels
- git v2.30.2+ [Guide d'Installation](https://github.com/git-guides/install-git#debianubuntu)
- Node.js v16.19+ [Guide d'Installation](https://github.com/nodesource/distributions#debian-and-ubuntu-based-distributions)

## Installation

### Windows 10

Bientôt disponible !
---
### Unix - MacOS et Debian/Ubuntu Linux
Toutes les étapes sont effectuées à l'aide d'un terminal bash.
#### 1) Installation des Paquets Requis
- git v2.30.2+ [Guide d'Installation](https://github.com/git-guides/install-git#debianubuntu)
- Node.js v16.19+ [Guide d'Installation](https://github.com/nodesource/distributions#distributions-baser-sur-debian-et-ubuntu)

#### 2) Installation de VuePress en Local
```bash
npm install -D vuepress@next
```
#### 3) Cloner le Dépôt de Documentation
```bash
cd /<Emplacement Local Souhaité>/
git clone  git@github.com:dfo-osdt/osp-docs.git
cd osp-docs/
```
#### 4) Initialiser le Serveur Local
```bash
npm run docs:dev
```
VuePress démarrera un serveur de développement avec rechargement automatique sur [http://localhost:8080](http://localhost:8080). Lorsque vous modifiez vos fichiers Markdown, le contenu dans le navigateur sera automatiquement mis à jour.

---
## Guide d'Exécution
### Démarrage du Serveur de Développement Local
#### Unix - MacOS et Debian/Ubuntu Linux
Ouvrez une instance de terminal bash et naviguez jusqu'au répertoire osp-docs.
```
cd /.../osp-docs/
```
Lancez le serveur de développement local avec npm.
```
npm run docs:dev
```
VuePress démarrera un serveur de développement avec rechargement automatique sur http://localhost:8080. Lorsque vous modifiez vos fichiers Markdown, le contenu dans le navigateur sera automatiquement mis à jour.

### Arrêt du Serveur de Développement
Dans l'instance de terminal exécutant le Serveur de Développement, envoyez une commande d'arrêt en appuyant sur les touches **Control + c**.

## Documentation
Le site de documentation est construit à l'aide du code source de Vuepress 2 contenu dans ce dépôt. Chaque page de ce site est rédigée en [Markdown](https://www.markdownguide.org/) et enregistrée sous la forme d'un fichier .md. VuePress 2 convertira automatiquement les fichiers Markdown en [HTML](https://developer.mozilla.org/fr/docs/Web/HTML). Si vous exécutez le (serveur de développement local)[#Démarrage-du-serveur-de-développement-local], vous verrez ces modifications dès que vous enregistrez le fichier.

Tous les fichiers sources Markdown sont placés dans le répertoire `docs`. Deux traductions sont maintenues :
- Anglais (en-US) dans le chemin `/docs/guide`
- Français (Français) dans le chemin `/docs/fr/guide`
### Étapes pour Créer une Nouvelle Page
Lorsqu'un nouveau fichier de page est créé, les étapes suivantes doivent être suivies :
1) Un nouveau fichier de page avec le même nom doit être créé dans le guide de l'autre langue
2) *Facultatif* - Traduisez la page à l'aide de [ChatGPT](chat.openai.com) pour créer une copie dans la deuxième langue \*
3) Enregistrez la page et vérifiez `localhost:8080/guide/<NouvellePage>.html` et `localhost:8080/fr/guide/<NouvellePage>.html` pour vous assurer du rendu approprié
4) Ajoutez les nouvelles pages à la barre latérale pour les deux langues
5) Ajoutez, commettez et poussez les modifications dans le référentiel `git@github.com:dfo-osdt/osp-docs.git`

\* **REMARQUE**: L'utilisation de ChatGPT pour traduire le contenu est simplement un moyen rapide de fournir une accessibilité dans les deux langues officielles. Toutes les traductions *doivent* être approuvées par le [Bureau de la traduction](https://www.tpsgc-pwgsc.gc.ca/bt-tb/index-fra.html)!

### Comment Ajouter une Nouvelle Page à la Barre Latérale
Pour ajouter une nouvelle page à la barre latérale, vous devez ajouter le chemin dans le fichier de configuration de la barre latérale en anglais `en.ts` et en français `fr.ts`. Ce fichier se trouve [ici](https://github.com/dfo-osdt/osp-docs/tree/main/docs/.vuepress/configs/sidebar):
```
docs
├──.vuepress
|   ├── configs
|   │   ├── head.ts
|   │   ├── index.js
|   │   ├── sidebar
|   │   |   ├── en.ts
|   │   |   ├── fr.ts
|   │   |   └── index.js
```
Par exemple, si vous souhaitez ajouter une nouvelle page entre les pages `getting-started.md` et `user-interface-overview.md`, vous
```
export const sidebarEn: SidebarConfig = 
{
    '/guide/':
              [
                {
                  text: 'Guide',
                  children: [
                    '/guide/introduction.md',
                    '/guide/getting-started.md',
                    '/guide/<new-page>.md',
                    '/guide/user-interface-overview.md',
                    ...
                    '/guide/acknowledgments.md',
                  ],
                }
              ]
}
```
Par exemple, si vous souhaitez ajouter une nouvelle page entre les pages `getting-started.md` et `user-interface-overview.md`, vous devrez ajouter le code suivant dans le fichier français `fr.ts` :
```
export const sidebarFr: SidebarConfig = 
{
  '/fr/guide/':
            [
              {
                text: 'Guide',
                children: [
                  '/fr/guide/introduction.md',
                  '/fr/guide/getting-started.md',
                  '/fr/guide/<new-page>.md',
                  '/fr/guide/user-interface-overview.md',
                  ...
                  '/fr/guide/acknowledgments.md',
                ],
              }
            ]
}                  
```

## Guide de style
Toutes les pages et le contenu doivent respecter la même cohérence de style que l'application OSP-PSO. Un lien vers le guide de style contenant les logos appropriés, les codes hexadécimaux des couleurs et les polices se trouve ci-dessous.

[Guide de style OSP-PSO](/style-guide.html)


## Structure du Projet
```md
docs
├──.vuepress
|   ├── client.js
|   ├── config.js
|   ├── configs
|   │   ├── head.ts
|   │   ├── index.js
|   │   ├── sidebar
|   │   |   ├── en.ts
|   │   |   ├── fr.ts
|   │   |   └── index.js
|   │   └── index.html
|   ├── public
|   │   └── assets
|   │       ├── favicons
|   │       │   ├── android-chrome-192x192.png
|   │       │   ├── android-chrome-512x512.png
|   │       │   ├── apple-touch-icon.png
|   │       │   ├── favicon-16x16.png
|   │       │   ├── favicon-32x32.png
|   │       │   ├── safari-pinned-tab.svg
|   │       │   └── site.webmanifest
|   │       ├── images
|   │       └── logos
|   │           └── logo.png
|   └── styles
|       └── index.scss
├── contributing.md
├── fr
│   ├── contributing.md
│   ├── guide
│   │   ├── acknowledgments.md
│   │   ├── advanced-features.md
│   │   ├── appendices.md
│   │   ├── customization-and-security.md
│   │   ├── getting-started.md
│   │   ├── introduction.md
│   │   ├── legal-and-compliance.md
│   │   ├── support-and-contact.md
│   │   ├── troubleshooting.md
│   │   ├── updates-and-version-history.md
│   │   ├── user-interface-overview.md
│   │   └── using-the-application.md
│   └── README.md
├── guide
│   ├── acknowledgments.md
│   ├── advanced-features.md
│   ├── appendices.md
│   ├── customization-and-security.md
│   ├── getting-started.md
│   ├── introduction.md
│   ├── legal-and-compliance.md
│   ├── support-and-contact.md
│   ├── troubleshooting.md
│   ├── updates-and-version-history.md
│   ├── user-interface-overview.md
│   └── using-the-application.md
├── README.md
└── style-guide.md
```

## /docs/
```md
docs
```
/docs est le répertoire de base du site web. Tous les fichiers Markdown (.md) dans /docs seront convertis en pages web accessibles. /docs est défini comme le répertoire racine.

### contributing.md
```md
docs
├── contributing.md
```
contributing.md crée la page web que vous lisez en ce moment ! Ce fichier contient des informations sur la façon dont les utilisateurs peuvent cloner le dépôt GitHub public et contribuer au site de documentation OSP-PSO.\
Cette page est accessible à [docs.osp-pso.ca/contributing.html](/fr/contributing.html)

### README.md
```md
docs
├── README.md
```
README.md sert de page d'accueil en anglais pour [docs.osp-pso.ca](/fr/). Cette page doit être aussi simple que possible et guider facilement l'utilisateur vers l'endroit où il doit aller.

### style-guide.md
```md
docs
├── style-guide.md
```
style-guide.md est une page "cachée" pour les développeurs. Cette page contient les logos, les couleurs, les polices et les informations de style nécessaires pour le développement cohérent du site de documentation OSP-PSO. Le style du site de documentation doit correspondre autant que possible au style de [osp-pso.ca](https://docs.osp-pso.ca/). Cette page est accessible à [docs.osp.pso.ca/style-guide.html](/fr/style-guide.ca)

## /docs/.vuepress
```md
docs
├──.vuepress
```
/docs/.vuepress contient les fichiers de configuration front-end. La configuration du thème, de la barre latérale, de la barre de navigation et des ressources d'images se trouve ici. La configuration front-end est composée d'une combinaison de fichiers JavaScript et TypeScript.

## /docs/fr/
```md
docs
├──fr
```
/docs/fr est le répertoire qui contient tout le contenu traduit en français. Le répertoire /fr/ devrait être une copie identique du répertoire de base /docs et du répertoire /docs/guide.

### contributing.md
```md
docs
├──fr
│   ├── contributing.md
```
/docs/fr/contributing.md contient les informations de cette page, mais traduites en français. Elle peut être consultée à [docs.osp-pso.ca/fr/contributing.html](/fr/contributing.html)

### guide
```md
docs
├──fr
│   ├── guide
```
/docs/fr/guide est le répertoire qui contient tous les documents de guidage traduits en français. Ces fichiers doivent contenir les mêmes informations que celles trouvées dans /docs/guide.

### README.md
```md
docs
├──fr
│   └── README.md
```
/docs/fr/README.md sert de page d'accueil pour [docs.osp-pso.ca/fr/](/fr/). Cette page doit être aussi simple que possible et guider facilement l'utilisateur vers l'endroit où il doit aller.

## /docs/guide/
```md
docs
├──guide
```
/docs/guide est le répertoire qui contient tous les documents de guidage rédigés en anglais.

## Dépannage

### Mon texte ne se formate pas correctement
Cela est généralement dû à l'utilisation du caractère de touche \<Tab\>. Markdown ne reconnaît pas le caractère \<Tab\> et ne peut pas le rendre correctement. Vous pouvez remplacer le caractère de \<Tab\> par quatre espaces de la touche \<Espace\>.

