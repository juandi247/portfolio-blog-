// ===== EDITA AQUÍ =====
// Añadir algo: copia un bloque { ... } y cámbialo. Quitarlo: borra el bloque.

export interface Post { date: string; title: string; desc?: string; url: string }
export interface Project { title: string; desc: string; url: string }
export interface Entry {
  logo: string;      // iniciales que se muestran si no hay imagen
  img?: string;      // opcional: logo real, ej. "/logos/alfa.png" (archivo en /public/logos)
  title: string; org: string; place: string; when: string; desc?: string;
}

// Fecha en formato AÑO-MES-DÍA. Se ordenan solos del más nuevo al más viejo.
export const posts: Post[] = [
  { date: '2026-09-12', title: 'Why I went back to writing plain HTML', desc: 'Fewer tools, more control.', url: '#' },
  { date: '2026-08-28', title: 'How I organize my notes without fancy apps', desc: 'One text file and some discipline.', url: '#' },
  { date: '2026-08-03', title: 'Lessons from maintaining a news site', desc: 'What three years of deadlines taught me.', url: '#' },
  { date: '2026-06-19', title: 'A small guide to learning German as a developer', desc: 'What worked from A1 to B2.', url: '#' },
  { date: '2026-04-02', title: 'Things I wish I knew before my first job', desc: 'Short and honest.', url: '#' },
];

export const projects: Project[] = [
  { title: 'Notes CLI', desc: 'A tiny command-line tool to take and search notes.', url: 'https://notes.example.com' },
  { title: 'Reader', desc: 'A distraction-free RSS reader for the web.', url: 'https://reader.example.com' },
];

export const experience: Entry[] = [
  { logo: 'AS', title: 'Full-stack developer', org: 'Alfa Studio', place: 'Berlin, Germany', when: '2023 – now', desc: 'Building web apps and internal tools.' },
  { logo: 'DN', title: 'Web developer', org: 'Daily News Co.', place: 'Madrid, Spain', when: '2020 – 2023', desc: 'News sites and the publishing systems behind them.' },
  { logo: 'BT', title: 'Technical support', org: 'Beta Tech', place: 'Remote', when: '2019 – 2020', desc: 'Where I learned to explain hard things simply.' },
];

export const education: Entry[] = [
  { logo: 'UE', title: 'M.Sc. Computer Engineering', org: 'University of Example', place: 'Example City', when: '2024 – now' },
  { logo: 'TU', title: 'B.Sc. Software Engineering', org: 'Technical University of Example', place: 'Example City', when: '2015 – 2019' },
];

export const languages = [
  { name: 'Deutsch', level: 'B2' },
  { name: 'English', level: 'C1' },
  { name: 'Español', level: 'Native' },
];

export const contact = {
  email: 'hello@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-username',
};
// ===== FIN =====

export const fmt = (d: string) =>
  new Date(d + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
export const sortedPosts = () => [...posts].sort((a, b) => b.date.localeCompare(a.date));
