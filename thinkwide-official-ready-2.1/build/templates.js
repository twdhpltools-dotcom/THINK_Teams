const I = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>', check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>', chev: '<path d="M6 9l6 6 6-6"/>',
  flask: '<path d="M9 3h6M10 3v6L4.5 18.5A1.6 1.6 0 0 0 5.9 21h12.2a1.6 1.6 0 0 0 1.4-2.5L14 9V3"/><path d="M7.5 14h9"/>',
  scan: '<path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"/><circle cx="12" cy="12" r="3.5"/>',
  mega: '<path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"/>',
  box: '<path d="M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5z"/><path d="M3.5 7.5L12 12l8.5-4.5M12 12v9"/>',
  chart: '<path d="M4 20V4M4 20h16"/><path d="M7 15l4-4 3 3 5-6"/>',
  file: '<path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8z"/><path d="M14 3v5h5M8.5 13h7M8.5 17h5"/>',
  rx: '<path d="M6 20V4h5a4 4 0 0 1 0 8H6M10 12l8 8M18 13l-5 5"/>',
  plug: '<path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4"/>',
  shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  cloud: '<path d="M7 18a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 9.5a4.3 4.3 0 0 1-.5 8.5z"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5L12 13l8.5-6.5"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  play: '<path d="M8 5.5v13l11-6.5z" fill="currentColor"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>',
  qc: '<path d="M3 12h3l2-5 4 10 2-5h7"/>', menu: '<path d="M4 7h16M4 12h16M4 17h16"/>', close: '<path d="M6 6l12 12M18 6L6 18"/>',
  chat: '<path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5z"/>', card: '<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3 10h18M7 15h3"/>',
  barcode: '<path d="M4 5v14M7 5v14M10.5 5v14M13 5v14M16.5 5v14M20 5v14"/>',
  building: '<path d="M4 21V5l8-2v18M12 8h8v13M7 8h2M7 12h2M7 16h2M15 12h2M15 16h2M3 21h18"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  home: '<path d="M4 11l8-7 8 7v9H4z"/><path d="M10 20v-5h4v5"/>',
  branch: '<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M6 8.5v1a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-1M12 12.5v3"/>',
  globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.6 3.5 5.4 3.5 8.5s-1 5.9-3.5 8.5c-2.5-2.6-3.5-5.4-3.5-8.5s1-5.9 3.5-8.5z"/>',
  lock: '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>',
  db: '<ellipse cx="12" cy="6" rx="7.5" ry="3"/><path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
  target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
  bell: '<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
  truck: '<path d="M3 6h11v10H3zM14 9.5h4l3 3.5V16h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
  rupee: '<path d="M7 4.5h10M7 9h10M7 4.5h3.5a4.5 4.5 0 0 1 0 9H7l7 7"/>'
};
const ic = (n, s = 20) => `<svg class="ic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n] || ''}</svg>`;


/* ===================== MOCK SCREENS (demo data) ===================== */
const win = (title, body, cls = '') => `<div class="win ${cls}"><div class="win-bar"><span class="dots"><i></i><i></i><i></i></span><span class="win-title">${title}</span><span class="demo-tag">Demo data</span></div><div class="win-body">${body}</div></div>`;
const pill = (t, c) => `<span class="pill p-${c}">${t}</span>`;
function rrow(name, val, unit, ref, pos, state) {
  const col = state === 'ok' ? 'var(--ok)' : state === 'crit' ? 'var(--crit)' : 'var(--warn)'; const lbl = state === 'ok' ? 'Normal' : state === 'crit' ? 'High' : 'Low';
  return `<div class="rep-row"><div><b>${name}</b><div class="muted mono" style="font-size:.7rem">Ref ${ref}</div></div><div style="text-align:right"><b style="color:${col}">${val}</b> <span class="muted" style="font-size:.72rem">${unit}</span><div>${pill(lbl, state === 'ok' ? 'ok' : state === 'crit' ? 'crit' : 'warn')}</div></div><div class="rbar"><i style="left:${pos}%;background:${col}"></i></div></div>`;
}
function mockReport() {
  return win('Smart Report · shared on WhatsApp', `
<div class="rep-head"><div><b style="font-family:var(--f-display);font-size:1rem">Your Lab Name</b><div class="muted" style="font-size:.74rem">Mrs. S. Mondal · 31 F · Reg. TW-11-0413 · 09 Nov 2026</div></div>
<svg width="44" height="44" viewBox="0 0 44 44" aria-label="QR verification code" role="img"><rect width="44" height="44" rx="6" fill="var(--surface-2)"/><g fill="var(--ink)"><rect x="6" y="6" width="10" height="10"/><rect x="28" y="6" width="10" height="10"/><rect x="6" y="28" width="10" height="10"/><rect x="20" y="8" width="4" height="4"/><rect x="20" y="20" width="4" height="4"/><rect x="28" y="22" width="4" height="4"/><rect x="34" y="30" width="4" height="8"/><rect x="22" y="30" width="6" height="4"/><rect x="8" y="20" width="6" height="4"/></g></svg></div>
${rrow('Haemoglobin', '11.2', 'g/dL', '12.0 – 15.5', 14, 'warn')}
${rrow('Total WBC count', '7.8', '×10³/µL', '4.0 – 11.0', 52, 'ok')}
${rrow('Platelet count', '2.4', 'lakh/µL', '1.5 – 4.5', 40, 'ok')}
${rrow('HbA1c', '7.4', '%', '< 5.7', 88, 'crit')}
<div style="display:flex;align-items:center;gap:12px;font-size:.74rem" class="muted"><span>HbA1c trend</span><svg width="120" height="30" viewBox="0 0 120 30" aria-hidden="true"><polyline points="4,24 42,18 80,12 116,5" fill="none" stroke="var(--crit)" stroke-width="2"/><circle cx="116" cy="5" r="3" fill="var(--crit)"/></svg><span class="mono">6.2 → 7.4 (12 mo)</span></div>
<div class="rep-sum">${ic('bell', 18)}<span style="font-size:.8rem"><b>2 results need attention.</b> Your HbA1c has risen over the last year. Please review this report with your doctor.</span></div>`);
}
function mockRx() {
  return win('Online Prescription · Doctor app', `
<div class="rep-head"><div><b style="font-size:1rem">Dr. [Doctor name]</b><div class="muted" style="font-size:.74rem">[Qualification] · [Registration no.] · [Clinic name]</div></div><span class="mono muted" style="font-size:.74rem">09 Nov 2026</span></div>
<div style="font-size:.8rem"><span class="muted">Patient:</span> A. Ghosh · 54 M</div>
<div class="tscroll"><table class="wl" style="min-width:380px"><thead><tr><th>Medicine</th><th>Dose</th><th>Duration</th></tr></thead><tbody>
<tr><td>Tab. [Medicine A] 500 mg</td><td class="mono">1-0-1</td><td class="mono">30 days</td></tr>
<tr><td>Tab. [Medicine B]</td><td class="mono">0-0-1</td><td class="mono">30 days</td></tr></tbody></table></div>`);
}
const MOCKS = { report: mockReport, rx: mockRx };

/* =====================================================================
   PRODUCT CONTENT
   Everything here is taken from ThinkWide's own material: the current
   website, real ThinkLab screens, the legal & service terms, and the
   Inventory/QC portal requirements. Do not add features, figures or
   certifications that ThinkWide has not confirmed.
   ===================================================================== */
