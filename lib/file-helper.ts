
 
import fs from 'fs'
import path from 'path'

 
const FileReader = require('filereader')
  
export default class FileHelper{


    static  readJSONFile(uri:string){

         let input =  fs.readFileSync(path.resolve( uri),   {encoding:'utf8', flag:'r'}); 

         return JSON.parse(input)
    }

    static readLocalFile( path:string, encoding: BufferEncoding){

        return fs.readFileSync(path,{ encoding  });
     
    }

    static readLocalFileUTF8( path:string  ){

        let output = fs.readFileSync(path,{ encoding: 'utf8' });
    
        return output 

    }


    static mkdirSync(path:string){
        try{
            fs.mkdirSync(path)
        }catch(e){
            //console.error(e)
        }
       
    }
    
   

    static getFileDataBinary(file: File): Promise<string | ArrayBuffer | null> {
        return new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.readAsBinaryString(file)
          reader.onload = () => resolve(reader.result)
          reader.onerror = (error: any) => reject(error)
        })
      }


      static readLocalFileBase64( path:string  ){

        let output = fs.readFileSync(path,{ encoding: 'base64' });
    
        return output 

    }

      static getFileDataBase64(file: File): Promise<string | ArrayBuffer | null> {
        return new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = () => resolve(reader.result)
          reader.onerror = (error: any) => reject(error)
        })
      }
       
}