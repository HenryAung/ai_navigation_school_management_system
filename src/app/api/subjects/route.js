import { NextResponse, NextRequest } from "next/server";
const db = require('../../../../db'); 
const subjectModel = require('../../model/subjectModel')


// Handles GET requests to /api
export async function GET() {
      try {
        const subjects = await subjectModel.getAllSubjects();
        console.log(subjects)
        return NextResponse.json(subjects);
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

