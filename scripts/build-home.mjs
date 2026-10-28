import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const styleVersion = createHash('sha256').update(readFileSync('academic.css')).digest('hex').slice(0, 12);

// Verified against the owner's Google Scholar profile on 2026-10-28.
const scholar = 'https://scholar.google.com/citations?user=sNbks6EAAAAJ&hl=en';
const publications = [
  {
    year: '2026', type: 'preprint',
    title: 'RandSlot: Learning Compact Visual Document Representations with Random Soft Tokens',
    authors: ['Dewen Guo', 'Shi Yu', 'Lingxiao Zhang', 'Yang Zhang', 'Tao Xu', 'Dan Wang'],
    venue: 'arXiv:2609.32699', url: 'https://arxiv.org/abs/2609.32699', pdf: 'https://arxiv.org/pdf/2609.32699',
    en: 'Compact multi-vector representations for efficient visual document retrieval.',
    zh: '利用随机软 token 学习紧凑的多向量表示，提升视觉文档检索效率。'
  },
  {
    year: '2026', type: 'preprint',
    title: 'OrDA: Orthogonal Disentanglement of Access Habits Framework for Homepage Marketing Block Recommendations',
    authors: ['Lingxiao Zhang', 'Xiaobo Li', 'Tao Xu'],
    venue: 'arXiv:2607.13420', url: 'https://arxiv.org/abs/2607.13420', pdf: 'https://arxiv.org/pdf/2607.13420',
    en: 'Disentangling content interest from access habits to reduce recommendation bias.',
    zh: '通过正交解耦区分内容兴趣与访问习惯，减少首页营销推荐中的习惯偏差。'
  },
  {
    year: '2020', type: 'conference',
    title: 'Match4rec: A Novel Recommendation Algorithm Based on Bidirectional Encoder Representation with the Matching Task',
    authors: ['Lingxiao Zhang', 'Jiangpeng Yan', 'Yujiu Yang', 'Li Xiu'],
    venue: 'ICONIP 2020 · pp. 491–503', url: 'https://doi.org/10.1007/978-3-030-63836-8_41', pdf: 'https://arxiv.org/pdf/2008.13345',
    en: 'Combining local intent and global preference for sequential recommendation.',
    zh: '结合局部意图与全局偏好，建模用户的序列推荐行为。'
  }
];
const copy = {
  en: {
    lang: 'en', name: 'Lingxiao Zhang', otherName: '张凌霄', otherLang: '中文', otherPath: 'zh',
    title: 'Lingxiao Zhang | Research', desc: 'Lingxiao Zhang — algorithm engineer at Ant Group, working on large language model agents, search and recommendation, and multimodal retrieval.',
    nav: ['About', 'Publications', 'Experience', 'Education', 'Contact'],
    homeTitle: 'Lingxiao Zhang Home Page', about: 'Biography',
    bio: 'I am an algorithm engineer at Ant Group, working on large language model agents, search and recommendation, and multimodal retrieval. My work connects machine learning research with production applications, with a focus on understanding user intent and making intelligent systems more effective and reliable in real business settings.',
    research: 'My current work focuses on core algorithms for agents and search, spanning complex task execution, memory and tool use, as well as retrieval and ranking. My interests center on bringing the reasoning and representation capabilities of large models into interactive systems, while balancing task quality, computational efficiency, and the demands of production deployment.',
    background: 'I received my master’s degree in Computer Science and Technology from Tsinghua University in 2020 and my bachelor’s degree in Electronic Information Engineering from Wuhan University in 2018. Before joining Ant Group, I worked as an algorithm engineer at Huawei and Alibaba, focusing on search advertising and intelligent recruitment.',
    researchLabel: 'Research interests',
    experience: 'Professional Experience', roles: ['Algorithm Engineer, Ant Group', 'Algorithm Engineer, Huawei', 'Algorithm Engineer, Alibaba'], periods: ['Jun 2024 – present', 'Nov 2022 – May 2024', 'Jul 2020 – Oct 2022'],
    interests: ['LLMs & Agents', 'Search & Recommendation', 'Multimodal Retrieval'],
    pubTitle: 'Publications', pubNote: 'Listed in reverse chronological order.', allPubs: 'Google Scholar ↗',
    preprint: 'Preprint', conference: 'Conference paper', paper: 'Paper', pdf: 'PDF',
    education: 'Education', degrees: ['M.S. in Computer Science and Technology', 'B.Eng. in Electronic Information Engineering'], schools: ['Tsinghua University', 'Wuhan University'],
    contact: 'Contact', contactText: 'For research discussions and collaboration, please get in touch by email.',
    archive: 'Earlier work', projects: 'Project archive ↗', posts: 'Writing archive ↗', updated: 'Updated October 2026',
    skip: 'Skip to content', affiliation: 'Ant Group | Tsinghua University', footer: 'Lingxiao Zhang'
  },
  zh: {
    lang: 'zh-CN', name: '张凌霄', otherName: 'Lingxiao Zhang', otherLang: 'English', otherPath: 'en',
    title: '张凌霄 | 学术主页', desc: '张凌霄，蚂蚁集团算法工程师，关注大模型与智能体、搜索推荐和多模态检索，致力于机器学习研究与产业应用。',
    nav: ['个人简介', '论文成果', '过往经历', '教育背景', '联系'],
    homeTitle: '张凌霄的个人主页', about: '个人简介',
    bio: '我目前在蚂蚁集团担任算法工程师，主要关注大模型与智能体、搜索推荐和多模态检索。我的工作连接机器学习研究与产业应用，围绕用户意图理解与智能决策，探索如何让智能系统在真实业务场景中更有效、更可靠地解决问题。',
    research: '在当前工作中，我负责智能体与搜索业务的核心算法建设，工作覆盖复杂任务执行、记忆与工具使用，以及检索和排序等环节。我关注将大模型的推理与表征能力融入交互式系统，在提升任务完成质量的同时，兼顾计算效率与实际部署需求。',
    background: '我于 2020 年在清华大学获得计算机科学与技术硕士学位，2018 年在武汉大学获得电子信息工程学士学位。此前曾在华为、阿里巴巴担任算法工程师，从事搜索广告与智能招聘相关工作。',
    researchLabel: '研究方向',
    experience: '过往经历', roles: ['蚂蚁集团，算法工程师', '华为，算法工程师', '阿里巴巴，算法工程师'], periods: ['2024.06 – 至今', '2022.11 – 2024.05', '2020.07 – 2022.10'],
    interests: ['大模型与智能体', '搜索推荐', '多模态检索'],
    pubTitle: '论文成果', pubNote: '按发表年份倒序排列。', allPubs: 'Google Scholar ↗',
    preprint: '预印本', conference: '会议论文', paper: '论文', pdf: 'PDF',
    education: '教育背景', degrees: ['计算机科学与技术 · 硕士', '电子信息工程 · 学士'], schools: ['清华大学', '武汉大学'],
    contact: '联系', contactText: '欢迎通过邮件交流研究工作与合作机会。',
    archive: '早期工作', projects: '历史项目 ↗', posts: '历史文章 ↗', updated: '更新于 2026 年 10 月',
    skip: '跳至正文', affiliation: '蚂蚁集团 | 清华大学', footer: '张凌霄 · Lingxiao Zhang'
  }
};
const escape = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
function render(language, root = false) {
  const t = copy[language];
  const base = root ? './' : '../';
  const ids = ['about', 'publications', 'experience', 'education', 'contact'];
  const papers = publications.map(p => `<li class="publication"><article>
      <h3><a href="${p.url}">${escape(p.title)}</a></h3>
      <p class="venue">${p.venue} · ${p.year} · ${t[p.type]} <span class="paper-links">[<a href="${p.url}">${t.paper}</a>] [<a href="${p.pdf}">${t.pdf}</a>]</span></p>
      <p class="authors">${p.authors.map(a => a === 'Lingxiao Zhang' ? `<strong>${a}</strong>` : a).join(', ')}</p>
      <p class="pub-summary">${p[language]}</p>
    </article></li>`).join('\n');
  return `<!doctype html>
<html lang="${t.lang}">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${t.title}</title><meta name="description" content="${t.desc}"><meta name="author" content="Lingxiao Zhang">
  <link rel="canonical" href="https://owenmasculinity.github.io/${language}/">
  <link rel="alternate" hreflang="en" href="https://owenmasculinity.github.io/en/">
  <link rel="alternate" hreflang="zh-CN" href="https://owenmasculinity.github.io/zh/">
  <link rel="alternate" hreflang="x-default" href="https://owenmasculinity.github.io/en/">
  <meta property="og:type" content="profile"><meta property="og:title" content="${t.title}">
  <meta property="og:description" content="${t.desc}"><meta property="og:image" content="https://owenmasculinity.github.io/img/IMG_3745.JPG">
  <link rel="stylesheet" href="${base}academic.css?v=${styleVersion}">
</head>
<body>
  <a class="skip-link" href="#main">${t.skip}</a>
  <header class="site-header"><div class="header-inner">
    <a class="wordmark" href="${base}${language}/">${t.homeTitle}</a>
    <nav aria-label="${language === 'en' ? 'Main navigation' : '主导航'}">${t.nav.map((n, i) => `<a href="#${ids[i]}">${n}</a>`).join('')}</nav>
    <a class="language" lang="${language === 'en' ? 'zh-CN' : 'en'}" href="${base}${t.otherPath}/">${t.otherLang} <span aria-hidden="true">↗</span></a>
  </div></header>
  <main id="main" class="page-layout">
    <div class="profile-header">
      <div class="profile">
        <img class="portrait" src="${base}img/IMG_3745.JPG" width="300" height="260" alt="${t.name}">
        <h1>${t.name}</h1><p class="other-name">${t.otherName}</p>
      </div>
      <div class="profile-details">
        <p class="affiliation">${t.affiliation}</p>
        <p class="research-interests"><strong>${t.researchLabel}</strong><br>${t.interests.join(language === 'en' ? ' · ' : '、')}</p>
        <div class="profile-links"><p>Google Scholar: <a href="${scholar.replaceAll('&', '&amp;')}">Lingxiao Zhang</a><br>GitHub: <a href="https://github.com/OwenMasculinity">OwenMasculinity</a></p><p>${t.contact}:<br><a href="mailto:owenmasculinity@gmail.com">owenmasculinity@gmail.com</a></p></div>
      </div>
    </div>
      <section id="about" class="about-section" aria-labelledby="about-title">
        <h2 id="about-title" class="sr-only">${t.about}</h2>
        <p>${t.bio}</p><p>${t.research}</p><p>${t.background}</p>
      </section>
      <section id="publications" aria-labelledby="publications-title">
        <div class="section-heading"><h2 id="publications-title">${t.pubTitle}</h2><a class="subtle-link" href="${scholar.replaceAll('&', '&amp;')}">${t.allPubs}</a></div>
        <p class="section-note">${t.pubNote}</p><ul class="publication-list">${papers}</ul>
      </section>
      <section id="experience" aria-labelledby="experience-title">
        <h2 id="experience-title">${t.experience}</h2>
        <ul class="education-list">${t.roles.map((role, i) => `<li>${role}${language === 'zh' ? '，' : ', '}${t.periods[i]}</li>`).join('')}</ul>
      </section>
      <section id="education" aria-labelledby="education-title">
        <h2 id="education-title">${t.education}</h2>
        <ul class="education-list">${['2020', '2018'].map((year, i) => `<li><strong>${t.schools[i]}</strong>, ${t.degrees[i]}, ${year}</li>`).join('')}</ul>
      </section>
      <section id="contact" aria-labelledby="contact-title"><h2 id="contact-title">${t.contact}</h2><p>${t.contactText}</p><a class="email-link" href="mailto:owenmasculinity@gmail.com">owenmasculinity@gmail.com <span aria-hidden="true">↗</span></a></section>
      <div class="archive"><span>${t.archive}</span><a href="${base}${language}/project/">${t.projects}</a><a href="${base}${language}/post/">${t.posts}</a></div>
      <footer><span>© 2026 ${t.footer}</span><span>${t.updated}</span></footer>
  </main>
</body></html>\n`;
}
for (const language of ['en', 'zh']) {
  mkdirSync(language, { recursive: true });
  writeFileSync(`${language}/index.html`, render(language));
}
// Serve actual content at the root so local previews and no-JavaScript clients work.
writeFileSync('index.html', render('en', true));
console.log('Built /, /en/ and /zh/.');
