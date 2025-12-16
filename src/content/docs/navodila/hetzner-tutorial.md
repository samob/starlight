---
title: Navodila - predloga, zahteve in smernice
description: To je predloga za navodila, vključno z metapodatki (prvih nekaj vrstic pred dejanskimi navodili). Prosimo, izpolnite čim več. Če ne veste, kaj vstaviti nekam, pustite prazno, upravitelj skupnosti bo izpolnil za vas. Vaš opis naj bo krajši od 160 znakov.
---

Predloga navodil (zahteve v formatu Markdown):

## Uvod

> Metapodatki zgoraj se uporabljajo za kategorizacijo in opis navodil. Ti metapodatki morajo biti dodani na vrh vsakega navodila.

Prvi odstavek ali odstavki so namenjeni razlagi, kaj bodo vaša navodila storila. Prosimo, ne preprosto naštejte korakov, ki jih boste sledili; kazalo vsebine (TOC) s koraki bo samodejno dodano.
Zagotovite, da uporabniki natančno vedo, s čim se bodo končali, če sledijo vašim navodilom, in jih obvestite, če potrebujejo kakšne specifične predpogoje.
Lahko se povežete na druga navodila, na katere se vaša navodila gradijo, in dodate priporočila za to, kar bi morali uporabniki vedeti.

Poleg tega upoštevajte, da so navodila napisana z uporabo Markdown, kot je prikazano v tem primeru navodil (glejte [Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)).

**Predpogoji**

Če obstajajo kakšni predpogoji za vaša navodila, jih prosimo zapišite tukaj.
Če že obstajajo navodila, ki razlagajo enega od predpogojev, se prepričajte, da se povežete na ta druga navodila.

Na primer:

* Hetzner Cloud [API žeton](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token) v [Cloud Console](https://console.hetzner.cloud/)
* [SSH ključ](https://community.hetzner.com/tutorials/howto-ssh-key)

**Primer terminologije**

Številna navodila bodo morala vključevati primerne uporabniška imena, imena gostiteljev, domene in IP-je. Da bi to poenostavili, naj vsa navodila uporabljajo iste privzete primere, kot je opisano spodaj.

* Uporabniško ime: `holu` (kratica za Hetzner OnLine User)
* Ime gostitelja: `<your_host>`
* Domena: `<example.com>`
* Poddomena: `<sub.example.com>`
* IP naslovi (IPv4 in IPv6):
   * Strežnik: `<10.0.0.1>` in `<2001:db8:1234::1>`
   * Prehod: `<192.0.2.254>` in `<2001:db8:1234::ffff>`
   * Zasebni odjemalec: `<198.51.100.1>` in `<2001:db8:9abc::1>`
   * Javni odjemalec: `<203.0.113.1>` in `<2001:db8:5678::1>`

**Ne** uporabljajte dejanskih IP-jev v vaših navodilih.

## Korak 1 - Povzetek koraka

Koraki so dejanski koraki, ki jih bodo uporabniki izvajali za dokončanje vaših navodil.

Vsak korak naj gradi na prejšnjem, dokler zadnji korak ne dokonča navodil.

Pomembno je, da ne preskočite nobenega koraka, ne glede na to, kako očiten ali samoumeven se zdi.

Lahko vključite posnetke zaslona, da pokažete natančno, kaj bi moral uporabnik videti. Prosimo, postavite posnetke zaslona v ločeno mapo "images".

Število korakov bo odvisno izključno od tega, kako dolga/komplicirana so navodila.

## Korak 2 - Povzetek koraka

Hiter uvod.

Začnite z...



Nato...

Končno...

### Korak 2.1 - Povzetek koraka

Lahko ustvarite primere kode v skoraj vsakem programskem jeziku.
Samo navedite jezik po prvih treh narekovajih v vaši Markdown datoteki.

Tukaj je primer kode

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

### Korak 2.2 - Povzetek koraka

Še en primer kode

```python
s = "Python syntax highlighting"
print s
```

## Korak 3 - Povzetek koraka (neobvezno)

Navodila za korak, ki ni nujen za dokončanje navodil, vendar je lahko koristen.

## Korak N - Povzetek koraka

Še več navodil.

## Zaključek

Kratek zaključek, ki povzame, kaj je uporabnik storil, in morda predlaga različne poti dejanj, ki jih lahko zdaj sprejmejo. Če imate koristne povezave, jih lahko delite tudi.

**Naslednji koraki:**

* Povezave do nadaljnjih/zanimivih navodil
* Povezave do podpore

##### Licenca: MIT