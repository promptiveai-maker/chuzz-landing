/**
 * Every Hebrew and English string on the page lives here, and nowhere else.
 * This is the file to edit when the wording changes.
 *
 * Sections, in page order:
 *   meta      document title, description, language toggle label
 *   header    wordmark area
 *   cta       the signup button label, used in three places
 *   hero      section 1
 *   why       section 2, three cards
 *   how       section 3, three steps
 *   evening   section 4, the list and the photo
 *   who       section 5, chips
 *   community section 6, the WhatsApp band
 *   faq       section 7, the accordion
 *   closing   section 8
 *   footer    section 9
 *
 * A few strings carry markup: a <br> for a deliberate line break, and
 * <em> around the one or two words set in amber. <em> is restyled in
 * globals.css, it is not italic here.
 */

export type Lang = "he" | "en";

export type Copy = {
  meta: { title: string; description: string; toggleLabel: string; toggleAria: string };
  header: { ghost: string; home: string };
  cta: { label: string };
  hero: { kicker: string; headline: string; sub: string; fine: string; tableAlt: string };
  why: { title: string; cards: { a: string; b: string }[] };
  how: { title: string; steps: { a: string; b: string }[]; note: string };
  evening: { title: string; list: string[]; photoAlt: string };
  who: { title: string; chips: string[]; note: string };
  community: { big: string; sub: string; btn: string };
  faq: { title: string; items: { q: string; a: string }[] };
  closing: { headline: string; fine: string };
  footer: { line: string; wa: string; rights: string };
};

const he: Copy = {
  meta: {
    title: "צ'אז | מפגשים קטנים של אנשים מהאזור שלך",
    description:
      "ארבעה עד שישה אנשים, לפי גיל ולפי אזור, סביב שולחן אחד בצפון הישן בתל אביב. ההרשמה לוקחת שתי דקות.",
    toggleLabel: "EN",
    toggleAria: "Switch to English",
  },

  header: { ghost: "הירשמו למפגש", home: "צ'אז, לראש העמוד" },

  cta: { label: "הירשמו למפגש הבא" },

  // 1. Hero
  hero: {
    kicker: "מפגשים קטנים בצפון הישן, תל אביב",
    headline: "להכיר אנשים <em>חדשים</em><br>בשכונה שלך.",
    sub: "אנחנו מסדרים מפגשים של ארבעה עד שישה אנשים, לפי גיל ולפי אזור. בלי אפליקציות, בלי לחץ, פשוט ערב טוב.",
    fine: "שתי דקות למילוי. ההרשמה לכל מפגש בנפרד.",
    tableAlt: "איור של שולחן עגול עם חמישה מקומות סביבו",
  },

  // 2. Why people come
  why: {
    title: "למה אנשים באים",
    cards: [
      { a: "החברים כבר בזוגיות.", b: "ולצאת לבד זה פחות כיף." },
      { a: "דייט ראשון עם זר זה לחץ.", b: "סביב שולחן עם עוד אנשים זה נעים." },
      { a: "גרים באותה שכונה שנים.", b: "ולא מכירים כמעט אף אחד." },
    ],
  },

  // 3. How it works
  how: {
    title: "איך זה עובד",
    steps: [
      { a: "ממלאים טופס קצר", b: "גיל, אזור, ומה מעניין אתכם. שתי דקות, בלי התחייבות." },
      { a: "אנחנו מסדרים את השולחן", b: "ארבעה עד שישה אנשים בני אותו גיל, שגרים באותו אזור." },
      { a: "נפגשים", b: "מקבלים הודעה בוואטסאפ עם המקום והשעה, ומגיעים." },
    ],
    note: "כל מפגש מתחיל מחדש. רוצים לבוא שוב? נרשמים שוב באותו קישור.",
  },

  // 4. What an evening looks like
  evening: {
    title: "איך נראה הערב",
    list: [
      "שולחן אחד, ארבעה עד שישה אנשים",
      "מקום טוב בשכונה, כל אחד משלם על מה שהוא מזמין",
      "אין מנחה ואין תוכנית. יש שאלות טובות",
      "משחק קצר בטלפון אחד שעובר סביב השולחן, למי שרוצה לשבור את הקרח",
    ],
    photoAlt: "חמישה אנשים יושבים סביב שולחן אחד בערב, מדברים וצוחקים",
  },

  // 5. Who it is for
  who: {
    title: "למי זה מתאים",
    chips: [
      "פנויים ופנויות שרוצים להכיר",
      "מי שעבר לשכונה לא מזמן",
      "מי שמחפש חברים חדשים",
      "מי שמעדיף אנשים על אפליקציות",
    ],
    note: "יש מפגשים לפנויים ופנויות, ויש מפגשים שהם פשוט אנשים מהאזור עם תחומי עניין דומים. בטופס תבחרו מה מתאים לכם.",
  },

  // 6. The community
  community: {
    big: "מעל 2,000 שכנים כבר בקבוצה.",
    sub: "שם מפרסמים את המפגשים הבאים.",
    btn: "הצטרפו לקבוצת הוואטסאפ",
  },

  // 7. Questions
  faq: {
    title: "שאלות",
    items: [
      { q: "כמה אנשים יש בכל מפגש?", a: "ארבעה עד שישה. קטן במכוון, כדי שתהיה שיחה אחת ולא רעש." },
      {
        q: "זה דייטים?",
        a: "לא בהכרח. יש מפגשים לפנויים ופנויות, ויש מפגשים שהם פשוט אנשים מהאזור. בטופס תסמנו מה אתם מחפשים.",
      },
      {
        q: "איך מתאימים אותי לשולחן?",
        a: "לפי גיל, לפי האזור שבו אתם גרים, ולפי מה שכתבתם על עצמכם בטופס.",
      },
      { q: "אני לא מכיר אף אחד שם.", a: "אף אחד לא מכיר. זה בדיוק הרעיון." },
      { q: "אפשר לבוא עם בן או בת זוג?", a: "כן, בטופס יש שאלה אם אתם באים לבד או בשניים." },
      // OWNER: the owner confirmed there is no fee to sign up. If a booking
      // fee is ever introduced, this answer has to carry the amount.
      {
        q: "כמה זה עולה?",
        a: "אין דמי חבר ואין מנוי. נרשמים לכל מפגש בנפרד, וכל אחד משלם על מה שהוא מזמין במקום.",
      },
    ],
  },

  // 8. Closing
  closing: {
    headline: "ערב אחד.<br>שולחן אחד.<br><em>אנשים חדשים.</em>",
    fine: "ההרשמה לוקחת שתי דקות.",
  },

  // 9. Footer
  footer: {
    line: "מפגשים קטנים בצפון הישן, תל אביב",
    wa: "קבוצת הוואטסאפ",
    rights: "Chuzz",
  },
};

