"use client"
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { countryCodes } from './PartnerUniveristyList';
import BookCallWithExperts from "@/public/landingPage/Book_1-1with_Experts.png"
import Image from 'next/image';
import { useUser } from '@clerk/nextjs';
import { doc, setDoc } from "firebase/firestore";
import { db } from '@/firebaseConfig';

const courses = [
    "Computer Science",
    "Data Science and Data Analytics",
    "Business Analytics",
    "Mechanical Engineering",
    "Management Information Systems",
    "Electrical and Electronics Engineering",
    "Computer and Information Systems",
    "Electrical and Computer Engineering",
    "Engineering Management Mem",
    "Industrial Engineering",
    "Civil Engineering",
    "Computer Engineering",
    "Information Technology",
    "Cybersecurity",
    "Mba"
];

const stages = [
    "Just starting, research phase",
    "Shortlisting colleges, planning tests",
    "Tests done, finalising shortlist",
    "Applied to a few colleges",
    "Applications done, awaiting admit",
    "Admits Received"
];

const timeSlots = [
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM"
];

const BookCall = () => {
    const { user } = useUser()
    const [degree, setDegree] = useState<string | null>(null);
    const [studyYear, setStudyYear] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [mobile, setMobile] = useState<string | null>(null);
    const [countryCode, setCountryCode] = useState<string>('+91');
    const [step, setStep] = useState<number>(1);
    const [validationErrors, setValidationErrors] = useState<{ degree?: string; studyYear?: string; email?: string; mobile?: string }>({});
    const [validationErrorsStep2, setValidationErrorsStep2] = useState<{ selectedDate?: string; selectedTime?: string; firstName?: string; lastName?: string; course?: string; stage?: string }>({});
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [course, setCourse] = useState<string>('');
    const [stage, setStage] = useState<string>('');
    const [studyPlan, setStudyPlan] = useState<string>("Select");

    const handleDegreeClick = (selectedDegree: string) => {
        setDegree(selectedDegree);
    };

    const handleStudyYearClick = (year: string) => {
        setStudyYear(year);
    };

    const slotBooking = () => {
        let errors: { degree?: string; studyYear?: string; email?: string; mobile?: string } = {};

        if (!degree) {
            errors.degree = 'Please select a degree';
        }
        if (!studyYear) {
            errors.studyYear = 'Please select a study year';
        }
        if (!email) {
            errors.email = 'Please enter your email';
        }
        if (!mobile) {
            errors.mobile = 'Please enter your mobile number';
        }

        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
        } else {
            setValidationErrors({});
            setStep(2);
        }
    };


    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 5);

    const [finishloading, setFinishLoading] = useState(false);

    const handleFinishBooking = async () => {
        let errors: { selectedDate?: string; selectedTime?: string; firstName?: string; course?: string; stage?: string } = {};

        if (!selectedDate) {
            errors.selectedDate = 'Please select a date';
        }
        if (!selectedTime) {
            errors.selectedTime = 'Please select a time slot';
        }
        if (!firstName) {
            errors.firstName = 'Please enter your first name';
        }
        if (!course) {
            errors.course = 'Please enter your course of interest';
        }
        if (!stage) {
            errors.stage = 'Please select your current stage';
        }

        if (Object.keys(errors).length > 0) {
            setValidationErrorsStep2(errors);
        } else {
            setFinishLoading(true)
            setValidationErrorsStep2({});
            const studentData = {
                degree,
                studyYear,
                email,
                studyPlan,
                countryCode,
                mobile,
                selectedDate: selectedDate ? selectedDate.toISOString() : "Not specified",
                selectedTime,
                firstName,
                course,
                stage,
            };

            try {
                if (user) {
                    const studentRef = doc(db, `students/${user?.id}`);
                    await setDoc(studentRef, studentData);
                    sessionStorage.removeItem("studentBookingDetails");
                    setStep(3);
                } else {
                    sessionStorage.setItem("studentBookingDetails", JSON.stringify(studentData));
                    window.location.href = "https://accounts.ieltsgoglobal.com/sign-in?redirect_url=https%3A%2F%2Fwww.ieltsgoglobal.com%2F"
                }
            } catch (error) {
                console.error('Error Storing data:', error);
            } finally {
                setFinishLoading(false);
            }
        }
    };

    useEffect(() => {
        const storedData = sessionStorage.getItem("studentBookingDetails")
        if (storedData) {
            const parsedData = JSON.parse(storedData)
            setDegree(parsedData.degree || null)
            setStudyYear(parsedData.studyYear || null)
            setEmail(parsedData.email || null)
            setMobile(parsedData.mobile || null)
            setCountryCode(parsedData.countryCode || "+91")
            setSelectedDate(parsedData.selectedDate ? new Date(parsedData.selectedDate) : null)
            setSelectedTime(parsedData.selectedTime || "")
            setFirstName(parsedData.firstName || "")
            setLastName(parsedData.lastName || "")
            setCourse(parsedData.course || "")
            setStage(parsedData.stage || "")
            setStudyPlan(parsedData.studyPlan || "Select")
            setStep(2)
        }
    }, [])

    return (
        <div className="flex justify-center items-center mr-3">
            <div className="bg-gradient-to-r from-green-300 to-blue-400 rounded-lg shadow-md flex flex-col lg:flex-row">
                {step === 1 && (
                    <div className="p-6">
                        <form onSubmit={(e) => e.preventDefault()} className='border-2 p-8 rounded-lg shadow-lg bg-white'>
                            <div className="mb-4">
                                <label className="block text-gray-700">Degree you’re planning to study</label>
                                <div className="flex space-x-4 mt-2">
                                    <button
                                        type="button"
                                        className={`border-2 px-4 py-2 rounded-md ${degree === "Bachelor's" ? 'border-blue-600 text-blue-600' : 'border-gray-300 text-gray-500'}`}
                                        onClick={() => handleDegreeClick("Bachelor's")}
                                    >
                                        Bachelor's
                                    </button>
                                    <button
                                        type="button"
                                        className={`border-2 px-4 py-2 rounded-md ${degree === "Master's" ? 'border-blue-600 text-blue-600' : 'border-gray-300 text-gray-500'}`}
                                        onClick={() => handleDegreeClick("Master's")}
                                    >
                                        Master's
                                    </button>
                                </div>
                                {validationErrors.degree && <p className="text-red-500 text-sm">{validationErrors.degree}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">When are you going to study abroad?</label>
                                <div className="flex space-x-4 mt-2">
                                    {['2024', '2025', '2026'].map((year) => (
                                        <button
                                            key={year}
                                            type="button"
                                            className={`border-2 px-4 py-2 rounded-md ${studyYear === year ? 'border-blue-600 text-blue-600' : 'border-gray-300 text-gray-500'}`}
                                            onClick={() => handleStudyYearClick(year)}
                                        >
                                            {year}
                                        </button>
                                    ))}
                                </div>
                                {validationErrors.studyYear && <p className="text-red-500 text-sm">{validationErrors.studyYear}</p>}
                            </div>
                            <div className="mb-4 rounded-md">
                                <label className="block text-gray-700">How are you planning your study abroad process?</label>
                                <select value={studyPlan} onChange={(e) => setStudyPlan(e.target.value)} className="w-full mt-2 px-4 py-2 border rounded-md shadow-md">
                                    <option>Select</option>
                                    <option>I’m doing it myself</option>
                                    <option>Joined another consultancy</option>
                                    <option>Need professional counselling</option>
                                    <option>Don’t know, I’m not sure</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email ID</label>
                                <input
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full mt-2 px-4 py-2 border rounded-md"
                                    placeholder="eg: example@gmail.com"
                                />
                                {validationErrors.email && <p className="text-red-500 text-sm">{validationErrors.email}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Mobile number</label>
                                <div className="flex mt-2">
                                    <select
                                        value={countryCode}
                                        onChange={(e) => setCountryCode(e.target.value)}
                                        className="border rounded-l-md px-4 py-2"
                                    >
                                        {countryCodes.map((country, index) => (
                                            <option key={`${country.code}-${index}`} value={country.code}>
                                                {country.flag} {country.code}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="tel"
                                        onChange={(e) => setMobile(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-r-md"
                                        placeholder="eg. 12345 78901"
                                    />
                                </div>
                                {validationErrors.mobile && <p className="text-red-500 text-sm">{validationErrors.mobile}</p>}
                            </div>
                            <div className="mb-4">
                                <button onClick={slotBooking} className="block w-full bg-orange-500 text-white text-center py-2 px-4 rounded hover:bg-orange-600">
                                    Book a Slot
                                </button>
                            </div>
                        </form>
                    </div>
                )}
                {step === 2 && (
                    <div className="p-6">
                        <form onSubmit={(e) => e.preventDefault()} className='border-2 p-8 rounded-lg shadow-lg bg-white'>
                            <div className="mb-4">
                                <label className="block text-gray-700">Select Booking date</label>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    minDate={new Date()}
                                    maxDate={maxDate}
                                    className="w-full mt-2 px-4 py-2 border rounded-md"
                                    placeholderText="Select a date"
                                />
                                {validationErrorsStep2.selectedDate && <p className="text-red-500 text-sm">{validationErrorsStep2.selectedDate}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Select time</label>
                                <select
                                    value={selectedTime}
                                    onChange={(e) => setSelectedTime(e.target.value)}
                                    className="w-full mt-2 px-4 py-2 border rounded-md"
                                >
                                    <option>Select a slot</option>
                                    {timeSlots.map((time) => (
                                        <option key={time} value={time}>{time}</option>
                                    ))}
                                </select>
                                {validationErrorsStep2.selectedTime && <p className="text-red-500 text-sm">{validationErrorsStep2.selectedTime}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Full name</label>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full mt-2 px-4 py-2 border rounded-md"
                                    placeholder="Full name"
                                />
                                {validationErrorsStep2.firstName && <p className="text-red-500 text-sm">{validationErrorsStep2.firstName}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Course you’re interested in</label>
                                <input
                                    type="text"
                                    value={course}
                                    onChange={(e) => setCourse(e.target.value)}
                                    className="w-full mt-2 px-4 py-2 border rounded-md"
                                    placeholder="Search your course"
                                    list="courses"
                                />
                                {validationErrorsStep2.course && <p className="text-red-500 text-sm">{validationErrorsStep2.course}</p>}
                                <datalist id="courses">
                                    {courses.map((course) => (
                                        <option key={course} value={course} />
                                    ))}
                                </datalist>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Where are you in your study abroad journey?</label>
                                <select
                                    value={stage}
                                    onChange={(e) => setStage(e.target.value)}
                                    className="w-full mt-2 px-4 py-2 border rounded-md"
                                >
                                    <option>Select Stage</option>
                                    {stages.map((stage) => (
                                        <option key={stage} value={stage}>{stage}</option>
                                    ))}
                                </select>
                                {validationErrorsStep2.stage && <p className="text-red-500 text-sm">{validationErrorsStep2.stage}</p>}
                            </div>
                            <div className="mb-4">
                                <button
                                    onClick={handleFinishBooking}
                                    className="block w-full bg-orange-500 text-white text-center py-2 px-4 rounded hover:bg-orange-600"
                                    disabled={finishloading}>
                                    {finishloading ? (
                                        <div className="flex justify-center items-center">
                                            <svg className="animate-spin h-5 w-5 mr-3 border-t-2 border-r-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
                                            Scheduling Slot...
                                        </div>
                                    ) : (
                                        "Finish Booking"
                                    )}
                                </button>
                            </div>

                        </form>
                    </div>
                )}
                {step === 3 && (
                    <div className="p-6">
                        <div className="text-center w-full">
                            <h2 className="text-3xl mb-2 text-white font-extrabold">Your Call is Booked!</h2>
                            <p className="text-2xl mb-2">
                                <span className="font-bold">{selectedDate?.toLocaleDateString()}</span> at <span className="font-bold">{selectedTime}</span>
                            </p>
                            <p className="text-lg mb-4 bg-white text-gray-500 p-6 rounded-lg">
                                You will Recieve Meeting Link from one of our expert Couselors on your registred <span className='font-bold text-green-500'>Whatsapp Number</span></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookCall;
