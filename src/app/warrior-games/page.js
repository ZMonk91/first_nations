"use client"; // This file is a client-side script
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt, faMedal, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function WarriorGames() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'emerald' : 'dark');
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Head>
        <title>Warrior Games - First Nations Consulting LLC</title>
        <meta name="description" content="Warrior Games - Celebrating the strength and resilience of our wounded warriors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="navbar bg-base-200">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Warrior Games</a>
        </div>

      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="hero bg-base-200 rounded-box mb-8">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold mb-4">Warrior Games</h1>
              <p className="text-lg mb-6">Celebrating the strength and resilience of our wounded warriors</p>
              <div className="flex justify-center space-x-4">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCalendarAlt} className="h-5 w-5 mr-2" />
                  <span>July 2025</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 mr-2" />
                  <span>Colorado Springs, CO</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">What are the Warrior Games?</h2>
              <p>
                The DoD Warrior Games is an annual multi-sport event celebrating the resilience and athleticism of wounded, ill, and injured service members and veterans. Participants from across the U.S. military and allied nations compete in various disciplines, showcasing their strength and determination.
              </p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Why It Matters</h2>
              <p>
                More than a competition, the Warrior Games symbolize recovery and rehabilitation. They foster camaraderie among participants, raise awareness of the challenges faced by wounded warriors, and inspire support for their well-being. The event is a powerful testament to human perseverance and the indomitable spirit of those who serve.
              </p>
            </div>
          </div>
        </section>

        <section className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title">Coming Soon</h2>
            <p>Stay tuned for more information about the upcoming Warrior Games, including:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Detailed event schedule</li>
              <li>Participant profiles</li>
              <li>Spectator information</li>
              <li>Volunteer opportunities</li>
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {['Archery', 'Cycling', 'Track & Field', 'Wheelchair Basketball'].map((sport, index) => (
            <div key={index} className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <FontAwesomeIcon icon={faMedal} className="h-8 w-8 mb-2" />
                <h3 className="card-title">{sport}</h3>
              </div>
            </div>
          ))}
        </section>
      </main>

    </div>
  );
}