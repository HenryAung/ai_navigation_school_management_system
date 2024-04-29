import { NextResponse, NextRequest } from "next/server";
import nextConnect from 'next-connect';

const db = require('../../../../db'); 
const campusModel = require('../../model/campusModel')



// Handles GET requests to /api
export async function GET() {
      try {
        const campuses = await campusModel.getAllCampuses();
        console.log(campuses)
        return NextResponse.json(campuses);
      } catch (error) {
        return NextResponse.status(500).json({ error: error.message });
      }
   } 


  export async function POST(req, res) {
  try {
    const data = await req.json(); // Parses JSON body
    console.log(data); // Now you'll see the actual JSON object

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}