import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, GraduationCap, Building2 } from 'lucide-react';

const LOCATIONS = ['Bangalore', 'Chennai', 'Mumbai', 'Pune', 'Hyderabad', 'Delhi-NCR', 'Coimbatore'];
const COURSES = ['BTech', 'MBA', 'BCA', 'MCA', 'BBA', 'BCom', 'MBBS', 'BSc Nursing'];
const COLLEGES = ['Christ-University', 'VIT-Vellore', 'SRM-University', 'Manipal-University', 'Symbiosis-International'];

const SEOInternalLinks = () => {
    return (
        <section className="py-12 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Top Locations Network */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2 text-primary font-semibold mb-3">
                            <MapPin className="w-5 h-5" />
                            <h3 className="text-lg">Top Cities for Admissions</h3>
                        </div>
                        <ul className="grid grid-cols-2 gap-2 text-sm">
                            {LOCATIONS.map(location => (
                                <li key={location}>
                                    <Link
                                        to={`/colleges-in-${location.toLowerCase()}`}
                                        className="text-gray-600 hover:text-primary transition-colors flex items-center group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-primary mr-2 transition-colors"></span>
                                        {location} Admissions
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular Courses Network */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2 text-primary font-semibold mb-3">
                            <GraduationCap className="w-5 h-5" />
                            <h3 className="text-lg">Trending Courses</h3>
                        </div>
                        <ul className="grid grid-cols-2 gap-2 text-sm">
                            {COURSES.map(course => (
                                <li key={course}>
                                    <Link
                                        to={`/admissions-for-${course.toLowerCase()}`}
                                        className="text-gray-600 hover:text-primary transition-colors flex items-center group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-primary mr-2 transition-colors"></span>
                                        {course} Colleges
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Featured Colleges Network */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2 text-primary font-semibold mb-3">
                            <Building2 className="w-5 h-5" />
                            <h3 className="text-lg">Featured Institutions</h3>
                        </div>
                        <ul className="grid grid-cols-1 gap-2 text-sm">
                            {COLLEGES.map(college => (
                                <li key={college}>
                                    <Link
                                        to={`/institutions/${college.toLowerCase()}`}
                                        className="text-gray-600 hover:text-primary transition-colors flex items-center group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-primary mr-2 transition-colors"></span>
                                        {college.replace('-', ' ')}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SEOInternalLinks;
