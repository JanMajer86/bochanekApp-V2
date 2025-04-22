# bochánekApp

**bochánekApp** je relativně jednoduchý fullstack projekt.  
Jedná se o databázi křestních jmen s přístupem pro dva unikátní uživatele (nyní hardcoded se společným heslem, v tomto případě já & moje žena).  
Smyslem aplikace je ukládání nápadů na potenciální jména pro našeho budoucího potomka.

## Funkce

- Ukládání jmen do databáze
- Hodnocení jednotlivých jmen
- Filtrace, seskupování a řazení dat na frontendu

---

## Technologie

### Backend

- Node.js & Express
- MongoDB & Mongoose
- JWT token v HTTP cookie

### Frontend

- React s Vite
- React Router
- JavaScript
- Chakra UI

---

## To-Do

Projekt je funkční a aktuálně hostovaný na Renderu.  
Do budoucna bych rád přidal a vylepšil následující:

- Lepší error handling
- Implementace TanStack Query
- Možnost zobrazit například **Top 5** nejlépe hodnocených jmen
- Přidání loading spinneru
- Vytvoření hezčí error stránky
- Stránka pro prázdné výsledky vyhledávání

---

## Poznámka

Veškerá filtrace, seskupování a řazení dat probíhá na frontendu.
