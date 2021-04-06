for /R "C:\Users\madhu\projects\h5cssjs\glomidze\css-source\CODES" %%I in ("*.zip") do (
  "C:\Program Files\7-Zip\7z.exe" x -y -o"%%~dpI" "%%~fI" 
) 
