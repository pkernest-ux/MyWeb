import React from 'react';
import { createRoot } from 'react-dom/client';
import VenueApp from './ar-v4-venue-app';
import './ar-v3.css';
import './ar-v4-navigation.css';

const root = document.getElementById('ar-v4-navigation-root');
if (!root) throw new Error('Missing V4 navigation root');
createRoot(root).render(<React.StrictMode><VenueApp /></React.StrictMode>);
