# Storebadge

A collection of App Store, Google Play, and Microsoft Store badges in multiple languages, delivered via CDN. Perfect for marketing websites, documentation, and applications.

## 📋 Quick Start

### Supported Formats
- **App Store**: SVG (2 variants: black, white)
- **Google Play**: SVG & PNG (both available)
- **Microsoft Store**: SVG (2 variants: dark, light)

### File Naming Convention
All files follow the **ISO 639-1** language code standard:
- App Store: `appstore-{color}-{lang}.svg` (e.g., `appstore-black-tr.svg`)
- Google Play: `googleplay-{lang}.{svg|png}` (e.g., `googleplay-tr.svg`)
- Microsoft: `{lang} {theme}.svg` (e.g., `en-us dark.svg`)

---

## ⚡ Usage via jsDelivr CDN

Replace `YOUR_USERNAME` with your GitHub username.

### App Store Badge

**Black Badge (Recommended for Light Backgrounds)**
```html
<img 
  src="https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-en.svg" 
  alt="Download on the App Store" 
  height="40" 
/>
```

**White Badge (Recommended for Dark Backgrounds)**
```html
<img 
  src="https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-white-en.svg" 
  alt="Download on the App Store" 
  height="40" 
/>
```

### Google Play Badge

**SVG Format**
```html
<img 
  src="https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-en.svg" 
  alt="Get it on Google Play" 
  height="40" 
/>
```

**PNG Format (with fallback)**
```html
<img 
  src="https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-en.png" 
  alt="Get it on Google Play" 
  height="40" 
/>
```

### Microsoft Store Badge

**Dark Badge (Recommended for Light Backgrounds)**
```html
<img 
  src="https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/en-us-dark.svg" 
  alt="Get from Microsoft Store" 
  height="40" 
/>
```

**Light Badge (Recommended for Dark Backgrounds)**
```html
<img 
  src="https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/en-us-light.svg" 
  alt="Get from Microsoft Store" 
  height="40" 
/>
```

> **Production Tip**: Pin to a release tag instead of `@main` to avoid breaking changes:
> ```
> https://cdn.jsdelivr.net/gh/mynameiskazim/storebadge@v1.0.0/badges/...
> ```

---

## 📦 Available Badges by Language

### App Store Badges
**SVG only** — Available in both `black` and `white` variants

