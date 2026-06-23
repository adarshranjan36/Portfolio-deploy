# Setup Instructions

## Environment Setup

### 1. Install Dependencies
```bash
npm run install:all
```

### 2. Start Development Server
```bash
npm run dev
```

The application will be available at http://localhost:3000

### 3. Build for Production
```bash
npm run build
```

The production build will be in `client/dist/`

## Project Structure

```
MyPortfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.jsx        # Main app component
│   │   ├── main.jsx       # Entry point
│   │   └── index.css      # Global styles
│   ├── public/            # Static assets
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── package.json          # Root package file
├── README.md
└── SETUP.md
```

## Features Implemented

### Frontend
- ✅ Modern UI with TailwindCSS
- ✅ Dark/Light mode toggle
- ✅ Responsive design
- ✅ Smooth animations with Framer Motion
- ✅ Hero section with profile info
- ✅ About section (dual profile: Developer & Tester)
- ✅ Skills section with progress bars
- ✅ Projects showcase
- ✅ Contact form with Formspree integration
- ✅ Navigation with mobile menu
- ✅ Footer with social links
- ✅ Image loading states with skeleton UI

## Contact Form Setup

The contact form uses Formspree for email delivery:

1. Go to https://formspree.io/ and create a free account
2. Create a new form and get your Form ID
3. Update the form ID in `client/src/components/Contact.jsx` (line 27):
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

## Troubleshooting

### Port Already in Use
- Change the port in `client/vite.config.js`
- Or kill the process using port 3000

### Frontend Not Loading
- Check if the dev server is running on port 3000
- Check browser console for errors
- Ensure all dependencies are installed

### Contact Form Not Working
- Verify your Formspree form ID is correct
- Check browser console for API errors
- Ensure Formspree form is active in your dashboard

## Deployment

### Frontend (Vercel/Netlify)
1. Build the client: `npm run build`
2. Deploy the `client/dist` folder to your hosting platform
3. No backend needed - Formspree handles contact forms

### Customization

### Update Profile Information
Edit the following files:
- `client/src/components/Hero.jsx` - Name, title, contact info
- `client/src/components/About.jsx` - About text, education, achievements
- `client/src/components/Skills.jsx` - Skills and proficiency levels
- `client/src/components/Projects.jsx` - Projects and technologies
- `client/src/components/Contact.jsx` - Contact information

### Update Colors
Edit `client/tailwind.config.js` to customize the color scheme.

### Add New Projects
Add new project objects to the `projects` array in `client/src/components/Projects.jsx`.
