// Single source of truth for the site's version history / changelog.
//
// Consumed in two places, both fed from this one array:
//   1. htmlGenerator.js  -> passes the full list to the About page changelog.
//   2. htmlGenerator.js  -> injects a recent slice into every page as
//      window.NOTIFICATIONS_DATA, which htmlJS_actual.js reads for the
//      notification bell/panel.
//
// Keep the newest entry at the top. For entries that should drive the
// notification bell, use the "Mon DD, YYYY" date format (e.g. "Jun 17, 2026")
// so the unread-count date comparison in htmlJS_actual.js can parse them.

const updates = [
  {
    date: "Jun 30, 2026",
    updates: [
      "Added an s/p/d/f block selector at the top of the table - hover a block to highlight its elements",
      "The site now follows your device's light or dark mode automatically, until you choose a theme yourself",
      "Fixed the periodic table appearing mirrored in right-to-left languages (Arabic, Persian, Hebrew)",
      "Fixed the missing site icon (favicon) for Esperanto, Tamil and Uzbek",
    ],
  },
  {
    date: "Jun 17, 2026",
    updates: [
      "Updated the design of the site to be more modern, introduced animations and a new font",
      "Added a search bar to search for elements based on name or number",
    ],
  },
  {
    date: "May 14, 2026",
    updates: [
      "Updated Japanese, Czech, Turkish, Greek, Polish, Hindi, Thai, Vietnamese and Indonesian translations",
    ],
  },
  {
    date: "Oct 12, 2025",
    updates: [
      "Updated Czech, Portuguese, Croatian, Greek and Indonesian translations",
    ],
  },
  {
    date: "Jan 28, 2025",
    updates: [
      "Updated Armenian, Romanian, Bulgarian, Czech, Finnish and Tamil translations",
      "Added notification panel to show the latest updates",
    ],
  },
  {
    date: "Jan 19, 2025",
    updates: [
      "Updated Vietnamese, Persian, Dutch, Romanian, Arabic, Greek, Hungarian, Indonesian, Japanese and Portuguese translations",
    ],
  },
  {
    date: "Jan 17, 2025",
    updates: [
      "Updated German, Thai, Ukrainian, Russian, French and Croatian translations",
    ],
  },
  {
    date: "May 2023",
    updates: [
      "Updated Afrikaans, Norwegian Bokmål, Norwegian Nynorsk, Slovenian and Portuguese translations",
    ],
  },
  {
    date: "Apr 2023",
    updates: [
      "Updated Afrikaans, Bulgarian, Catalan, Czech, Danish, Dutch, Finnish, German, Hebrew, Japanese, Korean, Malay, Serbian, Solvenian, Swedish, Thai and Vietnamese translations",
    ],
  },
  {
    date: "Mar 2023",
    updates: [
      `Added <a class='underlineLink' target='_blank' href='https://www.buymeacoffee.com/naveencs' rel='noopener noreferrer'>Buy Me a Coffee</a> link at the header and footer`,
      `Updated Czech, Esperanto, Greek, French, Vietnamese, Chinese Traditional, Indonesian, Romanian and Swedish translations`,
    ],
  },
  {
    date: "Sep 2022",
    updates: [
      `Added Esperanto and Uzbek translations`,
      `Updated Danish, Czech, Greek, French, Hindi, Polish, Macedonian, Ukranian, Chinese Traditional, Indonesian and Swedish translations`,
    ],
  },
  {
    date: "Sep 2021",
    updates: [`Updated Korean, Turkish, Portuguese and French translations`],
  },
  {
    date: "Aug 2021",
    updates: [
      `Updated French, Spanish, Croatian, Hindi and Chinese (Traditional) translations`,
    ],
  },
  {
    date: "Jun 2021",
    updates: [
      `Added a new printable - Flash Cards in <a class='underlineLink' href='printables'>Printables</a> page`,
      `Added Tamil translation`,
      `Updated French translation`,
      `Updated the <a class='underlineLink' href='translation'>Translation</a> page to use links instead of images`,
    ],
  },
  {
    date: "May 2021",
    updates: [
      `Added a new printable - Flash Cards in <a class='underlineLink' href='printables'>Printables</a> page`,
      `Included Tamil and Telugu for anyone to translate as per <a class='underlineLink' target='_blank' href='https://feedback.periodic-table.io/' rel='noopener noreferrer'>Suggestions</a> by users`,
      `Updated external links to be opened in new tab`,
      `Updated Armenian, Hebrew and Chinese (Simplified) translations`,
    ],
  },
  {
    date: "Apr 2021",
    updates: [
      `Updated Spanish, Portuguese, French, Hungarian, Persian, Russian, Slovak and Polish translations`,
      `Fixed the broken links in the <a class='underlineLink' href='store'>Store</a> page`,
      `Minor corrections to the solubility table`,
    ],
  },
  {
    date: "Mar 2021",
    updates: [
      `Added Solubility Chart and Reactivity Series under Tables menu`,
      `Added social images to all pages to show up when the pages are shared on social media`,
      `Fixed the incorrect font sizes in the navigation bar`,
      `Updated Italian, Dutch, German, Portuguese, Polish, Croatian, Russian, Armenian, Japanese and Chinese (Simplified) translations`,
    ],
  },
  {
    date: "Feb 2021",
    updates: [
      `Complete rewrite of the website to deploy the code faster; Individual language versions have their own subdomains`,
      `Added Afrikaans translation`,
      `Updated Norwegian Bokmal, Spanish, Vietnamese, Chinese(Simplified), Chinese(Traditional), Japanese, German, Portuguese, French and Italian translations`,
    ],
  },
  {
    date: "Nov 2020",
    updates: [
      `Added Crystal Structure image to the element page`,
      `Added Macedonian translation`,
      `Updated Armenian, Greek, Spanish, Italian, Portuguese, Slovenian, Thai, Vietnamese and Chinese(Simplified) translations`,
    ],
  },
  {
    date: "Oct 2020",
    updates: [
      `Added Armenian and Malay translations`,
      `Added a new printable - Flash Cards in <a class='underlineLink' href='printables'>Printables</a> page`,
      `Updated Croatian, Greek, Hebrew, Hindi, Norwegian Bokmal, Polish, Romanian, Vietnamese and Dutch translations`,
      `Fixed the top navbar so that the navbar does not overlap the scrollbar`,
    ],
  },
  {
    date: "Aug 2020",
    updates: [
      `Updated the icons in the navbar to outline icons`,
      `Simplified localisation and individual languages will now be included in the url`,
      `Added a new printable in <a class='underlineLink' href='printables'>Printables</a> page`,
      `Added CAS Number and PubChem CID Number`,
      `Fixed electron configuration rendering issues in Edge and Chrome`,
      `Updated Arabic, Persian, Hindi, Italian, Indonesian, Vietnamese, German, Greek, Polish, Dutch, Slovak, Chinese (Simplified) and Chinese (Traditional) translations`,
    ],
  },
  {
    date: "Jul 2020",
    updates: [
      `Added a new printable in <a class='underlineLink' href='printables'>Printables</a> page`,
      `Added a new page - <a class='underlineLink' href='translation'>Translation</a> where you can check the status of each language and contribute translations`,
      `Added mass number, number of protons, electrons and neutrons`,
      `The line height for the Elements page is increased and the text is easily readable`,
      `Updated Polish, Croatian, Chinese Simplified, Croatian and Korean translation`,
      `Added an option in Settings to change the style of the periodic table from 3 options`,
      `Replaced the dropdown for temperature in Settings with a radio select`,
      `Updated the navbar header from a gradient to solid color which now matches with the window color when opened as PWA`,
    ],
  },
  {
    date: "Jun 2020",
    updates: [
      `Modified the style of the element page to use more shadows and less color`,
      `Modified the colors of the Settings popup for both light and dark themes`,
      `Added Instagram page link to the footer`,
      `Added a new printable in <a class='underlineLink' href='printables'>Printables</a> page`,
      `Added <a class='underlineLink' target='_blank' href='https://feedback.periodic-table.io/' rel='noopener noreferrer'>Suggestions</a> where new suggestions or feature requests can be provided`,
      `Fonts for Thai and Hebrew are updated`,
      `Reduced extra spacing on top and bottom sides of the electronic configuration`,
      `Updated Chinese Simplified, Croatian, Portuguese and Danish translations`,
    ],
  },
  {
    date: "May 2020",
    updates: [
      `Updated Polish, Russian, Vietnamese, Slovenian, Chinese Simplified translations`,
      `Added a new page - <a class='underlineLink' href='printables'>Printables</a> which provides a printable version of the periodic table which will be updated regularly`,
      `Added a new page - <a class='underlineLink' href='credits'>Credits</a> for translations which was earlier appearing in About page`,
      `Added icons to the navigation bar at the top`,
      `Added footer component on all pages which includes quick links not available in the top navigation bar`,
      `Updated link colors to match the theme color`,
      `Reduced the number of colors in Settings from 25 to 10 which matches with the periodic table colors`,
      `Fixed the layout bug where the 2nd and 3rd row were appearing with a huge space on iOS devices`,
      `Fixed scrollbar styles for all browsers`,
      `Added an open-source license on Github`,
      `Removed theme switching to enable light or dark mode from Settings and a dedicated button is available in the top navigation bar`,
      `Replaced the existing static image of electronic configuration with an animated version`,
      `Please contact me at naveen@periodic-table.io if you have any suggestions or issues with the website`,
    ],
  },
  {
    date: "Feb 2020",
    updates: [
      `Modified colors at the navigation bar for better accessibility`,
      `Updated Persian, Croatian, Hungarian, Polish, Greek, Hebrew, Portuguese, German, Spanish, Chinese (Traditional), Russian, Thai, French, Italian, Chinese (Simplified) and Turkish translations`,
    ],
  },
  {
    date: "May 2019",
    updates: [
      `Added Store page for t-shirts and other merchandise`,
      `Added English (UK) translation`,
      `Updated Chinese (Simplified), Portuguese, Spanish, Indonesian, Vietnamese and Chinese (Traditional) translations`,
    ],
  },
  {
    date: "Apr 2019",
    updates: [`Updated Arabic, Italian and Croatian translations`],
  },
  {
    date: "Dec 2018",
    updates: [
      `Added Slovenian, Norwegian (Nynorsk) and Croatian translations`,
      `Updated Danish, Japanese and Italian translations`,
    ],
  },
  {
    date: "Nov 2018",
    updates: [
      `Added Danish, Greek, Thai and Hebrew translations`,
      `Updated Arabic, Chinese (Traditional), Chinese (Simplified), Portuguese, Catalan, German and Japanese translations`,
    ],
  },
  {
    date: "Jun 2018",
    updates: [`Updated Russian, French and Arabic translations`],
  },
  {
    date: "May 2018",
    updates: [
      `Updated Persian, Czech, Italian, Dutch, Catalan, Vietnamese, Hungarian, Indonesian and Japanese translations`,
    ],
  },
  {
    date: "Apr 2018",
    updates: [`Updated Dutch and Korean translations`],
  },
  {
    date: "Mar 2018",
    updates: [
      `Released the first version of the website with Progressive Web App (PWA) features`,
      `Updated the colors of the periodic table`,
      `Added options for wide and large tiles when website is pinned to Start on Windows 10`,
      `Added Hindi, Chinese (Traditional), Arabic, Polish and Swedish translations`,
      `Updated Japanese and Dutch translations`,
    ],
  },
];

module.exports = updates;
