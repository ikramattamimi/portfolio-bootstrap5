# Portfolio Website Using Bootstrap 5

This is my personal portfolio website, built using Bootstrap 5 with a modern, modular architecture. The portfolio showcases my professional experience, projects, technical skills, and provides ways to contact me. The starter template is based on a YouTube tutorial by Yunus Almeide [here](https://youtu.be/4TEtR_HvCZk?si=KcZyzLFadKcnyCDw).

## Demo
You can view the live version of this portfolio here: [Demo Link](https://ikramattamimi.github.io/portfolio/)

## Key Features
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modular Architecture**: Sections are loaded dynamically using JavaScript for better maintainability
- **Header Section**: Professional introduction with links to social media profiles
- **Experience Section**: Detailed work history and professional experience
- **Projects Showcase**: Portfolio of completed projects with descriptions, images, and live links
- **Tech Stack Display**: Visual representation of technologies and tools I work with
- **CV Section**: Downloadable resume/CV
- **Contact Form**: Easy way for visitors to reach out
- **Dark Theme**: Modern dark theme for better user experience
- **Smooth Navigation**: Sticky navbar with smooth scrolling to sections

## Project Structure
```
portfolio-bootstrap5/
├── index.html              # Main entry point
├── sections-loader.js      # Dynamic section loader
├── sections/               # Modular HTML sections
│   ├── header.html
│   ├── experience.html
│   ├── projects.html
│   ├── techstack.html
│   ├── cv.html
│   ├── contact.html
│   └── footer.html
├── styles/
│   └── style.css          # Custom styles
├── images/                # Project images and assets
└── doc/                   # Documentation files
```

## Technologies Used
- **HTML5 & CSS3**: Core structure and styling
- **[Bootstrap 5.3.2](https://getbootstrap.com/)**: Responsive framework
- **JavaScript (ES6+)**: Dynamic content loading and interactions
- **[Boxicons](https://boxicons.com/)**: Icon library
- **[Font Awesome 6](https://fontawesome.com/)**: Additional icon sets
- **[Devicon](https://devicons.github.io/devicon/)**: Technology stack icons
- **[Swiper.js](https://swiperjs.com/)**: Touch slider for projects

## How to Use

### Local Development
1. Clone this repository to your computer:
   ```bash
   git clone https://github.com/ikramattamimi/portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Open `index.html` in your web browser, or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

4. Visit `http://localhost:8000` in your browser

### Customization
- **Personal Info**: Edit the HTML files in the `sections/` folder
- **Projects**: Update `sections/projects.html` with your own projects
- **Styling**: Modify `styles/style.css` for custom styles
- **Images**: Add your project images to the `images/` folder
- **Sections**: Add or remove sections by modifying `sections-loader.js`

## Deployment
This portfolio is ready to be deployed on:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributions
Contributions are welcome! If you'd like to contribute:
1. Fork this repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is open source and available for personal and educational use.

## Contact
Feel free to reach out through the contact form on the website or connect with me on social media!

---

Thank you for checking out my portfolio! ⭐
