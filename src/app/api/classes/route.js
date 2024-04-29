import { NextResponse, NextRequest } from "next/server";
const db = require('../../../../db'); 
const classModel = require('../../model/classModel')


// Handles GET requests to /api
export async function GET() {
      try {
        const classes = await classModel.getAllClasses();
        console.log(classes)
        return NextResponse.json(classes);
      } catch (error) {
        return NextResponse.status(500).json({ error: error.message });
      }
   } 


export async function POST(req , res) { 
    try { 

      // const data = NextRequest.json(req)
      // console.log(req)

      
      // campusModel.addCampus(campus_name, campus_address, campus_phone); 

      // console.log( "This is campus name" + campus_name); 
      return NextResponse.json({"test" : "hello"});

    } catch (error) { 
      return NextResponse.json({ error: error.message });
    }
}

