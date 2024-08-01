import DraftLog from 'draftlog'
import chalk from 'chalk'
import chalkTable from 'chalk-table'

import database from './../database.json' assert { type: "json" }

DraftLog(console).addLineListener(process.stdin)

const options = {
  leftPad: 2,
  columns: [
    { field: "id", name: chalk.cyan("ID") },
    { field: "vehicles", name: chalk.magenta("Vehicles") },
    { field: "kmTraveled", name: chalk.cyan("Km Traveled") },
    { field: "from", name: chalk.cyan("From") },
    { field: "to", name: chalk.cyan("To") },
  ]
}

const table = chalkTable(options, database)
const print = console.draft(table)
