<script setup lang="ts">
useSeoMeta({ title: 'AGB und Garagenparkordnung — garagen-reich' })

const intro =
  'Diese Bedingungen regeln die Nutzung der von der PAK 4 GmbH in Marchtrenk vermieteten Garagen und der zugehörigen Allgemeinflächen. Sie gelten, wenn sie dem Mieter vor Vertragsabschluss zur Verfügung gestellt und im jeweiligen Mietvertrag vereinbart werden. Individuelle Vereinbarungen gehen vor; zwingende gesetzliche Rechte bleiben unberührt.'

const sections: { title: string; paragraphs: string[] }[] = [
  {
    title: '1. Mietgegenstand und Vertragsgrundlagen',
    paragraphs: [
      'Vermieterin ist die PAK 4 GmbH. Standortadresse, Garagennummer, Nutzfläche, zulässiger Verwendungszweck, Mietdauer, Mietzins, Kaution, Nebenkosten, Zahlungsweg und allfällige Stromversorgung ergeben sich ausschließlich aus dem jeweiligen Mietvertrag und seinen Anlagen. Die Übernahme wird mit einem Protokoll samt Schlüssel- und Zählerständen dokumentiert. Allgemeinflächen werden nur im erforderlichen Umfang mitbenutzt; ein ausschließliches Nutzungsrecht daran entsteht nicht.',
      'Die Garage darf nur im vereinbarten Umfang genutzt werden. Eine Nutzung als Wohnung, Aufenthaltsraum, Werkstatt, Verkaufsstätte oder Betriebsstätte mit Publikumsverkehr sowie regelmäßige gewerbliche Arbeiten bedürfen einer gesonderten schriftlichen Vereinbarung und der erforderlichen behördlichen Zulässigkeit. Der Mieter prüft die Eignung für seine besonderen Zwecke vor Vertragsabschluss und beachtet zulässige Boden- und Stromlasten sowie genehmigte Nutzung und Brandschutzvorgaben.',
    ],
  },
  {
    title: '2. Zutritt und Verkehrsflächen',
    paragraphs: [
      'Der reguläre Zutritt zur Anlage sowie die Zu- und Abfahrt sind täglich von 07:00 bis 22:00 Uhr gestattet. Außerhalb dieser Zeiten besteht kein Anspruch auf regulären Zutritt; vereinbarte Ausnahmen und erforderlicher Zugang bei Gefahr oder sonstigen rechtlich gebotenen Fällen bleiben unberührt. Der Mieter hat seine Nutzung so zu organisieren, dass er die Anlage bis 22:00 Uhr verlassen kann. Vorübergehende Einschränkungen wegen Reparaturen, Sicherheit oder behördlicher Anordnungen werden, soweit möglich, rechtzeitig mitgeteilt.',
      'Auf den Verkehrsflächen ist Schritttempo zu fahren. Verkehrszeichen, Markierungen und Anweisungen zur Sicherheit sind einzuhalten. Die Straßenverkehrsordnung gilt, soweit sie rechtlich anwendbar ist; im Übrigen gelten die ausgeschilderten Regeln dieses Privatgeländes. Allgemeinflächen dienen der Durchfahrt sowie kurzem Be- und Entladen. Parken, dauerhaftes Abstellen, Lagern und Blockieren von Toren, Zufahrten oder Rettungswegen sind untersagt. Unnötiges Hupen, Motorlaufenlassen und vermeidbarer Lärm sind zu unterlassen.',
      'Bei einer konkreten Behinderung oder Gefahr kann die Vermieterin nach Möglichkeit zunächst zur Entfernung auffordern. Erforderliche und verhältnismäßige Maßnahmen zur Gefahrenabwehr bleiben vorbehalten. Ersatz angemessener, nachgewiesener Kosten kommt nur nach den gesetzlichen Voraussetzungen in Betracht.',
    ],
  },
  {
    title: '3. Sicherheit, Brandschutz und erlaubte Lagerung',
    paragraphs: [
      'Rauchen, offenes Feuer, Grillen, Veranstaltungen, Tanken, Ölwechsel, Fahrzeugwäsche, Schweißarbeiten sowie der Betrieb von Heizgeräten und provisorischen Elektroinstallationen sind in der Anlage untersagt. Rettungswege, Lüftungsöffnungen, Tore, elektrische Verteiler und Brandschutzeinrichtungen müssen jederzeit frei und zugänglich bleiben. Fahrzeuge mit erkennbaren Kraftstoff- oder Ölundichtigkeiten dürfen nicht eingestellt werden.',
      'Verboten ist die Lagerung von explosiven, leicht entzündlichen, giftigen, ätzenden oder sonst gefährlichen Stoffen, Abfällen sowie größeren Mengen brennbarer Flüssigkeiten oder Gasflaschen. Betriebsstoffe in ordnungsgemäß verschlossenen Behältern oder im Fahrzeug bleiben nur im rechtlich und behördlich zulässigen Umfang erlaubt. Für Akkus, Ladegeräte, Elektrofahrzeuge und Batterieladung gilt: Laden nur über ausdrücklich dafür freigegebene, fachgerecht installierte Anschlüsse nach gesonderter Vereinbarung; keine Mehrfachsteckdosenketten oder unbeaufsichtigte beschädigte Akkus. Weitergehende Auflagen aus Bescheid und Brandschutzkonzept gelten, sobald sie den Nutzern bekanntgegeben werden.',
      'Bei Feuer, Rauch, Gasgeruch oder sonstiger akuter Gefahr sind unverzüglich Einsatzkräfte zu verständigen, andere Personen zu warnen und die Vermieterin zu informieren. Der Mieter hat erkennbare Schäden, Leckagen und sicherheitsrelevante Mängel unverzüglich zu melden.',
    ],
  },
  {
    title: '4. Behandlung, Veränderungen und Überlassung',
    paragraphs: [
      'Der Mieter behandelt Garage, Tor, Schlüssel und gemeinsame Einrichtungen sorgfältig. Eingriffe in Bausubstanz, Elektroinstallation, Torsteuerung, Fassade oder Beschilderung sowie Bohrungen und feste Einbauten bedürfen vorab der Zustimmung der Vermieterin; erforderliche behördliche Bewilligungen bleiben Sache der jeweils gesetzlich verpflichteten Person. Normale Abnutzung ist kein vom Mieter zu ersetzender Schaden.',
      'Zur Wahrung des einheitlichen Erscheinungsbildes bleiben die ursprüngliche Farbgestaltung von Außenfassaden und Garagentoren sowie vorhandene Beschilderung erhalten. Änderungen an Fassaden, Toren oder außen sichtbaren Einrichtungen bedürfen der vorherigen Zustimmung der Vermieterin.',
      'Die Garagen sind unbeheizt, sofern der Mietvertrag nichts anderes festlegt. Der Mieter prüft den Zustand bei Übergabe gemeinsam mit der Vermieterin und meldet erkennbare Mängel; unterbliebene Meldung beseitigt keine gesetzlichen Ansprüche. Der Austausch gewöhnlicher, vom Mieter unmittelbar nutzbarer Leuchtmittel kann dem Mieter bei entsprechender Vereinbarung obliegen; Arbeiten an elektrischen Anlagen und gesetzlich geschuldete Erhaltung verbleiben bei der jeweils verpflichteten Partei.',
      'Eine Weitergabe der Garage oder von Zutrittsmitteln an Dritte, Untervermietung oder Änderung des vereinbarten Zwecks bedarf der vorherigen Zustimmung der Vermieterin. Zustimmung darf bei Verbrauchern nicht entgegen zwingendem Recht verweigert werden. Der Mieter hat Personen, denen er Zutritt gewährt, über die Anlagenregeln zu informieren und haftet für deren Verhalten im gesetzlich vorgesehenen Umfang. Verlust oder Missbrauch von Zutrittsmitteln ist unverzüglich zu melden.',
    ],
  },
  {
    title: '5. Erhaltung, Betreten und Störungen',
    paragraphs: [
      'Die Vermieterin sorgt für die gesetzlich und vertraglich geschuldete Erhaltung. Der Mieter meldet Mängel unverzüglich und ermöglicht nach angemessener Vorankündigung zu zumutbaren Zeiten Zutritt für notwendige Prüfung, Wartung, Instandsetzung oder Besichtigung aus konkretem Anlass. Bei Gefahr im Verzug ist Zutritt ohne Vorankündigung zulässig, soweit erforderlich; der Mieter wird danach informiert. Ist die Garage ohne Verschulden des Mieters wegen eines Mangels ganz oder teilweise nicht wie vereinbart nutzbar, richten sich eine allfällige Mietzinsminderung und sonstige Gewährleistungsrechte nach dem Gesetz.',
    ],
  },
  {
    title: '6. Mietzins, Betriebskosten und Strom',
    paragraphs: [
      'Der im Mietvertrag ausgewiesene monatliche Mietzins enthält die laufenden Betriebskosten der Anlage als Pauschale. Dazu zählen, soweit tatsächlich anfallend, insbesondere öffentliche Abgaben, Gebäudeversicherung, Allgemeinstrom, Reinigung gemeinsamer Flächen, Winterdienst und Pflege der Außenanlagen einschließlich Sickermulde und Sickerschacht. Wasser, Kanal oder Sanitäranlagen sind nur umfasst, soweit solche Einrichtungen tatsächlich vorhanden sind. Die Höhe der Pauschale ist im vereinbarten Mietzins enthalten; für diese Kosten erfolgen keine jährliche Betriebskostenabrechnung, keine Nachzahlung und keine Rückvergütung aufgrund der tatsächlichen Kostenentwicklung. Zwingende gesetzliche Abrechnungsrechte bleiben unberührt. Eine Umsatzsteuer wird nur in gesetzlich zulässiger und vertraglich ausgewiesener Höhe verrechnet.',
      'Der individuelle Stromverbrauch ist von der Betriebskostenpauschale ausgenommen und wird gesondert nach dem jeweiligen Unterzähler abgerechnet. Jede Garage verfügt über einen eigenen Strom-Unterzähler. Die abgelesenen Kilowattstunden werden nach dem im Mietvertrag festgelegten Preis- oder Kostenmodell und den dort ausdrücklich vereinbarten anteiligen Grundkosten abgerechnet. Anfangs- und Endstand werden dokumentiert. Bei Ausfall des Zählers erfolgt eine sachgerechte, nachvollziehbare Schätzung anhand bisheriger Werte und Nutzungsdauer. Die für die Abrechnung geltenden eichrechtlichen Anforderungen sind einzuhalten.',
      'Endet das Mietverhältnis unterjährig, wird der Unterzähler bei Rückgabe abgelesen und der Stromverbrauch bis zu diesem Zeitpunkt abgerechnet. Für die gesonderte Zwischenablesung und Zwischenabrechnung kann eine Pauschale von 60,00 EUR inklusive Umsatzsteuer verlangt werden, wenn sie im Mietvertrag ausdrücklich und wirksam vereinbart ist und dem erforderlichen angemessenen Aufwand entspricht. Eine unterjährige Betriebskostenabrechnung erfolgt wegen der im Mietzins enthaltenen Pauschale nicht.',
    ],
  },
  {
    title: '7. Zahlungsverzug und Kaution',
    paragraphs: [
      'Bei Zahlungsverzug gelten die gesetzlichen Verzugszinsen und gesetzlichen Voraussetzungen für Mahn- und Betreibungskosten. Zusätzliche Kosten werden nur verlangt, soweit sie notwendig, zweckentsprechend, angemessen und rechtlich zulässig sind. Auflösung, Kündigung und Räumung richten sich nach Vertrag und anwendbarem Recht.',
      'Höhe und Zweck einer allfälligen Kaution ergeben sich aus dem Mietvertrag. Nach Vertragsende wird sie nach Prüfung offener, fälliger Ansprüche und Rückgabe der Garage binnen angemessener Frist abgerechnet; ein verbleibender Betrag wird zurückgezahlt. Unbestrittene Teilbeträge werden nicht wegen anderer strittiger Forderungen unbegrenzt zurückbehalten.',
    ],
  },
  {
    title: '8. Haftung und Versicherung',
    paragraphs: [
      'Für Schäden haften die Parteien nach den gesetzlichen Vorschriften. Die Vermieterin schuldet keine gesonderte Bewachung von Fahrzeugen oder eingelagerten Gegenständen, sofern diese nicht ausdrücklich vereinbart wurde. Gesetzliche Haftung, insbesondere für eigenes Verschulden, grobe Fahrlässigkeit, Vorsatz, Personenschäden und zwingende Ansprüche, bleibt unberührt. Der Mieter haftet für schuldhaft verursachte Schäden nach Gesetz; gewöhnliche Abnutzung ist ausgenommen. Eine geeignete Versicherung für Fahrzeuge und eingebrachte Güter liegt im Verantwortungsbereich des Mieters.',
    ],
  },
  {
    title: '8a. Schadenersatz bei Beschädigungen',
    paragraphs: [
      'Für vom Mieter oder von ihm zu vertretenden Personen schuldhaft verursachte Beschädigungen gelten als vorab vereinbarte Richtbeträge für den typischerweise erforderlichen Reparaturaufwand: 150,00 EUR je angefangenem Quadratmeter für Flecken an Boden oder Wänden, die sich durch normale Reinigung nicht entfernen lassen; 55,00 EUR je Bohr- oder Befestigungsloch in Wand oder Decke; 120,00 EUR je Loch im Bodenbelag. Die Schadensart, Fläche bzw. Zahl der Löcher und der tatsächliche Zustand werden bei Rückgabe dokumentiert.',
      'Die Richtbeträge gelten nicht bei gewöhnlicher Abnutzung und nicht, soweit kein ersatzfähiger Schaden entstanden ist. Dem Mieter bleibt der Nachweis offen, dass der Schaden geringer oder der Betrag unangemessen ist; gesetzliche Mäßigungsrechte bleiben unberührt. Verlangt die Vermieterin statt der Pauschale einen höheren tatsächlich entstandenen Schaden, muss sie diesen und die gesetzlichen Voraussetzungen nachweisen. Eine doppelte Verrechnung derselben Schadensposition ist ausgeschlossen.',
    ],
  },
  {
    title: '8b. Service und vom Nutzer verursachte Arbeiten',
    paragraphs: [
      'Für notwendige Service- und Instandsetzungsarbeiten aufgrund eines vom Mieter zu vertretenden Schadens oder Fehlgebrauchs werden bei gesonderter wirksamer Vereinbarung nach tatsächlichem Zeitaufwand 66,67 EUR je Stunde zuzüglich gesetzlicher Umsatzsteuer sowie erforderliche Fahrtkosten von 0,65 EUR je gefahrenem Kilometer verrechnet. Begonnene Stunden werden nur anteilig nach tatsächlichem Aufwand berechnet. Zuschläge für Nacht- und Wochenendeinsätze bedürfen einer gesonderten konkreten Vereinbarung oder werden nur als nachgewiesener notwendiger Mehraufwand nach Gesetz geltend gemacht. Gesetzlich oder vertraglich von der Vermieterin geschuldete Erhaltung, Gewährleistung und Garantie werden nicht als Mieterservice verrechnet.',
    ],
  },
  {
    title: '9. Vertragsende und Rückgabe',
    paragraphs: [
      'Bei Vertragsende ist die Garage vollständig geräumt, besenrein, einschließlich eines gereinigten Garagentors, und mit allen ausgehändigten Zutrittsmitteln zurückzugeben. Eigenmächtige Einbauten sind nach Vereinbarung oder bei berechtigtem Verlangen fachgerecht zu entfernen, soweit gesetzlich zulässig. Zustand und Stromzählerstand werden möglichst gemeinsam protokolliert. Vom Mieter zu vertretende Beschädigungen werden nach Abschnitt 8a und Gesetz behandelt. Soweit eine geschuldete Reinigung trotz angemessener Gelegenheit zur Nachreinigung ausbleibt, kann für die tatsächlich erforderliche Reinigung eine vereinbarte Pauschale von 100,00 EUR inklusive Umsatzsteuer verlangt werden; der Nachweis eines geringeren Aufwands oder fehlender Verantwortlichkeit bleibt offen. Zurückgelassene Gegenstände werden nach den anwendbaren gesetzlichen Regeln behandelt; eine sofortige Entsorgung wird nicht pauschal vereinbart.',
    ],
  },
  {
    title: '10. Zutrittsdaten, Video und Datenschutz',
    paragraphs: [
      'Für Vertragsabwicklung, Abrechnung und Zutrittsverwaltung verarbeitet die PAK 4 GmbH die hierfür erforderlichen personenbezogenen Daten nach den gesetzlichen Vorgaben. Der Mieter nimmt zur Kenntnis, dass das Gelände des Garagenparks durch entsprechend gekennzeichnete Kameras videoüberwacht wird. Innenräume der vermieteten Garagen werden nicht erfasst. Die Kameras dienen dem Schutz der Anlage und der Aufklärung konkreter Vorfälle; sie begründen keine Bewachungspflicht für Fahrzeuge oder Gegenstände. Der Betrieb setzt eine eigenständig geprüfte Rechtsgrundlage, Erforderlichkeit und Information der Betroffenen voraus. Die Kenntnisnahme dieser Ordnung ersetzt keine datenschutzrechtliche Einwilligung.',
      'Ein unmittelbarer Zugriff auf die Kameras oder ein allgemeiner Anspruch auf Herausgabe vollständiger, auch andere Personen zeigender Aufzeichnungen wird nicht eingeräumt. Gesetzliche Auskunfts- und Kopierechte zu eigenen personenbezogenen Daten bleiben unberührt; Rechte Dritter sind dabei zu schützen. Einzelheiten zu Verantwortlichen, Aufnahmebereichen, Zwecken, Rechtsgrundlage, Empfängern und Speicherfrist ergeben sich aus den gesonderten Hinweisen zur Videoüberwachung vor Ort und der Datenschutzerklärung.',
    ],
  },
  {
    title: '11. Schlussbestimmungen',
    paragraphs: [
      'Änderungen dieser Bedingungen für bestehende Mietverträge erfordern eine wirksame vertragliche Grundlage oder Vereinbarung; eine bloße Veröffentlichung einer neuen Fassung genügt nicht. Soweit einzelne Bestimmungen unwirksam sind, gelten die gesetzlichen Regelungen; die übrigen wirksamen Bestimmungen bleiben bestehen. Zwingende Verbraucherrechte und zwingende Gerichtsstandsregeln bleiben unberührt. Es gilt österreichisches Recht, soweit eine Rechtswahl zulässig ist.',
    ],
  },
]
</script>

<template>
  <section class="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold tracking-tight text-ink-900">
      Allgemeine Geschäftsbedingungen und Garagenparkordnung
    </h1>
    <p class="mt-2 text-sm text-ink-500">PAK 4 GmbH · Garagenpark Marchtrenk · Stand 27. September 2026</p>

    <div class="mt-8 space-y-8 text-sm leading-relaxed text-ink-600">
      <p>{{ intro }}</p>

      <div v-for="section in sections" :key="section.title">
        <h2 class="text-base font-semibold text-ink-900">{{ section.title }}</h2>
        <p v-for="(p, i) in section.paragraphs" :key="i" :class="i === 0 ? 'mt-2' : 'mt-3'">
          {{ p }}
        </p>
      </div>

      <p>
        Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer
        <NuxtLink to="/datenschutz" class="text-brand-600 hover:underline">Datenschutzerklärung</NuxtLink>.
      </p>
    </div>
  </section>
</template>