| Language | Language Code | Preview (Black) |
|---|---|---|
| Afrikaans | `af` | ![Afrikaans](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-af.svg) |
| Arabic (Saudi Arabia) | `ar` | ![Arabic](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-ar.svg) |
| Azerbaijani | `az` | ![Azerbaijani](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-az.svg) |
| Bulgarian | `bg` | ![Bulgarian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-bg.svg) |
| Bengali | `bn` | ![Bengali](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-bn.svg) |
| Czech | `cs` | ![Czech](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-cs.svg) |
| Danish | `da` | ![Danish](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-da.svg) |
| German | `de` | ![German](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-de.svg) |
| Greek | `el` | ![Greek](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-el.svg) |
| English | `en` | ![English](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-en.svg) |
| Spanish | `es` | ![Spanish](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-es.svg) |
| Spanish (Catalonia) | `es-ca` | ![Spanish (CA)](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-es-ca.svg) |
| Spanish (Mexico) | `es-mx` | ![Spanish (MX)](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-es-mx.svg) |
| Estonian | `et` | ![Estonian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-et.svg) |
| Finnish | `fi` | ![Finnish](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-fi.svg) |
| Filipino | `fil` | ![Filipino](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-fil.svg) |
| French | `fr` | ![French](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-fr.svg) |
| French (Canada) | `fr-ca` | ![French (CA)](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-fr-ca.svg) |
| Gujarati | `gu` | ![Gujarati](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-gu.svg) |
| Hebrew | `he` | ![Hebrew](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-he.svg) |
| Hindi | `hi` | ![Hindi](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-hi.svg) |
| Croatian | `hr` | ![Croatian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-hr.svg) |
| Hungarian | `hu` | ![Hungarian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-hu.svg) |
| Indonesian | `id` | ![Indonesian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-id.svg) |
| Italian | `it` | ![Italian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-it.svg) |
| Japanese | `ja` | ![Japanese](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-ja.svg) |
| Kannada | `kn` | ![Kannada](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-kn.svg) |
| Korean | `ko` | ![Korean](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-ko.svg) |
| Lithuanian | `lt` | ![Lithuanian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-lt.svg) |
| Latvian | `lv` | ![Latvian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-lv.svg) |
| Malayalam | `ml` | ![Malayalam](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-ml.svg) |
| Marathi | `mr` | ![Marathi](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-mr.svg) |
| Malay | `ms` | ![Malay](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-ms.svg) |
| Maltese | `mt` | ![Maltese](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-mt.svg) |
| Norwegian | `nb` | ![Norwegian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-nb.svg) |
| Dutch | `nl` | ![Dutch](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-nl.svg) |
| Odia | `or` | ![Odia](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-or.svg) |
| Punjabi | `pa` | ![Punjabi](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-pa.svg) |
| Polish | `pl` | ![Polish](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-pl.svg) |
| Portuguese (Brazil) | `pt-br` | ![Portuguese (BR)](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-pt-br.svg) |
| Portuguese (Portugal) | `pt-pt` | ![Portuguese (PT)](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-pt-pt.svg) |
| Romanian | `ro` | ![Romanian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-ro.svg) |
| Russian | `ru` | ![Russian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-ru.svg) |
| Slovak | `sk` | ![Slovak](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-sk.svg) |
| Slovenian | `sl` | ![Slovenian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-sl.svg) |
| Swedish | `sv` | ![Swedish](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-sv.svg) |
| Tamil | `ta` | ![Tamil](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-ta.svg) |
| Telugu | `te` | ![Telugu](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-te.svg) |
| Thai | `th` | ![Thai](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-th.svg) |
| Turkish | `tr` | ![Turkish](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-tr.svg) |
| Ukrainian | `uk` | ![Ukrainian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-uk.svg) |
| Urdu | `ur` | ![Urdu](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-ur.svg) |
| Vietnamese | `vi` | ![Vietnamese](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-vi.svg) |
| Chinese (Simplified) | `zh-cn` | ![Chinese (CN)](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-zh-cn.svg) |
| Chinese (Traditional) | `zh-tw` | ![Chinese (TW)](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-zh-tw.svg) |

---

### Google Play Badges
**SVG & PNG available** — Use `.svg` or `.png` extension

