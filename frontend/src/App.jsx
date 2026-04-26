import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'; // axios is a library I used that makes HTTP requests simpler than the built-in fetch API

//pages

// go() is given by App so this component can change the current page
function Home({ go }) {
  return (
    <div className="home-layout">
      <div className="home-left">
        <h1 className="home-name">DARIUS<br />AUL</h1>
        <p className="home-sub">Grade 12 · Toronto, Ontario · Crescent School</p>
        <p className="home-bio">
          I'm a high school student who is passionate about ML, hardware
          prototyping, and entrepreneurship. I co-founded EcoSentry, an AI-powered
          anti-poaching startup, and have led data science research, and a 250-person
          school business team. I also previously co-led my school robotics team's strategy division.
        </p>
        <div className="home-actions">
          <button className="link-btn" onClick={() => go('projects')}>Projects →</button>
          <button className="link-btn" onClick={() => go('work')}>Work →</button>
        </div>
        <div className="stat-grid">
          <div className="stat"><div className="stat-n">$6K+</div><div className="stat-l">Raised across competitions</div></div>
          <div className="stat"><div className="stat-n">TOP 7%</div><div className="stat-l">of 12,000+ global pitches</div></div>
          <div className="stat"><div className="stat-n">2X</div><div className="stat-l">High School Big Data Challenge Winner</div></div>
        </div>
        <div className="contact-row">
          <a className="contact-link" href="https://linkedin.com/in/darius-aul" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="contact-link" href="mailto:d34aul@gmail.com">Email</a>
          <a className="contact-link" href="https://github.com/darius-a/" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      <div className="home-right">
        <img
          src= "/images/headshot.jpg"
          alt="Darius Aul"
          className="photo"
          style={{aspectRatio:'3/4'}}
        />
      </div>
    </div>
  )
}

function Projects() {
  // projects starts as an empty array, and gets filled once the fetch completes
  const [projects, setProjects] = useState([]);

  // useEffect runs code after the component renders
  // the empty [] at the end means it only runs ONCE when the page first loads, not on every re-render
  useEffect(() => {
    axios.get("http://localhost:8080/projects")
      .then((res) => {
        setProjects(res.data); // res.data is the JSON array returned by the backend
      })
      .catch((err) => console.error(err)); // if the request fails, log the error in console
  }, []);

  return (
    <div className="page-content">
      <h2 className="page-title">PROJECTS</h2>
      {projects.map((p) => ( //map() loops over the projects array and renders one block of JSX per item
        <div className="project-row" key={p.num}> 
          <img //key helps track which item is which when the list updates
            src={`/images/${p.img}`}
            alt={p.title}
            className="photo"
            style={{ aspectRatio: '4/3' }}
          />
  
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
  const [loading, setLoading] = useState(true); // tracks whether the fetch is still in progress

  useEffect(() => {
    axios.get("http://localhost:8080/experience") //get from the experience url
      .then((res) => {
        setExperience(res.data);
        setLoading(false); //once data is ready, stop showing the loading message
      })
      .catch((err) => {
        console.error(err);
        setLoading(false); //even if it fails to get data, stop showing the loading message
      });
  }, []);

  return (
    <div className="page-content">
      <h2 className="page-title">WORK EXPERIENCE</h2>
      <p className="page-sub">Past roles and responsibilities</p>

      {/* conditional rendering - show "Loading..." until the fetch completes, then show the list */}
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

// same structure as WorkExperience - fetch on load, show loading state, then render the list
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
              <img src={`/images/${h.img}`} alt={h.title} className="photo" style={{ aspectRatio: '1/1' }} />
              <div className="hobby-title">{h.title}</div>
              <p className="hobby-desc">{h.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// app shell

// PAGES drives the navegation order, and then LABELS maps each page id to its display name
const PAGES = ['home', 'projects', 'work', 'hobbies'] 
const LABELS = { home: 'Home', projects: 'Projects', work: 'Work', hobbies: 'Hobbies' }

export default function App() {
  // page holds the currently active page id, defaults to home
  const [page, setPage] = useState('home')

  function go(p) {
    setPage(p)
    window.scrollTo(0, 0) // scroll to top at the very start so you dont land mid-page on a new page
  }

  return ( //BLOCK BELOW: highlights whichever nav button matches the current page
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

      {/* block above pretty much says only one of these pages should render at a time depending on what page is set to */}

      <footer className="footer">
        <span>2026 Darius Aul</span>
        <span>Toronto, Ontario</span>
      </footer>
    </>
  ) //footers (above) show the few words at the bottom of every page
}
