// ===================== DATA =====================

const skills = [
  { cat:"📊 Data & Analytics", items:[{name:"SQL",pct:95},{name:"Data Visualization",pct:90},{name:"Python",pct:85},{name:"MS Excel",pct:85},{name:"Power BI",pct:80}] },
  { cat:"🤖 AI & Digital Tools", items:[{name:"Claude AI",pct:90},{name:"ChatGPT / Copilot",pct:85},{name:"Gemini",pct:82},{name:"Perplexity AI",pct:80},{name:"Julius AI",pct:78},{name:"Gamma",pct:78},{name:"FuturePedia",pct:75},{name:"Zoho Sheet",pct:72}] },
  { cat:"📦 Operations & Domain", items:[{name:"Godown / Inventory Mgmt",pct:92},{name:"QA Documentation",pct:85},{name:"E-Commerce Operations",pct:74},{name:"Digital Marketing",pct:70}] },
  { cat:"🎓 Academic — Programming", items:[{name:"Java",pct:88},{name:"Python",pct:85},{name:"C Language",pct:80},{name:"HTML",pct:75},{name:"CSS",pct:55},{name:"JavaScript",pct:50}] }
];

const experiences = [
  {
    role:"Godown Incharge", company:"Skylark Feeds Pvt. Ltd.", period:"2025 – Present",
    intro:"Skylark Feeds Pvt. Ltd. is a leading feed manufacturing company in India, specializing in high-quality animal feed products.",
    bullets:[
      "Coordinated with Sales teams, Production plant, and Corporate office to manage sales orders, dispatch schedules, and daily operational updates.",
      "Managed end-to-end godown operations, including stock receipt, storage, dispatch, and record maintenance.",
      "Implemented efficient stock management practices, optimized storage space, and ensured timely dispatch of products to customers.",
      "Supervised workers' activities, attendance tracking, and daily operational reporting."
    ]
  },
  {
    role:"Assistant QA", company:"AMN Life Science", period:"Aug 2024 – Jun 2025",
    intro:"AMN Life Science is a leading pharmaceutical company specializing in the manufacturing and distribution of high-quality pharmaceutical products.",
    bullets:[
      "Worked in the Quality Assurance department, handling and controlling critical documentation as per SOPs and quality guidelines.",
      "Managed QA documents including records, registers, and controlled documents with proper version control.",
      "Created and maintained Excel-based tracking sheets for documentation and reporting.",
      "Prepared documents for internal and external audits, ensuring accuracy and timely submission.",
      "Ensured data accuracy, compliance, and proper documentation practices, supporting operational efficiency."
    ]
  }
];

const projects = [
  { icon:"📊", title:"Power BI Sales Dashboard", desc:"Interactive marketing performance dashboard — Revenue (315M), ROI%, channel-wise analysis across Email, Facebook, LinkedIn & Google Ads.", tags:["Power BI","Data Viz","Marketing"], link:"https://github.com/vipinjha492/Marketing-Performance-Dashboard-" },
  { icon:"🐍", title:"Python EDA Projects", desc:"Exploratory Data Analysis on real-world datasets — data cleaning, trend analysis, and business insight generation.", tags:["Python","NumPy","Pandas","EDA"], link:null },
  { icon:"🗄️", title:"SQL Analytics Projects", desc:"Advanced SQL queries for customer segmentation, sales reporting, and business KPI analysis.", tags:["SQL","Analytics","Reporting"], link:null }
];

const educations = [
  { icon:"🎓", year:"2026 – Present", degree:"MBA (Business Analysis)", uni:"Amity University Online", note:"" },
  { icon:"💻", year:"2022 – 2025", degree:"Bachelor of Computer Applications", uni:"Aryabhatta Knowledge University", note:"First Class Distinction" },
  { icon:"🏫", year:"2019 – 2021", degree:"Higher Secondary School", uni:"T.N.B. Collegiate Inter School", note:"First Class Distinction" }
];

const aboutInfo = [
  {l:"Profile",v:"Data Analytics"},{l:"Domain",v:"Retail, E-Commerce, BFSI"},
  {l:"Current Address",v:"Kolkata, India"},{l:"Permanent Address",v:"Bihar, India"},
  {l:"Education",v:"BCA + MBA (pursuing)"},{l:"BI Tools",v:"Microsoft Power BI"},
  {l:"Language",v:"English, Hindi"},{l:"Other Skills",v:"AI Tools, Excel, Git, Digital Marketing"},
  {l:"Interest",v:"Traveling, Coding, AI Tools"}
];

const highlights = [
  {h:"📊 Data Analytics",p:"SQL 95%, Python 85%, Power BI, Excel — real datasets"},
  {h:"🏭 Operations Expert",p:"End-to-end godown & inventory management"},
  {h:"🤖 AI Proficient",p:"Claude, Gemini, Julius, Gamma, Perplexity, FuturePedia, Zoho Sheet & more!"},
  {h:"🎓 MBA in Progress",p:"Amity University Online — Business Analysis"},
  {h:"🌐 E-Commerce Focus",p:"Retail, BFSI, Digital Marketing domain"},
  {h:"💻 BCA Graduate",p:"Aryabhatta Knowledge University — First Class Distinction"}
];

