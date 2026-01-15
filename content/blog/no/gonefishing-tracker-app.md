---
title: "GoneFishing: Bygger en moderne fiskesporingsapp"
date: 2026-01-06T00:00:00.000Z
featured: false
excerpt: "Lager en omfattende fiskesporingsapplikasjon med Next.js, Supabase, og fokus på brukeropplevelse på tvers av alle enheter."
readTime: 5 min lesing
author: Herman Hylland
tags:
  - Next.js
  - React
  - Supabase
  - Tailwind CSS
projectLink: /project/project-gonefishing
projectLabel: Se GoneFishing-prosjektet
---

GoneFishing startet som en enkel idé: hva om fiskere enkelt kunne spore fangstene sine uten å stole på håndskrevne notater eller hukommelse? Resultatet er en moderne fiskesporingsapplikasjon som hjelper brukere med å dokumentere hver detalj av fiskeeventyrene sine.

## Problemet

Fiskeentusiaster ønsker ofte å huske detaljer om fangstene sine—hvor de var, hvilke arter de fanget, forholdene den dagen. Men tradisjonelle metoder er upålitelige. Notater blir borte, minner falmer, og det er ingen god måte å analysere trender over tid.

## Løsningen

GoneFishing gir et rent, intuitivt grensesnitt for å registrere:

- Fiskeart, størrelse og vekt
- Plassering og GPS-koordinater
- Vær- og vannforhold
- Personlige notater og observasjoner

## Hovedfunksjoner

### Temahåndtering
Brukere kan bytte mellom lys og mørk modus, med preferanser lagret for konsistens. Den mørke modusen bruker en skiferblå bakgrunn som er skånsom mot øynene under tidlige morgenturer eller sene kveldsturer—når mange fisketurer skjer.

### Fleksible målinger
Enhetssystemet lar brukere velge mellom metrisk og imperial, noe som gjør appen tilgjengelig over hele verden uavhengig av foretrukne målesystemer.

### Sikker autentisering
Drevet av Supabase, sikrer autentiseringssystemet at hver brukers data forblir privat samtidig som det gir en sømløs innloggingsopplevelse.

## Tekniske beslutninger

### Hvorfor Next.js?
Next.js ga det perfekte grunnlaget med sin innebygde ruting, utmerkede ytelsesoptimaliseringer og sømløs integrasjon med Supabase for både autentisering og datalagring.

### Responsiv-først design
Vel vitende om at fiskere kan logge fangster fra telefonene sine ved vannet, var mobil responsivitet en prioritet fra dag én. Grensesnittet fungerer sømløst enten du er på en telefon ved innsjøen eller gjennomgår historikken din på en stasjonær PC hjemme.

### Forhindre flash av ustilert innhold
Spesiell oppmerksomhet ble viet til å anvende temainnstillinger umiddelbart ved sidelasting, for å forhindre den skurrende «flashen» som kan oppstå ved bytte mellom lyse og mørke temaer.

## Lærdommer

Å bygge GoneFishing forsterket viktigheten av å forstå brukernes kontekst. Fiske skjer under ulike forhold—sterkt sollys, lite lys, våte hender. Hver designbeslutning tok hensyn til disse virkelige scenariene.

## Hva er neste?

Fremtidige planer inkluderer datavisualisering for fangsttrender, sosiale funksjoner, vær-API-integrasjon og bildeopplastinger. Målet er å gjøre GoneFishing til den mest omfattende fiskesporingsløsningen tilgjengelig.

*Sjekk ut live-demoen for å se GoneFishing i aksjon!*