const DEMO_POINTS = ['A walkthrough of the workflows your team uses every day', 'Answers on analyzer compatibility for your machines', 'A plan for onboarding, configuration and data migration'];
const P = {
  thinklab: {
    name: 'ThinkLab', tag: 'for Diagnostics', c: 'lab', icon: 'flask', kind: 'rich',
    title: 'Run your entire diagnostic lab <em>from one connected platform</em>',
    lead: 'ThinkLab is ThinkWide\'s cloud-based laboratory management software. Manage patient registration, billing, sample collection, testing, result entry, reporting and day-to-day operations in one system, across every branch and collection centre.',
    heroImg: 'mock-thinklab.webp',
    challenges: [
      ['Repetitive manual work', 'Results are copied from analyzer printouts, invoices are reconciled by hand and the same patient details are typed again and again.'],
      ['No clear view of samples', 'When samples, worksheets and reports live on paper, nobody can quickly answer "where is this sample?" or "is the report ready?".'],
      ['Branches that don\'t talk', 'Each branch or collection centre keeps its own records, so owners wait for end-of-day calls and spreadsheets to see the business.'],
      ['Patients chasing reports', 'Patients visit or phone the lab just to collect a report, and printed reports are hard to verify.']],
    solution: { h: 'One streamlined process, from registration to report', p: 'ThinkLab connects the people, processes and technology behind your laboratory. Registration, samples, testing and reporting move through one connected workflow, and every branch works on the same live system.', img: 'shot-dashboard.webp', url: 'Finance dashboard' },
    sections: [
      {
        k: 'Registration & billing', h: 'Book a patient, add tests and take payment on one screen', p: 'ThinkLab\'s booking screen walks the front desk through four steps: Patient, Investigations, Billing and Clinical. Returning patients are found in seconds and the booking summary updates as you go.',
        pts: ['Find existing patients by UHID, name, mobile number or national ID', 'Book home collections with the patient\'s address and assigned collector', 'Record the referring doctor, referrer and appointment', 'Apply concessions and see collector and emergency charges, amount paid and dues', 'Send an online link so the patient can pay by UPI'], img: 'shot-register.webp', url: 'Diagnostic booking'
      },
      {
        k: 'Sample tracking', h: 'Know the status of every sample', p: 'The sample collection report lists each invoice with its patient, container and status, so the team can see what has been received and what is still pending collection.',
        pts: ['Sample status by invoice and container type', 'Received and pending-collection samples at a glance', 'Daily worksheets and test requisitions', 'Department copies and report coverage tracking'], img: 'shot-samples.webp', url: 'Sample tracking'
      },
      {
        k: 'Machine interfacing', h: 'Let compatible analyzers send results directly', p: 'ThinkLab interfaces with compatible laboratory analyzers, so test results flow straight into the lab workflow and repetitive manual data entry is reduced.',
        pts: ['Results from interfaced analyzers arrive in ThinkLab automatically', 'Less retyping and fewer transcription errors', 'Compatibility confirmed for your analyzer make and model before go-live'], photo: 'hazmat.webp'
      },
      {
        k: 'Results & verification', h: 'Configure every report the way your lab works', p: 'Report settings let you define pathology parameters, reference values and report templates for each department. Before a report is released, abnormal and critical values are flagged for review and results go through verification by your team.',
        pts: ['Pathology parameters, reference values and report templates', 'Urine sensitivity reporting', 'Result verification before release', 'Abnormal and critical values flagged for attention', 'Report unlock requests to control changes after approval'], photo: 'scientist.webp'
      },
      {
        k: 'Reports & delivery', h: 'Branded, QR-coded reports, delivered digitally', p: 'Reports carry your lab\'s format and branding with a QR code for verification. Send them online and through the Meta WhatsApp Business API, print in bulk when needed, and let patients find their reports online.',
        pts: ['QR-coded lab reports', 'Automated patient updates through the Meta WhatsApp Business API', 'Bulk report printing', 'Online report search for patients using their registered details', 'Smart Report for a clearer, patient-friendly view'], tall: 'report.webp'
      },
      {
        k: 'Finance & MIS', h: 'See collections, payments and dues the moment you log in', p: 'The finance dashboard shows today\'s collection, payments received, cash expenses, estimation value and cost incurred, with an invoice summary and payment methods. It works on the desktop and on your phone.',
        pts: ['Finance dashboard on desktop and mobile', 'Invoice list, summary view and invoice journey', 'Error invoices and invoice search', 'MIS reports for management', 'User access control for every role'], img: 'shot-invoices.webp', phone: 'finance-mobile.webp', url: 'Invoice list'
      },
      {
        k: 'Multi-branch operations', h: 'Every branch and collection centre on one system', p: 'ThinkLab supports multi-location operations, so laboratories manage branches, collection centres, users and workflows through one centralised platform. Branch settings control details such as price visibility and how discounts are applied.',
        pts: ['Branches and collection centres managed centrally', 'Branch-level settings for price visibility and discounts', 'Online booking requests and appointments', 'Suitable for single labs and growing multi-branch networks'], photo: 'consult.webp'
      }],
    steps: [['Register & bill', 'Patient, tests and payment captured at the front desk or by a home collector.'], ['Collect sample', 'Samples collected, labelled and handed over to the lab.'], ['Receive results', 'Compatible analyzers send results directly into ThinkLab.'], ['Verify', 'Abnormal and critical values are flagged for review.'], ['Approve', 'Your pathologist verifies and approves the report.'], ['Deliver', 'QR-coded report sent online and on WhatsApp.']],
    trio: [['steps4', 'Four-step booking.', 'Patient, Investigations, Billing and Clinical on one screen.'], ['analyzer', 'Results from compatible analyzers.', 'Received in ThinkLab, then verified and approved by your team.'], ['whatsapp', 'Reports on WhatsApp.', 'Automated patient updates through the Meta WhatsApp Business API.']],
    apps: true,
    ints: [['plug', 'Lab analyzers', 'Interfacing with compatible analyzers'], ['chat', 'Meta WhatsApp Business API', 'Automated patient updates and reports'], ['card', 'Payment gateway', 'Online payment links, including UPI'], ['db', 'Structured data exports', 'Financial, doctor, patient, collector and B2B data'], ['users', 'Patient, Doctor & Collector apps', 'Connected to the same lab record'], ['globe', 'Custom integrations', 'API and custom work, scoped and quoted separately']],
    uses: ['Individual diagnostic labs', 'Multi-branch diagnostic networks', 'Collection centres', 'Home collection services', 'Hospital laboratories'],
    faq: [['What is ThinkLab, and how can it help manage my diagnostic laboratory?', 'ThinkLab is a cloud-based laboratory management platform designed to manage patient registration, billing, sample collection, testing, result entry, report generation and other day-to-day lab operations through one connected system.'], ['Can ThinkLab manage multiple diagnostic centres, collection centres and branches?', 'Yes. ThinkLab supports multi-location operations, helping laboratories manage branches, collection centres, users and workflows through a centralised platform.'], ['Can ThinkLab connect directly with laboratory analyzers?', 'Yes. ThinkLab supports interfacing with compatible laboratory analyzers, allowing test results to flow directly into the laboratory workflow and reducing repetitive manual data entry.'], ['How does ThinkLab help manage home sample collection?', 'ThinkLab works with the Collector App to manage assigned collections, patient details, visit status, sample collection, barcodes, payments and sample handover.'], ['Can patients book tests and access their reports online?', 'Yes. Through connected patient services, patients can book tests, manage family profiles, access available reports and maintain their diagnostic records digitally.'], ['Is there a platform for doctors?', 'Yes. ThinkLab\'s connected doctor solutions provide access to relevant patient reports and support structured digital prescriptions.'], ['Can I customise reports, branding and workflows?', 'ThinkLab provides configurable options that can be adapted to different laboratory workflows, report formats, branding requirements and operational processes.'], ['Is ThinkLab suitable for small labs as well as large networks?', 'Yes. ThinkLab is designed to support different laboratory setups, from individual diagnostic labs to growing organisations with multiple branches and collection centres.']]
  },

  thinkray: {
    name: 'ThinkRay', tag: 'for Radiology Divisions', c: 'ray', icon: 'scan', kind: 'rich',
    title: 'Digital radiology reporting and <em>teleradiology</em>',
    lead: 'ThinkRay is ThinkWide\'s radiology solution. It brings digital report processing, DICOM-based teleradiology, swift online report delivery and secure access to patient data together for X-ray clinics, diagnostic centres, hospitals and large medical organisations.',
    heroImg: 'mock-thinkray.webp',
    challenges: [
      ['Slow, paper-based reporting', 'Printed films and handwritten or retyped reports slow down every step between the scan and the patient.'],
      ['Radiologists in other locations', 'When the reporting radiologist is not on site, studies and reports are passed around through channels that are hard to manage.'],
      ['Patients waiting for reports', 'Patients come back, or call, just to collect a report that could have reached them digitally.'],
      ['Reports that are hard to verify', 'Without a way to check a report\'s source, referring doctors and patients have to trust the paper.']],
    solution: { h: 'One digital path from study to signed report', p: 'ThinkRay modernises radiology with digital report processing. Studies are shared for reporting in DICOM format, reports are processed digitally and delivered online, and patient data stays securely accessible for follow-up.', photo: 'ray-doctor.webp' },
    sections: [
      { k: 'DICOM-based teleradiology', h: 'Report studies wherever your radiologist is', p: 'ThinkRay uses DICOM-based teleradiology, so imaging studies can be shared and reported without the radiologist being in the same building as the modality.', pts: ['Imaging studies shared in the standard DICOM format', 'Remote reporting for X-ray clinics, diagnostic centres and hospitals', 'Supports a range of clinical studies'], tall: 'mock-thinkray.webp' },
      { k: 'Digital report processing', h: 'Move from scan to report without paper', p: 'Reports are created and processed digitally, which removes the delays of printing, retyping and physically moving reports between people.', pts: ['Digital report processing', 'Swift and efficient report delivery', 'Patient details and reports kept together'], photo: 'xray.webp' },
      { k: 'QR-coded reports, delivered online', h: 'Reports that reach patients and can be verified', p: 'Radiology reports are sent online for prompt delivery, and each report carries a QR code so its source can be checked.', pts: ['Send reports online', 'QR-coded reports for verification', 'Prompt delivery to patients'], tall: 'report.webp' },
      { k: 'Secure data storage', h: 'Patient imaging data, stored securely and accessible', p: 'ThinkRay keeps patient data securely stored and accessible to authorised users for clinical studies and follow-up visits. Your centre remains the owner of its patient records.', pts: ['Secure data storage', 'Access for authorised users', 'Patient records remain your centre\'s data'], photo: 'code.webp' }],
    steps: [['Acquire study', 'The study is acquired at your X-ray, CT, MRI or other imaging setup.'], ['Share in DICOM', 'Images are shared for reporting through DICOM-based teleradiology.'], ['Report', 'The radiologist reports the study digitally.'], ['Process', 'The report is processed and prepared for delivery.'], ['Deliver online', 'A QR-coded report is sent to the patient online.']],
    trio: [['dicom', 'Share studies in DICOM.', 'DICOM-based teleradiology for remote reporting.'], ['thinkray', 'Process reports digitally.', 'From shared study to processed report, without paper.'], ['qrsend', 'Deliver QR-coded reports online.', 'Prompt online delivery, with a QR code to verify the source.']],
    ints: [['scan', 'DICOM', 'DICOM-based teleradiology'], ['db', 'Your imaging setup', 'ThinkWide does not supply PACS; we\'ll discuss how ThinkRay fits your existing systems'], ['flask', 'ThinkLab', 'For centres that run pathology and radiology'], ['globe', 'Custom integrations', 'API and custom work, scoped and quoted separately']],
    uses: ['X-ray clinics', 'Diagnostic centres with imaging', 'Hospitals', 'Large medical organisations'],
    faq: [['What is ThinkRay?', 'ThinkRay is ThinkWide\'s radiology solution for digital report processing, DICOM-based teleradiology, online report delivery and secure patient data access.'], ['Does ThinkWide provide a PACS?', 'No. ThinkWide does not provide PACS. Talk to our team about how ThinkRay fits the imaging systems your centre already uses.'], ['Who is ThinkRay for?', 'X-ray clinics, diagnostic centres, hospitals and large medical organisations that want faster, digital radiology reporting.'], ['Can reports be verified?', 'Yes. ThinkRay reports are QR-coded so their source can be checked.'], ['How do I see ThinkRay with my own workflow?', 'Book a demo and share a few details about your centre. The ThinkWide team will walk you through the relevant workflows.']]
  },

  thinkdigital: {
    name: 'ThinkDigital', tag: 'for Healthcare Brands', c: 'dig', icon: 'mega', kind: 'digital',
    title: 'Healthcare marketing that helps <em>patients find you</em>',
    lead: 'ThinkDigital is ThinkWide\'s digital marketing team for the medical sector. We help diagnostic centres, pathology labs and healthcare brands reach more patients online through SEO, social media and Google Ads.',
    heroImg: 'digital-marketer.webp',
    challenges: [
      ['Hard to find online', 'Patients search for tests and healthcare services on Google, and centres that are not visible lose those patients to competitors.'],
      ['Marketing without a plan', 'Posts and ads go out when someone has time, without a clear strategy behind them.'],
      ['Generic agencies', 'Marketing partners outside healthcare don\'t understand how diagnostic and medical businesses work.']],
    services: [
      ['search', 'Search engine optimisation (SEO)', 'Improve how your centre appears in search results for the services and areas your patients look for.'],
      ['target', 'Google Ads', 'Paid search campaigns that put your services in front of people searching for them.'],
      ['mega', 'Social media marketing', 'Planned content and campaigns that keep your brand visible and consistent on social media.'],
      ['file', 'Keyword & tag research', 'Research into the terms and tags patients actually use, to guide your content and campaigns.'],
      ['globe', 'Website development', 'Project-based website development for healthcare brands, quoted separately.']],
    steps: [['Understand', 'We learn about your centre, services, locations and goals.'], ['Plan', 'We agree the channels, priorities and budget.'], ['Execute', 'Our team runs SEO, social media and Google Ads work.'], ['Review', 'We review performance with you and adjust the plan.']],
    uses: ['Diagnostic centres', 'Pathology labs', 'Imaging centres', 'Clinics & hospitals', 'Healthcare brands'],
    faq: [['Which businesses does ThinkDigital work with?', 'ThinkDigital specialises in online marketing for the medical sector, including diagnostic centres, pathology labs and other healthcare brands.'], ['What services does ThinkDigital offer?', 'SEO, social media marketing, Google Ads, keyword and tag research, and project-based website development.'], ['Do I need to use ThinkLab to work with ThinkDigital?', 'No. ThinkDigital is a separate service and works with healthcare businesses whether or not they use ThinkWide software.'], ['How do we get started?', 'Request a consultation and our team will contact you to understand your goals.']]
  },

  inventory: {
    name: 'Inventory', tag: 'ThinkLab module', c: 'lab', icon: 'box', kind: 'module',
    title: 'Lab inventory, connected to your quality and lab workflows',
    lead: 'The ThinkLab Inventory portal brings lab inventory into the same system as quality control and ThinkLab, with access set by each person\'s role.',
    photo: 'scientist.webp',
    points: [['users', 'Designation-wise access', 'Separate access for Lab Manager, Inventory Manager, Supervisor and Technician.'], ['plug', 'Connected to Quality Control', 'Inventory and quality control work as interconnected portals in one system.'], ['flask', 'Part of ThinkLab', 'Built to work alongside ThinkLab, the lab\'s core system.']],
    note: 'Ask our team for the current Inventory feature list and a walkthrough with your lab\'s items and workflows.',
    faq: [['Is Inventory part of ThinkLab?', 'Inventory is a ThinkLab portal designed to work with ThinkLab and the Quality Control portal.'], ['Who can use the Inventory portal?', 'Access is designation-wise: Lab Manager, Inventory Manager, Supervisor and Technician.']]
  },
  'quality-control': {
    name: 'Quality Control', tag: 'ThinkLab module', c: 'lab', icon: 'qc', kind: 'module',
    title: 'Quality control that draws on your live lab data',
    lead: 'The ThinkLab Quality portal supports quality monitoring and analysis, automatically receiving relevant data from ThinkLab, with role-based access for your quality team.',
    photo: 'hazmat.webp',
    points: [['db', 'Data from ThinkLab', 'Relevant data flows automatically from ThinkLab to support quality monitoring and analysis.'], ['file', 'Manual QC entry', 'Control data can be entered manually for analyzers without a machine interface.'], ['users', 'Designation-wise access', 'Separate access for Lab Manager, Quality Manager, Supervisor and Technician.'], ['box', 'Connected to Inventory', 'Quality control and inventory work as interconnected portals.']],
    note: 'Ask our team for the current Quality Control feature list and a walkthrough with your analyzers and controls.',
    faq: [['Can we record QC for analyzers that are not interfaced?', 'Yes. Control data can be entered manually for analyzers without a machine interface.'], ['Who can use the Quality portal?', 'Access is designation-wise: Lab Manager, Quality Manager, Supervisor and Technician.']]
  },
  'smart-report': {
    name: 'Smart Report', tag: 'ThinkLab module', c: 'lab', icon: 'file', kind: 'module',
    title: 'Lab reports your patients can understand',
    lead: 'Smart Report gives patients a more patient-friendly digital reporting experience, presenting laboratory results, important values and available historical information in a clearer format.',
    mock: 'report',
    points: [['file', 'Easier to read', 'Results laid out in a clearer, patient-friendly format.'], ['bell', 'Important results highlighted', 'Values that need attention stand out.'], ['chart', 'Result trends', 'Available historical information shown alongside current results.'], ['chat', 'Better report experience', 'A digital report patients can open and share.']],
    note: 'The example above uses sample data.',
    faq: [['How is Smart Report different from a traditional lab report?', 'Smart Report presents laboratory results, important values and available historical information in a clearer, patient-friendly format.'], ['Does the pathologist still approve the report?', 'Yes. Report verification and approval remain with your licensed professionals.']]
  },
  'online-prescription': {
    name: 'Online Prescription', tag: 'ThinkLab module', c: 'lab', icon: 'rx', kind: 'module',
    title: 'Clear, structured prescriptions, created digitally',
    lead: 'Online Prescription lets doctors create clear and structured prescriptions digitally, with quick medicine selection and set dose and duration, through ThinkLab\'s connected doctor solutions.',
    mock: 'rx',
    points: [['rx', 'Create digital prescriptions', 'Structured prescriptions instead of handwriting.'], ['search', 'Quick medicine selection', 'Find and add medicines quickly.'], ['clock', 'Set dose & duration', 'Dose and duration recorded in clear fields.'], ['file', 'Easy prescription access', 'Prescriptions available when needed.']],
    note: 'The example above uses placeholder data. Prescribing decisions always remain with the treating doctor.',
    faq: [['Who uses Online Prescription?', 'Doctors, through ThinkLab\'s connected doctor solutions.'], ['Can doctors see patient reports too?', 'Yes. The Doctor app gives access to relevant patient reports and report history.']]
  }
};
const APPS = [['users', 'Patient app', 'Book tests or packages, manage family members, access lab reports and track health records.'], ['phone', 'Doctor app', 'Access patient reports and report history, create digital prescriptions and manage follow-ups.'], ['truck', 'Collector app', 'Manage assigned home collections, track status, handle samples and barcodes, and complete sample handover.']];

