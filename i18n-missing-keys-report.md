# i18n Missing Keys Analysis Report

**Analysis Date:** January 22, 2026  
**Total Unique Keys:** 919

## Executive Summary

Your internationalization setup has missing translation keys across all 11 locales. English (en) is the most complete with only 4 missing keys, while most other languages are missing 47 keys each.

## Summary by Locale

| Locale | Status | Missing Keys |
|--------|--------|--------------|
| **en** (English) | ⚠️ Nearly Complete | 4 |
| **fr** (French) | ⚠️ Good | 13 |
| **de** (German) | ⚠️ Moderate | 40 |
| **es** (Spanish) | ❌ Incomplete | 47 |
| **it** (Italian) | ❌ Incomplete | 47 |
| **ja** (Japanese) | ❌ Incomplete | 47 |
| **ko** (Korean) | ❌ Incomplete | 47 |
| **pt** (Portuguese) | ❌ Incomplete | 47 |
| **th** (Thai) | ❌ Incomplete | 47 |
| **vi** (Vietnamese) | ❌ Incomplete | 47 |
| **zh** (Chinese) | ❌ Incomplete | 47 |

## Missing Keys by Category

### 1. Food & Beverages Application Keys (All Locales - 4 keys)

These keys appear to be in **all** locale files including English:

- `applications.data.foodBeverages.benefits.cards.development.text`
- `applications.data.foodBeverages.benefits.cards.development.title`
- `applications.data.foodBeverages.benefits.cards.research.text`
- `applications.data.foodBeverages.benefits.cards.research.title`

**Note:** Since even English is missing these, they might be leftover references in the code or planned features.

### 2. News Section Keys (Missing in: de, es, it, ja, ko, pt, th, vi, zh - 27 keys)

- `news.hero.badge`
- `news.hero.title`
- `news.hero.description`
- `news.categories.all`
- `news.categories.newsletters`
- `news.categories.events`
- `news.categories.company`
- `news.categories.scientific`
- `news.categories.applications`
- `news.search.placeholder`
- `news.results`
- `news.empty.title`
- `news.empty.description`
- `news.empty.clear`
- `news.newsletter.badge`
- `news.newsletter.title`
- `news.newsletter.description`
- `news.newsletter.placeholder`
- `news.newsletter.subscribe`
- `news.newsletter.sending`
- `news.newsletter.privacy`
- `news.newsletter.success`
- `news.newsletter.error`
- `news.newsletter.invalidEmail`
- `news.newsletter.networkError`

### 3. Contact Section Keys (Missing in: de, es, it, ja, ko, pt, th, vi, zh - 10 keys)

- `contact.hero.badge`
- `contact.hero.title`
- `contact.hero.description`
- `contact.form.badge`
- `contact.methods.location.title`
- `contact.methods.location.description`
- `contact.partners.badge`
- `contact.faq.cta`
- `contact.faq.ctaButton`

### 4. Applications Section Keys (Missing in: es, fr, it, ja, ko, pt, th, vi, zh - 11 keys)

- `applications.dailyChemicals.badge`
- `applications.data.foodBeverages.badge`
- `applications.data.foodBeverages.benefits.cards.innovation.text`
- `applications.data.foodBeverages.benefits.cards.innovation.title`
- `applications.data.foodBeverages.benefits.cards.safety.text`
- `applications.data.foodBeverages.benefits.cards.safety.title`
- `applications.data.lifeSciences.badge`
- `applications.data.oilGas.badge`
- `applications.subPage.ctaDescription`
- `applications.subPage.ctaTitle`
- `applications.subPage.keyApplications`

### 5. Home/Company Section Keys (Missing in: de, es, fr, it, ja, ko, pt, th, vi, zh - 2 keys)

- `home.company.learn_more`
- `home.company.solutions_title`

## Recommendations

### Immediate Actions

1. **Add missing keys to English (en.json)** - 4 keys related to Food & Beverages development and research sections
2. **Prioritize German (de.json)** - Only 40 missing keys, can be brought to completeness quickly
3. **Focus on French (fr.json)** - Only 13 missing keys, mostly in applications section

### Short-term Actions

4. **Complete News & Contact sections** for all remaining locales (es, it, ja, ko, pt, th, vi, zh)
5. **Complete Applications section** for the same locales
6. **Add Home/Company keys** across all incomplete locales

### Best Practices

- Consider using English as the source of truth and syncing all other locales to match
- Add CI/CD checks to prevent missing translation keys from being deployed
- Consider using a translation management tool to track completeness
- Mark untranslated strings clearly (e.g., with a prefix or placeholder)

## How to Use This Report

You can run the analysis script anytime with:

```bash
node check-i18n.cjs
```

The script compares all locale files and identifies any missing keys across your 11 supported languages.
