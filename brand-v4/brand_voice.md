---
name: Brand Voice Framework
description: Comprehensive brand voice and tone guidelines for consistent content creation
inputs: [brand_guidelines, industry, audience]
outputs: [voice_profile, tone_matrix]
---

# Brand Voice Framework

Define and maintain consistent brand voice across all content formats and channels.

> **Référence** : Ce document est aligné sur la Plateforme de Marque Calebasse v4 — L'Art de l'Équilibre.

## Brand Archetypes

Toute communication Calebasse s'ancre dans la combinaison de deux archétypes :

| | Archétype | Traits | Rôle dans la communication |
| --- | --- | --- | --- |
| **Principal** | **Le Sage** | Structure • Légitimité • Sagesse • Profondeur | Structurer, expliquer, éclairer |
| **Secondaire** | **Le Protecteur** | Bienveillance • Proximité • Accompagnement | Rassurer, accompagner, soutenir |

**En une phrase** : Calebasse est le Sage qui guide avec bienveillance vers l'équilibre.


## Voice Definition

### Core Voice Attributes

```yaml
voice_attributes:
  - attribute: "Structuré"
    description: "Calebasse organise son discours avec logique et clarté. Chaque mot est choisi, chaque argument est ordonné."
    do: "Organiser le contenu de manière progressive : constat → logique → solution."
    dont: "Ne pas disperser le message avec des informations non pertinentes ou confuses."

  - attribute: "Maîtrisé"
    description: "Calebasse communique de manière calme et confiante, sans exagération ni urgence."
    do: "Utiliser un ton posé, réfléchi et cohérent. Affirmer sans forcer."
    dont: "Éviter les expressions trop enthousiastes, dramatiques ou alarmistes."

  - attribute: "Cultivé"
    description: "Calebasse fait référence à son héritage millénaire et sa profondeur culturelle, inspirée par la MTC."
    do: "Exprimer de manière claire mais enrichie, avec des références pertinentes à la tradition et à la science."
    dont: "Éviter les simplifications excessives. Ne jamais être simpliste."

  - attribute: "Bienveillant"
    description: "La marque accompagne, soutient et rassure — elle ne force ni ne presse."
    do: "Utiliser un ton rassurant, doux et orienté accompagnement."
    dont: "Éviter tout ton agressif, insistant ou condescendant."

  - attribute: "Pédagogique"
    description: "Calebasse éclaire et explique. Le client doit comprendre pourquoi, pas seulement quoi."
    do: "Expliquer la logique profonde (équilibre → santé & beauté). Éduquer sans sermonner."
    dont: "Ne pas surcharger de jargon technique. Ne pas supposer que le client connaît la MTC."
```

### Voice Spectrum Tool
Position de Calebasse sur ces spectres :

```
Formel    ←————●———————————→ Décontracté    = 7/10 (plutôt formel)
Académique ←————●——————————→ Conversationnel = 6/10
Réservé   ←——————●—————————→ Enthousiaste   = 3/10 (jamais excessif)
Sérieux   ←———●————————————→ Ludique         = 2/10 (jamais ludique)
Corporate ←————————●———————→ Personnel       = 5/10
Technique ←——————————●—————→ Accessible      = 7/10 (accessible, jamais simpliste)
```

### Default Voice Profile

Calebasse adopte un ton **structuré, calme et confiant**, alliant l'expertise du Sage et la bienveillance du Protecteur. Le discours est pédagogique sans être condescendant, profond sans être ésotérique, et confiant sans être arrogant.


## Territoire d'Expression (Brand-v4)

### Notre registre
- Calme • Maîtrisé • Structuré
- Cultivé • Bienveillant
- Sérénité • Profondeur • Cohérence
- Harmonie • Stabilité
- Soutenir • Accompagner • Rééquilibrer
- Durable • Naturel

### Ce que nous évitons — en communication de marque
- Exagération gratuite
- Promesse spectaculaire sans fondement
- Langage de combat destructeur ("lutter contre", "combattre", "détruire", "éradiquer")
- Ton alarmiste ou sensationnaliste
- Superlatifs non justifiés

### Termes à usage contextuel
Certains termes ne sont pas interdits mais doivent être utilisés avec discernement selon le contexte :

| Terme | Acceptable quand… | À éviter quand… |
| --- | --- | --- |
| **Éliminer** | Action concrète sur un symptôme ou une toxine ("éliminer les toxines") | Utilisé comme langage de combat contre le corps ("éliminer le problème") |
| **Booster** | Effet ponctuel et dynamique ("booster l'éclat de la peau") | Utilisé pour une promesse de sur-stimulation artificielle |
| **Urgence** | Contenu promotionnel limité dans le temps (offre, campagne) | Communication de marque, contenu éducatif, fiches produit |
| **Stimuler** | Contexte fonctionnel précis ("stimuler la circulation") | Utilisé comme promesse excessive |


