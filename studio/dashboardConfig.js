export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6b7fd275119600f037ee2f',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-3rh6h5ow',
                  apiId: '50bb32cd-9115-4acd-9913-838aed272000'
                },
                {
                  buildHookId: '5f6b7fd23b59fc00aa4b8256',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-4jz7jfh8',
                  apiId: 'f9e9f767-ca51-45b9-8146-24b0a57da8a7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nphillips/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-4jz7jfh8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
