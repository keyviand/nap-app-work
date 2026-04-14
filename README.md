# Blood Sugar Tracker

A simple GitHub Pages-ready website for tracking blood sugar readings.

## Features
- Save blood sugar readings
- Record whether the user ate something
- Save meal date and meal time
- Automatically add the reading date and time
- Print entries for a doctor
- Export entries as CSV
- Stores entries in browser local storage

## Important
Because this version is designed for GitHub Pages, it uses **localStorage**.
That means:
- entries are saved on the same browser/device
- data will not sync across phones or computers
- clearing browser data can erase entries

If you want, the next version can use **Firebase** so users can log in and keep their data online.

## How to publish on GitHub Pages
1. Create a new GitHub repository
2. Upload `index.html`, `style.css`, `script.js`, and `README.md`
3. Go to repository **Settings**
4. Open **Pages**
5. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
6. Save
7. GitHub will give you a live website link

## File list
- `index.html`
- `style.css`
- `script.js`