const counters = [
  {n:30,l:"Projects 💼"},{n:20,l:"Achievements 🏆"},{n:1000,l:"Students Mentored 🎓"},{n:50,l:"AI Tools Used 🤖"}
];

// ===================== RENDER FUNCTIONS =====================

function renderNav() {
  const sections = ["home","about","skills","experience","projects","education","contact"];
  const links = sections.map(s => `<a onclick="scrollTo('${s}')">${s}</a>`).join('');
  document.getElementById('nav-links').innerHTML = links;
}

function renderAbout() {
  document.getElementById('about-info').innerHTML = aboutInfo.map(item =>
    `<div class="info-item"><div class="info-label">${item.l}</div><div class="info-value">${item.v}</div></div>`
  ).join('');

  document.getElementById('about-highlights').innerHTML = highlights.map(c =>
    `<div class="highlight-card"><h4>${c.h}</h4><p>${c.p}</p></div>`
  ).join('');
}

function renderSkills() {
  document.getElementById('skills-grid').innerHTML = skills.map(cat =>
    `<div class="skill-category fade-in">
      <div class="skill-cat-title">${cat.cat}</div>
      ${cat.items.map(s => `
        <div class="skill-item">
          <div class="skill-header"><span class="skill-name">${s.name}</span><span class="skill-pct">${s.pct}%</span></div>
          <div class="skill-bar"><div class="skill-fill" data-pct="${s.pct}" style="width:0%"></div></div>
        </div>`).join('')}
    </div>`
  ).join('');
}

function renderExperience() {
  document.getElementById('timeline').innerHTML = experiences.map(exp =>
    `<div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div class="timeline-role">${exp.role}</div>
          <div class="timeline-period">${exp.period}</div>
        </div>
        <div class="timeline-company">${exp.company}</div>
        <div class="timeline-intro">${exp.intro}</div>
        <ul class="timeline-bullets">${exp.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
      </div>
    </div>`
  ).join('');
}

function renderProjects() {
  document.getElementById('projects-grid').innerHTML = projects.map(p =>
    `<div class="project-card" ${p.link ? `onclick="window.open('${p.link}','_blank')" style="cursor:pointer"` : ''}>
      <div class="project-thumb">${p.icon}</div>
      <div class="project-body">
        <div class="project-title">${p.title}${p.link?" ↗":""}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-tags">${p.tags.map(t=>`<span class="project-tag">${t}</span>`).join('')}</div>
      </div>
    </div>`
  ).join('');
}

function renderCounters() {
  document.getElementById('counter-grid').innerHTML = counters.map(c =>
    `<div class="counter-item">
      <div class="counter-num"><span class="counter-val" data-target="${c.n}">0</span>+</div>
      <div class="counter-label">${c.l}</div>
    </div>`
  ).join('');
}

function renderEducation() {
  document.getElementById('edu-grid').innerHTML = educations.map(edu =>
    `<div class="edu-card">
      <div class="edu-icon">${edu.icon}</div>
      <div class="edu-year">${edu.year}</div>
      <div class="edu-degree">${edu.degree}</div>
      <div class="edu-uni">${edu.uni}</div>
      ${edu.note ? `<div class="edu-note">🏅 ${edu.note}</div>` : ''}
    </div>`
  ).join('');
}

// ===================== TYPING ANIMATION =====================

function initTyping() {
  const roles = ["Data Analyst", "Business Analyst", "Godown Incharge"];
  let roleIdx = 0, charIdx = 0, isDeleting = false;
  const el = document.getElementById('typed-text');

  function tick() {
    const current = roles[roleIdx];
    if (!isDeleting) {
      el.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        isDeleting = true;
        setTimeout(tick, 1200);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(tick, isDeleting ? 60 : 110);
  }
  setTimeout(tick, 600);
}

// ===================== COUNTER ANIMATION =====================

function animateCounter(el, target) {
  let cur = 0;
  const step = target / 80;
  const t = setInterval(() => {
    cur = Math.min(cur + step, target);
    el.textContent = Math.floor(cur);
    if (cur >= target) clearInterval(t);
  }, 20);
}

// ===================== SCROLL / INTERSECTION =====================

function initObserver() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');

        // Animate skill bars
        e.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.dataset.pct + '%';
        });

        // Animate counters
        e.target.querySelectorAll('.counter-val').forEach(el => {
          animateCounter(el, parseInt(el.dataset.target));
        });
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

  // Observe counter section separately
  const counterSection = document.querySelector('.counter-section');
  if (counterSection) obs.observe(counterSection);
}

// ===================== SCROLL HELPER =====================

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

// ===================== INIT =====================

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderAbout();
  renderSkills();
  renderExperience();
  renderProjects();
  renderCounters();
  renderEducation();
  initTyping();
  initObserver();
});
