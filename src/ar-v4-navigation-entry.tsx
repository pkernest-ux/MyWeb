import React from 'react';
import { createRoot } from 'react-dom/client';
import ARNavigationV3 from './ar-v3-app';
import './ar-v3.css';
import './ar-v4-navigation.css';

const root = document.getElementById('ar-v4-navigation-root');
if (!root) throw new Error('Missing V4 navigation root');
createRoot(root).render(<React.StrictMode><ARNavigationV3 v4RouteFocus /></React.StrictMode>);
