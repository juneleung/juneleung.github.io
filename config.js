module.exports = {
  siteTitle: 'Resume', // <title>
  manifestName: 'Resume',
  manifestShortName: 'Resume', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/`,


  firstName: 'Anubhav',
  lastName: 'Srivastava',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/anubhavsrivastava',
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://linkedin.com/in/theanubhav/',
    },
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/onlyanubhav',
    },
    {
      icon: 'fa-facebook-f',
      name: 'Facebook',
      url: 'https://facebook.com/theanubhav',
    },
  ],
  email: 'a@example.com',
  phone: '000-00000',
  address: '305 Del Sol, Sunnyvale, CA',

  // 个人简介
  about: `I am experienced in leveraging agile frameworks to provide a robust
  synopsis for high level overviews. Iterative approaches to corporate
  strategy foster collaborative thinking to further the overall value
  proposition.`,
  // 学历履历
  educations: [
    {
      time: 'August 2006 - May 2010',
      school: 'University of Colorado Boulder',
      degree: 'Bachelor of Science',
      extraInfo: [
        'Computer Science - Web Development Track',
        'GPA: 3.23',
      ],
    },
  ],
  // 工作履历
  experiences: [
    {
      time: 'March 2013 - Present',
      title: 'Senior Web Developer',
      content: 'Intelitec Solutions',
      intro: `
        Bring to the table win-win survival strategies to ensure
        proactive domination. At the end of the day, going forward, a
        new normal that has evolved from generation X is on the runway
        heading towards a streamlined cloud solution. User generated
        content in real-time will have multiple touchpoints for
        offshoring.
      `
    },
    {
      time: 'July 2010 - December 2011',
      title: 'Senior Web Developer',
      content: 'Shout! Media Productions',
      intro: `
        Podcasting operational change management inside of workflows to
        establish a framework. Taking seamless key performance
        indicators offline to maximise the long tail. Keeping your eye
        on the ball while performing a deep dive on the start-up
        mentality to derive convergence on cross-platform integration.
      `
    },
  ],
  papers: [
    {
      thumbnail: 'https://www.python.org/static/img/python-logo@2x.png',
      title: 'Paper 1',
      authors: ['John Smith', 'Mike', 'Alice'],
      conference: 'ACM',
      links: [
        { content: 'Paper', href: '#' },
        { content: 'Video', href: '#' },
      ],
      date: '2077-06'
    },
    {
      thumbnail: 'https://www.python.org/static/img/python-logo@2x.png',
      title: 'Paper 2',
      authors: ['John Smith', 'Mike', 'Alice'],
      conference: 'CCF',
      links: [
        { content: 'Paper', href: '#' },
        { content: 'Video', href: '#' },
      ],
      date: '2076-06'
    },
  ],
  movies: [

  ],
  animations: [

  ],
  ads: [

  ],
};
