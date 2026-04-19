import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';


//IMAGE PLACEHOLDER 
//Replace:
//   <ImgPlaceholder label="file.jpg" ratio="3/4" />
// with
//   <img src="/images/file.jpg" alt="Description" className="photo" />
// Put the image files in the public/images/ folder
function ImgPlaceholder({ label, ratio = '1/1' }) {
  return (
    <div className="img-ph" style={{ aspectRatio: ratio }}>
      [ {label} ]
    </div>
  )
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
// const PROJECTS = [
//   {
//     num: '01',
//     img: 'ecosentry.jpg',
//     title: 'ECOSENTRY',
//     desc: 'Co-founded a startup developing solar-powered acoustic sensors with a TensorFlow audio classifier to detect poaching in wildlife reserves. Built the model, prototyped field hardware via CNC routing and 3D printing, and led outreach to 10+ African wildlife parks.',
//     awards: [
//       'Toronto Science Fair — Silver Medal',
//       '1517 Fund Medici Grant — $1,000 USD',
//       '$5,000 CAD Prototyping Award',
//       'Top 7% of 12,000+ Global Pitches',
//     ],
//   },
//   {
//     num: '02',
//     img: 'bdc.jpg',
//     title: 'BIG DATA CHALLENGE',
//     desc: '2025: Co-developed a DBSCAN clustering algorithm to optimize mental health facility placement in Toronto — presented at Microsoft HQ, won $1,000. 2026: Modelled climate change effects on wheat yields, presented to the Lieutenant Governor of Ontario, won 2nd Best Poster ($800).',
//     awards: [
//       '2025 — Top 8 of 500+ Teams, $1,000 Prize',
//       '2026 — 2nd Best Poster, $800 Prize',
//     ],
//   },
//   {
//     num: '03',
//     img: 'frc.jpg',
//     title: 'FRC STRATEGY — TEAM 610',
//     desc: 'Developed scoring models and alliance selection frameworks for one of Canada\'s top FRC teams, using data analysis from the 150-page competition rulebook. Team reached finals at North Bay and Centennial College District Events.',
//     awards: ['District Finalist — North Bay & Centennial'],
//   },
//   {
//     num: '04',
//     img: 'ethics.jpg',
//     title: 'ETHICS BOWL',
//     desc: 'Led my school\'s team to an undefeated performance at the UofT regional qualifiers in Grade 11. The Ethics Bowl rewards genuine reasoning — participants argue their actual position, evaluated on quality of thinking rather than persuasion.',
//     awards: ['Undefeated — UofT Regional Qualifiers'],
//   },
// ]

// const EXPERIENCE = [
//   {
//     title: 'CO-FOUNDER',
//     org: 'EcoSentry',
//     date: 'Nov 2023 — Dec 2025',
//     bullets: [
//       'Built a TensorFlow CNN audio classifier to distinguish threat sounds from ambient noise, with a multilateration module for real-time location approximation',
//       'Pitched at four competitions, securing $6,000+ in funding; coordinated with incubators to advance prototyping',
//       'Prototyped solar-powered field hardware using CNC routing and 3D printing',
//       'Conducted outreach to 10+ major African wildlife parks including executives at the world\'s largest rhino sanctuary',
//       'Received mentorship from Prof. Rob Maher (audio forensics, Montana State) and a Paul Allen Institute for AI executive',
//     ],
//     tags: ['TensorFlow', 'Python', 'Audio ML', 'Hardware', 'Fundraising'],
//   },
//   {
//     title: 'PRESIDENT',
//     org: 'Public Speaking & Ethics Bowl Club — Crescent School',
//     date: 'Sep 2025 — Present',
//     bullets: [
//       'Lead a 40+ member club focused on argumentation, critical thinking, and structured dialogue',
//       'Prepare and deliver weekly lessons and practice sessions for members at all levels',
//       'Manage a team of 3 assistant executives and plan the club calendar',
//       'Selected as president following an undefeated team run at UofT regional qualifiers in Grade 11',
//     ],
//     tags: ['Leadership', 'Ethics Bowl', 'Public Speaking'],
//   },
//   {
//     title: 'CEO + CO-HEAD, BUSINESS TEAM',
//     org: 'Crescent School Entrepreneurship Club',
//     date: 'Sep 2025 — Present',
//     bullets: [
//       'CEO of the ~60-member Entrepreneurship Club; one of three Co-Heads of the ~250-member Business Team (Entrepreneurship, Investment, and DECA subteams)',
//       'Deliver bi-weekly presentations on entrepreneurship drawing from the Disciplined Entrepreneurship textbook and firsthand experience',
//       'Organize a bi-weekly guest speaker series — 10+ sessions planned, 6 completed',
//     ],
//     tags: ['Leadership', 'Strategy', 'Entrepreneurship'],
//   },
//   {
//     title: 'JUNIOR STRATEGY EXECUTIVE',
//     org: 'FRC Team 610: The Coyotes',
//     date: 'Sep 2024 — May 2025',
//     bullets: [
//       'Nominated as Junior Strategy Executive after two years on the design and manufacturing subteam',
//       'Built scoring models in Google Sheets from the 150-page competition rulebook',
//       'Led alliance selection analysis across district events; team reached finals at North Bay and Centennial',
//     ],
//     tags: ['Data Analysis', 'Robotics', 'Strategy'],
//   },
//   {
//     title: 'TEACHING ASSISTANT',
//     org: 'Spirit of Math Schools',
//     date: 'Oct 2023 — Jun 2025',
//     bullets: [
//       'Supported students in an accelerated mathematics program through one-on-one tutoring and assignment grading',
//     ], 
//     tags: ['Mathematics', 'Teaching'],
//   },
// ]

// const HOBBIES = [
//   {
//     img: 'piano.jpg',
//     title: 'PIANO',
//     desc: 'Twelve years of classical training. Completed RCM Level 9 with First Class Honours (85%) and currently preparing for Level 10. Beyond the curriculum: self-taught blues and jazz improvisation.',
//   },
//   {
//     img: 'swimming.jpg',
//     title: 'SWIMMING',
//     desc: 'Certified National Lifeguard (Pool) and Swim Instructor through the Lifesaving Society of Canada. Also hold Standard First Aid with CPR-C. Have been lifeguarding since Grade 10.',
//   },
//   {
//     img: 'reading.jpg',
//     title: 'READING',
//     desc: 'Primarily non-fiction — entrepreneurship, philosophy, and history. Currently working through the Disciplined Entrepreneurship curriculum alongside running the school\'s entrepreneurship programming.',
//   },
// ]

// ─── PAGES ────────────────────────────────────────────────────────────────────
function Home({ go }) {
  return (
    <div className="home-layout">
      <div className="home-left">
        <h1 className="home-name">DARIUS<br />AUL</h1>
        <p className="home-sub">Grade 12 · Toronto, Ontario · Crescent School</p>
        <p className="home-bio">
          I'm a high school student with a focus on machine learning, hardware
          prototyping, and entrepreneurship. I co-founded EcoSentry, an AI-powered
          anti-poaching startup, and have led data science research, a 250-person
          school business team, and a competitive robotics strategy division.
        </p>
        <div className="home-actions">
          <button className="link-btn" onClick={() => go('projects')}>Projects →</button>
          <button className="link-btn" onClick={() => go('work')}>Work →</button>
        </div>
        <div className="stat-grid">
          <div className="stat"><div className="stat-n">$6K+</div><div className="stat-l">Raised across competitions</div></div>
          <div className="stat"><div className="stat-n">TOP 7%</div><div className="stat-l">of 12,000+ global pitches</div></div>
          <div className="stat"><div className="stat-n">$1,800</div><div className="stat-l">Big Data Challenge prizes</div></div>
          <div className="stat"><div className="stat-n">10+</div><div className="stat-l">African parks reached</div></div>
        </div>
        <div className="contact-row">
          {/* UPDATE THESE before going live */}
          <a className="contact-link" href="https://linkedin.com/in/darius-aul" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="contact-link" href="mailto:d34aul@gmail.com">Email</a>
          <a className="contact-link" href="https://github.com/darius-a/" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      <div className="home-right">
      
        <img src="https://media.licdn.com/dms/image/v2/D5603AQE_-Qev0BUnfQ/profile-displayphoto-shrink_800_800/B56ZThIsYKGQAc-/0/1738943941734?e=1776902400&v=beta&t=Oiupxgla0y8nU6alIPZz3J7wy-aqlZlN9p6-XOc95-8" alt="Darius Aul" className="photo" style={{aspectRatio:'3/4'}} />
      
      </div>
    </div>
  )
}

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/projects")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="page-content">
      <h2 className="page-title">PROJECTS</h2>
      <p className="page-sub">Selected work & awards</p>

      {projects.map((p) => (
        <div className="project-row" key={p.num}>
          {/*
          Replace with project image:
          <img src={`/images/${p.img}`} alt={p.title} className="photo project-photo" />
          */}
          <ImgPlaceholder label={p.img} ratio="4/3" />

          <div className="project-info">
            <div className="proj-num">{p.num}</div>
            <div className="proj-title">{p.title}</div>
            <p className="proj-desc">{p.desc}</p>

            <div className="awards">
              {p.awards.map((a) => (
                <div className="award" key={a}>{a}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function WorkExperience() {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8080/experience")
      .then((res) => {
        setExperience(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-content">
      <h2 className="page-title">WORK EXPERIENCE</h2>
      <p className="page-sub">Roles & responsibilities</p>

      {loading ? (
        <p>Loading...</p>
      ) : (
        experience.map((e) => (
          <div className="work-item" key={e.title + e.org}>
            <div className="work-header">
              <span className="work-title">{e.title}</span>
              <span className="work-date">{e.date}</span>
            </div>
            <div className="work-org">{e.org}</div>
            <ul className="work-list">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="tags">
              {e.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

function Hobbies() {
  const [hobbies, setHobbies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8080/hobbies")
      .then((res) => {
        setHobbies(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-content">
      <h2 className="page-title">HOBBIES</h2>
      <p className="page-sub">Outside the work</p>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="hobby-grid">
          {hobbies.map((h) => (
            <div className="hobby-card" key={h.title}>
              {/*
                Replace with hobby image:
                <img src={`/images/${h.img}`} alt={h.title} className="photo" style={{aspectRatio:'1/1'}} />
              */}
              <ImgPlaceholder label={h.img} ratio="1/1" />
              <div className="hobby-title">{h.title}</div>
              <p className="hobby-desc">{h.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
const PAGES = ['home', 'projects', 'work', 'hobbies']
const LABELS = { home: 'Home', projects: 'Projects', work: 'Work', hobbies: 'Hobbies' }

export default function App() {
  const [page, setPage] = useState('home')
  function go(p) {
    setPage(p)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <nav className="nav">
        <button className="logo" onClick={() => go('home')}>DARIUS AUL</button>
        <ul className="nav-links">
          {PAGES.map((p) => (
            <li key={p}>
              <button
                onClick={() => go(p)}
                className={page === p ? 'active' : ''}
              >
                {LABELS[p]}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        {page === 'home'     && <Home go={go} />}
        {page === 'projects' && <Projects />}
        {page === 'work'     && <WorkExperience />}
        {page === 'hobbies'  && <Hobbies />}
      </main>

      <footer className="footer">
        <span>2026 Darius Aul</span>
        <span>Toronto, Ontario</span>
      </footer>
    </>
  )
}