| Language | Language Code | Preview (SVG) |
|---|---|---|
| Afrikaans | `af` | ![Afrikaans](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-af.svg) |
| Arabic | `ar` | ![Arabic](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-ar.svg) |
| Azerbaijani | `az` | ![Azerbaijani](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-az.svg) |
| Belarusian | `be` | ![Belarusian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-be.svg) |
| Bulgarian | `bg` | ![Bulgarian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-bg.svg) |
| Bengali | `bn` | ![Bengali](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-bn.svg) |
| Bosnian | `bs` | ![Bosnian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-bs.svg) |
| Catalan | `ca` | ![Catalan](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-ca.svg) |
| Czech | `cs` | ![Czech](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-cs.svg) |
| Danish | `da` | ![Danish](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-da.svg) |
| German | `de` | ![German](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-de.svg) |
| Greek | `el` | ![Greek](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-el.svg) |
| English | `en` | ![English](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-en.svg) |
| Spanish | `es` | ![Spanish](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-es.svg) |
| Spanish (Latin America) | `es-latam` | ![Spanish (LATAM)](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-es-latam.svg) |
| Estonian | `et` | ![Estonian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-et.svg) |
| Basque | `eu` | ![Basque](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-eu.svg) |
| Persian | `fa` | ![Persian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-fa.svg) |
| Finnish | `fi` | ![Finnish](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-fi.svg) |
| Filipino | `fil` | ![Filipino](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-fil.svg) |
| French | `fr` | ![French](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-fr.svg) |
| French (Canada) | `fr-ca` | ![French (CA)](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-fr-ca.svg) |
| Irish | `ga` | ![Irish](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-ga.svg) |
| Galician | `gl` | ![Galician](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-gl.svg) |
| Gujarati | `gu` | ![Gujarati](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-gu.svg) |
| Hebrew | `he` | ![Hebrew](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-he.svg) |
| Hindi | `hi` | ![Hindi](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-hi.svg) |
| Croatian | `hr` | ![Croatian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-hr.svg) |
| Hungarian | `hu` | ![Hungarian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-hu.svg) |
| Armenian | `hy` | ![Armenian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-hy.svg) |
| Indonesian | `id` | ![Indonesian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-id.svg) |
| Icelandic | `is` | ![Icelandic](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-is.svg) |
| Italian | `it` | ![Italian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-it.svg) |
| Japanese | `ja` | ![Japanese](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-ja.svg) |
| Georgian | `ka` | ![Georgian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-ka.svg) |
| Kazakh | `kk` | ![Kazakh](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-kk.svg) |
| Khmer | `km` | ![Khmer](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-km.svg) |
| Kannada | `kn` | ![Kannada](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-kn.svg) |
| Korean | `ko` | ![Korean](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-ko.svg) |
| Kyrgyz | `ky` | ![Kyrgyz](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-ky.svg) |
| Lao | `lo` | ![Lao](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-lo.svg) |
| Lithuanian | `lt` | ![Lithuanian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-lt.svg) |
| Latvian | `lv` | ![Latvian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-lv.svg) |
| Macedonian | `mk` | ![Macedonian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-mk.svg) |
| Malayalam | `ml` | ![Malayalam](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-ml.svg) |
| Mongolian | `mn` | ![Mongolian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-mn.svg) |
| Marathi | `mr` | ![Marathi](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-mr.svg) |
| Malay | `ms` | ![Malay](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-ms.svg) |
| Burmese | `my` | ![Burmese](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-my.svg) |
| Norwegian | `nb` | ![Norwegian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-nb.svg) |
| Nepali | `ne` | ![Nepali](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-ne.svg) |
| Dutch | `nl` | ![Dutch](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-nl.svg) |
| Punjabi | `pa` | ![Punjabi](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-pa.svg) |
| Polish | `pl` | ![Polish](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-pl.svg) |
| Portuguese (Brazil) | `pt-br` | ![Portuguese (BR)](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-pt-br.svg) |
| Portuguese (Portugal) | `pt-pt` | ![Portuguese (PT)](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-pt-pt.svg) |
| Romanian | `ro` | ![Romanian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-ro.svg) |
| Russian | `ru` | ![Russian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-ru.svg) |
| Sinhala | `si` | ![Sinhala](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-si.svg) |
| Slovak | `sk` | ![Slovak](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-sk.svg) |
| Slovenian | `sl` | ![Slovenian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-sl.svg) |
| Albanian | `sq` | ![Albanian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-sq.svg) |
| Serbian | `sr` | ![Serbian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-sr.svg) |
| Swedish | `sv` | ![Swedish](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-sv.svg) |
| Swahili | `sw` | ![Swahili](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-sw.svg) |
| Tamil | `ta` | ![Tamil](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-ta.svg) |
| Telugu | `te` | ![Telugu](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-te.svg) |
| Thai | `th` | ![Thai](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-th.svg) |
| Turkish | `tr` | ![Turkish](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-tr.svg) |
| Ukrainian | `uk` | ![Ukrainian](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-uk.svg) |
| Urdu | `ur` | ![Urdu](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-ur.svg) |
| Uzbek | `uz` | ![Uzbek](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-uz.svg) |
| Vietnamese | `vi` | ![Vietnamese](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-vi.svg) |
| Chinese (Simplified) | `zh-cn` | ![Chinese (CN)](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-zh-cn.svg) |
| Chinese (Traditional) | `zh-tw` | ![Chinese (TW)](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-zh-tw.svg) |
| Zulu | `zu` | ![Zulu](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-zu.svg) |