/* ===================== SHARED SECTIONS ===================== */
const faqHTML = list => `<div class="faq">${list.map(([q, a]) => `<details><summary>${q}<span>${ic('chev', 18)}</span></summary><p>${a}</p></details>`).join('')}</div>`;
function demoForm(id = 'demo-form', kind = 'demo') {
  const mk = kind === 'marketing'; return `<form class="form" id="${id}" novalidate>
<div class="field"><label for="${id}-name">Full name</label><input id="${id}-name" required autocomplete="name"></div>
<div class="field"><label for="${id}-phone">Mobile number</label><input id="${id}-phone" required inputmode="tel" placeholder="+91"></div>
<div class="field"><label for="${id}-email">Email</label><input id="${id}-email" type="email"></div>
<div class="field"><label for="${id}-org">${mk ? 'Business name' : 'Lab / centre name'}</label><input id="${id}-org" required></div>
${mk ? `<div class="field full"><label for="${id}-need">What would you like help with?</label><select id="${id}-need"><option>SEO</option><option>Google Ads</option><option>Social media marketing</option><option>Website development</option><option>Not sure yet</option></select></div>` : `<div class="field"><label for="${id}-prod">Interested in</label><select id="${id}-prod"><option>ThinkLab</option><option>ThinkRay</option><option>ThinkDigital</option><option>Inventory &amp; Quality Control</option><option>Not sure yet</option></select></div>
<div class="field"><label for="${id}-vol">Invoices per day</label><select id="${id}-vol"><option>Up to 25</option><option>26 – 50</option><option>51 – 100</option><option>101 – 250</option><option>251 – 500</option><option>500+</option></select></div>`}
<div class="field full"><label for="${id}-city">Address &amp; PIN code</label><input id="${id}-city"></div>
<div class="full btn-row" style="align-items:center"><button class="btn btn-primary" type="submit">${mk ? 'Request a consultation' : 'Book my demo'} ${ic('arrow', 17)}</button><span class="note">Our team will contact you to schedule a time.</span></div>
</form>`;
}
function ctaBlock(title = 'See ThinkWide with your own workflow', lead = 'Share a few details and the ThinkWide team will walk you through the workflows that matter to your centre.', kind = 'demo') {
  const mk = kind === 'marketing'; return `<section class="sec" id="book"><div class="wrap"><div class="cta">
<div style="display:grid;gap:16px;align-content:start"><span class="eyebrow">${mk ? 'Request a consultation' : 'Book a demo'}</span><h2>${title}</h2><p class="lead">${lead}</p>
<ul>${(mk ? ['A conversation about your centre, services and goals', 'Recommendations on which channels to start with', 'A proposal from the ThinkDigital team'] : DEMO_POINTS).map(x => `<li>${ic('check', 18)}${x}</li>`).join('')}</ul>
<p style="margin-top:8px">Prefer to talk? Call <b style="color:#fff">+91 93306 87508</b></p></div>
${demoForm('cta-form', kind)}</div></div></section>`;
}
function testimonialsHTML(limit, product) { return `<div class="tgrid" data-testimonials data-limit="${limit || ''}"${product ? ` data-product="${product}"` : ''}><noscript><p>Customer stories load with JavaScript enabled.</p></noscript></div>`; }
const steps = (arr, c, st = '') => `<ol class="steps c-${c} n${arr.length}"${st && !/repeat/.test(st) ? ` style="${st}"` : ''}>${arr.map(([t, d]) => `<li><h4>${t}</h4><p>${d}</p></li>`).join('')}</ol>`;
const ck = `<span class="ck">${ic('check', 14)}</span>`;
const shot = (src, alt, label) => `<div class="browser"><div class="browser-bar"><span class="dots"><i></i><i></i><i></i></span><span class="browser-url">ThinkLab · ${label}</span></div><img src="assets/img/${src}" alt="${alt}" loading="lazy"></div>`;
const LOGO = { thinklab: 'thinklab-logo.webp', thinkray: 'thinkray-logo.svg', thinkdigital: 'thinkdigital-logo.webp' };
const PIMG = { thinklab: 'mock-thinklab.webp', thinkray: 'mock-thinkray.webp', thinkdigital: 'digital-marketer.webp' };
const TOUR = [
  ['dashboard', 'Finance dashboard', 'shot-dashboard.webp', 'Today\'s collection, payments received, expenses and invoice summary.'],
  ['register', 'Registration & billing', 'shot-register.webp', 'Four-step booking: Patient, Investigations, Billing and Clinical.'],
  ['samples', 'Sample tracking', 'shot-samples.webp', 'Sample status by invoice and container, from collection to receipt.'],
  ['invoices', 'Invoices', 'shot-invoices.webp', 'Invoice list with patient, referring doctor, amount and payment status.']];
const midCTA = (t, b = 'Book a demo') => `<div class="banner-strip" style="margin-top:72px">${t}<a class="btn btn-light" href="#demo" style="padding:10px 18px">${b} ${ic('arrow', 16)}</a></div>`;
function featureRow(s, i, c) {
  let media;
  if (s.img) media = `<div style="position:relative">${shot(s.img, s.h, s.url)}${s.phone ? `<div class="pv-phone" style="right:-18px;bottom:-30px;width:150px"><img src="assets/img/${s.phone}" alt="ThinkLab finance dashboard on mobile"></div>` : ''}</div>`;
  else if (s.tall) media = `<img src="assets/img/${s.tall}" alt="${s.h}" loading="lazy" style="max-height:520px;width:auto;margin:0 auto;${s.tall === 'report.webp' ? 'border-radius:12px;box-shadow:var(--shadow)' : 'filter:drop-shadow(0 20px 30px rgba(11,37,71,.2))'}">`;
  else media = `<div class="team-photo" style="aspect-ratio:4/3"><img src="assets/img/${s.photo}" alt="" loading="lazy"></div>`;
  return `<div class="frow ${i % 2 ? 'rev' : ''} c-${c}" id="f-${i + 1}"><div class="ftext"><span class="eyebrow">${s.k}</span><h2>${s.h}</h2><p class="lead">${s.p}</p><ul>${s.pts.map(b => `<li>${ck}<span>${b}</span></li>`).join('')}</ul></div><div class="fmedia"><div class="bgblob"></div>${media}</div></div>`;
}
const crumbs = (p, isMod) => `<div class="crumbs"><a href="#home">Home</a><span>/</span><span>${isMod ? '<a href="#thinklab">ThinkLab</a> / ' : ''}${p.name}</span></div>`;


/* =====================================================================
   MOTION SCENES — looping product animations (Crelio-style "videos")
   Built in HTML/CSS and played by assets/js/main.js: every element with
   data-at="ms" switches on at that moment, the scene holds, fades and
   loops. Scenes play only while on screen; with reduced motion they show
   their finished state. Labels describe confirmed ThinkWide features.
   ===================================================================== */
const chip = (x, y, at, icon, t, cls = '') => `<span class="sc-chip ${cls}" style="left:${x}%;top:${y}%" data-at="${at}"><span class="ico">${ic(icon, 13)}</span>${t}</span>`;
const branch = (paths) => `<svg class="sc-lines" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true">${paths.map(([d, at]) => `<path d="${d}" pathLength="1" data-at="${at}"/>`).join('')}</svg>`;
const SCENES = {
  // ThinkLab: hub branching to the lab journey
  thinklab: () => `<div class="scene" data-loop="7600" aria-hidden="true">
  ${branch([['M124 100 C166 100 166 42 212 42', 200], ['M124 100 L212 100', 1400], ['M124 100 C166 100 166 158 212 158', 2600]])}
  <div class="sc-hub" style="left:22.5%;top:50%"><span class="ico">${ic('flask', 24)}</span><small>ThinkLab</small></div>
  ${chip(53, 21, 800, 'users', 'Patient registered')}${chip(53, 50, 2000, 'plug', 'Results received')}${chip(53, 79, 3200, 'chat', 'Report delivered', 'solid')}
 </div>`,
  // ThinkRay: DICOM study scanned, reported, delivered
  thinkray: () => `<div class="scene" data-loop="7600" aria-hidden="true">
  <div class="sc-film" data-at="100"><img src="assets/img/xray-film.webp" alt=""><i class="sc-scan"></i><span class="sc-tag">DICOM</span></div>
  <div class="sc-list" style="left:50%;top:50%;width:44%">
   <div class="sc-row" data-at="900"><span class="ck">${ic('check', 12)}</span>Study shared in DICOM</div>
   <div class="sc-row" data-at="2200"><span class="ck">${ic('check', 12)}</span>Report processed</div>
   <div class="sc-row strong" data-at="3500"><span class="ck">${ic('check', 12)}</span>QR-coded report sent</div>
  </div></div>`,
  // ThinkDigital: a patient search that finds your centre
  thinkdigital: () => `<div class="scene" data-loop="8200" aria-hidden="true">
  <div class="sc-search" data-at="0"><span class="ico">${ic('search', 14)}</span><span data-type="diagnostic centre near me" data-at="200"></span><i class="sc-caret"></i></div>
  <div class="sc-results">
   <div class="sc-res hit" data-at="2400"><b>Your Diagnostic Centre</b><small>yourcentre.in · Blood tests · Home collection</small></div>
   <div class="sc-res" data-at="2700"><b></b><small></small></div>
   <div class="sc-res" data-at="2900"><b></b><small></small></div>
  </div>
  ${chip(65, 28, 3600, 'search', 'SEO')}${chip(65, 50, 4100, 'target', 'Google Ads')}${chip(65, 72, 4600, 'mega', 'Social', 'solid')}
 </div>`,
  // Inventory: designation-wise access + link to QC
  inventory: () => `<div class="scene" data-loop="7600" aria-hidden="true">
  <div class="sc-card" style="left:50%;top:46%;width:62%">
   ${['Lab Manager', 'Inventory Manager', 'Supervisor', 'Technician'].map((r, i) => `<div class="sc-row" data-at="${400 + i * 700}"><span class="ico">${ic('users', 13)}</span>${r}<span class="sc-tog"></span></div>`).join('')}
   <div class="sc-meter" data-at="3400"><span>Connected to Quality Control</span><i style="--w:100%"></i></div>
  </div></div>`,
  // Quality Control: two data sources into the Quality portal
  'quality-control': () => `<div class="scene" data-loop="7600" aria-hidden="true">
  ${branch([['M150 58 C210 58 220 100 268 100', 900], ['M150 142 C210 142 220 100 268 100', 1900]])}
  ${chip(5, 29, 200, 'db', 'Data from ThinkLab')}${chip(5, 71, 1300, 'file', 'Manual QC entry')}
  <div class="sc-hub" style="left:77%;top:50%"><span class="ico">${ic('qc', 24)}</span><small>Quality</small></div>
  ${chip(44, 88, 3000, 'check', 'Ready for review', 'solid')}
 </div>`,
  // Smart Report: results settle on their ranges, trend draws
  'smart-report': () => `<div class="scene" data-loop="7600" aria-hidden="true">
  <div class="sc-card" style="left:50%;top:50%;width:70%">
   ${[['Haemoglobin', 'Low', 16, 'warn'], ['WBC count', 'Normal', 52, 'ok'], ['HbA1c', 'High', 86, 'crit']].map(([n, l, p, c], i) => `<div class="sc-res2" data-at="${400 + i * 800}"><b>${n}</b><span class="sc-range"><i style="--p:${p}%" class="m-${c}"></i></span><span class="pill p-${c}">${l}</span></div>`).join('')}
   <div class="sc-trend" data-at="3000"><svg viewBox="0 0 120 30" aria-hidden="true"><polyline points="4,25 40,19 80,12 116,5" pathLength="1"/></svg><small>Result history</small></div>
  </div><span class="sc-demo">Sample data</span></div>`,
  // Online Prescription: a prescription filling in
  'online-prescription': () => `<div class="scene" data-loop="8200" aria-hidden="true">
  <div class="sc-card rx" style="left:50%;top:48%;width:68%">
   <div class="sc-rxh"><span class="ico">${ic('rx', 16)}</span><b>Digital prescription</b></div>
   <div class="sc-rxrow" data-at="300"><span data-type="Tab. [Medicine A] 500 mg" data-at="300"></span><em data-at="1900">1-0-1</em><em data-at="2200">30 days</em></div>
   <div class="sc-rxrow" data-at="2700"><span data-type="Tab. [Medicine B]" data-at="2700"></span><em data-at="3900">0-0-1</em><em data-at="4200">30 days</em></div>
  </div>${chip(60, 86, 4900, 'check', 'Prescription ready', 'solid')}</div>`,
  // dark workflow cards
  steps4: () => `<div class="scene dk" data-loop="7000" aria-hidden="true"><div class="sc-steps">${['Patient', 'Investigations', 'Billing', 'Clinical'].map((s, i) => `<div class="sc-step" data-at="${300 + i * 900}"><span class="n">0${i + 1}</span><span class="b">${ic(['users', 'flask', 'card', 'file'][i], 20)}</span><small>${s}</small></div>${i < 3 ? `<i class="sc-arr" data-at="${750 + i * 900}"></i>` : ''}`).join('')}</div></div>`,
  analyzer: () => `<div class="scene dk" data-loop="7000" aria-hidden="true">
  ${branch([['M150 100 L200 100 L200 52 L248 52', 600], ['M150 100 L248 100', 1500], ['M150 100 L200 100 L200 148 L248 148', 2400]])}
  <div class="sc-box" style="left:28%;top:50%"><span class="ico">${ic('flask', 30)}</span></div>
  ${chip(63, 26, 1100, 'plug', 'Received', 'ghost')}${chip(63, 50, 2000, 'shield', 'Verified', 'ghost')}${chip(63, 74, 2900, 'check', 'Approved', 'ghost')}
 </div>`,
  whatsapp: () => `<div class="scene dk" data-loop="7600" aria-hidden="true"><div class="sc-chat">
  <div class="msg" data-at="400">Hello, your report from <b>Your Lab Name</b> is ready.</div>
  <div class="file" data-at="1500"><span class="pdf">PDF</span><span><b>Lab report</b>QR-coded</span></div>
  <div class="typing" data-at="2600"><i></i><i></i><i></i></div>
  <div class="msg me" data-at="3600">Thank you!</div></div></div>`,
  dicom: () => `<div class="scene dk" data-loop="7000" aria-hidden="true">
  ${branch([['M150 100 L248 100', 700]])}
  <div class="sc-box img" style="left:24%;top:50%"><img src="assets/img/xray-film.webp" alt=""><i class="sc-scan"></i></div>
  <div class="sc-box" style="left:72%;top:50%" data-at="1500"><span class="ico">${ic('users', 28)}</span></div>
  ${chip(42, 22, 1100, 'scan', 'DICOM', 'ghost')}${chip(56, 84, 2400, 'globe', 'Remote reporting', 'ghost')}
 </div>`,
  qrsend: () => `<div class="scene dk" data-loop="7000" aria-hidden="true">
  <div class="sc-doc" data-at="300"><i></i><i></i><i></i><i class="s"></i><span class="qr" data-at="1300">${ic('scan', 22)}</span></div>
  ${branch([['M228 100 L262 100', 2000]])}
  ${chip(66, 50, 2600, 'chat', 'Sent online', 'ghost')}
 </div>`,
  ads: () => `<div class="scene dk" data-loop="7600" aria-hidden="true"><div class="sc-ad" data-at="300"><small>Sponsored</small><b>Your Diagnostic Centre</b><span>Book a test · Home collection available</span><em data-at="1500">Call now</em></div>${chip(58, 84, 2500, 'target', 'Google Ads', 'ghost')}</div>`,
  social: () => `<div class="scene dk" data-loop="7600" aria-hidden="true"><div class="sc-post" data-at="300"><div class="ph"><span class="ico">${ic('flask', 22)}</span></div><b>Health check-up camp this Sunday</b><div class="re"><span data-at="1500">${ic('chat', 14)}</span><span data-at="1900">${ic('users', 14)}</span><span data-at="2300">${ic('arrow', 14)}</span></div></div>${chip(58, 84, 3000, 'mega', 'Social media', 'ghost')}</div>`,
  seo: () => `<div class="scene dk" data-loop="8200" aria-hidden="true"><div class="sc-search dk" data-at="0"><span class="ico">${ic('search', 14)}</span><span data-type="blood test near me" data-at="200"></span><i class="sc-caret"></i></div><div class="sc-results"><div class="sc-res hit" data-at="2200"><b>Your Diagnostic Centre</b><small>Search result</small></div><div class="sc-res" data-at="2500"><b></b><small></small></div></div></div>`
};
const scene = k => SCENES[k] ? SCENES[k]() : '';
const darkCards = (items) => `<div class="mcards">${items.map(([k, b, t]) => `<div class="mcard"><div class="media dk-media">${scene(k)}</div><p><b>${b}</b> ${t}</p></div>`).join('')}</div>`;
function ecosystem() {
  const big = [['thinklab', 'Lab software'], ['thinkray', 'Radiology software'], ['thinkdigital', 'Marketing services']], mods = ['inventory', 'quality-control', 'smart-report', 'online-prescription'];
  return `<div class="eco3">${big.map(([k, tag]) => { const p = P[k]; return `<a class="ecard c-${p.c}" href="#${k}"><div class="phead"><span class="pico">${ic(p.icon, 20)}</span><b>${p.name}</b><span class="ptag">${tag}</span></div>${scene(k)}<p>${p.lead.split('. ')[0]}.</p><span class="link">${p.kind === 'digital' ? 'See marketing services' : 'Explore ' + p.name} ${ic('arrow', 17)}</span></a>` }).join('')}</div>
 <div class="eco4">${mods.map(k => { const p = P[k]; return `<a class="ecard sm c-${p.c}" href="#${k}"><div class="phead"><span class="pico">${ic(p.icon, 18)}</span><b>${p.name}</b></div>${scene(k)}<span class="link">Learn more ${ic('arrow', 16)}</span></a>` }).join('')}</div>`;
}


