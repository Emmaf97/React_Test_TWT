import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __filename and __dirname equivalents
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the source and destination directories
const sourceDir = path.join(__dirname, '../frontend/dist'); // Adjust this path as needed
const destDir = path.join(__dirname, '../backend/staticfiles/static'); // Adjust this path as needed

// Copy static files from source to destination
fs.copy(sourceDir, destDir)
  .then(() => console.log('Static files copied successfully!'))
  .catch(err => console.error('Error copying static files:', err));