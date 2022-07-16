
import fs from 'fs'
import FileHelper from '../lib/file-helper'
 
//@ts-ignore
import { serialize, deserialize } from "react-serialize"
  


export async function serializeJSX(args:string[]): Promise<any> {

  console.log('boo', args)

  let fileName = args[1]

  if(!fileName.endsWith('.jsx')) fileName = fileName.concat('.jsx')

  let inputData = FileHelper.readLocalFileUTF8(`./inputs/${fileName}`)


  console.log({inputData})
  //inputData.lenderAddress = "0xF4dAb24C52b51cB69Ab62cDE672D3c9Df0B39681"

  /*let contractsConfig = require('../data/contractsConfig.json')['rinkeby']



  let outputData = buildExecuteParams( inputData, contractsConfig  )


  try {
    fs.writeFileSync('data/output.json', JSON.stringify(outputData) );
  } catch (err) {
    console.error(err);
  }
    console.log('output ', outputData )
  
 
  return outputData */
}

