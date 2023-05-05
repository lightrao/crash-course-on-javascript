const languages = [
    { id: 1, name: 'Javascript' },
    { id: 2, name: 'Python' },
    { id: 3, name: 'Swift' },
    { id: 4, name: 'Solidity' },
];

// two different reference, two different object
console.log(languages.includes({ id: 1, name: 'Javascript' }));

// find, findIndex
const languageBeFinded = languages.findIndex(function (language) {
    return language.name === 'C#';
});
console.log(languageBeFinded);