---
title: Predloga za implementacijo kontekstnega inženiringa
description: Celovita predloga za začetek s kontekstnim inženiringom - disciplina "Prompt Engineering" za AI podprte kodirne pomočnike (TUI - Terminal based User Interface), da imajo vse potrebne informacije za dokončanje dela od začetka do konca.
---


> **Kontekstni inženiring je lahko tudi do 10x boljši od "Prompt engineering" metode in pa vsaj 100x boljši od "Vibe Codinga" (kodiranja z neizogibnimi  halucinacijami).**

## 🚀 Hitri začetek

```bash
# 1. Klonirajte to predlogo
git clone https://github.com/coleam00/Context-Engineering-Intro.git
cd Context-Engineering-Intro

# 2. Nastavite pravila projekta (neobvezno - predloga je na voljo)
# Uredite CLAUDE.md za dodajanje vaših projektno specifičnih smernic

# 3. Dodajte primere (zelo priporočljivo)
# Ustvarite relevantne primere kode v mapo examples/

# 4. Ustvarite vašo začetno zahtevo po funkciji (PRD)
# Uredite INITIAL.md z vašimi zahtevami po funkciji

# 5. Generirajte celovit [PRP] (Product Requirements Prompt)
# V [Claude Code], zaženite:
/generate-prp INITIAL.md

# 6. Izvedite [PRP] za implementacijo vaše funkcije
# V [Claude Code], zaženite:
/execute-prp PRPs/your-feature-name.md
```

## 📚 Kazalo

