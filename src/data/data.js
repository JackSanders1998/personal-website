module.exports = {
  SiteTitle: 'Jack',
  Sitelogo: '#',
  SiteLogoText: 'Jack',
  SiteAuthor: 'Jack Sanders',
  SiteDescription: 'Front End Developer',
  defaultDescription: 'Software engineer!', 
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description

          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 20,
  }, 
  SiteSocialLinks: {
    twitter: 'https://twitter.com/jacklewisanders',
    github: 'https://github.com/JackSanders1998',
    linkedin: 'https://www.linkedin.com/in/jack-sanders-ba8661155/',
  },
  SiteAddress: {
    city: 'Portland',
    State: 'Oregon',
    country: 'USA',
    zipCode: '97210',
  },
  SiteContact: {
    email: 'jacklewissanders@gmail.com',
    phone: '(503)709-1430 ',
  },
  SiteCopyright: '2021',
};
