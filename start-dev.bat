@echo off
setlocal

rem Always run from the directory where this script lives
cd /d "%~dp0"

rem Start Next.js dev server in a new window that stays open
start "Next Dev Server" cmd /k "npm run dev"

rem Give the server a moment to boot before opening the browser
timeout /t 3 /nobreak >nul

rem Launch the default browser pointing to the local dev URL
start "" "http://localhost:3000/"
