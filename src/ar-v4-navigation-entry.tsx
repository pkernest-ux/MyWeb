import React from 'react';
import { createRoot } from 'react-dom/client';
import ARNavigationV3 from './ar-v3-app';
import PublicGuide from './ar-v4-public-guide';
import {loadPublicProject} from './ar-v4-public-data';
import './ar-v3.css';
import './ar-v4-navigation.css';

const root = document.getElementById('ar-v4-navigation-root');
if (!root) throw new Error('Missing V4 navigation root');
createRoot(root).render(<React.StrictMode><ARNavigationV3 v4RouteFocus PublicGuide={PublicGuide} loadPublicProject={loadPublicProject} /></React.StrictMode>);
