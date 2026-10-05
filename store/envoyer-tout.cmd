@echo off
rem Envoie les 6 applis sur la piste Production du Play Store (brouillon) : fichier + fiche complete.
cd /d "%~dp0.."
if not exist node_modules\googleapis call npm i --no-save --no-package-lock googleapis
set PLAY_KEY=C:\Users\PATCHENKO\Desktop\signal_copier_COMPLET_v1.1.3\.secrets\google-play-service-account.json
for %%a in (maths-6e maths-5e maths-4e maths-3e electricien froid-clim) do (
  echo.
  echo === %%a
  node store\envoyer.js %%a production draft
)
echo.
pause