## Tone Adaptation Matrix

Le ton s'adapte au contexte, mais la voix reste constante :

| Context | Tone Shift | Example |
| --- | --- | --- |
| Éducation | Patient, clair, structuré | "Comprendre le déséquilibre, c'est le premier pas vers l'équilibre." |
| Produit | Confiant, sobre, ancré | "Cette formule soutient le Qi et rétablit l'élan vital, sans sur-stimulation." |
| Campagne saisonnière | Immersif, poétique maîtrisé | "Le printemps en MTC active le Foie et le Bois. Accompagnez cette transition." |
| **Promotionnel** | **Direct, orienté bénéfice, offre claire** | **"Offre découverte : -20% sur votre première formule. Retrouvez votre équilibre."** |
| Erreur/problème | Calme, rassurant | "Nous comprenons votre situation. Travaillons ensemble pour y remédier." |
| Support | Empathique, orienté solution | "C'est une excellente question. Voici comment nous pouvons vous accompagner." |
| Témoignage | Sobre, factuel | "J'ai trouvé une approche qui fait sens. Pas de promesse miracle, juste une logique claire." |

### Emotion-Tone Guide

```yaml
user_emotion: "Frustré"
our_tone: "Empathique, calme, orienté vers la compréhension"
avoid: "Langage dédaigneux, jargon, urgence"
example: "Nous comprenons. Souvent, c'est le signe que l'approche n'agit pas à la bonne profondeur."

user_emotion: "Curieux"
our_tone: "Pédagogique, structuré, accueillant"
avoid: "Surcharge technique, ton condescendant"
example: "C'est une excellente question. En MTC, l'équilibre est le fondement de la santé..."

user_emotion: "Sceptique"
our_tone: "Factuel, fondé sur des preuves, transparent"
avoid: "Langage défensif, sur-vente, enthousiasme forcé"
example: "Voici la logique : tradition millénaire + validation scientifique moderne."

user_emotion: "Confus"
our_tone: "Patient, clair, progressif"
avoid: "Jargon MTC non expliqué, complexité inutile"
example: "Prenons un exemple concret. Le déséquilibre digestif signale souvent..."
```


## Key Terminology — Brand-v4

### Termes de marque (à utiliser systématiquement)

| Terme | Usage |
| --- | --- |
| **L'Art de l'Équilibre** | Slogan / signature de marque |
| **Équilibre / Rééquilibrage** | Concept central — jamais "guérison" ou "réparation" |
| **Santé et beauté par la nature** | Promesse fonctionnelle (communication produit) |
| **Signal / Déséquilibre** | Pour parler des symptômes |
| **Accompagner** | Notre action — jamais "combattre" ou "lutter" |
| **Restaurer l'équilibre** | Notre promesse — jamais "éliminer le problème" |
| **Pharmacopée chinoise** | Notre racine — pas "médecine alternative" |
| **Tradition + Science** | Notre validation — toujours les deux ensemble |

### Terminology Standards

| Utiliser | Ne pas utiliser | Raison (brand-v4) |
| --- | --- | --- |
| Rééquilibrer | Guérir, réparer | Nous restaurons, pas réparons |
| Accompagner | Combattre, lutter | Archétype du Protecteur, pas du Guerrier |
| Signal, déséquilibre | Problème, maladie | Recadrage systémique |
| Formule | Traitement, remède | Positionnement premium, pas médical |
| Clients | Utilisateurs, patients | Plus personnel, pas médical |
| Équilibre | Détox, purification | Notre concept central |
| Soutenir | ~~Booster, stimuler~~ | Préféré en communication de marque |
| Booster, stimuler | *(usage contextuel)* | Acceptés en contexte promotionnel ou fonctionnel précis |
| Éliminer | *(usage contextuel)* | Accepté pour une action concrète (toxines), pas comme "combat" |


## Writing Style Guidelines

### Sentence Structure
- **Preferred length**: 15-25 mots en moyenne
- **Variation**: Mélanger des phrases courtes et affirmatives avec des phrases explicatives plus longues
- **Voice**: Voix active préférée ; voix passive acceptable pour l'emphase
- **Rythme**: Calme et posé — jamais haché ni pressé

### Paragraph Structure
- Commencer par le point clé (pyramide inversée)
- Une idée par paragraphe
- Maximum 3-4 phrases par paragraphe
- Utiliser des transitions fluides et logiques

### Word Choice Principles

#### Prefer
```
Concret plutôt qu'abstrait : "rétablit l'équilibre digestif" au lieu de "améliore le bien-être"
Spécifique plutôt que vague : "pharmacopée chinoise depuis 1997" au lieu de "tradition ancienne"
Systémique plutôt que linéaire : "restaurer l'équilibre" au lieu de "cibler le symptôme"
Accompagnement plutôt que combat : "soutenir" au lieu de "lutter contre"
```

