#!/usr/bin/env node
import fs from'fs';
import path from'path';
import { Command } from 'commander';
import { azureTranslate, chatgptTranslate } from '@markdown-translator/core';

const program = new Command();

program
  .version('1.0.0-alpha.0')
  .description('CLI for Markdown Translator')
  .option('-a, --azure', 'Use Azure Translator API')
  .option('-c, --chatgpt', 'Use ChatGPT Translator API', 'true')
  .option('-f, --from <language>', 'Translate from language')
  .requiredOption('-t, --to <language>', 'Translate to language')
  .requiredOption('-k --key [key]', 'azure subscription key or open api key')
  .option('-r --region [region]', 'azure subscription region if you have')
  .requiredOption('-i, --input <file>', 'Input file')
  .requiredOption('-o, --output <file>', 'Output file')
  .parse(process.argv);

const opts = program.opts()
const srcPath = path.resolve(process.cwd(), opts.input)
const destPath = path.resolve(process.cwd(), opts.output)
const writeStream = fs.createWriteStream(destPath)

if (opts.azure) {
  const result = azureTranslate(fs.readFileSync(srcPath), {
    from: opts.from,
    to: opts.to,
    subscriptionKey: opts.key,
    subscriptionRegion: opts.region,
  }).then(res => {
    writeStream.write(res)
  })
} else if (opts.chatgpt) {
  chatgptTranslate(fs.readFileSync(srcPath), {
    to: opts.to,
    apiKey: opts.key,
  }).then(res => {
    writeStream.write(res)
  })
} else {
  console.error('Please specify a translator Engine');
}


