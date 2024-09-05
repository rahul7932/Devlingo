import os
from supabase import create_client, Client
from dotenv import load_dotenv, find_dotenv

# run from /backend dir
dotenv_path = find_dotenv(usecwd=True)
load_dotenv(dotenv_path)

url: str = os.environ.get("DEVLINGO_SUPABASE_URL")
key: str = os.environ.get("DEVLINGO_SUPABASE_KEY")

supabase: Client = create_client(url, key)

def get_all_courses():
    response = supabase.table("courses").select("*").execute()
    return response

def get_sections():
    


print(get_course())
