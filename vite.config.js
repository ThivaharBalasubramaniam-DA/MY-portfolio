/**
 * Organization: Orbytes Global Solutions
 * Owner: Logaraj S
 * Created at: 2026-10-21
 * Description: Governed by ManageMyOpz React coding standards. Vite configuration with base path for GitHub Pages.
 */

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/MY-portfolio/',
  plugins: [react()],
})
