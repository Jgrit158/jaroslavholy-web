/* ============================================================
   lang.js — Jazykové překlady / Language translations
   jaroslavholy.cz — CS / EN / DE
   ============================================================ */

const TRANSLATIONS = {

  /* ──────────────────────────────────────── ČEŠTINA ── */
  cs: {
    /* NAV */
    'nav.work':        'Práce',
    'nav.services':    'Služby',
    'nav.about':       'O mně',
    'nav.cta':         'Poptat projekt',
    'nav.mobile.cta':  'Poptat projekt',

    /* HERO — index */
    'hero.tag':          'Fotograf & Video maker · Plzeň',
    'hero.meta.years':   'let praxe',
    'hero.meta.clients': 'klientů',
    'hero.meta.spec':    'specializace',
    'hero.item1':        'Produktová foto',
    'hero.item2':        'Promo video',
    'hero.item3':        'Sociální sítě',
    'hero.item4':        'Nemovitosti',

    /* TICKER */
    'ticker.1': 'Produktová fotografie',
    'ticker.2': 'Promo video',
    'ticker.3': 'Sociální sítě',
    'ticker.4': 'Nemovitosti',
    'ticker.5': 'Brand building',
    'ticker.6': 'Foto kurzy',

    /* WORK — index */
    'work.eyebrow':      'Vybraná práce',
    'work.link':         'Celé portfolio ↗',
    'work.type.product': 'Produktová fotografie',
    'work.type.jewelry': 'Šperky & lifestyle',

    /* SERVICES — index */
    'services.eyebrow': 'Služby',
    'svc1.name': 'Produktová<br>fotografie',
    'svc1.desc': 'E-shop, kampaně,<br>detailní záběry',
    'svc2.name': 'Promo &<br>Produkt video',
    'svc2.desc': 'Reklamní videa<br>pro online i TV',
    'svc3.name': 'Sociální<br>sítě',
    'svc3.desc': 'Obsah pro Instagram,<br>Facebook, LinkedIn',
    'svc4.name': 'Nemovitosti<br>& architektura',
    'svc4.desc': 'Interiéry, exteriéry,<br>vizualizace',

    /* TESTIMONIALS */
    'test.count':   '03 reference',
    'test.1.quote': '"Spolupráce probíhala od začátku až do konce naprosto profesionálně. Pan Holý přesně vystihl podstatu našich služeb."',
    'test.1.role':  'Retail Operations Manager',
    'test.2.quote': '"Opakovaně jsme využili jeho služeb. Dokonale zachytil naše požadavky a dokázal oslovit velké množství sledujících."',
    'test.2.role':  'Projektový manažer',
    'test.3.quote': '"Do toho co dělá dává srdce. Pokud hledáte originalitu a obrovskou profesionalitu, Jára je jasná volba."',
    'test.3.role':  'Kouč osobního rozvoje',

    /* CTA — index */
    'cta.title': 'Máte<br>projekt?<br><em>Pojďme<br>na to.</em>',
    'cta.desc':  'Napište mi nebo zavolejte. Ozvu se do 24 hodin a probereme jak vám mohu pomoct vytvořit obsah, který prodává.',
    'cta.btn':   'Nezávazně poptat ↗',

    /* ABOUT PAGE */
    'about.eyebrow': 'O mně',
    'about.role':    'Fotograf a videograf s více než 20 lety zkušeností. Specializuji se na produktovou fotografii, promo videa a obsah pro sociální sítě — s důrazem na výsledky, které prodávají.',
    'about.link':    'Poptat projekt ↗',
    'about.bio.eyebrow': 'Příběh',
    'about.bio': 'Jmenuji se <strong>Jaroslav Holý</strong> a vizuální tvorba je mou vášní již přes 20 let. Začínal jsem jako samostatný fotograf, ale postupem času se z mé práce vyvinula malá agentura nabízející komplexní vizuální služby.<br><br>Specializuji se na produktovou fotografii, promo videa a obsah pro sociální sítě. Spolupracuji se značkami různých velikostí — od malých podnikatelů po velké korporace jako Sony DADC, Metrostav nebo Pilsen Steel.<br><br>Každý projekt beru jako příležitost vytvořit něco, co přesáhne očekávání klienta — vizuál, který nejen vypadá dobře, ale skutečně funguje.',
    'val1.title': 'Preciznost',
    'val1.desc':  'Každý záběr je promyšlený. Věnuji pozornost kompozici, světlu a detailům, které ostatní přehlédnou.',
    'val2.title': 'Individualita',
    'val2.desc':  'Žádné šablony. Každý klient dostane přístup šitý na míru jeho značce a cílům.',
    'val3.title': 'Výsledky',
    'val3.desc':  'Fotografie a videa vytvářím s jasným cílem — aby fungovaly. Aby prodávaly, zaujaly a budovaly značku.',
    'about.cta.title': 'Máte<br>projekt?<br><em>Pojďme<br>na to.</em>',
    'about.cta.desc':  'Napište mi nebo zavolejte. Ozvu se do 24 hodin a probereme, jak vám mohu pomoct vytvořit obsah, který prodává.',
    'about.cta.btn':   'Nezávazně poptat ↗',

    /* SERVICES PAGE */
    'services.ph.eyebrow': 'Nabídka',
    'services.ph.desc': 'Profesionální vizuální obsah pro firmy a podnikatele. Od produktové fotografie po kompletní video kampaně.',
    'sb1.title': 'Produktová<br><em>fotografie</em>',
    'sb1.desc':  'Profesionální záběry, které prodávají vaše produkty. Od jednoduchých e-shop fotek po komplexní kampaňové sety s nasvícením a retuší.',
    'sb1.inc1':  'Příprava a aranžmá produktů',
    'sb1.inc2':  'Profesionální nasvícení',
    'sb1.inc3':  'Detailní retušerské práce',
    'sb1.inc4':  'Dodání ve všech formátech',
    'sb1.inc5':  'Licence pro komerční použití',
    'sb1.price.note': 'Cena závisí na počtu produktů a složitosti',
    'sb2.title': 'Promo &<br><em>produkt video</em>',
    'sb2.desc':  'Videa, která zaujmou a prodávají. Promo spoty pro sociální sítě, produktová videa pro e-shopy nebo firemní prezentace pro klienty a investory.',
    'sb2.inc1':  'Předprodukční příprava a scénář',
    'sb2.inc2':  'Profesionální natáčení',
    'sb2.inc3':  'Střih a colour grading',
    'sb2.inc4':  'Grafika a titulky',
    'sb2.inc5':  'Verze pro různé platformy',
    'sb2.price.note': 'Závisí na délce a náročnosti produkce',
    'sb3.title': 'Sociální<br><em>sítě</em>',
    'sb3.desc':  'Pravidelný obsah pro Instagram, Facebook a LinkedIn. Foto, video i reels — vše připravené tak, aby váš profil vypadal konzistentně a profesionálně.',
    'sb3.inc1':  'Obsahová strategie',
    'sb3.inc2':  'Měsíční focení a natáčení',
    'sb3.inc3':  'Editace a postprodukce',
    'sb3.inc4':  'Popisky a hashtagy',
    'sb3.inc5':  'Plánování a publikování',
    'sb3.price.note': 'Měsíční spolupráce — cena dle rozsahu',
    'sb4.title': 'Nemovitosti<br><em>& architektura</em>',
    'sb4.desc':  'Profesionální fotografie interiérů, exteriérů a architektonických projektů. Pro realitní kanceláře, developery i architekty.',
    'sb4.inc1':  'Interiérová a exteriérová fotografie',
    'sb4.inc2':  'HDR zpracování',
    'sb4.inc3':  'Letecké záběry (dron)',
    'sb4.inc4':  'Půdorysy',
    'sb4.inc5':  'Vizualizace interiéru',
    'sb4.inc6':  'Rychlé dodání do 48 hodin',
    'sb4.price.note': 'Závisí na velikosti nemovitosti',
    'sb.cta':         'Poptat ↗',
    'sb.price.label': 'Cena od',
    'process.eyebrow':  'Jak to funguje',
    'process.title':    'Jak <em>spolupracujeme</em>',
    'ps1.title': 'Poptávka',
    'ps1.desc':  'Napíšete mi nebo zavoláte. Probereme váš projekt, cíle a termíny. Do 24 hodin se ozvu s odpovědí.',
    'ps2.title': 'Příprava',
    'ps2.desc':  'Domluvíme termín, místo a detaily. Připravím vybavení a plán focení tak, aby vše proběhlo hladce.',
    'ps3.title': 'Realizace',
    'ps3.desc':  'Focení nebo natáčení na místě. Profesionální přístup, flexibilita a výsledky, které předčí očekávání.',
    'ps4.title': 'Dodání',
    'ps4.desc':  'Hotové soubory ve všech potřebných formátech doručím typicky do 5–7 pracovních dní.',
    'cta.strip.title': 'Máte projekt?<br><em>Pojďme na to.</em>',
    'cta.strip.btn':   'Nezávazně poptat ↗',

    /* PORTFOLIO PAGE */
    'portfolio.eyebrow': 'Portfolio',
    'portfolio.desc':    'Vizuální obsah který prodává. Fotografie a video pro značky které chtějí být vidět.',
    'filter.all':     'Vše',
    'filter.photo':   'Foto',
    'filter.video':   'Video',
    'filter.social':  'Sociální sítě',
    'filter.reality': 'Nemovitosti',
    'wo.type.product': 'Produktová fotografie',
    'wo.type.arch':    'Architektura interiéry',
    'wo.type.jewelry': 'Šperky lifestyle',
    'wo.tag.photo':    'Foto',
    'wo.tag.reality':  'Reality',

    /* CONTACT PAGE */
    'contact.eyebrow':      'Kontakt',
    'contact.title':        'Pojďme<br><em>spolupracovat</em>',
    'contact.desc':         'Napište mi nebo zavolejte. Ozvu se do\u00a024\u00a0hodin a probereme, jak vám mohu pomoct vytvořit obsah, který prodává.',
    'contact.email.label':  'Email',
    'contact.phone.label':  'Telefon',
    'contact.location':     'Plzeň · Česká republika',
    'form.eyebrow':         'Poptávka',
    'form.title':           'Poptat<br><em>projekt</em>',
    'form.name.label':      'Jméno',
    'form.company.label':   'Firma',
    'form.email.label':     'Email',
    'form.phone.label':     'Telefon',
    'form.type.label':      'Typ projektu',
    'form.message.label':   'Zpráva',
    'form.name.ph':         'Vaše jméno',
    'form.company.ph':      'Název firmy',
    'form.email.ph':        'vas@email.cz',
    'form.phone.ph':        '+420 xxx xxx xxx',
    'form.type.ph':         'Vyberte typ',
    'form.type.opt1':       'Produktová fotografie',
    'form.type.opt2':       'Promo & produkt video',
    'form.type.opt3':       'Sociální sítě',
    'form.type.opt4':       'Nemovitosti & architektura',
    'form.type.opt5':       'Jiné',
    'form.message.ph':      'Popište váš projekt, termín a případný rozpočet...',
    'form.submit':          'Odeslat poptávku ↗',
    'form.note':            '* Povinné pole. Ozvu se do 24 hodin.',
  },

  /* ──────────────────────────────────────── ENGLISH ── */
  en: {
    /* NAV */
    'nav.work':        'Work',
    'nav.services':    'Services',
    'nav.about':       'About',
    'nav.cta':         'Request project',
    'nav.mobile.cta':  'Request project',

    /* HERO — index */
    'hero.tag':          'Photographer & Video maker · Pilsen',
    'hero.meta.years':   'years exp.',
    'hero.meta.clients': 'clients',
    'hero.meta.spec':    'specializations',
    'hero.item1':        'Product photo',
    'hero.item2':        'Promo video',
    'hero.item3':        'Social media',
    'hero.item4':        'Real estate',

    /* TICKER */
    'ticker.1': 'Product photography',
    'ticker.2': 'Promo video',
    'ticker.3': 'Social media',
    'ticker.4': 'Real estate',
    'ticker.5': 'Brand building',
    'ticker.6': 'Photo workshops',

    /* WORK — index */
    'work.eyebrow':      'Selected work',
    'work.link':         'Full portfolio ↗',
    'work.type.product': 'Product photography',
    'work.type.jewelry': 'Jewellery & lifestyle',

    /* SERVICES — index */
    'services.eyebrow': 'Services',
    'svc1.name': 'Product<br>photography',
    'svc1.desc': 'E-shop, campaigns,<br>detailed shots',
    'svc2.name': 'Promo &<br>product video',
    'svc2.desc': 'Ad videos<br>for online & TV',
    'svc3.name': 'Social<br>media',
    'svc3.desc': 'Content for Instagram,<br>Facebook, LinkedIn',
    'svc4.name': 'Real estate<br>& architecture',
    'svc4.desc': 'Interiors, exteriors,<br>visualizations',

    /* TESTIMONIALS */
    'test.count':   '03 testimonials',
    'test.1.quote': '"The collaboration was completely professional from start to finish. Mr. Holý captured the essence of our services perfectly."',
    'test.1.role':  'Retail Operations Manager',
    'test.2.quote': '"We have used his services repeatedly. He perfectly captured our requirements and managed to reach a large number of followers."',
    'test.2.role':  'Project manager',
    'test.3.quote': '"He puts his heart into what he does. If you\'re looking for originality and great professionalism, Jára is the clear choice."',
    'test.3.role':  'Personal development coach',

    /* CTA — index */
    'cta.title': 'Have a<br>project?<br><em>Let\'s<br>do this.</em>',
    'cta.desc':  'Write or call me. I will get back to you within 24 hours and we will discuss how I can help you create content that sells.',
    'cta.btn':   'Get in touch ↗',

    /* ABOUT PAGE */
    'about.eyebrow': 'About me',
    'about.role':    'Photographer and videographer with over 20 years of experience. I specialise in product photography, promo videos and social media content — with a focus on results that sell.',
    'about.link':    'Request project ↗',
    'about.bio.eyebrow': 'Story',
    'about.bio': 'My name is <strong>Jaroslav Holý</strong> and visual creation has been my passion for over 20 years. I started as an independent photographer, but over time my work evolved into a small agency offering comprehensive visual services.<br><br>I specialise in product photography, promo videos and social media content. I work with brands of all sizes — from small entrepreneurs to large corporations like Sony DADC, Metrostav or Pilsen Steel.<br><br>I treat every project as an opportunity to create something that exceeds the client\'s expectations — a visual that not only looks great but truly works.',
    'val1.title': 'Precision',
    'val1.desc':  'Every shot is considered. I pay attention to composition, light and details that others overlook.',
    'val2.title': 'Individuality',
    'val2.desc':  'No templates. Every client gets an approach tailored to their brand and goals.',
    'val3.title': 'Results',
    'val3.desc':  'I create photos and videos with a clear purpose — to work. To sell, attract attention and build the brand.',
    'about.cta.title': 'Have a<br>project?<br><em>Let\'s<br>do this.</em>',
    'about.cta.desc':  'Write or call me. I will get back to you within 24 hours and we will discuss how I can help you create content that sells.',
    'about.cta.btn':   'Get in touch ↗',

    /* SERVICES PAGE */
    'services.ph.eyebrow': 'Offer',
    'services.ph.desc': 'Professional visual content for businesses and entrepreneurs. From product photography to complete video campaigns.',
    'sb1.title': 'Product<br><em>photography</em>',
    'sb1.desc':  'Professional shots that sell your products. From simple e-shop photos to complex campaign sets with lighting and retouching.',
    'sb1.inc1':  'Product preparation and arrangement',
    'sb1.inc2':  'Professional lighting',
    'sb1.inc3':  'Detailed retouching',
    'sb1.inc4':  'Delivery in all formats',
    'sb1.inc5':  'Commercial use licence',
    'sb1.price.note': 'Price depends on number of products and complexity',
    'sb2.title': 'Promo &<br><em>product video</em>',
    'sb2.desc':  'Videos that capture attention and sell. Promo spots for social media, product videos for e-shops or corporate presentations for clients and investors.',
    'sb2.inc1':  'Pre-production preparation and script',
    'sb2.inc2':  'Professional filming',
    'sb2.inc3':  'Editing and colour grading',
    'sb2.inc4':  'Graphics and subtitles',
    'sb2.inc5':  'Versions for different platforms',
    'sb2.price.note': 'Depends on length and production complexity',
    'sb3.title': 'Social<br><em>media</em>',
    'sb3.desc':  'Regular content for Instagram, Facebook and LinkedIn. Photos, videos and reels — all prepared so your profile looks consistent and professional.',
    'sb3.inc1':  'Content strategy',
    'sb3.inc2':  'Monthly shooting and filming',
    'sb3.inc3':  'Editing and post-production',
    'sb3.inc4':  'Captions and hashtags',
    'sb3.inc5':  'Planning and publishing',
    'sb3.price.note': 'Monthly collaboration — price by scope',
    'sb4.title': 'Real estate<br><em>& architecture</em>',
    'sb4.desc':  'Professional photography of interiors, exteriors and architectural projects. For real estate agencies, developers and architects.',
    'sb4.inc1':  'Interior and exterior photography',
    'sb4.inc2':  'HDR processing',
    'sb4.inc3':  'Aerial shots (drone)',
    'sb4.inc4':  'Floor plans',
    'sb4.inc5':  'Interior visualizations',
    'sb4.inc6':  'Fast delivery within 48 hours',
    'sb4.price.note': 'Depends on the size of the property',
    'sb.cta':         'Request ↗',
    'sb.price.label': 'Starting from',
    'process.eyebrow':  'How it works',
    'process.title':    'How we <em>work together</em>',
    'ps1.title': 'Inquiry',
    'ps1.desc':  'You write or call me. We discuss your project, goals and timeline. I will respond within 24 hours.',
    'ps2.title': 'Preparation',
    'ps2.desc':  'We agree on the date, location and details. I prepare equipment and a shoot plan so everything runs smoothly.',
    'ps3.title': 'Production',
    'ps3.desc':  'Shooting or filming on location. Professional approach, flexibility and results that exceed expectations.',
    'ps4.title': 'Delivery',
    'ps4.desc':  'Finished files in all required formats, typically delivered within 5–7 working days.',
    'cta.strip.title': 'Have a project?<br><em>Let\'s do this.</em>',
    'cta.strip.btn':   'Get in touch ↗',

    /* PORTFOLIO PAGE */
    'portfolio.eyebrow': 'Portfolio',
    'portfolio.desc':    'Visual content that sells. Photography and video for brands that want to be seen.',
    'filter.all':     'All',
    'filter.photo':   'Photo',
    'filter.video':   'Video',
    'filter.social':  'Social media',
    'filter.reality': 'Real estate',
    'wo.type.product': 'Product photography',
    'wo.type.arch':    'Architecture & interiors',
    'wo.type.jewelry': 'Jewellery lifestyle',
    'wo.tag.photo':    'Photo',
    'wo.tag.reality':  'Real estate',

    /* CONTACT PAGE */
    'contact.eyebrow':      'Contact',
    'contact.title':        'Let\'s<br><em>collaborate</em>',
    'contact.desc':         'Write or call me. I will get back to you within\u00a024\u00a0hours and we will discuss how I can help you create content that sells.',
    'contact.email.label':  'Email',
    'contact.phone.label':  'Phone',
    'contact.location':     'Pilsen · Czech Republic',
    'form.eyebrow':         'Inquiry',
    'form.title':           'Request<br><em>project</em>',
    'form.name.label':      'Name',
    'form.company.label':   'Company',
    'form.email.label':     'Email',
    'form.phone.label':     'Phone',
    'form.type.label':      'Project type',
    'form.message.label':   'Message',
    'form.name.ph':         'Your name',
    'form.company.ph':      'Company name',
    'form.email.ph':        'your@email.com',
    'form.phone.ph':        '+420 xxx xxx xxx',
    'form.type.ph':         'Select type',
    'form.type.opt1':       'Product photography',
    'form.type.opt2':       'Promo & product video',
    'form.type.opt3':       'Social media',
    'form.type.opt4':       'Real estate & architecture',
    'form.type.opt5':       'Other',
    'form.message.ph':      'Describe your project, timeline and budget...',
    'form.submit':          'Send inquiry ↗',
    'form.note':            '* Required field. I will get back to you within 24 hours.',
  },

  /* ──────────────────────────────────────── DEUTSCH ── */
  de: {
    /* NAV */
    'nav.work':        'Arbeit',
    'nav.services':    'Leistungen',
    'nav.about':       'Über mich',
    'nav.cta':         'Projekt anfragen',
    'nav.mobile.cta':  'Projekt anfragen',

    /* HERO — index */
    'hero.tag':          'Fotograf & Videograf · Pilsen',
    'hero.meta.years':   'Jahre Erf.',
    'hero.meta.clients': 'Kunden',
    'hero.meta.spec':    'Spezialisierungen',
    'hero.item1':        'Produktfoto',
    'hero.item2':        'Promo-Video',
    'hero.item3':        'Social Media',
    'hero.item4':        'Immobilien',

    /* TICKER */
    'ticker.1': 'Produktfotografie',
    'ticker.2': 'Promo-Video',
    'ticker.3': 'Social Media',
    'ticker.4': 'Immobilien',
    'ticker.5': 'Markenaufbau',
    'ticker.6': 'Foto-Workshops',

    /* WORK — index */
    'work.eyebrow':      'Ausgewählte Arbeiten',
    'work.link':         'Gesamtes Portfolio ↗',
    'work.type.product': 'Produktfotografie',
    'work.type.jewelry': 'Schmuck & Lifestyle',

    /* SERVICES — index */
    'services.eyebrow': 'Leistungen',
    'svc1.name': 'Produkt-<br>fotografie',
    'svc1.desc': 'E-Shop, Kampagnen,<br>Detailaufnahmen',
    'svc2.name': 'Promo &<br>Produktvideo',
    'svc2.desc': 'Werbevideos<br>für Online & TV',
    'svc3.name': 'Social<br>Media',
    'svc3.desc': 'Inhalte für Instagram,<br>Facebook, LinkedIn',
    'svc4.name': 'Immobilien<br>& Architektur',
    'svc4.desc': 'Innen, außen,<br>Visualisierungen',

    /* TESTIMONIALS */
    'test.count':   '03 Referenzen',
    'test.1.quote': '"Die Zusammenarbeit verlief von Anfang bis Ende absolut professionell. Herr Holý hat das Wesen unserer Dienstleistungen genau erfasst."',
    'test.1.role':  'Retail Operations Manager',
    'test.2.quote': '"Wir haben seine Dienste wiederholt in Anspruch genommen. Er hat unsere Anforderungen perfekt erfasst und konnte eine große Anzahl von Followern ansprechen."',
    'test.2.role':  'Projektmanager',
    'test.3.quote': '"Er steckt sein Herz in das, was er tut. Wenn Sie Originalität und großartige Professionalität suchen, ist Jára die klare Wahl."',
    'test.3.role':  'Persönlichkeitsentwicklungscoach',

    /* CTA — index */
    'cta.title': 'Haben Sie<br>ein Projekt?<br><em>Los<br>geht\'s.</em>',
    'cta.desc':  'Schreiben oder rufen Sie mich an. Ich melde mich innerhalb von 24 Stunden und wir besprechen, wie ich Ihnen helfen kann, Inhalte zu erstellen, die verkaufen.',
    'cta.btn':   'Unverbindlich anfragen ↗',

    /* ABOUT PAGE */
    'about.eyebrow': 'Über mich',
    'about.role':    'Fotograf und Videograf mit über 20 Jahren Erfahrung. Ich spezialisiere mich auf Produktfotografie, Promo-Videos und Social-Media-Inhalte — mit Fokus auf Ergebnisse, die verkaufen.',
    'about.link':    'Projekt anfragen ↗',
    'about.bio.eyebrow': 'Geschichte',
    'about.bio': 'Mein Name ist <strong>Jaroslav Holý</strong> und visuelle Kreation ist meine Leidenschaft seit über 20 Jahren. Ich begann als selbstständiger Fotograf, aber im Laufe der Zeit entwickelte sich meine Arbeit zu einer kleinen Agentur, die umfassende visuelle Dienstleistungen anbietet.<br><br>Ich spezialisiere mich auf Produktfotografie, Promo-Videos und Social-Media-Inhalte. Ich arbeite mit Marken aller Größen — von kleinen Unternehmern bis zu großen Konzernen wie Sony DADC, Metrostav oder Pilsen Steel.<br><br>Jedes Projekt betrachte ich als Chance, etwas zu schaffen, das die Erwartungen des Kunden übertrifft — ein Bild, das nicht nur gut aussieht, sondern wirklich funktioniert.',
    'val1.title': 'Präzision',
    'val1.desc':  'Jede Aufnahme ist durchdacht. Ich achte auf Komposition, Licht und Details, die andere übersehen.',
    'val2.title': 'Individualität',
    'val2.desc':  'Keine Vorlagen. Jeder Kunde erhält einen Ansatz, der auf seine Marke und Ziele zugeschnitten ist.',
    'val3.title': 'Ergebnisse',
    'val3.desc':  'Ich erstelle Fotos und Videos mit einem klaren Ziel — damit sie funktionieren. Damit sie verkaufen, Aufmerksamkeit erregen und die Marke aufbauen.',
    'about.cta.title': 'Haben Sie<br>ein Projekt?<br><em>Los<br>geht\'s.</em>',
    'about.cta.desc':  'Schreiben oder rufen Sie mich an. Ich melde mich innerhalb von 24 Stunden und wir besprechen, wie ich Ihnen helfen kann, Inhalte zu erstellen, die verkaufen.',
    'about.cta.btn':   'Unverbindlich anfragen ↗',

    /* SERVICES PAGE */
    'services.ph.eyebrow': 'Angebot',
    'services.ph.desc': 'Professionelle visuelle Inhalte für Unternehmen und Selbstständige. Von Produktfotografie bis zu kompletten Videokampagnen.',
    'sb1.title': 'Produkt-<br><em>fotografie</em>',
    'sb1.desc':  'Professionelle Aufnahmen, die Ihre Produkte verkaufen. Von einfachen E-Shop-Fotos bis zu komplexen Kampagnen-Sets mit Beleuchtung und Retusche.',
    'sb1.inc1':  'Produktvorbereitung und -arrangement',
    'sb1.inc2':  'Professionelle Beleuchtung',
    'sb1.inc3':  'Detaillierte Retusche',
    'sb1.inc4':  'Lieferung in allen Formaten',
    'sb1.inc5':  'Lizenz für kommerzielle Nutzung',
    'sb1.price.note': 'Preis abhängig von Produktanzahl und Komplexität',
    'sb2.title': 'Promo &<br><em>Produktvideo</em>',
    'sb2.desc':  'Videos, die Aufmerksamkeit erregen und verkaufen. Promo-Spots für Social Media, Produktvideos für E-Shops oder Firmenpräsentationen für Kunden und Investoren.',
    'sb2.inc1':  'Vorproduktion und Drehbuch',
    'sb2.inc2':  'Professionelle Filmaufnahmen',
    'sb2.inc3':  'Schnitt und Colour Grading',
    'sb2.inc4':  'Grafik und Untertitel',
    'sb2.inc5':  'Versionen für verschiedene Plattformen',
    'sb2.price.note': 'Abhängig von Länge und Produktionskomplexität',
    'sb3.title': 'Social<br><em>Media</em>',
    'sb3.desc':  'Regelmäßige Inhalte für Instagram, Facebook und LinkedIn. Fotos, Videos und Reels — alles so vorbereitet, dass Ihr Profil konsistent und professionell aussieht.',
    'sb3.inc1':  'Content-Strategie',
    'sb3.inc2':  'Monatliche Foto- und Videoaufnahmen',
    'sb3.inc3':  'Bearbeitung und Postproduktion',
    'sb3.inc4':  'Bildunterschriften und Hashtags',
    'sb3.inc5':  'Planung und Veröffentlichung',
    'sb3.price.note': 'Monatliche Zusammenarbeit — Preis nach Umfang',
    'sb4.title': 'Immobilien<br><em>& Architektur</em>',
    'sb4.desc':  'Professionelle Fotografie von Innenräumen, Außenbereichen und architektonischen Projekten. Für Immobilienmakler, Bauträger und Architekten.',
    'sb4.inc1':  'Innen- und Außenfotografie',
    'sb4.inc2':  'HDR-Verarbeitung',
    'sb4.inc3':  'Luftaufnahmen (Drohne)',
    'sb4.inc4':  'Grundrisse',
    'sb4.inc5':  'Innenraumvisualisierungen',
    'sb4.inc6':  'Schnelle Lieferung innerhalb 48 Stunden',
    'sb4.price.note': 'Abhängig von der Größe der Immobilie',
    'sb.cta':         'Anfragen ↗',
    'sb.price.label': 'Ab',
    'process.eyebrow':  'So funktioniert es',
    'process.title':    'Wie wir <em>zusammenarbeiten</em>',
    'ps1.title': 'Anfrage',
    'ps1.desc':  'Sie schreiben oder rufen an. Wir besprechen Ihr Projekt, Ziele und Termine. Ich melde mich innerhalb von 24 Stunden.',
    'ps2.title': 'Vorbereitung',
    'ps2.desc':  'Wir vereinbaren Datum, Ort und Details. Ich bereite Ausrüstung und Aufnahmeplan vor, damit alles reibungslos läuft.',
    'ps3.title': 'Realisierung',
    'ps3.desc':  'Fotografieren oder Filmen vor Ort. Professioneller Ansatz, Flexibilität und Ergebnisse, die die Erwartungen übertreffen.',
    'ps4.title': 'Lieferung',
    'ps4.desc':  'Fertige Dateien in allen erforderlichen Formaten, typischerweise innerhalb von 5–7 Werktagen geliefert.',
    'cta.strip.title': 'Haben Sie ein Projekt?<br><em>Los geht\'s.</em>',
    'cta.strip.btn':   'Unverbindlich anfragen ↗',

    /* PORTFOLIO PAGE */
    'portfolio.eyebrow': 'Portfolio',
    'portfolio.desc':    'Visueller Inhalt, der verkauft. Fotografie und Video für Marken, die gesehen werden wollen.',
    'filter.all':     'Alle',
    'filter.photo':   'Foto',
    'filter.video':   'Video',
    'filter.social':  'Social Media',
    'filter.reality': 'Immobilien',
    'wo.type.product': 'Produktfotografie',
    'wo.type.arch':    'Architektur & Innenräume',
    'wo.type.jewelry': 'Schmuck Lifestyle',
    'wo.tag.photo':    'Foto',
    'wo.tag.reality':  'Immobilien',

    /* CONTACT PAGE */
    'contact.eyebrow':      'Kontakt',
    'contact.title':        'Lassen Sie uns<br><em>zusammenarbeiten</em>',
    'contact.desc':         'Schreiben oder rufen Sie mich an. Ich melde mich innerhalb von\u00a024\u00a0Stunden und wir besprechen, wie ich Ihnen helfen kann, Inhalte zu erstellen, die verkaufen.',
    'contact.email.label':  'E-Mail',
    'contact.phone.label':  'Telefon',
    'contact.location':     'Pilsen · Tschechische Republik',
    'form.eyebrow':         'Anfrage',
    'form.title':           'Projekt<br><em>anfragen</em>',
    'form.name.label':      'Name',
    'form.company.label':   'Firma',
    'form.email.label':     'E-Mail',
    'form.phone.label':     'Telefon',
    'form.type.label':      'Projekttyp',
    'form.message.label':   'Nachricht',
    'form.name.ph':         'Ihr Name',
    'form.company.ph':      'Firmenname',
    'form.email.ph':        'ihre@email.de',
    'form.phone.ph':        '+420 xxx xxx xxx',
    'form.type.ph':         'Typ auswählen',
    'form.type.opt1':       'Produktfotografie',
    'form.type.opt2':       'Promo & Produktvideo',
    'form.type.opt3':       'Social Media',
    'form.type.opt4':       'Immobilien & Architektur',
    'form.type.opt5':       'Sonstiges',
    'form.message.ph':      'Beschreiben Sie Ihr Projekt, Zeitplan und Budget...',
    'form.submit':          'Anfrage senden ↗',
    'form.note':            '* Pflichtfeld. Ich melde mich innerhalb von 24 Stunden.',
  }
};

/* ============================================================
   APPLY TRANSLATIONS
   ============================================================ */
function applyLang(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS['cs'];

  /* Text / HTML content */
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  /* Placeholder attributes */
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el) {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  /* Select option text */
  document.querySelectorAll('[data-i18n-opt]').forEach(function(el) {
    const key = el.getAttribute('data-i18n-opt');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* Active button highlight */
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  /* html lang attribute */
  document.documentElement.lang = lang;
}

/* ============================================================
   PUBLIC: setLang (called from onclick)
   ============================================================ */
function setLang(lang) {
  try { localStorage.setItem('jhLang', lang); } catch(e) {}
  applyLang(lang);
}

/* ============================================================
   INIT on page load
   ============================================================ */
(function() {
  var saved = 'cs';
  try { saved = localStorage.getItem('jhLang') || 'cs'; } catch(e) {}
  applyLang(saved);
})();
