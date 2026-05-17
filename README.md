# Music Controller

This project is a web application that allows multiple users to control music playback in a shared room, integrating with the Spotify API. Users can create rooms, set permissions (e.g., guest can pause), and vote to skip songs.

## Features

- Create a music room with custom settings (e.g., votes to skip, guest pause control).
- Join existing music rooms using a unique code.
- Spotify API integration for playing, pausing, and skipping songs.
- Real-time synchronization of music playback across all room members.
- React-based frontend for a dynamic user interface.

## Setup Instructions

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Python 3.8+
- Node.js and npm/yarn

### 1. Clone the repository

```bash
git clone <repository_url>
cd music_controller
```

### 2. Backend Setup (Django)

Create a Python virtual environment and install the dependencies:

```bash
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
pip install -r requirements.txt
```

#### Environment Variables

Create a `.env` file in the root of the `music_controller` directory with your Spotify API credentials:

```dotenv
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REDIRECT_URI=http://127.0.0.1:8000/spotify/redirect
```
The URI must match exactly, including trailing slash and protocol.

- **SPOTIFY_CLIENT_ID**: Obtain this from your [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).
- **SPOTIFY_CLIENT_SECRET**: Obtain this from your [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).
- **SPOTIFY_REDIRECT_URI**: This should match the Redirect URI you configured in your Spotify Developer application. For local development, `http://127.0.0.1:8000/spotify/redirect` is commonly used.

#### Database Migrations

Apply the database migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

### 3. Frontend Setup (React)

Navigate to the `frontend` directory and install JavaScript dependencies:

```bash
cd frontend
npm install  # or yarn install
```

Then, build the frontend assets. For development with live updates:

```bash
npm run dev
```

For a production build:

```bash
npm run build
```

### 4. Run the Django Server

In a new terminal, navigate back to the root `music_controller` directory and start the Django development server:

```bash
cd .. # if you are in the frontend directory
python manage.py runserver
```

### 5. Access the Application

Open your web browser and navigate to `http://127.0.0.1:8000` to access the application.
