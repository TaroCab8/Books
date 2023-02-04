from socket import *
import time

serverName="hostname"
serverPort=12000

clientSocket = socket(AF_INET, SOCK_DGRAM)
clientSocket.settimeout(1)

for x in range(11):
    startTime = time.time()
    
    message= ("Sequence: " + str(x) + " ")
    clientSocket.sendto(message.encode(),(serverName,serverPort))
    
    try:
        modifiedMessage,serverAddress = clientSocket.recvfrom(2048)
        endTime = time.time()
        totalTime= endTime - startTime
        print(modifiedMessage.decode()  + ", RTT = " + str(totalTime))
    except Exception as socket_timeout:
        print(message.upper() + ", Packet was lost.")
    
clientSocket.close()




#Sending up to 10 ping message to server

# receive a corresponding pong messsage back from the server in less than a sec

# determine the delay between ping and pong