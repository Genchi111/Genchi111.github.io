from functools import partial
from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

# ==========================================
# ВСТАВЬТЕ ПУТЬ ИЛИ ИМЯ ВАШЕГО ФАЙЛА СЮДА:
HTML_FILE = "index.html"
# ==========================================

PORT = 8000


class CustomHandler(SimpleHTTPRequestHandler):

  def do_GET(self):
    # Если открываем корень сайта, подменяем путь на имя вашего файла
    if self.path == "/":
      self.path = "/" + os.path.basename(HTML_FILE)
    return super().do_GET()


def run():
  # Проверяем, существует ли указанный файл
  if not os.path.exists(HTML_FILE):
    print(f"❌ Ошибка: Файл '{HTML_FILE}' не найден!")
    print("Проверьте правильность имени или пути к файлу.")
    return

  # Определяем папку, в которой лежит ваш HTML, чтобы подгружались CSS и картинки
  directory = os.path.dirname(os.path.abspath(HTML_FILE))
  handler = partial(CustomHandler, directory=directory)

  server_address = ("127.0.0.1", PORT)
  httpd = HTTPServer(server_address, handler)

  url = f"http://localhost:{PORT}"
  print(f"\n✅ Сайт запущен! Нажмите на ссылку ниже (или Ctrl + клик):")
  print(f"👉 {url}\n")
  print("Для остановки сервера нажмите Ctrl + C")

  try:
    httpd.serve_forever()
  except KeyboardInterrupt:
    print("\nСервер остановлен.")
    httpd.server_close()


if __name__ == "__main__":
  run()

