import smtplib

server = smtplib.SMTP_SSL("smtp.gmail.com", 465)
server.login("site.cryptoneon@gmail.com", "adityahire")
server.sendmail("site.cryptoneon@gmail.com", "narayananadi010@gmail.com", "Bitcoin price touched 3590000 go check out")
server.quit()
