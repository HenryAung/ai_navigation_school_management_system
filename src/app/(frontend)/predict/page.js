'use client'
import { useState, useEffect} from 'react';
import axios from 'axios';
import PredictionResult from './prediction_score'

export default function StudentForm() {
  const [formData, setFormData] = useState({
    "age": '',
    "Medu": '',
    "Fedu": '',
    "traveltime": '',
    "studytime": '',
    "failures": '',
    "famrel": '',
    "freetime": '',
    "goout": '',
    "Dalc": '',
    "Walc": '',
    "health": '',
    "absences": '',
    "G1": '',
    "G2": '',
    "overall_health": '',
    "time_productivity": '',
    "school_GP": '',
    "school_MS": '',
    "sex_F": '',
    "sex_M": '',
    "address_R": '',
    "address_U": '',
    "famsize_GT3": '',
    "famsize_LE3": '',
    "Pstatus_A": '',
    "Pstatus_T": '',
    "Mjob_at_home": '',
    "Mjob_health": '',
    "Mjob_other": '',
    "Mjob_services": '',
    "Mjob_teacher": '',
    "Fjob_at_home": '',
    "Fjob_health": '',
    "Fjob_other": '',
    "Fjob_services": '',
    "Fjob_teacher": '',
    "guardian_father": '',
    "guardian_mother": '',
    "guardian_other": '',
    "schoolsup_no": '',
    "schoolsup_yes": '',
    "famsup_no": '',
    "famsup_yes": '',
    "paid_no": '',
    "paid_yes": '',
    "activities_no": '',
    "activities_yes": '',
    "nursery_no": '',
    "nursery_yes": '',
    "higher_no": '',
    "higher_yes": '',
    "internet_no": '',
    "internet_yes": '',
    "romantic_no": '',
    "romantic_yes": ''
  });

  const [prediction, setPrediction] = useState(null); // State to hold the prediction score

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log(formData)
        const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        console.log('Prediction response:', response.data);

        const { predictions } = response.data; // Extract the predictions array from the response data
        
        setPrediction(predictions); // Set the numeric prediction in state
       
      } catch (error) {
        console.error('Error submitting form:', error.message);
      }
  };



  return (
    <div className="max-w-full m-10 p-6 bg-gray-100 rounded-md shadow-md">
        <h1 className="text-2xl text-center m-10 p-6">Insert Student Information</h1>

        <form onSubmit={handleSubmit}>

            <div className="container mx-auto px-6 md:px-12 bg-gray">
          
            <div className="flex flex-wrap -mx-4">
             
                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="age" className="block font-medium">Age</label>
                        <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
                    </div>
                </div>
             
                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="Medu" className="block font-medium">Mother Education </label>
                        <p className="text-xs">choose between 0 and 4. </p>
                        <p className="text-xs">0 - none </p>
                        <p className="text-xs"> 1 - primary  </p>
                        <p className="text-xs">2 - 5th to 9th  </p>
                        <p className="text-xs"> 3 - secondary  </p>
                        <p className="text-xs">4 - higher education </p>
                        <input type="number" id="Medu" name="Medu" value={formData.Medu} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
                    </div>
                </div>
          
                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="Fedu" className="block font-medium">Father Education </label>
                        <p className="text-xs">choose between 0 and 4. </p>
                        <p className="text-xs">0 - none </p>
                        <p className="text-xs"> 1 - primary  </p>
                        <p className="text-xs">2 - 5th to 9th  </p>
                        <p className="text-xs"> 3 - secondary  </p>
                        <p className="text-xs">4 - higher education </p>
                        <input type="number" id="Fedu" name="Fedu" value={formData.Fedu} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
                    </div>
                </div>

              
                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="traveltime" className="block font-medium">Travel Time</label>
                        <p className="text-xs">choose between 1 and 4. </p>
                        <p className="text-xs">1 - less than 15 min </p>
                        <p className="text-xs"> 2 - 15 to 30 min.  </p>
                        <p className="text-xs">3 - 30 min. to 1 hour </p>
                        <p className="text-xs"> 4 - more than 1 hour </p>
                        <input type="number" id="traveltime" name="traveltime" value={formData.traveltime} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
                    </div>
                </div>

           
                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="studytime" className="block font-medium">Study Time</label>
                        <p className="text-xs">choose between 1 and 4. </p>
                        <p className="text-xs">1 - less than 2 hours </p>
                        <p className="text-xs"> 2 - 2 to 5 hours  </p>
                        <p className="text-xs">3 - 5 to 10 hours </p>
                        <p className="text-xs"> 4 - more than 10 hour </p>
                        <input type="number" id="studytime" name="studytime" value={formData.studytime} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
                    </div>
                </div>
          
                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="failures" className="block font-medium">Number of past class failures</label>
                        <p className="text-xs">choose between 1 and 4. </p>
                        <input type="number" id="failures" name="failures" value={formData.failures} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="famrel" className="block font-medium">Family Relationship</label>
                        <p className="text-xs">choose between 1 and 5 </p>
                        <p className="text-xs"> 1 - very bad  </p>
                        <p className="text-xs"> 5 - excellent  </p>
                        <input type="number" id="famrel" name="famrel" value={formData.famrel} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="freetime" className="block font-medium">Free Time </label>
                        <p className="text-xs">choose between 1 and 5 </p>
                        <p className="text-xs"> 1 - very low  </p>
                        <p className="text-xs"> 5 - very high  </p>
                        <input type="number" id="freetime" name="freetime" value={formData.freetime} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="goout" className="block font-medium">Going out with friends </label>
                        <p className="text-xs">choose between 1 and 5 </p>
                        <p className="text-xs"> 1 - very low  </p>
                        <p className="text-xs"> 5 - very high  </p>
                        <input type="number" id="goout" name="goout" value={formData.goout} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="Dalc" className="block font-medium">Workday alcohol consumption </label>
                        <p className="text-xs">choose between 1 and 5 </p>
                        <p className="text-xs"> 1 - very low  </p>
                        <p className="text-xs"> 5 - very high  </p>
                        <input type="number" id="Dalc" name="Dalc" value={formData.Dalc} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="Walc" className="block font-medium">Weekend alcohol consumption </label>
                        <p className="text-xs">choose between 1 and 5 </p>
                        <p className="text-xs"> 1 - very low  </p>
                        <p className="text-xs"> 5 - very high  </p>
                        <input type="number" id="Walc" name="Walc" value={formData.Walc} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="health" className="block font-medium">Current health status </label>
                        <p className="text-xs">choose between 1 and 5 </p>
                        <p className="text-xs"> 1 - very bad </p>
                        <p className="text-xs"> 5 - very good  </p>
                        <input type="number" id="health" name="health" value={formData.health} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="absences" className="block font-medium">Number of school absences </label>
                        <p className="text-xs">Percentage from 0 to 93 </p>
                        <input type="number" id="absences" name="absences" value={formData.absences} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="G1" className="block font-medium">First period grade </label>
                        <p className="text-xs">Grade from 0 to 20 </p>
                        <input type="number" id="G1" name="G1" value={formData.G1} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="G2" className="block font-medium">Second period grade </label>
                        <p className="text-xs">choose between 1 and 5</p>
                        <input type="number" id="G2" name="G2" value={formData.G2} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="overall_health" className="block font-medium">Overall Health Condition </label>
                        <p className="text-xs">choose between 1 and 5 </p>
                        <p className="text-xs"> 1 - very bad </p>
                        <p className="text-xs"> 5 - very good  </p>
                        <input type="number" id="overall_health" name="overall_health" value={formData.overall_health} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="time_productivity" className="block font-medium">Productivity  </label>
                        <p className="text-xs">choose between 1 and 10 </p>
                        <p className="text-xs"> 1 - very bad </p>
                        <p className="text-xs"> 10 - very good  </p>
                        <input type="number" id="time_productivity" name="time_productivity" value={formData.time_productivity} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200" />
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="school_GP" className="block font-medium">Are you from Gabriel school</label>
                        <select id="school_GP" name="school_GP" value={formData.school_GP} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="school_MS" className="block font-medium">Are you from Mousinho da Silveira school </label>
                        <select id="school_MS" name="school_MS" value={formData.school_MS} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="sex_F" className="block font-medium">Are you Female </label>
                        <select id="sex_F" name="sex_F" value={formData.sex_F} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="sex_M" className="block font-medium">Are you male </label>
                        <select id="sex_M" name="sex_M" value={formData.sex_M} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                


                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="address_R" className="block font-medium">Do you live in Urban Area</label>
                        <select id="address_R" name="address_R" value={formData.address_R} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="address_U" className="block font-medium">Do you live in Rural Area</label>
                        <select id="address_U" name="address_U" value={formData.address_U} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="famsize_GT3" className="block font-medium">Is your family size greater than 3</label>
                        <select id="famsize_GT3" name="famsize_GT3" value={formData.famsize_GT3} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="famsize_LE3" className="block font-medium">Is your family size less than or equal 3</label>
                        <select id="famsize_LE3" name="famsize_LE3" value={formData.famsize_LE3} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="Pstatus_T" className="block font-medium">Is your parent living apart</label>
                        <select id="Pstatus_T" name="Pstatus_T" value={formData.Pstatus_T} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="Pstatus_A" className="block font-medium">Is your parent living together</label>
                        <select id="Pstatus_A" name="Pstatus_A" value={formData.Pstatus_A} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>


                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="Mjob_at_home" className="block font-medium">Mother's job is Housekeeping</label>
                        <select id="Mjob_at_home" name="Mjob_at_home" value={formData.Mjob_at_home} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="Mjob_health" className="block font-medium">Mother's job is in Health Care Sector</label>
                        <select id="Mjob_health" name="Mjob_health" value={formData.Mjob_health} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

              
                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="Mjob_services" className="block font-medium">Mother's job is in Service Sector</label>
                        <select id="Mjob_services" name="Mjob_services" value={formData.Mjob_services} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

              
                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="Mjob_teacher" className="block font-medium">Mother's job is in teaching Sector</label>
                        <select id="Mjob_teacher" name="Mjob_teacher" value={formData.Mjob_teacher} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="Mjob_other" className="block font-medium">Mother's job is in other Category</label>
                        <select id="Mjob_other" name="Mjob_other" value={formData.Mjob_other} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="Fjob_at_home" className="block font-medium">Fother's job is Housekeeping</label>
                        <select id="Fjob_at_home" name="Fjob_at_home" value={formData.Fjob_at_home} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="Fjob_health" className="block font-medium">Fother's job is in Health Care Sector</label>
                        <select id="Fjob_health" name="Fjob_health" value={formData.Fjob_health} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

              
                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="Fjob_services" className="block font-medium">Fother's job is in Service Sector</label>
                        <select id="Fjob_services" name="Fjob_services" value={formData.Fjob_services} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

              
                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="Fjob_teacher" className="block font-medium">Fother's job is in teaching Sector</label>
                        <select id="Fjob_teacher" name="Fjob_teacher" value={formData.Fjob_teacher} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="Fjob_other" className="block font-medium">Fother's job is in other Category</label>
                        <select id="Fjob_other" name="Fjob_other" value={formData.Fjob_other} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="guardian_father" className="block font-medium">Is your gurdian father</label>
                        <select id="guardian_father" name="guardian_father" value={formData.guardian_father} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="guardian_mother" className="block font-medium">Is your gurdian mother</label>
                        <select id="guardian_mother" name="guardian_mother" value={formData.guardian_mother} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="guardian_other" className="block font-medium">Is your gurdian other</label>
                        <select id="guardian_other" name="guardian_other" value={formData.guardian_other} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="schoolsup_no" className="block font-medium">You have not received extra educational support</label>
                        <select id="schoolsup_no" name="schoolsup_no" value={formData.schoolsup_no} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="schoolsup_yes" className="block font-medium">You received extra educational support</label>
                        <select id="schoolsup_yes" name="schoolsup_yes" value={formData.schoolsup_yes} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="famsup_no" className="block font-medium">You do not have family educational support</label>
                        <select id="famsup_no" name="famsup_no" value={formData.famsup_no} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="famsup_yes" className="block font-medium">You have family educational support</label>
                        <select id="famsup_yes" name="famsup_yes" value={formData.famsup_yes} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="paid_no" className="block font-medium">You do not have extra paid classes within the course subject</label>
                        <select id="paid_no" name="paid_no" value={formData.paid_no} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="paid_yes" className="block font-medium">You have extra paid classes within the course subject</label>
                        <select id="paid_yes" name="paid_yes" value={formData.paid_yes} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="activities_no" className="block font-medium">You do not have extra-curricular activities</label>
                        <select id="activities_no" name="activities_no" value={formData.activities_no} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="activities_yes" className="block font-medium">You have extra-curricular activities</label>
                        <select id="activities_yes" name="activities_yes" value={formData.activities_yes} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>


                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="nursery_no" className="block font-medium">You had not attended nursery school</label>
                        <select id="nursery_no" name="nursery_no" value={formData.nursery_no} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="nursery_yes" className="block font-medium">You had attended nursery school</label>
                        <select id="nursery_yes" name="nursery_yes" value={formData.nursery_yes} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="higher_no" className="block font-medium">You do not want to take higher education</label>
                        <select id="higher_no" name="higher_no" value={formData.higher_no} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="higher_yes" className="block font-medium">You want to take higher education</label>
                        <select id="higher_yes" name="higher_yes" value={formData.higher_yes} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="internet_no" className="block font-medium">You do not have internet access at home</label>
                        <select id="internet_no" name="internet_no" value={formData.internet_no} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="internet_yes" className="block font-medium">You have internet access at home</label>
                        <select id="internet_yes" name="internet_yes" value={formData.internet_yes} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="romantic_no" className="block font-medium">You do not have romantic relationship</label>
                        <select id="romantic_no" name="romantic_no" value={formData.romantic_no} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-4 mb-8">
                    <div className="mb-4">
                        <label htmlFor="romantic_yes" className="block font-medium">You have romantic relationship</label>
                        <select id="romantic_yes" name="romantic_yes" value={formData.romantic_yes} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200">
                            <option value="">Select</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>



        

        <button type="submit" className="bg-blue-500 text-white w-auto px-4 py-2 my-10 rounded-md hover:bg-blue-600">Submit</button>
      </form>

    {/* Conditional rendering of PredictionResult component */}
      {prediction && <PredictionResult score={prediction} />}

    </div>
  );
}
