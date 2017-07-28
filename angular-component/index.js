exports.generator = {
    description: 'This is a component generator',
    prompts: [
        {
            name: 'name'
        }
    ],
    actions: [
        {
            type: 'add',
            path: '<<kebabCase name>>/<<kebabCase name>>.js',
            template: 'templates/component.js'
        },
        {
            type: 'add',
            path: '<<kebabCase name>>/<<kebabCase name>>.html',
            template: 'templates/component.html'
        },
        {
            type: 'add',
            path: '<<kebabCase name>>/<<kebabCase name>>.spec.js',
            template: 'templates/component.spec.js'
        }
    ]
}
