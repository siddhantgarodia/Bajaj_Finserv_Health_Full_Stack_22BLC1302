@echo off
echo Preparing to deploy to Vercel...

REM Check if Vercel CLI is installed
call vercel --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Vercel CLI not found. Installing...
    call npm install -g vercel
)

echo.
echo Deploying to Vercel...
call vercel

echo.
echo To deploy to production, run: vercel --prod
