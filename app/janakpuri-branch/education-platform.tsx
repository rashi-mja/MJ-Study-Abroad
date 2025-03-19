"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, GraduationCap, BarChart3, Globe, ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig"

export default function EducationPlatform() {
  const [formStep, setFormStep] = useState(0)
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    countryCode: "+91",
    mobile: "",
    email: "",
    degree: "",
    city: "",
    selectedDate: "",
    selectedTime: "",
    additionalInfo: "",
    branchLocation: "Janakpuri",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formStep)
    if (formStep === 1) {
      try {
        await addDoc(collection(db, "students"), formData);
        alert("Form submitted successfully!");
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Error submitting form.");
      }
    } else {
      setFormStep(1);
    }
  };

  const programOptions = [
    {
      id: "undergrad",
      title: "Undergraduate",
      description: "Bachelor's degrees across various disciplines",
      icon: <BookOpen className="h-5 w-5" />,
      color: "bg-blue-500/10 text-blue-500",
      stats: { universities: "500+", countries: "25+", scholarships: "€2M+" },
    },
    {
      id: "postgrad",
      title: "MS & Ph.D.",
      description: "Advanced research and specialized master's programs",
      icon: <GraduationCap className="h-5 w-5" />,
      color: "bg-purple-500/10 text-purple-500",
      stats: { universities: "350+", countries: "20+", scholarships: "€5M+" },
    },
    {
      id: "mba",
      title: "MBA",
      description: "Business administration for future leaders",
      icon: <BarChart3 className="h-5 w-5" />,
      color: "bg-amber-500/10 text-amber-500",
      stats: { universities: "200+", countries: "15+", scholarships: "€3M+" },
    },
    {
      id: "mim",
      title: "MIM",
      description: "Masters in Management for early career professionals",
      icon: <Globe className="h-5 w-5" />,
      color: "bg-emerald-500/10 text-emerald-500",
      stats: { universities: "150+", countries: "12+", scholarships: "€1.5M+" },
    },
  ]

  const testimonials = [
    {
      name: "Rohan Mehta",
      program: "Data Science at Carnegie Mellon University",
      avatar: "/placeholder.svg?height=40&width=40",
      quote: "The structured guidance helped me land admission to a top-ranked program.",
    },
    {
      name: "Ananya Iyer",
      program: "Medicine at University of Toronto",
      avatar: "/placeholder.svg?height=40&width=40",
      quote: "I wouldn't have navigated the complex admissions process without their help!",
    },
    {
      name: "Karthik Reddy",
      program: "Law at Harvard University",
      avatar: "/placeholder.svg?height=40&width=40",
      quote: "The personal guidance I received made my dream of studying law a reality.",
    },
    {
      name: "Ishita Patel",
      program: "Fine Arts at Royal College of Art",
      avatar: "/placeholder.svg?height=40&width=40",
      quote: "Their portfolio review and application strategy gave me the confidence to apply!",
    },
    {
      name: "Himanshu Verma",
      program: "Mechanical Engineering at University of Tokyo",
      avatar: "/placeholder.svg?height=40&width=40",
      quote: "Thanks to their mentorship, I secured a spot in one of the best engineering schools!",
    },
    {
      name: "Sneha Nair",
      program: "Psychology at Stanford University",
      avatar: "/placeholder.svg?height=40&width=40",
      quote: "I was guided at every step, from SOP writing to interview prep. Amazing support!",
    },
    {
      name: "Arjun Malhotra",
      program: "International Relations at LSE",
      avatar: "/placeholder.svg?height=40&width=40",
      quote: "Their guidance helped me craft a compelling application that stood out.",
    },
    {
      name: "Sanya Gupta",
      program: "MIM at ESSEC Business School",
      avatar: "/placeholder.svg?height=40&width=40",
      quote: "Their in-depth knowledge of European universities helped me get into a top MIM program!",
    },
    {
      name: "Aditya Das",
      program: "Artificial Intelligence at University of Amsterdam",
      avatar: "/placeholder.svg?height=40&width=40",
      quote: "The application strategy and resume review were game changers for me!",
    },
  ];

  const handleProgramSelect = (id: string) => {
    setSelectedProgram(id)
    setFormStep(1)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container px-4 py-12 mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Badge variant="outline" className="px-4 py-1 border-slate-900/20 bg-slate-900/5 text-slate-900 dark:border-slate-50/20 dark:bg-slate-50/5 dark:text-slate-50">
              Your Global Education Partner
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Begin your journey to the world's
              <span className="text-slate-900 block mt-1 dark:text-slate-50">top universities</span>
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg dark:text-slate-400">
              Expert guidance, personalized support, and a seamless application process to help you achieve your
              international education dreams.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Tabs defaultValue="programs" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="programs">Study Programs</TabsTrigger>
                <TabsTrigger value="testimonials">Student Success Stories</TabsTrigger>
              </TabsList>
              <TabsContent value="programs">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {programOptions.map((program) => (
                    <motion.div key={program.id} variants={itemVariants}>
                      <Card className="h-full overflow-hidden group border-slate-200/40 hover:border-slate-900/50 transition-all duration-300 hover:shadow-md dark:border-slate-800/40 dark:hover:border-slate-50/50">
                        <CardHeader className={cn("flex flex-row items-center gap-4", program.color)}>
                          <div className="rounded-full p-2 bg-white dark:bg-slate-950">{program.icon}</div>
                          <div>
                            <CardTitle className="text-xl">Study {program.title} Abroad</CardTitle>
                            <CardDescription>{program.description}</CardDescription>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="grid grid-cols-3 gap-2 mb-6">
                            <div className="text-center">
                              <p className="text-lg font-bold text-slate-900 dark:text-slate-50">{program.stats.universities}</p>
                              <p className="text-xs text-slate-500 dark:text-slate-400">Universities</p>
                            </div>
                            <div className="text-center">
                              <p className="text-lg font-bold text-slate-900 dark:text-slate-50">{program.stats.countries}</p>
                              <p className="text-xs text-slate-500 dark:text-slate-400">Countries</p>
                            </div>
                            <div className="text-center">
                              <p className="text-lg font-bold text-slate-900 dark:text-slate-50">{program.stats.scholarships}</p>
                              <p className="text-xs text-slate-500 dark:text-slate-400">Scholarships</p>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            onClick={() => handleProgramSelect(program.id)}
                            className="w-full group-hover:bg-slate-900 group-hover:text-slate-50 transition-all duration-300 dark:group-hover:bg-slate-50 dark:group-hover:text-slate-900"
                          >
                            Learn More{""}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
              <TabsContent value="testimonials">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index} className="border-slate-200/40 dark:border-slate-800/40">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          {/* <Avatar>
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback>
                              {testimonial.name
                                .split("")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar> */}
                          <div>
                            <CardTitle className="text-base">{testimonial.name}</CardTitle>
                            <CardDescription className="text-xs">{testimonial.program}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm italic">"{testimonial.quote}"</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Card className="border-slate-200/40 shadow-lg dark:border-slate-800/40">
              <CardHeader className="bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900">
                <CardTitle className="text-xl">Schedule a One-on-One Call</CardTitle>
                <CardDescription className="text-slate-50/80 dark:text-slate-900/80">
                  Get personalized guidance from our experts
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                {formStep === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your name" />
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                      <div className="space-y-2">
                        <Label htmlFor="countryCode">Code</Label>
                        <Select name="countryCode" value={formData.countryCode} onValueChange={(value) => setFormData({ ...formData, countryCode: value })}>
                          <SelectTrigger id="countryCode">
                            <SelectValue placeholder={formData.countryCode} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="+91">+91</SelectItem>
                            <SelectItem value="+1">+1</SelectItem>
                            <SelectItem value="+44">+44</SelectItem>
                            <SelectItem value="+61">+61</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="col-span-3 space-y-2">
                        <Label htmlFor="mobile">mobile Number</Label>
                        <Input id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter your mobile number" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Enter your email" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="degree">degreeed In</Label>
                      <Select name="degree" value={formData.degree} onValueChange={(value) => setFormData({ ...formData, degree: value })}>
                        <SelectTrigger id="degree">
                          <SelectValue placeholder="Select your degree" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="undergrad">Undergraduate Studies</SelectItem>
                          <SelectItem value="postgrad">Postgraduate Studies</SelectItem>
                          <SelectItem value="mba">MBA Programs</SelectItem>
                          <SelectItem value="mim">MIM Programs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">Your City</Label>
                      <Select name="city" value={formData.city} onValueChange={(value) => setFormData({ ...formData, city: value })}>
                        <SelectTrigger id="city">
                          <SelectValue placeholder="Select your city" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mumbai">Mumbai</SelectItem>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="bangalore">Bangalore</SelectItem>
                          <SelectItem value="hyderabad">Hyderabad</SelectItem>
                          <SelectItem value="chennai">Chennai</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="selectedDate">Preferred Date</Label>
                      <Input id="selectedDate" name="selectedDate" type="date" value={formData.selectedDate} onChange={handleChange} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="selectedTime">Preferred Time</Label>
                      <Select name="selectedTime" value={formData.selectedTime} onValueChange={(value) => setFormData({ ...formData, selectedTime: value })}>
                        <SelectTrigger id="selectedTime">
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                          <SelectItem value="evening">Evening (4PM - 7PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Input id="additionalInfo" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} placeholder="Any specific questions or requirements?" />
                    </div>

                    <Button variant="outline" className="w-full" onClick={() => setFormStep(0)}>
                      Back to Details
                    </Button>
                  </motion.div>
                )}
              </CardContent>

              <CardFooter className="bg-slate-100/30 flex flex-col gap-4 dark:bg-slate-800/30">
                <Button
                  className="w-full"
                  type="submit"
                >
                  {formStep === 0 ? "Continue" : "Schedule Consultation"}
                </Button>

                <HoverCard>
                  <HoverCardTrigger asChild>
                    <p className="text-xs text-center text-slate-500 cursor-help dark:text-slate-400">
                      What happens next? <ChevronDown className="h-3 w-3 inline-block" />
                    </p>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-medium">Your Journey with Us</h4>
                      <Separator />
                      <div className="grid gap-1">
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-slate-900 mt-0.5 dark:text-slate-50" />
                          <p className="text-sm">Expert consultation to understand your goals</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-slate-900 mt-0.5 dark:text-slate-50" />
                          <p className="text-sm">Personalized university recommendations</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-slate-900 mt-0.5 dark:text-slate-50" />
                          <p className="text-sm">Application assistance and document review</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-slate-900 mt-0.5 dark:text-slate-50" />
                          <p className="text-sm">Visa guidance and pre-departure support</p>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </CardFooter>
            </Card>
          </form>
        </div>

        <div className="rounded-xl bg-slate-100/50 p-6 border border-slate-200 border-slate-200/40 dark:bg-slate-800/50 dark:border-slate-800 dark:border-slate-800/40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Why Choose Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-slate-900 mt-1 dark:text-slate-50" />
                  <span className="text-sm">15+ years of experience in global education</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-slate-900 mt-1 dark:text-slate-50" />
                  <span className="text-sm">98% visa success rate</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-slate-900 mt-1 dark:text-slate-50" />
                  <span className="text-sm">Partnerships with 1000+ universities worldwide</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-slate-900 mt-1 dark:text-slate-50" />
                  <span className="text-sm">Dedicated counselors for personalized guidance</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-slate-900 mt-1 dark:text-slate-50" />
                  <span className="text-sm">University selection and application</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-slate-900 mt-1 dark:text-slate-50" />
                  <span className="text-sm">Scholarship and financial aid guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-slate-900 mt-1 dark:text-slate-50" />
                  <span className="text-sm">Visa application assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-slate-900 mt-1 dark:text-slate-50" />
                  <span className="text-sm">Pre-departure orientation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Top Destinations</h3>
              <div className="grid grid-cols-2 gap-2">
                <Badge variant="outline" className="justify-start">
                  USA
                </Badge>
                <Badge variant="outline" className="justify-start">
                  UK
                </Badge>
                <Badge variant="outline" className="justify-start">
                  Canada
                </Badge>
                <Badge variant="outline" className="justify-start">
                  Australia
                </Badge>
                <Badge variant="outline" className="justify-start">
                  Germany
                </Badge>
                <Badge variant="outline" className="justify-start">
                  France
                </Badge>
                <Badge variant="outline" className="justify-start">
                  Singapore
                </Badge>
                <Badge variant="outline" className="justify-start">
                  Netherlands
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

