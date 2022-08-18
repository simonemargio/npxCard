#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')


// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

// Text + chalk definitions
const data = {
  name: chalk.white('Simone Margio'),
  handle: chalk.cyan('♥'),
  labelWork: chalk.white.bold('       Hey:'),
  work: chalk.white('Software engineer with a passion for design'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  twitter: chalk.cyan('https://twitter.com/wownswos'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  github: chalk.cyan('https://github.com/simonemargio'),
  labelpolywork: chalk.white.bold('  Polywork:'),
  polywork: chalk.cyan('https://www.polywork.com/simonemargio'),
  labelWeb: chalk.white.bold('       Web:'),
  web: chalk.cyan('https://simonemargio.im'),
  labelCard: chalk.white.bold('      Card:'),
  npx: chalk.white('npx simonemargio'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const polyworking = `${data.labelpolywork}  ${data.polywork}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen
// effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  polyworking +
  newline +
  webing +
  newline +
  newline +
  carding

console.log(chalk.green(boxen(output, options)))
