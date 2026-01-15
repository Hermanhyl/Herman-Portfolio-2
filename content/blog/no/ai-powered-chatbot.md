---
title: Bygger en AI-drevet porteføljeassistent
date: 2024-12-24T00:00:00.000Z
featured: false
excerpt: Hvordan jeg integrerte OpenAI GPT-4o-mini i porteføljen min for å lage en
  interaktiv AI-assistent som svarer på spørsmål om mine ferdigheter og
  erfaring.
readTime: 5 min lesing
author: Herman Hylland
tags:
  - React
  - AI
  - OpenAI
  - Serverless
---

I dette innlegget går jeg gjennom hvordan jeg bygde en AI-drevet chatbot for porteføljen min ved hjelp av OpenAIs GPT-4o-mini-modell og Netlify Functions.

## Utfordringen

Jeg ønsket å skape en interaktiv måte for besøkende å lære om mine ferdigheter, prosjekter og erfaring uten å måtte bla gjennom hver side. Løsningen? En AI-assistent som kan svare på spørsmål naturlig.

## Teknologistakk

- **OpenAI GPT-4o-mini**: Kostnadseffektiv og rask AI-modell
- **Netlify Functions**: Serverløs backend for API-kall
- **React**: Frontend-grensesnitt med jevne animasjoner
- **Tailwind CSS**: Vakker, responsiv design

## Implementering

Chatboten består av tre hoveddeler:

1. **Frontend-komponent**: En flytende chat-knapp og vindu med meldingshistorikk
2. **Serverløs funksjon**: Håndterer API-forespørsler til OpenAI
3. **System-prompt**: Kontekst om porteføljen min som veileder AI-en

## Hovedfunksjoner

- Sanntidssvar med streaming
- Opprettholdelse av samtalekontekst
- Kostnadseffektiv (~$0.001-0.005 per samtale)
- Vakker UI med gradienter og animasjoner

## Resultater

Chatboten har blitt en av de mest engasjerende funksjonene på porteføljen min, og lar besøkende få personlig informasjon raskt.