- [Kaj je kontekstni inženiring?](#kaj-je-kontekstni-inzeniring)
- [Struktura predloge](#struktura-predloge)
- [Korak-po-korak vodnik](#korak-po-korak-vodnik)
- [Pisanje učinkovitih INITIAL.md datotek](#pisanje-ucinkovitih-initialmd-datotek)
- [Delovni tok [PRP]](#delovni-tok-prp)
- [Učinkovita uporaba primerov](#ucinkovita-uporaba-primerov)
- [Najboljše prakse](#najboljse-prakse)

## Kaj je kontekstni inženiring?

Kontekstni inženiring predstavlja tektonski premik v primerjavi s klasično "Prompt engineering" metodo:

### Inženiranje pozivov proti kontekstnemu inženiranju

**Prompt engineering:**
- Osredotoča se na pametno besedilo in specifično frazo
- Omejeno na to, kako definirate nalogo
- Kot da nekemu posredujete lepljiv listek (Sticky Note)

**Kontekstni inženiring:**
- Popoln vpogled v sistem (za zagotavljanje celovitega konteksta)
- Vključuje dokumentacijo, primere, pravila, vzorce in validacijo
- Kot pisanje celovitega scenarija z vsemi relevantnimi podrobnostmi

### Zakaj je kontekstni inženiring pomemben

1. **Zmanjšuje napake AI**: Večina napak agentov niso napake modelov - so napake zaradi pomanjkanja konteksta
2. **Zagotavlja doslednost**: AI sledi korak po korak vašim vzorcem in konvencijam projekta
3. **Omogoča kompleksne funkcije**: AI lahko obravnava večstopenjske implementacije s pravilnim kontekstom, vnaprej napiše relevantne teste in se dosledno drži test driven development procedure
4. **Samopopravljanje**: Validacijske zanke omogočajo umetni inteligenci, da sama popravi svoje lastne napake (evolving on errors)

## Struktura predloge

```
context-engineering-intro/
├── .claude/
│   ├── commands/
│   │   ├── generate-prp.md    # Generira celovite [PRP]
│   │   └── execute-prp.md     # Izvaja [PRP] za implementacijo funkcij
│   └── settings.local.json    # Dovoljenja [Claude Code]
├── PRPs/
│   ├── templates/
│   │   └── prp_base.md       # Osnovna predloga za [PRP]
│   └── EXAMPLE_multi_agent_prp.md  # Primer popolnega [PRP]
├── examples/                  # Vaši primeri kode (kritično!)
├── CLAUDE.md                 # Globalna pravila za AI pomočnika
├── INITIAL.md               # Predloga za zahteve po funkcijah
├── INITIAL_EXAMPLE.md       # Primer zahteve po funkciji
└── README.md                # Ta datoteka
```

Ta predloga se ne osredotoča na implementaciji [RAG] (Retrieval-Augmented Generation) okolja. Implementacija le te, je naslednji logičen korak za izboljšanje dela s kontekstnim inženiringom. Za zagotavljanje kompaktnosti te dokumentacije opis RAG zahteva celoten lasten dokument (TODO).

## Prvi koraki

### 1. Nastavitev globalnih pravil v CLAUDE.md

Datoteka `CLAUDE.md` vsebuje pravila na projektni ravni. AI pomočnik jim bo sledil v vsakem pogovoru. Predloga vključuje:

- **Pridobivanje informacij o projektu**: Branje dokumentov za načrtovanje, preverjanje nalog
- **Struktura kode**: Omejitve velikosti datotek, organizacija modulov
- **Zahteve testiranja**: "Test Driven Development" - TDD. Za novo kodo najprej kreiraj test. Kategorije: Vzorci enotnih testov, pričakovanja pokritosti
- **Slogovne konvencije**: Jezikovne preference, pravila oblikovanja
- **Standardi dokumentacije**: Formati docstringov, prakse komentiranja, json & Markdown format za bolj standardizirano komunikacijo med LLM modeli

**Priporočamo, da predlogo prilagodite za vaš projekt, lahko pa jo uporabite tako kot je.**

### 2. Ustvarite vašo začetno zahtevo po funkcionalnosti (PRD)

Uredite `INITIAL.md` za opis projekta, ki ga želite zgraditi:

```markdown
## FUNKCIJA:
[Opišite, kaj želite zgraditi - bodite specifični glede funkcionalnosti in zahtev]

## PRIMERI:
[Naštejte morebitne primerne datoteke v mapi examples/ in razložite, kako naj se uporabljajo]

## DOKUMENTACIJA:
[Vključite povezave do relevantne dokumentacije, API-jev ali eksternih strežnikov po protokolu Model Context Protocol [MCP]]

## DRUGI POMISLEKI:
[Omenite morebitne pasti, specifične zahteve ali stvari, ki jih AI pomočniki pogosto spregledajo]
```

**Glejte `INITIAL_EXAMPLE.md` za popoln primer.**

### 3. Generirajte [PRP]

[PRP] (Product Requirements Prompts) so celoviti načrti implementacije, ki vključujejo:

- Popoln kontekst in dokumentacijo
- Korake implementacije z validacijo
- Vzorci obravnavanja napak
- Zahteve testiranja

Podobni so [PRD] (Product Requirements Documents), vendar so oblikovani bolj specifično za navodila AI asistentu za kodiranje.

Zaženite v [Claude Code]:
```bash
/generate-prp INITIAL.md
```

**Opomba:** Poševni ukazi so prilagojene funkcije, definirane v `.claude/commands/`. Primer njihove implementacije:
- `.claude/commands/generate-prp.md` - kako raziskuje in ustvarja [PRP]
- `.claude/commands/execute-prp.md` - kako implementira funkcije iz [PRP]

Spremenljivka `$ARGUMENTS` doda kar koli podate po imenu ukaza (npr. `INITIAL.md` ali `PRPs/your-feature.md`).

Ta ukaz bo:
1. Prebral vašo zahtevo po funkcionalnosti
2. Raziskal kodo za vzorce
3. Poiskal relevantno dokumentacijo
4. Ustvaril celovit [PRP] v `PRPs/your-feature-name.md`

### 4. Izvedite [PRP]

Ko je generiran, izvedite [PRP] za implementacijo vaše funkcije:

```bash
/execute-prp PRPs/your-feature-name.md
```

AI asistent bo:
1. Prebral celoten kontekst iz [PRP]
2. Ustvaril podroben načrt za implementacijo
3. Korak po korak izvedel dodano kodo in pričel s samodejno validacijo
4. Poganjal teste in popravil morebitne težave
5. Zagotovil, da so vsi kriteriji uspeha izpolnjeni

## Pisanje učinkovite INITIAL.md datoteke

### Poskrbite, da so ključni elementi dobro razloženi

**FUNKCIJA**: Bodite specifični, celoviti in natančni
- ❌ "Zgradite web-scraper"
- ✅ "Zgradite asinhroni spletni web-scraper z uporabo BeautifulSoup, ki shranjuje podatke o izdelkih iz e-commerce strani, upošteva omejevanje hitrosti (rate-limit) in shranjuje rezultate v PostgreSQL bazo podatkov"

**PRIMERI**: Uporabite mapo examples/
- Postavite relevantne delujoče vzorce kode v `examples/`
- Sklicujte se na specifične datoteke in vzorce, ki preverjeno delujejo iz prejšnjih projektov
- Razložite kateri vidiki naj se posnemajo, da AI po nepotrebnem ne "kuri" žetonov LLM providerja, ampak upošteva rešitev iz delujočega primera

**DOKUMENTACIJA**: Vključite vse relevantne vire
- URL-ji dokumentacije API
- Vodniki knjižnic [Context 7 MCP]
- Dokumentacija strežnikov [MCP]
- Sheme baz podatkov [Prisma ORM]

**DRUGI POMISLEKI**: Načrtujte pomembne podrobnosti
- Zahteve avtentikacije
- Omejitve hitrosti ali kvote za LLM modele
- Pogoste pasti
- Zahteve zmogljivosti

## Delovni tok [PRP]

### Kako deluje /generate-prp

Ukaz sledi temu procesu:

1. **Faza raziskovanja**
   - Analizira vašo kodo in prepozna vzorce
   - Išče podobne implementacije
   - Identificira konvencije, ki jim mora slediti

2. **Zbiranje dokumentacije**
   - Pridobi relevantno dokumentacijo API
   - Vključi dokumentacijo knjižnic
   - Doda pasti in posebnosti

3. **Ustvarjanje načrta**
   - Ustvari korak-po-korak načrt implementacije
   - Vključi validacijske prehode
   - Doda zahteve testiranja

4. **Preverjanje kakovosti**
   - Oceni raven zaupanja (1-10)
   - Zagotovi, da je ves kontekst vključen

### Kako deluje /execute-prp

1. **Nalaganje konteksta**: Prebere celoten [PRP]
2. **Načrtovanje**: Ustvari podroben seznam nalog z uporabo "TodoWrite"
3. **Izvedba**: Implementira vsako komponento
4. **Validacija**: Požene teste in linting
5. **Iteracija**: Popravi morebitne najdene težave
6. **Konec**: Zagotovi, da so vse zahteve izpolnjene

Glejte `PRPs/EXAMPLE_multi_agent_prp.md` za popoln primer načrtovanja generiranja.

## Učinkovita uporaba primerov

Mapa `examples/` je **kritična** za uspeh. AI asistent delujejo veliko bolje, ko lahko vidi vzorce katerim nato sledi.

### Kaj vključiti v primere

1. **Vzorci strukture kode**
   - Kako organizirate module
   - Konvencije uvozov
   - Vzorci razredov/funkcij

2. **Vzorci testiranja**
   - Struktura testnih datotek
   - Pristopi posnemanja
   - Slogi trditev

3. **Vzorci integracije**
   - Implementacije API točk
   - Povezave baz podatkov
   - Tokovi avtentikacije

4. **Vzorci CLI**
   - Razčlenjevanje argumentov
   - Oblikovanje izhoda
   - Obravnava napak

### Struktura primera

```
examples/
├── README.md           # Razloži, kaj vsak primer demonstrira
├── cli.py             # Vzor implementacije CLI
├── agent/             # Vzorci arhitekture agentov
│   ├── agent.py      # Vzor ustvarjanja agentov
│   ├── tools.py      # Vzor implementacije orodij
│   └── providers.py  # Vzor več ponudnikov
└── tests/            # Vzorci testiranja
    ├── test_agent.py # Vzorci enotnih testov
    └── conftest.py   # Konfiguracija Pytest
```

## Najboljše prakse

### 1. Bodite eksplicitni v INITIAL.md
- Ne predpostavljajte, da AI pozna vaše preference
- Vključite specifične zahteve in omejitve
- Sklicujte se na primere

### 2. Zagotovite celovite primere
- Več primerov = boljša implementacija
- Definirajte, kaj storiti IN česa ne storiti
- Vključite vzorce obravnavanja napak

### 3. Uporabite validacijske prehode
- [PRP] vključujejo testne ukaze, ki morajo uspeti
- AI bo iteriral, dokler vse validacije ne uspejo
- To zagotavlja delujočo kodo že ob prvem poskusu

### 4. Izkoristite dokumentacijo
- Vključite uradno dokumentacijo API
- Dodajte vire strežnikov [MCP]
- Sklicujte se na specifične razdelke dokumentacije

### 5. Prilagodite CLAUDE.md
- Dodajte svoje konvencije
- Vključite projektno specifična pravila
- Določite standarde kodiranja

## Viri

- [Dokumentacija [Claude Code]](https://docs.anthropic.com/en/docs/claude-code)
- [Najboljše prakse kontekstnega inženiranja](https://www.philschmid.de/context-engineering)