/* ---------- integration wheel (Crelio-style rotating orbit) ----------
   Pills travel along two circular arcs: up the left side, down the right.
   Inner ring = core ThinkWide integrations; outer ring = connected modules
   and capabilities. All labels are confirmed ThinkWide capabilities. */
const WHEEL = {
  il: ['Lab analyzers', 'Meta WhatsApp API', 'Payment gateway', 'UPI payment links', 'Patient app', 'Doctor app'],
  ir: ['DICOM', 'Collector app', 'CSV data exports', 'Smart Report', 'Custom APIs', 'ThinkRay'],
  ol: ['Inventory', 'Quality Control', 'Online Prescription', 'QR-coded reports', 'Bulk report printing', 'Online report search'],
  or: ['Finance dashboard', 'MIS reports', 'Multi-branch', 'Home collection', 'User access control', 'Online booking']
};
function wheel() {
  const all = [...WHEEL.il, ...WHEEL.ir, ...WHEEL.ol, ...WHEEL.or]; return `<div class="helix" data-helix aria-label="ThinkWide integrations">
 <svg class="hx-svg" aria-hidden="true"><g class="hx-rungs"></g><path class="hx-strand s0"/><path class="hx-strand s1"/></svg>
 ${all.map((t, i) => `<span class="hx-pill" data-i="${i}">${t}</span>`).join('')}
 <div class="hx-core"><img src="assets/img/logo.webp" alt="ThinkWide"><small>One connected record</small></div>
 <ul class="sr">${all.map(t => `<li>${t}</li>`).join('')}</ul>
</div>`;
}


/* ---------- competitor comparison (public sources, Nov 2026) ----------
   y = listed, p = partly, - = not listed in the sources checked.
   Column order: ThinkLab, Flabs, Drlogy, Healthray, LabMate, ITDOSE.
   Sources: drlogy.com/pathology-lab-software; healthray.com (LIMS page);
   capterra.com/p/10009573/Flabs; sourceforge.net (Flabs); techjockey.com
   listings for Drlogy Lab, Healthray LIMS, Lab Mate (Busysoft) and
   ITDOSE Innopath LIMS. Re-check before each update. */
const COMP = {
  cols: ['ThinkLab', 'Flabs', 'Drlogy', 'Healthray', 'LabMate', 'ITDOSE'], rows: [
    ['Cloud-based', 'yyyyyy'],
    ['Billing & invoicing', 'y-yyyy'],
    ['Home collection management', 'y-p-p-'],
    ['Patient app', 'ypy-p-'],
    ['Doctor app / portal', 'y-y---'],
    ['Analyzer interfacing', 'y-yby-'.replace('b', 'p')],
    ['WhatsApp report delivery', 'yyy---'],
    ['QR-coded reports', 'y-y---'],
    ['Smart / trend reports', 'yyy-p-'],
    ['Online payments', 'yypy--'],
    ['Multi-branch management', 'y-yy--'],
    ['Finance dashboard & MIS reports', 'ypyyy-'],
    ['Inventory', 'yyppy-'],
    ['Quality control', 'yyppyy'],
    ['Online prescription for doctors', 'y-----'],
    ['Radiology reporting', 'yyyy--'],
    ['Healthcare digital marketing services', 'y-----']]
};
(() => { const R = Object.fromEntries(COMP.rows); const G = [['Core lab operations', ['Cloud-based', 'Billing & invoicing', 'Analyzer interfacing', 'Quality control', 'Inventory', 'Multi-branch management', 'Finance dashboard & MIS reports']], ['Patient & doctor experience', ['Home collection management', 'Patient app', 'Doctor app / portal', 'Online prescription for doctors', 'WhatsApp report delivery', 'QR-coded reports', 'Smart / trend reports', 'Online payments']], ['Beyond the lab', ['Radiology reporting', 'Healthcare digital marketing services']]]; COMP.groups = G.map(([g, n]) => [g, n.map(x => [x, R[x]])]); })();