#### Avoid (en communication de marque)
```
- Le langage de combat destructeur : combattre, lutter, détruire, éradiquer
- Les superlatifs non justifiés : le meilleur, révolutionnaire, miracle
- Le jargon MTC non expliqué (sauf contexte expert)
- Les mots de prudence excessifs : peut-être, un peu, éventuellement
- Le langage corporatif : synergie, exploiter, paradigme, disruption
```

#### Usage contextuel autorisé
```
- "Éliminer" : OK pour une action concrète (ex : "aide à éliminer les toxines")
- "Booster" / "Stimuler" : OK en contexte promotionnel ou fonctionnel (ex : "booster l'éclat")
- Urgence : OK en contenu promotionnel encadré (ex : "Offre valable jusqu'au...")
- Clickbait : OK si le contenu délivre la promesse de l'accroche
```


## Channel Adaptations

### Long-form Content (Blog, Articles)
```
- Expression complète de la voix du Sage
- Pédagogie structurée : constat → logique → solution
- Ton de leader d'opinion — éduquer sans sermonner
- Références tradition + science
- CTA doux : "Découvrir", "Comprendre", "Explorer"
```

### Social Media
```
- Abrégé mais fidèle au Sage
- Éducatif > promotionnel (sauf campagnes promo dédiées)
- Instagram : visuel + micro-éducation
- Pas d'emoji excessif (usage minimal et sobre)
- Clickbait accepté en mode promotionnel si le contenu délivre la promesse
```

### Email / Newsletter
```
- Direct et respectueux
- Sujet clair et engageant (objet accrocheur autorisé pour les campagnes promo)
- Personnel mais structuré
- Format scannable
- Ton éducatif par défaut ; ton promotionnel autorisé pour les offres et campagnes
```

### Fiches Produit
```
- Structure obligatoire : Nom → Fonction d'équilibre → Description → CTA doux
- Langage d'équilibre (pas de langage médical)
- CTA : "Voir la formule", "Découvrir" (jamais "Acheter maintenant")
- Ton confiant et sobre
```

### Publicité
```
- Axé sur la logique et la profondeur pour les campagnes de marque
- CTA d'exploration : "Découvrir notre approche"
- Différenciation par la logique systémique
- Les campagnes promotionnelles peuvent intégrer urgence et offre de bénéfice (voir section Contenu Promotionnel)
```

### Contenu Promotionnel (Offres, Campagnes, Ads conversion)
```
Le contenu promotionnel obéit à des règles distinctes de la communication de marque.
La voix reste Calebasse (structurée, premium), mais le registre s'adapte :

Autorisé :
- Offre de bénéfice claire : "-20%", "Offre découverte", "Livraison offerte"
- Urgence encadrée : "Jusqu'au [date]", "Édition limitée", "Derniers jours"
- Clickbait intelligent : accroche forte + contenu qui délivre la promesse
- Termes dynamiques : "booster", "éliminer", "stimuler" dans un contexte fonctionnel
- CTA directs : "Profiter de l'offre", "Commander", "Ajouter au panier"

Interdit (même en promo) :
- Ton alarmiste ou manipulateur
- Promesses miraculeuses sans fondement
- Dénigrement de concurrents
- Fausse rareté ou fausse urgence
- Superlatifs non justifiés

Exemples :
  On-brand promo : "Offre printemps : -20% sur la gamme Équilibre. Jusqu'au 31 mars."
  On-brand promo : "3 formules pour booster l'éclat de votre peau cet été."
  Off-brand promo : "🔥🔥🔥 DERNIÈRE CHANCE !!! -50% TOUT DOIT DISPARAÎTRE !!!"
```


## Voice Don'ts — Brand-v4

### Ne jamais (quel que soit le contexte)
- Faire des promesses miraculeuses sans fondement
- Utiliser un ton alarmiste ou manipulateur
- Être condescendant
- Parler négativement des concurrents par leur nom
- Utiliser des tactiques de peur
- Créer de la fausse urgence ou fausse rareté

### À éviter
- Excès de points d'exclamation
- Superlatifs non justifiés
- Emoji excessifs
- Ton trop décontracté ou ludique (incompatible avec Le Sage)
- Langage genré non nécessaire


## Voice Quality Checklist

Avant de publier, vérifier que le contenu :

```markdown
- [ ] Reflète l'archétype du Sage (structuré, pédagogique, profond)
- [ ] Intègre la bienveillance du Protecteur (accompagnement, pas pression)
- [ ] Utilise le vocabulaire brand-v4 (équilibre, rééquilibrage, accompagner...)
- [ ] Évite le langage interdit absolu (combat destructeur, promesses miraculeuses, manipulation)
- [ ] Ton approprié pour le contexte (voir Tone Adaptation Matrix)
- [ ] Si promotionnel : urgence et offre de bénéfice encadrées, pas de fausse rareté
- [ ] Voix active prédominante
- [ ] Phrases claires et concises
- [ ] CTA adapté au contexte (exploration pour le contenu de marque, conversion pour le promo)
- [ ] Format scannable et structuré
- [ ] Cohérent avec la logique de l'équilibre
```


