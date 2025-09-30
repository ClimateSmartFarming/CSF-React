export interface NewsItem {
  id: string;         // e.g., "cornell-field-day-2024"
  title: string;
  date: string;
  image: string;
  content: string;    // Full HTML or JSX content
  link?: string;      // Optional source or external link
}

export const newsItems: NewsItem[] = [
  {
      id: 'travel-around-the-world-with-digital-fao-and-agro-informatics-next-stop-cornell-university',
      title: '“Travel Around the World with Digital FAO and Agro-Informatics” Next Stop: Cornell University”',
      image: 'https://climatesmartfarming.org/wp-content/uploads/2025/09/FAO.jpg',
      date: '2025-09-08',
      content: `
<p>Please join us on Zoom for “Travel Around the World with Digital FAO and Agro-Informatics.”Hear from Cornell experts on climate-smart farming, digital agriculture, and AI-LEAF innovations. Our lineup includes: Allison Chatrchyan, Ph.D. (Climate-Smart Farming Tools &amp; AI-LEAF Institute), Louis Longchamps, Ph.D. (Digital Agriculture &amp; On-Farm Experimentation), Phillips Lanza (CALS Ph.D. Student), Lee Dunnigan (Cornell &amp; AI-LEAF Ph.D. Student), and Haodi Xu (Cornell &amp; AI-LEAF Ph.D. Student). Stick around for an exciting Q&amp;A and discussion!</p>
<p>Scan the QR code!</p>
<p>September 10 | 9:00 AM Eastern Time</p>
`,
  },
  {
      id: 'field-days-biochar-cover-crops-and-urban-agriculture',
      title: 'Field Days: Biochar, Cover Crops, and Urban Agriculture',
      image: 'https://climatesmartfarming.org/wp-content/uploads/2025/09/Screenshot-2025-09-04-at-4.40.36%E2%80%AFPM.png',
      date: '2025-09-05',
      content: `
<p>Learn in the field with us at New York Soil Health Field Days! Join us on September 9th to hear from
presenters and learn all about biochar, cover crops, urban agriculture, and much more! The event will take
place from 1:00 p.m. to 5:00 p.m. at Spruce Haven Farm. We would appreciate it if all participants could
pre-register for the event. However, walk-ins are welcome. Attendance is free. Please join us to learn more
about biochar and its application on your farm. See you there!</p>
<p>Pre-Registration Link: <a href="http://fielddays.newyorksoilhealth.org/">fielddays.newyorksoilhealth.org</a></p>
<p>When: September 9, 1:00 p.m. to 5:00 p.m.</p>
<p>Where: Spruce Haven Farm, 5004 White Rd, Union Springs, NY 13160</p>
`,
  },
];

export const getNewsById = (id: string): NewsItem | undefined => {
  return newsItems.find(news => news.id === id);
};