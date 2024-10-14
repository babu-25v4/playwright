import { test as dataread, expect } from '@playwright/test';
import fs from 'fs'
// import { parse } from 'csv-parse/sync';

export const tData = dataread.extend({

    csvdata: async ({ page }, use) => {
    const records = parse(fs.readFileSync('testdata/data.csv'), {
    columns: true,
    skip_empty_lines: true
    });
    
    console.log('Size: '+await records.lenght)
    await use(records)
},


});
