# Parkhuus Basel

Unser Projket ist eine interaktive Website zur Echtzeit-Anzeige freier Plätze in Parkhäusern in Basel.
Wir haben uns dazu entschieden, alle Parkhäuser der API übersichtlich auf einer Karte darzustellen.

## Projektidee

Zu jedem Parkhaus gibt es eine Card, mit den unseres Erachtens wichtigsten Infos. Diese werden mehrmals täglich geupdatet. Per Klick auf einen Punkt wird zu der jeweiligen Card gescrollt. Die Punkte gibt es in grün (viele freie Plätze), orange (weniger als 30 freie Plätze) und in rot (weniger als 5 freie Plätze).

Die gesamte Seite soll minimalistisch daherkommen und dadurch nutzer:innenfreundlich sein. Trotzdem haben wir mit unserern Animationen noch kleine spielerische Elemente, die die Seite auflockern.

## Reflexion

Nach der Abgabe unseres UX-Designs ging es ans Coden. Zu Beginn waren wir etwas eingeschüchtert und unsicher, ob wir unser Design so umsetzten können, wie wir es uns vorstellten.

Nachdem wir alle Inputs zum Programmieren erhielten, begannen wir in der Schule mit der Grundstruktur unserer Webseite. Die Basel-Karte hatten wir zuvor im Illustrator erstellt und hatten dabei im Hinterkopf, dass die Struktur des SVGs danach relevant sein wird. Deshlab gruppierten wir alle Elemente, die danach dieselben Classes/IDs haben sollen. Dies erleichterte uns die Arbeit beim Coden enorm, da wir den SVG-Code lediglich ins HTML laden mussten und somit direkt die Classes ansprechen konnten.

Nach einem sehr intensiven Tag Coden waren wir so weit, dass die Webseite bis auf die Interaktivität und die Animationen mehr oder weniger fertig war. Auch die API konnten wir erfolgreich mit der Webseite verknüpfen.

Am zweiten Coaching-Tag kamen wir langsamer voran, da uns das Programmieren mit Java Script deutlich schwerer fiel. Nichtsdestotrotz konnten wir die Cards mit den Punkten verbinden. Auch die kleinen Detail-Animationen bei den Cards (dass sie dunkler werden, kurz nach dem Scrollen) konnten wir erfolgreich hinzufügen. Da unsere Lottie-Files-Animation "gespunnen" hat, konnten wir diese an diesem Tag nicht einfügen.

Diese zwei Tage empfanden wir trotzdem als sehr gelungen und konnten sehr von den Dozierenden vor Ort profitieren. (Viel schnelleres Debugging)

Ausserhalb des Unterrichts nahmen wir uns die Zeit, um ein neues Lottie-Files-Login zu erstellen und so die richtigen Animationen einfügen zu können. Nach einigen Versuchen und Problemmeldungen von Lottiefiles funktionierte es dann doch. Der Fehler lag in einer Gruppierung zweier Elemente in Figma.

Ein weiteres Mal trafen wir uns, um schlussendlich die Handy-Version unserer Webseite einzurichten. Da wir während en Coaching-Tagen stark darauf geachtet haben, dass alle Elemente und Schriften responsive sind, mussten wir nur noch die Anination anpassen. Diese hatten wir im Voraus bereits erstellt und mussten sie nur noch in den Code einbinden und die Grösse anpassen.

## Learnings

- Classes und IDs in SVGs können nur angesprochen werden, wenn sie direkt im HTML als Code vorhanden sind.
- Von Anfang an auf Responsiveness achten; spart viel Zeit
- Für noch mehr Nutzer:innenfreundlichkeit und schnelle Verständlichkeit hätte man die Schriftfarbe der Cards der Auslastung anpassen können.
