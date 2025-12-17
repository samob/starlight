---
title: Upute - predložak, zahtjevi i smjernice
description: Ovo je predložak vodiča, uključujući metapodatke (prvih nekoliko redaka prije stvarnog vodiča). Molimo ispunite što je više moguće. Ako ne znate što staviti negdje, samo ostavite prazno, Community Manager će to ispuniti za vas. Vaš opis treba biti kraći od 160 znakova.
---

Predložak vodiča (zahtjevi u Markdown formatu):

## Uvod

> Metapodaci iznad koriste se za kategorizaciju i opis vodiča. Ovi metapodaci moraju biti dodani na vrh svakog vodiča.

Prvi odlomak ili odlomci su tu da objasnite što će vaš vodič učiniti. Molimo vas da ne samo nabrajate korake koje ćete slijediti; sadržaj (TOC) s koracima bit će automatski dodan.
Osigurajte da korisnici točno znaju s čime će završiti ako slijede vaš vodič, i obavijestite ih ako trebaju neke specifične preduvjete.
Možete se povezati na druge vodiče na kojima se vaš vodič gradi, i dodati preporuke za ono što korisnici trebaju znati.

Osim toga, imajte na umu da su vodiči napisani koristeći Markdown, kao što je prikazano u ovom primjeru vodiča (pogledajte [Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)).

**Preduvjeti**

Ako postoje neki preduvjeti za vaš vodič, molimo vas da ih zapišete ovdje.
Ako već postoji vodič koji objašnjava jedan od preduvjeta, pobrinite se da se povežete na taj drugi vodič.

Na primjer:

* Hetzner Cloud [API token](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token) u [Cloud Console](https://console.hetzner.cloud/)
* [SSH ključ](https://community.hetzner.com/tutorials/howto-ssh-key)

**Primjer terminologije**

Mnogi vodiči će trebati uključiti primjere korisničkih imena, imena hostova, domene i IP-ove. Da bi se to pojednostavilo, svi vodiči trebaju koristiti iste zadane primjere, kao što je opisano u nastavku.

* Korisničko ime: `holu` (skraćeno za Hetzner OnLine User)
* Ime hosta: `<your_host>`
* Domena: `<example.com>`
* Poddomena: `<sub.example.com>`
* IP adrese (IPv4 i IPv6):
   * Server: `<10.0.0.1>` i `<2001:db8:1234::1>`
   * Gateway: `<192.0.2.254>` i `<2001:db8:1234::ffff>`
   * Privatni klijent: `<198.51.100.1>` i `<2001:db8:9abc::1>`
   * Javni klijent: `<203.0.113.1>` i `<2001:db8:5678::1>`

**Nemojte** koristiti stvarne IP-ove u vašem vodiču.

## Korak 1 - Sažetak koraka

Koraci su stvarni koraci koje će korisnici poduzeti da dovrše vaš vodič.

Svaki korak treba graditi na prethodnom, sve dok završni korak ne završi vodič.

Važno je ne preskakati nijedan korak, bez obzira koliko očitim ili samorazumljivim se čini.

Slobodno uključite snimke zaslona, da pokažete točno što korisnik treba vidjeti. Molimo stavite snimke zaslona u zasebnu mapu "images".

Količina koraka ovisit će u potpunosti o tome koliko dugo/komplicirano je vodič.

## Korak 2 - Sažetak koraka

Brzi uvod.

Počnite s...



Zatim...

Konačno...

### Korak 2.1 - Sažetak koraka

Možete stvoriti primjere koda u gotovo svakom programskom jeziku.
Samo navedite jezik nakon prva tri navodnika u vašoj Markdown datoteci.

Evo primjer koda

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

### Korak 2.2 - Sažetak koraka

Još jedan primjer koda

```python
s = "Python syntax highlighting"
print s
```

## Korak 3 - Sažetak koraka (opcionalno)

Upute za korak koji nije nužan za dovršetak vodiča, ali može biti koristan.

## Korak N - Sažetak koraka

Još više uputa.

## Zaključak

Kratki zaključak koji sažima što je korisnik učinio, i možda predlaže različite smjerove akcije koje sada mogu poduzeti. Ako imate korisne poveznice, možete ih podijeliti također.

**Sljedeći koraci:**

* Poveznice na daljnje/zanimljive vodiče
* Poveznice na podršku

##### Licenca: MIT