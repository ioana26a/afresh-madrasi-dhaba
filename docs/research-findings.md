# Madrasi Dhaba — comparația copiilor SWF

Verificare: 19 septembrie 2026. Au fost descărcate și verificate 13 copii din 12 domenii. Au rezultat două binare distincte.

| Variantă | Octeți SWF | Octeți decomprimați | SHA-256 |
|---|---:|---:|---|
| A, mică | 1.248.849 | 1.413.788 | `1d054a0a4a1c235a01060ad76c2c3ead7f67a24e16c06ca37cba270e9c471a6f` |
| B, mare | 1.486.192 | 1.809.134 | `9bf19a5d63ef2375e2b675d9c5126e6b27d0d87f55e1fcc0d24e52b090ed2d2a` |

Ambele sunt SWF 8 comprimate CWS, 12 cadre/secundă. B este cu 237.343 octeți mai mare pe disc (+19%), respectiv cu 395.346 octeți după decomprimare. Versiunea SWF indică formatul Flash, nu versiunea jocului.

## Copii verificate

| Sursă | Variantă | Fișier |
|---|---|---|
| Gatoconbota | A | https://www.gatoconbota.com/mm/go/swf/restaurant-madrasi-dhaba.swf |
| Gamesflow | A | https://www.gamesflow.com/jeux/game-1253751005.swf |
| Flashgames.it | A | https://www.flashgames.it/giochi/abilita/madrasi.dhaba/game.swf |
| Divertissez-vous | A | https://www.divertissez-vous.com/hsalf/madrasi-dhaba.swf |
| Games68 | A | https://www.games68.com/games/game-1253751005.swf |
| KidzSearch | B | https://games.kidzsearch.com/computer/flashgame_data/4/ksff_34447_40105.swf |
| FastGames | B | https://fastgames.com/swf/madrasidhaba.swf |
| Y8 | B | https://img.y8.com/cloud/y8-flash-game/contents/item_versions/flash_games/5660/original/madrasi_dhaba.swf?1521307632 |
| Azeri | B | https://oyun.azeri.net/oyunswf/7070.swf |
| GirlsGames123 | B | https://www.girlsgames123.com//misc-games/10227/madrasidhaba.swf |
| OneOnlineGames, intrarea Business | B | https://oneonlinegames.com/sites/default/files/flash2/madrasi-dhaba.swf |
| OneOnlineGames, intrarea Cooking | B | https://oneonlinegames.com/sites/default/files/flash/madrasidhaba.swf |
| GamePuma | B | https://www.gamepuma.com/games/07/madrasidhaba.swf |

## Diferențe stabilite din cod și resurse

Analiză statică cu JPEXS 26.3.0, cu eliminarea obfuscării AS1/2, urmată de comparația codului și a resurselor SWF. Nu a fost efectuată o sesiune completă de joc și nu au fost trimise scoruri către servere.

1. **Instrucțiuni animate.** B adaugă butonul `btnHowToPlay`. Acesta afișează `mcInstruction` și pornește animația. Obiectul este sprite-ul 321, cu 335 de cadre și un buton Skip. A are numai legarea butonului Play în codul corespunzător.
2. **Cinci sunete de comandă.** B adaugă sunetele exportate `order0`–`order4` (23.965 octeți în tagurile SWF necomprimate, inclusiv antetele acestora). A conține apeluri către aceste nume, dar nu resursele corespunzătoare. Toate cele șase sunete din A se regăsesc cu payload identic în B; B are un total de 11 sunete.
3. **Control audio diferit.** A comută muzica prin apăsarea radioului. B adaugă butoane Mute/Unmute în meniu și joc și condiționează sunetele comenzilor de variabila audio. În B, muzica este selectată dintre `bgMusic1` și `bgMusic2`. A folosește `random(3)+1`, deși ambele fișiere au numai două melodii exportate. B elimină astfel posibilitatea selectării numelui absent `bgMusic3`; consecința sonoră exactă în fiecare player nu a fost testată dinamic.
4. **Scoruri pentru site-uri externe.** B setează `external=true`, afișează câmpul de nume și formularul de scor și oferă un link către clasamente. La apăsarea Submit, codul trimite numele, scorul, numele jocului și o verificare calculată către endpointul GamezIndia `external/submitscore_external.php`. Linkul de clasament deschide `external/external_highscore.php?gamename=madrasidhaba`. A folosește integrarea relativă `/member/setscore.php` sau `/member/tournamentscore.php` și apelul JavaScript `callAjax`. Existența codului nu confirmă funcționarea actuală a serviciilor.
5. **Branding și interfață suplimentare.** B conține un obiect clicabil care deschide GamezIndia, componente Flash MX pentru interfață, fonturi și grafice suplimentare. Numărul scripturilor exportate crește de la 23 la 83, în mare parte prin bibliotecile interfeței. Datele pentru fonturile DefineFont3 cresc de la 34.163 la 141.282 octeți; pentru DoInitAction, de la 1.766 la 74.079 octeți. Acestea sunt dimensiuni decomprimate, nu contribuții directe la diferența fișierelor comprimate.

## Gameplay și datarea variantei

În codul principal decompilat, funcțiile de preparare, ardere, mutare și servire a doselor, generarea clienților, scorul, pierderea clienților și progresia zilelor coincid. Diferențele din acest cod privesc controlul audio. Cele cinci scripturi de client au aceeași logică, cu adăugarea verificării audio înaintea sunetului comenzii. Scripturile cadrelor principale 2 și 7 sunt identice după eliminarea obfuscării. Nu au fost identificate niveluri sau mecanici noi în comparația efectuată.

B este demonstrabil o ediție cu resurse și funcții suplimentare pentru distribuție externă. Diferențele sunt compatibile cu o revizie îmbunătățită, dar nu dovedesc ordinea cronologică: A ar putea fi și o ediție redusă. Nu a fost identificat un număr de versiune al jocului, un changelog sau o dată de compilare verificabilă care să stabilească „ultima versiune”. Datele paginilor sau Last-Modified ale serverelor nu sunt folosite ca date de versiune.

## Alte surse investigate, fără comparație binară reușită

- Flash Museum: arhiva publicată a răspuns 403; pagina citează Y8, dar identitatea arhivei nu a fost confirmată.
- Box10: adresa SWF identificată, descărcarea a răspuns 403.
- Game-game: eroare de certificat la HTTPS; alternativa HTTP a răspuns 404.
- Flashgames.cx: intrarea `madrasi-dhaba-2` există; playerul a răspuns 500. Sufixul URL nu demonstrează o versiune 2 a jocului.
- Flashgames247, Dailygames, Mi9, Softpedia și Flashgamesplayer: pagini găsite, dar fără binar descărcat și verificat în această investigație.

Recomandare practică: pentru ediția cu tutorialul animat, sunetele comenzilor și integrarea externă de scor, folosește B, de exemplu copia FastGames/Y8/KidzSearch. Recomandarea se bazează pe funcțiile confirmate, nu pe o dată de lansare presupusă.