---

### Microsoft Store Badges
**SVG only** — Available in both `dark` and `light` variants

| Language | Language Code | Preview (Dark) | Preview (Light) |
|---|---|---|---|
| Afrikaans | `af` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/af-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/af-light.svg) |
| Amharic | `am` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/am-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/am-light.svg) |
| Arabic | `ar` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ar-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ar-light.svg) |
| Assamese | `as` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/as-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/as-light.svg) |
| Azerbaijani | `az` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/az-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/az-light.svg) |
| Bulgarian | `bg` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/bg-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/bg-light.svg) |
| Bengali | `bn` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/bn-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/bn-light.svg) |
| Bosnian | `bs` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/bs-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/bs-light.svg) |
| Catalan | `ca` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ca-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ca-light.svg) |
| Welsh | `cy` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/cy-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/cy-light.svg) |
| Czech | `cs` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/cs-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/cs-light.svg) |
| Danish | `da` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/da-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/da-light.svg) |
| German | `de` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/de-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/de-light.svg) |
| Greek | `el` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/el-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/el-light.svg) |
| English (US) | `en-us` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/en-us-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/en-us-light.svg) |
| Spanish | `es` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/es-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/es-light.svg) |
| Estonian | `et` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/et-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/et-light.svg) |
| Persian | `fa` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/fa-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/fa-light.svg) |
| Finnish | `fi` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/fi-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/fi-light.svg) |
| Filipino | `fil` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/fil-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/fil-light.svg) |
| French | `fr` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/fr-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/fr-light.svg) |
| Irish | `ga` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ga-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ga-light.svg) |
| Scottish Gaelic | `gd` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/gd-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/gd-light.svg) |
| Galician | `gl` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/gl-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/gl-light.svg) |
| Gujarati | `gu` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/gu-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/gu-light.svg) |
| Hebrew | `he` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/he-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/he-light.svg) |
| Hindi | `hi` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/hi-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/hi-light.svg) |
| Croatian | `hr` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/hr-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/hr-light.svg) |
| Hungarian | `hu` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/hu-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/hu-light.svg) |
| Armenian | `hy` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/hy-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/hy-light.svg) |
| Indonesian | `id` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/id-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/id-light.svg) |
| Icelandic | `is` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/is-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/is-light.svg) |
| Italian | `it` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/it-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/it-light.svg) |
| Japanese | `ja` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ja-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ja-light.svg) |
| Georgian | `ka` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ka-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ka-light.svg) |
| Kazakh | `kk` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/kk-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/kk-light.svg) |
| Khmer | `km` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/km-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/km-light.svg) |
| Kannada | `kn` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/kn-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/kn-light.svg) |
| Korean | `ko` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ko-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ko-light.svg) |
| Konkani | `kok` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/kok-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/kok-light.svg) |
| Luxembourgish | `lb` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/lb-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/lb-light.svg) |
| Lao | `lo` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/lo-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/lo-light.svg) |
| Lithuanian | `lt` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/lt-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/lt-light.svg) |
| Latvian | `lv` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/lv-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/lv-light.svg) |
| Maori | `mi` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/mi-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/mi-light.svg) |
| Macedonian | `mk` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/mk-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/mk-light.svg) |
| Malayalam | `ml` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ml-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ml-light.svg) |
| Marathi | `mr` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/mr-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/mr-light.svg) |
| Malay | `ms` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ms-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ms-light.svg) |
| Maltese | `mt` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/mt-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/mt-light.svg) |
| Nepali | `ne` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ne-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ne-light.svg) |
| Dutch | `nl` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/nl-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/nl-light.svg) |
| Norwegian Nynorsk | `nn` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/nn-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/nn-light.svg) |
| Odia | `or` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/or-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/or-light.svg) |
| Punjabi | `pa` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/pa-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/pa-light.svg) |
| Polish | `pl` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/pl-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/pl-light.svg) |
| Portuguese (Brazil) | `pt-br` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/pt-br-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/pt-br-light.svg) |
| Portuguese (Portugal) | `pt-pt` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/pt-pt-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/pt-pt-light.svg) |
| Quechua | `quz` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/quz-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/quz-light.svg) |
| Romanian | `ro` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ro-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ro-light.svg) |
| Russian | `ru` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ru-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ru-light.svg) |
| Slovak | `sk` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/sk-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/sk-light.svg) |
| Slovenian | `sl` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/sl-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/sl-light.svg) |
| Albanian | `sq` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/sq-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/sq-light.svg) |
| Serbian | `sr` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/sr-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/sr-light.svg) |
| Swedish | `sv` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/sv-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/sv-light.svg) |
| Tamil | `ta` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ta-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ta-light.svg) |
| Telugu | `te` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/te-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/te-light.svg) |
| Thai | `th` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/th-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/th-light.svg) |
| Turkish | `tr` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/tr-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/tr-light.svg) |
| Uyghur | `ug` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ug-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ug-light.svg) |
| Ukrainian | `uk` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/uk-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/uk-light.svg) |
| Urdu | `ur` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ur-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/ur-light.svg) |
| Uzbek | `uz` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/uz-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/uz-light.svg) |
| Vietnamese | `vi` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/vi-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/vi-light.svg) |
| Chinese (Simplified) | `zh-cn` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/zh-cn-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/zh-cn-light.svg) |
| Chinese (Traditional) | `zh-tw` | ![Dark](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/zh-tw-dark.svg) | ![Light](https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/zh-tw-light.svg) |

