
import fs from 'fs'
import FileHelper from '../lib/file-helper'
 
//@ts-ignore
import { serialize, deserialize } from "react-serialize"
  
 

export async function serializeJSX(args:string[]): Promise<any> {
 

  let fileName = args[1]

  if(!fileName.endsWith('.jsx')) fileName = fileName.concat('.jsx')

  let inputData = FileHelper.readLocalFileUTF8(`./inputs/${fileName}`)


  console.log({inputData})

  let sectionalized = splitToSections(inputData)

  let htmlSection = sectionalized['html'].content

 // htmlSection = htmlSection. replace(/(\r\n|\n|\r)/gm, "");


  htmlSection = htmlSection.replace(/({|})/gm,"")


  htmlSection = htmlSection.replaceAll('Flex','CFlex')

  htmlSection = htmlSection.replaceAll('Stack','CStack')

  htmlSection = htmlSection.replaceAll('FormLabel','CFormLabel')

  htmlSection = htmlSection.replaceAll('Box','CBox')

  htmlSection = htmlSection.replaceAll('FormControl','CFormControl')

  htmlSection = htmlSection.replaceAll('FormInput','CFormInput')

  htmlSection = htmlSection.replaceAll('Button','CButton')


  htmlSection = htmlSection.replaceAll('Link','CLink')


  htmlSection = htmlSection.replaceAll('Heading','CHeading')


  console.log({htmlSection})


  FileHelper.writeLocalFile(`./outputs/${fileName}`,htmlSection)

  
 
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


function splitToSections(inputData:string){
  let output:any={}

  output['html'] = {start: inputData.indexOf('<') , end: inputData.lastIndexOf('>'), content: ""}
  output['html'].content = inputData.substring(output['html'].start, output['html'].end+1)

  
  return output 
}