## Voice Examples — Brand-v4

### Headlines
```
On-brand:  "Comprendre le déséquilibre pour retrouver l'équilibre"
Off-brand: "5 ASTUCES INCROYABLES pour être en pleine forme !"

On-brand:  "Pourquoi la fatigue n'est pas un manque, mais un signal"
Off-brand: "STOP à la fatigue — la solution miracle existe !"
```

### Product Description
```
On-brand:  "Cette formule soutient le Qi et rétablit l'élan vital, sans sur-stimulation artificielle."
Off-brand: "Ce produit booste votre énergie et combat la fatigue pour des résultats rapides !"
```

### CTA
```
On-brand (marque) : "Découvrir notre approche"  |  "Explorer les formules"  |  "Comprendre le déséquilibre"
On-brand (promo) :  "Profiter de l'offre"  |  "Commander ma formule"  |  "Essayer maintenant"
Off-brand :         "ACHETEZ MAINTENANT !!!"  |  "Ne ratez pas cette chance !"  |  "Dernière chance !"
```

### Email Subject Lines
```
On-brand (éducatif) :  "L'équilibre du printemps : accompagner la transition"
On-brand (promo) :     "Offre découverte : votre première formule à -20%"
Off-brand :            "🔥🔥🔥 PROMO FLASH — 50% TOUT DOIT DISPARAÎTRE !!!"
```


## Output: Voice Profile

```yaml
brand_name: "Calebasse"
slogan: "L'Art de l'Équilibre"
tagline_fonctionnel: "Santé et beauté par la nature"

archetypes:
  primary: "Le Sage — Structure • Légitimité • Sagesse • Profondeur"
  secondary: "Le Protecteur — Bienveillance • Proximité • Accompagnement"

core_voice:
  primary: "Structuré • Maîtrisé • Cultivé"
  secondary: "Bienveillant • Pédagogique"

voice_description: |
  Calebasse est le Sage qui guide avec bienveillance vers l'équilibre. Le ton est structuré, calme et confiant — jamais urgent, exagéré ou sensationnel. Le discours est pédagogique et profond, accessible sans être simpliste.

tone_spectrum:
  formality: 7
  enthusiasm: 3
  technicality: 4
  warmth: 6
  playfulness: 2

writing_guidelines:
  sentence_length: "15-25 mots"
  paragraph_length: "3-4 phrases"
  preferred_voice: "active"
  emoji_usage: "minimal"
  humor_level: "aucun ou très subtil"

key_phrases:
  greetings: ["Bienvenue", "Bonjour"]
  sign_offs: ["Avec harmonie", "Prenez soin de votre équilibre", "Bien à vous"]
  transitions: ["Tout d'abord", "Ensuite", "C'est pourquoi", "En d'autres termes"]

territory:
  use: ["Calme", "Maîtrisé", "Structuré", "Cultivé", "Bienveillant", "Sérénité", "Profondeur", "Cohérence", "Harmonie", "Stabilité", "Soutenir", "Accompagner", "Rééquilibrer", "Durable", "Naturel"]
  avoid: ["Urgence", "Exagération", "Promesse spectaculaire", "Langage de combat", "Ton alarmiste", "Sensationnaliste"]

avoid_list_absolute:
  - "Lutter contre / Combattre / Détruire / Éradiquer"
  - "Miracle / Révolutionnaire (sans fondement)"
  - "Fausse urgence / Fausse rareté"

contextual_terms:
  - term: "Éliminer"
    ok_when: "Action concrète (ex: éliminer les toxines)"
    avoid_when: "Langage de combat contre le corps"
  - term: "Booster / Stimuler"
    ok_when: "Contexte promotionnel ou fonctionnel précis"
    avoid_when: "Communication de marque éducative"
  - term: "Urgence"
    ok_when: "Offre promotionnelle encadrée et véridique"
    avoid_when: "Communication de marque, contenu éducatif"

example_sentences:
  good:
    - "L'équilibre est le fondement naturel de la santé et de la beauté."
    - "Nous n'agissons pas contre le corps. Nous l'accompagnons vers son équilibre naturel."
    - "Le symptôme n'est pas le problème — c'est le signal d'un déséquilibre plus profond."
  bad:
    - "Nos produits combattent efficacement la fatigue !"
    - "Résultats rapides garantis avec notre formule révolutionnaire"
    - "Ne laissez pas la fatigue ruiner votre vie — agissez maintenant !"
```