---

## 📝 Complete Example

Embed all three app store badges in your website:

```html
<div style="display: flex; gap: 10px; margin: 20px 0;">
  <!-- App Store -->
  <a href="https://apps.apple.com/app/your-app">
    <img 
      src="https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/appstore/appstore-black-en.svg" 
      alt="Download on the App Store" 
      height="40" 
    />
  </a>

  <!-- Google Play -->
  <a href="https://play.google.com/store/apps/details?id=com.your.app">
    <img 
      src="https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/googleplay/googleplay-en.svg" 
      alt="Get it on Google Play" 
      height="40" 
    />
  </a>

  <!-- Microsoft Store -->
  <a href="https://www.microsoft.com/store/apps/YOUR_APP_ID">
    <img 
      src="https://raw.githubusercontent.com/mynameiskazim/storebadge/refs/heads/main/badges/microsoft/en-us-dark.svg" 
      alt="Get from Microsoft Store" 
      height="40" 
    />
  </a>
</div>
```

---

## 📌 Tips & Best Practices

- **Always pin to a version tag** (`@v1.0.0`) in production for stability
- **Color variants**: Choose `black` for light backgrounds, `white` for dark backgrounds (App Store)
- **Theme variants**: Choose `dark` for light backgrounds, `light` for dark backgrounds (Microsoft)
- **Fallback PNG**: Google Play badges available in both SVG and PNG formats
- **Height**: Recommended height is `40px` for web display
- **Locale support**: Use language codes from the tables above (e.g., `tr` for Turkish, `en` for English)

---

## 📚 Sources

- **Google Play Badges**: https://play.google.com/intl/en_us/badges/
- **Apple App Store Badges**: https://developer.apple.com/app-store/marketing/guidelines/
- **Microsoft Store Badges**: https://docs.microsoft.com/en-us/windows/apps/publish/publish-your-app-in-the-microsoft-store

---

## 📄 License

These badges are provided by their respective companies. Please review their usage guidelines before using them commercially.
