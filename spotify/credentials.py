import os
from pathlib import Path
from dotenv import load_dotenv

# 1. このファイルの場所を取得
# 2. その 1つ上の階層（親フォルダ）にある .env を指すように設定
BASE_DIR = Path(__file__).resolve().parent.parent
env_path = BASE_DIR / '.env'

# 3. パスを明示して読み込む
load_dotenv(dotenv_path=env_path)

# あとは今まで通り
CLIENT_ID = os.environ.get('SPOTIFY_CLIENT_ID')
CLIENT_SECRET = os.environ.get('SPOTIFY_CLIENT_SECRET')
REDIRECT_URI = os.environ.get('SPOTIFY_REDIRECT_URI')