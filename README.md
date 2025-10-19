# mkdemo3 — Moose Knuckles NFC Authenticity Demo

**Author:** Ansh Chatrath  
**Project Type:** Front-end NFC authenticity demo  

---

## **Project Overview**

`mkdemo3` is an interactive demo designed to validate the authenticity of a Moose Knuckles jacket using its NFC tag. This project was created to solve a real-world problem where the official NFC tag for a purchased jacket stopped working. It demonstrates a full end-to-end solution for:

- NFC tag verification
- Full-screen video animation
- Dynamic, readable overlay with jacket information
- Mobile and desktop friendly interface

The demo also includes sequential fade-in animations for the authenticity information and a “Done” button that redirects to the official Moose Knuckles website.

---

## **Key Features**

1. **Full-Screen Video Animation**  
   Plays a custom video upon loading to simulate an authentication animation.

2. **Background Image Post-Video**  
   Once the video ends, a clear background image appears behind the overlay.

3. **Overlay with Jacket Info**  
   Displays:
   - Item Name
   - Size
   - UID (unique ID)
   - Owner  
   Information is shown in a clean key-value box with sequential fade-in animations.

4. **Mobile & Desktop Compatible**  
   Uses responsive design and `object-fit: cover` for videos to work seamlessly on all devices.

5. **Done Button**  
   Redirects the user to the official Moose Knuckles website after viewing authenticity details.

---

## **Tech Stack**

- **HTML/CSS/JS** — for structure, styling, and interactivity  
- **No backend required** — static deployment using GitHub Pages or any static host  
- **Video & Image Assets** — fully integrated for a polished visual experience  

---

## **How to Use**

1. Clone the repository:

```bash
git clone https://github.com/yourusername/mkdemo3.git