const en: Copy = {
  meta: {
    title: "Chuzz | Small meetups with people from your own area",
    description:
      "Four to six people, matched by age and by area, around one table in Old North Tel Aviv. Signing up takes two minutes.",
    toggleLabel: "עב",
    toggleAria: "החלפה לעברית",
  },

  header: { ghost: "Sign up", home: "Chuzz, back to top" },

  cta: { label: "Sign up for the next meetup" },

  hero: {
    kicker: "Small meetups in Old North Tel Aviv",
    headline: "Meet <em>new people</em><br>in your own neighbourhood.",
    sub: "We arrange meetups of four to six people, matched by age and by area. No apps, no pressure, just a good evening.",
    fine: "Two minutes to fill in. You sign up per meetup.",
    tableAlt: "An illustration of a round table with five seats around it",
  },

  why: {
    title: "Why people come",
    cards: [
      { a: "Your friends are all coupled up.", b: "And going out alone is less fun." },
      { a: "A first date with a stranger is stressful.", b: "A table with a few other people is not." },
      { a: "Years in the same neighbourhood.", b: "And you barely know anyone in it." },
    ],
  },

  how: {
    title: "How it works",
    steps: [
      { a: "Fill in a short form", b: "Age, area, and what you are into. Two minutes, no commitment." },
      { a: "We arrange the table", b: "Four to six people of a similar age who live in the same area." },
      { a: "You meet", b: "You get a WhatsApp message with the place and the time, and you come." },
    ],
    note: "Every meetup starts fresh. Want to come again? Sign up again at the same link.",
  },

  evening: {
    title: "What the evening looks like",
    list: [
      "One table, four to six people",
      "A good spot in the neighbourhood, everyone pays for what they order",
      "No host and no agenda. Just good questions",
      "A short game on one phone passed around the table, for anyone who wants to break the ice",
    ],
    photoAlt: "Five people sitting around one table in the evening, talking and laughing",
  },

  who: {
    title: "Who it is for",
    chips: [
      "Singles who want to meet someone",
      "People who moved here recently",
      "People looking for new friends",
      "People who prefer people over apps",
    ],
    note: "Some meetups are for singles, some are simply people from the area with similar interests. You choose in the form.",
  },

  community: {
    big: "Over 2,000 neighbours are already in the group.",
    sub: "That is where the next meetups are announced.",
    btn: "Join the WhatsApp group",
  },

  faq: {
    title: "Questions",
    items: [
      { q: "How many people are at a meetup?", a: "Four to six. Deliberately small, so there is one conversation and not noise." },
      {
        q: "Is this dating?",
        a: "Not necessarily. Some meetups are for singles, some are just people from the area. You say what you are looking for in the form.",
      },
      {
        q: "How am I matched to a table?",
        a: "By age, by the area you live in, and by what you wrote about yourself in the form.",
      },
      { q: "I do not know anyone there.", a: "Nobody does. That is the whole idea." },
      { q: "Can I come with a partner?", a: "Yes, the form asks whether you are coming alone or as a pair." },
      // OWNER: see the Hebrew note above. Keep both answers in step.
      {
        q: "What does it cost?",
        a: "There is no membership and no subscription. You sign up per meetup, and everyone pays for what they order at the place.",
      },
    ],
  },

  closing: {
    headline: "One evening.<br>One table.<br><em>New people.</em>",
    fine: "Signing up takes two minutes.",
  },

  footer: {
    line: "Small meetups in Old North Tel Aviv",
    wa: "WhatsApp group",
    rights: "Chuzz",
  },
};

export const COPY: Record<Lang, Copy> = { he, en };

/** Hebrew is the default. The toggle is the only way to change it. */
export const DEFAULT_LANG: Lang = "he";

/** localStorage key holding the visitor's choice. */
export const LANG_STORAGE_KEY = "chuzz_lang";
