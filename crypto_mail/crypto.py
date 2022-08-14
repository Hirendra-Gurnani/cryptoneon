import requests
import mysql.connector
import re
import csv
import smtplib


def mailer():
    regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="cryptoneon"
    )

    mycursor = mydb.cursor()
    result = []
    sql = "SHOW TABLES;"
    mycursor.execute(sql)
    tempval = mycursor.fetchall()
    for x in range(len(tempval)):
        if re.fullmatch(regex, tempval[x][0]):
            result.append(tempval[x][0])

    # print(result)
    result_coins = []
    for num in range(len(result)):
        sql = "SELECT * FROM `" + result[num] + "`;"
        mycursor.execute(sql)
        tempval = mycursor.fetchall()
        result_coins.append({result[num]: []})
        for x in range(len(tempval)):
            result_coins[num][result[num]].append({'coin': tempval[x][0], 'price': tempval[x][1]})
    coinlist = []
    # print(result_coins[1])
    filename = "coinvalue.csv"
    with open(filename, 'r') as data:
        for line in csv.DictReader(data):
            coinlist.append(line)

    # print(coinlist)
    for x in range(len(result)):
        for y in result_coins[x]:
            for z in range(len(result_coins[x][y])):
                # print(result_coins[x][y][z])
                for value in range(len(coinlist)):
                    if coinlist[value]["coin"] == result_coins[x][y][z]["coin"]:
                        if round(float(coinlist[value]["old_value"])) <= round(float(coinlist[value]["new_value"])):
                            if round(float(coinlist[value]["old_value"])) <= round(float(result_coins[x][y][z]["price"])) <= round(float(coinlist[value]["new_value"])):

                                print("email sent to "+result[x]+" for "+result_coins[x][y][z]["coin"])
                                server = smtplib.SMTP_SSL("smtp.gmail.com", 465)
                                server.login("site.cryptoneon@gmail.com", "adityahire")
                                server.sendmail("site.cryptoneon@gmail.com",result[x],result_coins[x][y][z]["coin"]+" price touched "+str(result_coins[x][y][z]["price"])+" go check out")
                                server.quit()
                                sql = "UPDATE `"+result[x]+"` SET price = 0 WHERE id = '"+result_coins[x][y][z]['coin']+"'"
                                mycursor.execute(sql)
                                mydb.commit()

                        elif round(float(coinlist[value]["old_value"])) >= round(float(coinlist[value]["new_value"])):
                            if round(float(coinlist[value]["new_value"])) <= round(float(result_coins[x][y][z]["price"])) <= round(float(coinlist[value]["old_value"])):

                                print("email sent to " + result[x] + " for " + result_coins[x][y][z]["coin"])
                                server = smtplib.SMTP_SSL("smtp.gmail.com", 465)
                                server.login("site.cryptoneon@gmail.com", "adityahire")
                                server.sendmail("site.cryptoneon@gmail.com", result[x], result_coins[x][y][z]["coin"]+" price dropped below"+str(result_coins[x][y][z]["price"])+" go check out")
                                server.quit()
                                sql = "UPDATE `" + result[x] + "` SET price = 0 WHERE id = '" + result_coins[x][y][z]['coin']+"'"
                                mycursor.execute(sql)
                                mydb.commit()



