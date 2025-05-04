# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/a6d15ed8-e831-4fb4-8bf6-9c881106e5ca

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/a6d15ed8-e831-4fb4-8bf6-9c881106e5ca) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/a6d15ed8-e831-4fb4-8bf6-9c881106e5ca) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)


# Portfolio Website - User Guide
## Overview
This is your personal portfolio website where you can showcase your work, achievements, and contact details. You will have full control over the content, such as updating your details, adding new projects, and deploying the changes online.

Below are the steps for you to use the website, make changes, and deploy it without needing to know any code.

## Step 1: Getting Started
1.1 Accessing the Website Files
You can download the website files in two main ways:

Download a ZIP file: Download the files directly to your computer and extract them.

Clone the Git Repository: If you are comfortable with Git, you can clone the repository to your computer. (This option is optional.)

To download the files:

Visit the GitHub repository link.

Click on the green Code button and select Download ZIP.

Extract the ZIP file to a folder on your computer.

## Step 2: Editing Your Website Content
You can make changes to the website's content such as:

Your name

Your contact details

Your portfolio projects

### 2.1 Editing Personal Information (e.g., Name, Contact, Bio)
Open the extracted folder or cloned repository on your computer.

Look for the index.html or a similar file (it should be named something like index.html, about.html, etc.).

Open this file with a simple text editor (such as Notepad or TextEdit).

You’ll see sections marked for your name, bio, and contact details. These sections will look something like:

html
Copy
Edit
<h1>John Doe</h1>
<p>Contact: johndoe@example.com</p>
<p>Bio: A short bio about yourself</p>
Edit the text inside the <h1> and <p> tags to update your information. Save the changes when done.

### 2.2 Editing Portfolio Projects
Inside the same folder, look for a file that lists your portfolio projects (often called projects.html or a similar name).

Open the file in your text editor.

You’ll see sections or lists where your projects are listed with images and descriptions. It will look something like this:

html
Copy
Edit
<div class="project">
   <h2>Project Name</h2>
   <p>Description of the project.</p>
   <img src="project_image.jpg" alt="Project Image">
</div>
Edit the details of each project in the same way: change the project name, description, and image link.

If you want to add a new project, simply copy and paste the code for an existing project and change the details.

### 2.3 Adding New Sections or Details
If you want to add additional sections, such as testimonials or a blog, you can follow the same steps as above: find the relevant HTML file, copy a similar block, and modify the content as needed.

## Step 3: Previewing the Changes
To see the changes you’ve made to the website:

Once you have edited the HTML files, you can open the website in a browser.

Go to the folder where your files are stored.

Double-click on the index.html file. This will open your website in a web browser, and you will be able to see the updates you’ve made.

## Step 4: Deploying Your Website Online
After making the necessary changes, you’ll want to deploy the updated website so it’s live on the internet.

### 4.1 Using GitHub Pages (Recommended for Beginners)
If you’ve used GitHub to store your website files, you can deploy the website using GitHub Pages, which is free and simple.

Step-by-step:
Push the Files to GitHub: If you've edited the files locally, you'll need to upload them to GitHub.

Go to the GitHub repository and click on Add file > Upload files.

Select all the updated files (including your HTML files and images) and click Commit changes.

Enable GitHub Pages:

Go to the repository’s Settings.

Scroll down to the GitHub Pages section.

In the Source dropdown, select main branch (or the branch where your files are).

Click Save.

Access Your Live Website: GitHub will provide you with a link to your website once the process is complete. You can share this link with others!

## Step 5: Regular Maintenance and Updates
Whenever you need to make updates to your website (new projects, changing contact details, etc.), simply follow the steps from Step 2 and Step 4 to modify the files and deploy them again.

## Conclusion
You're now the proud owner of your portfolio website! By following these simple steps, you can easily make changes to your website and deploy them live for the world to see.

If you run into any issues or need additional help, feel free to reach out.