/* ===================== PAGES ===================== */
function renderHome() {
  const L = P.thinklab, R = P.thinkray, D = P.thinkdigital; return `
<section class="hero"><div class="hero-bg" role="img" aria-label="Lab technician working at a diagnostic laboratory bench"></div>
 <div class="hero-deco" aria-hidden="true"><span class="orb o1"></span><span class="orb o2"></span><span class="orb o3"></span><span class="hdots"></span>
  <svg class="ecg" viewBox="0 0 1440 120" preserveAspectRatio="none"><defs><linearGradient id="ecgG" x1="0" x2="1"><stop offset="0" stop-color="#017AF7" stop-opacity="0"/><stop offset=".25" stop-color="#017AF7"/><stop offset=".75" stop-color="#5CB0FF"/><stop offset="1" stop-color="#5CB0FF" stop-opacity="0"/></linearGradient></defs>
  <path class="ecg-base" d="M0 70 H300 L320 70 L335 40 L350 100 L365 20 L382 90 L396 70 H640 L660 70 L672 50 L686 92 L700 30 L716 84 L730 70 H1000 L1020 70 L1034 44 L1048 98 L1062 24 L1078 88 L1092 70 H1440"/>
  <path class="ecg-run" pathLength="1" d="M0 70 H300 L320 70 L335 40 L350 100 L365 20 L382 90 L396 70 H640 L660 70 L672 50 L686 92 L700 30 L716 84 L730 70 H1000 L1020 70 L1034 44 L1048 98 L1062 24 L1078 88 L1092 70 H1440"/></svg>
 </div>
 <div class="wrap hero-inner">
  <div class="hero-left"><span class="hero-pill"><b>ThinkWide</b> <span class="hp-w" style="--k:0">Lab</span> · <span class="hp-w" style="--k:1">Radiology</span> · <span class="hp-w" style="--k:2">Digital marketing</span></span>
   <h1 class="hero-h1"><span class="hw" style="--i:0">Technology</span> <span class="hw" style="--i:1">for</span> <em><span class="hw" style="--i:2">Modern</span> <span class="hw" style="--i:3">Diagnostic</span> <span class="hw" style="--i:4">Healthcare</span></em></h1>
   <div class="hero-right"><p>ThinkWide connects laboratories, healthcare professionals and patients through smarter digital workflows. ThinkLab runs your diagnostic lab, ThinkRay brings radiology reporting online, and ThinkDigital helps healthcare brands reach more patients.</p>
   <div class="btn-row"><a class="btn btn-light" href="#demo">Book a free demo</a><a class="btn btn-white-o" href="#home" data-target="products">Explore our solutions</a></div></div></div>
 </div>
 <div class="hero-float" aria-hidden="true">
  <div class="hf hf1"><div class="hf-top"><span class="hf-ic">${ic('card', 16)}</span><span><b>Today's collection</b><small>13 invoices · sample data</small></span></div><div class="hf-num">₹62,000</div><div class="hf-bars">${[38, 52, 44, 60, 56, 72, 66, 84, 96].map((h, i) => `<i style="--h:${h}%;--d:${i}"></i>`).join('')}</div></div>
  <div class="hf hf2"><div class="hf-top"><span class="hf-ic ok">${ic('check', 16)}</span><span><b>Report sent on WhatsApp</b><small>QR-coded · approved by pathologist</small></span></div></div>
  <div class="hf hf4"><div class="tk-head"><span class="tk-live"></span>ThinkLab · live activity</div><div class="tk-stage"><div class="tk-item" data-tk><span class="hf-ic">${ic('card', 16)}</span><span><b>Online booking received</b><small>Patient booked a test online</small></span></div><div class="tk-item" data-tk><span class="hf-ic">${ic('truck', 16)}</span><span><b>Home collection assigned</b><small>Collector app · patient address shared</small></span></div><div class="tk-item" data-tk><span class="hf-ic">${ic('barcode', 16)}</span><span><b>Sample received</b><small>Barcode scanned at the lab</small></span></div><div class="tk-item" data-tk><span class="hf-ic">${ic('rupee', 16)}</span><span><b>UPI payment link sent</b><small>Paid online · dues cleared</small></span></div><div class="tk-item" data-tk><span class="hf-ic">${ic('file', 16)}</span><span><b>Smart Report generated</b><small>Results with history and highlights</small></span></div><div class="tk-item" data-tk><span class="hf-ic">${ic('bell', 16)}</span><span><b>Critical value flagged</b><small>Sent to the pathologist for review</small></span></div></div><div class="tk-dots"><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
  <div class="hf hf3"><div class="hf-top"><span class="hf-ic">${ic('plug', 16)}</span><span><b data-st>Analyzer results received</b><small data-sts>Ready for verification</small></span></div><div class="hf-prog"><i></i></div></div>
 </div>
 <div class="hero-trustbar"><div class="wrap"><p>${STATS.labs} labs &amp; centres now using ThinkWide</p>
  <div class="badges">${[['cloud', 'Cloud-based', 'Lab management software'], ['chat', 'WhatsApp API', 'Automated patient updates'], ['shield', 'Your data, your control', 'Clear data-processing terms'], ['pin', 'Built in India', 'Head office in Kolkata']].map(([i, t, s]) => `<span class="badge"><span class="ico">${ic(i, 20)}</span><span>${t}<small>${s}</small></span></span>`).join('')}</div></div></div>
</section>

<section class="band-black statement-band platform glow-bottom"><div class="wrap">
 <p class="statement">Your lab shouldn't run on registers, printouts and phone calls. <span>It should run on one connected system your whole team can trust.</span></p>
 <div class="platform-vis">
  <div class="browser pv-main"><div class="browser-bar"><span class="dots"><i></i><i></i><i></i></span><span class="browser-url">ThinkLab · Finance dashboard</span></div><img src="assets/img/shot-dashboard.webp" alt="ThinkLab finance dashboard showing today's collection, payments received and invoice summary"></div>
  <div class="pv-phone"><img src="assets/img/finance-mobile.webp" alt="ThinkLab finance dashboard on a mobile phone"></div>
  <div class="glass pv-c1"><div class="row"><b>Report sent on WhatsApp</b></div><div class="muted" style="margin-top:4px;font-size:.8rem">Automated patient updates through the Meta WhatsApp Business API</div></div>
  <div class="glass pv-c2"><div class="row"><b>Critical value flagged</b></div><div class="muted" style="margin-top:4px;font-size:.8rem">Abnormal and critical values highlighted for review</div></div>
 </div>
 <div class="platform-nav">${[['thinklab', 'ThinkLab', 'Lab management software', 'lab'], ['thinkray', 'ThinkRay', 'Radiology reporting & teleradiology', 'ray'], ['thinkdigital', 'ThinkDigital', 'Healthcare digital marketing', 'dig']].map(([k, n, d, c]) => `<a class="pn c-${c}" href="#${k}"><span class="pn-dot"></span><span><b>${n}</b><small>${d}</small></span>${ic('arrow', 16)}</a>`).join('')}</div>
</div></section>

<section class="strip"><div class="wrap"><p>Labs and diagnostic centres that run on ThinkWide</p><div class="marquee"><div class="logos" data-clients data-loop></div></div></div></section>

<section class="sec tint" id="products"><div class="wrap">
 <div class="sec-head center"><span class="eyebrow">The ThinkWide ecosystem</span><h2>Three offerings.<br><em>One connected platform.</em></h2><p class="lead">ThinkLab and ThinkRay run your laboratory and radiology workflows, with modules for inventory, quality, smart reports and prescriptions. ThinkDigital is our healthcare marketing service.</p></div>
 ${ecosystem()}
</div></section>

<section class="sec"><div class="wrap">
 <div class="sec-head center"><span class="eyebrow">ThinkLab · Lab management software</span><h2>Everything your lab does,<br><em>in one connected workflow</em></h2><p class="lead">${L.solution.p}</p></div>
 <div class="bento">
  <div class="bcard s4 wide"><span class="kicker">${ic('card', 15)} Registration &amp; billing</span><h3>Book, bill and collect payment on one screen.</h3><p>Four steps: Patient, Investigations, Billing and Clinical. Find returning patients by UHID, name, mobile or national ID, and send a UPI payment link.</p>
   <div class="bvis"><img src="assets/img/shot-register.webp" alt="ThinkLab diagnostic booking screen" loading="lazy"></div></div>
  <div class="bcard s2 feature"><span class="kicker">${ic('file', 15)} Reports</span><h3>QR-coded reports.</h3><p>Your lab's format and branding, with a QR code for verification.</p>
   <div class="rep-stage"><div class="rep-paper"><img src="assets/img/report.webp" alt="ThinkLab lab report with QR code" loading="lazy"></div>
    <div class="rep-badge"><span class="qr">${ic('scan', 18)}</span><span><b>QR verified</b><small>Scan to confirm the source</small></span></div>
    <div class="rep-pills"><span>${ic('check', 13)}Your branding</span><span>${ic('check', 13)}Sent online</span></div></div></div>
  <div class="bcard s2"><span class="kicker">${ic('plug', 15)} Machine interfacing</span><h3>Results straight from the analyzer.</h3><p>Compatible analyzers send results directly into ThinkLab.</p>
   <div class="bvis"><div class="flowline"><span class="node"><span class="ico">${ic('flask', 18)}</span>Analyzer</span><span class="dash"></span><span class="node"><span class="ico">${ic('db', 18)}</span>ThinkLab</span></div></div></div>
  <div class="bcard s2"><span class="kicker">${ic('chat', 15)} WhatsApp</span><h3>Automated patient updates.</h3><p>Through the Meta WhatsApp Business API.</p>
   <div class="bvis"><div class="wa"><div class="msg">Your report from <b>Your Lab Name</b> is ready.</div><div class="file"><span class="pdf">PDF</span><span><b>Lab report</b>QR-coded</span></div></div></div></div>
  <div class="bcard s2"><span class="kicker">${ic('barcode', 15)} Sample tracking</span><h3>See every sample's status.</h3><p>Received and pending collection, by invoice and container.</p>
   <div class="bvis"><div style="display:flex;gap:6px;flex-wrap:wrap">${pill('Received', 'ok')}${pill('Pending collection', 'info')}</div></div></div>
 </div>
 ${midCTA('See ThinkLab running with your own tests, branches and report format.', 'Explore ThinkLab').replace('href="#demo"', 'href="#thinklab"')}
</div></section>

<section class="sec blue" style="padding-top:0"><div class="wrap">
 <div class="head-split"><div><span class="eyebrow">Take a tour</span><h2>Real ThinkLab screens,<br>not mock-ups</h2></div><p class="lead">These are the screens your front desk, technicians and managers use every day. Pick one to explore it, or book a walkthrough with your own data.</p></div>
 <div class="tour-tabs" role="tablist" aria-label="ThinkLab screens">${TOUR.map(([k, t], i) => `<button class="tour-tab" role="tab" id="tt-${k}" aria-selected="${i === 0}" aria-controls="tour-stage" data-tour="${k}">${t}</button>`).join('')}</div>
 <div class="tour-stage" id="tour-stage">${TOUR.map(([k, t, src, cap], i) => `<div role="tabpanel" aria-labelledby="tt-${k}" data-tour-panel="${k}"${i ? ' hidden' : ''}>${shot(src, 'ThinkLab ' + t + ' screen', t)}<p class="tour-cap">${cap}</p></div>`).join('')}</div>
 <div class="btn-row" style="justify-content:center;margin-top:28px;align-items:center"><span class="muted">Prefer a guided walkthrough?</span><a class="btn btn-primary" href="#demo">Book a demo</a></div>
</div></section>

<section class="sec band-black glow-top"><div class="wrap">
 <div class="head-split"><div><span class="eyebrow">Exceptional lab operations</span><h2>Let your team focus<br>on the right things</h2></div><p><b>Less typing, fewer calls, faster reports.</b> ThinkLab takes repetitive work off the front desk and the bench, so your team can focus on quality and patients.</p></div>
 ${darkCards([['steps4', 'Book in four clear steps.', 'Patient, Investigations, Billing and Clinical, with returning patients found by UHID, name or mobile.'], ['analyzer', 'Let the analyzers do the typing.', 'Compatible analyzers send results to ThinkLab, where they are verified and approved by your team.'], ['whatsapp', 'Reports reach patients on WhatsApp.', 'Automated patient updates through the Meta WhatsApp Business API, with QR-coded reports.']])}
</div></section>

<section class="sec tint"><div class="wrap">
 <div class="frow c-ray">
  <div class="ftext"><span class="eyebrow">ThinkRay · Radiology</span><h2>Radiology reports,<br>processed and delivered digitally</h2><p class="lead">${R.lead}</p>
   <ul>${R.sections.map(s => `<li>${ck}<span>${s.k}</span></li>`).join('')}</ul>
   <div class="btn-row" style="margin-top:10px"><a class="btn btn-primary" href="#thinkray">Explore ThinkRay ${ic('arrow', 16)}</a><a class="btn btn-ghost" href="#demo">Book a demo</a></div></div>
  <div class="fmedia"><div class="bgblob"></div><img src="assets/img/mock-thinkray.webp" alt="Radiologist reviewing DICOM images with ThinkRay" loading="lazy" style="filter:drop-shadow(0 30px 50px rgba(11,37,71,.25))"></div>
 </div>
</div></section>

<section class="sec"><div class="wrap">
 <div class="sec-head center"><span class="eyebrow">One platform</span><h2>One platform.<br><em>Three ways it changes your day.</em></h2></div>
 <div class="rolecards">${[['team-1.webp', 'See the whole business', 'For Lab Owners', 'Today\'s collection, payments and dues on the finance dashboard and on your phone, MIS reports, and every branch and collection centre on one system.'], ['scientist.webp', 'Control every report', 'For Lab Managers', 'Sample tracking, daily worksheets, report settings for each department, result verification, and report unlock requests for changes after approval.'], ['hazmat.webp', 'Faster front desk', 'For Front Desk &amp; Billing', 'Four-step booking, patient search by UHID or mobile, home collection bookings, concessions and dues, and UPI payment links.']].map(([img, k, t, d]) => `<article class="rolecard"><img src="assets/img/${img}" alt="" loading="lazy"><span class="rk">${k}</span><div class="rb"><h3>${t}</h3><p>${d}</p></div></article>`).join('')}</div>
</div></section>

<section class="sec tint"><div class="wrap">
 <div class="sec-head center"><span class="eyebrow">Workflow overview</span><h2>From registration<br>to the delivered report</h2></div>
 <div class="flow-wrap"><div class="flow-toggle" role="group" aria-label="Choose workflow"><button aria-pressed="true" data-flow="lab">Laboratory</button><button aria-pressed="false" data-flow="ray">Radiology</button></div></div>
 <div id="flow-stage"><div data-flow-panel="lab">${steps(L.steps, 'lab')}</div><div data-flow-panel="ray" hidden>${steps(R.steps, 'ray', 'grid-template-columns:repeat(5,1fr)')}</div></div>
</div></section>

<section class="sec"><div class="wrap">
 <div class="head-split"><div><span class="eyebrow">Connected apps</span><h2>For patients, doctors<br>and home collectors</h2></div><p class="lead">Apps that work on the same ThinkLab record, so everyone involved in a test sees the same information.</p></div>
 <div class="grid3">${APPS.map(a => `<div class="tile"><span class="tic">${ic(a[0], 22)}</span><h3>${a[1]}</h3><p>${a[2]}</p></div>`).join('')}</div>
</div></section>

<section class="sec band-black" style="padding-bottom:0"><div class="wrap">
 <div class="sec-head center"><span class="eyebrow">Integrations</span><h2>Connected to the machines,<br>channels and apps you use</h2><p class="lead">Analyzers, WhatsApp, payments and data exports for ThinkLab, and DICOM-based teleradiology for ThinkRay.</p></div>
 ${wheel()}
 <p style="text-align:center;padding-block:28px 88px;position:relative"><a class="btn btn-light" href="#integrations">See all integrations ${ic('arrow', 17)}</a></p>
</div></section>

<section class="sec band-black cloud-band"><div class="cloud-bg" aria-hidden="true"></div><div class="wrap">
 <div class="head-split"><div><h2>Built for the cloud.<br>Ready for every branch.</h2></div><p>Paper registers and software installed on one computer keep your data in one room. ThinkLab is cloud-based, so every branch, collection centre and manager works from the same live system.</p></div>
 <div class="compare">
  <div class="cmp old"><h3>${ic('file', 18)} Paper and local systems</h3><ul>${['Results copied by hand from analyzer printouts', 'Each branch keeps its own records', 'Reports printed and collected in person', 'Owners wait for end-of-day numbers', 'Backups depend on someone remembering'].map(x => `<li><span class="x">${ic('close', 13)}</span>${x}</li>`).join('')}</ul></div>
  <div class="cmp new"><h3>${ic('check', 18)} ThinkLab</h3><ul>${['Compatible analyzers send results directly', 'Branches and collection centres on one system', 'QR-coded reports sent online and on WhatsApp', 'Finance dashboard on desktop and phone', 'Automated daily backups'].map(x => `<li><span class="y">${ic('check', 13)}</span>${x}</li>`).join('')}</ul></div>
 </div>
</div></section>

<section class="sec"><div class="wrap">
 <div class="sec-head center"><span class="eyebrow">Service &amp; data commitments</span><h2>Clear about your data.<br><em>Clear about our support.</em></h2><p class="lead">Your lab's patient, billing, clinical and operational records remain your data. ThinkWide processes them on your instructions, under your agreement and applicable Indian law, including the Digital Personal Data Protection Act, 2023.</p></div>
 <div class="grid3">${[['users', 'User access control', 'Set who can see and do what, for every role in your lab.'], ['lock', 'Controlled report changes', 'Report unlock requests govern edits after a report is approved.'], ['db', 'Automated daily backups', 'Published recovery targets for minor, major and catastrophic failures.'], ['shield', 'Clear data roles', 'Your lab is the data fiduciary for patient workflows; ThinkWide is the processor.'], ['file', 'Clinicians decide', 'Diagnosis, report verification and approval stay with your licensed professionals.'], ['card', 'Data export on exit', 'Structured CSV exports of financial, doctor, patient, collector and B2B data.']].map(([i, t, d]) => `<div class="tile"><span class="tic">${ic(i, 22)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>
 <div class="commit light"><div><b>99%</b><small>annual ThinkLab uptime commitment, excluding scheduled maintenance</small></div><div><b>1 hour</b><small>first human response for a validated P1 critical ticket</small></div><div><b>4–6 hrs</b><small>target restoration for P1 incidents</small></div><div><b>7–15 days</b><small>working-day target for structured data export on exit</small></div></div>
 <p class="muted" style="text-align:center;margin-top:16px;font-size:.86rem">Published targets. Your signed agreement and SLA take precedence. <a class="link" href="#support" style="font-size:.86rem">Support terms</a></p>
</div></section>

<section class="sec tint"><div class="wrap">
 <div class="frow rev c-dig">
  <div class="ftext"><span class="eyebrow">ThinkDigital · Marketing services</span><h2>Help more patients<br>find your centre</h2><p class="lead">${D.lead}</p>
   <ul>${D.services.map(s => `<li>${ck}<span>${s[1]}</span></li>`).join('')}</ul>
   <div class="btn-row" style="margin-top:10px"><a class="btn btn-primary" href="#thinkdigital">See marketing services ${ic('arrow', 16)}</a></div></div>
  <div class="fmedia"><div class="bgblob"></div><img src="assets/img/digital-rocket.webp" alt="" loading="lazy" style="max-height:440px;width:auto;margin:0 auto"></div>
 </div>
</div></section>

<section class="sec"><div class="wrap">
 <div class="sec-head center"><span class="eyebrow">Who we serve</span><h2>Built for every kind of<br>diagnostic business</h2></div>
 <div class="grid3">${[['flask', 'Individual diagnostic labs', 'ThinkLab for registration, billing, reporting and WhatsApp delivery.', 'lab'], ['branch', 'Multi-branch networks', 'Branches, collection centres, users and workflows on one platform.', 'lab'], ['home', 'Home collection services', 'The Collector app for assigned collections, barcodes, payments and handover.', 'lab'], ['building', 'Hospital laboratories', 'Lab workflows, report settings and verification in one system.', 'lab'], ['scan', 'X-ray clinics & imaging centres', 'ThinkRay for digital reporting and DICOM-based teleradiology.', 'ray'], ['mega', 'Healthcare brands', 'ThinkDigital for SEO, social media and Google Ads.', 'dig']].map(([i, t, d, c]) => `<div class="tile c-${c}"><span class="tic">${ic(i, 22)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>
</div></section>

<section class="sec tint"><div class="wrap">
 <div class="sec-head center"><span class="eyebrow">Customer stories</span><h2>Hear from labs<br>that use ThinkWide</h2></div>
 ${testimonialsHTML(3)}
 <p style="text-align:center;margin-top:32px"><a class="btn btn-ghost" href="#testimonials">All customer stories ${ic('arrow', 17)}</a></p>
</div></section>

<section class="sec"><div class="wrap split">
 <div style="display:grid;gap:16px;align-content:start"><span class="eyebrow">FAQs</span><h2>Questions labs ask<br>before switching</h2><p class="lead">Can't find your answer? Call us on +91 93306 87508.</p><a class="link" href="#faqs">All FAQs ${ic('arrow', 17)}</a></div>
 ${faqHTML(L.faq.slice(0, 5))}
</div></section>

<section class="pcta"><div class="pcta-bg" aria-hidden="true"></div><div class="wrap">
 <h2>See how ThinkWide fits the way your centre works</h2>
 <p>Share a few details and our team will walk you through the ThinkLab or ThinkRay workflows that matter to you.</p>
 <div class="btn-row" style="justify-content:center"><a class="btn btn-light" href="#demo">Book a free demo</a><a class="btn btn-white-o" href="#contact">Talk to our team</a></div>
</div></section>`;
}

/* ---------- ThinkLab & ThinkRay: rich product landing pages ---------- */
function renderRich(k) {
  const p = P[k]; const half = Math.ceil(p.sections.length / 2); return `
<section class="phero c-${p.c}"><div class="wrap">
 <div class="phero-copy">${crumbs(p)}
  <img class="phero-logo" src="assets/img/${LOGO[k]}" alt="${p.name}">
  <h1>${p.title}</h1><p class="lead">${p.lead}</p>
  <div class="btn-row"><a class="btn btn-primary" href="#demo">Book a free demo ${ic('arrow', 17)}</a><a class="btn btn-ghost" href="#${k}" data-target="features">Explore features</a></div>
 </div>
 <div class="phero-media"><img class="prodimg" src="assets/img/${p.heroImg}" alt="${p.name}"></div>
</div></section>

<section class="strip"><div class="wrap"><p>Labs and diagnostic centres that run on ThinkWide</p><div class="marquee"><div class="logos" data-clients data-loop></div></div></div></section>

<section class="sec"><div class="wrap">
 <div class="sec-head center"><span class="eyebrow">The challenge</span><h2>What slows ${k === 'thinklab' ? 'diagnostic labs' : 'radiology teams'} down</h2></div>
 <div class="grid${p.challenges.length === 4 ? 4 : 3}">${p.challenges.map(([t, d], i) => `<div class="tile"><span class="tic" style="background:var(--blue);color:#fff;font-weight:700">${i + 1}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>
</div></section>

<section class="sec band-black glow-bottom"><div class="wrap">
 <div class="sec-head center"><span class="eyebrow">The ${p.name} solution</span><h2>${p.solution.h}</h2><p class="lead">${p.solution.p}</p></div>
 ${darkCards(p.trio)}
 <div style="height:64px"></div>
 <div style="max-width:1060px;margin:0 auto;position:relative">${p.solution.img ? shot(p.solution.img, p.name + ' ' + p.solution.url, p.solution.url) : `<div class="team-photo" style="aspect-ratio:16/8;max-width:900px;margin:0 auto"><img src="assets/img/${p.solution.photo}" alt="" loading="lazy" style="object-fit:contain;background:#fff"></div>`}</div>
 <div class="platform-nav pn${Math.min(4, p.sections.length)}">${p.sections.slice(0, 4).map((s, i) => `<a class="pn c-${p.c}" href="#f-${i + 1}"><span class="pn-dot"></span><span><b>${s.k}</b></span>${ic('arrow', 16)}</a>`).join('')}</div>
</div></section>

<section class="sec" id="features"><div class="wrap">
 ${p.sections.slice(0, half).map((s, i) => featureRow(s, i, p.c)).join('')}
 ${midCTA('See ' + p.name + ' with your own workflow, live with our team.')}
</div></section>

${p.sections.length > half ? `<section class="sec tint"><div class="wrap">${p.sections.slice(half).map((s, i) => featureRow(s, i + half, p.c)).join('')}${midCTA('Have a question about ' + p.name + '? Our team will walk you through it.', 'Talk to our team').replace('href="#demo"', 'href="#contact"')}</div></section>` : ''}

<section class="sec"><div class="wrap">
 <div class="sec-head center"><span class="eyebrow">Workflow</span><h2>How ${p.name} works,<br>step by step</h2></div>
 ${steps(p.steps, p.c, p.steps.length === 5 ? 'grid-template-columns:repeat(5,1fr)' : '')}
</div></section>

${p.apps ? `<section class="sec tint" id="apps-sec"><div class="wrap">
 <div class="head-split"><div><span class="eyebrow">Connected apps &amp; modules</span><h2>For patients, doctors<br>and collectors</h2></div><p class="lead">Apps and modules that work with ThinkLab, so everyone involved in a test uses the same record.</p></div>
 <div class="grid3">${APPS.map(a => `<div class="tile"><span class="tic">${ic(a[0], 22)}</span><h3>${a[1]}</h3><p>${a[2]}</p></div>`).join('')}</div>
 <div class="grid4" style="margin-top:18px">${['smart-report', 'online-prescription', 'inventory', 'quality-control'].map(m => `<a class="tile c-${P[m].c}" href="#${m}"><span class="tic">${ic(P[m].icon, 22)}</span><h3>${P[m].name}</h3><span class="link" style="color:var(--pc)">Learn more ${ic('arrow', 16)}</span></a>`).join('')}</div>
</div></section>`: ''}

<section class="sec band-black"><div class="wrap">
 <div class="sec-head center"><span class="eyebrow">Integrations</span><h2>${p.name} integration capabilities</h2></div>
 <div class="grid${p.ints.length % 3 === 0 ? 3 : 4}">${p.ints.map(([i, t, d]) => `<div class="tile"><span class="tic">${ic(i, 22)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>
 <p style="text-align:center;margin-top:36px"><a class="btn btn-light" href="#integrations">All integrations ${ic('arrow', 17)}</a></p>
</div></section>

<section class="sec"><div class="wrap">
 <div class="sec-head center"><span class="eyebrow">Who it's for</span><h2>Built for</h2></div>
 <div class="modality">${p.uses.map(u => `<span>${u}</span>`).join('')}</div>
</div></section>

<section class="sec tint"><div class="wrap">
 <div class="sec-head center"><span class="eyebrow">Customer stories</span><h2>What ${p.name} customers say</h2></div>${testimonialsHTML(3, p.name)}
</div></section>

<section class="sec"><div class="wrap split">
 <div style="display:grid;gap:16px;align-content:start"><span class="eyebrow">FAQs</span><h2>${p.name} questions</h2><p class="lead">Still have questions? Call +91 93306 87508.</p><a class="btn btn-primary" href="#demo" style="justify-self:start">Book a demo</a></div>${faqHTML(p.faq)}
</div></section>
${ctaBlock('See ' + p.name + ' in action')}`;
}

/* ---------- ThinkDigital: marketing-services landing page ---------- */
function renderDigital() {
  const p = P.thinkdigital; return `
<section class="phero c-dig"><div class="wrap">
 <div class="phero-copy">${crumbs(p)}
  <img class="phero-logo" src="assets/img/thinkdigital-logo.webp" alt="ThinkDigital">
  <h1>${p.title}</h1><p class="lead">${p.lead}</p>
  <div class="btn-row"><a class="btn btn-primary" href="#thinkdigital" data-target="book">Request a consultation ${ic('arrow', 17)}</a><a class="btn btn-ghost" href="#thinkdigital" data-target="services">Our services</a></div>
 </div>
 <div class="phero-media"><img class="prodimg" src="assets/img/digital-marketer.webp" alt="ThinkDigital marketing specialist"></div>
</div></section>

<section class="sec"><div class="wrap">
 <div class="sec-head center"><span class="eyebrow">The challenge</span><h2>Why healthcare brands<br>struggle online</h2></div>
 <div class="grid3">${p.challenges.map(([t, d], i) => `<div class="tile"><span class="tic" style="background:var(--blue);color:#fff;font-weight:700">${i + 1}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>
</div></section>

<section class="sec band-black glow-bottom" id="services"><div class="wrap">
 <div class="sec-head center"><span class="eyebrow">Our services</span><h2>Marketing services<br>for the medical sector</h2><p class="lead">Strategic online marketing designed to help your laboratory or healthcare business reach its full potential.</p></div>
 ${darkCards([['seo', 'Be found in search.', 'SEO and keyword research for the services and areas your patients search for.'], ['ads', 'Appear when patients are looking.', 'Google Ads campaigns for your tests and services.'], ['social', 'Stay visible and consistent.', 'Social media content and campaigns for your healthcare brand.']])}
 <div style="height:56px"></div>
 <div class="grid3">${p.services.map(([i, t, d]) => `<div class="tile"><span class="tic">${ic(i, 22)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}<div class="tile" style="background:linear-gradient(160deg,#2878C8,#1B5A9C);border-color:transparent"><h3>Not sure where to start?</h3><p style="color:#DCEBFA">Tell us about your centre and goals, and we'll suggest where to focus first.</p><a class="btn btn-light" href="#thinkdigital" data-target="book" style="justify-self:start">Request a consultation</a></div></div>
</div></section>

<section class="sec"><div class="wrap">
 <div class="frow c-dig"><div class="ftext"><span class="eyebrow">Why ThinkDigital</span><h2>A marketing team that understands diagnostics</h2><p class="lead">ThinkDigital is part of ThinkWide, the company behind ThinkLab and ThinkRay. We work with the medical sector every day, so we understand how diagnostic centres, labs and healthcare brands win patients.</p>
  <ul>${['Focused on healthcare and diagnostic businesses', 'Part of ThinkWide Digital Health, Kolkata', 'SEO, social media and Google Ads under one team', 'Website development available as a separate project'].map(x => `<li>${ck}<span>${x}</span></li>`).join('')}</ul></div>
  <div class="fmedia"><div class="bgblob"></div><img src="assets/img/digital-rocket.webp" alt="" loading="lazy" style="max-height:460px;width:auto;margin:0 auto"></div></div>
</div></section>

<section class="sec tint"><div class="wrap">
 <div class="sec-head center"><span class="eyebrow">How we work</span><h2>Our approach</h2></div>
 ${steps(p.steps, 'dig', 'grid-template-columns:repeat(4,1fr)')}
 ${midCTA('Ready to grow your healthcare brand online?', 'Request a consultation').replace('href="#demo"', 'href="#thinkdigital" data-target="book"')}
</div></section>

<section class="sec"><div class="wrap">
 <div class="sec-head center"><span class="eyebrow">Who we work with</span><h2>Healthcare businesses we help</h2></div>
 <div class="modality">${p.uses.map(u => `<span>${u}</span>`).join('')}</div>
</div></section>

<section class="sec tint"><div class="wrap">
 <div class="sec-head center"><span class="eyebrow">Client stories</span><h2>What our marketing clients say</h2></div>${testimonialsHTML(3, 'ThinkDigital')}
</div></section>

<section class="sec"><div class="wrap split">
 <div style="display:grid;gap:16px;align-content:start"><span class="eyebrow">FAQs</span><h2>ThinkDigital questions</h2><p class="lead">Call us on +91 93306 87508.</p></div>${faqHTML(p.faq)}
</div></section>
${ctaBlock('Let\'s grow your healthcare brand', 'Tell us about your centre and goals, and the ThinkDigital team will get in touch.', 'marketing')}`;
}

/* ---------- module pages ---------- */
function renderModule(k) {
  const p = P[k]; return `
<section class="phero c-${p.c}"><div class="wrap">
 <div class="phero-copy">${crumbs(p, true)}<span class="eyebrow">${p.name} · ThinkLab module</span><h1>${p.title}</h1><p class="lead">${p.lead}</p>
  <div class="btn-row"><a class="btn btn-primary" href="#demo">Book a demo ${ic('arrow', 17)}</a><a class="btn btn-ghost" href="#thinklab">About ThinkLab</a></div></div>
 <div class="phero-media">${scene(k).replace('class="scene"', 'class="scene scene-lg"')}</div>
</div></section>
<section class="sec"><div class="wrap">
 <div class="sec-head center"><span class="eyebrow">Capabilities</span><h2>What ${p.name} does</h2></div>
 <div class="grid${p.points.length === 4 ? 4 : 3}">${p.points.map(([i, t, d]) => `<div class="tile"><span class="tic">${ic(i, 22)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>
 <p class="muted" style="text-align:center;margin-top:22px">${p.note}</p>
</div></section>
<section class="sec tint"><div class="wrap split">
 <div style="display:grid;gap:16px;align-content:start"><span class="eyebrow">FAQs</span><h2>${p.name} questions</h2></div>${faqHTML(p.faq)}
</div></section>
${ctaBlock('See ' + p.name + ' with your lab\'s workflow')}`;
}
function renderProduct(k) { const p = P[k]; return p.kind === 'rich' ? renderRich(k) : p.kind === 'digital' ? renderDigital() : renderModule(k); }

function renderSolutions() {
  const rows = [['Patient registration & billing', 1, 0, 0], ['Home collection & Collector app', 1, 0, 0], ['Sample tracking & worksheets', 1, 0, 0], ['Machine interfacing (compatible analyzers)', 1, 0, 0], ['Report settings & result verification', 1, 0, 0], ['QR-coded reports', 1, 1, 0], ['Online report delivery', 1, 1, 0], ['WhatsApp patient updates', 1, 0, 0], ['Smart Report', 1, 0, 0], ['Finance dashboard & MIS reports', 1, 0, 0], ['Multi-branch & collection centres', 1, 0, 0], ['Patient & Doctor apps', 1, 0, 0], ['Online Prescription', 1, 0, 0], ['Inventory & Quality Control portals', 1, 0, 0], ['DICOM-based teleradiology', 0, 1, 0], ['Digital radiology report processing', 0, 1, 0], ['SEO & keyword research', 0, 0, 1], ['Google Ads', 0, 0, 1], ['Social media marketing', 0, 0, 1], ['Website development (project-based)', 0, 0, 1]];
  const yn = v => v ? `<td class="c yes">${ic('check', 18)}<span class="sr">Yes</span></td>` : `<td class="c no">–</td>`;
  return `<section class="page-hero"><div class="wrap">${'<div class="crumbs"><a href="#home">Home</a><span>/</span><span>Solutions</span></div>'}<span class="eyebrow">Solutions</span><h1>Solutions for labs, radiology and healthcare brands</h1><p class="lead">See which ThinkWide offering fits each part of your business.</p>
<div class="anchor-nav">${[['matrix', 'Compare with others'], ['usecases', 'Use cases'], ['types', 'Types of centre']].map(([t, l]) => `<a class="chip" href="#solutions" data-target="${t}">${l}</a>`).join('')}</div></div></section>
<section class="sec cmpsec" id="matrix"><div class="wrap">
 <div class="head-split"><div><span class="eyebrow">Compare</span><h2>How ThinkLab<br><em>compares</em></h2></div><p class="lead">ThinkLab's features side by side with what five other lab software products list publicly. ThinkLab is the only one here that also comes with a healthcare marketing team.</p></div>
 <div class="cx-cards">${[['flask', 'One connected platform', 'Registration to report, finance, inventory and quality in one cloud system.'], ['users', 'Built for patients and doctors', 'Patient, Doctor and Collector apps, with online prescriptions and WhatsApp reports.'], ['mega', 'Growth, not just software', 'Radiology with ThinkRay and marketing with ThinkDigital, from the same team.']].map(([i, h, p]) => `<div class="cx-card"><span class="tic">${ic(i, 22)}</span><div><h3>${h}</h3><p>${p}</p></div></div>`).join('')}</div>
 <div class="cx-legend"><span><span class="cy">${ic('check', 12)}</span>Listed</span><span><span class="cp">Partly</span>Partly listed</span><span><span class="cn">–</span>Not listed in sources checked</span></div>
 <div class="cxbox"><div class="cmpx" role="table" aria-label="ThinkLab compared with other lab software">
  <div class="cx-hl" aria-hidden="true" style="grid-row:1 / span ${COMP.groups.reduce((n, g) => n + 1 + g[1].length, 0) + 2}"></div>
  <div class="cx-row cx-head" role="row"><div class="cx-c cx-f" role="columnheader">Feature</div>${COMP.cols.map((c, i) => i ? `<div class="cx-c" role="columnheader">${c}</div>` : `<div class="cx-c cx-tl" role="columnheader"><img src="assets/img/thinklab-logo.webp" alt="ThinkLab"><small>by ThinkWide</small></div>`).join('')}</div>
  ${COMP.groups.map(([g, rows]) => `<div class="cx-row cx-group" role="row"><div class="cx-c" role="cell">${g}</div></div>${rows.map(r => `<div class="cx-row" role="row"><div class="cx-c cx-f" role="rowheader">${r[0]}</div>${r[1].split('').map((v, i) => `<div class="cx-c${i ? '' : ' cx-tl'}" role="cell">${v === 'y' ? `<span class="cy">${ic('check', 14)}</span><span class="sr">Listed</span>` : v === 'p' ? `<span class="cp">Partly</span>` : `<span class="cn">–</span><span class="sr">Not listed</span>`}</div>`).join('')}</div>`).join('')}`).join('')}
  <div class="cx-row cx-foot" role="row"><div class="cx-c cx-f" role="cell"></div><div class="cx-c cx-tl" role="cell"><a class="btn btn-light" href="#demo">Book a demo</a></div>${COMP.cols.slice(1).map(() => `<div class="cx-c" role="cell"></div>`).join('')}</div>
 </div></div>
 <p class="ct-note">Competitor information is taken from each product's public website and software-directory listings (Capterra, SourceForge, Techjockey) as checked in November 2026. "Not listed" means we did not find the feature in those sources; it does not mean the product lacks it. Product names belong to their owners. If you represent one of these products and see an error, <a class="link" href="#contact">tell us</a> and we will correct it.</p>
</div></section>

<section class="sec tint" id="usecases"><div class="wrap"><div class="sec-head"><span class="eyebrow">Common use cases</span><h2>Built for the way you work</h2></div>
<div class="grid3">${[['branch', 'Multi-branch labs', 'Branches, collection centres, users and workflows on one centralised platform.', 'thinklab'], ['home', 'Home collection', 'The Collector app for assigned collections, patient details, barcodes, payments and handover.', 'thinklab'], ['users', 'Patient experience', 'Online test booking, family profiles, report access, Smart Reports and WhatsApp updates.', 'thinklab'], ['phone', 'Doctor access', 'Patient reports, report history and digital prescriptions in the Doctor app.', 'online-prescription'], ['scan', 'Remote radiology reporting', 'DICOM-based teleradiology and online delivery of QR-coded reports.', 'thinkray'], ['mega', 'Patient acquisition', 'SEO, Google Ads and social media marketing from ThinkDigital.', 'thinkdigital']].map(([i, t, d, l]) => `<a class="tile" href="#${l}"><span class="tic">${ic(i, 22)}</span><h3>${t}</h3><p>${d}</p></a>`).join('')}</div></div></section>
<section class="sec" id="types"><div class="wrap"><div class="sec-head"><span class="eyebrow">Types of centre</span><h2>Which ThinkWide offering fits you?</h2></div>
<div class="tbox"><table class="ftable"><thead><tr><th>Centre</th><th>Suggested starting point</th><th>Why</th></tr></thead><tbody>
<tr><td><b>Individual diagnostic lab</b></td><td>ThinkLab</td><td>Registration, billing, reporting and online delivery in one system.</td></tr>
<tr><td><b>Multi-branch network</b></td><td>ThinkLab with the Collector app</td><td>Branches and collection centres on one centralised platform.</td></tr>
<tr><td><b>Hospital laboratory</b></td><td>ThinkLab</td><td>Report settings, result verification and controlled report changes.</td></tr>
<tr><td><b>X-ray clinic or imaging centre</b></td><td>ThinkRay</td><td>Digital report processing and DICOM-based teleradiology.</td></tr>
<tr><td><b>Lab with an imaging wing</b></td><td>ThinkLab and ThinkRay</td><td>Pathology and radiology workflows from one company.</td></tr>
<tr><td><b>Clinic or healthcare brand</b></td><td>ThinkDigital</td><td>SEO, Google Ads and social media to reach more patients.</td></tr></tbody></table></div></div></section>
${ctaBlock('Find the right fit for your centre')}`;
}

function renderIntegrations() {
  return `<section class="page-hero"><div class="wrap"><div class="crumbs"><a href="#home">Home</a><span>/</span><span>All integrations</span></div><span class="eyebrow">All integrations</span><h1>Machines, messaging, payments and data, connected</h1><p class="lead">ThinkLab connects to compatible analyzers and the channels your patients use. ThinkRay uses DICOM-based teleradiology.</p>
<div class="anchor-nav"><a class="chip" href="#integrations" data-target="machines">Machine interface</a><a class="chip" href="#integrations" data-target="software">Software integrations</a></div></div></section>
<section class="sec band-black" style="padding-top:24px"><div class="wrap">${wheel()}</div></section>
<section class="sec" id="machines"><div class="wrap">
 <div class="frow c-lab"><div class="ftext"><span class="eyebrow">Machine interface</span><h2>Results from compatible analyzers, straight into ThinkLab</h2><p class="lead">ThinkLab supports interfacing with compatible laboratory analyzers, so test results flow directly into the lab workflow and repetitive manual data entry is reduced.</p>
  <ul>${['Results arrive in ThinkLab without retyping', 'Fewer transcription errors', 'Compatibility confirmed for your make and model'].map(x => `<li>${ck}<span>${x}</span></li>`).join('')}</ul></div>
  <div class="fmedia"><div class="bgblob"></div><div class="team-photo" style="aspect-ratio:4/3"><img src="assets/img/hazmat.webp" alt="" loading="lazy"></div></div></div>
 <div class="tile" style="margin-top:56px">
  <h3>Supported analyzer list</h3>
  <div data-machines><p>Our verified analyzer list will be published here. Tell us the make and model you use and our team will confirm compatibility.</p></div>
  <form class="form" id="mcheck" style="padding:0;border:0;background:none;box-shadow:none;margin-top:6px"><div class="field"><label for="mc-make">Analyzer make</label><input id="mc-make" placeholder="Manufacturer"></div><div class="field"><label for="mc-model">Model</label><input id="mc-model" placeholder="Model name or number"></div><div class="full btn-row"><button class="btn btn-primary" type="submit">Check compatibility</button></div></form>
 </div>
</div></section>
<section class="sec tint" id="software"><div class="wrap">
 <div class="sec-head"><span class="eyebrow">Software integrations</span><h2>Messaging, payments, imaging and data</h2></div>
 <div class="grid3">${[['chat', 'Meta WhatsApp Business API', 'Automated patient updates and report delivery from ThinkLab.'], ['card', 'Payment gateway', 'Collect payments online, including UPI payment links sent from the booking screen.'], ['scan', 'DICOM (ThinkRay)', 'DICOM-based teleradiology for radiology reporting.'], ['users', 'Patient, Doctor & Collector apps', 'Connected apps that work on the same ThinkLab record.'], ['db', 'Structured data exports', 'CSV exports of financial, doctor, patient, collector and B2B data.'], ['plug', 'Custom integrations', 'API integrations and custom work, scoped and quoted as a project.']].map(([i, t, d]) => `<div class="tile"><span class="tic">${ic(i, 22)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>
</div></section>${ctaBlock('Check your machines and systems')}`;
}


function renderAbout() {
  return `<section class="page-hero"><div class="wrap"><div class="crumbs"><a href="#home">Home</a><span>/</span><span>About us</span></div><span class="eyebrow">About ThinkWide</span><h1 style="font-size:clamp(2rem,3.8vw,3.2rem)">We build technology for better diagnostic healthcare</h1><p class="lead">Thinkwide Digital Health Pvt. Ltd. is a Kolkata-based healthcare technology company, incorporated in 2022. We make software for diagnostic labs and imaging centres, and run digital marketing for healthcare brands.</p></div></section>
<section class="sec"><div class="wrap split" style="align-items:center"><div class="team-photo"><img src="assets/img/office.webp" alt="ThinkWide office entrance in Sector V, Kolkata" loading="lazy"></div><div style="display:grid;gap:16px"><span class="eyebrow">Our mission</span><h2>Make every diagnostic centre run like the best one in its city.</h2><p class="lead">Accurate reports, delivered fast, explained clearly, from a business that knows its numbers.</p>
<div class="why-list">${[['flask', 'What we offer', 'ThinkLab for diagnostics, ThinkRay for radiology and ThinkDigital for healthcare marketing, with connected apps and modules.'], ['users', 'People', 'Product, implementation, support and marketing teams working from Sector V, Kolkata.'], ['pin', 'Where we are', 'Head office at SDF Building, Sector V, Bidhannagar, Kolkata.']].map(([i, t, d]) => `<div>${ic(i, 22)}<div><h3>${t}</h3><p>${d}</p></div></div>`).join('')}</div></div></div></section>
<section class="sec tint"><div class="wrap"><div class="sec-head"><span class="eyebrow">What we value</span><h2>How we work with labs</h2></div><div class="grid4">${[['Clinical respect', 'Software supports clinicians; it never replaces their judgement.'], ['Plain answers', 'Clear pricing, clear support levels, clear data terms.'], ['On the ground', 'We visit labs, sit at the front desk and fix what slows them down.'], ['Long-term partners', 'Most improvements come from customer requests.']].map(([t, d]) => `<div class="tile"><h3>${t}</h3><p>${d}</p></div>`).join('')}</div></div></section>
<section class="sec"><div class="wrap"><div class="tile" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px"><div><b class="muted" style="font-size:.8rem">Registered name</b><div>Thinkwide Digital Health Pvt. Ltd.</div></div><div><b class="muted" style="font-size:.8rem">CIN</b><div class="mono">U72900WB2022PTC259381</div></div><div><b class="muted" style="font-size:.8rem">Head office</b><div>SDF Building, 4th Floor, Module 529, GP Block, Sector V, Bidhannagar, Kolkata 700091</div></div></div></div></section>${ctaBlock()}`;
}

function contactCards() {
  return `<div class="contact-list">
<div>${ic('phone', 22)}<div><b>Sales &amp; support</b><a class="sel" href="tel:+919330687508">+91 93306 87508</a></div><button class="copy" data-copy="+91 9330687508">Copy</button></div>
<div>${ic('mail', 22)}<div><b>Email</b><a class="sel" href="mailto:accounts@thinkwide.in">accounts@thinkwide.in</a></div><button class="copy" data-copy="accounts@thinkwide.in">Copy</button></div>
<div>${ic('pin', 22)}<div><b>Head office</b><span>SDF Building, 4th Floor, Module 529, GP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091</span><div style="margin-top:6px"><a class="link" target="_blank" rel="noopener" href="https://maps.google.com/?q=ThinkWide+Digital+Pvt+Ltd+Sector+V+Kolkata">Open in Google Maps ${ic('arrow', 15)}</a></div></div></div>
<div>${ic('clock', 22)}<div><b>Support hours</b><span>Mon–Fri 10:00–19:00 · Sat 10:00–16:00 IST</span></div></div></div>`;
}
function renderContact() {
  return `<section class="page-hero"><div class="wrap"><div class="crumbs"><a href="#home">Home</a><span>/</span><span>Contact us</span></div><span class="eyebrow">Contact us</span><h1 style="font-size:clamp(2rem,3.8vw,3.2rem)">Talk to the ThinkWide team</h1><p class="lead">Sales questions, support or partnerships. Call, email or send us a message.</p></div></section>
<section class="sec"><div class="wrap split">${contactCards()}
<form class="form" id="contact-form"><div class="field"><label for="c-name">Name</label><input id="c-name" required></div><div class="field"><label for="c-phone">Phone</label><input id="c-phone" required inputmode="tel"></div><div class="field full"><label for="c-email">Email</label><input id="c-email" type="email"></div><div class="field full"><label for="c-topic">Topic</label><select id="c-topic"><option>Sales enquiry</option><option>Existing customer support</option><option>Partnership</option><option>Media</option></select></div><div class="field full"><label for="c-msg">Message</label><textarea id="c-msg" rows="4"></textarea></div><div class="full"><button class="btn btn-primary" type="submit">Send message</button></div><p class="note full">Please don't send patient reports, passwords or OTPs through this form.</p></form>
</div></section>
<section class="sec tint" style="padding-block:0"><iframe class="map" title="ThinkWide office on Google Maps" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.277858307096!2d88.4295430758719!3d22.568708833111884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873870e9ed2b857d%3A0x29323a5195d97eef!2sThinkWide%20Digital%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1776405079261!5m2!1sen!2sin"></iframe></section>`;
}
function renderDemo() {
  return `<section class="page-hero"><div class="wrap"><div class="crumbs"><a href="#home">Home</a><span>/</span><span>Book a demo</span></div><span class="eyebrow">Book a demo</span><h1 style="font-size:clamp(2rem,3.8vw,3.2rem)">See ThinkWide running on your own workflow</h1><p class="lead">Share a few details and a product specialist will set up a walkthrough around your tests, branches and report format.</p></div></section>
<section class="sec"><div class="wrap split"><div style="display:grid;gap:22px;align-content:start"><h2 style="font-size:1.6rem">What happens next</h2>${steps([['We contact you', 'Our team gets in touch to understand your centre.'], ['Demo', 'A walkthrough of the workflows that matter to you.'], ['Next steps', 'We discuss configuration, onboarding and data migration.']], 'brand', 'grid-template-columns:1fr;gap:22px')}${contactCards()}</div>${demoForm('demo-main')}</div></section>`;
}
function renderCareers() {
  return `<section class="page-hero"><div class="wrap"><div class="crumbs"><a href="#home">Home</a><span>/</span><span>Careers</span></div><span class="eyebrow">Careers</span><h1 style="font-size:clamp(2rem,3.8vw,3.2rem)">Build software that labs use every day</h1><p class="lead">Join the ThinkWide team in Sector V, Kolkata, building software and marketing that diagnostic labs, radiology teams and patients rely on.</p></div></section>
<section class="sec" style="padding-bottom:0"><div class="wrap grid2"><div class="team-photo"><img src="assets/img/team-1.webp" alt="ThinkWide team at an office event" loading="lazy"></div><div class="team-photo"><img src="assets/img/team-2.webp" alt="ThinkWide team celebrating together" loading="lazy"></div></div></section>
<section class="sec"><div class="wrap"><div class="sec-head"><span class="eyebrow">Teams we hire for</span><h2>Where you could fit</h2></div><div class="grid4">${[['flask', 'Implementation & support', 'Configure labs, interface analyzers and train staff.'], ['globe', 'Product engineering', 'Web, mobile and integration work on ThinkLab and ThinkRay.'], ['target', 'Sales', 'Work with diagnostic labs and imaging centres.'], ['mega', 'Digital marketing', 'SEO, ads and content for healthcare brands.']].map(([i, t, d]) => `<div class="tile"><span class="tic">${ic(i)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div></div></section>
<section class="sec tint"><div class="wrap split"><div style="display:grid;gap:14px;align-content:start"><h2>Send us your profile</h2><p class="lead">Current openings are posted on our LinkedIn page. You can also leave your details here.</p><a class="link" href="https://www.linkedin.com/company/thinkwide-diagnostic-management-solution/home/" target="_blank" rel="noopener">ThinkWide on LinkedIn ${ic('arrow', 16)}</a></div>
<form class="form" id="career-form"><div class="field"><label for="cr-name">Name</label><input id="cr-name" required></div><div class="field"><label for="cr-phone">Phone</label><input id="cr-phone" required></div><div class="field full"><label for="cr-team">Team</label><select id="cr-team"><option>Implementation &amp; support</option><option>Product engineering</option><option>Sales</option><option>Digital marketing</option></select></div><div class="field full"><label for="cr-link">LinkedIn or portfolio link</label><input id="cr-link"></div><div class="full"><button class="btn btn-primary" type="submit">Submit</button></div></form></div></section>`;
}
function renderTestimonials() {
  return `<section class="page-hero"><div class="wrap"><div class="crumbs"><a href="#home">Home</a><span>/</span><span>Testimonials</span></div><span class="eyebrow">Testimonials</span><h1 style="font-size:clamp(2rem,3.8vw,3.2rem)">What our customers say</h1><p class="lead">Video and written stories from labs, imaging centres and healthcare brands that run on ThinkWide.</p></div></section>
<section class="strip"><div class="wrap"><p>Labs and centres using ThinkWide</p><div class="logos" data-clients></div></div></section>
<section class="sec"><div class="wrap"><div class="sec-head"><span class="eyebrow">Video &amp; written stories</span><h2>In their words</h2></div>${testimonialsHTML()}</div></section>
<section class="sec tint"><div class="wrap"><div class="sec-head"><span class="eyebrow">Share your story</span><h2>Using ThinkWide? We'd like to feature you.</h2><p class="lead">Tell us what changed at your centre. We'll write it up with you and publish only after your approval.</p></div><a class="btn btn-primary" href="#contact">Get in touch</a></div></section>`;
}
function renderSupport() {
  const pr = [['P1 · Critical', 'Complete outage, core operations inaccessible, or major billing failure with no workaround', 'Within 1 hour', '4–6 hours', 'crit'], ['P2 · Significant', 'A major function unavailable, operations continue in part', 'Within 4 business hours', '1 business day', 'warn'], ['P3 · Less significant', 'Secondary feature issue or one with a reasonable workaround', 'Within 1 business day', '2–3 business days', 'info'], ['P4 · Minimal', 'Cosmetic or informational issue', 'Within 2 business days', '5 business days', 'mute']];
  return `<section class="page-hero"><div class="wrap"><div class="crumbs"><a href="#home">Home</a><span>/</span><span>Support &amp; SLA</span></div><span class="eyebrow">Support &amp; SLA</span><h1 style="font-size:clamp(2rem,3.8vw,3.2rem)">Support you can plan around</h1><p class="lead">Published hours, priority levels and response targets for registered customers. Your signed SLA takes precedence where it differs.</p></div></section>
<section class="sec"><div class="wrap"><div class="grid3">${[['clock', 'Support hours', 'Mon–Fri 10:00 am – 7:00 pm IST\nSaturday 10:00 am – 4:00 pm IST\nSundays, holidays and after-hours as per your support order.'], ['phone', 'How to reach us', 'Call +91 93306 87508 or email support. Share account, facility, time, symptoms and business impact.'], ['users', 'Escalation', 'Support executive → technical lead → senior technical management → management.']].map(([i, t, d]) => `<div class="tile"><span class="tic">${ic(i)}</span><h3>${t}</h3><p style="white-space:pre-line">${d}</p></div>`).join('')}</div>
<div class="sec-head" style="margin-top:56px"><span class="eyebrow">Priority levels</span><h2>Response and resolution targets</h2></div>
<div class="tbox"><table class="ftable"><thead><tr><th>Priority</th><th>Meaning</th><th>First response</th><th>Target resolution</th></tr></thead><tbody>${pr.map(r => `<tr><td>${pill(r[0], r[4])}</td><td>${r[1]}</td><td><b>${r[2]}</b></td><td>${r[3]}</td></tr>`).join('')}</tbody></table></div>
<p class="muted" style="margin-top:14px;font-size:.88rem;max-width:80ch">"First response" means a person from support contacting you with a triage plan, not an automated receipt. "Resolution" means core function restored or a workaround in place. Targets depend on timely reporting and cooperation and are governed by your signed SLA.</p></div></section>`;
}
function renderFaqs() {
  return `<section class="page-hero"><div class="wrap"><div class="crumbs"><a href="#home">Home</a><span>/</span><span>FAQs</span></div><span class="eyebrow">FAQs</span><h1 style="font-size:clamp(2rem,3.8vw,3.2rem)">Frequently asked questions</h1></div></section>
${[['thinklab', 'lab'], ['thinkray', 'ray'], ['thinkdigital', 'dig']].map(([k, c], i) => `<section class="sec ${i % 2 ? 'tint' : ''}"><div class="wrap split"><div style="display:grid;gap:12px;align-content:start"><span class="eyebrow" style="color:var(--${c})">${P[k].name}</span><h2>${P[k].name} ${P[k].tag}</h2><a class="link" href="#${k}">Product page ${ic('arrow', 16)}</a></div>${faqHTML(P[k].faq)}</div></section>`).join('')}
<section class="sec tint"><div class="wrap split"><div style="display:grid;gap:12px;align-content:start"><span class="eyebrow">Company &amp; data</span><h2>Contracts, data and support</h2></div>${faqHTML([['Who owns the patient data?', 'Your lab does. Patient, billing and clinical records in your account remain your data; ThinkWide processes them on your instructions.'], ['What happens if we stop using ThinkWide?', 'Structured CSV exports of financial, doctor, patient, collector and B2B data are provided, with a published target of 7–15 working days. Download patient PDF reports before deactivation.'], ['What are your support hours?', 'Monday to Friday 10:00–19:00 and Saturday 10:00–16:00 IST. Critical (P1) tickets get a first human response within one hour during support hours.'], ['How are refunds handled?', 'Requests are made in writing within seven calendar days of payment and reviewed against your order terms. See the Refund & Cancellation policy.']])}</div></section>`;
}
function renderLegal() {
  const pol = [['privacy', 'Privacy Policy', 'How ThinkWide collects and uses business, website and support data, and our role as processor for patient records held by labs.'], ['terms', 'Terms of Use & Services', 'Website use, software licence, customer responsibilities, clinical responsibility, fees and governing law.'], ['rights', 'Data Protection & Privacy Rights', 'Rights available under the Digital Personal Data Protection Act, 2023, and where to send requests.'], ['cookies', 'Cookie Policy', 'Cookies and similar technologies used on this website and the choices available.'], ['retention', 'Data Retention & Deletion', 'Retention by record type, erasure requests, backups and exit exports.'], ['security', 'Information Security Statement', 'Security governance principles and incident cooperation with customers.'], ['refund', 'Refund & Cancellation', 'Seven-day request window, review process and refund timelines.'], ['grievance', 'Grievance Redressal & Privacy Contact', 'How to raise a complaint and how patient-record requests are routed to your lab.'], ['dpa', 'Data Processing & Service Commitment', 'Data ownership, processing on instructions, backups, uptime and exit handover.'], ['support-terms', 'Terms of Support', 'Support hours, priority levels and escalation.']];
  return `<section class="page-hero"><div class="wrap"><div class="crumbs"><a href="#home">Home</a><span>/</span><span>Policies</span></div><span class="eyebrow">Policies &amp; legal</span><h1 style="font-size:clamp(2rem,3.8vw,3.2rem)">Policies and legal terms</h1><p class="lead">The full text of each policy is published here once approved. Your signed agreement with ThinkWide takes precedence over these general terms.</p></div></section>
<section class="sec"><div class="wrap"><div class="grid2">${pol.map(([id, t, d]) => `<div class="tile" id="${id}"><span class="tic">${ic('shield')}</span><h3>${t}</h3><p>${d}</p>${id === 'support-terms' ? `<a class="link" href="#support">Read the support terms ${ic('arrow', 16)}</a>` : `<span class="chip" style="justify-self:start">Full text publishing soon</span>`}</div>`).join('')}</div>
<div class="tile" style="margin-top:24px"><h3>Questions about privacy or a complaint?</h3><p>Write to ThinkWide at SDF Building, 4th Floor, Module 529, GP Block, Sector V, Bidhannagar, Kolkata 700091, or call +91 93306 87508. If your question is about a lab report, please contact the lab that issued it; we'll help them respond.</p></div></div></section>`;
}

const ROUTES = { home: renderHome, solutions: renderSolutions, integrations: renderIntegrations, about: renderAbout, contact: renderContact, demo: renderDemo, careers: renderCareers, testimonials: renderTestimonials, support: renderSupport, faqs: renderFaqs, legal: renderLegal };
Object.keys(P).forEach(k => ROUTES[k] = () => renderProduct(k));
const NAVMAP = { home: 'home', thinklab: 'product', thinkray: 'product', thinkdigital: 'product', inventory: 'product', 'quality-control': 'product', 'smart-report': 'product', 'online-prescription': 'product', solutions: 'solutions', about: 'company', contact: 'company', careers: 'company', testimonials: 'testimonials', integrations: 'integrations', support: 'more', faqs: 'more', legal: 'more' };

/* ---------- page metadata (title + meta description) ---------- */
const META = {
  home: ['ThinkWide Digital Health | Lab Software, Radiology Reporting & Healthcare Marketing', 'ThinkWide builds ThinkLab (cloud lab management software) and ThinkRay (digital radiology reporting and teleradiology), and runs ThinkDigital, healthcare digital marketing for diagnostic centres and healthcare brands.'],
  solutions: ['Solutions for Labs, Imaging Centres & Healthcare Brands | ThinkWide', 'Compare ThinkLab, ThinkRay and ThinkDigital features by department, use case and type of diagnostic centre.'],
  integrations: ['Analyzer Interfacing, WhatsApp API & Payment Integrations | ThinkWide', 'Connect compatible lab analyzers, the Meta WhatsApp Business API, payment gateways and data exports to ThinkLab, and use DICOM-based teleradiology with ThinkRay.'],
  about: ['About ThinkWide Digital Health | Kolkata Healthcare Technology Company', 'Thinkwide Digital Health Pvt. Ltd. builds software for diagnostic labs and imaging centres and runs digital marketing for healthcare brands.'],
  contact: ['Contact ThinkWide Digital Health | Kolkata', 'Call +91 93306 87508 or email accounts@thinkwide.in. Office: SDF Building, Sector V, Bidhannagar, Kolkata 700091.'],
  demo: ['Book a Demo | ThinkLab, ThinkRay & ThinkDigital', 'Book a 30-minute demo of ThinkWide set up around your test menu, branches and report format.'],
  careers: ['Careers at ThinkWide Digital Health', 'Join ThinkWide in Sector V, Kolkata: implementation, product engineering, sales and digital marketing roles.'],
  testimonials: ['Customer Testimonials | ThinkWide Digital Health', 'Video and written stories from labs, imaging centres and healthcare brands using ThinkWide.'],
  support: ['Support Hours & SLA | ThinkWide Digital Health', 'ThinkWide support hours, P1–P4 priority levels, response and resolution targets, and escalation path.'],
  faqs: ['FAQs | ThinkLab, ThinkRay & ThinkDigital', 'Answers to common questions about ThinkLab, ThinkRay, ThinkDigital, data ownership and support.'],
  legal: ['Policies & Legal Terms | ThinkWide Digital Health', 'Privacy, terms of use, data protection, cookies, retention, security, refund, grievance, data processing and support terms.']
};
Object.keys(P).forEach(k => { const p = P[k]; META[k] = [`${p.name} ${p.tag === 'ThinkLab module' ? '– ThinkLab Module' : p.tag} | ThinkWide`, p.lead.split('. ')[0] + '.']; });
META.thinklab[0] = 'ThinkLab – Cloud Lab Management Software (LIMS) for Diagnostics | ThinkWide';
META.thinkray[0] = 'ThinkRay – Digital Radiology Reporting & Teleradiology | ThinkWide';
META.thinkdigital[0] = 'ThinkDigital – Healthcare Digital Marketing: SEO, Google Ads & Social Media | ThinkWide';
module.exports = { ROUTES, NAVMAP, META, ic };
