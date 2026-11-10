/* =====================================================================
   ThinkWide website — editable content
   Change this file to update testimonials, the analyzer list, client
   logos and where forms are sent. No rebuild needed: commit and push.
   ===================================================================== */
window.TW_DATA = {

  /* ---------------------------------------------------------------
     FORMS
     Paste the endpoint from your form service (e.g. Formspree,
     Web3Forms, Getform or a Google Apps Script web app URL).
     Leave empty ('') and forms show a "not connected yet" message.
     --------------------------------------------------------------- */
  formEndpoint: '',

  /* ---------------------------------------------------------------
     CLIENT LOGOS  (homepage strip + testimonials page)
     logo: path to an image in assets/img/clients/, e.g.
           'assets/img/clients/apex.webp'. Leave '' to show the name.
     --------------------------------------------------------------- */
  clients: [
    { name: 'Apex', logo: 'assets/img/clients/apex.webp' },
    { name: 'Biohem', logo: 'assets/img/clients/biohem.webp' },
    { name: 'Immunopath', logo: 'assets/img/clients/immunopath.webp' },
    { name: 'IRS', logo: 'assets/img/clients/irs.webp' },
    { name: 'Lab Easy', logo: 'assets/img/clients/lab-easy.webp' },
    { name: 'Meditrust', logo: 'assets/img/clients/meditrust.webp' },
    { name: 'New Life', logo: 'assets/img/clients/newlife.webp' },
    { name: 'Oncos', logo: 'assets/img/clients/oncos.webp' },
    { name: 'PHS Fertility', logo: 'assets/img/clients/phs-fertility.webp' },
    { name: 'Prapti', logo: 'assets/img/clients/prapti.webp' },
    { name: 'Prism', logo: 'assets/img/clients/prism.webp' },
    { name: 'Shanti', logo: 'assets/img/clients/shanti.webp' },
    { name: 'Vida', logo: 'assets/img/clients/vida.webp' }
  ],

  /* ---------------------------------------------------------------
     TESTIMONIALS
     type:    'video' or 'text'
     video:   YouTube link (https://www.youtube.com/watch?v=… or youtu.be/…)
     approved: set to true only after the client has approved the
               wording. Unapproved entries show as "awaiting approval".
     product: 'ThinkLab', 'ThinkRay' or 'ThinkDigital' decides which
              product page shows the story. The first 3 entries
              appear on the homepage.
     --------------------------------------------------------------- */
  testimonials: [
    { type: 'video', approved: false, client: '[Client lab name]', person: '[Name, Designation]', city: '[City]', product: 'ThinkLab', video: '',
      quote: 'Add the approved video link and a one-line summary of what changed for this lab.' },
    { type: 'video', approved: false, client: '[Imaging centre name]', person: '[Name, Designation]', city: '[City]', product: 'ThinkRay', video: '',
      quote: 'Add the approved video link from a radiology customer.' },
    { type: 'text', approved: false, client: '[Client lab name]', person: '[Name, Designation]', city: '[City]', product: 'ThinkLab',
      quote: 'Paste the client’s approved written quote here: what they used before, what improved and by how much.' },
    { type: 'text', approved: false, client: '[Client lab name]', person: '[Name, Designation]', city: '[City]', product: 'ThinkLab',
      quote: 'Paste an approved quote about report delivery or patient feedback.' },
    { type: 'text', approved: false, client: '[Healthcare brand]', person: '[Name, Designation]', city: '[City]', product: 'ThinkDigital',
      quote: 'Paste an approved quote about enquiries or bookings from a marketing client.' },
    { type: 'text', approved: false, client: '[Imaging centre name]', person: '[Name, Designation]', city: '[City]', product: 'ThinkRay',
      quote: 'Paste an approved quote from a radiology customer about reporting or report delivery.' }
  ],

  /* ---------------------------------------------------------------
     ANALYZER / MACHINE INTERFACE LIST  (All Integrations page)
     Add one row per verified analyzer. When this list has rows it
     replaces the "being published" message with a searchable table.
     Example:
     { make: 'Manufacturer', model: 'Model name', dept: 'Haematology', link: 'Bi-directional' },
     --------------------------------------------------------------- */
  machines: [
  ]
};
